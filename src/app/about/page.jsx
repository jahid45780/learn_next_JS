import Link from 'next/link';
import React from 'react';

const AboutPage = () => {
    return (
        <div>
            abot tume
            <br />

            <button>
                <Link href={'about/detai'} > go </Link>
            </button>
        </div>
    );
};

export default AboutPage;