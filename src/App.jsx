import "./App.css";
import Lazyload from "./Lazyload";
import Test from "./Test";
import TestComponent from "./TestComponent";

function App() {
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

  return (
    <>
      <TestComponent />
      <Lazyload />
      <Test/>
    </>
  );
}

export default App;
