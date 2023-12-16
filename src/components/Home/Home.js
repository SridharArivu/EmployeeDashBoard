import React,{useEffect} from 'react'
import EmployeeCard from '../card/EmployeeCard'
import './Home.css'
import { useDispatch, useSelector } from 'react-redux';
import { fetchDataAction } from '../../redux/actions'; 

const Home = () => {

  

  const dispatch = useDispatch();
  const { data,filteredData } = useSelector((state) => state.data);

  useEffect(() => {
    const apiUrl = '/api/v1/employees';
    dispatch(fetchDataAction(apiUrl));
  }, [dispatch]);
  
  return (
    <div className="grid-container">{

       filteredData?.map((items) => {
         return (
           <EmployeeCard items={items} key={items.id} />
         )
       })
      }

    {
      data?.map((items) => {
        return (
          <EmployeeCard items={items} />
        )
      })
      }
      
    </div>
  )
}

export default Home