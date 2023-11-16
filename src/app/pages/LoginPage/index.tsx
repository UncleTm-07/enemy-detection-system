import React, {FC, useEffect, useState} from 'react';
import {User} from "../../data";
import './css/index.css';
import {useLocation} from "react-router-dom";
import CursorAnimation from "../../components/CursorAnimation";

const LoginPage: FC = () => {
    const [user, setUser] = useState({} as User);
    const location = useLocation();
    const login = () => {
        window.location.href = '/map'
    }

    const registration = () => {
        window.location.href = '/map'
    }

    return (
        <div className={'login-console'}>
            <div className={'login-console__header'}>
                <div>Console Line</div>
                <div onClick={() => window.location.href = '/'}>X</div>
            </div>
            <div className={'login-console__main'}>
                <div className={'login-console__main-el'}>
                    <div>EDS [Version 10.0.19045.3570]</div>
                    <div>(c) Корпорація MITIT. Усі права захищені.</div>
                </div>
                {location.pathname === '/login'?
                    <div className="login">
                        <div className={'login-console__main-el'}>
                            <div>WARNING!!!!!!!!!</div>
                            <div>You are not authorized!!!!!</div>
                        </div>
                        <div className={'login-form'}>
                            <label>
                                username
                                <input type="text" onChange={(e) => setUser({...user, "username": e.target.value})}/>
                                <CursorAnimation color={'red'}/>
                            </label>
                            <label>
                                password
                                <input type="text" onChange={(e) => setUser({...user, "password": e.target.value})}/>
                                <CursorAnimation color={'red'}/>
                            </label>
                            <div className={'login-enter'} onClick={login}>enter</div>
                        </div>
                        <div>
                            <div className={'login-route'} onClick={() => window.location.href = '/registration'}>/registration</div>
                        </div>
                    </div>
                    :
                    <div className="registration">
                        <div className={'login-console__main-el'}>
                            <div>WARNING!!!!!!!!!</div>
                            <div>You are not registered!!!!!</div>
                        </div>
                        <div className={'login-form'}>
                            <label>
                                username
                                <input type="text" onChange={(e) => setUser({...user, "username": e.target.value})}/>
                                <CursorAnimation color={'red'} />
                            </label>
                            <label>
                                password
                                <input type="text" onChange={(e) => setUser({...user, "password": e.target.value})}/>
                                <CursorAnimation color={'red'}/>
                            </label>
                            <div className={'login-enter'} onClick={registration}>enter</div>
                        </div>
                        <div>
                            <div className={'login-route'} onClick={() => window.location.href = '/login'}>/login</div>
                        </div>
                    </div>
                }
            </div>
        </div>
    );
};

export default LoginPage;