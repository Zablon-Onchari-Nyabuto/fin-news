import React, { useEffect, useState } from "react";
import FinancialList from "./FinancialList";
import FinancialForm from "./FinancialForm";
import "react-bootstrap";

function WatchList() {
  const [financials, setFinancials] = useState([]);

  useEffect(() => {
    fetch("https://glacial-savannah-39467.herokuapp.com/financials")
      .then((res) => res.json())
      .then((data) => {
     setFinancials(() => [...data])
      })
  }, []);
  // console.log(financials)

  function addFinancial(newFinancial) {
    const updateFinancials = [...financials, newFinancial]
    setFinancials(updateFinancials)
  }

  return (
    <div>
      <FinancialForm addFin={addFinancial} />
      <FinancialList financials={financials} />
    </div>
  );
}

export default WatchList;