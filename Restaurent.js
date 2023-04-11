import React, { useState } from 'react'
import'./Style.css';
import Menu from'./menuApi';
import Menucard from'./Menucard';
import Navbar from './Navbar';

const uniqueList= [
    
    ...new Set (Menu.map((curElem)=>{

    return curElem.category;
})

),
"All",

];
console.log(uniqueList);

const Restaurent = () => {
    const[menuData,setmenudata]=useState(Menu);
    const[menuList,setmenuList]=useState(uniqueList);

    const filteritem=(category)=>{

        if(category==="All")
        {
            setmenudata(Menu);
           return
        }
        const updatedList = Menu.filter((curElem) => {
            return curElem.category === category;
          });
      
          setmenudata(updatedList);
        };
  return (
    <>
       <Navbar filteritem={filteritem} menuList={menuList}/>
       <Menucard menuData={menuData} />
    </>
  )
}

export default Restaurent