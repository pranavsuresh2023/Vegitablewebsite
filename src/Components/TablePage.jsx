import React from 'react';
import './TablePage.css';
import {Link} from 'react-router-dom';
import {IoIosLogOut } from 'react-icons/io';
import {MdNavigateNext } from 'react-icons/md';


const TablePage = () => {
  const vegetables = [
    { name: 'Zucchini' },
    { name: 'Eggplant' },
    { name: 'Asparagus' },
    { name: 'Kale' },
    { name: 'Cauliflower' },
    { name: 'Radish' },
    { name: 'Brussels Sprouts' },
    { name: 'Celery' },
    { name: 'Green Beans' },
    { name: 'Leek' },
    
  ];


  return (
    <div className='Table-container'>
      <div className="logout-section">
        <div className='logout'> 
        <button>Logout <IoIosLogOut/></button></div>
      </div>
      <div className='table-elements'>
      <div className='Table'>
    
      <table>
        <thead>
          <tr>
            <th>Vegetable</th>
            <th>Price</th>
          </tr>
        </thead>
        <tbody>
          {vegetables.map((vegetable, index) => (
            <tr key={index}>
              <td>{vegetable.name}</td>
              <td>
                <input type="text" />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
         
      </div>
      <div className='save-btn'>
        <button>Save</button>
      </div>
      <div className='user-cookie'>
        <h4>The user cookie for this session is : <p></p></h4>
      </div>
      <div className='user-location'>
        <Link to="/MapComponent"><button>Location<MdNavigateNext/></button></Link>
      </div>

    </div>
  )
}

export default TablePage;
