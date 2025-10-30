// import { useState } from "react";

// function TestComponent() {

//     function Counter (){
//         let [count ,setCount] = useState(0)

//         return(
//             <div>
//                 <h1>Counter :{count}</h1>
//                 <button onClick={()=>setCount(count + 1)}>Increase</button>
//                 <button onClick={()=>setCount (count - 1)}>Decrease</button>
//             </div>
//         )
//     }

//     return(
//         <div>
//             <Counter/>
//         </div>
//     )
// const App = () => <h1>Salam, React!</h1>;
//   return (
//     <div>
//       {/* <p>bunun deyeri{a}</p> */}
//       {/*
//     {
//         name.map((name)=>(
//             <div style={{background:"red" , border:"1px solid black"}}>{name}</div>
//         ))
//     } */}
//     <App/>
//     </div>
//   );

// export default TestComponent;

// import React, { useState } from "react";

// function TestComponent() {

//   let [names, setNames] = useState(["Gulnar", "Ali", "Vali", "Gunay"]);

//   return <div>

//     {names.map((name , index)=> (<div key={index}>{name} </div>))}
//   </div>;
// }

// export default TestComponent;

// import React, { useEffect, useState } from "react";

// function TestComponent() {
//   let [firstaname, setFirtname] = useState("");
//   let [lastname, setLastname] = useState("");

//   useEffect(() => {
//     console.log("Hemise isleyir");
//   });

//   useEffect(() => {
//     console.log("Ilk rander edilende isleyir");
//   }, []);

//   useEffect(() => {
//     console.log("State deyeri FIrtname deyisende ve ilk render edilende isleyir");
//   }, [firstaname]);

//   useEffect(() => {
//     console.log("State deyeri lastname deyisende ve ilk render edilende isleyir");
//   }, [lastname]);

//   return (
//     <div>
//       UseEffect{" "}
//       <button onClick={() => setFirtname("Gulnar")}> Adini deyisdir</button>
//       <button onClick={() => setLastname("Hagverdiyeva")}> Adini deyisdir</button>
//     </div>
//   );
// }

// export default TestComponent;

// import React from "react";
// import { useLayoutEffect } from "react";

// function TestComponent() {
//   useLayoutEffect(() => {
//     const box = document.getElementById("box");
//     console.log(box.offsetHeight);
//     box.style.color = "red";
//   });

//   return (
//     <div id="box">
//       Salam, React!
//     </div>
//   );
// }

// export default TestComponent;

// import React from "react";
import { useCounter } from "./useCounter";

function TestComponent() {
  const { count, increase, decrease, reset } = useCounter(0);
  return (
    <div style={{ textAlign: "center", marginTop: "40px" }}>
      <h2 className="title">Sayğac: {count}</h2>
      <button onClick={increase}>Artır</button>
      <button onClick={decrease}>Azalt</button>
      <button onClick={reset}>Sıfırla</button>
    </div>
  );
}

export default TestComponent;
