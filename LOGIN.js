const express = require("express");
const bodyParser = require("body-parser");

const app = express();

app.use(bodyParser.json());

// app.get("/", (req, res) => {
//     res.sendFile(path.join(__dirname,"index.html"));
//   });
//works
app.post("/add",(req,res)=>{
  const{a}=req.body;
  // const num1 = req.body.a;
  res.send(`hlo:${a+a}`);
});
//not used
// app.post('/hello/name?user=id/pass=pwd/', (req, res) =>
//   res
//     .append('Access-Control-Allow-Origin', '*')
//     .json(
//       { 
//         // var n=req.params.name,
//           // m=req.params.id 
//           // var m=""
//       message: `Hello ${req.params.name,req.params.id,req.params.pwd || 'world'}!`}
//     // else
//     // message:`wrong`}
   
//     )
// );

// app.post('/hello/:ali?',(req,res)=>
//   // res.send("ali");
//   res
//   .append('Access-Control-Allow-Origin', '*')
//   .json(
//     { message: `open seperate window for ali user login` }
//   )
// );

//working,yes!
app.post("/login?name/password",(req,res)=>{
  const {c}=`ali`;
  const{name}=req.body;
  const{password}=123;
  if(name=="ali" & password==123)
  res.send(`hlo successfully learn string from server${b}`);
  else
  res.send("user  ?")
});



  // if (username==a || password==b){res.send("slice");}
  // else{res.send("ur not the user");}

//   const hi=(req,res)=>{
//     res.send("sHit!");
//   };

//   app.get("/", sayHi);

  // app.post("/add", (req, res) => {
  //   const { a, b } = req.body;
  //   // const num1 = req.body.a;
  //   // const num2 = req.body.b;
  //   res.send(`The sum is: ${a + b}`);
  // });





//   app.get("/",hi );
app.listen(5000, () => {
  console.log(`Server is running on port 5000.`);
});
