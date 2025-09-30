import { useEffect, useRef, useState } from 'react';
import './Jump.css';

const interpolateColor = (
    startColor: string,
    endColor: string,
    factor: number
) => {
    const startHex = startColor.replace('#', '');
    const endHex = endColor.replace('#', '');

    const r1 = parseInt(startHex.substring(0, 2), 16);
    const g1 = parseInt(startHex.substring(2, 4), 16);
    const b1 = parseInt(startHex.substring(4, 6), 16);

    const r2 = parseInt(endHex.substring(0, 2), 16);
    const g2 = parseInt(endHex.substring(2, 4), 16);
    const b2 = parseInt(endHex.substring(4, 6), 16);

    const r = Math.round(r1 + (r2 - r1) * factor);
    const g = Math.round(g1 + (g2 - g1) * factor);
    const b = Math.round(b1 + (b2 - b1) * factor);

    return `#${((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1)}`;
};

const Jump = () => {
    const [color, setColor] = useState('0000ff');
    const [position, setPosition] = useState(0);

    const windowWidth = useRef(window.innerWidth);
    const jumpingSquare = useRef(0);

    const style = {
        transform: `translateX(${position}px)`,
        background: color,
    };

    const JUMP_SQUARE_WIDTH = 50;

    const jumpingSquareAnimation = () => {
        setPosition((prevPosition) => {
            if ( prevPosition >= Number(windowWidth.current - JUMP_SQUARE_WIDTH)) {
                cancelAnimationFrame(jumpingSquare.current);
            }

            return prevPosition + 10;
        });

        setColor((prevColor) => {
            return interpolateColor(prevColor, '#ff0000', 0.035);
        });

        jumpingSquare.current = requestAnimationFrame(jumpingSquareAnimation);
    };

    const handlerStartAnimationJump = () => {
        setPosition(0);
        jumpingSquare.current = requestAnimationFrame(jumpingSquareAnimation);
    };

    return (
        <div
            className='Jumping-square'
            onClick={handlerStartAnimationJump}
            style={style}
        ></div>
    );
};

export { Jump };
