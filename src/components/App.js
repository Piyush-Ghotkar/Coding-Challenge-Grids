import '../styles/App.css';
import Header from './Header';
import Body from './Body';
import  { useState,useEffect } from 'react';
import {formatDate} from "../utils/utils.js";


 function App() {

  const [jsonData,setJsonData]=useState([]);
  const [searchQry, setSearchQry]=useState("");

   useEffect(()=>{

    fetch('./EmployeeData.json')
    .then(response => response.json())
    .then(response =>  setJsonData(formatDate(response))) //parse date before setting useState
  },[]);

  var filterData=jsonData;
  filterData=filterData.filter(item => {
    return (
        item.id.toString().includes(searchQry) ||
        item.name.toLowerCase().includes(searchQry.toLowerCase()) ||
        item.email.toLowerCase().includes(searchQry.toLowerCase()) ||
        item.dob.toLowerCase().includes(searchQry) ||
        item.userStatus.toString().toLowerCase().includes(searchQry) ||
        item.creditBalance.toString().toLowerCase().includes(searchQry) 
    );
})
  return (
    <>
    <Header setSearchQry={setSearchQry}/>
    {/* { jsonData!=[] && console.log(true)} */}
    <Body jsonData={filterData} />
    
    </>
  );
}

export default App;
