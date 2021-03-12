
import "./App.css";
import Main from './components/main'
import { Link } from 'react-router-dom';
import Nav from './components/nav'
import ScrollToTop from "./components/ScrollToTop";


function App() {
  

  return (
    
  <div>
    <ScrollToTop />
      <Nav />
        <Main />
    
</div>


  );
}

export default App;
