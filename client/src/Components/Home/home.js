import React from 'react';
import Header from '../Header/header';
import ParticlesComponent from '../Particles/particles';
import AboutUs from '../AboutUs/aboutus';
import LatestNews from '../LatestNews/latest_news';
import Teachers from '../Teachers/teachers';
import Courses from '../Courses/courses';
import ContactUs from '../ContactUs/contact_us';
import Footer from '../Footer/footer';



class HomePage extends React.Component {
    render() {
        return (
            <div className="homePage">
                <Header />
                <ParticlesComponent />
                <AboutUs />
                <LatestNews />
                <Teachers />
                <Courses />
                <ContactUs />
                <Footer />
            </div>
        )
    }
};


export default HomePage;