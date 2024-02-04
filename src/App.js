import React from 'react';

import { 
    About,
    Footer,
    Header,
    Home,
    Projects,
    Skills
} from './container';
import { Navbar } from './components';
import './App.scss'

const App = () => {
    return (
        <div className='app'>
            <Navbar/>
            <Header/>
            <Home/>
            <About/>
            <Projects/>
            <Skills/>
            <Footer/>
        </div>
    )
}

export default App