/** source/controllers/users.ts */
import {Request, Response } from "express";
import axios, { AxiosResponse } from "axios";

// const data = require("../../data.json");

interface User {
  readonly id: Number;
  name: String;
  password: String;
}

// getting all users
const getUsers = async (req: Request, res: Response) => {
  // get some users
  let result: AxiosResponse = await axios.get(`http://localhost:4000/userDetails`);
  let users: [User] = result.data;
  return res.status(200).json({
    message: users,
  });
};

// getting a single user
const getUser = async (req: Request, res: Response) => {
  // get the user id from the req
  let id: string = req.params.id;
//   let flag: number = 0;
//   // get the user
//   for (let item of data.userDetails) {
//     if (item.id == id) {
//     //   let user: User = item;
    let result: AxiosResponse = await axios.get(`http://localhost:4000/userDetails/${id}`);
    let user: User = result.data;
    //   flag = 1;
      return res.status(200).json({
        message: user,
      });
    }
//   }
//   if (flag === 0) {
//     return res.status(400).json({
//       message: "User Not Found",
//     });
//   }
// };

// updating a user
const updateUser = async (req: Request, res: Response) => { 
    // get the user id from the req.params
    let id: string = req.params.id;
    // get the data from req.password
    let name: string = req.body.name ?? null;
    let password: string = req.body.password ?? null;
    // update the user
    // let flag: number = 0;
  // get the user
  let result: AxiosResponse = await axios.put(`http://localhost:4000/userDetails/${id}`,
        {name,password});
    let user: User = result.data;
    // for (let item of data.userDetails) {
    // if (item.id == id) {
    //   let user: User = item;
    //   flag = 1;
    //   user.name = name;
    //   user.password = password; 
      return res.status(200).json({
        message: "Updated succesfully" ,
        user:  user ,
      });
//     }
//   }
//   if (flag === 0) {
//     return res.status(400).json({
//       message: "User Not Found",
//     });
//   }
};

// deleting a user
const deleteUser = async (req: Request, res: Response) => {
    // get the user id from req.params
    let id: string = req.params.id;
    // delete the user
//     let flag: number = 0;
//   // get the user
//   for (let i=0; i < data.userDetails.length; i++) {
//     if (data.userDetails[i].id == id) {
//         data.userDetails.splice(i,1);
//         flag = 1 ;
    let result: AxiosResponse = await axios.delete(`http://localhost:4000/userDetails/${id}`);
    let user: User = result.data;
        return res.status(200).json({
        message: "Deleted succesfully" 
      });
//     }
//   }
//   if (flag === 0) {
//     return res.status(400).json({
//       message: "User Not Found",
//     });
//   }
    
};

// adding a user
const addUser = async (req: Request, res: Response) => {
    // get the data from req.password
    let name: string = req.body.name;
    let password: string = req.body.password;

    let result: AxiosResponse = await axios.post(`http://localhost:4000/userDetails`,{name,password});
    let users: [User] = result.data;
//     // add the user
//     let id : number = data.userDetails.length + 1;
//     let user : User = {
//         id : id,
//         name : name,
//         password : password
//     }
//    data.userDetails.push(user)
//     // return response
    return res.status(200).json({
        message: "User Added Successfully",
        user : users
    });
};


const login = async (req: Request, res: Response) => {
    // get the user id from the req
    let name: string = req.body.name;
    let password: string = req.body.password;
    // // get the user
    // let item : User;
    // for (item of data.userDetails) {
    //     console.log(item)
    try{
    let result: AxiosResponse = await axios.get(`http://localhost:4000/userDetails?name=${name}`);
    let user: User = result.data[0];
      if (user.name == name && user.password == password) {
        // let user: User = item;
        return res.status(200).json({
            message: 'Login Successfull',
            user : user
      });
      }
}
catch{
    return res.status(400).json({
        message: "Invalid Credentials",
      });
}
 };



export default { getUsers, getUser, updateUser , deleteUser, addUser, login};
