import React, { useRef, useState } from "react";
import { RowEditingStyled } from "./RowEditingStyled";
import { useDispatch } from "react-redux";
import { putTransaction } from "../../../../redux/reducers/transactions/actions";
import swal from "sweetalert";

function RowEditing({ t, setIsEditing }) {
  const [date, setDate] = useState(t.date);
  const [amount, setAmount] = useState(t.amount);
  const [description, setDescription] = useState(t.description);

  const refAmount = useRef();

  const dispatch = useDispatch();

  const handleEditSubmit = async () => {
    if (refAmount.current.value !== "") {
      await dispatch(
        putTransaction({
          date,
          amount,
          description,
          transaction_id: t.transaction_id,
        })
      );
      swal({
        title: `Transacción actualizada con éxito`,
        icon: "success",
        button: "Accept",
      }).then((res) => window.location.reload(false));
    }
  };

  return (
    <RowEditingStyled>
      <td>{t.type}</td>
      <td>
        <input type="datetime-local" value={date} onChange={(e) => setDate(e.target.value)} />
      </td>
      <td>
        <input
          value={amount}
          ref={refAmount}
          onChange={(e) => {
            if (!isNaN(Number(e.target.value))) setAmount(e.target.value);
          }}
        />
      </td>
      <td className="descriptionTd">
        <input value={description} onChange={(e) => setDescription(e.target.value)} />
        <button onClick={handleEditSubmit}>✔</button>
        <button onClick={() => setIsEditing(false)}>✖</button>
      </td>
    </RowEditingStyled>
  );
}

export default RowEditing;
