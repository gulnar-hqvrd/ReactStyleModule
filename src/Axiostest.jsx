import React, { useEffect } from "react";
import axios from "axios";

let BASE_URL = "http://localhost:3000";

function Axiostest() {
  //   const getAllUsers = async () => {
  //     const response = await axios.get(BASE_URL + "/users");
  //     console.log(response.data);
  //   };

  //   const getUserById = async (userid) => {
  //     const response = await axios.get(BASE_URL + "/users/" + userid);
  //     console.log(response.data);
  //   };

  //   const createUser = async (newUser) => {
  //     let response = await axios.post(`${BASE_URL}/users`, newUser);
  //     console.log(response.data);
  //   };

  //   const updateUser = async (userId, userName) => {
  //     let response = await axios.put(`${BASE_URL}/users/${userId}`, userName);
  //     console.log(response.data);
  //   };

  const deleteuser = async (userId) => {
    let response = await axios.delete(`${BASE_URL}/users/${userId}`);
    console.log(response);
  };

  useEffect(() => {
    // getAllUsers();
    // getUserById(2)
    // let newUser = {
    //   username: "Gunay",
    //   password: 123,
    // };
    // createUser(newUser);
    // updateUser("2", {
    //   username: "Gunay",
    //   password: 123,
    // });

    deleteuser("2");
  }, []);

  return <div></div>;
}

export default Axiostest;
