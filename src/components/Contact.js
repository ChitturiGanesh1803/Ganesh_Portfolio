
// import React, { useState } from "react";
// import "../styles/global.css";
// import ContactForm from "./ContactForm"; // ✅ Import ContactForm as a component

// function Contact() {
//   const [showForm, setShowForm] = useState(false); // ✅ State to control popup visibility

//   return (
//     <section className="contact" id="contact">
//       <div className="container">
//         <div className="col-md-12 text-center">
//           <i className="fas fa-paper-plane section-icon"></i>
//           <h2>Get in touch</h2>
//           <div className="contact-info mb-4">
//             <p><i className="fas fa-envelope"></i> chitturiganesh1803@gmail.com</p>
//             <p><i className="fas fa-map-marker-alt"></i> Guntur, India</p>
//           </div>

//           {/* 🔹 Button to show ContactForm as a popup */}
//           <button type="button" className="btn btn-primary" id="contact-btn" onClick={() => setShowForm(true)}>
//             <i className="fas fa-envelope"></i> Contact me
//           </button>
//         </div>
//       </div>

//       {/* 🔹 Show the popup only when showForm is true */}
//       {showForm && <ContactForm onClose={() => setShowForm(false)} />}
//     </section>
//   );
// }

// export default Contact;


// import React from "react";
// import "../styles/global.css";

// function Contact() {
//   // Function to open ContactForm.js in a new popup window
//   const openPopup = () => {
//     const popupUrl = `${window.location.origin}/contact-form`; // ✅ Opens the React route
//     const popup = window.open(
//       popupUrl,
//       "Contact Form",
//       "width=600,height=600,top=100,left=100"
//     );

//     if (!popup) {
//       alert("Popup blocked! Please allow popups for this site.");
//     }
//   };

//   return (
//     <section className="contact" id="contact">
//       <div className="container">
//         <div className="col-md-12 text-center">
//           <i className="fas fa-paper-plane section-icon"></i>
//           <h2>Get in touch</h2>
//           <div className="contact-info mb-4">
//             <p><i className="fas fa-envelope"></i> chitturiganesh1803@gmail.com</p>
//             <p><i className="fas fa-map-marker-alt"></i> Guntur, India</p>
//           </div>

//           {/* 🔹 Button to open ContactForm in a new popup page */}
//           <button type="button" className="btn btn-primary" id="contact-btn" onClick={openPopup}>
//             <i className="fas fa-envelope"></i> Contact me
//           </button>
//         </div>
//       </div>
//     </section>
//   );
// }

// export default Contact;



import React from "react";
import { Link } from "react-router-dom";  // ✅ Import Link from React Router
import "../styles/global.css";

function Contact() {
  return (
    <section className="contact" id="contact">
      <div className="container">
        <div className="col-md-12 text-center">
          <i className="fas fa-paper-plane section-icon"></i>
          <h2>Get in touch</h2>
          <div className="contact-info mb-4">
            <p><i className="fas fa-envelope"></i> chitturiganesh1803@gmail.com</p>
            <p><i className="fas fa-map-marker-alt"></i> Guntur, India</p>
          </div>

          {/* 🔹 Link to the ContactForm Page */}
          <Link to="/contact-form" className="btn btn-primary" id="contact-btn">
            <i className="fas fa-envelope"></i> Contact me
          </Link>
        </div>
      </div>
    </section>
  );
}

export default Contact;
