import React from 'react';
import Hero from './Hero';
import OurServices from './OurServices';
import FeaturedProperties from './FeaturedProperties';
import Testimonials from './Testimonials';

const FrontPage = () => {
    return (
        <div>
            <Hero></Hero>
            <OurServices></OurServices>
            <FeaturedProperties></FeaturedProperties>
            <Testimonials></Testimonials>
        </div>
    );
};

export default FrontPage;