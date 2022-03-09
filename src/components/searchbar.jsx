import { useState } from "react"


const Searchbar = ({setQuery}) => {

    const [topicSelection, setTopicSelection] =useState()

    return (
    <div>
        {/* <label htmlFor="searchbar">Search (WIP):</label> */}
       {/* <input id="searchbar" onChange={(e) => setSearch(e.target.value)} type="text"></input> */}
       {/* // Refactor to use Navigate */}
       <select id="topicselect" onChange={(e) => setQuery(e.target.value)}>
           <option hidden></option>
            <option value="">Any</option>
           <option value="?topic=coding">Coding</option>
           <option value="?topic=cooking">Cooking</option>
           <option value="?topic=football">Football</option>
           </select>
    </div>
    )
}

export default Searchbar