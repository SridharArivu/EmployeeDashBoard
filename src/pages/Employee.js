import React from 'react'
import { useSelector } from 'react-redux';
import './Employee.css'
import Profile from  '../images/Profile.png'
import { useNavigate } from 'react-router-dom';


const Employee = () => {

  const { employee } = useSelector((state) => state.data);
  const navigate = useNavigate();

  console.log(employee);

  return (
    <>
    <div className='Employee__wrapper'>
        <div className='Emp__left__wrapper'>
            <img src={Profile} alt="employee Profile" />
        </div>

        <div className='Emp__Right__wrapper'>
          {
            employee?.map((items) => {
              return (
                <>
                <h2 className='empName'>{items.employee_name}</h2>
              <h4 className='empAge'>{items.employee_age}</h4>
            <p className='empSalary'>₹ {items.employee_salary.toLocaleString('en-IN')}</p>
                </>
              )
            })
          }
            
        </div>
        
    </div>
    <button onClick={() => navigate("/")} className='Emp__Back_button'>back</button>
    </>
  )
}

export default Employee