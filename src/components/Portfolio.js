import img1 from '../img/portfolio1.jpg';
import img2 from '../img/portfolio2.jpg';
import img3 from '../img/portfolio3.jpg';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import "swiper/css/navigation";

// import Swiper core and required modules
import SwiperCore, {
    Navigation,Mousewheel,Keyboard
  } from 'swiper';
  
  SwiperCore.use([Navigation,Mousewheel,Keyboard]);


export const Portfolio = () => {

    return (
        <section className="portfolio section" id="portfolio">
            <h2 className="section__title">Portafolio</h2>
            <span className="section__subtitle">Mis últimos trabajos</span>

            <Swiper
                cssMode={true} navigation={true} 
                mousewheel={true} keyboard={true} 
                loop={true}
                className='portfolio__container container mySwiper'>
                <SwiperSlide>
                    <div className="portfolio__content grid">
                        <img src={img1} alt="" className="portfolio__img" />
                        <div className='portfolio__data'>
                            <h3 className='portfolio__title'>Aplicación en Spring</h3>
                            <p className='portfolio__description'>Sitio web responsivo con métodos para crear, actualizar o eliminar registros
                            con Spring y Hibernate.</p>
                            <a className='button button--flex button--small portfolio__button' href="https://marco-spring-jar.herokuapp.com/" target="_blank" rel="noreferrer">
                                Demo
                                <i className="uil uil-arrow-circle-right button__icon"></i>
                            </a>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="portfolio__content grid">
                        <img src={img2} alt="" className="portfolio__img" />
                        <div className='portfolio__data'>
                            <h3 className='portfolio__title'>Aplicación en Laravel</h3>
                            <p className='portfolio__description'>Sitio web de CRUD con login y registro de usuarios.</p>
                            <a className='button button--flex button--small portfolio__button' href="https://marco-laravel.herokuapp.com/login" target="_blank" rel="noreferrer">
                                Demo
                                <i className="uil uil-arrow-circle-right button__icon"></i>
                            </a>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="portfolio__content grid">
                        <img src={img3} alt="" className="portfolio__img" />
                        <div className='portfolio__data'>
                            <h3 className='portfolio__title'>Landing Page</h3>
                            <p className='portfolio__description'>Sitio web promocional de un producto.</p>
                            <a className='button button--flex button--small portfolio__button' href="/#">
                                Demo
                                <i className="uil uil-arrow-circle-right button__icon"></i>
                            </a>
                        </div>
                    </div>
                </SwiperSlide>
            </Swiper>
        </section>
    )
}
