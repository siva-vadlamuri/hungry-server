const express = require("express");
const db = require("./dbConnection");
const jwt = require("jsonwebtoken");
const Routes = express.Router();

Routes.post("/register", (req, res) => {
  const firstName = req.body.firstName;
  const lastName = req.body.lastName;
  const email = req.body.email;
  const password = req.body.password;
  db.query(
    "INSERT INTO users(firstName,lastName,email,password) VALUES(?,?,?,?)",
    [firstName, lastName, email, password],
    (err, result) => {
      //   console.log(err);

      if (err) {
        if (err.errno === 1062) {
          res.send("Duplicate Email");
        } else {
          res.send("Error Occured");
        }
      } else {
        res.status(200).send("Data is submitted succesfully");
      }
    }
  );
});

Routes.post("/login", (req, res) => {
  const email = req.body.email;
  const password = req.body.password;
  db.query(
    "SELECT * FROM users WHERE email= ? AND password = ? ",
    [email, password],
    (err, result) => {
      if (err) {
        res.send({ err: err });
      } 
      else if (result.length === 1) {
        const payload = { subject: result.id };
        const token = jwt.sign(payload, "secretKey");
        res.send({ token });
       } 
      // else {
      //   res.send({ message: "wrong username/password combination" });
      // }
    }
  );
});

Routes.get('/products',(req,res)=>{
    res.send([
    {
      id: 1,
      name: "TANDOORI",
      children: [
        {
          parentId: 1,
          amount: 1,
          childId: 1,
          childName: "TANDOORI CHICKEN",
          childImage:
            "https://1.bp.blogspot.com/-_Kvu1vu4aV0/XAtejE7kqJI/AAAAAAAAAr4/_cldZDrNK_c4YTPeF43JWPMUhR9yItzHgCLcBGAs/s640/Food%2BImages%2BIndian%2BWallpapers%2BHD.JPG",

          price: 320,
          isVeg: false,
          note: "discription",
        },
        {
          parentId: 1,
          amount: 1,
          childId: 2,
          childImage:
            "https://1.bp.blogspot.com/-_Kvu1vu4aV0/XAtejE7kqJI/AAAAAAAAAr4/_cldZDrNK_c4YTPeF43JWPMUhR9yItzHgCLcBGAs/s640/Food%2BImages%2BIndian%2BWallpapers%2BHD.JPG",
          childName: "CHICKEN TIKKA",
          price: 200,
          isVeg: false,
          note: "discription",
        },
        {
          parentId: 1,
          amount: 1,
          childId: 3,
          childImage:
            "https://1.bp.blogspot.com/-_Kvu1vu4aV0/XAtejE7kqJI/AAAAAAAAAr4/_cldZDrNK_c4YTPeF43JWPMUhR9yItzHgCLcBGAs/s640/Food%2BImages%2BIndian%2BWallpapers%2BHD.JPG",
          childName: "KALMI KABAB ",
          price: 160,
          isVeg: true,
          note: "discription",
        },
        {
          parentId: 1,
          amount: 1,
          childId: 4,
          childImage:
            "https://1.bp.blogspot.com/-_Kvu1vu4aV0/XAtejE7kqJI/AAAAAAAAAr4/_cldZDrNK_c4YTPeF43JWPMUhR9yItzHgCLcBGAs/s640/Food%2BImages%2BIndian%2BWallpapers%2BHD.JPG",
          childName: "RASHMI KABAB ",
          price: 270,
          isVeg: true,
          note: "discription",
        },
        {
          parentId: 1,
          amount: 1,
          childId: 5,
          childImage:
            "https://1.bp.blogspot.com/-_Kvu1vu4aV0/XAtejE7kqJI/AAAAAAAAAr4/_cldZDrNK_c4YTPeF43JWPMUhR9yItzHgCLcBGAs/s640/Food%2BImages%2BIndian%2BWallpapers%2BHD.JPG",
          childName: "TANDOORI KABAB ",
          price: 240,
          isVeg: false,
          note: "discription",
        },
        {
          parentId: 1,
          amount: 1,
          childId: 6,
          childImage:
            "https://1.bp.blogspot.com/-_Kvu1vu4aV0/XAtejE7kqJI/AAAAAAAAAr4/_cldZDrNK_c4YTPeF43JWPMUhR9yItzHgCLcBGAs/s640/Food%2BImages%2BIndian%2BWallpapers%2BHD.JPG",
          childName: "HARIALI TIKKA ",
          price: 190,
          isVeg: true,
          note: "discription",
        },
        {
          parentId: 1,
          amount: 1,
          childId: 7,
          childImage:
            "https://1.bp.blogspot.com/-_Kvu1vu4aV0/XAtejE7kqJI/AAAAAAAAAr4/_cldZDrNK_c4YTPeF43JWPMUhR9yItzHgCLcBGAs/s640/Food%2BImages%2BIndian%2BWallpapers%2BHD.JPG",
          childName: "MALAI TIKKA ",
          price: 210,
          isVeg: true,
          note: "discription",
        },
        {
          parentId: 1,
          amount: 1,
          childId: 8,
          childImage:
            "https://1.bp.blogspot.com/-_Kvu1vu4aV0/XAtejE7kqJI/AAAAAAAAAr4/_cldZDrNK_c4YTPeF43JWPMUhR9yItzHgCLcBGAs/s640/Food%2BImages%2BIndian%2BWallpapers%2BHD.JPG",
          childName: "PANEER TIKKA  ",
          price: 220,
          isVeg: true,
          note: "discription",
        },
        {
          parentId: 1,
          amount: 1,
          childId: 9,
          childImage:
            "https://1.bp.blogspot.com/-_Kvu1vu4aV0/XAtejE7kqJI/AAAAAAAAAr4/_cldZDrNK_c4YTPeF43JWPMUhR9yItzHgCLcBGAs/s640/Food%2BImages%2BIndian%2BWallpapers%2BHD.JPG",
          childName: " ACHARI CHICKEN KABAB ",
          price: 300,
          isVeg: true,
          note: "discription",
        },
        {
          parentId: 1,
          amount: 1,
          childId: 10,
          childImage:
            "https://1.bp.blogspot.com/-_Kvu1vu4aV0/XAtejE7kqJI/AAAAAAAAAr4/_cldZDrNK_c4YTPeF43JWPMUhR9yItzHgCLcBGAs/s640/Food%2BImages%2BIndian%2BWallpapers%2BHD.JPG",
          childName: "PANEER TIKKA  ",
          price: 220,
          isVeg: true,
          note: "discription",
        },
        {
          parentId: 1,
          amount: 1,
          childId: 11,
          childImage:
            "https://1.bp.blogspot.com/-_Kvu1vu4aV0/XAtejE7kqJI/AAAAAAAAAr4/_cldZDrNK_c4YTPeF43JWPMUhR9yItzHgCLcBGAs/s640/Food%2BImages%2BIndian%2BWallpapers%2BHD.JPG",
          childName: "FISH TIKKA BONELESS   ",
          price: 270,
          isVeg: true,
          note: "discription",
        },
        {
          parentId: 1,
          amount: 1,
          childId: 12,
          childImage:
            "https://1.bp.blogspot.com/-_Kvu1vu4aV0/XAtejE7kqJI/AAAAAAAAAr4/_cldZDrNK_c4YTPeF43JWPMUhR9yItzHgCLcBGAs/s640/Food%2BImages%2BIndian%2BWallpapers%2BHD.JPG",
          childName: "BANGDA CHATPAT  ",
          price: 100,
          isVeg: true,
          note: "discription",
        },
        {
          parentId: 1,
          amount: 1,
          childId: 13,
          childImage:
            "https://1.bp.blogspot.com/-_Kvu1vu4aV0/XAtejE7kqJI/AAAAAAAAAr4/_cldZDrNK_c4YTPeF43JWPMUhR9yItzHgCLcBGAs/s640/Food%2BImages%2BIndian%2BWallpapers%2BHD.JPG",
          childName: "NON-VEG PLATTER",
          price: 700,
          isVeg: false,
          note: "discription",
        },
        {
          parentId: 1,
          amount: 1,
          childId: 14,
          childImage:
            "https://1.bp.blogspot.com/-_Kvu1vu4aV0/XAtejE7kqJI/AAAAAAAAAr4/_cldZDrNK_c4YTPeF43JWPMUhR9yItzHgCLcBGAs/s640/Food%2BImages%2BIndian%2BWallpapers%2BHD.JPG",
          childName: "TANGDI KABAB",
          price: 250,
          isVeg: false,
          note: "discription",
        },
        {
          parentId: 1,
          amount: 1,
          childId: 15,
          childImage:
            "https://1.bp.blogspot.com/-_Kvu1vu4aV0/XAtejE7kqJI/AAAAAAAAAr4/_cldZDrNK_c4YTPeF43JWPMUhR9yItzHgCLcBGAs/s640/Food%2BImages%2BIndian%2BWallpapers%2BHD.JPG",
          childName: "TANDOORI SEEKH KABAB BONELESS",
          price: 250,
          isVeg: false,
          note: "discription",
        },
        {
          parentId: 1,
          amount: 1,
          childId: 16,
          childImage:
            "https://1.bp.blogspot.com/-_Kvu1vu4aV0/XAtejE7kqJI/AAAAAAAAAr4/_cldZDrNK_c4YTPeF43JWPMUhR9yItzHgCLcBGAs/s640/Food%2BImages%2BIndian%2BWallpapers%2BHD.JPG",
          childName: "VEG SEEKH KABAB",
          price: 160,
          isVeg: true,
          note: "discription",
        },
        {
          parentId: 1,
          amount: 1,
          childId: 17,
          childImage:
            "https://1.bp.blogspot.com/-_Kvu1vu4aV0/XAtejE7kqJI/AAAAAAAAAr4/_cldZDrNK_c4YTPeF43JWPMUhR9yItzHgCLcBGAs/s640/Food%2BImages%2BIndian%2BWallpapers%2BHD.JPG",
          childName: "ACHARI PANEER",
          price: 190,
          isVeg: true,
          note: "discription",
        },
        {
          parentId: 1,
          amount: 1,
          childId: 18,
          childImage:
            "https://1.bp.blogspot.com/-_Kvu1vu4aV0/XAtejE7kqJI/AAAAAAAAAr4/_cldZDrNK_c4YTPeF43JWPMUhR9yItzHgCLcBGAs/s640/Food%2BImages%2BIndian%2BWallpapers%2BHD.JPG",
          childName: "TANDOORI BUTTER CHICKENMASALA",
          price: 260,
          isVeg: false,
          note: "discription",
        },
        {
          parentId: 1,
          amount: 1,
          childId: 19,
          childImage:
            "https://1.bp.blogspot.com/-_Kvu1vu4aV0/XAtejE7kqJI/AAAAAAAAAr4/_cldZDrNK_c4YTPeF43JWPMUhR9yItzHgCLcBGAs/s640/Food%2BImages%2BIndian%2BWallpapers%2BHD.JPG",
          childName: "PLANE NAN",
          price: 30,
          isVeg: true,
          note: "discription",
        },
        {
          parentId: 1,
          amount: 1,
          childId: 20,
          childImage:
            "https://1.bp.blogspot.com/-_Kvu1vu4aV0/XAtejE7kqJI/AAAAAAAAAr4/_cldZDrNK_c4YTPeF43JWPMUhR9yItzHgCLcBGAs/s640/Food%2BImages%2BIndian%2BWallpapers%2BHD.JPG",
          childName: "BUTTER NAN",
          price: 40,
          isVeg: true,
          note: "discription",
        },
        {
          parentId: 1,
          amount: 1,
          childId: 21,
          childImage:
            "https://1.bp.blogspot.com/-_Kvu1vu4aV0/XAtejE7kqJI/AAAAAAAAAr4/_cldZDrNK_c4YTPeF43JWPMUhR9yItzHgCLcBGAs/s640/Food%2BImages%2BIndian%2BWallpapers%2BHD.JPG",
          childName: "GARLIC NAN ",
          price: 40,
          isVeg: true,
          note: "discription",
        },
        {
          parentId: 1,
          amount: 1,
          childId: 22,
          childImage:
            "https://1.bp.blogspot.com/-_Kvu1vu4aV0/XAtejE7kqJI/AAAAAAAAAr4/_cldZDrNK_c4YTPeF43JWPMUhR9yItzHgCLcBGAs/s640/Food%2BImages%2BIndian%2BWallpapers%2BHD.JPG",
          childName: "PULKA ",
          price: 20,
          isVeg: true,
          note: "discription",
        },
        {
          parentId: 1,
          amount: 1,
          childId: 21,
          childImage:
            "https://1.bp.blogspot.com/-_Kvu1vu4aV0/XAtejE7kqJI/AAAAAAAAAr4/_cldZDrNK_c4YTPeF43JWPMUhR9yItzHgCLcBGAs/s640/Food%2BImages%2BIndian%2BWallpapers%2BHD.JPG",
          childName: "KULCHAR",
          price: 30,
          isVeg: true,
          note: "discription",
        },
        {
          parentId: 1,
          amount: 1,
          childId: 22,
          childImage:
            "https://1.bp.blogspot.com/-_Kvu1vu4aV0/XAtejE7kqJI/AAAAAAAAAr4/_cldZDrNK_c4YTPeF43JWPMUhR9yItzHgCLcBGAs/s640/Food%2BImages%2BIndian%2BWallpapers%2BHD.JPG",
          childName: "ALOO PARATHA",
          price: 60,
          isVeg: true,
          note: "discription",
        },
        {
          parentId: 1,
          amount: 1,
          childId: 23,
          childImage:
            "https://1.bp.blogspot.com/-_Kvu1vu4aV0/XAtejE7kqJI/AAAAAAAAAr4/_cldZDrNK_c4YTPeF43JWPMUhR9yItzHgCLcBGAs/s640/Food%2BImages%2BIndian%2BWallpapers%2BHD.JPG",
          childName: "GOBI PARATHA",
          price: 60,
          isVeg: true,
          note: "discription",
        },
        {
          parentId: 1,
          amount: 1,
          childId: 24,
          childImage:
            "https://1.bp.blogspot.com/-_Kvu1vu4aV0/XAtejE7kqJI/AAAAAAAAAr4/_cldZDrNK_c4YTPeF43JWPMUhR9yItzHgCLcBGAs/s640/Food%2BImages%2BIndian%2BWallpapers%2BHD.JPG",
          childName: "PANEER PARATHA",
          price: 90,
          isVeg: true,
          note: "discription",
        },
        {
          parentId: 1,
          amount: 1,
          childId: 25,
          childImage:
            "https://1.bp.blogspot.com/-_Kvu1vu4aV0/XAtejE7kqJI/AAAAAAAAAr4/_cldZDrNK_c4YTPeF43JWPMUhR9yItzHgCLcBGAs/s640/Food%2BImages%2BIndian%2BWallpapers%2BHD.JPG",
          childName: "PUDHINA KULCHA",
          price: 25,
          isVeg: true,
          note: "discription",
        },
        {
          parentId: 1,
          amount: 1,
          childId: 26,
          childImage:
            "https://1.bp.blogspot.com/-_Kvu1vu4aV0/XAtejE7kqJI/AAAAAAAAAr4/_cldZDrNK_c4YTPeF43JWPMUhR9yItzHgCLcBGAs/s640/Food%2BImages%2BIndian%2BWallpapers%2BHD.JPG",
          childName: "TANDOORI ROTI",
          price: 25,
          isVeg: true,
          note: "discription",
        },
        {
          parentId: 1,
          amount: 1,
          childId: 28,
          childImage:
            "https://1.bp.blogspot.com/-_Kvu1vu4aV0/XAtejE7kqJI/AAAAAAAAAr4/_cldZDrNK_c4YTPeF43JWPMUhR9yItzHgCLcBGAs/s640/Food%2BImages%2BIndian%2BWallpapers%2BHD.JPG",
          childName: "LACHA ROTI",
          price: 120,
          isVeg: true,
          note: "discription",
        },
        {
          parentId: 1,
          amount: 1,
          childId: 29,
          childImage:
            "https://1.bp.blogspot.com/-_Kvu1vu4aV0/XAtejE7kqJI/AAAAAAAAAr4/_cldZDrNK_c4YTPeF43JWPMUhR9yItzHgCLcBGAs/s640/Food%2BImages%2BIndian%2BWallpapers%2BHD.JPG",
          childName: "BUTTER ROTI",
          price: 40,
          isVeg: true,
          note: "discription",
        },
        {
          parentId: 1,
          amount: 1,
          childId: 30,
          childImage:
            "https://1.bp.blogspot.com/-_Kvu1vu4aV0/XAtejE7kqJI/AAAAAAAAAr4/_cldZDrNK_c4YTPeF43JWPMUhR9yItzHgCLcBGAs/s640/Food%2BImages%2BIndian%2BWallpapers%2BHD.JPG",
          childName: "LRUMALI ROTI",
          price: 50,
          isVeg: true,
          note: "discription",
        },
      ],
      imgUrl:
        "https://1.bp.blogspot.com/-_Kvu1vu4aV0/XAtejE7kqJI/AAAAAAAAAr4/_cldZDrNK_c4YTPeF43JWPMUhR9yItzHgCLcBGAs/s640/Food%2BImages%2BIndian%2BWallpapers%2BHD.JPG",
      type: "nonveg",
    },
    {
      id: 2,
      name: "Non-Veg Items",
      children: [
        {
          parentId: 2,
          amount: 1,
          childId: 31,
          childImage:
            "https://1.bp.blogspot.com/-_Kvu1vu4aV0/XAtejE7kqJI/AAAAAAAAAr4/_cldZDrNK_c4YTPeF43JWPMUhR9yItzHgCLcBGAs/s640/Food%2BImages%2BIndian%2BWallpapers%2BHD.JPG",
          childName: "Andhra style Chilli chicken",
          price: 170,
          isVeg: false,
          note: "discription",
        },
        {
          parentId: 2,
          amount: 1,
          childId: 32,
          childImage:
            "https://1.bp.blogspot.com/-_Kvu1vu4aV0/XAtejE7kqJI/AAAAAAAAAr4/_cldZDrNK_c4YTPeF43JWPMUhR9yItzHgCLcBGAs/s640/Food%2BImages%2BIndian%2BWallpapers%2BHD.JPG",
          childName: "Guntur Chicken",
          price: 130,
          isVeg: false,
          note: "discription",
        },
        {
          parentId: 2,
          amount: 1,
          childId: 33,
          childImage:
            "https://1.bp.blogspot.com/-_Kvu1vu4aV0/XAtejE7kqJI/AAAAAAAAAr4/_cldZDrNK_c4YTPeF43JWPMUhR9yItzHgCLcBGAs/s640/Food%2BImages%2BIndian%2BWallpapers%2BHD.JPG",
          childName: "Pepper Chicken",
          price: 120,
          isVeg: false,
          note: "discription",
        },
        {
          parentId: 2,
          amount: 1,
          childId: 34,
          childImage:
            "https://1.bp.blogspot.com/-_Kvu1vu4aV0/XAtejE7kqJI/AAAAAAAAAr4/_cldZDrNK_c4YTPeF43JWPMUhR9yItzHgCLcBGAs/s640/Food%2BImages%2BIndian%2BWallpapers%2BHD.JPG",
          childName: "Chicken Ghee Roast",
          price: 130,
          isVeg: false,
          note: "discription",
        },
        {
          parentId: 2,
          amount: 1,
          childId: 35,
          childImage:
            "https://1.bp.blogspot.com/-_Kvu1vu4aV0/XAtejE7kqJI/AAAAAAAAAr4/_cldZDrNK_c4YTPeF43JWPMUhR9yItzHgCLcBGAs/s640/Food%2BImages%2BIndian%2BWallpapers%2BHD.JPG",
          childName: "Kadai Chicken",
          price: 130,
          isVeg: false,
          note: "discription",
        },
        {
          parentId: 2,
          amount: 1,
          childId: 36,
          childImage:
            "https://1.bp.blogspot.com/-_Kvu1vu4aV0/XAtejE7kqJI/AAAAAAAAAr4/_cldZDrNK_c4YTPeF43JWPMUhR9yItzHgCLcBGAs/s640/Food%2BImages%2BIndian%2BWallpapers%2BHD.JPG",
          childName: "Mugulai Chicken",
          price: 140,
          isVeg: false,
          note: "discription",
        },
        {
          parentId: 2,
          amount: 1,
          childId: 37,
          childImage:
            "https://1.bp.blogspot.com/-_Kvu1vu4aV0/XAtejE7kqJI/AAAAAAAAAr4/_cldZDrNK_c4YTPeF43JWPMUhR9yItzHgCLcBGAs/s640/Food%2BImages%2BIndian%2BWallpapers%2BHD.JPG",
          childName: "Chicken 65",
          price: 160,
          isVeg: false,
          note: "discription",
        },
        {
          parentId: 2,
          amount: 1,
          childId: 38,
          childImage:
            "https://1.bp.blogspot.com/-_Kvu1vu4aV0/XAtejE7kqJI/AAAAAAAAAr4/_cldZDrNK_c4YTPeF43JWPMUhR9yItzHgCLcBGAs/s640/Food%2BImages%2BIndian%2BWallpapers%2BHD.JPG",
          childName: "Chicken 88",
          price: 180,
          isVeg: false,
          note: "discription",
        },
        {
          parentId: 2,
          amount: 1,
          childId: 39,
          childImage:
            "https://1.bp.blogspot.com/-_Kvu1vu4aV0/XAtejE7kqJI/AAAAAAAAAr4/_cldZDrNK_c4YTPeF43JWPMUhR9yItzHgCLcBGAs/s640/Food%2BImages%2BIndian%2BWallpapers%2BHD.JPG",
          childName: "Kakinada Chicken",
          price: 140,
          isVeg: false,
          note: "discription",
        },
        {
          parentId: 2,
          amount: 1,
          childId: 40,
          childImage:
            "https://1.bp.blogspot.com/-_Kvu1vu4aV0/XAtejE7kqJI/AAAAAAAAAr4/_cldZDrNK_c4YTPeF43JWPMUhR9yItzHgCLcBGAs/s640/Food%2BImages%2BIndian%2BWallpapers%2BHD.JPG",
          childName: "Hyderabadi Chicken",
          price: 145,
          isVeg: false,
          note: "discription",
        },
        {
          parentId: 2,
          amount: 1,
          childId: 41,
          childImage:
            "https://1.bp.blogspot.com/-_Kvu1vu4aV0/XAtejE7kqJI/AAAAAAAAAr4/_cldZDrNK_c4YTPeF43JWPMUhR9yItzHgCLcBGAs/s640/Food%2BImages%2BIndian%2BWallpapers%2BHD.JPG",
          childName: "Gongura Chicken",
          price: 149,
          isVeg: false,
          note: "discription",
        },
        {
          parentId: 2,
          amount: 1,
          childId: 42,
          childImage:
            "https://1.bp.blogspot.com/-_Kvu1vu4aV0/XAtejE7kqJI/AAAAAAAAAr4/_cldZDrNK_c4YTPeF43JWPMUhR9yItzHgCLcBGAs/s640/Food%2BImages%2BIndian%2BWallpapers%2BHD.JPG",
          childName: "Onion chicken",
          price: 139,
          isVeg: false,
          note: "discription",
        },
        {
          parentId: 2,
          amount: 1,
          childId: 43,
          childImage:
            "https://1.bp.blogspot.com/-_Kvu1vu4aV0/XAtejE7kqJI/AAAAAAAAAr4/_cldZDrNK_c4YTPeF43JWPMUhR9yItzHgCLcBGAs/s640/Food%2BImages%2BIndian%2BWallpapers%2BHD.JPG",
          childName: "Nellore Chicken",
          price: 150,
          isVeg: false,
          note: "discription",
        },
        {
          parentId: 2,
          amount: 1,
          childId: 44,
          childImage:
            "https://1.bp.blogspot.com/-_Kvu1vu4aV0/XAtejE7kqJI/AAAAAAAAAr4/_cldZDrNK_c4YTPeF43JWPMUhR9yItzHgCLcBGAs/s640/Food%2BImages%2BIndian%2BWallpapers%2BHD.JPG",
          childName: "Mutton Fry",
          price: 220,
          isVeg: false,
          note: "discription",
        },
        // {
        //   amount : 1,
        //   childId : 45,
        //   childImage:
        //     "https://1.bp.blogspot.com/-_Kvu1vu4aV0/XAtejE7kqJI/AAAAAAAAAr4/_cldZDrNK_c4YTPeF43JWPMUhR9yItzHgCLcBGAs/s640/Food%2BImages%2BIndian%2BWallpapers%2BHD.JPG",
        //   childName: "Mutton Pepper Dry",
        //   price: 230,
        //   note:"discription"
        // },
        // {
        //   amount : 1,
        //   childId : 46,
        //   childImage:
        //     "https://1.bp.blogspot.com/-_Kvu1vu4aV0/XAtejE7kqJI/AAAAAAAAAr4/_cldZDrNK_c4YTPeF43JWPMUhR9yItzHgCLcBGAs/s640/Food%2BImages%2BIndian%2BWallpapers%2BHD.JPG",
        //   childName: "Kadai Mutton",
        //   price: 240,
        //   note:"discription"
        // },
        // {
        //   amount : 1,
        //   childId : 47,
        //   childImage:
        //     "https://1.bp.blogspot.com/-_Kvu1vu4aV0/XAtejE7kqJI/AAAAAAAAAr4/_cldZDrNK_c4YTPeF43JWPMUhR9yItzHgCLcBGAs/s640/Food%2BImages%2BIndian%2BWallpapers%2BHD.JPG",
        //   childName: "Mutton Masala",
        //   price: 249,
        //   note:"discription"
        // },
        // {
        //   amount : 1,
        //   childId : 48,
        //   childImage:
        //     "https://1.bp.blogspot.com/-_Kvu1vu4aV0/XAtejE7kqJI/AAAAAAAAAr4/_cldZDrNK_c4YTPeF43JWPMUhR9yItzHgCLcBGAs/s640/Food%2BImages%2BIndian%2BWallpapers%2BHD.JPG",
        //   childName: "Gongura mutton",
        //   price: 240,
        //   note:"discription"
        // },
        // {
        //   amount : 1,
        //   childId : 49,
        //   childImage:
        //     "https://1.bp.blogspot.com/-_Kvu1vu4aV0/XAtejE7kqJI/AAAAAAAAAr4/_cldZDrNK_c4YTPeF43JWPMUhR9yItzHgCLcBGAs/s640/Food%2BImages%2BIndian%2BWallpapers%2BHD.JPG",
        //   childName: "Mutton Chilly",
        //   price: 250,
        //   note:"discription"
        // },
        // {
        //   amount : 1,
        //   childId : 50,
        //   childImage:
        //     "https://1.bp.blogspot.com/-_Kvu1vu4aV0/XAtejE7kqJI/AAAAAAAAAr4/_cldZDrNK_c4YTPeF43JWPMUhR9yItzHgCLcBGAs/s640/Food%2BImages%2BIndian%2BWallpapers%2BHD.JPG",
        //   childName: "Fish fry",
        //   price: 240,
        //   note:"discription"
        // },
        // {
        //   amount : 1,
        //   childId : 51,
        //   childImage:
        //     "https://1.bp.blogspot.com/-_Kvu1vu4aV0/XAtejE7kqJI/AAAAAAAAAr4/_cldZDrNK_c4YTPeF43JWPMUhR9yItzHgCLcBGAs/s640/Food%2BImages%2BIndian%2BWallpapers%2BHD.JPG",
        //   childName: "Chicken Lolipop",
        //   price: 120,
        //   note:"discription"
        // },
        // {
        //   amount : 1,
        //   childId : 52,
        //   childImage:
        //     "https://1.bp.blogspot.com/-_Kvu1vu4aV0/XAtejE7kqJI/AAAAAAAAAr4/_cldZDrNK_c4YTPeF43JWPMUhR9yItzHgCLcBGAs/s640/Food%2BImages%2BIndian%2BWallpapers%2BHD.JPG",
        //   childName: "Chickenc kolhapuri",
        //   price: 190,
        //   note:"discription"
        // },
        // {
        //   amount : 1,
        //   childId : 53,
        //   childImage:
        //     "https://1.bp.blogspot.com/-_Kvu1vu4aV0/XAtejE7kqJI/AAAAAAAAAr4/_cldZDrNK_c4YTPeF43JWPMUhR9yItzHgCLcBGAs/s640/Food%2BImages%2BIndian%2BWallpapers%2BHD.JPG",
        //   childName: "Fish Fry",
        //   price: 220,
        //   note:"discription"
        // },
        // {
        //   amount : 1,
        //   childId : 54,
        //   childImage:
        //     "https://1.bp.blogspot.com/-_Kvu1vu4aV0/XAtejE7kqJI/AAAAAAAAAr4/_cldZDrNK_c4YTPeF43JWPMUhR9yItzHgCLcBGAs/s640/Food%2BImages%2BIndian%2BWallpapers%2BHD.JPG",
        //   childName: "Palak Chicken",
        //   price: 190,
        //   note:"discription"
        // },
        // {
        //   amount : 1,
        //   childId : 55,
        //   childImage:
        //     "https://1.bp.blogspot.com/-_Kvu1vu4aV0/XAtejE7kqJI/AAAAAAAAAr4/_cldZDrNK_c4YTPeF43JWPMUhR9yItzHgCLcBGAs/s640/Food%2BImages%2BIndian%2BWallpapers%2BHD.JPG",
        //   childName: "Natukoli Pulusu",
        //   price: 220,
        //   note:"discription"
        // },
        // {
        //   amount : 1,
        //   childId : 56,
        //   childImage:
        //     "https://1.bp.blogspot.com/-_Kvu1vu4aV0/XAtejE7kqJI/AAAAAAAAAr4/_cldZDrNK_c4YTPeF43JWPMUhR9yItzHgCLcBGAs/s640/Food%2BImages%2BIndian%2BWallpapers%2BHD.JPG",
        //   childName: "Natukoli Fry",
        //   price: 230,
        //   note:"discription"
        // },
        // {
        //   amount : 1,
        //   childId : 57,
        //   childImage:
        //     "https://1.bp.blogspot.com/-_Kvu1vu4aV0/XAtejE7kqJI/AAAAAAAAAr4/_cldZDrNK_c4YTPeF43JWPMUhR9yItzHgCLcBGAs/s640/Food%2BImages%2BIndian%2BWallpapers%2BHD.JPG",
        //   childName: "Mutton Head Pulusu",
        //   price: 239,
        //   note:"discription"
        // },
        // {
        //   amount : 1,
        //   childId : 58,
        //   childImage:
        //     "https://1.bp.blogspot.com/-_Kvu1vu4aV0/XAtejE7kqJI/AAAAAAAAAr4/_cldZDrNK_c4YTPeF43JWPMUhR9yItzHgCLcBGAs/s640/Food%2BImages%2BIndian%2BWallpapers%2BHD.JPG",
        //   childName: "Dragon Chicken",
        //   price: 249,
        //   note:"discription"
        // },
        // {
        //   amount : 1,
        //   childId : 59,
        //   childImage:
        //     "https://1.bp.blogspot.com/-_Kvu1vu4aV0/XAtejE7kqJI/AAAAAAAAAr4/_cldZDrNK_c4YTPeF43JWPMUhR9yItzHgCLcBGAs/s640/Food%2BImages%2BIndian%2BWallpapers%2BHD.JPG",
        //   childName: "Mutton Chops",
        //   price: 280,
        //   note:"discription"
        // },
        // {
        //   amount : 1,
        //   childId : 60,
        //   childImage:
        //     "https://1.bp.blogspot.com/-_Kvu1vu4aV0/XAtejE7kqJI/AAAAAAAAAr4/_cldZDrNK_c4YTPeF43JWPMUhR9yItzHgCLcBGAs/s640/Food%2BImages%2BIndian%2BWallpapers%2BHD.JPG",
        //   childName: "Fish Manchurian",
        //   price: 260,
        //   note:"discription"
        // },
        // {
        //   amount : 1,
        //   childId : 61,
        //   childImage:
        //     "https://1.bp.blogspot.com/-_Kvu1vu4aV0/XAtejE7kqJI/AAAAAAAAAr4/_cldZDrNK_c4YTPeF43JWPMUhR9yItzHgCLcBGAs/s640/Food%2BImages%2BIndian%2BWallpapers%2BHD.JPG",
        //   childName: "Fish Chilly",
        //   price: 180,
        //   note:"discription"
        // },
        // {
        //   amount : 1,
        //   childId : 62,
        //   childImage:
        //     "https://1.bp.blogspot.com/-_Kvu1vu4aV0/XAtejE7kqJI/AAAAAAAAAr4/_cldZDrNK_c4YTPeF43JWPMUhR9yItzHgCLcBGAs/s640/Food%2BImages%2BIndian%2BWallpapers%2BHD.JPG",
        //   childName: "Fish Curry",
        //   price: 260,
        //   note:"discription"
        // },
        // {
        //   amount : 1,
        //   childId : 63,
        //   childImage:
        //     "https://1.bp.blogspot.com/-_Kvu1vu4aV0/XAtejE7kqJI/AAAAAAAAAr4/_cldZDrNK_c4YTPeF43JWPMUhR9yItzHgCLcBGAs/s640/Food%2BImages%2BIndian%2BWallpapers%2BHD.JPG",
        //   childName: "Bangada Fish Fry",
        //   price: 120,
        //   note:"discription"
        // },
        // {
        //   amount : 1,
        //   childId : 64,
        //   childImage:
        //     "https://1.bp.blogspot.com/-_Kvu1vu4aV0/XAtejE7kqJI/AAAAAAAAAr4/_cldZDrNK_c4YTPeF43JWPMUhR9yItzHgCLcBGAs/s640/Food%2BImages%2BIndian%2BWallpapers%2BHD.JPG",
        //   childName: "Bangada Fish Curry",
        //   price: 190,
        //   note:"discription"
        // },
      ],
      imgUrl:
        "https://1.bp.blogspot.com/-_Kvu1vu4aV0/XAtejE7kqJI/AAAAAAAAAr4/_cldZDrNK_c4YTPeF43JWPMUhR9yItzHgCLcBGAs/s640/Food%2BImages%2BIndian%2BWallpapers%2BHD.JPG",
      type: "nonveg",
    },
    {
      id: 3,
      name: "Veg Starters",
      children: [
        {
          parentId: 3,
          amount: 1,
          childId: 65,
          childImage:
            "https://1.bp.blogspot.com/-_Kvu1vu4aV0/XAtejE7kqJI/AAAAAAAAAr4/_cldZDrNK_c4YTPeF43JWPMUhR9yItzHgCLcBGAs/s640/Food%2BImages%2BIndian%2BWallpapers%2BHD.JPG",
          childName: "Aalu 65",
          price: 75,
          isVeg: true,
          note: "discription",
        },
        {
          parentId: 3,
          amount: 1,
          childId: 66,
          childImage:
            "https://1.bp.blogspot.com/-_Kvu1vu4aV0/XAtejE7kqJI/AAAAAAAAAr4/_cldZDrNK_c4YTPeF43JWPMUhR9yItzHgCLcBGAs/s640/Food%2BImages%2BIndian%2BWallpapers%2BHD.JPG",
          childName: "Paneer Manchuria",
          price: 75,
          isVeg: true,
          note: "discription",
        },
        {
          parentId: 3,
          amount: 1,
          childId: 67,
          childImage:
            "https://1.bp.blogspot.com/-_Kvu1vu4aV0/XAtejE7kqJI/AAAAAAAAAr4/_cldZDrNK_c4YTPeF43JWPMUhR9yItzHgCLcBGAs/s640/Food%2BImages%2BIndian%2BWallpapers%2BHD.JPG",
          childName: "Chilli Paneer",
          price: 130,
          isVeg: true,
          note: "discription",
        },
        {
          parentId: 3,
          amount: 1,
          childId: 68,
          childImage:
            "https://1.bp.blogspot.com/-_Kvu1vu4aV0/XAtejE7kqJI/AAAAAAAAAr4/_cldZDrNK_c4YTPeF43JWPMUhR9yItzHgCLcBGAs/s640/Food%2BImages%2BIndian%2BWallpapers%2BHD.JPG",
          childName: "Paneer 65",
          price: 140,
          isVeg: true,
          note: "discription",
        },
        {
          parentId: 3,
          amount: 1,
          childId: 69,
          childImage:
            "https://1.bp.blogspot.com/-_Kvu1vu4aV0/XAtejE7kqJI/AAAAAAAAAr4/_cldZDrNK_c4YTPeF43JWPMUhR9yItzHgCLcBGAs/s640/Food%2BImages%2BIndian%2BWallpapers%2BHD.JPG",
          childName: "Pepper paneer dry",
          price: 125,
          isVeg: true,
          note: "discription",
        },
        {
          parentId: 3,
          amount: 1,
          childId: 70,
          childImage:
            "https://1.bp.blogspot.com/-_Kvu1vu4aV0/XAtejE7kqJI/AAAAAAAAAr4/_cldZDrNK_c4YTPeF43JWPMUhR9yItzHgCLcBGAs/s640/Food%2BImages%2BIndian%2BWallpapers%2BHD.JPG",
          childName: "Paneer Schezwan Dry",
          price: 140,
          isVeg: true,
          note: "discription",
        },
        {
          parentId: 3,
          amount: 1,
          childId: 71,
          childImage:
            "https://1.bp.blogspot.com/-_Kvu1vu4aV0/XAtejE7kqJI/AAAAAAAAAr4/_cldZDrNK_c4YTPeF43JWPMUhR9yItzHgCLcBGAs/s640/Food%2BImages%2BIndian%2BWallpapers%2BHD.JPG",
          childName: "Gobi Manchuria",
          price: 75,
          isVeg: true,
          note: "discription",
        },
        {
          parentId: 3,
          amount: 1,
          childId: 72,
          childImage:
            "https://1.bp.blogspot.com/-_Kvu1vu4aV0/XAtejE7kqJI/AAAAAAAAAr4/_cldZDrNK_c4YTPeF43JWPMUhR9yItzHgCLcBGAs/s640/Food%2BImages%2BIndian%2BWallpapers%2BHD.JPG",
          childName: "Gobi Chilli1",
          price: 85,
          isVeg: true,
          note: "discription",
        },
        {
          parentId: 3,
          amount: 1,
          childId: 73,
          childImage:
            "https://1.bp.blogspot.com/-_Kvu1vu4aV0/XAtejE7kqJI/AAAAAAAAAr4/_cldZDrNK_c4YTPeF43JWPMUhR9yItzHgCLcBGAs/s640/Food%2BImages%2BIndian%2BWallpapers%2BHD.JPG",
          childName: "Gobi 65",
          price: 90,
          isVeg: true,
          note: "discription",
        },
        {
          parentId: 3,
          amount: 1,
          childId: 74,
          childImage:
            "https://1.bp.blogspot.com/-_Kvu1vu4aV0/XAtejE7kqJI/AAAAAAAAAr4/_cldZDrNK_c4YTPeF43JWPMUhR9yItzHgCLcBGAs/s640/Food%2BImages%2BIndian%2BWallpapers%2BHD.JPG",
          childName: "Gobi pepper dry",
          price: 80,
          isVeg: true,
          note: "discription",
        },
        {
          parentId: 3,
          amount: 1,
          childId: 75,
          childImage:
            "https://1.bp.blogspot.com/-_Kvu1vu4aV0/XAtejE7kqJI/AAAAAAAAAr4/_cldZDrNK_c4YTPeF43JWPMUhR9yItzHgCLcBGAs/s640/Food%2BImages%2BIndian%2BWallpapers%2BHD.JPG",
          childName: "Gobi Sez1 Dry ",
          price: 90,
          isVeg: true,
          note: "discription",
        },
        {
          parentId: 3,
          amount: 1,
          childId: 76,
          childImage:
            "https://1.bp.blogspot.com/-_Kvu1vu4aV0/XAtejE7kqJI/AAAAAAAAAr4/_cldZDrNK_c4YTPeF43JWPMUhR9yItzHgCLcBGAs/s640/Food%2BImages%2BIndian%2BWallpapers%2BHD.JPG",
          childName: "Mushroom Manchuria",
          price: 85,
          isVeg: true,
          note: "discription",
        },
        {
          parentId: 3,
          amount: 1,
          childId: 77,
          childImage:
            "https://1.bp.blogspot.com/-_Kvu1vu4aV0/XAtejE7kqJI/AAAAAAAAAr4/_cldZDrNK_c4YTPeF43JWPMUhR9yItzHgCLcBGAs/s640/Food%2BImages%2BIndian%2BWallpapers%2BHD.JPG",
          childName: "Chilli Mushroom",
          price: 95,
          isVeg: true,
          note: "discription",
        },
        {
          parentId: 3,
          amount: 1,
          childId: 78,
          childImage:
            "https://1.bp.blogspot.com/-_Kvu1vu4aV0/XAtejE7kqJI/AAAAAAAAAr4/_cldZDrNK_c4YTPeF43JWPMUhR9yItzHgCLcBGAs/s640/Food%2BImages%2BIndian%2BWallpapers%2BHD.JPG",
          childName: "Mushroom 65",
          price: 100,
          isVeg: true,
          note: "discription",
        },
        // {
        //   amount : 1,
        //   childId : 79,
        //   childImage:
        //     "https://1.bp.blogspot.com/-_Kvu1vu4aV0/XAtejE7kqJI/AAAAAAAAAr4/_cldZDrNK_c4YTPeF43JWPMUhR9yItzHgCLcBGAs/s640/Food%2BImages%2BIndian%2BWallpapers%2BHD.JPG",
        //   childName: "Mushroom Schezwan Dry",
        //   price: 100,
        //   note:"discription"
        // },
        // {
        //   amount : 1,
        //   childId : 80,
        //   childImage:
        //     "https://1.bp.blogspot.com/-_Kvu1vu4aV0/XAtejE7kqJI/AAAAAAAAAr4/_cldZDrNK_c4YTPeF43JWPMUhR9yItzHgCLcBGAs/s640/Food%2BImages%2BIndian%2BWallpapers%2BHD.JPG",
        //   childName: "Baby Corn Mancuria",
        //   price: 90,
        //   note:"discription"
        // },
        // {
        //   amount : 1,
        //   childId : 81,
        //   childImage:
        //     "https://1.bp.blogspot.com/-_Kvu1vu4aV0/XAtejE7kqJI/AAAAAAAAAr4/_cldZDrNK_c4YTPeF43JWPMUhR9yItzHgCLcBGAs/s640/Food%2BImages%2BIndian%2BWallpapers%2BHD.JPG",
        //   childName: "Chilli Baby corn",
        //   price: 95,
        //   note:"discription"
        // },
        // {
        //   amount : 1,
        //   childId : 82,
        //   childImage:
        //     "https://1.bp.blogspot.com/-_Kvu1vu4aV0/XAtejE7kqJI/AAAAAAAAAr4/_cldZDrNK_c4YTPeF43JWPMUhR9yItzHgCLcBGAs/s640/Food%2BImages%2BIndian%2BWallpapers%2BHD.JPG",
        //   childName: "Baby Corn 65",
        //   price: 95,
        //   note:"discription"
        // },
        // {
        //   amount : 1,
        //   childId : 83,
        //   childImage:
        //     "https://1.bp.blogspot.com/-_Kvu1vu4aV0/XAtejE7kqJI/AAAAAAAAAr4/_cldZDrNK_c4YTPeF43JWPMUhR9yItzHgCLcBGAs/s640/Food%2BImages%2BIndian%2BWallpapers%2BHD.JPG",
        //   childName: "Baby Corn Schezwan",
        //   price: 100,
        //   note:"discription"
        // },
        // {
        //   amount : 1,
        //   childId : 84,
        //   childImage:
        //     "https://1.bp.blogspot.com/-_Kvu1vu4aV0/XAtejE7kqJI/AAAAAAAAAr4/_cldZDrNK_c4YTPeF43JWPMUhR9yItzHgCLcBGAs/s640/Food%2BImages%2BIndian%2BWallpapers%2BHD.JPG",
        //   childName: "Paneer Butter Masala",
        //   price: 130,
        //   note:"discription"
        // },
        // {
        //   amount : 1,
        //   childId : 85,
        //   childImage:
        //     "https://1.bp.blogspot.com/-_Kvu1vu4aV0/XAtejE7kqJI/AAAAAAAAAr4/_cldZDrNK_c4YTPeF43JWPMUhR9yItzHgCLcBGAs/s640/Food%2BImages%2BIndian%2BWallpapers%2BHD.JPG",
        //   childName: "Veg Kadai",
        //   price: 105,
        //   note:"discription"
        // },
        // {
        //   amount : 1,
        //   childId : 86,
        //   childImage:
        //     "https://1.bp.blogspot.com/-_Kvu1vu4aV0/XAtejE7kqJI/AAAAAAAAAr4/_cldZDrNK_c4YTPeF43JWPMUhR9yItzHgCLcBGAs/s640/Food%2BImages%2BIndian%2BWallpapers%2BHD.JPG",
        //   childName: "Palak Paneer",
        //   price: 145,
        //   note:"discription"
        // },
        // {
        //   amount : 1,
        //   childId : 87,
        //   childImage:
        //     "https://1.bp.blogspot.com/-_Kvu1vu4aV0/XAtejE7kqJI/AAAAAAAAAr4/_cldZDrNK_c4YTPeF43JWPMUhR9yItzHgCLcBGAs/s640/Food%2BImages%2BIndian%2BWallpapers%2BHD.JPG",
        //   childName: "Aalu Gobi Masala",
        //   price: 85,
        //   note:"discription"
        // },
        // {
        //   amount : 1,
        //   childId : 88,
        //   childImage:
        //     "https://1.bp.blogspot.com/-_Kvu1vu4aV0/XAtejE7kqJI/AAAAAAAAAr4/_cldZDrNK_c4YTPeF43JWPMUhR9yItzHgCLcBGAs/s640/Food%2BImages%2BIndian%2BWallpapers%2BHD.JPG",
        //   childName: "Veg Hyderbadi",
        //   price: 120,
        //   note:"discription"
        // },
        // {
        //   amount : 1,
        //   childId : 89,
        //   childImage:
        //     "https://1.bp.blogspot.com/-_Kvu1vu4aV0/XAtejE7kqJI/AAAAAAAAAr4/_cldZDrNK_c4YTPeF43JWPMUhR9yItzHgCLcBGAs/s640/Food%2BImages%2BIndian%2BWallpapers%2BHD.JPG",
        //   childName: "Veg Kolhapuri",
        //   price: 100,
        //   note:"discription"
        // },
        // {
        //   amount : 1,
        //   childId : 90,
        //   childImage:
        //     "https://1.bp.blogspot.com/-_Kvu1vu4aV0/XAtejE7kqJI/AAAAAAAAAr4/_cldZDrNK_c4YTPeF43JWPMUhR9yItzHgCLcBGAs/s640/Food%2BImages%2BIndian%2BWallpapers%2BHD.JPG",
        //   childName: "Capsicum Masala",
        //   price: 90,
        //   note:"discription"
        // },
        // {
        //   amount : 1,
        //   childId : 91,
        //   childImage:
        //     "https://1.bp.blogspot.com/-_Kvu1vu4aV0/XAtejE7kqJI/AAAAAAAAAr4/_cldZDrNK_c4YTPeF43JWPMUhR9yItzHgCLcBGAs/s640/Food%2BImages%2BIndian%2BWallpapers%2BHD.JPG",
        //   childName: "Gobi Masala",
        //   price: 80,
        //   note:"discription"
        // },
        // {
        //   amount : 1,
        //   childId : 92,
        //   childImage:
        //     "https://1.bp.blogspot.com/-_Kvu1vu4aV0/XAtejE7kqJI/AAAAAAAAAr4/_cldZDrNK_c4YTPeF43JWPMUhR9yItzHgCLcBGAs/s640/Food%2BImages%2BIndian%2BWallpapers%2BHD.JPG",
        //   childName: "Mushroom Masala",
        //   price: 110,
        //   note:"discription"
        // },
        // {
        //   amount : 1,
        //   childId : 93,
        //   childImage:
        //     "https://1.bp.blogspot.com/-_Kvu1vu4aV0/XAtejE7kqJI/AAAAAAAAAr4/_cldZDrNK_c4YTPeF43JWPMUhR9yItzHgCLcBGAs/s640/Food%2BImages%2BIndian%2BWallpapers%2BHD.JPG",
        //   childName: "Mix Veg Curry",
        //   price: 120,
        //   note:"discription"
        // },
        // {
        //   amount : 1,
        //   childId : 94,
        //   childImage:
        //     "https://1.bp.blogspot.com/-_Kvu1vu4aV0/XAtejE7kqJI/AAAAAAAAAr4/_cldZDrNK_c4YTPeF43JWPMUhR9yItzHgCLcBGAs/s640/Food%2BImages%2BIndian%2BWallpapers%2BHD.JPG",
        //   childName: "Dal Fry",
        //   price: 70,
        //   note:"discription"
        // },
        // {
        //   amount : 1,
        //   childId : 96,
        //   childImage:
        //     "https://1.bp.blogspot.com/-_Kvu1vu4aV0/XAtejE7kqJI/AAAAAAAAAr4/_cldZDrNK_c4YTPeF43JWPMUhR9yItzHgCLcBGAs/s640/Food%2BImages%2BIndian%2BWallpapers%2BHD.JPG",
        //   childName: "Dal Tadka",
        //   price: 85,
        //   note:"discription"
        // },
        // {
        //   amount : 1,
        //   childId : 97,
        //   childImage:
        //     "https://1.bp.blogspot.com/-_Kvu1vu4aV0/XAtejE7kqJI/AAAAAAAAAr4/_cldZDrNK_c4YTPeF43JWPMUhR9yItzHgCLcBGAs/s640/Food%2BImages%2BIndian%2BWallpapers%2BHD.JPG",
        //   childName: "Fish 1",
        //   price: 80,
        //   note:"discription"
        // },
      ],
      imgUrl:
        "https://1.bp.blogspot.com/-_Kvu1vu4aV0/XAtejE7kqJI/AAAAAAAAAr4/_cldZDrNK_c4YTPeF43JWPMUhR9yItzHgCLcBGAs/s640/Food%2BImages%2BIndian%2BWallpapers%2BHD.JPG",
      type: "nonveg",
    },
    {
      id: 4,
      name: "Egg Dishes",
      children: [
        {
          parentId: 4,
          amount: 1,
          childId: 98,
          childName: "Egg Muncuria",
          childImage:
            "https://1.bp.blogspot.com/-_Kvu1vu4aV0/XAtejE7kqJI/AAAAAAAAAr4/_cldZDrNK_c4YTPeF43JWPMUhR9yItzHgCLcBGAs/s640/Food%2BImages%2BIndian%2BWallpapers%2BHD.JPG",

          price: 80,
          isVeg: false,
          note: "discription",
        },
        {
          parentId: 4,
          amount: 1,
          childId: 99,
          childImage:
            "https://1.bp.blogspot.com/-_Kvu1vu4aV0/XAtejE7kqJI/AAAAAAAAAr4/_cldZDrNK_c4YTPeF43JWPMUhR9yItzHgCLcBGAs/s640/Food%2BImages%2BIndian%2BWallpapers%2BHD.JPG",
          childName: "Egg Chilli Dry",
          price: 85,
          isVeg: false,
          note: "discription",
        },
        {
          parentId: 4,
          amount: 1,
          childId: 100,
          childImage:
            "https://1.bp.blogspot.com/-_Kvu1vu4aV0/XAtejE7kqJI/AAAAAAAAAr4/_cldZDrNK_c4YTPeF43JWPMUhR9yItzHgCLcBGAs/s640/Food%2BImages%2BIndian%2BWallpapers%2BHD.JPG",
          childName: "Egg Chilli Gravy",
          price: 90,
          isVeg: false,
          note: "discription",
        },
        {
          parentId: 4,
          amount: 1,
          childId: 101,
          childImage:
            "https://1.bp.blogspot.com/-_Kvu1vu4aV0/XAtejE7kqJI/AAAAAAAAAr4/_cldZDrNK_c4YTPeF43JWPMUhR9yItzHgCLcBGAs/s640/Food%2BImages%2BIndian%2BWallpapers%2BHD.JPG",
          childName: "Egg Masala",
          price: 90,
          isVeg: false,
          note: "discription",
        },
      ],
      imgUrl:
        "https://1.bp.blogspot.com/-_Kvu1vu4aV0/XAtejE7kqJI/AAAAAAAAAr4/_cldZDrNK_c4YTPeF43JWPMUhR9yItzHgCLcBGAs/s640/Food%2BImages%2BIndian%2BWallpapers%2BHD.JPG",
      type: "nonveg",
    },
    {
      id: 5,
      name: "Biryani Items",
      children: [
        {
          parentId: 5,
          amount: 1,
          childId: 102,
          childName: "Veg Biryani",
          childImage:
            "https://1.bp.blogspot.com/-_Kvu1vu4aV0/XAtejE7kqJI/AAAAAAAAAr4/_cldZDrNK_c4YTPeF43JWPMUhR9yItzHgCLcBGAs/s640/Food%2BImages%2BIndian%2BWallpapers%2BHD.JPG",

          price: 110,
          isVeg: true,
          note: "discription",
        },
        {
          parentId: 5,
          amount: 1,
          childId: 103,
          childImage:
            "https://1.bp.blogspot.com/-_Kvu1vu4aV0/XAtejE7kqJI/AAAAAAAAAr4/_cldZDrNK_c4YTPeF43JWPMUhR9yItzHgCLcBGAs/s640/Food%2BImages%2BIndian%2BWallpapers%2BHD.JPG",
          childName: "Chicken Biryani",
          price: 139,
          isVeg: true,
          note: "discription",
        },
        {
          parentId: 5,
          amount: 1,
          childId: 104,
          childImage:
            "https://1.bp.blogspot.com/-_Kvu1vu4aV0/XAtejE7kqJI/AAAAAAAAAr4/_cldZDrNK_c4YTPeF43JWPMUhR9yItzHgCLcBGAs/s640/Food%2BImages%2BIndian%2BWallpapers%2BHD.JPG",
          childName: "Mutton Biryani",
          price: 240,
          isVeg: false,
          note: "discription",
        },
        {
          parentId: 5,
          amount: 1,
          childId: 105,
          childImage:
            "https://1.bp.blogspot.com/-_Kvu1vu4aV0/XAtejE7kqJI/AAAAAAAAAr4/_cldZDrNK_c4YTPeF43JWPMUhR9yItzHgCLcBGAs/s640/Food%2BImages%2BIndian%2BWallpapers%2BHD.JPG",
          childName: "FIsh Biryani",
          price: 195,
          isVeg: false,
          note: "discription",
        },
        {
          parentId: 5,
          amount: 1,
          childId: 106,
          childImage:
            "https://1.bp.blogspot.com/-_Kvu1vu4aV0/XAtejE7kqJI/AAAAAAAAAr4/_cldZDrNK_c4YTPeF43JWPMUhR9yItzHgCLcBGAs/s640/Food%2BImages%2BIndian%2BWallpapers%2BHD.JPG",
          childName: "Lollipop Birayani",
          price: 150,
          isVeg: false,
          note: "discription",
        },
        {
          parentId: 5,
          amount: 1,
          childId: 107,
          childImage:
            "https://1.bp.blogspot.com/-_Kvu1vu4aV0/XAtejE7kqJI/AAAAAAAAAr4/_cldZDrNK_c4YTPeF43JWPMUhR9yItzHgCLcBGAs/s640/Food%2BImages%2BIndian%2BWallpapers%2BHD.JPG",
          childName: "Boneless Chicken Biryani",
          price: 190,
          isVeg: false,
          note: "discription",
        },
        {
          parentId: 5,
          amount: 1,
          childId: 108,
          childImage:
            "https://1.bp.blogspot.com/-_Kvu1vu4aV0/XAtejE7kqJI/AAAAAAAAAr4/_cldZDrNK_c4YTPeF43JWPMUhR9yItzHgCLcBGAs/s640/Food%2BImages%2BIndian%2BWallpapers%2BHD.JPG",
          childName: "Kabab Biryani",
          price: 139,
          isVeg: false,
          note: "discription",
        },
        {
          parentId: 5,
          amount: 1,
          childId: 109,
          childImage:
            "https://1.bp.blogspot.com/-_Kvu1vu4aV0/XAtejE7kqJI/AAAAAAAAAr4/_cldZDrNK_c4YTPeF43JWPMUhR9yItzHgCLcBGAs/s640/Food%2BImages%2BIndian%2BWallpapers%2BHD.JPG",
          childName: "Tandoori Biryani",
          price: 230,
          isVeg: false,
          note: "discription",
        },
        {
          parentId: 5,
          amount: 1,
          childId: 110,
          childImage:
            "https://1.bp.blogspot.com/-_Kvu1vu4aV0/XAtejE7kqJI/AAAAAAAAAr4/_cldZDrNK_c4YTPeF43JWPMUhR9yItzHgCLcBGAs/s640/Food%2BImages%2BIndian%2BWallpapers%2BHD.JPG",
          childName: "Kasmari Pulao",
          price: 149,
          isVeg: false,
          note: "discription",
        },
        {
          parentId: 5,
          amount: 1,
          childId: 111,
          childImage:
            "https://1.bp.blogspot.com/-_Kvu1vu4aV0/XAtejE7kqJI/AAAAAAAAAr4/_cldZDrNK_c4YTPeF43JWPMUhR9yItzHgCLcBGAs/s640/Food%2BImages%2BIndian%2BWallpapers%2BHD.JPG",
          childName: "Veg  Meals",
          price: 95,
          isVeg: true,
          note: "discription",
        },
        {
          parentId: 5,
          amount: 1,
          childId: 112,
          childImage:
            "https://1.bp.blogspot.com/-_Kvu1vu4aV0/XAtejE7kqJI/AAAAAAAAAr4/_cldZDrNK_c4YTPeF43JWPMUhR9yItzHgCLcBGAs/s640/Food%2BImages%2BIndian%2BWallpapers%2BHD.JPG",
          childName: "Chicken Meal",
          price: 149,
          isVeg: false,
          note: "discription",
        },
        {
          parentId: 5,
          amount: 1,
          childId: 113,
          childImage:
            "https://1.bp.blogspot.com/-_Kvu1vu4aV0/XAtejE7kqJI/AAAAAAAAAr4/_cldZDrNK_c4YTPeF43JWPMUhR9yItzHgCLcBGAs/s640/Food%2BImages%2BIndian%2BWallpapers%2BHD.JPG",
          childName: "Fish Meal",
          price: 190,
          isVeg: false,
          note: "discription",
        },
        {
          parentId: 5,
          amount: 1,
          childId: 114,
          childImage:
            "https://1.bp.blogspot.com/-_Kvu1vu4aV0/XAtejE7kqJI/AAAAAAAAAr4/_cldZDrNK_c4YTPeF43JWPMUhR9yItzHgCLcBGAs/s640/Food%2BImages%2BIndian%2BWallpapers%2BHD.JPG",
          childName: "Mutton Meal",
          price: 240,
          isVeg: false,
          note: "discription",
        },
        // {
        //   amount : 1,
        //   childId : 26,
        //   childImage:
        //     "https://1.bp.blogspot.com/-_Kvu1vu4aV0/XAtejE7kqJI/AAAAAAAAAr4/_cldZDrNK_c4YTPeF43JWPMUhR9yItzHgCLcBGAs/s640/Food%2BImages%2BIndian%2BWallpapers%2BHD.JPG",
        //   childName: "FIsh Biryani",
        //   price: 195,
        //   note:"discription"
        // },
      ],
      imgUrl:
        "https://1.bp.blogspot.com/-_Kvu1vu4aV0/XAtejE7kqJI/AAAAAAAAAr4/_cldZDrNK_c4YTPeF43JWPMUhR9yItzHgCLcBGAs/s640/Food%2BImages%2BIndian%2BWallpapers%2BHD.JPG",
      type: "nonveg",
    },
    {
      id: 6,
      name: "Frid Rice",
      children: [
        {
          parentId: 6,
          amount: 1,
          childId: 115,
          childName: "Veg Fired Rice (Normal/Basamathi)",
          childImage:
            "https://1.bp.blogspot.com/-_Kvu1vu4aV0/XAtejE7kqJI/AAAAAAAAAr4/_cldZDrNK_c4YTPeF43JWPMUhR9yItzHgCLcBGAs/s640/Food%2BImages%2BIndian%2BWallpapers%2BHD.JPG",

          price: 115,
          isVeg: true,
          note: "discription",
        },
        {
          parentId: 6,
          amount: 1,
          childId: 116,
          childImage:
            "https://1.bp.blogspot.com/-_Kvu1vu4aV0/XAtejE7kqJI/AAAAAAAAAr4/_cldZDrNK_c4YTPeF43JWPMUhR9yItzHgCLcBGAs/s640/Food%2BImages%2BIndian%2BWallpapers%2BHD.JPG",
          childName: "Veg Garlic Fried Rice(Normal/Basamathi) ",
          price: 120,
          isVeg: true,
          note: "discription",
        },
        {
          parentId: 6,
          amount: 1,
          childId: 117,
          childImage:
            "https://1.bp.blogspot.com/-_Kvu1vu4aV0/XAtejE7kqJI/AAAAAAAAAr4/_cldZDrNK_c4YTPeF43JWPMUhR9yItzHgCLcBGAs/s640/Food%2BImages%2BIndian%2BWallpapers%2BHD.JPG",
          childName: "Veg Schezwan Fried Rice(Normal/Basamathi) ",
          price: 125,
          isVeg: true,
          note: "discription",
        },
        {
          parentId: 6,
          amount: 1,
          childId: 118,
          childImage:
            "https://1.bp.blogspot.com/-_Kvu1vu4aV0/XAtejE7kqJI/AAAAAAAAAr4/_cldZDrNK_c4YTPeF43JWPMUhR9yItzHgCLcBGAs/s640/Food%2BImages%2BIndian%2BWallpapers%2BHD.JPG",
          childName: "Egg Fired Rice(Normal/Basamathi) ",
          price: 120,
          isVeg: true,
          note: "discription",
        },
        {
          parentId: 6,
          amount: 1,
          childId: 119,
          childImage:
            "https://1.bp.blogspot.com/-_Kvu1vu4aV0/XAtejE7kqJI/AAAAAAAAAr4/_cldZDrNK_c4YTPeF43JWPMUhR9yItzHgCLcBGAs/s640/Food%2BImages%2BIndian%2BWallpapers%2BHD.JPG",
          childName: "Egg Garlic Fired Rice(Normal/Basamathi) ",
          price: 130,
          isVeg: true,
          note: "discription",
        },
        {
          parentId: 6,
          amount: 1,
          childId: 120,
          childImage:
            "https://1.bp.blogspot.com/-_Kvu1vu4aV0/XAtejE7kqJI/AAAAAAAAAr4/_cldZDrNK_c4YTPeF43JWPMUhR9yItzHgCLcBGAs/s640/Food%2BImages%2BIndian%2BWallpapers%2BHD.JPG",
          childName: "Egg Schezwan Fried Rice(Normal/Basamathi) ",
          price: 135,
          isVeg: true,
          note: "discription",
        },
        {
          parentId: 6,
          amount: 1,
          childId: 121,
          childImage:
            "https://1.bp.blogspot.com/-_Kvu1vu4aV0/XAtejE7kqJI/AAAAAAAAAr4/_cldZDrNK_c4YTPeF43JWPMUhR9yItzHgCLcBGAs/s640/Food%2BImages%2BIndian%2BWallpapers%2BHD.JPG",
          childName: "Chicken Fried Rice(Normal/Basamathi) ",
          price: 140,
          isVeg: false,
          note: "discription",
        },
        {
          parentId: 6,
          amount: 1,
          childId: 122,
          childImage:
            "https://1.bp.blogspot.com/-_Kvu1vu4aV0/XAtejE7kqJI/AAAAAAAAAr4/_cldZDrNK_c4YTPeF43JWPMUhR9yItzHgCLcBGAs/s640/Food%2BImages%2BIndian%2BWallpapers%2BHD.JPG",
          childName: "Chicken Garlic Fired Rice(Normal/Basamathi)  ",
          price: 140,
          isVeg: false,
          note: "discription",
        },
        {
          parentId: 6,
          amount: 1,
          childId: 123,
          childImage:
            "https://1.bp.blogspot.com/-_Kvu1vu4aV0/XAtejE7kqJI/AAAAAAAAAr4/_cldZDrNK_c4YTPeF43JWPMUhR9yItzHgCLcBGAs/s640/Food%2BImages%2BIndian%2BWallpapers%2BHD.JPG",
          childName: "Chicken Schezwan Fired Rice(Normal/Basamathi) ",
          price: 140,
          isVeg: false,
          note: "discription",
        },
        {
          parentId: 6,
          amount: 1,
          childId: 124,
          childImage:
            "https://1.bp.blogspot.com/-_Kvu1vu4aV0/XAtejE7kqJI/AAAAAAAAAr4/_cldZDrNK_c4YTPeF43JWPMUhR9yItzHgCLcBGAs/s640/Food%2BImages%2BIndian%2BWallpapers%2BHD.JPG",
          childName: "Jeera Rice (Normal/Basamathi) ",
          price: 130,
          isVeg: true,
          note: "discription",
        },
        {
          parentId: 6,
          amount: 1,
          childId: 125,
          childImage:
            "https://1.bp.blogspot.com/-_Kvu1vu4aV0/XAtejE7kqJI/AAAAAAAAAr4/_cldZDrNK_c4YTPeF43JWPMUhR9yItzHgCLcBGAs/s640/Food%2BImages%2BIndian%2BWallpapers%2BHD.JPG",
          childName: "Ghee Rice  ",
          price: 130,
          isVeg: true,
          note: "discription",
        },
        {
          parentId: 6,
          amount: 1,
          childId: 126,
          childImage:
            "https://1.bp.blogspot.com/-_Kvu1vu4aV0/XAtejE7kqJI/AAAAAAAAAr4/_cldZDrNK_c4YTPeF43JWPMUhR9yItzHgCLcBGAs/s640/Food%2BImages%2BIndian%2BWallpapers%2BHD.JPG",
          childName: "Plain Rice  ",
          price: 30,
          isVeg: true,
          note: "discription",
        },
        {
          parentId: 6,
          amount: 1,
          childId: 127,
          childImage:
            "https://1.bp.blogspot.com/-_Kvu1vu4aV0/XAtejE7kqJI/AAAAAAAAAr4/_cldZDrNK_c4YTPeF43JWPMUhR9yItzHgCLcBGAs/s640/Food%2BImages%2BIndian%2BWallpapers%2BHD.JPG",
          childName: "Rasam Rice ",
          price: 60,
          isVeg: true,
          note: "discription",
        },
        {
          parentId: 6,
          amount: 1,
          childId: 128,
          childImage:
            "https://1.bp.blogspot.com/-_Kvu1vu4aV0/XAtejE7kqJI/AAAAAAAAAr4/_cldZDrNK_c4YTPeF43JWPMUhR9yItzHgCLcBGAs/s640/Food%2BImages%2BIndian%2BWallpapers%2BHD.JPG",
          childName: "Curd Rice",
          price: 70,
          isVeg: true,
          note: "discription",
        },
        {
          parentId: 6,
          amount: 1,
          childId: 129,
          childImage:
            "https://1.bp.blogspot.com/-_Kvu1vu4aV0/XAtejE7kqJI/AAAAAAAAAr4/_cldZDrNK_c4YTPeF43JWPMUhR9yItzHgCLcBGAs/s640/Food%2BImages%2BIndian%2BWallpapers%2BHD.JPG",
          childName: "Veg Noodles  ",
          price: 75,
          isVeg: true,
          note: "discription",
        },
        {
          parentId: 6,
          amount: 1,
          childId: 130,
          childImage:
            "https://1.bp.blogspot.com/-_Kvu1vu4aV0/XAtejE7kqJI/AAAAAAAAAr4/_cldZDrNK_c4YTPeF43JWPMUhR9yItzHgCLcBGAs/s640/Food%2BImages%2BIndian%2BWallpapers%2BHD.JPG",
          childName: "Veg Hakka Noodles  ",
          price: 85,
          isVeg: true,
          note: "discription",
        },
        // {
        //   amount : 1,
        //   childId : 131,
        //   childImage:
        //     "https://1.bp.blogspot.com/-_Kvu1vu4aV0/XAtejE7kqJI/AAAAAAAAAr4/_cldZDrNK_c4YTPeF43JWPMUhR9yItzHgCLcBGAs/s640/Food%2BImages%2BIndian%2BWallpapers%2BHD.JPG",
        //   childName: "Egg Noodles",
        //   price: 90,
        //   note:"discription"
        // },
        // {
        //   amount : 1,
        //   childId : 132,
        //   childImage:
        //     "https://1.bp.blogspot.com/-_Kvu1vu4aV0/XAtejE7kqJI/AAAAAAAAAr4/_cldZDrNK_c4YTPeF43JWPMUhR9yItzHgCLcBGAs/s640/Food%2BImages%2BIndian%2BWallpapers%2BHD.JPG",
        //   childName: "Egg Schezwan Noodles",
        //   price: 95,
        //   note:"discription"
        // },
        // {
        //   amount : 1,
        //   childId : 133,
        //   childImage:
        //     "https://1.bp.blogspot.com/-_Kvu1vu4aV0/XAtejE7kqJI/AAAAAAAAAr4/_cldZDrNK_c4YTPeF43JWPMUhR9yItzHgCLcBGAs/s640/Food%2BImages%2BIndian%2BWallpapers%2BHD.JPG",
        //   childName: "Chicken Noodles ",
        //   price: 100,
        //   note:"discription"
        // },
        // {
        //   amount : 1,
        //   childId : 134,
        //   childImage:
        //     "https://1.bp.blogspot.com/-_Kvu1vu4aV0/XAtejE7kqJI/AAAAAAAAAr4/_cldZDrNK_c4YTPeF43JWPMUhR9yItzHgCLcBGAs/s640/Food%2BImages%2BIndian%2BWallpapers%2BHD.JPG",
        //   childName: "Chicken Schezwan Noodles",
        //   price: 105,
        //   note:"discription"
        // },
      ],
      imgUrl:
        "https://1.bp.blogspot.com/-_Kvu1vu4aV0/XAtejE7kqJI/AAAAAAAAAr4/_cldZDrNK_c4YTPeF43JWPMUhR9yItzHgCLcBGAs/s640/Food%2BImages%2BIndian%2BWallpapers%2BHD.JPG",
      type: "nonveg",
    },
    {
      id: 7,
      name: "Combos",
      children: [
        {
          parentId: 7,
          amount: 1,
          childId: 135,
          childName: "Chicken Biryani Family Pack + Chicken 65",
          childImage:
            "https://1.bp.blogspot.com/-_Kvu1vu4aV0/XAtejE7kqJI/AAAAAAAAAr4/_cldZDrNK_c4YTPeF43JWPMUhR9yItzHgCLcBGAs/s640/Food%2BImages%2BIndian%2BWallpapers%2BHD.JPG",

          price: 600,
          isVeg: false,
          note: "discription",
        },
        {
          parentId: 7,
          amount: 1,
          childId: 136,
          childImage:
            "https://1.bp.blogspot.com/-_Kvu1vu4aV0/XAtejE7kqJI/AAAAAAAAAr4/_cldZDrNK_c4YTPeF43JWPMUhR9yItzHgCLcBGAs/s640/Food%2BImages%2BIndian%2BWallpapers%2BHD.JPG",
          childName: "Mutton Biryani Family Pack + Mutton Chilli ",
          price: 999,
          isVeg: false,
          note: "discription",
        },
        {
          parentId: 7,
          amount: 1,
          childId: 137,
          childImage:
            "https://1.bp.blogspot.com/-_Kvu1vu4aV0/XAtejE7kqJI/AAAAAAAAAr4/_cldZDrNK_c4YTPeF43JWPMUhR9yItzHgCLcBGAs/s640/Food%2BImages%2BIndian%2BWallpapers%2BHD.JPG",
          childName: "Parotha with Chicken Masala ",
          price: 90,
          isVeg: false,
          note: "discription",
        },
        {
          parentId: 7,
          amount: 1,
          childId: 138,
          childImage:
            "https://1.bp.blogspot.com/-_Kvu1vu4aV0/XAtejE7kqJI/AAAAAAAAAr4/_cldZDrNK_c4YTPeF43JWPMUhR9yItzHgCLcBGAs/s640/Food%2BImages%2BIndian%2BWallpapers%2BHD.JPG",
          childName: "Biryani with Chilli Chicken ",
          price: 280,
          isVeg: false,
          note: "discription",
        },
        {
          parentId: 7,
          amount: 1,
          childId: 139,
          childName: "Biryani with Kabab ",
          childImage:
            "https://1.bp.blogspot.com/-_Kvu1vu4aV0/XAtejE7kqJI/AAAAAAAAAr4/_cldZDrNK_c4YTPeF43JWPMUhR9yItzHgCLcBGAs/s640/Food%2BImages%2BIndian%2BWallpapers%2BHD.JPG",

          price: 200,
          isVeg: false,
          note: "discription",
        },
        {
          parentId: 7,
          amount: 1,
          childId: 140,
          childImage:
            "https://1.bp.blogspot.com/-_Kvu1vu4aV0/XAtejE7kqJI/AAAAAAAAAr4/_cldZDrNK_c4YTPeF43JWPMUhR9yItzHgCLcBGAs/s640/Food%2BImages%2BIndian%2BWallpapers%2BHD.JPG",
          childName: "Plain Rice with Chicken Curry",
          price: 130,
          isVeg: false,
          note: "discription",
        },
        {
          parentId: 7,
          amount: 1,
          childId: 141,
          childImage:
            "https://1.bp.blogspot.com/-_Kvu1vu4aV0/XAtejE7kqJI/AAAAAAAAAr4/_cldZDrNK_c4YTPeF43JWPMUhR9yItzHgCLcBGAs/s640/Food%2BImages%2BIndian%2BWallpapers%2BHD.JPG",
          childName: "Butter Naa with Chicken Curry",
          price: 160,
          isVeg: false,
          note: "discription",
        },
        {
          parentId: 7,
          amount: 1,
          childId: 142,
          childImage:
            "https://1.bp.blogspot.com/-_Kvu1vu4aV0/XAtejE7kqJI/AAAAAAAAAr4/_cldZDrNK_c4YTPeF43JWPMUhR9yItzHgCLcBGAs/s640/Food%2BImages%2BIndian%2BWallpapers%2BHD.JPG",
          childName: "Paneer Butter Masala with Roti ",
          price: 170,
          isVeg: true,
          note: "discription",
        },
        {
          parentId: 7,
          amount: 1,
          childId: 143,
          childName: "Veg Roll ",
          childImage:
            "https://1.bp.blogspot.com/-_Kvu1vu4aV0/XAtejE7kqJI/AAAAAAAAAr4/_cldZDrNK_c4YTPeF43JWPMUhR9yItzHgCLcBGAs/s640/Food%2BImages%2BIndian%2BWallpapers%2BHD.JPG",

          price: 100,
          isVeg: true,
          note: "discription",
        },
        {
          parentId: 7,
          amount: 1,
          childId: 145,
          childImage:
            "https://1.bp.blogspot.com/-_Kvu1vu4aV0/XAtejE7kqJI/AAAAAAAAAr4/_cldZDrNK_c4YTPeF43JWPMUhR9yItzHgCLcBGAs/s640/Food%2BImages%2BIndian%2BWallpapers%2BHD.JPG",
          childName: "Chicken Roll",
          price: 140,
          isVeg: false,
          note: "discription",
        },
        {
          parentId: 7,
          amount: 1,
          childId: 146,
          childImage:
            "https://1.bp.blogspot.com/-_Kvu1vu4aV0/XAtejE7kqJI/AAAAAAAAAr4/_cldZDrNK_c4YTPeF43JWPMUhR9yItzHgCLcBGAs/s640/Food%2BImages%2BIndian%2BWallpapers%2BHD.JPG",
          childName:
            "Chicken Biryani JumboPack + Chilli Chicken + 4 ButterNaan",
          price: 1200,
          isVeg: false,
          note: "discription",
        },
        {
          parentId: 7,
          amount: 1,
          childId: 147,
          childImage:
            "https://1.bp.blogspot.com/-_Kvu1vu4aV0/XAtejE7kqJI/AAAAAAAAAr4/_cldZDrNK_c4YTPeF43JWPMUhR9yItzHgCLcBGAs/s640/Food%2BImages%2BIndian%2BWallpapers%2BHD.JPG",
          childName: "Mutton Biryani JumboPack + Chilli Chicken + 4 ButterNaan",
          price: 1500,
          isVeg: false,
          note: "discription",
        },
      ],
      imgUrl:
        "https://1.bp.blogspot.com/-_Kvu1vu4aV0/XAtejE7kqJI/AAAAAAAAAr4/_cldZDrNK_c4YTPeF43JWPMUhR9yItzHgCLcBGAs/s640/Food%2BImages%2BIndian%2BWallpapers%2BHD.JPG",
      type: "nonveg",
    },
  ]
  )
})

module.exports = Routes;
