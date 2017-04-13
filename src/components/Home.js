import React, { Component } from 'react';
import {Link} from 'react-router';

class Home extends Component {
	render () {
		return (
			<div className="ph2-ns overflow-auto h-100 pv6">
                <section className="mw5 mw9-ns center pa3 ph5-ns tc">
                    <h1 className="f-subheadline pt4">Fresh <i>Coffee Bean Subscriptions</i> Delivered to <i>Your Doorstep</i></h1>
                    <h1 className="pv4 f1 tracked-tight b mt0">You subscribe. Roasters ship. We'll do the rest.</h1>
					<Link to="/register" className="f1 link dim br1 ba bw1 ph6 pv3 mb2 white bg-green" title="Register">Sign up Free!</Link>
                </section>
            </div>
		)
	}
}

export default Home;