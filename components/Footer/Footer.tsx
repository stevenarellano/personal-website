import React from 'react';
import styles from '/styles/modules/footer.module.scss';

const Footer = () => {
    const socialMediaLinks: any[] = [
        { title: 'github', url: 'https://twitter.com' },
        { title: 'linkedin', url: 'https://facebook.com' },
        { title: 'twitter', url: 'https://instagram.com' },
    ];

    const miscLinks: any[] = [
        // to fill out
    ];

    return (
        <div className={styles.footer}>
            <div className={styles.socialMedia}>
                {socialMediaLinks.map((link) => (
                    <a key={link.title} href={link.url} target="_blank" rel="noopener noreferrer">
                        {link.title}
                    </a>
                ))}
            </div>
            <div className={styles.misc}>
                {miscLinks.map((link) => (
                    <a key={link.title} href={link.url} target="_blank" rel="noopener noreferrer">
                        {link.title}
                    </a>
                ))}
            </div>
        </div>
    );
};

export default Footer;
