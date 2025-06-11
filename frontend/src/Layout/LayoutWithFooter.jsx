import React from 'react';
import Footer from './Footer';
import { Outlet } from 'react-router-dom';

const LayoutWithFooter = () => {
    return (
        <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
            <main style={{ flexGrow: 1 }}>
                <Outlet /> {/* This will render child routes */}
            </main>
            <Footer />
        </div>
    );
};

export default LayoutWithFooter;
