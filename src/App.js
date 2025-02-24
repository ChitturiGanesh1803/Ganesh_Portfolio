
// import React from "react";
// import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
// import Navbar from "./components/Navbar";
// import Hero from "./components/Hero";
// import About from "./components/About";
// import Skills from "./components/Skills";
// import Experience from "./components/Experience";
// import Projects from "./components/Projects";
// import Education from "./components/Education";
// import Certifications from "./components/Certifications";
// import Contact from "./components/Contact";
// import ContactForm from "./components/ContactForm";  // ✅ Import ContactForm page
// import Footer from "./components/Footer";
// import "./styles/global.css";

// function App() {
//   return (
//     <Router>
//       <Routes>
//         <Route path="/" element={
//           <>
//             <Navbar />
//             <Hero />
//             <About />
//             <Skills />
//             <Experience />
//             <Projects />
//             <Education />
//             <Certifications />
//             <Contact />
//             <Footer />
//           </>
//         } />
//         <Route path="/contact-form" element={<ContactForm />} /> {/* ✅ Route for ContactForm */}
//       </Routes>
//     </Router>
//   );
// }

// export default App;


import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Education from "./components/Education";
import Certifications from "./components/Certifications";
import Contact from "./components/Contact";
import ContactForm from "./components/ContactForm";  // ✅ Import ContactForm page
import Footer from "./components/Footer";
import "./styles/global.css";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={
          <>
            <Navbar />
            <Hero />
            <About />
            <Skills />
            <Experience />
            <Projects />
            <Education />
            <Certifications />
            <Contact />
            <Footer />
          </>
        } />
        <Route path="/contact-form" element={<ContactForm />} /> {/* ✅ Route for ContactForm */}
      </Routes>
    </Router>
  );
}

export default App;
