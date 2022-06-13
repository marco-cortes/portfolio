import pokedex from "../img/p1.png";
import coursite from "../img/p2.png";
import todo from "../img/p3.png";
import spring from "../img/p4.png";
import bookmark from "../img/p5.png";

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
                        img={pokedex}
                        title="Pokédex"
                        desc="Aplicación de registro de pokémons desarrollada bajo un MERN stack."
                        link="https://pokemon.marco-cortes.me" />
                </SwiperSlide>

                <SwiperSlide>
                    <PortfolioItem
                        img={coursite}
                        title="Coursite"
                        desc="PWA de una plataforma de aprendizaje desarrollada con React y Spring Boot."
                        link="https://app-coursite.web.app" />
                </SwiperSlide>

                <SwiperSlide>
                    <PortfolioItem
                        img={todo}
                        title="TODO"
                        desc="Aplicación para guardar lista de tareas, desarrollada con React."
                        link="https://marco-cortes-mern.herokuapp.com/" />
                </SwiperSlide>

                <SwiperSlide>
                    <PortfolioItem
                        img={spring}
                        title="Control de Clientes"
                        desc="Aplicación desarrollado con Spring y Thymeleaf, encargada de llevar un control de clientes."
                        link="https://marco-cortes-mern.herokuapp.com/" />
                </SwiperSlide>

                <SwiperSlide>
                    <PortfolioItem
                        img={bookmark}
                        title="Bookmark"
                        desc="Landing page basada en un diseño de FrontendMentor."
                        link="https://marco-cortes.me/bookmark" />
                </SwiperSlide>
                
            </Swiper>
        </section>
    )
}
