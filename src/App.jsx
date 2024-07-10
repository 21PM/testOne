import { useEffect, useState } from 'react'
import Navbar from './components/Navbar'
import './App.css'
import Buttons from './components/Buttons'
import Router from './routing/Router'
import { createContext } from 'react'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export const DataContext = createContext();


function App() {



  const [data, setData] = useState([])
  const [showForm,SetShowform] = useState(false)
  const [localdata,Setlocaldata] = useState()

  useEffect(()=>{
      StoreDataLocally()
      const storedata = localStorage.getItem("userdata")
      if(storedata){
        const dataset = JSON.parse(storedata)
        setData(dataset)
      }
     
  },[showForm])

  const StoreDataLocally = ()=>{
    console.log("ads",data);
    if(data.length > 0){
      localStorage.setItem("userdata",JSON.stringify(data))
      toast.success("Data Saved Successfully")

    }
  }

  return (
    <>
       <Navbar />
       <DataContext.Provider value={{data,setData,showForm,SetShowform}}>
       {/* <RetrieveInfo/> */}
       <Router/>
       </DataContext.Provider>
      
    </>
  )
}

export default App
