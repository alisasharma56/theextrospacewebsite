import React from 'react';
import { brackets, bracketColors } from './Cornerbrackets.css.ts';

export type BracketColor = 'green' | 'cyan' | 'purple' | 'pink' | 'white';

interface CornerBracketsProps {
    color: BracketColor;
}

export const CornerBrackets: React.FC<CornerBracketsProps> = ({ color }) => {
    const colorClass: string = bracketColors[color];
    return (
        <>
            <span className={`${brackets.topLeft} ${colorClass}`} />
            <span className={`${brackets.topRight} ${colorClass}`} />
            <span className={`${brackets.bottomLeft} ${colorClass}`} />
            <span className={`${brackets.bottomRight} ${colorClass}`} />
        </>
    );
};