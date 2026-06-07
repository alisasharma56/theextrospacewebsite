// import React, { useState } from 'react';
// import { motion, AnimatePresence } from 'framer-motion';
// import { CornerBrackets } from '../Cornerbrackets';
// import type { BracketColor } from '../Cornerbrackets';
// import * as styles from './MorphingCards.css';
//
// interface CardData {
//     label: string;
//     color: BracketColor;
//     hexColor: string;
//     detail: string;
//     stat: string;
//     statLabel: string;
// }
//
// const CARDS: CardData[] = [
//     { label: 'PEOPLE',  color: 'cyan',   hexColor: '#22d3ee', detail: 'Global Network Interconnected Via Neural-Sync Workflows.', stat: '12K+', statLabel: 'Active Members'    },
//     { label: 'PRODUCT', color: 'green',  hexColor: '#4ade80', detail: 'High-Fidelity Artifacts Designed For The Digital Age.',   stat: '340+', statLabel: 'Shipped Products'   },
//     { label: 'PROCESS', color: 'pink',   hexColor: '#f472b6', detail: 'Systems That Scale. Workflows Built For Speed & Precision.', stat: '99%', statLabel: 'Delivery Rate'    },
//     { label: 'PROJECT', color: 'purple', hexColor: '#a855f7', detail: 'End-To-End Execution. From Concept To Launch.',           stat: '200+', statLabel: 'Projects Completed' },
// ];
//
// const CARD_COLOR: Record<BracketColor, string> = {
//     cyan: '#8FF5FF', green: '#8EFF71', pink: '#FF6B9B', purple: '#A78BFA',
// };
//
// const CARD_W = 275;
// const GAP    = 32;
//
// const ISO = CARDS.map((_, i) => ({
//     tx:      i * -10,
//     ty:      i * 5,
//     tz:      i * -60,
//     opacity: 1 - i * 0.18,
//     blur:    i * 1.4,
// }));
//
// const totalW   = CARD_W * CARDS.length + GAP * (CARDS.length - 1);
// const fanStart = -totalW / 2 + CARD_W / 2;
// const FAN = CARDS.map((_, i) => ({
//     tx: fanStart + i * (CARD_W + GAP),
//     ty: 0, tz: 0, opacity: 1, blur: 0,
// }));
//
// const EASE: [number, number, number, number] = [0.22, 1, 0.36, 1];
//
// type Stage = 'iso' | 'collapsing' | 'fan';
//
// export const MorphingCards: React.FC = () => {
//     const [stage, setStage]         = useState<Stage>('iso');
//     const [flipped, setFlipped]     = useState<number | null>(null);
//     const [spreading, setSpreading] = useState(false);
//
//     const handleMouseEnter = () => {
//         if (stage !== 'iso') return;
//         setStage('collapsing');
//         setSpreading(true);
//         // Shorter pause after collapse before fanning
//         setTimeout(() => {
//             setStage('fan');
//             setTimeout(() => setSpreading(false), 4300 + CARDS.length * 80);
//         }, 2000);
//     };
//
//     const isFan = stage === 'fan' || stage === 'collapsing';
//
//     return (
//         <div className={styles.sceneWrapper}>
//             {!isFan ? (
//                 // ── STACKED ──────────────────────────────────────────────────
//                 <div
//                     onMouseEnter={handleMouseEnter}
//                     style={{ perspective: '2200px', perspectiveOrigin: 'center center', cursor: 'pointer' }}
//                 >
//                     <motion.div
//                         className={styles.isoScene}
//                         initial={{ rotateX: 72, rotateZ: 36 }}
//                         animate={{ rotateX: 72, rotateZ: 36 }}
//                     >
//                         {CARDS.map((card, i) => (
//                             <motion.div
//                                 key={card.label}
//                                 className={styles.isoCard}
//                                 initial={{ x: ISO[i].tx, y: ISO[i].ty, z: ISO[i].tz, opacity: ISO[i].opacity }}
//                                 animate={{ x: ISO[i].tx, y: ISO[i].ty, z: ISO[i].tz, opacity: ISO[i].opacity }}
//                                 style={{ zIndex: CARDS.length - i }}
//                             >
//                                 {/* Exact Figma card CSS via cardGlass */}
//                                 <div className={styles.cardGlass}>
//                                     <CornerBrackets color={card.color} />
//                                     <span
//                                         className={styles.isoLabel}
//                                         style={{ filter: ISO[i].blur > 0.05 ? `blur(${ISO[i].blur.toFixed(1)}px)` : 'none' }}
//                                     >
//                                         {card.label}
//                                     </span>
//                                 </div>
//                             </motion.div>
//                         ))}
//                     </motion.div>
//                 </div>
//
//             ) : (
//                 // ── FAN ───────────────────────────────────────────────────────
//                 <div style={{ perspective: '2200px', perspectiveOrigin: 'center center', width: '100%' }}>
//                     <motion.div
//                         className={styles.fanScene}
//                         initial={{ rotateX: 72, rotateZ: 36 }}
//                         animate={{ rotateX: 0, rotateZ: 0 }}
//                         transition={{ duration: 1.4, ease: EASE }}
//                     >
//                         <AnimatePresence>
//                             {CARDS.map((card, i) => {
//                                 const isFlipped   = flipped === i;
//                                 const accentColor = CARD_COLOR[card.color];
//
//                                 return (
//                                     <motion.div
//                                         key={card.label}
//                                         className={styles.isoCard}
//                                         initial={{ x: ISO[i].tx, y: ISO[i].ty, z: ISO[i].tz, opacity: ISO[i].opacity }}
//                                         animate={stage === 'collapsing'
//                                             // All 4 cards collapse to centre — all visible so you see them stack
//                                             ? { x: 0, y: 0, z: 0, opacity: 1 - i * 0.18 }
//                                             // Fan out from centre
//                                             : { x: FAN[i].tx, y: 0, z: 0, opacity: 1 }
//                                         }
//                                         transition={stage === 'collapsing'
//                                             ? { duration: 3.8, ease: EASE }
//                                             : { duration: 4.3, delay: i * 0.08, ease: EASE }
//                                         }
//                                         style={{ zIndex: i }}
//                                         onHoverStart={() => { if (!spreading) setFlipped(i); }}
//                                         onHoverEnd={()   => setFlipped(null)}
//                                     >
//                                         <div style={{ width: '100%', height: '100%', perspective: '1200px' }}>
//                                             <motion.div
//                                                 className={styles.flipInner}
//                                                 animate={{ rotateY: isFlipped ? 180 : 0 }}
//                                                 transition={{ duration: 1.2, ease: EASE }}
//                                             >
//                                                 {/* Front */}
//                                                 <div className={styles.cardFront}>
//                                                     <CornerBrackets color={card.color} />
//                                                     <div className={styles.frontContent}>
//                                                         <h3 className={styles.frontLabel}>{card.label}</h3>
//                                                     </div>
//                                                 </div>
//                                                 {/* Back */}
//                                                 <div
//                                                     className={styles.cardBack}
//                                                     style={{
//                                                         background: `radial-gradient(ellipse at 50% 0%, ${accentColor}14 0%, #090909 65%)`,
//                                                     }}
//                                                 >
//                                                     <CornerBrackets color={card.color} />
//                                                     <div className={styles.backContent}>
//                                                         <span className={styles.backCategory} style={{ color: accentColor }}>{card.label}</span>
//                                                         <p className={styles.backDetail}>{card.detail}</p>
//                                                         <div className={styles.backStat} style={{ color: accentColor }}>
//                                                             {card.stat}
//                                                             <span className={styles.backStatLabel}>{card.statLabel}</span>
//                                                         </div>
//                                                     </div>
//                                                 </div>
//                                             </motion.div>
//                                         </div>
//                                     </motion.div>
//                                 );
//                             })}
//                         </AnimatePresence>
//                     </motion.div>
//                 </div>
//             )}
//         </div>
//     );
// };

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { CornerBrackets } from '../Cornerbrackets';
import type { BracketColor } from '../Cornerbrackets';
import * as styles from './MorphingCards.css';

interface CardData {
    label: string;
    color: BracketColor;
    hexColor: string;
    detail: string;
    stat: string;
    statLabel: string;
}

const CARDS: CardData[] = [
    { label: 'PEOPLE',  color: 'cyan',   hexColor: '#22d3ee', detail: 'Global Network Interconnected Via Neural-Sync Workflows.', stat: '12K+', statLabel: 'Active Members'    },
    { label: 'PRODUCT', color: 'green',  hexColor: '#4ade80', detail: 'High-Fidelity Artifacts Designed For The Digital Age.',   stat: '340+', statLabel: 'Shipped Products'   },
    { label: 'PROCESS', color: 'pink',   hexColor: '#f472b6', detail: 'Systems That Scale. Workflows Built For Speed & Precision.', stat: '99%', statLabel: 'Delivery Rate'    },
    { label: 'PROJECT', color: 'purple', hexColor: '#a855f7', detail: 'End-To-End Execution. From Concept To Launch.',           stat: '200+', statLabel: 'Projects Completed' },
];

const CARD_COLOR: Record<BracketColor, string> = {
    cyan: '#8FF5FF', green: '#8EFF71', pink: '#FF6B9B', purple: '#A78BFA',
};

const CARD_W = 275;
const GAP    = 32;

const ISO = CARDS.map((_, i) => ({
    tx:      i * -10,
    ty:      i * 5,
    tz:      i * -60,
    opacity: 1 - i * 0.18,
    blur:    i * 1.4,
}));

const totalW   = CARD_W * CARDS.length + GAP * (CARDS.length - 1);
const fanStart = -totalW / 2 + CARD_W / 2;
const FAN = CARDS.map((_, i) => ({
    tx: fanStart + i * (CARD_W + GAP),
    ty: 0, tz: 0, opacity: 1, blur: 0,
}));

const EASE: [number, number, number, number] = [0.22, 1, 0.36, 1];
const FAST_EASE_OUT: [number, number, number, number] = [0.4, 0, 1, 1];

type Stage = 'iso' | 'collapsing' | 'fan';

export const MorphingCards: React.FC = () => {
    const [stage, setStage]         = useState<Stage>('iso');
    const [flipped, setFlipped]     = useState<number | null>(null);
    const [spreading, setSpreading] = useState(false);

    useEffect(() => {
        const startTimer = setTimeout(() => {
            setStage('collapsing');
            setSpreading(true);
            const fanTimer = setTimeout(() => {
                setStage('fan');
                setTimeout(() => setSpreading(false), 4300 + CARDS.length * 80);
            }, 3800);
            return () => clearTimeout(fanTimer);
        }, 800);
        return () => clearTimeout(startTimer);
    }, []);

    const isFan = stage === 'fan' || stage === 'collapsing';

    return (
        <div className={styles.sceneWrapper}>
            {!isFan ? (
                // ── STACKED ──────────────────────────────────────────────────
                <div style={{ perspective: '2200px', perspectiveOrigin: 'center center' }}>
                    <motion.div
                        className={styles.isoScene}
                        initial={{ rotateX: 72, rotateZ: 36 }}
                        animate={{ rotateX: 72, rotateZ: 36 }}
                    >
                        {CARDS.map((card, i) => (
                            <motion.div
                                key={card.label}
                                className={styles.isoCard}
                                initial={{ x: ISO[i].tx, y: ISO[i].ty, z: ISO[i].tz, opacity: ISO[i].opacity }}
                                animate={{ x: ISO[i].tx, y: ISO[i].ty, z: ISO[i].tz, opacity: ISO[i].opacity }}
                                style={{ zIndex: CARDS.length - i }}
                            >
                                <div
                                    className={styles.cardGlass}
                                    style={{
                                        background: `radial-gradient(ellipse at 50% 100%, ${card.hexColor}0D 0%, rgba(8,8,8,0.72) 70%)`,
                                    }}
                                >
                                    <CornerBrackets color={card.color} />
                                    <span
                                        className={styles.isoLabel}
                                        style={{ filter: ISO[i].blur > 0.05 ? `blur(${ISO[i].blur.toFixed(1)}px)` : 'none' }}
                                    >
                                        {card.label}
                                    </span>
                                </div>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>

            ) : (
                // ── FAN ───────────────────────────────────────────────────────
                <div style={{ perspective: '2200px', perspectiveOrigin: 'center center', width: '100%' }}>
                    <motion.div
                        className={styles.fanScene}
                        initial={{ rotateX: 72, rotateZ: 36 }}
                        animate={{ rotateX: 0, rotateZ: 0 }}
                        transition={{ duration: 1.4, ease: EASE }}
                    >
                        <AnimatePresence>
                            {CARDS.map((card, i) => {
                                const isFlipped   = flipped === i;
                                const accentColor = CARD_COLOR[card.color];

                                // Subtle radial color from bottom — no border, just tint
                                const frontBg = `radial-gradient(ellipse at 50% 100%, ${card.hexColor}0D 0%, rgba(8,8,8,0.72) 70%)`;
                                const backBg  = `radial-gradient(ellipse at 50% 0%, ${accentColor}10 0%, rgba(14,14,14,0.80) 60%)`;

                                return (
                                    <motion.div
                                        key={card.label}
                                        className={styles.isoCard}
                                        initial={{ x: ISO[i].tx, y: ISO[i].ty, z: ISO[i].tz, opacity: ISO[i].opacity }}
                                        animate={stage === 'collapsing'
                                            ? { x: 0, y: 0, z: 0, opacity: i === 0 ? 1 : 0 }
                                            : { x: FAN[i].tx, y: 0, z: 0, opacity: 1 }
                                        }
                                        transition={stage === 'collapsing'
                                            ? i === 0
                                                ? { duration: 5.5, ease: EASE }
                                                : { duration: 1.2, ease: FAST_EASE_OUT }
                                            : { duration: 4.3, delay: i * 0.08, ease: EASE }
                                        }
                                        style={{ zIndex: i }}
                                        onHoverStart={() => { if (!spreading) setFlipped(i); }}
                                        onHoverEnd={()   => setFlipped(null)}
                                    >
                                        <div style={{ width: '100%', height: '100%', perspective: '1200px' }}>
                                            <motion.div
                                                className={styles.flipInner}
                                                animate={{ rotateY: isFlipped ? 180 : 0 }}
                                                transition={{ duration: 1.2, ease: EASE }}
                                            >
                                                {/* Front — subtle colour tint from bottom, no border */}
                                                <div
                                                    className={styles.cardFront}
                                                    style={{ background: frontBg }}
                                                >
                                                    <CornerBrackets color={card.color} />
                                                    <div className={styles.frontContent}>
                                                        <h3 className={styles.frontLabel}>{card.label}</h3>
                                                    </div>
                                                </div>

                                                {/* Back — accent radial from top */}
                                                <div
                                                    className={styles.cardBack}
                                                    style={{ background: backBg }}
                                                >
                                                    <CornerBrackets color={card.color} />
                                                    <div className={styles.backContent}>
                                                        <span className={styles.backCategory} style={{ color: accentColor }}>{card.label}</span>
                                                        <p className={styles.backDetail}>{card.detail}</p>
                                                        <div className={styles.backStat} style={{ color: accentColor }}>
                                                            {card.stat}
                                                            <span className={styles.backStatLabel}>{card.statLabel}</span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </motion.div>
                                        </div>
                                    </motion.div>
                                );
                            })}
                        </AnimatePresence>
                    </motion.div>
                </div>
            )}
        </div>
    );
};