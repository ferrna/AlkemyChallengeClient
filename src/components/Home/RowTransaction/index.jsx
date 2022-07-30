import React from "react";
import { RowTransactionStyled } from "./RowTransactionStyled";

function RowTransaction({ t }) {
  return (
    <RowTransactionStyled>
      <td>{t.type}</td>
      <td>{t.date.slice(0, 13).replace(/-|-/g, "/").replace("T", "  ")} hs</td>
      <td>${t.amount}</td>
      <td className="descriptionTd">
        <div className="textdiv">
          {t.description ? (
            t.description
          ) : (
            <i style={{ color: "grey", fontSize: "14px" }}>Sin descripción</i>
          )}
        </div>
      </td>
    </RowTransactionStyled>
  );
}

export default RowTransaction;
