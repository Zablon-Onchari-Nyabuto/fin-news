import React from "react";
import FinancialNews from "./FinancialNews";

function FinancialList({financials}) {
  console.log(financials)
  return (
    <table className="ui celled striped padded table">
      <tbody>
        <tr>
          <th>
            <h3 className="ui center aligned header">Date</h3>
          </th>
          <th>
            <h3 className="ui center aligned header">Description</h3>
          </th>
          <th>
            <h3 className="ui center aligned header">Category</h3>
          </th>
          <th>
            <h3 className="ui center aligned header">strength</h3>
          </th>
        </tr>
        {financials.map((financial) => (
        <FinancialNews key={financial.id} financials={financial}/>))}
      </tbody>
    </table>
  );
}

export default FinancialList; 