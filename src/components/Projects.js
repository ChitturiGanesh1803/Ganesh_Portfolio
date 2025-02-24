import React from "react";
import "../styles/global.css";

function Projects() {
  return (
    <section class="projects" id="projects">
        <div class="container">
            <div class="section-container">
                <h2 class="text-center mb-5"><i class="fas fa-project-diagram"></i> Projects</h2>
                <div class="row">
                    <div class="col-md-6 mb-4">
                        <div class="card project-card">
                            <div class="card-body">
                                <h4 class="card-title">Securing Data with Blockchain and AI</h4>
                                <p class="card-text">Developed SecNet, a Python-based blockchain architecture with AI-driven security rules for secure data sharing.</p>
                                <p class="card-text"><strong>Tools:</strong> HTML, CSS, JavaScript, Django, MySQL</p>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-6 mb-4">
                        <div class="card project-card">
                            <div class="card-body">
                                <h4 class="card-title">Medicine Recommendation System</h4>
                                <p class="card-text">Created a machine learning model using Kaggle datasets to predict appropriate medications based on user preferences and reviews. Achieved 90% accuracy.</p>
                                <p class="card-text"><strong>Tools:</strong> Python, NumPy, Pandas, Seaborn, Matplotlib</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
  );
}

export default Projects;
