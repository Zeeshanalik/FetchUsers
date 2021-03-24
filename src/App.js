import axios from "axios"
import React, { useState, useEffect } from "react"
import Table from "./components/Table.js"
const App = () => {
const [items, setItems] = useState([])
const fetchData = () => 
  axios.request({
    method:'GET',
    url:'https://jsonplaceholder.typicode.com/users'
  })

useEffect(() => {
  fetchData().then((response)=>{
  setItems(response.data)
  

  })
}, [setItems])

  const propsObject = {
    items,
    setItems

  }
return (
  <> 
    <h1></h1>
    <Table propsObject={propsObject}/>
  </>
)
}
export default App

