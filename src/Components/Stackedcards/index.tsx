// import React from 'react';
// import {
//     stackContainer,
//     stackCard,
//     stackCardLabel,
//     layerOpacities,
// } from './Stacked.css.ts';
// import { CornerBrackets } from '../Cornerbrackets';
// import type { BracketColor } from '../Cornerbrackets';
//
// interface CardData {
//     label: string;
//     color: BracketColor;
// }
//
// const CARDS: CardData[] = [
//     { label: 'PEOPLE',  color: 'cyan'   },
//     { label: 'PRODUCT', color: 'green'  },
//     { label: 'PROCESS', color: 'pink'   },
//     { label: 'PROJECT', color: 'purple' },
// ];
//
// // 275x366 cards
// // With rotateX(68deg), a top gap of 50px between cards
// // creates the floating slab effect from the reference
// // const CARD_H = 366;
// // const GAP    = 10;
//
// export const StackedCards: React.FC = () => {
//     return (
//         <div className={stackContainer}>
//             {CARDS.map((card, i) => (
//                 <div
//                     key={card.label}
//                     className={stackCard}
//                     style={{
//                         top: `${i * 100}px`,
//                         left: `${i * 50}px`,
//                         opacity:  layerOpacities[i],
//                         zIndex:   CARDS.length - i,
//                     }}
//                 >
//                     <CornerBrackets color={card.color} />
//                     <span className={stackCardLabel}>{card.label}</span>
//                 </div>
//             ))}
//         </div>
//     );
// };
//StackedCard.tsx
import React from 'react';
import {
    stackContainer,
    stackCard,
    stackCardLabel,
    layerOpacities,
} from './Stacked.css.ts';

import { CornerBrackets } from '../Cornerbrackets';
import type { BracketColor } from '../Cornerbrackets';

interface CardData {
    label: string;
    color: BracketColor;
}

const CARDS: CardData[] = [
    { label: 'PEOPLE',  color: 'cyan'   },
    { label: 'PRODUCT', color: 'green'  },
    { label: 'PROCESS', color: 'pink'   },
    { label: 'PROJECT', color: 'purple' },
];

const TEXT_BLURS = [0, 1, 2, 3];

export const StackedCards: React.FC = () => {
    return (
        <div className={stackContainer}>
            {CARDS.map((card, i) => {
                /*
                  PERFECT STACK GEOMETRY

                  x = slight diagonal shift
                  y = tiny vertical separation
                  z = real depth layering
                */

                const x = i * 10;
                const y = i * 22;
                const z = i * -60;

                return (
                    <div
                        key={card.label}
                        className={stackCard}
                        style={{
                            transform: `
                                translate3d(
                                    ${x}px,
                                    ${y}px,
                                    ${z}px
                                )
                            `,
                            opacity: layerOpacities[i],
                            zIndex: CARDS.length - i,
                        }}
                    >
                        <CornerBrackets color={card.color} />

                        <span
                            className={stackCardLabel}
                            style={{
                                filter:
                                    TEXT_BLURS[i] > 0
                                        ? `blur(${TEXT_BLURS[i]}px)`
                                        : 'none',
                            }}
                        >
                            {card.label}
                        </span>
                    </div>
                );
            })}
        </div>
    );
};