import React from "react";
import avarterImage from "../assets/mypic.png";
import Linkdin from "../assets/linkedin.png";
import Github from "../assets/github.png";
import "../styles/home.css";
import About from "../about/About";
import Skills from "../skills/Skills";
import Contact from "../contact/Contact";

const Home = () => {
    return (
        <div id="playerStatus">
            <div className="text-container">
                <h1>Welcome to My Portfolio</h1>
                <p>
                    👋 Hi! I'm Touhidul Islam, a passionate Front-End Developer
                    <br></br>bringing digital ideas to life. I specialize in
                    crafting clean,<br></br> interactive user interfaces using
                    HTML, CSS, and JavaScript. <br></br>Let's build something
                    exceptional together! 🚀
                </p>

                <div className="button-container">
                    {/* Download Resume Button */}
                    <div className="header__buttons">
                        <a
                            href="./finalresume.pdf"
                            download
                            className="resumeButton"
                        >
                            <button
                                className="designkor"
                                style={{ fontFamily: "Georgia", color: "black" }}
                            >
                                Download Resume
                            </button>
                        </a>
                    </div>

                    <a
                        href="https://www.linkedin.com/in/touhid19/"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <button>
                            <img src={Linkdin} alt="LinkedIn" />
                        </button>
                    </a>

                    <a
                        href="https://github.com/touhid9teen"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <button>
                            <img src={Github} alt="Github" />
                        </button>
                    </a>
                </div>
            </div>

            <img src={avarterImage} alt="avarter" className="fixed-image" />
        </div>
    );
};

export default Home;

// import React from "react";
// import avarterImage from "../assets/mypic.png";
// import Linkdin from "../assets/linkedin.png";
// import "../styles/home.css";
// import About from "../about/About";
// import Skills from "../skills/Skills";
// import Contact from "../contact/Contact";

// const Home = () => {
//     return (
//         <div id="playerStatus">
//             <div className="text-container">
//                 <h1>Welcome to My Portfolio</h1>
//                 <p>
//                     👋 Hi! I'm Touhidul Islam, a passionate Front-End Developer
//                     <br></br>bringing digital ideas to life. I specialize in
//                     crafting clean,<br></br> interactive user interfaces using
//                     HTML, CSS, and JavaScript. <br></br>Let's build something
//                     exceptional together! 🚀
//                 </p>
//                 <div className="button-container">
//                     <div className="header__buttons">
//                         <a
//                             href="./finalresume.pdf"
//                             download
//                             className="resumeButton"
//                         >
//                             Download Resume
//                         </a>
//                     </div>

//                     <a
//                         href="https://www.linkedin.com/in/touhid19/"
//                         target="_blank"
//                         rel="noopener noreferrer"
//                     >
//                         <button>
//                             <img src={Linkdin} alt="LinkedIn" />
//                         </button>
//                     </a>
//                 </div>
//             </div>
//             <img src={avarterImage} alt="avarter" className="fixed-image" />
//         </div>
//     );
// };

// export default Home;

// import React from "react";
// import avarterImage from "../assets/mypic.png";
// import "../styles/home.css";
// import About from "../about/About";
// import Skills from "../skills/Skills";
// import Contact from "../contact/Contact";
// const Home = () => {
//     return (
//         <div id="playerStatus">
//             <div className="text-container">
//                 <h1>Welcome to My Portfolio</h1>
//                 <p>
//                     👋 Hi! I'm Touhidul Islam, a passionate Front-End Developer
//                     <br></br>bringing digital ideas to life. I specialize in crafting
//                     clean,<br></br> interactive user interfaces using HTML, CSS, and
//                     JavaScript. <br></br>Let's build something exceptional together! 🚀
//                 </p>
//             </div>
//             <img src={avarterImage} alt="avarter" className="fixed-image" />
//         </div>
//     );
// };

// export default Home;
