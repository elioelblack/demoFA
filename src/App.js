import React from 'react';
import Container from '@material-ui/core/Container';
import './App.css';
import Menu from './Components/Menu/Menu';
import Carousel from './Components/Carousel/Carousel';
import Swing from 'react-reveal/Swing';
import Pulse from 'react-reveal/Pulse';
import Jump from 'react-reveal/Jump';
import SocialBar from './Components/SocialBar/SocialBar';


function App() {
  return (
    <>
    <Container maxWidth="lg">
        <Menu/>        
        <SocialBar/>        
    </Container>
    <footer className="footer">      
      <section className="social">
      <p>Síguenos</p>
      <div className="links">
        <a href="https://www.linkedin.com/">
          <i className="fab fa-linkedin"></i>
        </a>
        <a href="https://twitter.com/">
          <i className="fab fa-twitter"></i>
        </a>
        <a href="https://www.facebook.com/">
          <i className="fab fa-facebook-f"></i>
        </a>        
      </div>
    </section>
    <h4>Copyright©2020 Asociación Fe y Alegría El Salvador.</h4>
    </footer>
    </>
  );
}

export default App;
