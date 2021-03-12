const express = require("express");
const mysql = require("mysql");
const cors = require("cors");
// const bodyParser = require('body-parser');
const Routes = require("./Routes");

const app = express();

app.use(express.json());
app.use(cors());

// const db = mysql.createConnection({
//   user: "root",
//   host: "localhost",
//   password: "",
//   database: "hungry-bird",
// });

app.use("/api", Routes);

// app.post("/register", (req, res) => {
//     // console.log(req);
//   const firstName = req.body.firstName;
//   const lastName = req.body.lastName;
//   const email = req.body.email;
//   const password = req.body.password;
//   db.query(
//     "INSERT INTO users(firstName,lastName,email,password) VALUES(?,?,?,?)",
//     [firstName, lastName, email, password],
//     (err, result) => {
//     //   console.log(err);
//       if (err.errno === 1062) {
//         res.send("Duplicate Email");
//       }
//     else if (err) {
//         res.send("Error Occured");
//       } else {
//         res.send("Data is submitted succesfully");
//       }
//     }
//   );
// });

// ----------For date insertion---------------------
// app.post('/demo',(req,res)=>{
//     // const demo = req.body.userdemo;
//     const fromdate = req.body.selectedDate;

//     db.query("INSERT INTO date(fromdate) VALUES(?)",
//     [fromdate],
//     (err,result)=>{
//         if(err){
//             console.log(res);

//         }else{
//             console.log('result is',result)
//             res.send({messagee:'succesfully inserted'})
//         }
//     });
// });
// ----------To date insertion----------------------

// app.post("/login", (req, res) => {
//   const email = req.body.email;
//   const password = req.body.password;
//   db.query(
//     "SELECT * FROM users WHERE email= ? AND password = ? ",
//     [email, password],
//     (err, result) => {
//       if (err) {
//         res.send({ err: err });
//       }
//       if (result.length === 1) {
//         res.send(result);
//       } else {
//         res.send({ message: "wrong username/password combination" });
//       }
//     }
//   );
// });

app.listen(3001, () => {
  console.log("running server");
});
