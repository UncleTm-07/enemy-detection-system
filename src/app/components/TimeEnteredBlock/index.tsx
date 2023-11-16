import React, {FC} from 'react';
import './css/index.css'

const TimeEnteredBlock: FC = () => {
    return (
        <div className={"timeEnteredBlock"}>
            <div className={"timeEnteredBlock__title"}>TIME ENTERED THIS WEEK</div>
            <div className={"timeEnteredBlock__container"}>
                <div className="timeEnteredBlock__container__el">
                    <div className={'timeEnteredBlock__percent'}>80%</div>
                    <div className={'timeEnteredBlock__text'}>DAY</div>
                </div>
                <div className="timeEnteredBlock__container__el">
                    <div className={'timeEnteredBlock__percent'}>40%</div>
                    <div className={'timeEnteredBlock__text'}>WEEK</div>
                </div>
                <div className="timeEnteredBlock__container__el">
                    <div className={'timeEnteredBlock__text'}>TIME WORKED TODAY: 7:22:12</div>
                    <div className={'timeEnteredBlock__text'}>TIME WORKED THIS WEEK: 7:22:12</div>
                    <div className={'timeEnteredBlock__text'}>TIME WORKED THIS MONTH: 7:22:12</div>
                </div>
            </div>
        </div>
    );
};

export default TimeEnteredBlock;