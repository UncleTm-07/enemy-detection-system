import React, {FC} from 'react';
import './css/index.css';
import {LOGIN_PAGE} from "../../utils/consts";
// @ts-ignore
import envelope from '../../images/envelope-svgrepo-com.svg'

const FeatureBlock: FC = () => {
    return (
        <div className={'featureBlock'}>
            <div className={'featureBlock__title'}>
                REVIEW
            </div>
            <div className={'featureBlock__container'}>
                <div className={'featureBlock__container-img'}>
                    <img src={envelope} alt=""/>
                </div>
                <div className="featureBlock__container-el">
                    <div>{'let message = \'\''}</div>
                    <div>{'const sendFunction = () => {'}</div>
                    <div className={'text-padding'}>{'message = \''}<input/>{`\';`}</div>
                    <div className={'text-padding'}>{'axios.post(\'http://localhost:8080/message\', {message})'}</div>
                    <div className={'text-padding'}>{'.then(() => {'}</div>
                    <div className={'text-padding'}>{'print(\'Thank you for leaving a review!\')'}</div>
                    <div className={'text-padding'}>{'})'}</div>
                    <div>{'}'}</div>
                    <div className={'about-system__button'}>
                        <button onClick={() => {}}>SEND</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FeatureBlock;