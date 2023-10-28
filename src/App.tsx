import React, { FC, useEffect } from 'react';
import './styles/reset.css';
import { Container } from './app.styled';


const App: FC = () => {
    useEffect(()=>{
        console.log('hello world');
    }, []);

    return (<Container>...</Container>);
}

export default App;