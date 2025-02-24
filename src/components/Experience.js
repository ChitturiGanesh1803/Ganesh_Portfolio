import React from "react";
import "../styles/global.css";

function Experience() {
  return (
    <section class="experience" id="experience">
        <div class="container">
            <div class="section-container">
                <h2 class="text-center mb-5"><i class="fas fa-briefcase"></i> Experience</h2>
                <div class="row justify-content-center">
                    <div class="col-md-10">
                        <div class="card">
                            <div class="card-body">
                                <h3 class="card-title"><i class="fas fa-laptop-code"></i> Datavalley.AI, Vijayawada</h3>
                                <h6 class="card-subtitle mb-3">Full Stack Python Developer (Jr. Software Engineer) - Jun 2024 – Present</h6>
                                <ul class="list-unstyled">
                                    <li class="mb-2">• Developed service projects to perform daily tests on in-development products, reducing debugging time</li>
                                    <li class="mb-2">• Automated test processes using Django, HTML, CSS, JavaScript, and MySQL</li>
                                    <li>• Developed methods for generating and sharing daily test result reports</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
  );
}

export default Experience;
