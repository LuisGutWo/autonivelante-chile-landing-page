import React from 'react';
import Link from 'next/link';
import styles from './Breadcrumb.module.css';

/**
 * HomeIcon is a functional component that renders an SVG icon representing a home.
 * It is primarily used as a visual cue for navigation links pointing to the homepage.
 */

const HomeIcon = () => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g clipPath="url(#clip0_214_2373)">
            <path d="M20.4201 10.18L12.7101 2.30001C12.6172 2.20628 12.5066 2.13189 12.3847 2.08112C12.2628 2.03035 12.1321 2.00421 12.0001 2.00421C11.8681 2.00421 11.7374 2.03035 11.6155 2.08112C11.4937 2.13189 11.3831 2.20628 11.2901 2.30001L3.58012 10.19C3.39355 10.3781 3.24621 10.6013 3.14664 10.8468C3.04708 11.0923 2.99727 11.3551 3.00012 11.62V20C2.99934 20.5119 3.19489 21.0046 3.54649 21.3767C3.89809 21.7488 4.37898 21.9719 4.89012 22H19.1101C19.6213 21.9719 20.1021 21.7488 20.4537 21.3767C20.8053 21.0046 21.0009 20.5119 21.0001 20V11.62C21.0009 11.0829 20.7929 10.5666 20.4201 10.18ZM10.0001 20V14H14.0001V20H10.0001ZM19.0001 20H16.0001V13C16.0001 12.7348 15.8948 12.4804 15.7072 12.2929C15.5197 12.1054 15.2653 12 15.0001 12H9.00012C8.7349 12 8.48055 12.1054 8.29301 12.2929C8.10547 12.4804 8.00012 12.7348 8.00012 13V20H5.00012V11.58L12.0001 4.43001L19.0001 11.62V20Z" fill="black"/>
        </g>
        <defs>
            <clipPath id="clip0_214_2373">
                <rect width="24" height="24" fill="white"/>
            </clipPath>
        </defs>
    </svg>
);

export const Breadcrumb = (props) => {
    const { items = [] } = props;

    return (
        <ul className={styles.breadcrumb}>
            <li>
                <Link href="/">
                    <HomeIcon />
                    Home
                </Link>
            </li>

            { items.map((item, i) => 
                <li key={i}>
                    { i < items.length ? '>' : null }

                    <Link href={item.href}>
                        { item.name }
                    </Link>
                </li>
            )}
        </ul>
    );
}

export default Breadcrumb;
