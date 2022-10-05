// import React, { useState } from "react";

// function FinancialForm({ addFin }) {
//   const [financialFormData, setFinancialFormData] = useState({
//     date: "", 
//     description: "", 
//     category: "", 
//     strength: "",
//   })

//   function handleChange(e){
//     const key = e.target.id
//     setFinancialFormData({
//       ...financialFormData,
//       [key]: e.target.value
//     })
//   }

//   function handleSubmit(e) {
//     e.preventDefault()
//   fetch("http://localhost:3000/financials", {
//     method: "POST",
//     headers: {
//       "Content-Type": "application/json",
//     },
//     body: JSON.stringify(financialFormData),
//   })
//     .then((res) => res.json())
//     .then((data) => addFin(data));
//   }

//   return (
//     <div className="ui segment">
//       <form className="ui form" onSubmit={handleSubmit}>
//         <div className="inline fields">
//           <input type="date" name="date" value={financialFormData.date} id="date" placeholder="Date" onChange={handleChange}/>
//           <input type="text" name="description" value={financialFormData.description} id="description" placeholder="Description" onChange={handleChange}/>
//           <input type="text" name="category" value={financialFormData.category} id="category" placeholder="Category" onChange={handleChange}/>
//           <input type="number" name="strength" value={financialFormData.strength} id="strength" placeholder="Amount" onChange={handleChange} />
//         </div>
//         <button className="ui button" type="submit" >
//           Add News 
//         </button>
//       </form>
//     </div>
//   );
// }

// export default FinancialForm;
