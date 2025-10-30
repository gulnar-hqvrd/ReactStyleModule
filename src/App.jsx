import "./App.css";
import Button from "./Button";
import Lazyload from "./Lazyload";
import Loading from "./Loading";
import Test from "./Test";
import TestComponent from "./TestComponent";
import UserList from "./UserList";
import { useState, useEffect } from "react";
import AppUseMemo from './AppUseMemo';

const UserListWithLoading = Loading(UserList);

function App() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  // const ref = useRef(null);
  // const inputRef = useRef(null);

  // useEffect(() => {
  //   ref.current.style.backgroundColor = "blue";

  //   document.addEventListener("scroll",()=>{
  //     console.log("sxxx")
  //   })
  //   return  document.removeEventListener("scroll",()=>{})
  // }, []);

  // useEffect(() => {
  //   let interval = setInterval(() => {
  //     console.log("Workingg");
  //   }, 1000);

  //   return()=>{
  //     clearInterval(interval)
  //     console.log("Təmizləndi");
  //   }
  // },[]);

  // useEffect(() => {
  //   let handleResize = () => console.log(window.innerWidth);
  //   window.addEventListener("resize", handleResize);

  //   return () => {
  //     window.removeEventListener("resize", handleResize);
  //   };
  // }, []);

  // useEffect(() => {
  //   async function getData() {
  //     let res = await fetch("https://jsonplaceholder.typicode.com/posts");
  //     let data = await res.json();
  //     console.log(data);
  //   }
  //   getData();
  // } ,[]);

  // let path = require("path")

  // console.log(ref);

  useEffect(() => {
    setTimeout(() => {
      setUsers([
        { id: 1, name: "Gulnar" },
        { id: 2, name: "Aysel" },
      ])
      setLoading(false);
    }, 2000);
  }, []);

  return (
    <>
      {/* <TestComponent />
      <Lazyload />
      <Test/>
      <Button/> */}
      <UserListWithLoading isLoading={loading} users={users} />;
      <AppUseMemo/>
    </>
  );
}

export default App;
