import axios from "axios";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { fetchLastTransactions, getUserBalance } from "../../redux/reducers/transactions/actions";
import Loader from "../common/Loader";
import { HomeStyled } from "./HomeStyled";
import RowTransaction from "./RowTransaction";

function Home() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(true);
  let balance = useSelector((state) => state.transactions.userBalance);
  let data = useSelector((state) => state.transactions.lastTransactions);

  const nOfTransactions = data?.length || 0;

  useEffect(() => {
    let mounted = true;
    if (mounted) {
      axios({
        method: "get",
        withCredentials: true,
        url: "http://localhost:3001/user/protected-route",
      })
        .then(() => {
          dispatch(fetchLastTransactions());
          setIsLoading(false);
          dispatch(getUserBalance());
        })
        .catch(() => navigate("/login"));
    }
    return () => (mounted = false);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <HomeStyled>
      <div className="balance">
        <span>Balance ${balance}</span>
      </div>
      <div className="title-home">
        <span>Sus últimas transacciones</span>
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
              {data && data.map((t, i) => <RowTransaction t={t} key={i}></RowTransaction>)}
              {/* Display a prompt in case there's no transactions in the database */}
              {nOfTransactions === 0 && (
                <div className="no-transactions">Añade nuevas transacciones para verlas aquí</div>
              )}
              {/* Add empty rows in case transactions are less than 10 */}
              {nOfTransactions < 10 &&
                [...Array(10 - nOfTransactions)].map((v, i) => (
                  <tr className="empty-cells" key={i + 9}>
                    <td>foo</td>
                    <td>foo</td>
                    <td>foo</td>
                    <td>foo</td>
                  </tr>
                ))}
            </tbody>
          )}
        </table>
      </div>
    </HomeStyled>
  );
}

export default Home;
