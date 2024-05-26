import React, { FC } from 'react';

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

const App: FC = () => {
    return (
        <main className='app'>
            <Navbar />
            <Header />
            <Home />
            <About />
            <Projects />
            <Skills />
            <Footer />
        </main>
    )
}

export default App