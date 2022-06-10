import React from 'react';
import {BrowserRouter, Routes,Route} from "react-router-dom";
import HeaderMenu from './Components/Header/HeaderMenu';
import Homepage from './Components/HomePage/Homepage'
import About from './Components/About/About'
import Courses from './Components/Courses/Courses'
import Instructors from './Components/Instructors/Instructors'
import Blog from './Components/Blog/Blog'
import Error from './Components/Error/Error'
import Footer from './Components/Footer/Footer';
const App = () => {
  return (
    <div>
     <BrowserRouter>
     <HeaderMenu/>
     <Routes>
     <Route path="/home" element={<Homepage />}/>
     <Route path="/about" element={<About />}/>
     <Route path="/Courses" element={<Courses />}/>
     <Route path="/instructors" element={<Instructors />}/>
     <Route path="/blog" element={<Blog />}/>
     <Route exact path="/" element={<Homepage />}/>
     <Route exact path="*" element={<Error/>}/>
     </Routes>
     <Footer/>

  </BrowserRouter>
      
    </div>
  );
};

export default App;

<Routes>

    
   

   
  
</Routes>

/*import React from 'react';
import {BrowserRouter as Router, Routes,Route} from "react-router-dom";
import Homepage from './Components/HomePage/Homepage'
import HomeMenu from './Components/Header/HeaderMenu'
import About from './Components/About/About'
import Courses from './Components/Courses/Courses'
import Instructors from './Components/Instructors/Instructors'
import Blog from './Components/Blog/Blog'
import Error from './Components/Error/Error'
const App = () => {
  return (
    <div>
     
      <Router>
      <HomeMenu/>
     
      <Routes>
          <Route path="/home">
            <Homepage/>
          </Route>
          <Route path="/about">
            <About/>
          </Route>
          <Route path="/courses">
            <Courses/>
          </Route>
          <Route path="/instructors">
            <Instructors/>
          </Route>
          <Route path="/blog">
            <Blog/>
          </Route>
          <Route exact path="/">
          <Homepage />
          </Route>
          <Route  path="*">
          <Error />
          </Route>
          
        </  Routes>
        
    </Router>
    </div>
  );
};

export default App;
*/