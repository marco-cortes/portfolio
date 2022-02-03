import mern from '../img/mern.svg';
import spring from "../img/spring-logo.svg";
import laravel from '../img/laravel.png';
import reactfirebase from "../img/reactfirebase.svg";
import springreact from "../img/springreact.svg";
import react from "../img/react.svg";

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import "swiper/css/navigation";
import "swiper/css/pagination";

import SwiperCore, {
    Navigation, Mousewheel, Keyboard, Pagination
} from 'swiper';

import { PortfolioItem } from './PortfolioItem';

SwiperCore.use([Navigation, Mousewheel, Keyboard, Pagination]);


export const Portfolio = () => {

    return (
        <section className="portfolio section div-bg" id="portfolio">
            <h2 className="section__title">Portafolio</h2>
            <span className="section__subtitle">Mis últimos trabajos</span>

            <Swiper
                cssMode={true} navigation={true}
                pagination={true}
                className='portfolio__container container'>
                <SwiperSlide>
                    <PortfolioItem
                        img={springreact}
                        title="Aplicación en Spring Boot y React"
                        desc="Landng Page con reservaciones, se implementó Spring Boot y React con Redux."
                        link="https://marco-cortes.me/gif-expert/" />
                </SwiperSlide>
                <SwiperSlide>
                    <PortfolioItem
                        img={mern}
                        title="MERN Stack"
                        desc="Aplicación web con Node.JS, Express, React, Redux y Mongo DB."
                        link="https://marco-cortes-mern.herokuapp.com/" />
                </SwiperSlide>
                <SwiperSlide>
                    <PortfolioItem
                        img={reactfirebase}
                        title="CRUD React + Firebase"
                        desc="Aplicación con login y registro implementando Firebase y React Context."
                        link="https://marco-journal-app.web.app/" />
                </SwiperSlide>
                <SwiperSlide>
                    <PortfolioItem
                        img={react}
                        title="React App"
                        desc="Buscador de imagenes gif usando la API de Giphy."
                        link="https://marco-cortes.me/gif-expert/" />
                </SwiperSlide>
                <SwiperSlide>
                    <PortfolioItem
                        img={spring}
                        title="Aplicación en Spring"
                        desc="Sitio web responsivo con métodos para crear, actualizar o eliminar registros con Spring MVC y Hibernate"
                        link="https://marco-spring-jar.herokuapp.com/" />
                </SwiperSlide>
                <SwiperSlide>
                    <PortfolioItem
                        img={laravel}
                        title="Aplicación en Laravel"
                        desc="Sitio web de CRUD con login y registro de usuarios."
                        link="https://marco-laravel.herokuapp.com/login" />
                </SwiperSlide>
            </Swiper>
        </section>
    )
}
