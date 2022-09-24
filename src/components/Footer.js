import React from 'react';
// import data
import { footer } from '../data';

const Footer = () => {
  // destructure footer
  const { logo, links, legal, newsletter, form } = footer;
  return (
    <footer className='section'>
      <div className='container mx-auto'>
        <div className='flex flex-col items-center text-center  lg:flex-row lg:items-start lg:text-left lg:justify-between gap-y-8'>
          {/* logo */}
          <div>
            <img src={logo} alt='' />
          </div>
          {/* list 1 */}
          <div>
            <div className='text-2xl uppercase font-medium mb-6'>Links</div>
            <ul className='flex flex-col gap-y-3'>
              {links.map((link, index) => {
                // destructure link
                const { href, name } = link;
                return (
                  <li key={index}>
                    <a
                      className='font-medium hover:text-accent transition'
                      href={href}
                    >
                      {name}
                    </a>
                  </li>
                );
              })}
            </ul>
          </div>
          {/*  list 2 */}
          <div>
            <div className='text-2xl uppercase font-medium mb-6'>Legal</div>
            <ul className='flex flex-col gap-y-3'>
              {legal.map((item, index) => {
                // destructure link
                const { href, name } = item;
                return (
                  <li key={index}>
                    <a
                      className='font-medium hover:text-accent transition'
                      href={href}
                    >
                      {name}
                    </a>
                  </li>
                );
              })}
            </ul>
          </div>
          {/* newsletter */}
          <div>
            <div className='text-2xl uppercase font-medium mb-6'>
              {newsletter.title}
            </div>
            <div className='text-xl text-light mb-[18px]'>
              {newsletter.subtitle}
            </div>
            {/* form */}
            <form className='max-w-[349px] mb-[10px]'>
              <div className='h-[62px] p-[7px] flex border border-dark rounded-lg'>
                <input
                  className='w-full h-full pl-6 border-none outline-none placeholder:text-dark'
                  placeholder={form.placeholder}
                  type='text'
                />
                <button className='btn btn-sm w-[102px] bg-accent rounded-lg text-white hover:bg-accentHover'>
                  {form.btnText}
                </button>
              </div>
            </form>
            <span className='text-sm text-light'>{form.smallText}</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
