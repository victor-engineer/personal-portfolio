import { motion } from "framer-motion";
import backgroundImage from "./assets/projeto1.png";
import projeto2 from "./assets/projeto2.png";
import { FaGithub } from "react-icons/fa";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import "./App.css";
import { useState } from "react";

function App() {
  const projects = [
    {
      image: backgroundImage,
      alt: "Projeto 1",
      link: "https://github.com/victor-engineer/barbershop",
    },
    {
      image: projeto2,
      alt: "Projeto 2",
      link: "https://github.com/victor-engineer/TheHeadphoneStore",
    },
  ];

  const [currentProjectIndex, setCurrentProjectIndex] = useState(0);

  // Funções de navegação
  const nextProject = () => {
    setCurrentProjectIndex((prevIndex) => (prevIndex + 1) % projects.length);
  };

  const prevProject = () => {
    setCurrentProjectIndex(
      (prevIndex) => (prevIndex - 1 + projects.length) % projects.length
    );
  };

  return (
    <div id="projects" className="App" style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
      <motion.div
        className="image-container"
        initial={{ rotateY: 0, rotateX: 0, y: 0 }}
        animate={{ rotateY: 40, rotateX: 20, y: 100 }}
        transition={{ duration: 1 }}
        whileHover={{ rotateY: 50, rotateX: 30 }}
        style={{
          perspective: 1500,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          marginBottom: "40px",
        }}
      >
        <motion.img
          src={projects[currentProjectIndex].image}
          alt={projects[currentProjectIndex].alt}
          className="background-image"
          style={{
            maxWidth: "90vw",
            maxHeight: "90vh",
            objectFit: "contain",
            marginTop: "20px",
            boxShadow: "10px 10px 30px rgba(0, 0, 0, 0.3)",
            borderRadius: "10px",
          }}
          initial={{ opacity: 0, filter: "blur(10px)" }}
          animate={{ opacity: 1, filter: "blur(0)" }}
          transition={{ duration: 0.6 }}
        />
      </motion.div>

      {/* Seção de navegação (setas) */}
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          width: "80%",
          padding: "10px",
          position: "absolute",
          top: "40%",
        }}
      >
        <motion.div
          whileHover={{
            scale: [1.1, 0.95, 1.1], // Aumento mais suave
            color: "#007bff",
            transition: {
              duration: 1.5, // Animação mais lenta
              repeat: Infinity,
              repeatType: "reverse",
            },
          }}
          style={{
            fontSize: "40px",
            cursor: "pointer",
            color: "#333",
          }}
          onClick={prevProject}
        >
          <FaChevronLeft />
        </motion.div>

        <motion.div
          whileHover={{
            scale: [1.1, 0.95, 1.1], // Aumento mais suave
            color: "#007bff",
            transition: {
              duration: 1.5, // Animação mais lenta
              repeat: Infinity,
              repeatType: "reverse",
            },
          }}
          style={{
            fontSize: "40px",
            cursor: "pointer",
            color: "#333",
          }}
          onClick={nextProject}
        >
          <FaChevronRight />
        </motion.div>
      </div>

      {/* Seção do ícone do GitHub e o link */}
      <div className="github-container" style={{ textAlign: "center", paddingTop: "90px" }}>
        <a
          href={projects[currentProjectIndex].link}
          target="_blank"
          rel="noopener noreferrer"
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            color: "#333",
            fontSize: "24px",
            textDecoration: "none",
          }}
        >
          <FaGithub style={{ marginRight: "10px", fontSize: "30px" }} />
          <span>Saiba Mais</span>
        </a>
      </div>
    </div>
  );
}

export default App;
