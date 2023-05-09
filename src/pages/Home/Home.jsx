import React from 'react';

import { useSelector } from 'react-redux';

import BooksRow from '../../components/BooksRow/BooksRow';
import LoadMore from '../../components/LoadMore/LoadMore';
import Search from '../../components/Search/Search';
import { style } from './Home.css';
const Home = () => {
  const { searchValue, startIndex } = useSelector((state) => state.book);
  return (
    <>
      <section className="main">
        <div className="container">
          <div className="main__info">
            <h1 className="main__title">Поиск книг</h1>
            <p className="main__text">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dicta, perspiciatis.
              Voluptatem saepe ea eligendi repudiandae totam cumque nulla doloribus rem possimus?
              Nemo sed exercitationem ratione repudiandae beatae aliquam ipsa commodi?
            </p>
            <Search props={{ startIndex, searchValue }} />
          </div>
        </div>
      </section>
      <BooksRow />
    </>
  );
};

export default Home;
