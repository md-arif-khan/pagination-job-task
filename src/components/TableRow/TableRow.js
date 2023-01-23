import React from 'react';
import { useNavigate } from 'react-router-dom';

const TableRow = ({user,loading}) => {
  const navigate = useNavigate();
  if(loading){
    return <h2>Loading...</h2>
  }
  const {name,address,email}=user;
    const handleDetails=user=>{
      navigate('/details',{state:user});
    }

    return (
        <tr className=''>
      
        <td>
          <div className="flex items-center space-x-3">
            <div className="avatar">
              
            </div>
            <div>
              <div className="font-bold">{name}</div>
              
            </div>
          </div>
        </td>
        <td>
          {email}
          <br/>
          
        </td>
        <td>{address.city}</td>
        <td>{address.street}</td>
        <th>
          <button onClick={()=>handleDetails(user)} className="btn btn-outline  btn-xs">show details</button>
        </th>
      </tr>
    );
};

export default TableRow;