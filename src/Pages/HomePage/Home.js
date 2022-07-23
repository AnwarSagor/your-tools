import React from 'react';
import Banner from './Banner';
import BusinessSummary from './BusinessSummary';
import HomeTools from './HomeTools';
import Reviews from './Reviews';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <HomeTools></HomeTools>
            <Reviews></Reviews>
            <BusinessSummary></BusinessSummary>
        </div>
    );
};

export default Home;