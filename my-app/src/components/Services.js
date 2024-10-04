import React from 'react';
import '../App.css';

const Services = () => {
    return (
        <section className="services">
            <div className="services-container">
                <div className="head">
                    <h2>Our Services</h2>
                </div>
                <div className="info">
                    <ul>
                        <li>
                            <i className="fas fa-hammer"></i>
                            <h3>Construction Management</h3>
                            <p>Our construction management services ensure that your project is completed efficiently
                                and effectively, from planning to execution.</p>
                        </li>
                        <li>
                            <i className="fas fa-archway"></i>
                            <h3>Design-Build Services</h3>
                            <p>We offer comprehensive design-build services, integrating design and construction to
                                provide a seamless project experience.</p>
                        </li>
                        <li>
                            <i className="fas fa-truck"></i>
                            <h3>General Contracting</h3>
                            <p>Our general contracting services cover all aspects of construction, ensuring quality
                                workmanship and timely completion.</p>
                        </li>
                    </ul>
                </div>
            </div>
        </section>
    );
};

export default Services;
