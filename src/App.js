import  Home  from './components/Home';
import Symptom_tracker from "./components/Symptom"
import Guid_meditation  from "./components/Guided"
import Community from "./components/Community"
import CBT from "./components/CBT"
import './App.css';
import Nav from './components/Nav';
import {Routes,Route} from "react-router-dom"
function App() {
  return (
   <>
<Nav/>
  <Routes>
    
  <Route path='/' element={<Home/>}/>
  <Route path='/Symptom_tracker' element={<Symptom_tracker/>}/>
  <Route path='/Guid_meditation' element={<Guid_meditation/>}/>
  <Route path='/Community' element={<Community/>}/>
  <Route path='/CBT' element={<CBT/>}/>

  </Routes>
   </>
  );
}

export default App;
