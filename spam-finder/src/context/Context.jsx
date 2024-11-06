import React, { createContext, useEffect, useState } from 'react'
import axios from 'axios'
import {useNavigate} from 'react-router-dom'

export const dataContext = createContext();



const DataProvider = ({ children }) => {
  const [datas, setDatas] = useState([]);
  const [user, setUser] = useState(null);
  const [isLogin,setIsLogin] = useState(false);

const navigate = useNavigate();
  useEffect(() => {
    fetchData();
  }, [])
  
  const fetchData = async () => {
    try {
      const responce = await axios.get('http://localhost:6000/contacts');
      setDatas(responce.data)
      console.log('fetched data:', datas);
    }
    catch (error) {
      console.error('error while fetch data');
    }

  };

  const register = async (inputs) => {
    try {
      const responce = await axios.post('http://localhost:6000/users', inputs);
      setUser(responce.data);
      console.log('register context fn',responce.data); 

    }
    catch(error){
      console.error('error while register user');
      
    }
  };

  const logUser = async(login)=>{
    try{
      const responce = await axios.get('http://localhost:6000/users');
      const foundUser = responce.data.find((user)=>user.email === login.email);
      console.log('login user',foundUser);
      if(foundUser){
        if(foundUser.password === login.password){
            setIsLogin(true);
            navigate('/');
            if(isLogin){
              console.log('loged in')
            }
            
            return true;
        }else{
          setIsLogin(false);
          alert('userName or password is incorrect');
          return false;
        }
      }
    }catch(error){
      console.error('error while catching user ');
    }

  };

  //create contact
  const addContact = async(newContact)=>{
     try{
      const responce = await axios.post('http://localhost:6000/contacts',newContact);
      console.log('add contact',responce.data);

       setDatas((prevData)=>[...prevData,responce.data])
     }catch(error){
      console.error('error while add contact');
      
     }
  }

  // home
  const handleSpam = async(spam,id)=>{
     try{
      const spamUpdate = !spam;
      const responce = await axios.patch(`http://localhost:6000/contacts/${id}`, {isSpam:spamUpdate});
      const updatedContact =responce.data;
      console.log('updated contact spam',updatedContact);
      setDatas((prevData)=>prevData.map((item)=>item.id === updatedContact.id? updatedContact:item));
      console.log('after updated spam data',datas);
      
      
     }catch(error){
   console.error('error while updating spam');
   
     }
  }

  //edit

  const editContact = async(editcontact)=>{
     try{
      const responce = await axios.put(`http://localhost:6000/contacts/${editcontact.id}`,editcontact);
      const editedContact = responce.data;
      console.log('edited contacts',editedContact);
      setDatas((prevData)=>prevData.map((item)=>item.id === editedContact.id ? editedContact: item));
      return true;
     }catch(error){
      console.error('error while editing contact',error);
      return false;
     }
  };

  const deleteContact = async(id)=>{
try{
  const responce = await axios.delete(`http://localhost:6000/contacts/${id}`);
  const deletedContact = responce.data;
  setDatas((prevData)=>prevData.filter((item)=>item.id !== id));
 
}catch(error){
  console.error('errror while deleting data');
  
}
  }


  return (
    <dataContext.Provider value={{ datas, setDatas,register ,user,setUser,logUser,addContact,
    handleSpam,editContact,deleteContact}}>
      {children}
    </dataContext.Provider>
  )
}

export default DataProvider