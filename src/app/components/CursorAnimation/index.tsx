import React, {FC} from 'react';
import './css/index.css'

interface IColor {
    color?:string;
}
const CursorAnimation: FC<IColor> = ({color}) => {
    return <span style={{color: color}} className={'cursor'}>█</span>
};

export default CursorAnimation;