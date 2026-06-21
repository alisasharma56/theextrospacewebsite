// import React, { useState } from 'react';
// import { motion } from 'framer-motion';
// import { CornerBrackets } from '../../Components/Cornerbrackets';
// import * as styles from './People.css.ts';
//
// interface Person {
//     name:  string;
//     role:  string;
//     image: string;
//     color: 'cyan' | 'green' | 'pink' | 'purple';
//     hexColor: string;
// }
//
// const ACCENT: Record<string, string> = {
//     cyan:   '#8FF5FF',
//     green:  '#8EFF71',
//     pink:   '#FF6B9B',
//     purple: '#A78BFA',
// };
//
// const PEOPLE: Person[] = [
//     { name: 'ER. SUSISH',    role: 'Co-Founder',              image: '/images/people/susish.jpg',   color: 'cyan',   hexColor: '#22d3ee' },
//     { name: 'YAMAN',         role: 'Co-Founder',              image: '/images/people/yaman.jpg',    color: 'green',  hexColor: '#4ade80' },
//     { name: 'ER. ABHINASH',  role: 'AI',                      image: '/images/people/abhinash.jpg', color: 'pink',   hexColor: '#f472b6' },
//     { name: 'ER. JAYAN',     role: 'AI',                      image: '/images/people/jayan.jpg',    color: 'purple', hexColor: '#a855f7' },
//     { name: 'SUBASH POUDEL', role: 'AI',                      image: '/images/people/subash.jpg',   color: 'cyan',   hexColor: '#22d3ee' },
//     { name: 'ER. AASUPA',    role: 'AI',                      image: '/images/people/aasupa.jpg',   color: 'green',  hexColor: '#4ade80' },
//     { name: 'ALISHA',        role: 'Frontend Developer',      image: '/images/people/alisha.jpg',   color: 'pink',   hexColor: '#f472b6' },
//     { name: 'NISHA GODAR',   role: 'Admin',                   image: '/images/people/nisha.jpg',    color: 'purple', hexColor: '#a855f7' },
//     { name: 'SANZAY PAHARI', role: 'Senior Frontend Developer', image: '/images/people/sanzay.jpg', color: 'cyan',   hexColor: '#22d3ee' },
//     { name: 'PRABIN GURUNG', role: 'Frontend Developer',      image: '/images/people/alisha.jpg',   color: 'pink',   hexColor: '#f472b6' },
//     { name: 'NISHA GODAR',   role: 'Admin',                   image: '/images/people/nisha.jpg',    color: 'purple', hexColor: '#a855f7' },
//     { name: 'SANZAY PAHARI', role: 'Senior Frontend Developer', image: '/images/people/sanzay.jpg', color: 'cyan',   hexColor: '#22d3ee' },
// ];
//
// const EASE: [number, number, number, number] = [0.22, 1, 0.36, 1];
//
// export const People: React.FC = () => {
//     const [flipped, setFlipped] = useState<number | null>(null);
//
//     return (
//         <section className={styles.section}>
//             {/* Header */}
//             <div className={styles.header}>
//                 <p className={styles.breadcrumb}>
//                     <span className={styles.breadHome}>HOME</span>
//                     <span className={styles.breadSep}> / </span>
//                     <span className={styles.breadCurrent}>PEOPLE</span>
//                 </p>
//                 <h1 className={styles.heading}>Core Operatives</h1>
//             </div>
//
//             {/* Grid */}
//             <div className={styles.grid}>
//                 {PEOPLE.map((person, i) => {
//                     const accentColor = ACCENT[person.color];
//                     const isFlipped   = flipped === i;
//
//                     return (
//                         <motion.div
//                             key={person.name}
//                             className={styles.cardWrapper}
//                             onHoverStart={() => setFlipped(i)}
//                             onHoverEnd={()   => setFlipped(null)}
//                         >
//                             {/* Flip container */}
//                             <div style={{ width: '100%', height: '100%', perspective: '1200px' }}>
//                                 <motion.div
//                                     className={styles.flipInner}
//                                     animate={{ rotateY: isFlipped ? 180 : 0 }}
//                                     transition={{ duration: 1.2, ease: EASE }}
//                                 >
//                                     {/* Front */}
//                                     <div
//                                         className={styles.cardFront}
//                                         style={{
//                                             boxShadow: `0 0 40px 2px ${person.hexColor}0D inset, 0 10px 40px 0 rgba(0,0,0,0.30)`,
//                                         }}
//                                     >
//                                         <CornerBrackets color='white' />
//                                         <div className={styles.imageWrapper}>
//                                             <img
//                                                 src={person.image}
//                                                 alt={person.name}
//                                                 className={styles.image}
//                                             />
//                                         </div>
//                                         <div className={styles.info}>
//                                             <h3 className={styles.name}>{person.name}</h3>
//                                             <p className={styles.role}>{person.role}</p>
//                                         </div>
//                                     </div>
//
//                                     {/* Back */}
//                                     <div
//                                         className={styles.cardBack}
//                                         style={{
//                                             background: `radial-gradient(ellipse at 50% 0%, ${accentColor}14 0%, #090909 65%)`,
//                                             boxShadow:  `0 0 40px 2px ${person.hexColor}0D inset, 0 10px 40px 0 rgba(0,0,0,0.30)`,
//                                         }}
//                                     >
//                                         <CornerBrackets color='white' />
//                                         <div className={styles.backContent}>
//                                             <span className={styles.backRole} style={{ color: accentColor }}>{person.role}</span>
//                                             <h3 className={styles.backName}>{person.name}</h3>
//                                         </div>
//                                     </div>
//                                 </motion.div>
//                             </div>
//                         </motion.div>
//                     );
//                 })}
//             </div>
//         </section>
//     );
// };

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { CornerBrackets } from '../../Components/Cornerbrackets';
import * as styles from './People.css.ts';

interface Person {
    name:  string;
    role:  string;
    image: string;
    color: 'cyan' | 'green' | 'pink' | 'purple';
    hexColor: string;
}

const ACCENT: Record<string, string> = {
    cyan:   '#8FF5FF',
    green:  '#8EFF71',
    pink:   '#FF6B9B',
    purple: '#A78BFA',
};

const PEOPLE: Person[] = [
    { name: 'ER. SUSISH',    role: 'Co-Founder',              image: '/images/people/susish.jpg',   color: 'cyan',   hexColor: '#22d3ee' },
    { name: 'YAMAN',         role: 'Co-Founder',              image: '/images/people/yaman.jpg',    color: 'green',  hexColor: '#4ade80' },
    { name: 'ER. ABHINASH',  role: 'AI',                      image: '/images/people/abhinash.jpg', color: 'pink',   hexColor: '#f472b6' },
    { name: 'ER. JAYAN',     role: 'AI',                      image: '/images/people/jayan.jpg',    color: 'purple', hexColor: '#a855f7' },
    { name: 'SUBASH POUDEL', role: 'AI',                      image: '/images/people/subash.jpg',   color: 'cyan',   hexColor: '#22d3ee' },
    { name: 'ER. AASUPA',    role: 'AI',                      image: '/images/people/aasupa.jpg',   color: 'green',  hexColor: '#4ade80' },
    { name: 'ALISHA',        role: 'Frontend Developer',      image: '/images/people/alisha.jpg',   color: 'pink',   hexColor: '#f472b6' },
    { name: 'NISHA GODAR',   role: 'Admin',                   image: '/images/people/nisha.jpg',    color: 'purple', hexColor: '#a855f7' },
    { name: 'SANZAY PAHARI', role: 'Senior Frontend Developer', image: '/images/people/sanzay.jpg', color: 'cyan',   hexColor: '#22d3ee' },
    { name: 'PRABIN GURUNG',        role: 'UI/UX Designer',      image: '/images/people/alisha.jpg',   color: 'pink',   hexColor: '#f472b6' },
    { name: '**',   role: 'Admin',                   image: '/images/people/nisha.jpg',    color: 'purple', hexColor: '#a855f7' },
    { name: '**', role: 'Admin', image: '/images/people/sanzay.jpg', color: 'cyan',   hexColor: '#22d3ee' },
];

const EASE: [number, number, number, number] = [0.22, 1, 0.36, 1];

export const People: React.FC = () => {
    const [flipped, setFlipped] = useState<number | null>(null);

    const navigate = useNavigate();

    return (
        <section className={styles.section}>
            {/* Header */}
            <div className={styles.header}>
                <p className={styles.breadcrumb}>
                    <span className={styles.breadHome} onClick={() => navigate('/')} style={{ cursor: 'pointer' }}>HOME</span>
                    <span className={styles.breadSep}> / </span>
                    <span className={styles.breadCurrent}>PEOPLE</span>
                </p>
                <h1 className={styles.heading}>Core Operatives</h1>
            </div>

            {/* Grid */}
            <div className={styles.grid}>
                {PEOPLE.map((person, i) => {
                    const accentColor = ACCENT[person.color];
                    const isFlipped   = flipped === i;

                    return (
                        <motion.div
                            key={person.name}
                            className={styles.cardWrapper}
                            onHoverStart={() => setFlipped(i)}
                            onHoverEnd={()   => setFlipped(null)}
                        >
                            {/* Flip container */}
                            <div style={{ width: '100%', height: '100%', perspective: '1200px' }}>
                                <motion.div
                                    className={styles.flipInner}
                                    animate={{ rotateY: isFlipped ? 180 : 0 }}
                                    transition={{ duration: 1.2, ease: EASE }}
                                >
                                    {/* Front */}
                                    <div
                                        className={styles.cardFront}
                                        style={{
                                            boxShadow: `0 0 40px 2px ${person.hexColor}0D inset, 0 10px 40px 0 rgba(0,0,0,0.30)`,
                                        }}
                                    >
                                        <CornerBrackets color='white' />
                                        <div className={styles.imageWrapper}>
                                            <img
                                                src={person.image}
                                                alt={person.name}
                                                className={styles.image}
                                            />
                                        </div>
                                        <div className={styles.info}>
                                            <h3 className={styles.name}>{person.name}</h3>
                                            <p className={styles.role}>{person.role}</p>
                                        </div>
                                    </div>

                                    {/* Back */}
                                    <div
                                        className={styles.cardBack}
                                        style={{
                                            background: `radial-gradient(ellipse at 50% 0%, ${accentColor}14 0%, #090909 65%)`,
                                            boxShadow:  `0 0 40px 2px ${person.hexColor}0D inset, 0 10px 40px 0 rgba(0,0,0,0.30)`,
                                        }}
                                    >
                                        <CornerBrackets color='white' />
                                        <div className={styles.backContent}>
                                            <span className={styles.backRole} style={{ color: accentColor }}>{person.role}</span>
                                            <h3 className={styles.backName}>{person.name}</h3>
                                        </div>
                                    </div>
                                </motion.div>
                            </div>
                        </motion.div>
                    );
                })}
            </div>
        </section>
    );
};