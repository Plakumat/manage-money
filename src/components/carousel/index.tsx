import React from 'react';
import { Link } from 'react-router-dom';
import { CarouselResponsive } from '../../model';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import FirstImage from '../../assets/showcase-1.png';
import SecondImage from '../../assets/showcase-2.png';
import ThirdImage from '../../assets/showcase-3.png';

const CarouselComponent: React.FC = () => {
  return (
    <section className='carousel'>
      <span className='carousel__title'>SİZE ÖZEL KAMPANYALAR</span>
      <Carousel
        className='carousel__wrapper'
        infinite={true}
        responsive={CarouselResponsive}
        partialVisible={true}
        centerMode={false}
        swipeable={true}
        draggable={true}
        arrows={true}
        showDots={true}
      >
        <div className='carousel__item'>
          <div className='carousel__item__left'>
            <img
              className='carousel__item__image'
              src={FirstImage}
              alt='carousel-item'
            />
          </div>
          <div className='carousel__item__info'>
            <span className='carousel__item__title'>TURKCELL KAMPANYASI</span>
            <p className='carousel__item__description'>
              Fatura ödemelerinizde her ay 10 TL kazan dilediğince harca.
            </p>
          </div>
          <div className='carousel__item__overlay'>
            <Link to={`#campaign`} className='carousel__item__redirect'></Link>
          </div>
        </div>
        <div className='carousel__item'>
          <div className='carousel__item__left'>
            <img
              className='carousel__item__image'
              src={SecondImage}
              alt='carousel-item'
            />
          </div>
          <div className='carousel__item__info'>
            <span className='carousel__item__title'>OYUN & E-PIN FIRSATI</span>
            <p className='carousel__item__description'>
              Tüm alışverişlerinizde %20 bonus kazanma fırsatını kaçırma.
            </p>
          </div>
          <Link to={`#campaign`} className='carousel__item__redirect'></Link>
        </div>
        <div className='carousel__item'>
          <div className='carousel__item__left'>
            <img
              className='carousel__item__image'
              src={ThirdImage}
              alt='carousel-item'
            />
          </div>
          <div className='carousel__item__info'>
            <span className='carousel__item__title'>ÜCRETSİZ İŞLEM</span>
            <p className='carousel__item__description'>
              Fups App'i hemen indir! Ücretsiz işlem fırsatından sende yararlan.
            </p>
          </div>
          <Link to={`#campaign`} className='carousel__item__redirect'></Link>
        </div>
        <div className='carousel__item'>
          <div className='carousel__item__left'>
            <img
              className='carousel__item__image'
              src={ThirdImage}
              alt='carousel-item'
            />
          </div>
          <div className='carousel__item__info'>
            <span className='carousel__item__title'>ÜCRETSİZ İŞLEM</span>
            <p className='carousel__item__description'>
              Fups App'i hemen indir! Ücretsiz işlem fırsatından sende yararlan.
            </p>
          </div>
          <Link to={`#campaign`} className='carousel__item__redirect'></Link>
        </div>
        <div className='carousel__item'>
          <div className='carousel__item__left'>
            <img
              className='carousel__item__image'
              src={ThirdImage}
              alt='carousel-item'
            />
          </div>
          <div className='carousel__item__info'>
            <span className='carousel__item__title'>ÜCRETSİZ İŞLEM</span>
            <p className='carousel__item__description'>
              Fups App'i hemen indir! Ücretsiz işlem fırsatından sende yararlan.
            </p>
          </div>
          <Link to={`#campaign`} className='carousel__item__redirect'></Link>
        </div>
        <div className='carousel__item'>
          <div className='carousel__item__left'>
            <img
              className='carousel__item__image'
              src={ThirdImage}
              alt='carousel-item'
            />
          </div>
          <div className='carousel__item__info'>
            <span className='carousel__item__title'>ÜCRETSİZ İŞLEM</span>
            <p className='carousel__item__description'>
              Fups App'i hemen indir! Ücretsiz işlem fırsatından sende yararlan.
            </p>
          </div>
          <Link to={`#campaign`} className='carousel__item__redirect'></Link>
        </div>
      </Carousel>
    </section>
  );
};

export default CarouselComponent;
