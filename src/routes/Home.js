import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Layout from '../App';


export default function HOME() {
	return (
      <Layout>
			<div className='container mt-5'>
				<div className='row mt-5 pt-5'>
					<h1 className='display-1 text-center text-danger text-decoration-underline fw-bold mt-5'>
						Awesome Thyme Cafe
					</h1>
					<br />
					<h3 className='subtitle display-6 mt-5 text-center text-light mb-5'>
						Open Daily for Dine-in & Carry-out
					</h3>
					<div className='d-flex justify-content-center mt-5 pt-5'>
						<h4 className='mt-5 fs-3 mb-4 text-light'>
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
			</div>
      </Layout>
		)
}
