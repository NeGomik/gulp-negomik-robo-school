import Swiper, { Navigation, Scrollbar } from 'swiper';
Swiper.use([Navigation, Scrollbar]);
const swiper = new Swiper('.trening__content', {
    slidesPerView: 'auto',

    spaceBetween: 40,
});