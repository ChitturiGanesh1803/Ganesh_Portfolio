import React from "react";
import "../styles/global.css";

function Certifications() {
  return (
    <section class="certifications" id="certifications">
        <div class="container">
            <div class="section-container">
                <h2 class="text-center mb-5"><i class="fas fa-certificate"></i> Certifications</h2>
                <div class="row justify-content-center">
                    <div class="col-md-10">
                        <div class="certification-item">
                            <p class="mb-0">Long-Term Internship in Full Stack Development by Datavalley.ai in collaboration with APSCHE (April 2024)</p>
                        </div>
                        <div class="certification-item">
                            <p class="mb-0">Ethical Hacking through NPTEL/SWAYAM (Jul–Oct 2023) – Roll No: NPTEL23CS75S103630292</p>
                        </div>
                        <div class="certification-item">
                            <p class="mb-0">Microsoft Azure AI Fundamentals (April 2023) – Certification No: 1730-4455</p>
                        </div>
                        <div class="certification-item">
                            <p class="mb-0">Ethical Hacking and Cyber Security Workshop by Lyfaux Organization (March 2022) – ID: LYFW22102</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
  );
}

export default Certifications;
