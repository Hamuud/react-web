import React from 'react';
import img_1 from "../styles/1024.png";
import img_2 from "../styles/BallMazer1.1.png";
import '../styles/AirShipWar.module.css';
import '../styles/Privacy.css';
import MyButton from "../components/UI/Button\'s/button/MyButton";
const OurGame = () => {
    return (
        <div style={{color: '#fff'}}>
            <div className= 'Privacy__main'>
                <div>
                    <div style= {{width:'65%', marginLeft: '20%', marginTop: '20%'}}>
                        <h1 style = {{fontSize: '36px', textAlign: 'left', fontWeight: 'bold'}}>AirShip War</h1>
                        <h2 style={{fontSize: '18px', fontWeight: 'bold', textAlign: 'left'}}>
                            Shooter
                        </h2>
                        <p style={{ marginTop: '10%'}}>
                            Immerse yourself in 2D air combat with AirShip War!
                            Fight for the title of the best ace pilot and set your own records.
                        </p>
                        <p>
                            Two fictional states unleashed a war in this big world. You have to fight for a pilot whose name no one knew, but thanks to you and your efforts, the whole world will know about you!
                            Try your luck and test your strength in HARDCORE mode!
                        </p>
                        <form action="https://apps.apple.com/ua/app/airship-war/id1617685748" target="_blank">
                            <MyButton>Dowload now</MyButton>
                        </form>
                    </div>
                </div>
                <div>
                    <div className='img_wrap' style={{marginTop: '18%'}}>
                        <div>
                            <div>
                                <img src= {img_1}
                                     alt = 'AIRSHIP WAR icons'
                                     style={{width:"425px",height:"600px", objectFit: 'cover',margin: '20px',boxShadow: '15px 15px 1px 1px #EEF6F9'}}/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className= 'Privacy__main'>
                <div>
                    <div style= {{width:'65%', marginLeft: '20%', marginTop: '20%'}}>
                        <h1 style = {{fontSize: '36px', textAlign: 'left', fontWeight: 'bold'}}>Ball Mazer</h1>
                        <h2 style={{fontSize: '18px', fontWeight: 'bold', textAlign: 'left'}}>
                            Puzzle
                        </h2>
                        <p style={{ marginTop: '10%'}}>
                            Guide the ball through different routes in this free maze adventure.
                            Run, explore and find a way out through the intricate walls.
                        </p>
                        <p>
                            Ball Mazer is a classic maze/labyrinth puzzles with fun tweaks and surprises.
                            Just use accelerometer and guide the ball through the walls to find a way out and escape the labyrinth.
                            Minimal 2D graphics make it feel like a classic and retro maze game.
                        </p>
                        <form action="https://apps.apple.com/ua/app/ball-mazer/id1639783410" target="_blank">
                            <MyButton>Dowload now</MyButton>
                        </form>
                    </div>
                </div>
                <div>
                    <div className='img_wrap' style={{marginTop: '18%'}}>
                        <div>
                            <div>
                                <img src= {img_2}
                                     alt = 'AIRSHIP WAR icons'
                                     style={{backgroundColor: "#333333",width:"425px",height:"600px", objectFit: 'contain',margin: '20px',boxShadow: '15px 15px 1px 1px #505050'}}/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default OurGame;