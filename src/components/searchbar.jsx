import { useState } from "react"


const Searchbar = ({setTopic}) => {
    return (
    <div>
        <label htmlFor="searchbar">Search (WIP):</label>
       {/* <input id="searchbar" onChange={(e) => setSearch(e.target.value)} type="text"></input> */}
       <select id="topicselect" onChange={(e) => setTopic(e.target.value)}>
       {/* <option value="Any">Any</option> */}
           <option value="Coding">Coding</option>
           <option value="Cooking">Cooking</option>
           <option value="Football">Football</option>
           </select>
    </div>
    )
}

export default Searchbar