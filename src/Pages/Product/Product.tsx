// import React, { useState } from 'react';
// import { motion } from 'framer-motion';
// import { CornerBrackets } from '../../Components/Cornerbrackets';
// import * as styles from './Product.css.ts';
//
// interface Product {
//     name:        string;
//     desc:        string;
//     image:       string;
//     tags:        string[];
//     color:       'cyan' | 'green' | 'pink' | 'purple';
//     hexColor:    string;
// }
//
// const ACCENT: Record<string, string> = {
//     cyan:   '#8FF5FF',
//     green:  '#8EFF71',
//     pink:   '#FF6B9B',
//     purple: '#A78BFA',
// };
//
// const PRODUCTS: Product[] = [
//     {
//         name:     'MAGIC RIZZ',
//         desc:     'Enterprise project management with real-time sync and automation.',
//         image:    '/images/products/magic-rizz.jpg',
//         tags:     ['REACT', 'NODE.JS', 'AWS'],
//         color:    'cyan',
//         hexColor: '#22d3ee',
//     },
//     {
//         name:     'TINY TALKS',
//         desc:     'Next-gen e-commerce intelligence platform for global brands.',
//         image:    '/images/products/tiny-talks.jpg',
//         tags:     ['REACT', 'NODE.JS', 'AWS'],
//         color:    'green',
//         hexColor: '#4ade80',
//     },
//     {
//         name:     'CALCOACH',
//         desc:     'Advanced analytics and patient monitoring for healthcare.',
//         image:    '/images/products/calcoach.jpg',
//         tags:     ['REACT', 'NODE.JS', 'AWS'],
//         color:    'pink',
//         hexColor: '#f472b6',
//     },
//     {
//         name:     'NDIS',
//         desc:     'Collaborative learning management system for modern teams.',
//         image:    '/images/products/ndis.jpg',
//         tags:     ['REACT', 'NODE.JS', 'AWS'],
//         color:    'purple',
//         hexColor: '#a855f7',
//     },
// ];
//
// const EASE: [number, number, number, number] = [0.22, 1, 0.36, 1];
//
// export const Product: React.FC = () => {
//     const [flipped, setFlipped] = useState<number | null>(null);
//
//     return (
//         <section className={styles.section}>
//             <div className={styles.header}>
//                 <p className={styles.breadcrumb}>
//                     <span className={styles.breadHome}>HOME</span>
//                     <span className={styles.breadSep}> / </span>
//                     <span className={styles.breadCurrent}>PRODUCT</span>
//                 </p>
//                 <h1 className={styles.heading}>Our Productt</h1>
//             </div>
//
//             <div className={styles.grid}>
//                 {PRODUCTS.map((product, i) => {
//                     const accentColor = ACCENT[product.color];
//                     const isFlipped   = flipped === i;
//
//                     return (
//                         <motion.div
//                             key={product.name}
//                             className={styles.cardWrapper}
//                             onHoverStart={() => setFlipped(i)}
//                             onHoverEnd={()   => setFlipped(null)}
//                         >
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
//                                             boxShadow: `0 0 40px 2px ${product.hexColor}0D inset, 0 10px 40px 0 rgba(0,0,0,0.30)`,
//                                         }}
//                                     >
//                                         <CornerBrackets color='white' />
//
//                                         {/* Image */}
//                                         <div className={styles.imageWrapper}>
//                                             <img
//                                                 src={product.image}
//                                                 alt={product.name}
//                                                 className={styles.image}
//                                             />
//                                         </div>
//
//                                         {/* Info */}
//                                         <div className={styles.info}>
//                                             <h3 className={styles.name}>{product.name}</h3>
//                                             <p className={styles.desc}>{product.desc}</p>
//                                             <div className={styles.tags}>
//                                                 {product.tags.map(tag => (
//                                                     <span key={tag} className={styles.tag}>{tag}</span>
//                                                 ))}
//                                             </div>
//                                         </div>
//                                     </div>
//
//                                     {/* Back */}
//                                     <div
//                                         className={styles.cardBack}
//                                         style={{
//                                             background: `radial-gradient(ellipse at 50% 0%, ${accentColor}18 0%, #090909 65%)`,
//                                             boxShadow:  `0 0 40px 2px ${product.hexColor}0D inset, 0 10px 40px 0 rgba(0,0,0,0.30)`,
//                                         }}
//                                     >
//                                         <CornerBrackets color='white' />
//                                         <div className={styles.backContent}>
//                                             <span className={styles.backCategory} style={{ color: accentColor }}>
//                                                 PROJECT
//                                             </span>
//                                             <h3 className={styles.backName}>{product.name}</h3>
//                                             <p className={styles.backDesc}>{product.desc}</p>
//                                             <div className={styles.tags}>
//                                                 {product.tags.map(tag => (
//                                                     <span
//                                                         key={tag}
//                                                         className={styles.tag}
//                                                         style={{ borderColor: `${accentColor}40`, color: accentColor }}
//                                                     >
//                                                         {tag}
//                                                     </span>
//                                                 ))}
//                                             </div>
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

// import React from 'react';
// import { CornerBrackets } from '../../Components/Cornerbrackets';
// import * as styles from './Product.css.ts';
//
// interface Product {
//     name:     string;
//     desc:     string;
//     image:    string;
//     tags:     string[];
//     hexColor: string;
// }
//
// const PRODUCTS: Product[] = [
//     { name: 'MAGIC RIZZ',  desc: 'Enterprise project management with real-time sync and automation.',     image: '/images/products/magic-rizz.jpg',  tags: ['REACT', 'NODE.JS', 'AWS'], hexColor: '#22d3ee' },
//     { name: 'TINY TALKS',  desc: 'Next-gen e-commerce intelligence platform for global brands.',          image: '/images/products/tiny-talks.jpg',  tags: ['REACT', 'NODE.JS', 'AWS'], hexColor: '#4ade80' },
//     { name: 'CALCOACH',    desc: 'Advanced analytics and patient monitoring for healthcare.',              image: '/images/products/calcoach.jpg',    tags: ['REACT', 'NODE.JS', 'AWS'], hexColor: '#f472b6' },
//     { name: 'NDIS',        desc: 'Collaborative learning management system for modern teams.',            image: '/images/products/ndis.jpg',        tags: ['REACT', 'NODE.JS', 'AWS'], hexColor: '#a855f7' },
// ];
//
// export const Product: React.FC = () => (
//     <section className={styles.section}>
//         <div className={styles.header}>
//             <p className={styles.breadcrumb}>
//                 <span className={styles.breadHome}>HOME</span>
//                 <span className={styles.breadSep}> / </span>
//                 <span className={styles.breadCurrent}>PRODUCT</span>
//             </p>
//             <h1 className={styles.heading}>Our Productt</h1>
//         </div>
//
//         <div className={styles.grid}>
//             {PRODUCTS.map((product) => (
//                 <div
//                     key={product.name}
//                     className={styles.card}
//                     style={{
//                         boxShadow: `0 0 40px 2px ${product.hexColor}0D inset, 0 10px 40px 0 rgba(0,0,0,0.30)`,
//                     }}
//                 >
//                     <CornerBrackets color='white' />
//
//                     <div className={styles.imageWrapper}>
//                         <img src={product.image} alt={product.name} className={styles.image} />
//                     </div>
//
//                     <div className={styles.info}>
//                         <h3 className={styles.name}>{product.name}</h3>
//                         <p className={styles.desc}>{product.desc}</p>
//                         <div className={styles.tags}>
//                             {product.tags.map(tag => (
//                                 <span key={tag} className={styles.tag}>{tag}</span>
//                             ))}
//                         </div>
//                     </div>
//                 </div>
//             ))}
//         </div>
//     </section>
// );

// import React from 'react';
// import { useNavigate } from 'react-router-dom';
// import { CornerBrackets } from '../../Components/Cornerbrackets';
// import * as styles from './Product.css.ts';
//
// interface Product {
//     name:     string;
//     desc:     string;
//     image:    string;
//     tags:     string[];
//     hexColor: string;
// }
//
// const PRODUCTS: Product[] = [
//     { name: 'MAGIC RIZZ',  desc: 'Enterprise project management with real-time sync and automation.',     image: '/images/products/magic-rizz.jpg',  tags: ['REACT', 'NODE.JS', 'AWS'], hexColor: '#22d3ee' },
//     { name: 'TINY TALKS',  desc: 'Next-gen e-commerce intelligence platform for global brands.',          image: '/images/products/tiny-talks.jpg',  tags: ['REACT', 'NODE.JS', 'AWS'], hexColor: '#4ade80' },
//     { name: 'CALCOACH',    desc: 'Advanced analytics and patient monitoring for healthcare.',              image: '/images/products/calcoach.jpg',    tags: ['REACT', 'NODE.JS', 'AWS'], hexColor: '#f472b6' },
//     { name: 'NDIS',        desc: 'Collaborative learning management system for modern teams.',            image: '/images/products/ndis.jpg',        tags: ['REACT', 'NODE.JS', 'AWS'], hexColor: '#a855f7' },
// ];
//
// export const Product: React.FC = () => {
//     const navigate = useNavigate();
//     return (
//         <section className={styles.section}>
//             <div className={styles.header}>
//                 <p className={styles.breadcrumb}>
//                     <span className={styles.breadHome} onClick={() => navigate('/')} style={{ cursor: 'pointer' }}>HOME</span>
//                     <span className={styles.breadSep}> / </span>
//                     <span className={styles.breadCurrent}>PRODUCT</span>
//                 </p>
//                 <h1 className={styles.heading}>Our Productt</h1>
//             </div>
//
//             <div className={styles.grid}>
//                 {PRODUCTS.map((product) => (
//                     <div
//                         key={product.name}
//                         className={styles.card}
//                         style={{
//                             boxShadow: `0 0 40px 2px ${product.hexColor}0D inset, 0 10px 40px 0 rgba(0,0,0,0.30)`,
//                         }}
//                     >
//                         <CornerBrackets color='white' />
//
//                         <div className={styles.imageWrapper}>
//                             <img src={product.image} alt={product.name} className={styles.image} />
//                         </div>
//
//                         <div className={styles.info}>
//                             <h3 className={styles.name}>{product.name}</h3>
//                             <p className={styles.desc}>{product.desc}</p>
//                             <div className={styles.tags}>
//                                 {product.tags.map(tag => (
//                                     <span key={tag} className={styles.tag}>{tag}</span>
//                                 ))}
//                             </div>
//                         </div>
//                     </div>
//                 ))}
//             </div>
//         </section>
//     );
// };

import React from 'react';

import { useNavigate } from 'react-router-dom';
import { CornerBrackets } from '../../Components/Cornerbrackets';
import * as styles from './Product.css.ts';

interface Product {
    name:     string;
    desc:     string;
    image:    string;
    tags:     string[];
    hexColor: string;
    details:     string;
}

const PRODUCTS: Product[] = [
    { name: 'MAGIC RIZZ',  details: 'magic-rizz', desc: 'Enterprise project management with real-time sync and automation.',     image: '/images/products/magic-rizz.jpg',  tags: ['REACT', 'NODE.JS', 'AWS'], hexColor: '#22d3ee' },
    { name: 'TINY TALKS',  details: 'tiny-talks', desc: 'Next-gen e-commerce intelligence platform for global brands.',          image: '/images/products/tiny-talks.jpg',  tags: ['REACT', 'NODE.JS', 'AWS'], hexColor: '#4ade80' },
    { name: 'CALCOACH',    details: 'calcoach',   desc: 'Advanced analytics and patient monitoring for healthcare.',              image: '/images/products/calcoach.jpg',    tags: ['REACT', 'NODE.JS', 'AWS'], hexColor: '#f472b6' },
    { name: 'NDIS',        details: 'ndis',       desc: 'Collaborative learning management system for modern teams.',            image: '/images/products/ndis.jpg',        tags: ['REACT', 'NODE.JS', 'AWS'], hexColor: '#a855f7' },
];

export const Product: React.FC = () => {
    const navigate = useNavigate();
    return (
        <section className={styles.section}>
            <div className={styles.header}>
                <p className={styles.breadcrumb}>
                    <span className={styles.breadHome} onClick={() => navigate('/')} style={{ cursor: 'pointer' }}>HOME</span>
                    <span className={styles.breadSep}> / </span>
                    <span className={styles.breadCurrent}>PRODUCT</span>
                </p>
                <h1 className={styles.heading}>Our Productt</h1>
            </div>

            <div className={styles.grid}>
                {PRODUCTS.map((product) => (
                    <div
                        key={product.name}
                        className={styles.card}
                        onClick={() => navigate(`/product/${product.details}`)}
                        style={{
                            boxShadow: `0 0 40px 2px ${product.hexColor}0D inset, 0 10px 40px 0 rgba(0,0,0,0.30)`,
                        }}
                    >
                        <CornerBrackets color='white' />

                        <div className={styles.imageWrapper}>
                            <img src={product.image} alt={product.name} className={styles.image} />
                        </div>

                        <div className={styles.info}>
                            <h3 className={styles.name}>{product.name}</h3>
                            <p className={styles.desc}>{product.desc}</p>
                            <div className={styles.tags}>
                                {product.tags.map(tag => (
                                    <span key={tag} className={styles.tag}>{tag}</span>
                                ))}
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};