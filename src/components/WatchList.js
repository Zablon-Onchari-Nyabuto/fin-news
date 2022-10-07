import React from "react";
import FinancialList from "./FinancialList";
import Search from "./Search";
import FinancialForm from "./FinancialForm";
import "react-bootstrap";
import { useEffect, useState } from "react";

function WatchList() {
  const [financials, setFinancials] = useState([]);
  const [search, setSearch] = useState("");
  console.log(financials)

  useEffect(() => {
    fetch("https://glacial-savannah-39467.herokuapp.com/financials")
      .then((res) => res.json())
      .then((data) => {
        setFinancials(data)
      })
  }, []);

  function addFinancial(newFinancial) {
    const updateFinancials = [...financials, newFinancial]
    setFinancials(updateFinancials)
  }

  function searchFinancial(newSearch) {
    setSearch(newSearch)
  }

  return (
    <div>
      <Search search={search} searchFin={searchFinancial} />
      <FinancialForm addFin={addFinancial} />
      <FinancialList financials={financials} search={search} />
    </div>
  );
}

export default WatchList;