
import React from 'react';
import { useNavigate } from 'react-router-dom';

const Buttons = () => {
  const navigate = useNavigate();

  const ChangeRouteToRetrieve = () => {
    navigate("/retrieve");
  };

  const ChangeRouteToMain = ()=>{

    navigate("/")
  }


  return (
    <div className="flex space-x-4 gap-24 px-14 py-4">
      <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" onClick={ChangeRouteToMain}>
        Add New Person
      </button>

      <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" onClick={ChangeRouteToRetrieve}>
        Retrieve Information
      </button>

     
    </div>
  );
};

export default Buttons;
