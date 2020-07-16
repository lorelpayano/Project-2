import React, { Component } from 'react';
import lorel from '../images/lorel.png';
import luis from '../images/luis.png'
import kai from '../images/kai.jpg'


class MeetTheTeam extends Component {
    render() {
        return (
            <section className = 'sections'>
            <p className='team-header'>Meet The Team</p>
            <div className='team'>
                <div className= 'team-div'>

                    <p>Lorel</p>
                </div>
                <div className= 'team-div'>
                    <p>Luis</p>
                </div>
                <div className= 'team-div'>
                    <p>Kai</p>
                </div>




            </div>
                {/* <body>
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
                </body> */}
        </section>

        );
    }
}

export default MeetTheTeam;