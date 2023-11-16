import React, { Component } from 'react';
import './css/index.css'

interface ScrollToTopButtonProps {

}

interface ScrollToTopButtonState {
    isVisible: boolean;
}

class ScrollToTopButton extends Component<ScrollToTopButtonProps, ScrollToTopButtonState> {
    constructor(props: ScrollToTopButtonProps) {
        super(props);
        this.state = {
            isVisible: false,
        };
    }

    componentDidMount() {
        window.addEventListener('scroll', this.handleScroll);
    }

    componentWillUnmount() {
        window.removeEventListener('scroll', this.handleScroll);
    }

    handleScroll = () => {
        if (window.scrollY > 720) {
            this.setState({ isVisible: true });
        } else {
            this.setState({ isVisible: false });
        }
    };

    scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
    };

    render() {
        const { isVisible } = this.state;

        return (
            isVisible && (
                <div className={'scroll-to-top'} onClick={this.scrollToTop}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor"
                         className="bi bi-caret-up" viewBox="0 0 16 16">
                        <path
                            d="M3.204 11h9.592L8 5.519 3.204 11zm-.753-.659 4.796-5.48a1 1 0 0 1 1.506 0l4.796 5.48c.566.647.106 1.659-.753 1.659H3.204a1 1 0 0 1-.753-1.659z"/>
                    </svg>
                </div>
            )
        );
    }
}

export default ScrollToTopButton;
