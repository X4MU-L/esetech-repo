import React from 'react';

import notes from '../../assets/images/notes.png';

const Hero: React.FC = () => {
  return (
    <section className='pt-[90px] w-full mx-auto my-auto'>
      <header className='header'>
        <div className='content'>
          <h1>Create and track interesting notes</h1>
          <p>
            In today's fast-paced world, access to prompt and efficient notes
            applications is of paramount importance. Write down and track your
            thought process at all times.
          </p>
          <button className='btn'>
            <a href="{% url 'book_appointment' %}" className='btn-link'>
              create notes
            </a>{' '}
          </button>
        </div>
        <div className='image'>
          <span className='image__bg'></span>
          <img src={notes} alt='header image' />
          <div className='image__content image__content__1'>
            <span>
              <i className='ri-user-3-line'></i>
            </span>
            <div className='details'>
              <h4>1520+</h4>
              <p>notes created</p>
            </div>
          </div>
          <div className='image__content image__content__2'>
            <ul>
              <li>
                <span>
                  <i className='ri-check-line'></i>
                </span>
                Let's get your notes versioned
              </li>
              <li>
                <span>
                  <i className='ri-check-line'></i>
                </span>
              </li>
            </ul>
          </div>
        </div>
      </header>
    </section>
  );
};

export default Hero;
