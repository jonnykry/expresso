import React, { PropTypes, Component } from 'react';
import Navigation from './Navigation';
import './About.css';

class About extends Component {
    render() {
        return (
            <div>
                <Navigation isLogin={true} />
                <article className="pa4 center black-80">
                    <div className="f2 tc">About</div>
                    <p className="tc">Nothing here yet!</p>
                </article>
            </div>
        );
    }
}

export default About;
