import React from 'react';
import '../App.css';

const Projects = () => {
    return (
        <section className="projects">
            <div className="project-container">
                <h2>Our Projects</h2>
                <ul>
                    <li>
                        <img className="Project-Images" src="Assets for home/modern building.jpg" alt="Modern Office Building" />
                        <h3>Modern Office Building</h3>
                        <p>Completed in 2023, this state-of-the-art office building features eco-friendly design and
                            innovative architecture.</p>
                    </li>
                    <li>
                        <img className="Project-Images" src="Assets for home/luxury-living.jpg" alt="Luxury Residential Complex" />
                        <h3>Luxury Residential Complex</h3>
                        <p>This residential complex offers premium living spaces with top-notch amenities, finished in
                            2022.</p>
                    </li>
                    <li>
                        <img className="Project-Images" src="Assets for home/garden.jpg" alt="Urban Park Development" />
                        <h3>Urban Park Development</h3>
                        <p>Our urban park project revitalized a city center with green spaces, completed in 2021.</p>
                    </li>
                </ul>
                <div className="redirect">
                    <button id="redirect"><a href="projects.html">View more Projects</a></button>
                </div>
            </div>
        </section>
    );
};

export default Projects;
