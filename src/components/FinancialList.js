import React from "react";
import FinancialNews from "./FinancialNews";

function FinancialList({ financialListed, search}) {

  const filtered = financialListed.filter((fin) => {
    let result = fin.description.toLowerCase().includes(search)
    return result;
  })

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
        {filtered.map((fin) => (
          <FinancialNews key={fin.id} fin={fin} />
        ))}
      </tbody>
    </table>
  );
}

export default FinancialList; 