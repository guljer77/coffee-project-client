import React from 'react';
import Banner from '../../components/banner/Banner';
import FollowSection from '../../components/follow/FollowSection';
import Product from '../../components/popularProduct/Product';
import OurMenu from '../../components/menu/OurMenu';

const Home = () => {
  return (
    <div>
      <Banner />
      <OurMenu />
      <Product />
      <FollowSection />
    </div>
  );
};

export default Home;