import React, { Component } from 'react';

class About extends Component {
    render() {
        const pclass = 'f4 measure center';
        const hclass = 'f2 tc';
        const sclass = 'pa4 center black-80 w-50-l w-80-m w-90 bg-white';
        const aclass = 'w-50 dib dim black';
        return (
            <div className="ph2-ns overflow-auto h-100 pv6 bg-light-gray">
                <article className={sclass}>
                    <div className={hclass}>Our Mission</div>
                    <p className={pclass}>
                        At Expresso, we care about delicious, fresh coffee beans, and we think everyone should be able
                        to enjoy the highest quality beans without sacrificing convenience. This means working with
                        the best roasters around to deliver their beans quickly to you at an affordable price point.
                        <img className="mt3" src="https://cdn.shutterstock.com/shutterstock/videos/7861294/thumb/1.jpg" alt="mission"/>
                    </p>
                    <p className={pclass}>
                        We want to connect you with local roasters at the top of their craft, making a wide variety of
                        beans. From Single Origin to Espresso or Seasonal Blends, we've been delivering some of the
                        tastiest coffee beans since May of 2017.

                    </p>
                </article>
                <article className={sclass}>
                    <div className={hclass}>The Best Roasters</div>
                    <p className={pclass}>
                        None of our delicious coffee would be possible without the hundreds of hours our roasters put in
                        to refine each and every delivery. As a result, we pass on every possible bit of your subscription
                        directly to them. It's our goal to help support local roasters everywhere so they can continue
                        honing their craft, and making the delicious coffee we all know and love.
                        <img className="mt3" src="https://towncenter-profile.s3.amazonaws.com/247a0ba0-1c91-11e7-938e-0242ac13000a-IMG_20160530_103917.jpg" alt="roasters"/>
                    </p>
                </article>
                <article className={sclass}>
                    <div className={hclass}>Careful Practices</div>
                    <p className={pclass}>
                        Coffee plays an important role in the livelihoods of farmers around the world. From Kenya to Chile to
                        Hawai'i, farmers rely on fair trade practices to support themselves and their communities. At Expresso,
                        we work with each of our roasters and each bean they sell though the platform to ensure they pay
                        fair trade prices for each and every pound of beans.
                        <img className="mt3" src="https://img0.etsystatic.com/000/0/6775923/il_fullxfull.350544943.jpg" alt="beans"/>
                    </p>
                </article>
                <article className={sclass}>
                    <div className={hclass}>The Team</div>
                    <a href="https://github.com/yuderekyu">
                        <div className={aclass}>
                            <div className="tc pa4">
                                <img src="http://may1734.sd.ece.iastate.edu/img/derek.jpg" className="br-100 pa1 ba b--black-10 h4 w4" alt="avatar"/>
                            </div>
                            <div className="f3 tc">Derek Yu</div>
                            <div className="f5 tc black-60">Integrations Lead</div>
                        </div>
                    </a>
                    <a href="https://github.com/lcollin">
                        <div className={aclass}>
                            <div className="tc pa4">
                                <img src="http://may1734.sd.ece.iastate.edu/img/lucas.jpg" className="br-100 pa1 ba b--black-10 h4 w4" alt="avatar"/>
                            </div>
                            <div className="f3 tc">Lucas Collins</div>
                            <div className="f5 tc black-60">Inventory Lead</div>
                        </div>
                    </a>
                    <div className="w-25 dib"/>
                    <a href="https://github.com/jonnykry">
                        <div className={aclass}>
                            <div className="tc pa4">
                                <img src="http://may1734.sd.ece.iastate.edu/img/jonny.jpg" className="br-100 pa1 ba b--black-10 h4 w4" alt="avatar"/>
                            </div>
                            <div className="f3 tc">Jonny Krysh</div>
                            <div className="f5 tc black-60">User Experience Lead</div>
                        </div>
                    </a>
                    <div className="center">
                    <a href="https://github.com/jakelong95">
                        <div className={aclass}>
                            <div className="tc pa4">
                                <img src="http://may1734.sd.ece.iastate.edu/img/jake.jpg" className="br-100 pa1 ba b--black-10 h4 w4" alt="avatar"/>
                            </div>
                            <div className="f3 tc">Jake Long</div>
                            <div className="f5 tc black-60">Profiles Lead</div>
                        </div>
                    </a>
                    <a href="http://garretmeier.com">
                        <div className={aclass}>
                            <div className="tc pa4">
                                <img src="http://may1734.sd.ece.iastate.edu/img/garret.jpg" className="br-100 pa1 ba b--black-10 h4 w4" alt="avatar"/>
                            </div>
                            <div className="f3 tc">Garret Meier</div>
                            <div className="f5 tc black-60">DevOps Lead</div>
                        </div>
                    </a>
                    </div>
                </article>
            </div>
        );
    }
}

export default About;
