import {useState,useEffect} from 'react'
import Contacts from '..';

const initialFormValues= { fullname:"", phone_number:"" } 
function Form({addContact,contacts}) {
    const [form,setForm]=useState(initialFormValues);

    useEffect(() => {setForm(initialFormValues) },[contacts])//contacts değiştiyse eğer inputların içini boşalt ''//değişmek demek bir kayıt eklendiyse yani
    const onChangeInput=(e)=>{
       
        setForm({...form, [e.target.name]:e.target.value})
    };

    const onSubmit=(e)=>{
        e.preventDefault();

        if(form.fullname==="" || form.phone_number==="")//boş inputla submiti engelleme
          return false
    
     addContact([...contacts,form])
     
     //submit yapıldığında inputları sıfırlama

    }
    return (
        <form onClick={onSubmit} >
          <div>
            <input name="fullname" placeholder="Full Name" value={form.fullname} onChange={onChangeInput}></input>
          </div>
          <div>
            <input name="phone_number" placeholder="Phone Numbers" value={form.phone_number} onChange={onChangeInput}></input>
          </div>
          <div className="btn">
              <button >Add</button>
          </div>
        </form>
        
    )
}

export default Form
