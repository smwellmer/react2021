import './App.css';
import Button from './components/Button';
import Footer from './components/Footer';
import Header from './components/Header';
import Main from './components/Main';


function App() {

  const buttonOneProps = {color: "blue", text: "Four"}


  return (
    <div className="App">
     <Header/>
     <Main/>
     <Footer/>
     <Button {...buttonOneProps}>Cheese</Button>
     <Button color="red" text="two" />
     <Button color="green" text="three" />
    </div>
  );
}

export default App;
