import React from 'react'
import './styles.css'
import { ReactComponent as Pc } from '../../pc.svg';
import Fade from 'react-reveal/Fade';

const Intro = () => {
    return (
        <div className='intro'>

            <div className='intro__details'>
                <Fade left duration={1500}>
                    <h1 className='intro__name'>Hello✌🏼,</h1>
                    <h1 className='intro__name2'>my name is <span className='color'>Mo'men Hanbali</span></h1>
                </Fade>
                <Fade right delay={700} duration={1500}>
                    <h1 className='intro__Info'><span style={{ fontWeight: '200' }}>A Passionate</span> Full Stack Developer </h1>
                </Fade>

            </div>
            <Pc className='pc'></Pc>


        </div>
    )
}

export default Intro