import React, {useState} from 'react';
import Menubar from './components/Menubar';
import Main from './components/Main';
import Coffee from './components/Coffee';
import Footer from './components/Footer';
import './App.css';

function App() {
  const [name, setName] = useState('Jonathan')
  return (
    <>
      <Menubar name={name} setName={setName}/>
      <Main name={name}/>
      <Coffee />
      <Footer />
    </>
  );
}

export default App;
