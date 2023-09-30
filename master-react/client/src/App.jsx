import React, { useEffect, useState } from 'react'
import { MyContext } from './context/GlobalState'
import Community from "./pages/Community"
import JoinUs from "./pages/JoinUs"


const App = () => { 
  const [data,setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('http://localhost:3000/community')
        if(!response.ok) throw new Error("There is problem")
        const jsonData = await response.json();
        setData(jsonData)
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    }
    fetchData()
  },[])

  console.log(data);

  return (
    <MyContext.Provider value={{data}}>
      <Community />
      <JoinUs />
    </MyContext.Provider>
  )
}

export default App;