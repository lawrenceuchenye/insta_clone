import {useState} from "react";
import BarChart from "./components/BarChart";
import {UserData} from "./Data";

function App() {
  const [userData,setUserData]=useState({
   labels:UserData.map((data)=>data.year),
   datasets:[{
     label:"Users Loss",
     data:UserData.map((data)=>data.userLost),
     backgroundColor:["green","red"],
     borderColor:"black",
     borderWidth:2
   }]
  });
  return (
    <div className="App" style={{padding:"20px"}}>
      <BarChart chartData={userData} />
    </div>
  );
}

export default App;
