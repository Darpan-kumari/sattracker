import React from 'react'
import '../App.css';
import {Button} from './Button';
import './MainSection.css';

function MainSection() {
    return (
        <div className='main-container'>
            <video src='/videos/video-1.mp4' autoPlay loop muted />
            <h1> Find Nearest Satellites!</h1>
            <div className='main-btns'>

                <Button 
                    className='btns'
                    buttonStyle='btn--primary'
                    buttonSize='btn--large'
                    >
                        Let's Look! <i className=' far fa-arrow-alt-circle-right'/>
                </Button>
            </div>
            
        </div>
    );
}

export default MainSection;
