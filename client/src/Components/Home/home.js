import React, { useContext } from 'react';
import Header from '../Header/header';
import Particles from '../Particles/particles';
import AboutUs from '../AboutUs/aboutus';
import LatestNews from '../LatestNews/latest_news';
import Teachers from '../Teachers/teachers';
import Courses from '../Courses/courses';
import ContactUs from '../ContactUs/contact_us';
import Footer from '../Footer/footer';


import { AuthContext } from "../../Context/AuthContext";

function HomePage() {
    const authContext = useContext(AuthContext);

    return (
        <div className="homePage">
            <Header />
            <Particles />
            <AboutUs />
            <LatestNews />
            <Teachers />
            <Courses />
            <ContactUs />
            <Footer />
        </div>
    )
}

export default HomePage;