import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { fetchAllTransactions, getUserBalance } from "../../redux/reducers/transactions/actions";
import axios from "axios";
import Loader from "../common/Loader";
import Form from "./Form";
import RowTransaction from "./RowTransaction";
import { OperationsStyled } from "./OperationsStyled";

const api_url = process.env.REACT_APP_BACKEND;

function Operations() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(true);
  const [reloadData, setReloadData] = useState(false);
  let balance = useSelector((state) => state.transactions.userBalance);
  let data = useSelector((state) => state.transactions.allTransactions);

  const nOfTransactions = data?.length || 0;

  useEffect(() => {
    let mounted = true;
    if (mounted) {
      axios({
        method: "get",
        withCredentials: true,
        url: `${api_url}/user/protected-route`,
      })
        .then(() => {
          if (mounted) {
            dispatch(fetchAllTransactions());
            setIsLoading(false);
            dispatch(getUserBalance());
          }
        })
        .catch(() => {
          if (mounted) navigate("/login");
        });
    }
    return () => (mounted = false);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [reloadData]);

  return (
    <OperationsStyled>
      <div className="balance">
        <span>Balance ${balance}</span>
      </div>
      <div className="form">
        <Form reloadData={reloadData} setReloadData={setReloadData} />
      </div>
      <div className="title-abm">
        <span>Historial de transacciones</span>
      </div>
      <div className="transactions">
        <table>
          <thead>
            <tr className="table-head-row">
              <th>Tipo</th>
              <th>Fecha</th>
              <th>Monto</th>
              <th>Concepto</th>
            </tr>
          </thead>
          {isLoading ? (
            <Loader />
          ) : (
            <tbody>
              {data &&
                data.map((t, i) => (
                  <RowTransaction
                    reloadData={reloadData}
                    setReloadData={setReloadData}
                    t={t}
                    key={i}
                  ></RowTransaction>
                ))}
              {/* Display a prompt in case there's no transactions in the database */}
              {nOfTransactions === 0 && (
                <div className="no-transactions">Sin transacciones registradas</div>
              )}
              {/* Add empty rows in case transactions are less than 10 */}
              {nOfTransactions < 10 &&
                [...Array(10 - nOfTransactions)].map((v, i) => (
                  <tr className="empty-cells" key={i + 9}>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                  </tr>
                ))}
            </tbody>
          )}
        </table>
      </div>
    </OperationsStyled>
  );
}

export default Operations;
