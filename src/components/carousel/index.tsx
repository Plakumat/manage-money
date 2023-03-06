import React from 'react';
import { Link } from 'react-router-dom';
import {
  CarouselResponsive,
  CAROUSEL_TITLE,
  CAMPAIGN_1_TITLE,
  CAMPAIGN_1_DESCRIPTION,
  CAMPAIGN_2_TITLE,
  CAMPAIGN_2_DESCRIPTION,
  CAMPAIGN_3_TITLE,
  CAMPAIGN_3_DESCRIPTION,
} from '../../model';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import FirstImage from '../../assets/showcase-1.png';
import SecondImage from '../../assets/showcase-2.png';
import ThirdImage from '../../assets/showcase-3.png';

const CarouselComponent: React.FC = () => {
  return (
    <section className='carousel'>
      <span className='carousel__title'>{CAROUSEL_TITLE}</span>
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
            <span className='carousel__item__title'>{CAMPAIGN_1_TITLE}</span>
            <p className='carousel__item__description'>
              {CAMPAIGN_1_DESCRIPTION}
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
            <span className='carousel__item__title'>{CAMPAIGN_2_TITLE}</span>
            <p className='carousel__item__description'>
              {CAMPAIGN_2_DESCRIPTION}
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
            <span className='carousel__item__title'>{CAMPAIGN_3_TITLE}</span>
            <p className='carousel__item__description'>
              {CAMPAIGN_3_DESCRIPTION}
            </p>
          </div>
          <Link to={`#campaign`} className='carousel__item__redirect'></Link>
        </div>
        <div className='carousel__item'>
          <div className='carousel__item__left'>
            <img
              className='carousel__item__image'
              src={FirstImage}
              alt='carousel-item'
            />
          </div>
          <div className='carousel__item__info'>
            <span className='carousel__item__title'>{CAMPAIGN_1_TITLE}</span>
            <p className='carousel__item__description'>
              {CAMPAIGN_1_DESCRIPTION}
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
            <span className='carousel__item__title'>{CAMPAIGN_2_TITLE}</span>
            <p className='carousel__item__description'>
              {CAMPAIGN_2_DESCRIPTION}
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
            <span className='carousel__item__title'>{CAMPAIGN_3_TITLE}</span>
            <p className='carousel__item__description'>
              {CAMPAIGN_3_DESCRIPTION}
            </p>
          </div>
          <Link to={`#campaign`} className='carousel__item__redirect'></Link>
        </div>
      </Carousel>
    </section>
  );
};

export default CarouselComponent;
