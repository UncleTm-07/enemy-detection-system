import React, { FC, useEffect, useState } from 'react';

interface TextAnimationProps {
    text?: string;
    animationText: string;
}

const ConsoleText: FC<TextAnimationProps> = ({ text, animationText }) => {
    const [displayedText, setDisplayedText] = useState('');

    useEffect(() => {
        let index = 0;
        const animationInterval = setInterval(() => {
            setDisplayedText((prev) => prev + animationText[index]);
            index++;

            if (index === animationText.length) {
                clearInterval(animationInterval);
            }
        }, 300); // змініть цей параметр, щоб регулювати швидкість анімації

        return () => clearInterval(animationInterval); // очищення інтервалу при виході з компонента
    }, [animationText]);

    return (
        <div className="login-console__main-auto-text">
            <div>{text}</div>
            <div>{displayedText}</div>
        </div>
    );
};

export default ConsoleText;
