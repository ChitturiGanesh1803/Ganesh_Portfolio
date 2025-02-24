import React from "react";
import "../styles/global.css";

function Hero() {
  return (
    <section class="hero" id="home">
        <div class="container">
            <div class="row justify-content-center text-center">
                <div class="col-md-8">
                    <h1 class="display-4 mb-4"><i class="fas fa-user-circle"></i> Welcome to my portfolio!</h1>
                    <p class="lead mb-4">I'm Sai Ganesh Kumar Chitturi, a Full Stack Python Developer. I have developed an **Ethical Hacking project** using **HTML, CSS, JavaScript, Django, and MySQL**, focusing on building secure, dynamic, and responsive web applications.</p>
                    <div class="social-links">
                        <a href="mailto:chitturiganesh1803@gmail.com"><i class="fas fa-envelope"></i></a>
                        <a href="https://www.linkedin.com/in/ganesh-chitturi-9909ab287" target="_blank"><i class="fab fa-linkedin"></i></a>
                        <a href="https://github.com/ChitturiGanesh1803" target="_blank"><i class="fab fa-github"></i></a>
                    </div>
                </div>
            </div>
        </div>
    </section>

  );
}

export default Hero;
