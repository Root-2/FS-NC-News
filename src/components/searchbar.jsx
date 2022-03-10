import { useEffect, useState } from "react"
import { getTopics } from "../api"

const Searchbar = ({setQuery}) => {

    const [loading, setLoading] = useState(true)
    const [topicSelection, setTopicSelection] =useState()
    const [topics, setTopics] =useState()

    useEffect(() => { 
        setLoading(true)
           getTopics().then((data) => {
            setTopics(data) 
               setLoading(false)     
               console.log(data)
           })
       }, [] )
    if(loading) { return ( <h2>Loading...</h2> ) }

    else {
        return (
    <div>
       <select id="topicselect" onChange={(e) => setQuery(e.target.value)}>
           <option hidden></option>
            <option value="">All</option>
            {topics.map((topic)=> {
                console.log(topic)
                return <option> {topic.slug} </option>
            })}
           </select>
    </div>
        )
    }
}

export default Searchbar