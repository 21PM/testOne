import React, { useEffect, useState } from 'react';
import { useContext } from 'react';
import { DataContext } from '../App';


const NewEntryForm = () => {

  const {data,setData,showForm,SetShowform} = useContext(DataContext);
  const [name,SetName] = useState("");
  const [dob,SetDob] = useState("");
  const [aadhar,SetAadhar] = useState("");
  const [mobile,Setmobile] = useState("");
  const [age,SetAge] = useState();
  const [localData,SetLocalData] = useState([])


  useEffect(()=>{
     let storedData = localStorage.getItem("userdata")
    if(storedData){
      SetLocalData(JSON.parse(storedData))
    }
  },[data])


  const handleDateChange = (event) => {
    const date = event.target.value;
    SetDob(date);
    const calculatedAge = calculateAge(date);
    SetAge(calculatedAge);

  };

  const ValidateAndSaveAadhar = (e)=>{
      SetAadhar(e.target.value);
  }

  function SaveMobileNumber(e){
    const mobileNum = e.target.value;
    Setmobile(mobileNum)
    
  }

  const calculateAge = (dob) => {
    const dobDate = new Date(dob);
    const now = new Date();
    let age = now.getFullYear() - dobDate.getFullYear();
    const monthDiff = now.getMonth() - dobDate.getMonth();

    if (monthDiff < 0 || (monthDiff === 0 && now.getDate() < dobDate.getDate())) {
      age--;
    }

    return age;
  };

  function SaveDatafunc(){
  
    if(name.length === 0){
      alert("Kindly enter your name")
      return;
    }

    if(dob.length === 0){
      alert("Kindly select the date of birth")
      return
    }

    if(aadhar >= 100000000000 && aadhar.length === 12){
      console.log(aadhar.length);
    }else{
      alert("Kindly enter valid aadhar number of 12 Digits")
      return;
    }

    if(mobile === null || mobile.length !== 10){
      alert("Kinldy enter valid mobile number of 10 digits")
      return;
    }


    let obj = {
      name: name,
      age: age,
      aadhar: aadhar,
      mobile: mobile,
      dob:dob
    }
  
    const oldData = [
      ...localData,
      obj
    ]
    setData(oldData)
    console.log("data saved");
    SetShowform(!showForm) 
  }

  
  return (

    <div className="p-4">
          
      <div className="border p-4 bg-blue-500">
        <h2 className="text-lg font-bold mb-4 text-white">Fill below form for New Entry</h2>
        <div className="flex space-x-2">
          <input
            type="text"
            className="border p-2 flex-1"
            placeholder="Name"
            onChange={(e)=>SetName(e.target.value)}
          />
           <input
      type="date"
      value={dob}
      onChange={handleDateChange}
      className="border p-2 flex-1"
      placeholder="dd - mm - yyyy"
    />
          <input
            type="number"
            className="border p-2 flex-1"
            placeholder="Aadhar number"
            onChange={ValidateAndSaveAadhar}
          />
          <input
            type="number"
            className="border p-2 flex-1"
            placeholder="Mobile number"
            onChange={SaveMobileNumber}
          />
          <input
            type="text"
            className="border p-2 flex-1 bg-blue-200"
            placeholder="Age"
            disabled
          />
          <button onClick={SaveDatafunc}
            className="text-blue-700 underline p-2 bg-white"
          >
            Save
          </button>
        </div>
      </div>
    </div>
  );
};

export default NewEntryForm;
