// import React from 'react';
// import { useNavigate, useParams } from 'react-router-dom';
// import * as styles from './ProductDetail.css.ts';
//
// interface Section {
//     title: string;
//     text:  string;
//     image?: string;
// }
//
// interface ProductData {
//     name:     string;
//     tags:     string[];
//     liveUrl:  string;
//     sections: Section[];
// }
//
// const PRODUCTS: Record<string, ProductData> = {
//     'magic-rizz': {
//         name:    'MAGIC RIZZ',
//         tags:    ['REACT', 'NODE.JS', 'AWS'],
//         liveUrl: 'https://magicrizz.com',
//         sections: [
//             {
//                 title: 'OVERVIEW',
//                 text:  'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since 1966, when designers at Letraset and James Mosley, the librarian at St Bride Printing Library, took a 1914 Cicero translation and scrambled it to make dummy text for Letraset\'s Body Type sheets. It has survived not only many decades, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised thanks to these sheets and more recently with desktop publishing software including versions of Lorem Ipsum',
//                 image: '/images/products/magic-rizz-overview.jpg',
//             },
//             {
//                 title: 'CHALLENGES',
//                 text:  'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since 1966, when designers at Letraset and James Mosley, the librarian at St Bride Printing Library, took a 1914 Cicero translation and scrambled it to make dummy text for Letraset\'s Body Type sheets. It has survived not only many decades, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised thanks to these sheets and more recently with desktop publishing software including versions of Lorem Ipsum',
//             },
//             {
//                 title: 'MISSION AND GOALS',
//                 text:  'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since 1966, when designers at Letraset and James Mosley, the librarian at St Bride Printing Library, took a 1914 Cicero translation and scrambled it to make dummy text for Letraset\'s Body Type sheets. It has survived not only many decades, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised thanks to these sheets and more recently with desktop publishing software including versions of Lorem Ipsum',
//             },
//             {
//                 title: 'PROCESS',
//                 text:  'Lorem Ipsum is simply dummy text of the printing and typesetting industry. It has been the industry\'s standard dummy text eve',
//                 image: '/images/products/magic-rizz-process.jpg',
//             },
//             {
//                 title: 'APP FEATURES',
//                 text:  'Lorem Ipsum is simply dummy text of the printing and typesetting industry. It has been the industry\'s standard dummy text eve',
//                 image: '/images/products/magic-rizz-features.jpg',
//             },
//         ],
//     },
//     'tiny-talks': {
//         name:    'TINY TALKS',
//         tags:    ['REACT', 'NODE.JS', 'AWS'],
//         liveUrl: 'https://tinytalks.com',
//         sections: [
//             { title: 'OVERVIEW',        text: 'Next-gen e-commerce intelligence platform for global brands. Lorem Ipsum is simply dummy text of the printing and typesetting industry.', image: '/images/products/tiny-talks-overview.jpg' },
//             { title: 'CHALLENGES',      text: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Standard dummy text ever since 1966.' },
//             { title: 'MISSION AND GOALS', text: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Standard dummy text ever since 1966.' },
//             { title: 'PROCESS',         text: 'Lorem Ipsum is simply dummy text.', image: '/images/products/tiny-talks-process.jpg' },
//             { title: 'APP FEATURES',    text: 'Lorem Ipsum is simply dummy text.', image: '/images/products/tiny-talks-features.jpg' },
//         ],
//     },
//     'calcoach': {
//         name:    'CALCOACH',
//         tags:    ['REACT', 'NODE.JS', 'AWS'],
//         liveUrl: 'https://calcoach.com',
//         sections: [
//             { title: 'OVERVIEW',        text: 'Advanced analytics and patient monitoring for healthcare. Lorem Ipsum is simply dummy text of the printing and typesetting industry.', image: '/images/products/calcoach-overview.jpg' },
//             { title: 'CHALLENGES',      text: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Standard dummy text ever since 1966.' },
//             { title: 'MISSION AND GOALS', text: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Standard dummy text ever since 1966.' },
//             { title: 'PROCESS',         text: 'Lorem Ipsum is simply dummy text.', image: '/images/products/calcoach-process.jpg' },
//             { title: 'APP FEATURES',    text: 'Lorem Ipsum is simply dummy text.', image: '/images/products/calcoach-features.jpg' },
//         ],
//     },
//     'ndis': {
//         name:    'NDIS',
//         tags:    ['REACT', 'NODE.JS', 'AWS'],
//         liveUrl: 'https://ndis.com',
//         sections: [
//             { title: 'OVERVIEW',        text: 'Collaborative learning management system for modern teams. Lorem Ipsum is simply dummy text of the printing and typesetting industry.', image: '/images/products/ndis-overview.jpg' },
//             { title: 'CHALLENGES',      text: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Standard dummy text ever since 1966.' },
//             { title: 'MISSION AND GOALS', text: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Standard dummy text ever since 1966.' },
//             { title: 'PROCESS',         text: 'Lorem Ipsum is simply dummy text.', image: '/images/products/ndis-process.jpg' },
//             { title: 'APP FEATURES',    text: 'Lorem Ipsum is simply dummy text.', image: '/images/products/ndis-features.jpg' },
//         ],
//     },
// };
//
// export const ProductDetail: React.FC = () => {
//     const { details }   = useParams<{ details: string }>();
//     const navigate   = useNavigate();
//     const product    = PRODUCTS[details ?? ''];
//
//     if (!product) {
//         return (
//             <div className={styles.page}>
//                 <p style={{ color: '#fff', padding: '80px', textAlign: 'center' }}>Product not found.</p>
//             </div>
//         );
//     }
//
//     return (
//         <div className={styles.page}>
//             {/* Breadcrumb */}
//             <p className={styles.breadcrumb}>
//                 <span className={styles.breadLink} onClick={() => navigate('/')}>HOME</span>
//                 <span className={styles.breadSep}> / </span>
//                 <span className={styles.breadLink} onClick={() => navigate('/product')}>PRODUCT</span>
//                 <span className={styles.breadSep}> / </span>
//                 <span className={styles.breadCurrent}>{product.name}</span>
//             </p>
//
//             {/* Title */}
//             <h1 className={styles.title}>{product.name}</h1>
//
//             {/* Tags */}
//             <div className={styles.tags}>
//                 {product.tags.map(tag => (
//                     <span key={tag} className={styles.tag}>{tag}</span>
//                 ))}
//             </div>
//
//             {/* Live project button */}
//             <a
//                 href={product.liveUrl}
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 className={styles.liveBtn}
//             >
//                 VIEW LIVE PROJECT
//             </a>
//
//             {/* Sections */}
//             <div className={styles.sections}>
//                 {product.sections.map((section) => (
//                     <div key={section.title} className={styles.section}>
//                         <h2 className={styles.sectionTitle}>{section.title}</h2>
//                         <p className={styles.sectionText}>{section.text}</p>
//                         {section.image && (
//                             <div className={styles.sectionImage}>
//                                 <img src={section.image} alt={section.title} className={styles.img} />
//                             </div>
//                         )}
//                     </div>
//                 ))}
//             </div>
//         </div>
//     );
// };
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
    'mr-rizzrock': {
        name:    'MR. RIZZROCK',
        tags:    ['REACT NATIVE', 'NODE.JS', 'AWS'],
        liveUrl: '#',
        sections: [
            {
                title: 'OVERVIEW',
                text:  'There\'s a very specific kind of paralysis that happens right before someone sends a text. The message has been typed, deleted, retyped. It\'s eleven at night, the conversation matters more than it should, and there is no friend awake to ask "Does this sound weird?" Mr. RizzRock exists for exactly that moment. It\'s a real-time AI conversation coach, live on the App Store, built to read a situation the way a sharp, emotionally fluent friend would — not the way a generic chatbot regurgitates a list of "rizz lines" scraped off the internet.\n\nThe product isn\'t selling jokes or pickup lines. It\'s selling the feeling of not being alone in a moment that\'s quietly stressful for almost everyone, regardless of how confident they look from the outside. That distinction shaped every decision in the build — from how onboarding works to how the AI is prompted to how the business model is structured.',
                image: '/images/products/mr-rizzrock-overview.jpg',
            },
            {
                title: 'CHALLENGES',
                text:  'The first and hardest problem was sounding human in a category that\'s been ruined by sounding robotic. By the time we started building, "AI dating advice" already had a reputation — copy-paste responses, tone-deaf suggestions, the same five jokes recycled across a thousand screenshots. Any output that felt templated would destroy trust instantly, and trust is the entire product here.\n\nSo the real engineering challenge wasn\'t generating a response — it was generating a response that adapted convincingly to context: which platform the conversation is happening on, what\'s already been said, what kind of relationship existed, and what emotional register the moment calls for.\n\nThe second challenge was monetization without resentment. The third challenge was growth without a marketing budget burning a hole from day one.',
            },
            {
                title: 'MISSION AND GOALS',
                text:  'The mission was to make confidence feel learnable in the exact moment someone needs it — not three days later after reading a listicle, not through a self-help framework that feels like homework. The goal was a product fast enough to feel like a real-time companion rather than a tool you "consult," contextual enough to never sound scripted, and monetized in a way that respects the free user while still converting the people who live in the app.\n\nSpecific goals locked in early: a generation system fast enough that suggestions feel conversational; a pricing structure tuned against real willingness to pay — $5.99 a week, $19.99 a month, $119.99 a year; and a referral system substantial enough to create real momentum — five free generations to start, twenty more for every successful referral.',
            },
            {
                title: 'PROCESS',
                text:  'Onboarding was the first thing we threw out and rebuilt. Instead of asking who you are, we ask what\'s actually happening right now. "She hasn\'t replied in two days." "First message, don\'t know what to say." That single shift changed everything downstream.\n\nFrom there, the conversation engine went through repeated tuning to handle tone matching. The aura score feature went through the most visible iteration — rebuilt multiple times until it landed somewhere that felt like a fun, slightly cheeky mirror. On the growth side, the referral mechanic was designed into the core loop from day one paired with a content engine built for TikTok: five posts a day, seven distinct content formats.',
                image: '/images/products/mr-rizzrock-process.jpg',
            },
            {
                title: 'APP FEATURES',
                text:  'Real-time conversation coaching — Context-aware suggestions generated based on the specific situation a user describes.\n\nScenario-based onboarding — Users begin by describing their actual situation, so the very first interaction with the AI is already personalized.\n\nPlatform and tone adaptation — The system adjusts suggested phrasing based on where the conversation is happening.\n\nAura score photo analysis — A visual confidence overlay applied directly to a user\'s photo.\n\nBuilt-in referral system — Five free generations to start, twenty additional for every successful referral.\n\nTiered subscription model — Weekly, monthly, and annual pricing for every type of user.\n\nContent-driven discovery loop — Five-post-a-day TikTok strategy across seven different formats.',
                image: '/images/products/mr-rizzrock-features.jpg',
            },
        ],
    },
    'tiny-talks': {
        name:    'TINY TALKS',
        tags:    ['REACT NATIVE', 'FIREBASE', 'AWS'],
        liveUrl: '#',
        sections: [
            {
                title: 'OVERVIEW',
                text:  'Pregnancy is forty weeks of a very unusual combination of excitement and anxiety, and the apps built for that window have mostly settled into being glorified dashboards — weekly facts, fetal size compared to fruit, a kick counter. Useful, but not something anyone looks forward to opening. Tiny Talks was built on a different premise: that the daily ritual of checking in on a pregnancy should feel emotionally warm, not clinically informative.\n\nAt the center of the product is a jelly baby — a small, soft animation that visually grows week by week alongside the actual pregnancy, designed to be the first thing a user sees and the reason they come back tomorrow.',
                image: '/images/products/tiny-talks-overview.jpg',
            },
            {
                title: 'CHALLENGES',
                text:  'The first challenge was structural: this category has incumbents with a decade of accumulated trust, enormous installed user bases, and feature sets refined over years. A new entrant can\'t win by matching their feature list — that\'s a fight on their terms, with their head start.\n\nThe second challenge was depth versus warmth. Pregnancy is a high-trust, high-stakes category — get the clinical information wrong, vague, or poorly sourced, and the product\'s credibility collapses.\n\nThe third challenge was the sheer scope of the redesign. Twenty-five screens needed to be rebuilt, not patched.',
            },
            {
                title: 'MISSION AND GOALS',
                text:  'The mission was simple to state and hard to execute: build the pregnancy app people actually want to open every day, not just the one they keep installed because it\'s useful.\n\nThe specific goals were threefold. First, run a genuine competitive teardown of the category\'s major players. Second, redesign the full 25-screen experience around a single unifying idea. Third, build a go-to-market strategy capable of earning attention in a category where the incumbents already hold the brand recognition.',
            },
            {
                title: 'PROCESS',
                text:  'The work started with a full competitive analysis across five of the major pregnancy apps — not simply cataloging features, but understanding tone, content cadence, and where users appeared to disengage.\n\nFrom there, all 25 screens were redesigned from the ground up, with particular focus on the home screen. Three genuinely different home screen concepts were designed and evaluated before the jelly baby animation was confirmed as the right direction.',
                image: '/images/products/tiny-talks-process.jpg',
            },
            {
                title: 'APP FEATURES',
                text:  'Week-by-week pregnancy tracking — Structured information delivered in sync with the actual pregnancy timeline.\n\nThe jelly baby animation — A signature visual element that grows and changes alongside the pregnancy.\n\nMilestone celebrations — Key moments marked in a way designed to feel celebratory rather than purely informational.\n\nFully redesigned, accessibility-conscious interface — All 25 core screens rebuilt with clarity and ease of use in mind.\n\nCompanion marketing website — A standalone web presence built to support discovery and trust-building.\n\nContent built for a high-trust category — Every piece of messaging designed around warmth and credibility equally.',
                image: '/images/products/tiny-talks-features.jpg',
            },
        ],
    },
    'caremate': {
        name:    'CAREMATE',
        tags:    ['REACT', 'NODE.JS', 'AWS'],
        liveUrl: '#',
        sections: [
            { title: 'OVERVIEW',          text: 'Disability support in Australia runs on spreadsheets, group chats, and people who care too much to let things slip. CareMate is the platform built to finally match that effort with the tools it deserves.', image: '/images/products/caremate-overview.jpg' },
            { title: 'CHALLENGES',        text: 'Building for a sector that has historically been underserved by technology meant starting from scratch on almost every assumption. The people using this software aren\'t early adopters — they\'re coordinators, support workers, and families who need tools that work reliably under pressure.' },
            { title: 'MISSION AND GOALS', text: 'The mission was to build software worthy of the people already doing extraordinary work — and to do it without adding complexity to workflows that are already demanding.' },
            { title: 'PROCESS',           text: 'Deep discovery sessions with support coordinators and NDIS participants shaped every decision in the product. The system had to be simple enough for someone checking in on a support visit from their phone, and robust enough to handle the compliance requirements of the sector.', image: '/images/products/caremate-process.jpg' },
            { title: 'APP FEATURES',      text: 'Shift scheduling and coordination — Built around the real workflows of support workers, not idealized versions of them.\n\nCompliance tracking — NDIS documentation requirements handled within the product rather than exported to spreadsheets.\n\nReal-time communication — Coordinators, workers, and participants connected without relying on group chats.', image: '/images/products/caremate-features.jpg' },
        ],
    },
};

export const ProductDetail: React.FC = () => {
    const { details }  = useParams<{ details: string }>();
    const navigate  = useNavigate();
    const product   = PRODUCTS[details ?? ''];

    if (!product) return (
        <div className={styles.page}>
            <p style={{ color: '#fff', padding: '80px', textAlign: 'center' }}>Product not found.</p>
        </div>
    );

    return (
        <div className={styles.page}>
            <p className={styles.breadcrumb}>
                <span className={styles.breadLink} onClick={() => navigate('/')}>HOME</span>
                <span className={styles.breadSep}> / </span>
                <span className={styles.breadLink} onClick={() => navigate('/product')}>PRODUCT</span>
                <span className={styles.breadSep}> / </span>
                <span className={styles.breadCurrent}>{product.name}</span>
            </p>

            <h1 className={styles.title}>{product.name}</h1>

            <div className={styles.tags}>
                {product.tags.map(tag => (
                    <span key={tag} className={styles.tag}>{tag}</span>
                ))}
            </div>

            <a href={product.liveUrl} target="_blank" rel="noopener noreferrer" className={styles.liveBtn}>
                VIEW LIVE PROJECT
            </a>

            <div className={styles.sections}>
                {product.sections.map((section) => (
                    <div key={section.title} className={styles.section}>
                        <h2 className={styles.sectionTitle}>{section.title}</h2>
                        {section.text.split('\n\n').map((para, j) => (
                            <p key={j} className={styles.sectionText}>{para}</p>
                        ))}
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