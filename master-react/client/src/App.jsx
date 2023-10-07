import React, { useEffect, useState } from "react";
// import { MyContext } from './context/GlobalState'
import Community from "./pages/Community";
import JoinUs from "./components/JoinUs";
import { setData } from "./features/usersSlice";
import { useSelector, useDispatch } from "react-redux";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import ErrorPage from "./pages/ErrorPage";
import Card from "./components/Card";
import CommunityDetail from "./components/CommunityDetail";

const App = () => {
  // const [data,setData] = useState([]);
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("http://localhost:3000/community");
        if (!response.ok) throw new Error("There is problem");
        const jsonData = await response.json();
        // setData(jsonData)
        dispatch(setData(jsonData));
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchData();
  }, [dispatch]);

  // console.log(data);

  return (
    <Routes>
      <Route index path="/" element={<Home />} />
      <Route path="/community">
        <Route index element={<Community />} />
        <Route path=":id" element={<CommunityDetail />} />
      </Route>
      <Route path="*" element={<ErrorPage />} />
    </Routes>
  );
};

export default App;
