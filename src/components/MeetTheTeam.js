import React, { Component } from 'react';


class MeetTheTeam extends Component {
    render() {
        return (
        <section className = 'sections'>
            <div>
                <body>
                 <h1>Meet The Team Page</h1> 
                <hr></hr>
                <div className="row"> 
                    <div className="column" id="gfg"> 
                        <div className="card"> 
                            <div className="container"> 
                                <h2>Lorel</h2> 
                                <p>Developer</p> 
                                <p> 
                                "Skills"
                                </p> 
                                <button className="button">View</button> 
                            </div> 
                        </div> 
                    </div> 
                </div> 

                <div className="row"> 
                    <div className="column" id="gfg"> 
                        <div className="card"> 
                            <div className="container"> 
                                <h2>Luis</h2> 
                                <p>Developer</p> 
                                <p> 
                                "Skills"
                                </p> 
                                <button className="button">View</button> 
                            </div> 
                        </div> 
                    </div>
                </div>

                <div className="row"> 
                    <div className="column" id="gfg"> 
                        <div className="card"> 
                            <div className="container"> 
                                <h2>Kai</h2> 
                                <p>Developer</p> 
                                <p> 
                                "Skills"
                                </p> 
                                <button className="button">View</button> 
                            </div> 
                        </div> 
                    </div>
                </div>
                </body>
            </div>
        </section>

        );
    }
}

export default MeetTheTeam;