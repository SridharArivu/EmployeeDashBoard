import React, { useState } from 'react'
import './Header.css';
import { IoMdSearch } from "react-icons/io";
import { useDispatch } from 'react-redux';
import {SearchData } from '../../redux/dataSlice';
import { CgProfile } from "react-icons/cg";

const Header = () => {
  const dispatch = useDispatch();

  const [searchTerm, SetSearchTerm] = useState("");

  const HandleChange = (e) =>{
    if( window.location.href !== 'http://localhost:3000/')
    {
      window.location.href = 'http://localhost:3000/';
    }
    e.preventDefault(); // Fix: preventDefault, not prevent
    dispatch(SearchData(searchTerm));
  }

  return (
    <div className='Header__wrapper'>
      <div className='Left_container'>
        <button className='Header__Delete__btn'>Delete</button>
      </div>
      <div className='Center_container'>

        <div className='Input__container'>
        <form onSubmit={HandleChange}>
            <input type="text" value={searchTerm} onChange={(event) => SetSearchTerm(event.target.value)} />
            <button type="submit"><IoMdSearch size={25} /></button>
          </form>
        </div>
        
      </div>
      <div className='Right_container'>
      <CgProfile color='dimgray' size={30} />
      </div>
    </div>
  )
}

export default Header