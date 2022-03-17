import React, { useEffect, useState} from "react";
import { ListGroup } from "react-bootstrap";
import { getData } from '../utilities/getData';
import { getLocalStorage, setLocalStorage } from '../utilities/localStorage';

export default function Menu() {

  let url ='https://sheltered-refuge-85246.herokuapp.com/api/json';
  const [menuItems, setMenuItems] = useState([]);
  useEffect(() => {
    let data = getLocalStorage('https://sheltered-refuge-85246.herokuapp.com/api/json')
    if(data.length > 0) {
      setMenuItems(data);
    } else {
      getData('https://sheltered-refuge-85246.herokuapp.com/api/json')
        .then((data) => {
          setMenuItems(data);
          setLocalStorage(url, data);
        })
      } 
      // console.log(data)
    }, [])
    
    return (
      <main style={{padding: '1rem 0' }} className='container'>
      <div className="row text-center justify-content-center">
        <h2>Menu</h2>
      </div>
 
    <div className="container mt-5">
      <h4 className="row justify-content-left ms-5 fs-5 mb-5">Appetizers</h4>
      {console.log(menuItems)}
        {menuItems.filter( menuItem => menuItem.category.title === 'Appetizer')
          .map(menuItem => <Appetizer key={menuItem.id} menuItem={menuItem} />)}
    </div>
    </main>
    );
  }
  
  const Appetizer = ({ menuItem }) => {
    
    return (
      <div className="container-fluid">
      <div className="row">
      <div className="col text-start mb-5">
        {menuItem.title}<br/>
        {menuItem.description} .......{menuItem.price}
      </div>
    </div>
    </div>
    )
  }



  