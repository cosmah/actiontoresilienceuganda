import React from 'react';
import './Home.css';
import Hello from '../Hello/Hello';

const Home = (props) => {
    return <>
        <div>
        <header>
        <Hello/>
          
        </header>
            
        <main>
        <div class="gear"></div>
        <p class="gear-text">WELCOME TO ACTION TO RESILIENCE UGANDA</p>
        <p class="gear-text">UNDER CONSTRUCTION, PLEASE </p>

        <h3>Reach out to us at info@actiontoresilienceuganda.org
        </h3>
      </main>
    
        </div>
    </>;
};

export default Home
