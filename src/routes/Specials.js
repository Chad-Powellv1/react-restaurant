import React, { useEffect, useState } from 'react';
import { getData } from '../utilities/getData';
import Layout from '../App';
import './menu.css';

export default function Special() {
	const URL = 'https://sheltered-refuge-85246.herokuapp.com/api/json';
	const [menuItems, setMenuItems] = useState([]);
	useEffect(() => {
		getData(URL).then(data => {
			setMenuItems(data);
		});
	}, []);

	return (
		<Layout>
			<main style={{ padding: '1rem 0' }} className='container'>
				<div className='container-fluid mt-5'>
					<h4 className='title fs-3 mb-5 mx-auto pb-5 pt-5'>House Favorites</h4>
					{menuItems
						.filter(
							menuItem =>
								menuItem.category.title === 'House Favorites' &&
								parseFloat(menuItem.price) > 7.0 &&
								parseFloat(menuItem.price) <= 12.0
						)
						.map(menuItem => (
							<Specials key={menuItem.id} menuItem={menuItem} />
						))}
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
					<h4>
						{menuItem.title}
						<span className='text-end'>
							..........................{menuItem.price}
						</span>
					</h4>
					<br />
					<div className='row justify-content-center'>
						<div className='col-6 text-center'>{menuItem.description}</div>
					</div>
				</div>
			</div>
		</div>
	);
};
