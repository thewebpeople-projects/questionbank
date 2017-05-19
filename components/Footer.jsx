import React from 'react';

var Footer = (props) => {
    return(
        <footer className="page-footer blue-grey darken-4">
            <div className="container">
                <div className="row">
                    <div className="col l4 s12">
                        <h5 className="white-text center">Visit</h5>
                        <div className="divider"></div>
                        <p className="grey-text text-lighten-4">
                            some address
                        </p>


                    </div>
                    <div className="col l4 s12">
                        <h5 className="white-text center">Contact</h5>
                        <div className="divider"></div>
                        <ul>
                            <li><a className="white-text">+91 9845353533</a></li>
                            <li><a className="white-text">+91 8904794295</a></li>
                            <li><a className="white-text">+91 9743703147</a></li>
                            <li><a className="white-text">+91 8722064652</a></li>
                            <li><a className="white-text">hello@thewebpeople.in</a></li>
                        </ul>
                    </div>
                    <div className="col l4 s12">
                        <h5 className="white-text center">Connect</h5>
                        <div className="divider"></div>
                        <ul>
                            <li><a className="white-text" href="#!">Link 1</a></li>
                            <li><a className="white-text" href="#!">Link 2</a></li>
                            <li><a className="white-text" href="#!">Link 3</a></li>
                            <li><a className="white-text" href="#!">Link 4</a></li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="footer-copyright">
                <div className="container">
                    <p>
                        Question Bank © 2017. All rights reserved.
                    </p>
                </div>
            </div>
        </footer>
    );
}

module.exports= Footer;
