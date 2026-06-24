import React, { useState } from 'react';
import * as styles from './ContactModel.css.ts';

interface Props {
    onClose: () => void;
}

export const ContactModal: React.FC<Props> = ({ onClose }) => {
    const [form, setForm] = useState({ name: '', email: '', message: '' });

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // Handle form submission here
        console.log(form);
        onClose();
    };

    return (
        <div className={styles.overlay} onClick={onClose}>
            <div className={styles.modal} onClick={e => e.stopPropagation()}>

                {/* Close button */}
                <button className={styles.closeBtn} onClick={onClose}>✕</button>

                {/* Header */}
                <h2 className={styles.title}>GET IN TOUCH</h2>
                <p className={styles.subtitle}>THE FUTURE STARTS HERE</p>

                {/* Form */}
                <form className={styles.form} onSubmit={handleSubmit}>
                    <div className={styles.field}>
                        <label className={styles.label}>Full Name</label>
                        <input
                            className={styles.input}
                            type="text"
                            placeholder="Enter your full name"
                            value={form.name}
                            onChange={e => setForm({ ...form, name: e.target.value })}
                        />
                    </div>

                    <div className={styles.field}>
                        <label className={styles.label}>Email Address</label>
                        <input
                            className={styles.input}
                            type="email"
                            placeholder="Enter your email address"
                            value={form.email}
                            onChange={e => setForm({ ...form, email: e.target.value })}
                        />
                    </div>

                    <div className={styles.field}>
                        <label className={styles.label}>Message</label>
                        <textarea
                            className={styles.textarea}
                            placeholder="Your Message..."
                            value={form.message}
                            onChange={e => setForm({ ...form, message: e.target.value })}
                        />
                    </div>

                    <button type="submit" className={styles.submitBtn}>
                        SEND MESSAGE
                    </button>
                </form>
            </div>
        </div>
    );
};