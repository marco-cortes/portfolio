import img1 from '../img/portfolio1.jpg';
import img2 from '../img/portfolio2.jpg';
import img3 from '../img/portfolio3.jpg';
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
                        img={img1}
                        title="Aplicación en Spring"
                        desc="Sitio web responsivo con métodos para crear, actualizar o eliminar registros con Spring y Hibernate"
                        link="https://marco-spring-jar.herokuapp.com/" />
                </SwiperSlide>
                <SwiperSlide>
                    <PortfolioItem
                        img={img2}
                        title="Aplicación en Laravel"
                        desc="Sitio web de CRUD con login y registro de usuarios."
                        link="https://marco-laravel.herokuapp.com/login" />
                </SwiperSlide>
                <SwiperSlide>
                    <PortfolioItem
                        img={img3}
                        title="Landing Page"
                        desc="Sitio web promocional de un producto."
                        link="/#" />
                </SwiperSlide>
            </Swiper>
        </section>
    )
}
