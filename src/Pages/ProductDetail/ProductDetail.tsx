import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import * as styles from './ProductDetail.css.ts';

interface Section {
    title: string;
    text:  string;
    image?: string;
}

interface ProductData {
    name:     string;
    tags:     string[];
    liveUrl:  string;
    sections: Section[];
}

const PRODUCTS: Record<string, ProductData> = {
    'magic-rizz': {
        name:    'MAGIC RIZZ',
        tags:    ['REACT', 'NODE.JS', 'AWS'],
        liveUrl: 'https://magicrizz.com',
        sections: [
            {
                title: 'OVERVIEW',
                text:  'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since 1966, when designers at Letraset and James Mosley, the librarian at St Bride Printing Library, took a 1914 Cicero translation and scrambled it to make dummy text for Letraset\'s Body Type sheets. It has survived not only many decades, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised thanks to these sheets and more recently with desktop publishing software including versions of Lorem Ipsum',
                image: '/images/products/magic-rizz-overview.jpg',
            },
            {
                title: 'CHALLENGES',
                text:  'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since 1966, when designers at Letraset and James Mosley, the librarian at St Bride Printing Library, took a 1914 Cicero translation and scrambled it to make dummy text for Letraset\'s Body Type sheets. It has survived not only many decades, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised thanks to these sheets and more recently with desktop publishing software including versions of Lorem Ipsum',
            },
            {
                title: 'MISSION AND GOALS',
                text:  'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since 1966, when designers at Letraset and James Mosley, the librarian at St Bride Printing Library, took a 1914 Cicero translation and scrambled it to make dummy text for Letraset\'s Body Type sheets. It has survived not only many decades, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised thanks to these sheets and more recently with desktop publishing software including versions of Lorem Ipsum',
            },
            {
                title: 'PROCESS',
                text:  'Lorem Ipsum is simply dummy text of the printing and typesetting industry. It has been the industry\'s standard dummy text eve',
                image: '/images/products/magic-rizz-process.jpg',
            },
            {
                title: 'APP FEATURES',
                text:  'Lorem Ipsum is simply dummy text of the printing and typesetting industry. It has been the industry\'s standard dummy text eve',
                image: '/images/products/magic-rizz-features.jpg',
            },
        ],
    },
    'tiny-talks': {
        name:    'TINY TALKS',
        tags:    ['REACT', 'NODE.JS', 'AWS'],
        liveUrl: 'https://tinytalks.com',
        sections: [
            { title: 'OVERVIEW',        text: 'Next-gen e-commerce intelligence platform for global brands. Lorem Ipsum is simply dummy text of the printing and typesetting industry.', image: '/images/products/tiny-talks-overview.jpg' },
            { title: 'CHALLENGES',      text: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Standard dummy text ever since 1966.' },
            { title: 'MISSION AND GOALS', text: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Standard dummy text ever since 1966.' },
            { title: 'PROCESS',         text: 'Lorem Ipsum is simply dummy text.', image: '/images/products/tiny-talks-process.jpg' },
            { title: 'APP FEATURES',    text: 'Lorem Ipsum is simply dummy text.', image: '/images/products/tiny-talks-features.jpg' },
        ],
    },
    'calcoach': {
        name:    'CALCOACH',
        tags:    ['REACT', 'NODE.JS', 'AWS'],
        liveUrl: 'https://calcoach.com',
        sections: [
            { title: 'OVERVIEW',        text: 'Advanced analytics and patient monitoring for healthcare. Lorem Ipsum is simply dummy text of the printing and typesetting industry.', image: '/images/products/calcoach-overview.jpg' },
            { title: 'CHALLENGES',      text: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Standard dummy text ever since 1966.' },
            { title: 'MISSION AND GOALS', text: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Standard dummy text ever since 1966.' },
            { title: 'PROCESS',         text: 'Lorem Ipsum is simply dummy text.', image: '/images/products/calcoach-process.jpg' },
            { title: 'APP FEATURES',    text: 'Lorem Ipsum is simply dummy text.', image: '/images/products/calcoach-features.jpg' },
        ],
    },
    'ndis': {
        name:    'NDIS',
        tags:    ['REACT', 'NODE.JS', 'AWS'],
        liveUrl: 'https://ndis.com',
        sections: [
            { title: 'OVERVIEW',        text: 'Collaborative learning management system for modern teams. Lorem Ipsum is simply dummy text of the printing and typesetting industry.', image: '/images/products/ndis-overview.jpg' },
            { title: 'CHALLENGES',      text: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Standard dummy text ever since 1966.' },
            { title: 'MISSION AND GOALS', text: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Standard dummy text ever since 1966.' },
            { title: 'PROCESS',         text: 'Lorem Ipsum is simply dummy text.', image: '/images/products/ndis-process.jpg' },
            { title: 'APP FEATURES',    text: 'Lorem Ipsum is simply dummy text.', image: '/images/products/ndis-features.jpg' },
        ],
    },
};

export const ProductDetail: React.FC = () => {
    const { details }   = useParams<{ details: string }>();
    const navigate   = useNavigate();
    const product    = PRODUCTS[details ?? ''];

    if (!product) {
        return (
            <div className={styles.page}>
                <p style={{ color: '#fff', padding: '80px', textAlign: 'center' }}>Product not found.</p>
            </div>
        );
    }

    return (
        <div className={styles.page}>
            {/* Breadcrumb */}
            <p className={styles.breadcrumb}>
                <span className={styles.breadLink} onClick={() => navigate('/')}>HOME</span>
                <span className={styles.breadSep}> / </span>
                <span className={styles.breadLink} onClick={() => navigate('/product')}>PRODUCT</span>
                <span className={styles.breadSep}> / </span>
                <span className={styles.breadCurrent}>{product.name}</span>
            </p>

            {/* Title */}
            <h1 className={styles.title}>{product.name}</h1>

            {/* Tags */}
            <div className={styles.tags}>
                {product.tags.map(tag => (
                    <span key={tag} className={styles.tag}>{tag}</span>
                ))}
            </div>

            {/* Live project button */}
            <a
                href={product.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.liveBtn}
            >
                VIEW LIVE PROJECT
            </a>

            {/* Sections */}
            <div className={styles.sections}>
                {product.sections.map((section) => (
                    <div key={section.title} className={styles.section}>
                        <h2 className={styles.sectionTitle}>{section.title}</h2>
                        <p className={styles.sectionText}>{section.text}</p>
                        {section.image && (
                            <div className={styles.sectionImage}>
                                <img src={section.image} alt={section.title} className={styles.img} />
                            </div>
                        )}
                    </div>
                ))}
            </div>
        </div>
    );
};