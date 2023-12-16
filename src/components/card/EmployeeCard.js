import React from 'react'
import './employeeCard.css'
import { RxAvatar } from "react-icons/rx";
import {deleteItem,SelectEmployee} from '../../redux/dataSlice';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import CardBg  from '../../images/CardBg.png'
import { MdDelete } from "react-icons/md";
import { CiEdit } from "react-icons/ci";

const EmployeeCard = ({items}) => {

  const Navigate = useNavigate();

  const dispatch = useDispatch();

  const HandleDelete = (itemId) => {
    dispatch(deleteItem(itemId));
    console.log(itemId);
  };

  const HandleSelection = (employee) =>{
    dispatch(SelectEmployee(employee));
    Navigate("/employee");
  }

  return (
    <div className='Card__wrapper' onClick={() => {HandleSelection(items)}} >

      {/* <== BackGround Image of the Card  ==>*/}
      <img className="Card__BG" src={CardBg} alt="cardBackgourd" />


      {/* <== Edit and Delete Buttons  ==>*/}
      
      <button className='EditBtn'><CiEdit color='white' size={20}/></button>
      <button onClick={(e) => {
        e.stopPropagation();
        HandleDelete(items.id);
      }} className='DeleteBtn'>< MdDelete color='white' size={20}/></button>
      
       {/* <== Avatar Division  ==>*/}

      <div onClick={() => {HandleSelection(items)}} className='Card__Avatar__wrapper'><RxAvatar color='white' size={120}/></div>

      {/* <== Employee Details Division  ==>*/}

      <div className='Card__Emp__details__wrapper'>
        <h2>{items.employee_name}</h2>
        <h4>{items.employee_age}</h4>
        <h4>{items.employee_salary.toLocaleString('en-IN')}</h4> 
      </div>

       {/* <== View Profile Button  ==>*/}
      <div className='Emp__view'>
        <button onClick={() => {HandleSelection(items)}} className='Emp__view__btn'>View Profile</button>
      </div>
    
    </div>
  )
}

export default EmployeeCard;