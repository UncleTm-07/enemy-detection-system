import React from 'react';
import {Element } from 'react-scroll';
import AboutSystemBlock from "../../components/AboutSystemBlock";
import './css/index.css'
import FeatureBlock from "../../components/FeatureBlock";
import ScrollToTopButton from "../../components/ScrollTopButton";
import TechnologiesBlock from "../../components/TechnologiesBlock";

class HomePage extends React.Component {
    render() {
        return (
            <div className={'homePage'}>
                <Element name="about-system" className={'homePage__element'}>
                    <AboutSystemBlock/>
                </Element>
                <Element name="technologies" className={'homePage__element'}>
                    <TechnologiesBlock/>
                </Element>
                <Element name="feature" className={'homePage__element'}>
                    <FeatureBlock/>
                </Element>
                <ScrollToTopButton/>
            </div>
        );
    }
}

export default HomePage;
