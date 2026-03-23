import React from "react";
import '../assets/styles/About.scss';

function About() {
  return (
    <div id="about">
      <div className="items-container">
        <h1>About Me</h1>
        <p>
          Physics and Computer Science graduate who builds things. From SQL Server Data Warehouses to cloud-based Databricks Lakehouses with real-time Kafka streaming, CI/CD pipelines, and automated testing — I turn raw data into reliable, business-ready infrastructure. Medallion Architecture, dimensional modeling, and production-grade engineering are where I live.
          But the foundation is just the beginning. What truly excites me is
          where data engineering meets artificial intelligence and machine learning —
          building the kind of clean, scalable, and governed data infrastructure that makes intelligent systems actually possible.
          My goal is to be at that intersection, using data engineering as the backbone to power AI and ML solutions that don't just analyze the world but change how we interact with it.
        </p>
      </div>
    </div>
  );
}

export default About;