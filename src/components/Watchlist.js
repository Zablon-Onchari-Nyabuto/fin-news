import React from "react";
function WatchList (){
    return(
        <div>
        <ListForm onListFormSubmit={listFormSubmit} />
        <ul>
          {list.map((list) => (
            <List key={list.id} title={list.title} />
          ))}
        </ul>
      </div>
    );
}

export default WatchList;