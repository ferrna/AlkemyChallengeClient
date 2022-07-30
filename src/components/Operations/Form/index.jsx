import React, { useRef, useState } from "react";
import { useDispatch } from "react-redux";
import { AsideButton, FormStyled } from "./FormStyled";
import { BsPlusSquare } from "react-icons/bs";
import { postTransaction } from "../../../redux/reducers/transactions/actions";

const bgwhite = { backgroundColor: "#e9e9ed" };
const bgblue = {
  backgroundImage: "linear-gradient(to right, #4c7ed5 0 20%, #1b92bb)",
};

function Form({ reloadData, setReloadData }) {
  const initialState = {
    type: "",
    amount: "",
    date: "",
    description: "",
  };
  const [transactionValues, setTransactionValues] = useState(initialState);
  const formRef = useRef();
  const dispatch = useDispatch();

  const handleSubmitForm = async () => {
    await dispatch(
      postTransaction({
        type: transactionValues.type,
        amount: transactionValues.amount,
        date: transactionValues.date,
        description: transactionValues.description,
      })
    );
    setReloadData(!reloadData);
    setTransactionValues(initialState);
    handleShowForm(formRef);
  };

  const handleChange = (e) => {
    setTransactionValues({ ...transactionValues, [e.target.name]: e.target.value });
  };

  const handleShowForm = (formRef) => {
    formRef.current.style.display === "none"
      ? (formRef.current.style.display = "block")
      : (formRef.current.style.display = "none");
  };

  return (
    <>
      <FormStyled>
        <BsPlusSquare
          onClick={() => handleShowForm(formRef)}
          style={{ margin: "0 1.4rem 0 0", "&:hover": { cursor: "pointer" } }}
        />
        <span>Agregar nueva transacción</span>
        <div className="form" ref={formRef}>
          <div className="form-top">
            <div className="form-top__buttons">
              <button
                style={transactionValues.type === "Ingress" ? bgblue : bgwhite}
                name="type"
                value="Ingress"
                onClick={(e) => handleChange(e)}
              >
                Ingreso
              </button>
              <button
                style={transactionValues.type === "Egress" ? bgblue : bgwhite}
                name="type"
                value="Egress"
                onClick={(e) => handleChange(e)}
              >
                Egreso
              </button>
            </div>
            <div className="form-top__amountDiv">
              <input
                placeholder="$    monto"
                name="amount"
                value={transactionValues.amount}
                onChange={(e) => {
                  if (!isNaN(Number(e.target.value))) handleChange(e);
                }}
              ></input>
            </div>
          </div>
          <div className="form-dateDiv">
            <i>Date:&nbsp;</i>
            <input
              type="datetime-local"
              name="date"
              value={transactionValues.date}
              onChange={(e) => handleChange(e)}
            ></input>
          </div>
          <div className="form-descriptionDiv">
            <textarea
              placeholder="Concepto (opcional)"
              name="description"
              value={transactionValues.description}
              onChange={(e) => handleChange(e)}
            ></textarea>
          </div>
        </div>
      </FormStyled>
      {transactionValues.type.length > 0 &&
        transactionValues.amount.length > 0 &&
        transactionValues.date.length > 0 && (
          <AsideButton>
            <button
              style={{
                backgroundImage: "linear-gradient(to right, #4c7ed5 0 20%, #1b92bb)",
              }}
              onClick={handleSubmitForm}
            >
              Continuar
            </button>
          </AsideButton>
        )}
    </>
  );
}

export default Form;
