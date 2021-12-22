import './App.css';
import Button from './components/Button';
import ColorSwitcher from './components/ColorSwitcher';
import Counter from './components/Counter';
import Footer from './components/Footer';
import Header from './components/Header';
import Iterate from './components/Iterate';
import Main from './components/Main';
import Pokemon from './components/Pokemon';


function App() {

  const buttonOneProps = {color: "blue", text: "Four"}

  return (
    <div className="App">
     {/* <Header/>
     <Main/>
     <Footer/>
     <Button {...buttonOneProps}>Cheese</Button>
     <Button color="red" text="two" />
     <Button color="green" text="three" />
     <ColorSwitcher/>
     <Counter/> */}
     {/* <Iterate/> */}
     <Pokemon/>
    </div>
  );
}

export default App;
