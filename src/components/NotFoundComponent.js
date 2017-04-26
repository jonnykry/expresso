import React, {Component} from 'react';
import {Link} from 'react-router';

class NotFoundComponent extends Component {
    render() {
        return (
            <div>
                <article className="pa4 center black-80">
                    <div className="f2 tc mt7">Woops!</div>
                    <p className="tc">
                        Looks like we cannot find this page! We will look into this right after our next cup of coffee.
                    </p>
                    <p className="tc"><Link to={'/dashboard'}>Meanwhile, head back to the dashboard</Link></p>
                </article>
            </div>
        );
    }
}

export default NotFoundComponent;
