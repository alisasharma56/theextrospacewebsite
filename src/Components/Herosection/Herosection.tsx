// import React from 'react';
// import {
//     heroWrapper, headerBlock, meetLabel,
//     mainTitle, tagline, cardsArea,
//     titleRow, titleLine,
// } from '../Herosection/Herosection.css.ts';
// import { MorphingCards } from '../Morphingcards';
// import GridBackground from '../GridBackground/GridBackground';
//
// export const HeroSection: React.FC = () => {
//     return (
//         <div className={heroWrapper}>
//             <div className={headerBlock}>
//                 <p className={meetLabel}>MEET</p>
//                 <div className={titleRow}>
//                     <span className={titleLine} />
//                     <h1 className={mainTitle}>THEEXTROSPACE</h1>
//                     <span className={titleLine} />
//                 </div>
//                 <p className={tagline}>THE FUTURE IS HERE</p>
//             </div>
//
//             <div className={cardsArea}>
//                 <MorphingCards />
//             </div>
//
//             {/* Grid sits at bottom of heroWrapper, behind cards */}
//             <GridBackground />
//         </div>
//     );
// };


import React, { useState } from 'react';
import {
    heroWrapper, headerBlock, meetLabel,
    mainTitle, tagline, cardsArea,
    titleRow, titleLine, contactWrapper, contactBtn,
} from '../Herosection/Herosection.css.ts';
import { MorphingCards } from '../Morphingcards';
import GridBackground from '../GridBackground/GridBackground';
import { CornerBrackets } from '../Cornerbrackets';
import {ContactModal} from "../ContactModal/ConatactModal.tsx";

export const HeroSection: React.FC = () => {
    const [showContact, setShowContact] = useState(false);

    return (
        <div className={heroWrapper}>
            <div className={headerBlock}>
                <p className={meetLabel}>MEET</p>
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

            {/* Contact Us button */}
            {/* Contact Us button */}
            <div className={contactWrapper}>
                <button className={contactBtn} onClick={() => setShowContact(true)}>
                    <CornerBrackets color='white' />
                    CONTACT US
                </button>
            </div>

            {/* Grid sits at bottom of heroWrapper, behind cards */}
            <GridBackground />

            {/* Contact modal */}
            {showContact && <ContactModal onClose={() => setShowContact(false)} />}


        </div>
    );
};