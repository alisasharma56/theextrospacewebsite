import React from 'react';
import {
    heroWrapper, headerBlock, meetLabel,
    mainTitle, tagline, cardsArea,
    titleRow, titleLine,
} from '../Herosection/Herosection.css.ts';
import { GridBackground } from '../GridBackground/GridBackground';
import { MorphingCards } from '../Morphingcards';

export const HeroSection: React.FC = () => {
    return (
        <div className={heroWrapper}>
            <div className={headerBlock}>
                <p className={meetLabel}>MEET</p>

                {/* Title with side lines */}
                <div className={titleRow}>
                    <span className={titleLine} />
                    <h1 className={mainTitle}>THEEXTROSPACE</h1>
                    <span className={titleLine} />
                </div>

                <p className={tagline}>THE FUTURE IS HERE</p>
            </div>

            <div className={cardsArea}>
                <MorphingCards />
            </div>

            <GridBackground />
        </div>
    );
};