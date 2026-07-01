// import React, { useState, useEffect } from 'react';
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
//     cyan: '#8FF5FF', green: '#8EFF71', pink: '#FF6B9B', purple: '#A78BFA',white:'##FFFFFF0D'
// };
//
// const CARD_W = 275;
// const CARD_H = 366;
// const GAP    = 32;
//
// // Horizontal fan (desktop)
// const totalW   = CARD_W * CARDS.length + GAP * (CARDS.length - 1);
// const fanStart = -totalW / 2 + CARD_W / 2;
// const FAN_H = CARDS.map((_, i) => ({
//     x: fanStart + i * (CARD_W + GAP), y: 0,
// }));
//
// // Vertical fan (mobile) — fan downward from top
// const FAN_V = CARDS.map((_, i) => ({
//     x: 0, y: i * (CARD_H + GAP),
// }));
//
// const ISO = CARDS.map((_, i) => ({
//     tx:      i * -10,
//     ty:      i * 5,
//     tz:      i * -60,
//     opacity: 1 - i * 0.18,
//     blur:    i * 1.4,
// }));
//
// const EASE: [number, number, number, number] = [0.22, 1, 0.36, 1];
// const FAST_EASE_OUT: [number, number, number, number] = [0.4, 0, 1, 1];
//
// const MOBILE_BP = 1024;
//
// type Stage = 'iso' | 'collapsing' | 'fan';
//
// export const MorphingCards: React.FC = () => {
//     const [stage, setStage]       = useState<Stage>('iso');
//     const [flipped, setFlipped]   = useState<number | null>(null);
//     const [fanDone, setFanDone]   = useState(false);
//     const [isMobile, setIsMobile] = useState(
//         typeof window !== 'undefined' ? window.innerWidth < MOBILE_BP : false
//     );
//
//     useEffect(() => {
//         const onResize = () => setIsMobile(window.innerWidth < MOBILE_BP);
//         window.addEventListener('resize', onResize);
//         return () => window.removeEventListener('resize', onResize);
//     }, []);
//
//     useEffect(() => {
//         const startTimer = setTimeout(() => {
//             setStage('collapsing');
//             setFanDone(false);
//             const fanTimer = setTimeout(() => {
//                 setStage('fan');
//                 setTimeout(() => setFanDone(true), 4300 + CARDS.length * 80);
//             }, 2000);
//             return () => clearTimeout(fanTimer);
//         }, 800);
//         return () => clearTimeout(startTimer);
//     }, []);
//
//     const isFan = stage === 'fan' || stage === 'collapsing';
//     const FAN   = isMobile ? FAN_V : FAN_H;
//
//     return (
//         <div className={styles.sceneWrapper}>
//             {!isFan ? (
//                 // ── STACKED ──────────────────────────────────────────────────
//                 <div style={{ perspective: '2200px', perspectiveOrigin: 'center center' }}>
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
//                                 <div
//                                     className={styles.cardGlass}
//                                     style={{
//                                         boxShadow: `0 0 40px 2px ${card.hexColor}0D inset, 0 10px 40px 0 rgba(0,0,0,0.30)`,
//                                     }}
//                                 >
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
//                 <div style={{
//                     width:             '100%',
//                     background:        'transparent',
//                     perspective:       isMobile ? undefined : '2200px',
//                     perspectiveOrigin: isMobile ? undefined : 'center center',
//
//                 }}>
//                     <motion.div
//                         className={isMobile ? styles.fanSceneVertical : styles.fanScene}
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
//                                             ? { x: 0, y: 0, z: 0, opacity: i === 0 ? 1 : 0 }
//                                             : { x: FAN[i].x, y: FAN[i].y, z: 0, opacity: 1 }
//                                         }
//                                         transition={stage === 'collapsing'
//                                             ? i === 0
//                                                 ? { duration: 3.8, ease: EASE }
//                                                 : { duration: 1.2, ease: FAST_EASE_OUT }
//                                             : { duration: 4.3, delay: i * 0.08, ease: EASE }
//                                         }
//                                         style={{ zIndex: i }}
//                                         onHoverStart={() => { if (fanDone) setFlipped(i); }}
//                                         onHoverEnd={()   => setFlipped(null)}
//                                     >
//                                         <div style={{ width: '100%', height: '100%', perspective: '1200px' }}>
//                                             <motion.div
//                                                 className={styles.flipInner}
//                                                 animate={{ rotateY: isFlipped ? 180 : 0 }}
//                                                 transition={{ duration: 1.2, ease: EASE }}
//                                             >
//                                                 {/* Front */}
//                                                 <div
//                                                     className={styles.cardFront}
//                                                     style={{
//                                                         boxShadow: `0 0 40px 2px ${card.hexColor}0D inset, 0 10px 40px 0 rgba(0,0,0,0.30)`,
//                                                     }}
//                                                 >
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
//                                                         boxShadow: `0 0 40px 2px ${card.hexColor}0D inset, 0 10px 40px 0 rgba(0,0,0,0.30)`,
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
import { useNavigate } from 'react-router-dom';
import { CornerBrackets } from '../Cornerbrackets';
import type { BracketColor } from '../Cornerbrackets';
import * as styles from './MorphingCards.css';

interface CardData {
    label:     string;
    color:     BracketColor;
    hexColor:  string;
    detail:    string;
    stat:      string;
    statLabel: string;
    route:     string;
}

const CARDS: CardData[] = [
    { label: 'WHO BUILDS',    color: 'cyan',   hexColor: '#22d3ee', detail: "The people writing the code, fighting the deadlines, and refusing to ship anything they wouldn't use themselves.", stat: '12K+', statLabel: 'Active Members',    route: '/people'  },
    { label: 'WHAT SHIPS',   color: 'green',  hexColor: '#4ade80', detail: 'Three products, three different lives they\'re designed to fit into — built to be used, not just downloaded.',   stat: '340+', statLabel: 'Shipped Products',   route: '/product' },
    { label: 'HOW IT RUNS',  color: 'pink',   hexColor: '#f472b6', detail: 'A six-stage architecture behind every release. Not a slogan. An actual system.',                                  stat: '99%',  statLabel: 'Delivery Rate',    route: '/process' },
    { label: 'WHERE IT LANDS', color: 'purple', hexColor: '#a855f7', detail: 'The market, the timing, the bet on who\'s waiting for this. The part that decides if any of the rest mattered.', stat: '200+', statLabel: 'Projects Completed', route: '/project' },
];

const CARD_COLOR: Record<string, string> = {
    cyan: '#8FF5FF', green: '#8EFF71', pink: '#FF6B9B', purple: '#A78BFA', white: '#FFFFFF0D',
};

const CARD_W = 275;
const CARD_H = 366;
const GAP    = 32;

const totalW   = CARD_W * CARDS.length + GAP * (CARDS.length - 1);
const fanStart = -totalW / 2 + CARD_W / 2;
const FAN_H = CARDS.map((_, i) => ({ x: fanStart + i * (CARD_W + GAP), y: 0 }));
const FAN_V = CARDS.map((_, i) => ({ x: 0, y: i * (CARD_H + GAP) }));

const ISO = CARDS.map((_, i) => ({
    tx:      i * -10,
    ty:      i * 5,
    tz:      i * -60,
    opacity: 1 - i * 0.18,
    blur:    i * 1.4,
}));

const EASE: [number, number, number, number]          = [0.22, 1, 0.36, 1];
const FAST_EASE_OUT: [number, number, number, number] = [0.4, 0, 1, 1];
const MOBILE_BP = 1024;

type Stage = 'iso' | 'collapsing' | 'fan';

// Module-level variable — resets on page refresh, persists during SPA navigation
let hasFanned = false;

export const MorphingCards: React.FC = () => {
    const navigate = useNavigate();

    const alreadyFanned = hasFanned;

    const [stage, setStage]       = useState<Stage>(alreadyFanned ? 'fan' : 'iso');
    const [flipped, setFlipped]   = useState<number | null>(null);
    const [prevFlipped, setPrevFlipped] = useState<number | null>(null);
    const [fanDone, setFanDone]   = useState(alreadyFanned);
    const [isMobile, setIsMobile] = useState(
        typeof window !== 'undefined' ? window.innerWidth < MOBILE_BP : false
    );

    useEffect(() => {
        const onResize = () => setIsMobile(window.innerWidth < MOBILE_BP);
        window.addEventListener('resize', onResize);
        return () => window.removeEventListener('resize', onResize);
    }, []);

    useEffect(() => {
        // Skip animation if already fanned
        if (alreadyFanned) return;

        const startTimer = setTimeout(() => {
            setStage('collapsing');
            setFanDone(false);
            const fanTimer = setTimeout(() => {
                setStage('fan');
                setTimeout(() => {
                    setFanDone(true);
                    hasFanned = true;
                }, 2000);
            }, 2000);
            return () => clearTimeout(fanTimer);
        }, 800);
        return () => clearTimeout(startTimer);
    }, []);

    const handleHoverStart = (i: number) => {
        if (!fanDone) return;
        // Flip in the new card
        setFlipped(i);
        // Remember the previous to flip back (with delay)
        if (flipped !== null && flipped !== i) {
            setPrevFlipped(flipped);
            setTimeout(() => setPrevFlipped(null), 900);
        }
    };

    const handleHoverEnd = () => {
        setFlipped(null);
    };

    const isFan = stage === 'fan' || stage === 'collapsing';
    const FAN   = isMobile ? FAN_V : FAN_H;

    return (
        <div className={styles.sceneWrapper}>
            {!isFan ? (
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
                                    style={{ boxShadow: `0 0 40px 2px ${card.hexColor}0D inset, 0 10px 40px 0 rgba(0,0,0,0.30)` }}
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
                <div style={{
                    width:             '100%',
                    background:        'transparent',
                    perspective:       isMobile ? undefined : '2200px',
                    perspectiveOrigin: isMobile ? undefined : 'center center',
                }}>
                    <motion.div
                        className={isMobile ? styles.fanSceneVertical : styles.fanScene}
                        initial={alreadyFanned ? { rotateX: 0, rotateZ: 0 } : { rotateX: 72, rotateZ: 36 }}
                        animate={{ rotateX: 0, rotateZ: 0 }}
                        transition={{ duration: 1.4, ease: EASE }}
                    >
                        <AnimatePresence>
                            {CARDS.map((card, i) => {
                                const isFlipped     = flipped === i;
                                // Prev card flips back with a slight delay (rotateY stays 180 briefly)
                                const isPrevFlipped = prevFlipped === i;
                                const accentColor   = CARD_COLOR[card.color];

                                return (
                                    <motion.div
                                        key={card.label}
                                        className={styles.isoCard}
                                        initial={alreadyFanned
                                            ? { x: FAN_H[i].x, y: 0, z: 0, opacity: 1 }
                                            : { x: ISO[i].tx, y: ISO[i].ty, z: ISO[i].tz, opacity: ISO[i].opacity }
                                        }
                                        animate={stage === 'collapsing'
                                            ? { x: 0, y: 0, z: 0, opacity: i === 0 ? 1 : 0 }
                                            : { x: FAN[i].x, y: FAN[i].y, z: 0, opacity: 1 }
                                        }
                                        transition={stage === 'collapsing'
                                            ? i === 0
                                                ? { duration: 3.8, ease: EASE }
                                                : { duration: 1.2, ease: FAST_EASE_OUT }
                                            : alreadyFanned
                                                ? { duration: 0 }
                                                : { duration: 4.3, delay: i * 0.08, ease: EASE }
                                        }
                                        style={{ zIndex: i, cursor: fanDone ? 'pointer' : 'default' }}
                                        onHoverStart={() => handleHoverStart(i)}
                                        onHoverEnd={handleHoverEnd}
                                        onClick={() => { if (fanDone) navigate(card.route); }}
                                    >
                                        <div style={{ width: '100%', height: '100%', perspective: '1200px' }}>
                                            <motion.div
                                                className={styles.flipInner}
                                                animate={{ rotateY: isFlipped ? 180 : 0 }}
                                                transition={{
                                                    duration: isFlipped ? 1.2 : isPrevFlipped ? 1.0 : 1.2,
                                                    ease:     EASE,
                                                    // Prev card flips back 800ms later than new card flips in
                                                    delay:    isPrevFlipped ? 0.8 : 0,
                                                }}
                                            >
                                                {/* Front */}
                                                <div
                                                    className={styles.cardFront}
                                                    style={{ boxShadow: `0 0 40px 2px ${card.hexColor}0D inset, 0 10px 40px 0 rgba(0,0,0,0.30)` }}
                                                >
                                                    <CornerBrackets color={card.color} />
                                                    <div className={styles.frontContent}>
                                                        <h3 className={styles.frontLabel}>{card.label}</h3>
                                                    </div>
                                                </div>
                                                {/* Back */}
                                                <div
                                                    className={styles.cardBack}
                                                    style={{
                                                        background: `radial-gradient(ellipse at 50% 0%, ${accentColor}14 0%, #090909 65%)`,
                                                        boxShadow:  `0 0 40px 2px ${card.hexColor}0D inset, 0 10px 40px 0 rgba(0,0,0,0.30)`,
                                                    }}
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