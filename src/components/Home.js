import React, { Component } from 'react';

class Home extends Component {
	render () {
		return (
			<div className="ph2-ns">
                <div className="fl w-100 pa2">
                    <h1 className="tc pv4 i f-headline tracked-tight b mt0">Expresso</h1>
					<div className="f5">Our aim with Expresso is to provide services to local coffee roasters for expanding and optimizing their business by creating an efficient, automated platform for coffee roasters to promote and sell their unique coffee brands to a broad range of customers.

We plan to do this by creating a fully automated delivery service for roasters, as well as a platform for customers to discover, purchase, and review a variety of coffee roasted by small shops around the country.</div>
					<div className="f3 pv4 tc">Are you a <a href="#customer" className="no-underline black b">Customer</a> or a <a href="#roaster" className="no-underline black b">Roaster</a>?</div>
					<div class="dt dt--fixed">
                    	<h1 id="customer" className="tc f-subheadline">Customer</h1>
						<div class="dtc tc pv4">
							Create an Account
						</div>
						<div class="dtc tc pv4">
							Browse Beans and Subscribe to a Bean Order
						</div>
						<div class="dtc tc pv4">
							Receive Delicious Coffee Beans
						</div>
					</div>
					<div class="dt dt--fixed">
                    	<h1 id="customer" className="tc f-subheadline">Roaster</h1>
						<div class="dtc tc pv4">
							Create a User Account
						</div>
						<div class="dtc tc pv4">
							Create a Roaster Account Within
						</div>
						<div class="dtc tc pv4">
							Update Your Inventory and Receive Customer Subscriptions
						</div>
					</div>
                </div>
            </div>
		)
	}
}

export default Home;