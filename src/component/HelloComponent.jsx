// import react
import React from 'react';

// import untk css nya
import './HelloComponent.css';

const HelloComponent = () => {
    return <p className="text-p">Heloo Amilin ini adalah Hello Component </p>
}

// dan export agar dapat digunakan dimana saja
    //kirim ke index.js agar dapat dibaca.
    //dalam index.js harus ada import HelloComponent
export default HelloComponent;

// kita akan coba memberikan styling pada HelloComponent.jsx
    //dengan cara buat file baru dengan HelloComponent.css