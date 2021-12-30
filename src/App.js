import { Header } from "./components/Header";
import { Main } from "./components/Main";
import { About } from "./components/About";
import { Skills } from "./components/Skills";
import { Qualification } from "./components/Qualification";
import { Services } from "./components/Services";
import { Portfolio } from "./components/Portfolio";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";
import { useEffect } from "react";
import Aos from "aos";
import 'aos/dist/aos.css';

function App() {

  
  
  useEffect(() => {
    const sections = document.querySelectorAll('section[id]');

    function scrollActive(){
        const scrollY = window.pageYOffset;

        sections.forEach(current =>{
            const sectionHeight = current.offsetHeight;
            const sectionTop = current.offsetTop - 50;
            let sectionId = current.getAttribute('id');

            if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
                document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.add('active-link')
            }else{
                document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.remove('active-link')
            }
        })
    }
    window.addEventListener('scroll', scrollActive)

      function scrollHeader(){
        const nav = document.getElementById('header')
        if(this.scrollY >= 80) nav.classList.add('scroll-header'); else nav.classList.remove('scroll-header')
    }
    window.addEventListener('scroll', scrollHeader)

    function scrollUp(){
      const scrollUp = document.getElementById('scroll-up');
      // When the scroll is higher than 560 viewport height, add the show-scroll class to the a tag with the scroll-top class
      if(this.scrollY >= 560) scrollUp.classList.add('show-scroll'); else scrollUp.classList.remove('show-scroll')
  }
  window.addEventListener('scroll', scrollUp)
  Aos.init();
  }, [])

  return (

    <div className="App">
      <Header />
      <Main />
      <About />
      <Skills />
      <Qualification />
      <Services />
      <Portfolio />
      <Contact />
      <Footer />
      <a href="/#" className="scrollup" id="scroll-up">
        <i className="uil uil-angle-up scrollup__icon"></i>
      </a>
    </div>
  );
}

export default App;
