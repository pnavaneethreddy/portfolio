"use client";
import { motion } from "framer-motion";
import { Github, Linkedin, Mail, FileDown } from "lucide-react";
import { useState, useEffect } from "react";

export default function Portfolio() {
  const sections = [
    { id: "home", name: "Home" },
    { id: "education", name: "Education" },
    { id: "projects", name: "Projects" },
    { id: "skills", name: "Skills" },
    { id: "certifications", name: "Certifications" },
    { id: "coding", name: "Coding Profiles" },
    { id: "contact", name: "Contact" },
  ];

  const [active, setActive] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      let current = "home";
      sections.forEach((s) => {
        const el = document.getElementById(s.id);
        if (el && window.scrollY >= el.offsetTop - 200) {
          current = s.id;
        }
      });
      setActive(current);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="bg-black text-white font-sans">
      {/* Navbar */}
<header className="fixed top-0 left-0 right-0 z-50 bg-black/50 backdrop-blur-md border-b border-purple-500/20">
  <div className="max-w-7xl mx-auto flex justify-between items-center p-4">
    {/* Removed name here */}
    <nav className="hidden md:flex gap-6">
      {sections.map((s) => (
        <button
          key={s.id}
          onClick={() => scrollTo(s.id)}
          className={`transition ${
            active === s.id
              ? "text-pink-400 font-semibold"
              : "text-gray-400 hover:text-white"
          }`}
        >
          {s.name}
        </button>
      ))}
    </nav>
    <div className="flex gap-4">
      <a href="https://github.com/pnavaneethreddy" target="_blank">
        <Github className="w-6 h-6 hover:text-purple-400 transition" />
      </a>
      <a
        href="https://www.linkedin.com/in/navaneeth-reddy-peddireddy-382a14302/"
        target="_blank"
      >
        <Linkedin className="w-6 h-6 hover:text-blue-400 transition" />
      </a>
      <a href="mailto:navaneethreddygdpl@gmail.com">
        <Mail className="w-6 h-6 hover:text-red-400 transition" />
      </a>
    </div>
  </div>
</header>

{/* Hero Section */}
<section
  id="home"
  className="relative h-screen flex flex-col items-center justify-center text-center"
>
  <video
    autoPlay
    muted
    loop
    playsInline
    className="absolute inset-0 w-full h-full object-cover -z-10"
  >
    <source src="/bg.mp4" type="video/mp4" />
  </video>
  <div className="absolute inset-0 bg-black/60 -z-10" />

  <motion.div
    initial={{ opacity: 0, y: 40 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 1 }}
  >
    {/* Your name moved here */}
    <h1 className="text-6xl md:text-7xl font-extrabold bg-gradient-to-r from-pink-400 via-purple-500 to-indigo-400 bg-clip-text text-transparent mb-6">
      Peddireddy Navaneeth Reddy
    </h1>

    <h2 className="text-2xl md:text-3xl font-semibold text-gray-300">
      Secure. Innovative. Future-Ready.
    </h2>
    <p className="mt-4 text-lg md:text-xl text-gray-400 max-w-3xl mx-auto">
      Cyber Security Enthusiast | Full Stack Developer | Problem Solver
    </p>

    <a
  href="https://drive.google.com/uc?export=download&id=1PSemlrBnzhE5BVloB5THJk1RmWZjB1Ys"
  target="_blank"
  rel="noopener noreferrer"
  className="inline-flex items-center gap-2 mt-8 px-6 py-3 bg-gradient-to-r from-pink-500 to-purple-600 rounded-lg shadow-lg hover:scale-105 transition"
>
  <FileDown className="w-5 h-5" /> Download Resume
</a>

  </motion.div>
</section>


      {/* Education */}
<section id="education" className="max-w-6xl mx-auto px-6 py-24">
  <h3 className="text-4xl font-bold mb-16 text-purple-400 text-center">
    Education
  </h3>
  <div className="relative">
    {/* Left-side vertical line */}
    <div className="absolute top-0 left-4 w-1 bg-purple-500 h-full"></div>

    {[
      {
        title: "B.Tech in Computer Science and Engineering (Cyber Security)",
        place: "CVR College of Engineering, Hyderabad",
        result: "CGPA: 9.35 / 10",
        date: "2023 – 2027",
      },
      {
        title: "Intermediate (MPC)",
        place: "Narayana Junior College, Hyderabad",
        result: "Percentage: 97.9%",
        date: "May 2023",
      },
      {
        title: "10th Grade",
        place: "City Central School, Suryapet",
        result: "CGPA: 10.0",
        date: "May 2021",
      },
    ].map((edu, i) => (
      <motion.div
        key={i}
        initial={{ opacity: 0, x: -80 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="mb-16 flex items-center w-full justify-start"
      >
        {/* Card */}
        <div className="ml-12 w-full bg-gray-900 p-8 rounded-xl shadow-lg border border-gray-700">
          {/* Dot */}
          <span className="absolute left-4 transform -translate-x-1/2 w-6 h-6 bg-purple-500 rounded-full border-4 border-black"></span>

          <h4 className="text-xl font-semibold text-white">{edu.title}</h4>
          <p className="text-gray-300 mt-1">{edu.place}</p>
          <p className="text-gray-400">{edu.result}</p>
          <p className="text-sm text-gray-500 mt-2">{edu.date}</p>
        </div>
      </motion.div>
    ))}
  </div>
</section>



      {/* Projects */}
<section id="projects" className="max-w-6xl mx-auto px-6 py-24">
  <h3 className="text-4xl font-bold mb-16 text-pink-400 text-center">
    Projects
  </h3>
  <div className="relative">
    {/* Center line */}
    <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-1 bg-pink-500 h-full"></div>

    {[
      {
        title: "Eamcet College Predictor-2025",
        desc: "Dynamic web app predicting admissions based on EAMCET 2024 cutoffs.",
        img: "/projects/eamcet.png",
        link: "https://github.com/pnavaneethreddy/eamcet-college-predictor-2025",
      },
      {
        title: "Hangman Game with Advanced GUI",
        desc: "Interactive Hangman game with hints, scoring, and sound effects.",
        img: "/projects/hangman.png",
        link: "https://github.com/pnavaneethreddy/Hangman-Game-with-Advanced-GUI-Application",
      },
      {
        title: "Secure Data Hiding in Images",
        desc: "Steganography app with password-protected encryption using Python and OpenCV.",
        img: "/projects/stegano.png",
        link: "https://github.com/pnavaneethreddy/Secure-Data-Hiding-in-Images-using-Steganography",
      },
      {
        title: "Personal Portfolio",
        desc: "Portfolio built with Next.js, Tailwind & Framer Motion.",
        img: "/projects/portfolio.png",
        link: "https://github.com/pnavaneethreddy/Personal-Portfolio",
      },
    ].map((proj, i) => (
      <motion.div
        key={i}
        initial={{ opacity: 0, x: i % 2 === 0 ? -100 : 100 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className={`mb-16 flex items-center w-full ${
          i % 2 === 0 ? "justify-start" : "justify-end"
        }`}
      >
        {/* Card */}
        <div className="relative w-full md:w-5/12 bg-gray-900 p-6 rounded-xl shadow-lg border border-gray-700">
          {/* Dot */}
          <span className="absolute top-6 -translate-y-1/2 left-1/2 transform -translate-x-1/2 w-6 h-6 bg-pink-500 rounded-full border-4 border-black"></span>

          <a href={proj.link} target="_blank" rel="noopener noreferrer">
            <img
              src={proj.img}
              alt={proj.title}
              className="w-full h-56 object-cover rounded-lg mb-4"
            />
            <h4 className="text-xl font-semibold text-white">{proj.title}</h4>
            <p className="text-gray-400 mt-2">{proj.desc}</p>
          </a>
        </div>
      </motion.div>
    ))}
  </div>
</section>
      {/* Skills */}
      <section id="skills" className="max-w-6xl mx-auto px-6 py-24">
        <h3 className="text-4xl font-bold mb-10 text-indigo-400 text-center">
          Skills
        </h3>
        <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-10 place-items-center">
          {[
            {
              name: "Python",
              img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",
            },
            {
              name: "Java",
              img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg",
            },
            {
              name: "C",
              img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/c/c-original.svg",
            },
            {
              name: "HTML",
              img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
            },
            {
              name: "CSS",
              img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
            },
            {
              name: "JavaScript",
              img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
            },
            {
              name: "MySQL",
              img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg",
            },
            {
              name: "React.js",
              img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
            },
            {
              name: "Node.js",
              img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
            },
            {
              name: "Git/GitHub",
              img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg",
            },
            {
              name: "NumPy",
              img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/numpy/numpy-original.svg",
            },
          ].map((skill, i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.15 }}
              className="flex flex-col items-center cursor-pointer"
            >
              <img
                src={skill.img}
                alt={skill.name}
                className="w-16 h-16 object-contain"
              />
              <motion.span
                initial={{ opacity: 0 }}
                whileHover={{ opacity: 1 }}
                transition={{ duration: 0.3 }}
                className="mt-2 text-sm text-gray-300"
              >
                {skill.name}
              </motion.span>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Certifications */}
<section id="certifications" className="max-w-6xl mx-auto px-6 py-24">
  <h3 className="text-4xl font-bold mb-16 text-green-400 text-center">
    Certifications
  </h3>
  <div className="relative">
    {/* Center line */}
    <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-1 bg-green-500 h-full"></div>

    {[
      "Cyber Security Training – Edunet Foundation (AICTE)",
      "Virtual Internship – Palo Alto Networks",
      "SQL Programming – Oracle Academy",
      "Generative AI Workshop – CVR College",
    ].map((cert, i) => (
      <motion.div
        key={i}
        initial={{ opacity: 0, x: i % 2 === 0 ? -100 : 100 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className={`mb-12 flex w-full ${
          i % 2 === 0 ? "justify-start" : "justify-end"
        }`}
      >
        <div className="w-full md:w-5/12 bg-gray-900 p-6 rounded-xl shadow-lg border border-gray-700">
          <p className="text-gray-200">{cert}</p>
        </div>
      </motion.div>
    ))}
  </div>
</section>



      {/* Coding Profiles */}
      <section id="coding" className="max-w-6xl mx-auto px-6 py-24">
        <h3 className="text-4xl font-bold mb-12 text-yellow-400">
          Coding Profiles
        </h3>
        <div className="flex flex-wrap gap-10 justify-center">
          {[
            {
              name: "LeetCode",
              img: "https://leetcode.com/static/images/LeetCode_logo.png",
              link: "https://leetcode.com/u/p_navaneeth_reddy/",
            },
            {
              name: "CodeChef",
              img: "https://cdn.codechef.com/sites/all/themes/abessive/cc-logo.png",
              link: "https://www.codechef.com/users/p_navaneeth",
            },
          ].map((profile, i) => (
            <motion.a
              key={i}
              href={profile.link}
              target="_blank"
              whileHover={{ scale: 1.1 }}
              className="flex flex-col items-center p-6 bg-gray-900 rounded-xl border border-gray-700 hover:shadow-lg hover:shadow-yellow-500/20 transition"
            >
              <img
                src={profile.img}
                alt={profile.name}
                className="w-20 h-20 object-contain mb-4"
              />
              <span className="text-lg font-semibold text-gray-300">
                {profile.name}
              </span>
            </motion.a>
          ))}
        </div>
      </section>

      {/* Contact */}
      <footer
        id="contact"
        className="bg-black/90 text-white py-20 border-t border-purple-500/20"
      >
        <div className="max-w-6xl mx-auto text-center">
          <h3 className="text-3xl font-bold mb-6 animate-pulse">
            Get in Touch
          </h3>
          <p className="mb-8 text-gray-400 text-lg">
            Let's build something amazing together 🚀
          </p>
          <div className="flex justify-center gap-10">
            <a href="mailto:navaneethreddygdpl@gmail.com">
              <Mail className="w-8 h-8 hover:text-red-400 transition hover:scale-125" />
            </a>
            <a href="https://github.com/pnavaneethreddy" target="_blank">
              <Github className="w-8 h-8 hover:text-purple-400 transition hover:scale-125" />
            </a>
            <a
              href="https://www.linkedin.com/in/navaneeth-reddy-peddireddy-382a14302/"
              target="_blank"
            >
              <Linkedin className="w-8 h-8 hover:text-blue-400 transition hover:scale-125" />
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
