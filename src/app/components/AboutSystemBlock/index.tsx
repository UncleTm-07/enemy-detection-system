import React from 'react';
import Sphere from "../SphereBlock";
import CursorAnimation from "../CursorAnimation";
import './css/index.css'
import {LOGIN_PAGE, MAP_PAGE} from "../../utils/consts";

const Index = () => {
    return (
        <div className={'about-system'}>
            <div className={'about-system__title'}>
                ABOUT SYSTEM
            </div>
            <div className={'about-system__container'}>
                <Sphere width={window.innerWidth<612?window.innerWidth<400?200:300:500} height={window.innerWidth<612?window.innerWidth<400?200:300:500}/>
                <div className={"about-system__container__text"}>
                    <div>// Enemy Detection System</div>
                    <div>// ---------------------</div>
                    <div className={'container__text'}> (EDS) is an advanced and sophisticated technology used by law enforcement and intelligence agencies to identify
                        and track individuals or entities that pose a threat or potential danger to national security or public safety.</div>
                    <div className={'container__text'} style={{paddingLeft:"20px"}}>
                        This system combines various data sources, surveillance technologies, and analytical tools to monitor and investigate potential adversaries,
                        such as criminals, terrorists, or foreign intelligence agents.
                        <CursorAnimation/>
                    </div>
                    <div className={'about-system__button'}>
                        <button onClick={() => window.location.href = LOGIN_PAGE}>Try</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Index;