import React, { useEffect, useState } from 'react'
// import { MyContext } from './context/GlobalState'
import Community from "./pages/Community"
import JoinUs from "./pages/JoinUs"
import { setData } from './features/usersSlice'
import { useSelector,useDispatch } from 'react-redux'


const App = () => { 
  // const [data,setData] = useState([]);
  const dispatch = useDispatch()

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('http://localhost:3000/community')
        if(!response.ok) throw new Error("There is problem")
        const jsonData = await response.json();
        // setData(jsonData)
        dispatch(setData(jsonData));
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    }
    fetchData()
  },[dispatch])

  // console.log(data);

  return (
    <>
      <Community />
      <JoinUs />
    </>
  )
}

export default App;