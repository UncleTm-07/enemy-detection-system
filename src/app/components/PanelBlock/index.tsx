import React, {FC} from 'react';
import './css/index.css'

interface PanelProps {
    point: any;
}

const PanelBlock: FC<PanelProps> = ({point}) => {
    return (
            <div className={"panelBlock"}>
                <div className={"panelBlock__title"}>PANEL</div>
                {point?
                    <div className={"panelBlock__container"}>
                        <div>{`NAME: ${point?.name}`}</div>
                        <div>{`COR: ${point?.coordinates.latitude}, ${point?.coordinates.longitude}`}</div>
                        <div>{`CITY: ${point?.city}`}</div>
                        <div>{`STATE: ${point?.state}`}</div>
                        <div>{`FREQUENCY: ${point?.frequency}`}</div>
                        <div>{`TRANSMIT POWER: ${point?.transmitPower}`}</div>
                        <div className={'panelBlock__container__status'}>
                            STATUS:
                            <div className={point.status? 'panelBlock__container__status-green' : 'panelBlock__container__status-red'}>
                                ii
                            </div>
                        </div>
                    </div>:
                    <></>
                }
            </div>
    );
};

export default PanelBlock;