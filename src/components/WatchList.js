import React, { useEffect, useState } from "react";
import FinancialList from "./FinancialList";
import Search from "./Search";
import FinancialForm from "./FinancialForm";
import "react-bootstrap";

function WatchList() {
  const [financialListed, setFinancialsListed] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    fetch("http://localhost:3000/financials")
      .then((res) => res.json())
      .then((data) => setFinancialsListed(data));
    }, []);

  function addFinancial(newFinancial) {
    const updateFinancials = [...financialListed, newFinancial]
    setFinancialsListed(updateFinancials)
  }
  
  function searchFinancial(newSearch){
    setSearch(newSearch)
  }

  return (
    <div>
      <Search search={search} searchFin={searchFinancial} />
      <FinancialForm addFin={addFinancial}/>
      <FinancialList FinancialListed={financialListed} search={search} />
    </div>
  );
}

export default WatchList;