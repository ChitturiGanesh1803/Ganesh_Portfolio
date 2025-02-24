import React, { useState } from "react";
import ContactForm from "./ContactForm";
import "../styles/global.css";

function Contact() {
  const [showForm, setShowForm] = useState(false);

  return (
    <footer class="footer">
        <div class="container">
            <p>&copy; 2025 Sai Ganesh Kumar.Chitturi. All rights reserved.</p>
            <div class="social-icons">
                <a href="https://www.linkedin.com/in/ganesh-chitturi-9909ab287/" target="_blank"><i class="fab fa-linkedin icon-bounce"></i></a>
                <a href="mailto:chitturiganesh1803@gmail.com"><i class="fas fa-envelope icon-bounce"></i></a>
            </div>
        </div>
    </footer>
  );
}

export default Contact;
