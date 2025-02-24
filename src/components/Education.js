import React from "react";
import "../styles/global.css";

function Education() {
  return (
    <section class="education" id="education">
        <div class="container">
            <div class="section-container">
                <h2 class="text-center mb-5"><i class="fas fa-graduation-cap"></i> Education</h2>
                <div class="education-item">
                    <h3><i class="fas fa-university"></i> St. Mary's Group of Institutions Guntur</h3>
                    <p>B.Tech in Computer Science Engineering (Cybersecurity) - 2020 - 2024</p>
                    <p class="mb-0">CGPA: 7.65</p>
                </div>
                <div class="education-item">
                    <h3><i class="fas fa-school"></i> Narayana Junior College</h3>
                    <p>M.P.C - 2018 - 2020</p>
                    <p class="mb-0">CGPA: 8.34</p>
                </div>
                <div class="education-item">
                    <h3><i class="fas fa-school"></i> Narayana English Medium High School</h3>
                    <p>10th (SSC) - 2018</p>
                    <p class="mb-0">CGPA: 8.8</p>
                </div>
            </div>
        </div>
    </section>
  );
}

export default Education;
