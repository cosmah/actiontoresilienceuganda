import React from 'react';
import './Home.css';
import Hello from '../Hello/Hello';
import Habout from '../Habout/Habout';
import Stats from '../Stats/Stats';
import Joinus from '../Joinus/Joinus';
import Footer from '../Footer/Footer';

const Home = (props) => {
    return <>
        <div>
        <header>
        <Hello/>
        </header>
        <Habout/>
        <Stats/>
        <Joinus/>
        <Footer/>
        {/* <main>
        <div class="gear"></div>
        <p class="gear-text">WELCOME TO ACTION TO RESILIENCE UGANDA</p>
        <p class="gear-text">UNDER CONSTRUCTION, PLEASE </p>

        <h3>Reach out to us at info@actiontoresilienceuganda.org
        </h3>
      </main>
     */}
        </div>
    </>;
};

export default Home
