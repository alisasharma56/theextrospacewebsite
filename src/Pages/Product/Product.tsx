// import React from 'react';
//
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
//     details:     string;
// }
//
// const PRODUCTS: Product[] = [
//     { name: 'MAGIC RIZZ',  details: 'magic-rizz', desc: 'Enterprise project management with real-time sync and automation.',     image: '/images/products/magic-rizz.jpg',  tags: ['REACT', 'NODE.JS', 'AWS'], hexColor: '#22d3ee' },
//     { name: 'TINY TALKS',  details: 'tiny-talks', desc: 'Next-gen e-commerce intelligence platform for global brands.',          image: '/images/products/tiny-talks.jpg',  tags: ['REACT', 'NODE.JS', 'AWS'], hexColor: '#4ade80' },
//     { name: 'CALCOACH',    details: 'calcoach',   desc: 'Advanced analytics and patient monitoring for healthcare.',              image: '/images/products/calcoach.jpg',    tags: ['REACT', 'NODE.JS', 'AWS'], hexColor: '#f472b6' },
//     { name: 'NDIS',        details: 'ndis',       desc: 'Collaborative learning management system for modern teams.',            image: '/images/products/ndis.jpg',        tags: ['REACT', 'NODE.JS', 'AWS'], hexColor: '#a855f7' },
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
//                         onClick={() => navigate(`/product/${product.details}`)}
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
    tagline:  string;
    desc:     string;
    tags:     string[];
    hexColor: string;
    details:     string;
}

const PRODUCTS: Product[] = [
    {
        name:    'MR. RIZZROCK',
        tagline: 'The confidence you didn\'t know you had.',
        desc:    'Most people don\'t need better lines. They need someone in their corner at 11PM, when their thumb is hovering over the send button. Mr. RizzRock is that someone — an AI that reads the room, catches the vibe, and tells you exactly what to say next.',
        tags:    ['REACT NATIVE', 'NODE.JS', 'AWS'],
        hexColor: '#22d3ee',
        details:    'mr-rizzrock',
    },
    {
        name:    'TINY TALKS',
        tagline: 'Forty weeks. One companion.',
        desc:    'There\'s a moment every parent remembers — the first time an app shows them what\'s actually happening inside. Tiny Talks is built around that moment, and the hundred quieter ones that come after it.',
        tags:    ['REACT NATIVE', 'FIREBASE', 'AWS'],
        hexColor: '#4ade80',
        details:    'tiny-talks',
    },
    {
        name:    'CAREMATE',
        tagline: 'The sector nobody built software for — until now.',
        desc:    'Disability support in Australia runs on spreadsheets, group chats, and people who care too much to let things slip. CareMate is the platform built to finally match that effort with the tools it deserves.',
        tags:    ['REACT', 'NODE.JS', 'AWS'],
        hexColor: '#f472b6',
        details:    'caremate',
    },
];

export const Product: React.FC = () => {
    const navigate = useNavigate();

    return (
        <section className={styles.section}>
            <div className={styles.header}>
                <p className={styles.breadcrumb}>
                    <span className={styles.breadHome} onClick={() => navigate('/')}>HOME</span>
                    <span className={styles.breadSep}> / </span>
                    <span className={styles.breadCurrent}>PRODUCT</span>
                </p>
                <p className={styles.eyebrow}>WHAT SHIPS</p>
                <h1 className={styles.heading}>Our Productt</h1>
                <p className={styles.intro}>Three products. Three completely different corners of someone's life. Built with the same standard, none of them built the same way.</p>
            </div>

            <div className={styles.grid}>
                {PRODUCTS.map((product) => (
                    <div
                        key={product.name}
                        className={styles.card}
                        style={{
                            boxShadow: `0 0 40px 2px ${product.hexColor}0D inset, 0 10px 40px 0 rgba(0,0,0,0.30)`,
                        }}
                        onClick={() => navigate(`/product/${product.details}`)}
                    >
                        <CornerBrackets color='white' />

                        <div className={styles.imageWrapper}>
                            <img src={`/images/products/${product.details}.jpg`} alt={product.name} className={styles.image} />
                        </div>

                        <div className={styles.info}>
                            <h3 className={styles.name}>{product.name}</h3>
                            <p className={styles.tagline}>{product.tagline}</p>
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