import React, {FC, useEffect, useState} from 'react';
import './css/index.css'
import {Link} from "react-scroll";
import MatrixRain from "../MatrixRain";
import CursorAnimation from "../CursorAnimation";

const Header: FC = () => {
    const [width, setWidth] = useState(window.innerWidth-50);
    const [height, setHeight] = useState(700);

    useEffect(() => {
        // if (window.innerWidth < 200) {
        //     setHeight(300)
        // }
    }, [])
    return (
        <div className={'header'}>
            <div className={'header__matrix'}>
                <MatrixRain width={width} height={height}/>
            </div>
            <div className={'header__nav-menu'}>
                <Link className={'header__link'} to="about-system" spy={true} smooth={true}>
                    ABOUT SYSTEM
                </Link>
                <Link className={'header__link'} to="technologies" spy={true} smooth={true}>
                    TECHNOLOGIES
                </Link>
                <Link className={'header__link'} to="feature" spy={true} smooth={true}>
                    REVIEW
                </Link>
            </div>
        </div>
    );
};

export default Header;