import { useEffect, useState } from "react";

let CurrentTime=()=>{
   const [time,  setTime]= useState(new Date());
    console.log("Current Time painted")
  
  
  
    useEffect(()=>{
    console.log("interval setup");
    const intervalId= setInterval(()=>{
        setTime(new Date());
    }, 1000);

    return()=>{
        clearInterval(intervalId);
        console.log("cancel interval");
    };
   },[]);

    return<p className="lead">
        Current time in India:{time.toLocaleDateString()}-{""}{time.toLocaleTimeString()}
        </p>
        
};

export default CurrentTime;