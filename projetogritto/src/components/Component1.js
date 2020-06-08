import React from 'react';
import Navbar from './Navbar';

const Component1 = () => {
    return (
        <>
        <Navbar />
            <div style={{fontSize: "5rem", textAlign: "center", color: "tomato", marginTop: "12rem"}}>
                Hello Component1!
            </div>
        </>
    );
}

export default Component1;