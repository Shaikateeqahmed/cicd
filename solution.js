// index.js

//  import the crypto module



//  get a commands using process.argv


// complete the  function
const add =(a,b)=>{
    // console.log(a+b);
    return a+b
  }
  const sub = (a,b)=>{
     //console.log(a-b);
     return a-b;
  }
  const mult = (a,b)=>{
     //console.log(a*b);
     return a*b;
  }
  const divide = (a,b)=>{
     //console.log(a/b);
     return a/b;
  }
  
  // const sin = (a,b,c)=>{
  //    //console.log((b*c)/(a*c));
  //    return (b*c)/(a*c);
  // }
  // const cos = (a,b,c)=>{
  //    //console.log((a*c)/a*b);
  //    return (a*c)/(a*b);
  // }
  
  // const tan = (a,b,c)=>{
  //    //console.log((a*b)/(a*c));
  //    return (a*b)/(a*c)
  // }
  // const random = (a)=>{
  // //console.log(a);
  // return a;
  // }
  let crypto = require("crypto");
  let arguments = process.argv.splice(2)
  //console.log(arguments[0]);
  if(arguments[0]=="add"){
     console.log(add(+arguments[1],+arguments[2]));
  }else if(arguments[0]=="sub"){
     console.log(sub(arguments[1],arguments[2]));
  }else if(arguments[0]=="mult"){
     console.log(mult(arguments[1],arguments[2]));
  }else if(arguments[0]=="divide"){
     console.log(divide(arguments[1],arguments[2]));
  }else if(arguments[0]=="sin"){
     console.log(Math.sin(arguments[1]));
  }else if(arguments[0]=="cos"){
     console.log(Math.cos(arguments[1]));
  }else if(arguments[0]=="tan"){
     console.log(Math.tan(arguments[1]));
  }else if(arguments[0]=="random"){
     console.log(crypto.randomInt(+arguments[1],+arguments[2]));
  }
  //console.log(crypto.randomInt(1,10));
  //module.exports={add,sub,mult,divide,sin,cos,tan,random};
  
  
  switch (operation) {
    
    default:
      console.log("Invalid operation");
  }
  