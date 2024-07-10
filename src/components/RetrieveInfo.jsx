import React, { useEffect, useState } from 'react';
import { useContext } from 'react';
import { DataContext } from '../App';

const RetrieveInfo = () => {

  const {data,setData} = useContext(DataContext);
  
  const [searchData,SetSearchData] = useState([]) 
  const [input,SetInput] = useState("")

  useEffect(()=>{
      console.log(data);
  },[data])


  function SearchResults(){
    const ans = data.filter((ele)=>{
      if(input == ele.aadhar){
        return ele;
      }
    })

    SetSearchData(ans)
  }

  return (
    <div className="px-14">
      <div className="border p-4">
      <span className="text-black border-2 py-4 px-4 rounded mb-12">
      Retrieve Information
      </span>
        {/* <h2 className="text-lg font-bold mb-4">Retrieve Information</h2> */}
        <div className="flex mb-4 mt-10">
          <input
            type="number"
            className="border p-2 flex-1"
            placeholder="Enter Aadhar number"
            onChange={(e)=>SetInput(e.target.value)}
          />
          <button
            className="bg-blue-500 text-white p-2 ml-2" onClick={SearchResults}
          >
            Find
          </button>
        </div>
        {
          searchData.length > 0 ? searchData.map((ele)=>{
            return(
        <div className="border p-4">
          <p>Name: {ele.name}</p>
          <p>DOB: {ele.dob}</p>
          <p>Aadhar: {ele.aadhar}</p>
          <p>Mobile no.: {ele.mobile}</p>
          <p>Age: {ele.age}</p>
        </div>  
            )
          }): <h1>Data not found</h1>
        }
        
      </div>
    </div>
  );
};

export default RetrieveInfo;
