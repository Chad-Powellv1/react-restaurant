import React, { useEffect, useState } from 'react';
import { getData } from '../utilities/getData';
import Layout from '../App'
import './menu.css'

export default function Special() {
	
	let url = 'https://sheltered-refuge-85246.herokuapp.com/api/json';
	const [menuItems, setMenuItems] = useState([]);
	useEffect(() => {
			getData(url)
      .then(data => {
					setMenuItems(data);
			});
	},[]);

	return (
		<Layout>
		<main style={{ padding: '1rem 0' }} className='container'>


			<div className='container-fluid mt-5'>
				<h4 className='title fs-3 mb-5 mx-auto pb-5 pt-5'>Specials</h4>
				{menuItems
					.filter(
						menuItem=>
							menuItem.category.title === 'House Favorites' && parseFloat(menuItem.price) > 7.00
                                && parseFloat(menuItem.price) <= 12.00)
					.map(menuItem => (
						<Specials key={menuItem.id} menuItem={menuItem} />
					))}
				{console.log(menuItems)}
			</div>
		</main>
		</Layout>	
	);
}

const Specials = ({ menuItem }) => {
	return (

		<div className='container-fluid list justify-content-center '>
			<div className='row mt-2 '>
				<div className='col text-center mb-5'>
					<h4>{menuItem.title}<span className='text-end'>..........................{menuItem.price}</span></h4>
					<br />                     
					{menuItem.description}
				</div>
			</div>
		</div>

	);
};



