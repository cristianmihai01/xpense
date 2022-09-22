import React, { useState } from 'react';
// import data
import { product } from '../data';
// import arrow image
import ArrowImg from '../assets/img/product/cards/arrow.svg';

const Cards = () => {
  const [index, setIndex] = useState(1);
  // destructure product
  const { cards } = product;
  return (
    <>
      {/* cards */}
      <div
        className='flex flex-col gap-y-[30px] lg:flex-row lg:gap-x-[30px]'
        data-aos='fade-up'
        data-aos-offset='400'
        data-aos-delay='500'
      >
        {cards.map((card, cardIndex) => {
          // destructure card
          const { icon, title, subtitle } = card;
          return (
            // card
            <div
              onClick={() => setIndex(cardIndex)}
              className={`${
                index === cardIndex && 'bg-white shadow-2xl'
              }  w-[350px] h-[350px] flex flex-col justify-center items-center mx-auto p-[65px] text-center rounded-[12px] cursor-pointer transition-all`}
              key={cardIndex}
            >
              {/* card icon */}
              <div className='mb-6'>
                <img src={icon} alt='' />
              </div>
              {/* card title */}
              <div className='mb-3 text-[30px] font-medium'>{title}</div>
              {/* card subtitle */}
              <p className='mb-6 text-light'>{subtitle}</p>
              {index === cardIndex && <img src={ArrowImg} />}
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Cards;
