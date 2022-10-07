import React from "react";

function FinancialNews({ financials }) {
  return (
    <tr>
      <td>{financials.date}</td>
      <td>{financials.description}</td>
      <td>{financials.category}</td>
      <td>{financials.strength}</td>
    </tr>
  );
}

export default FinancialNews;