import React from 'react';
import Header from './components/Header';
import Main from './components/Main';
import Footer from './components/Footer';
import './styles/App.css';

const App = () => {
  return (
    <div className='app'>
      <Header text='Calculator (React Version)' />
      <Main />
      <Footer
        address='https://github.com/robisonwebdev'  
        name='David Robsion'
        text='Developed by '
      />
    </div>
  );
}

export default App;