import React from "react";
import "../styles/skillsMenu.css";
import skills from "./skillsData";
import frontendIcon from "../assets/eagle-emblem.png";

const Skills = () => {
    const renderContent = (skills) => {
        return skills.map((skill, index) => (
            <div key={index} className="skill-sub-container-1">
                <h3>{skill.title}</h3>
                <div className="level-container">
                    {[...Array(6)].map((_, i) => (
                        <div
                            key={i}
                            className={`level-point ${
                                i < skill.level ? "filled" : "unfilled"
                            }`}
                        />
                    ))}
                </div>
            </div>
        ));
    };

    const menuItems = ["FRONT-END"];
    const currentIcon = frontendIcon;

    return (
        <div className="skill-menu">
            <h1>My Experience</h1>
            {menuItems.map((item, index) => (
                <div key={index}></div>
            ))}

            <div className="skill-sub-container">
                {renderContent(skills[1])}
            </div>
        </div>
    );
};

export default Skills;

// import React, { useState } from "react";
// import classNames from "classnames";
// import "../styles/skillsMenu.css";
// import skills from "./skillsData";
// import frontendIcon from "../assets/eagle-emblem.png";
// import backendIcon from "../assets/hawk-emblem.png";

// const Skills = () => {
//     const [activeMenuItem, setActiveMenuItem] = useState(1);

//     const handleMenuItemClick = (menuItem) => {
//         setActiveMenuItem(menuItem);
//     };

//     const renderContent = (skills) => {
//         return skills.map((skill, index) => (
//             <div
//                 key={index}
//                 className={`skill-sub-container-${activeMenuItem}`}
//             >
//                 <h3>{skill.title}</h3>
//                 <div className="level-container">
//                     {[...Array(6)].map((_, i) => (
//                         <div
//                             key={i}
//                             className={`level-point ${
//                                 i < skill.level ? "filled" : "unfilled"
//                             }`}
//                         />
//                     ))}
//                 </div>
//             </div>
//         ));
//     };

//     const menuItems = ["FRONT-END"];
//     const currentIcon = activeMenuItem === 1 ? frontendIcon : backendIcon;

//     return (
//         <div className="skill-menu">
//             {menuItems.map((item, index) => (
//                 <div
//                     key={index}
//                     className={classNames("skill-item", {
//                         activeSkill: activeMenuItem === index + 1,
//                     })}
//                     onClick={() => handleMenuItemClick(index + 1)}
//                 >
//                     <h2 className="skill-title">{item}</h2>
//                 </div>
//             ))}
//             <img className="skill-icon" src={currentIcon} alt="current skill" />
//             <div className="skill-sub-container">
//                 {renderContent(skills[activeMenuItem])}
//             </div>
//         </div>
//     );
// };

// export default Skills;
