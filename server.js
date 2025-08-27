import express from 'express';
const app=express();
const port=5050;

app.get("/g",(req,res)=>{
     res.json({meaasge:"i am working"});
})


function add(a, b) {
  return a + b;
}

export default add

app.listen(port,()=>{
     console.log('data base is connect on port number 5050');
})