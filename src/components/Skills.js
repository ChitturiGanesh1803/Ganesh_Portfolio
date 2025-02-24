import React from "react";
import "../styles/global.css";

function Skills() {
  return (
    <section class="skills" id="skills">
        <div class="container">
            <div class="section-container">
                <h2 class="text-center mb-5"><i class="fas fa-code"></i> Technical Skills</h2>
                <div class="row">
                    <div class="col-md-3 mb-4">
                        <div class="skill-card">
                            <h4 class="text-center mb-4">Languages</h4>
                            <p class="text-center">Python</p>
                        </div>
                    </div>
                    <div class="col-md-3 mb-4">
                        <div class="skill-card">
                            <h4 class="text-center mb-4">Web Technologies</h4>
                            <p class="text-center">HTML, CSS, Bootstrap, JavaScript, Django</p>
                        </div>
                    </div>
                    <div class="col-md-3 mb-4">
                        <div class="skill-card">
                            <h4 class="text-center mb-4">Database</h4>
                            <p class="text-center">MySQL</p>
                        </div>
                    </div>
                    <div class="col-md-3 mb-4">
                        <div class="skill-card">
                            <h4 class="text-center mb-4">Tools</h4>
                            <p class="text-center">GitHub, VS Code, Google Colab, Jupyter Notebook</p>
                        </div>
                    </div>
                </div>
                <div class="row mt-4">
                    <div class="col-12">
                        <div class="skill-card">
                            <h4 class="text-center mb-4">Soft Skills</h4>
                            <p class="text-center">Effective Communication, Time Management, Teamwork, Leadership, and Punctuality</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
  );
}

export default Skills;
