import React from "react";
import '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faThinkPeaks, faBuffer,faPython } from '@fortawesome/free-brands-svg-icons';
import Chip from '@mui/material/Chip';
import '../assets/styles/Expertise.scss';

const labelsFirst = [
    "SQL Server",
    "Databricks",
    "Delta Lake",
    "Unity Catalog",
    "Docker",
    "Medallion Architecture"
];

const labelsSecond = [
    "Python",
    "Pyspark",
    "Spark SQL",
    "Pandas",
    "NumPy",
    "ETL Pipelines",
];

const labelsThird = [
    "SQL",
    "Tableau",
    "Dimensional Modeling",
    "Star Schema",
    "Data Modeling",
];

function Expertise() {
    return (
    <div className="container" id="expertise">
        <div className="skills-container">
            <h1>Expertise</h1>
            <div className="skills-grid">
                <div className="skill">
                    <FontAwesomeIcon icon={faBuffer} size="3x"/>
                    <h3>Data Engineering & Architecture</h3>
                    <p>I have designed and implemented modern data architectures following the Medallion Architecture pattern across both a SQL Server Data Warehouse and a Databricks Data Lakehouse, building reliable Bronze, Silver, and Gold layers to consolidate and serve business-ready data.</p>
                    <div className="flex-chips">
                        <span className="chip-title">Tech stack:</span>
                        {labelsFirst.map((label, index) => (
                            <Chip key={index} className='chip' label={label} />
                        ))}
                    </div>
                </div>

                <div className="skill">
                    <FontAwesomeIcon icon={faPython} size="3x"/>
                    <h3>Data Processing & Transformation</h3>
                    <p>Built end-to-end ETL pipelines to extract, cleanse, and transform raw data from ERP and CRM source systems. Applied data quality checks, standardization, and normalization using both PySpark and SQL across all pipeline layers.</p>
                    <div className="flex-chips">
                        <span className="chip-title">Tech stack:</span>
                        {labelsSecond.map((label, index) => (
                            <Chip key={index} className='chip' label={label} />
                        ))}
                    </div>
                </div>

                <div className="skill">
                    <FontAwesomeIcon icon={faThinkPeaks} size="3x"/>
                    <h3>Analytics & Visualization</h3>
                    <p>I model business-ready data into star schemas with fact and dimension tables, and built an interactive HR analytics dashboard delivering insights into workforce demographics, salary patterns, and employee performance.</p>
                    <div className="flex-chips">
                        <span className="chip-title">Tech stack:</span>
                        {labelsThird.map((label, index) => (
                            <Chip key={index} className='chip' label={label} />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    </div>
    );
}

export default Expertise;