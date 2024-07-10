
import React, { useEffect, useState } from 'react';
import NewEntryForm from './NewEntryForm';
import { useContext } from 'react';
import { DataContext } from '../App';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const PersonTable = () => {

  
  const {data,setData,showForm,SetShowform} = useContext(DataContext)
  const [localdata,Setlocaldata] = useState([])
  function ShowFormFunction(){
    SetShowform(!showForm)
    console.log(data);
  }

  useEffect(()=>{
    console.log("use effect");
     let storedData = localStorage.getItem("userdata")
    if(storedData){
      Setlocaldata(JSON.parse(storedData))
    }
},[data])


  function DeleteData(id){
    const newdata = localStorage.getItem("userdata")
    const newJsonData = JSON.parse(newdata);
    
    const ans = newJsonData.filter((ele)=>{
      return ele.aadhar !== id
    })
    setData(ans)
    localStorage.setItem("userdata",JSON.stringify(ans))
  }
  
  return (
    
    <div className="container mx-auto p-6 border-2">
      <ToastContainer
position="top-center"
autoClose={2000}
hideProgressBar={false}
newestOnTop={false}
closeOnClick
rtl={false}
pauseOnFocusLoss
draggable
pauseOnHover
theme="light"
/>

      <span className="text-black border-2 py-4 px-4 rounded mb-12">
        Add New Person
      </span>
      <table className="min-w-full bg-white mt-8">
        <thead>
          <tr>
            <th className="bg-blue-500 text-white text-left py-3 px-4 uppercase font-semibold text-sm">Name</th>
            <th className="bg-blue-500 text-white text-left py-3 px-4 uppercase font-semibold text-sm">Date of Birth</th>
            <th className="bg-blue-500 text-white text-left py-3 px-4 uppercase font-semibold text-sm">Aadhar Number</th>
            <th className="bg-blue-500 text-white text-left py-3 px-4 uppercase font-semibold text-sm">Mobile Number</th>
            <th className="bg-blue-500 text-white text-left py-3 px-4 uppercase font-semibold text-sm">Age</th>
            <th className="bg-blue-500 text-white text-left py-3 px-4 uppercase font-semibold text-sm">Actions</th>
          </tr>
        </thead>
        <tbody className='border-2'>

          {
            localdata.length > 0 ? localdata.map((ele,i)=>{
              return(
                <>
            <tr key={i}>
            <td className="border-t px-4 py-2">{ele.name}</td>
            <td className="border-t px-4 py-2">{ele.dob}</td>
            <td className="border-t px-4 py-2">{ele.aadhar}</td>
            <td className="border-t px-4 py-2">{ele.mobile}</td>
            <td className="border-t px-4 py-2">{ele.age}</td>
            <td className="border-t px-4 py-2 cursor-pointer text-rose-600" onClick={()=>DeleteData(ele.aadhar)}>Delete</td>
          </tr>
                </>
              )
            }):null
          }
          {/* Placeholder for table rows */}
          
          
        </tbody>
      </table>
      {showForm ? <NewEntryForm/> : null}
        
      <div className="flex justify-end mt-4">
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" onClick={ShowFormFunction}>
          Add
        </button>
      </div>
    </div>
  );
};

export default PersonTable;
