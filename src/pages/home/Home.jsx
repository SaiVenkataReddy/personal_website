import React from 'react';
import Profile from '../../assets/assets/home.jpg';
import {Link} from 'react-router-dom';
import {FaArrowRight} from "react-icons/fa";
import './home.css'

function Home() {
    return (
        <section className= 'home section grid'>
            <img src={Profile} alt='' className='home__img'/>

            <div className='home__content'>
                <div className='home__data'>
                    <h1 className='home__title'>
                        <span>I am Karri Sai Venkata Reddy.</span> Developer
                    </h1>

                    <p className='home__description'>
                        I am working as Member of Technical Staff(MTS) in Vymo in Data Science and Engineering team.
                        I have graduated from National Institute of technology recently from Electronics and Communication Branch.
                    </p>

                    <Link to='/about' className='button'>
                        More about me{' '}
                        <span className='button__icon'>
                            <FaArrowRight/>
                        </span>
                    </Link>

                </div>
            </div>

            <div className='color__block'></div>
        </section>
    );
}

export default Home;


