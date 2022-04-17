import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Layout from '../App';
import './home.css'

export default function HOME() {
	return (
		<Layout>
			<div className='container'>
				<div className='row'>
					<h1 className='display-1 text-center text-danger fw-bold'>
						Awesome Thyme Cafe
					</h1>
					<br />
					<h3 className='subtitle display-6 text-center text-light'>
						Open Daily for Dine-in & Carry-out
					</h3>
					<div className='d-flex justify-content-center pt-5'>
						<h4 className='fs-3 text-light'>
							Hours 10am to 3pm, Daily
						</h4>
					</div>

					<div className='d-flex justify-content-center mt-3 pt-3'>
						<h4 className='mt-3 fs-4 text-light'>348 East Main Street</h4>
					</div>

					<div className='d-flex justify-content-center'>
						<h4 className='city text-light'>Lexington, KY 40507</h4>
					</div>
					<div className='d-flex justify-content-center'>
						<h4 className='phone text-light'>(859) 555-1212</h4>
					</div>
				</div>
				<div class='map-responsive justify-content-center mt-5'>
					<iframe
						title="Awesome Inc Map Location"
						src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3142.211231743101!2d-84.49472698391718!3d38.042164204501674!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x884244e844532c33%3A0xb6919957af36b713!2s348%20E%20Main%20St%2C%20Lexington%2C%20KY%2040507!5e0!3m2!1sen!2sus!4v1647712784185!5m2!1sen!2sus'
					></iframe>
				</div>
			</div>
		</Layout>
	);
}
