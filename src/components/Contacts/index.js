import {useState,useEffect} from 'react'
import List from './List'
import Form from './Form'
import "./style.css"
function Contacts() {
    const [contacts,setContacts]=useState([
        {fullname:"Melisa Çalışkan",phone_number:"123"},
        {fullname:"Asena Çalışkan",phone_number:"456"},
        {fullname:"Simge Çalışkan",phone_number:"789"}])

    useEffect(()=>{
         console.log(contacts)
    },[contacts])
    return (
       
        <div id="container">
             <div className="header">Contacts</div>
            
           <List contacts={contacts}/>
           <Form addContact={setContacts} contacts={contacts}/>
        </div>
    )
}

export default Contacts
