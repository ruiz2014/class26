
import NavBar from './components/NavBar'
import { BrowserRouter as Router } from 'react-router-dom';
import Public from './Routes/Public'

function App() {
  return (
   <>
   <Router>
    <NavBar />
    <Public />
   </Router>

   </>
  );
}

export default App;
