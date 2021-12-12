import {useState} from 'react'

function List( {contacts} ) {
    const [filterText,setFilterText]=useState('')
    const filtered=contacts.filter((item)=>{  //itemın keylerini al yani phone_number ve fullname. some herhangi biri filteretxt geçiyorsa bunu bana filtrele ,getir
        return Object.keys(item).some((key) => 
            item[key].toString().toLowerCase().includes(filterText.toLocaleLowerCase())
        )
    })
    console.log("filter",filtered)
    return (
        <div>
            <input placeholder="Filter Contact" value={filterText} onChange={(e)=>setFilterText(e.target.value)}></input>
           <ul className="list">
               {
                    filtered.map((contacts,i) =>
                     <li key={i}> 
                     <span>{contacts.fullname}</span>
                     <span>{contacts.phone_number}</span>
                     
                     </li>)
                    
               }
              
           </ul>
           <div id="total">Total Contacts:{filtered.length}</div>
        </div>
    )
}

export default List
