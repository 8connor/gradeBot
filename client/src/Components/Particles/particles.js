import React from 'react';
import Particles from 'react-particles-js';
import logo from '../../assets/img/logo/tabletbooks.png'

var style = {
    width: "100%",
    maxHeight: "100%",
    zIndex: "-1"
};

class ParticlesIntro extends React.Component {
    render() {
        return (
            <router>
                <div classname="landing">
                    <Particles className="particles"
                        style={style}
                        params={{
                            "particles": {
                                "number": {
                                    "value": 150
                                },
                                "size": {
                                    "value": 3
                                }
                            },
                            "interactivity": {
                                "events": {
                                    "onhover": {
                                        "enable": true,
                                        "mode": "repulse"
                                    }
                                }
                            }
                        }}
                        />

                        <div className="logo-title container-fluid text-center"
                        style={{
                            top: 0,
                            left: 0,
                            width: "100%",
                            height: "100%"
                            }}>
                            <div className="logo-title container text-center">
                                <img className="logo" src={logo} alt="Logo"/>
                            </div>
                        </div>
                </div>
            </router>
        
    )}; 
}
   
export default ParticlesIntro;