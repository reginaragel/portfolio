import React from "react";
import { assets } from "./assets/image";
import './MainPage.css';
const MainPage=()=>{
    return(
        <div>
            <header>
                <div className="navbar">
                    <div className="logo">
                        <img src={assets.logo_icon} alt="logo"/>
                        <span>Pushpa Regina</span>
                    </div>
                    <div className="bars">
                        <div className="home">
                            <a href="home">HOME</a>
                        </div>
                        <div className="about">
                            <a href="abt">ABOUT</a>
                        </div>
                        <div className="skill">
                            <a href="skill">SKILLS</a>
                        </div>
                        <div className="project">
                            <a href="project">PROJECTS</a>
                        </div>
                        <div className="education">
                            <a href="education">EDUCATION</a>
                        </div>
                        <div className="contact">
                            <a href="contact">CONTACT</a>
                        </div>
                    </div>

                </div>
            </header>
            <section className="home-context">
                <div className="text">
                    <h1><span>Hi There,<br/></span>I'm Pushpa Regina</h1>
                    <h2>I'm into FullStack Development</h2>
                    <button>Resume<img src={assets.download_icon} alt="dwld"/></button>
                    
                </div>
                <div className="avatar">
                    <img src={assets.avatar_icon} alt="avatar"/>
                </div>
            </section>
            <section className="about-me">
                <div className="content">
                    <h2>About Me</h2>
                    <ul>
                        <li>Hi, I am S. Pushpa Regina, a recent graduate with a strong interest in full stack development.</li>
                        <li>I have a solid foundation in HTML, CSS, JavaScript, React, Node.js, Express, and Git, along with basic knowledge of MongoDB and MySQL.</li>
                        <li> As a self-taught developer, I have built several personal projects to enhance my learning and growth in software development.<br/> After completing my college education, I have continued to expand my knowledge by diving deeper into React, Node.js, and other technologies.</li>
                        <li> I am passionate about continuously learning and improving my skillset.</li>
                        <li>Currently, I am seeking a developer role where I can apply my knowledge, work on real-time projects, and further develop my capabilities in a professional environment.</li>
                    </ul>
                </div>
            </section>
            <h2 className="title">SKILLS</h2>
            <section className="myskills">
                <div className="skills-container">
                    {/* <h2>SKILLS</h2> */}
                    <div className="html">
                        <img src={assets.html_icon} alt="html"/>
                        <span>HTML5</span>
                    </div>
                    <div className="css">
                        <img src={assets.css_icon} alt="css"/>
                        <span>CSS3</span>
                    </div>
                    <div className="javascript">
                        <img src={assets.javascript_icon} alt="js"/>
                        <span>JAVASCRIPT</span>
                    </div>
                    <div className="react">
                        <img src={assets.react_icon} alt="react"/>
                        <span>REACTJS</span>
                    </div>
                    <div className="node">
                        <img src={assets.node_icon} alt="node"/>
                        <span>NODEJS</span>
                    </div>
                    <div className="express">
                        <img src={assets.express_icon} alt="express"/>
                        <span>EXPRESSJS</span>
                    </div>
                    <div className="mongo">
                        <img src={assets.mongo_icon} alt="mongo"/>
                        <span>MONGODB</span>
                    </div>
                    <div className="sql">
                        <img src={assets.mysql_icon} alt="mysql"/>
                        <span>MYSQL</span>
                    </div>
                    <div className="git">
                        <img src={assets.git_icon} alt="git"/>
                        <span>GIT VCS</span>
                    </div>
                    <div className="github">
                        <img src={assets.github_icon} alt="github"/>
                        <span>GITHUB</span>
                    </div>

                </div>
            </section>
            <h2 className="work">PROJECTS</h2>
            <section className="projects">
                <div className="my-project">
                    <div className="pro1">
                        <span>Blog Website</span>
                        <a href="blog">https://github.com/reginaragel/Blog-Website/tree/master</a>
                    </div>
                    <div className="pro2">
                        <span>Book Website</span>
                        <a href="book">https://github.com/reginaragel/Book/tree/master</a>
                    </div>
                    <div className="pro3">
                        <span>Flipkart Clone FrontEnd</span>
                        <a href="flip">https://github.com/reginaragel/ProfileFyiProject/tree/master</a>
                    </div>
                    <div className="pro4">
                        <span>Task Manager</span>
                        <a href="task">https://github.com/reginaragel/TaskManager_Gamerback/tree/master</a>
                    </div>
                    <div className="pro5">
                        <span>TodoList</span>
                        <a href="todo">https://github.com/reginaragel/Todolist/tree/master</a>
                    </div>
                </div>
            </section>
            <h2 className="study">EDUCATION</h2>
            <section className="my-edu">
                <div className="degree">
                    <img src={assets.wcc_icon} alt="wcc"/>
                    <p>Women's Christian College</p>
                    <h3>CGPA-8.32%</h3>
                    <span>2021-2024</span>
                </div>
                <div className="sslc">
                    <img src={assets.mvm_icon} alt="mvm"/>
                    <p>Maharishi Vidya Mandir Matric Hr Sec School</p>
                    <h3>Percentage-82.6%</h3>
                    <span>2018-2019</span>
                </div>
                <div className="hsc">
                    <img src={assets.ben_icon} alt="ben"/>
                    <p>Bentinck Higher Secondary School for Girls</p>
                    <h3>Percentage-87.83%</h3>
                    <span>2019-2021</span>
                </div>
            </section>
            <h2 className="call">CONTACT DETAILS</h2>
            <section className="my-contact">
                <div className="contact-me">
                    <div className="link">
                        <img src={assets.linkedin_icon} alt="linkedin"/>
                    </div>
                    <div className="gits">
                        <img src={assets.github_icon} alt="github"/>
                    </div>
                    <div className="twitter">
                        <img src={assets.twitter_icon} alt="twitter"/>
                    </div>
                    <div className="insta">
                        <img src={assets.insta_icon} alt="insta"/>
                    </div>
                    <div className="email">
                        <img src={assets.mail_icon} alt="mail"/>
                    </div>
                    <div className="phone">
                        <img src={assets.phone_icon} alt="phone"/>
                    </div>
                </div>
            </section>

        </div>
    )
}
export default MainPage