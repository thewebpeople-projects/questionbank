import React,{Component} from 'react';

class Home extends Component {
    return(
        <div>
            <div id="index-banner" className="parallax-container">
                <div className="section no-pad-bot">
                    <div className="container">
                        <h1 className="header center black-text text-lighten-2">Question Bank</h1>
                        <div className="row center">
                            <h5 className="header black-text col s12 light">A Bank to find Question papers of all previous exams</h5>
                        </div>
                        <div>
                            <nav className="blue-grey darken-4">
                                <div className="nav-wrapper">
                                    <form>
                                        <div className="input-field">
                                            <input id="search" type="search" required/>
                                            <label className="label-icon" htmlFor="search"><i className="material-icons">search</i></label>
                                            <i className="material-icons">close</i>
                                        </div>
                                    </form>
                                </div>
                            </nav>
                        </div>
                    </div>
                </div>
                <div className="parallax"><img src="/images/background1.jpg" alt="Unsplashed background img 1"/></div>
            </div>


            <div className="container">
                <div className="section">
                    <div className="row">
                        <div className="col s12 m4">
                            <div className="icon-block">
                                <h2 className="center brown-text"><i className="material-icons">flash_on</i></h2>
                                <h5 className="center">Speeds up Preperation</h5>

                                <p className="light">
                                    We Collect and share Question papers from different Colleges and Different universities and manage them so that you can use it to prepare for the exam efficiently.
                                    We can understand the pain of preparing for exam.
                                </p>
                            </div>
                        </div>

                        <div className="col s12 m4">
                            <div className="icon-block">
                                <h2 className="center brown-text"><i className="material-icons">group</i></h2>
                                <h5 className="center">User Maintained</h5>

                                <p className="light">
                                    It is very difficult for us to collect all the question papers from different Colleges and Universities. So We provide a provision so that user himself will upload question paper and we will manage it according to College or University.
                                </p>
                            </div>
                        </div>

                        <div className="col s12 m4">
                            <div className="icon-block">
                                <h2 className="center brown-text"><i className="material-icons">thumb_up</i></h2>
                                <h5 className="center">Easy to utilize</h5>

                                <p className="light">
                                    It is very easy you just need to search for specific topic or specific College or University Question paper by applying proper filters.
                                </p>
                            </div>
                        </div>
                    </div>

                </div>
            </div>


            <div className="parallax-container valign-wrapper">
                <div className="section no-pad-bot">
                    <div className="container">
                        <div className="row center">
                            <h5 className="header col s12 light">A Bank For the Students, From the Students and To the Students</h5>
                        </div>
                    </div>
                </div>
                <div className="parallax"><img src="/images/background2.jpg" alt="Unsplashed background img 2"/></div>
            </div>

            <div className="container">
                <div className="section">

                    <div className="row">
                        <div className="col s12 center">
                            <h3><i className="mdi-content-send brown-text"></i></h3>
                            <h4>Motive</h4>
                            <p className="left-align light">
                                It is not necessary that our subjects match what is actually required in todays world.
                                So we hope you spend time on what is actually required to survive in your chosen field and less on reading everything and spending a lot of time on that.
                            </p>
                        </div>
                    </div>

                </div>
            </div>


            <div className="parallax-container valign-wrapper">
                <div className="section no-pad-bot">
                    <div className="container">
                        <div className="row center">
                            <h5 className="header col s12 light">
                                Graduate
                            </h5>
                        </div>
                    </div>
                </div>
                <div className="parallax"><img src="/images/background3.png" alt="Unsplashed background img 3"/></div>
            </div>
        </div>
        );
}

export default Home;