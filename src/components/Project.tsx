import React from "react";
import proj24 from '../assets/images/proj24.png';
import proj22 from '../assets/images/proj22.png';
import proj033 from '../assets/images/proj033.png';
import proj21 from '../assets/images/proj21.png';
import '../assets/styles/Project.scss';

function Project() {
    return(
    <div className="projects-container" id="projects">
        <h1>Personal Projects</h1>
        <div className="projects-grid">
            <div className="project">
                <a href="https://github.com/ap001AP/sql-data-lakehouse-project" target="_blank" rel="noreferrer"><img src={proj21} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="https://github.com/ap001AP/sql-data-lakehouse-project" target="_blank" rel="noreferrer"><h2>Data Lakehouse</h2></a>
                <p>Built a production-grade cloud Data Lakehouse on Databricks using Medallion Architecture, ingesting live data from a PostgreSQL database, REST API, and real-time Kafka streams into Bronze Delta tables, applying PySpark transformations in Silver, and delivering a star schema Gold layer governed through Unity Catalog. Orchestrated via Databricks Asset Bundles with a GitHub Actions CI/CD pipeline that automatically tests with pytest and deploys on every push.</p>
            </div>
            <div className="project">
                <a href="https://github.com/ap001AP/sql-data-warehouse-project" target="_blank" rel="noreferrer"><img src={proj22} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="https://github.com/ap001AP/sql-data-warehouse-project" target="_blank" rel="noreferrer"><h2>Data Warehouse</h2></a>
                <p>Built a modern data warehouse on SQL Server that transforms raw ERP and CRM data into analytics-ready insights through a structured Bronze, Silver, and Gold pipeline. The final data modeled into a star schema to report on the sales trends, customer behavior, and product performance.</p>
            </div>
            <div className="project">
                <a href="https://github.com/ap001AP/hr-dashboard-project" target="_blank" rel="noreferrer"><img src={proj033} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="https://github.com/ap001AP/hr-dashboard-project" target="_blank" rel="noreferrer"><h2>HR Analytics Dashboard</h2></a>
                <p>I created a Python script to generate a realistic dataset that is used to build an interactive Tableau dashboard. The dashboard allows HR managers to explore workforce demographics, income patterns, and employee performance at both a summary and individual level.</p>
            </div>
            <div className="project">
                <a href="https://github.com/cmput301-w25/project-theynotlikeus" target="_blank" rel="noreferrer"><img src={proj24} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="https://github.com/cmput301-w25/project-theynotlikeus" target="_blank" rel="noreferrer"><h2>Moods</h2></a>
                <p>Developed an Android mobile application using Java and Android Studio that serves as a tool to understand and track moods, providing insights into the mental well-being of its users amidst their academic and personal life challenges.</p>
            </div>
        </div>
    </div>
    );
}

export default Project;