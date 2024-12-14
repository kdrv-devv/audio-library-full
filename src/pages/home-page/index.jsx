import React from 'react'
import  Navbar  from "../../components/home-components/navbar";
import Showcase from '../../components/home-components/showcase';
import NewBooks from '../../components/home-components/new-books';
import PopularBooks from '../../components/home-components/popular-books';
import ChoiseAuthor from '../../components/home-components/choise-author';
import AllBooks from '../../components/home-components/all-books';
import Collections from '../../components/home-components/collections';
import InfoComponent from '../../components/home-components/info';
const Home = () => {
  return (
        <>
            <Navbar/>
            <Showcase/>
            <NewBooks/>
            <PopularBooks/>
            <ChoiseAuthor/>
            <AllBooks/>
            <Collections/>
            <InfoComponent/>
        </>
  )
}

export default Home