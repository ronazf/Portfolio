import React, { FC } from 'react';

import {
    About,
    Footer,
    Home,
    Projects,
    Skills
} from './container';
import { Navbar } from './components';
import './App.scss';

const App: FC = () => {
    return (
        <main className='app'>
            <Navbar />
            <Home />
            <About />
            <Skills />
            <Projects />
            <Footer />
        </main>
    )
}

export default App