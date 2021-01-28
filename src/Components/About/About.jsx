import React from 'react'
import Fade from 'react-reveal/Fade';

import './styles.css'


const About = () => {
    return (
        <div id='about'>
            <h1 style={{ marginBottom: '60px' }}> About Me </h1>
            <div className='about__cointainer'>
                <Fade left> <img className='about__pic' src='https://img.favpng.com/21/10/23/computer-icons-avatar-social-media-blog-font-awesome-png-favpng-jKXEv9rWhum7VbNKDbcELd6Di_t.jpg' alt='pic' /></Fade>
                <Fade right>
                    <div className='about__content'>
                        <h4 className='about__disc'> First and foremost, I'm a tech enthusiastic person who love writing code, I have been obsessed with the idea of using software to solve practical problems, Software is a never ending puzzle that I am passionately engaged in solving. </h4>
                        <h4 className='about__disc'> Whenever I have free time, I tend to continue writing code and learn new technologies. </h4>
                        <a href='https://drive.google.com/file/d/1-ZPbRuytj5q6RE_TNKKD527RrJqjxycB/view' target="_blank" rel="noreferrer" className='btn'> View Resume </a>
                    </div>
                </Fade>
            </div>


        </div>
    )
}

export default About