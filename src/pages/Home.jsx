import React from "react";
import {
  FaDiscord,
  FaGlobe,
  FaBitcoin,
  FaHandHoldingUsd,
  FaChalkboardTeacher,
  FaUserGraduate,
  FaTrophy,
} from "react-icons/fa";
import "./Home.css";

const Home = () => {
  return (
    <>
      {/*
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
      <link href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@700&family=Roboto+Mono:ital,wght@1,100&display=swap" rel="stylesheet" /> */}

      <div className="bgcolor">
        {/* Hero section */}
        <div className="hero-section">
          <div className="LeftText">
            <h1 className="title">
              Scrolling without monetizing and learning?
            </h1>
            {/* <h1 className="title2">not Earning?</h1> */}
            <p className="subtitle">
              Revolutionizing education by creating a dedicated educational
              social media platform empowered by Web3, where learners and <br />{" "}
              content creators come together through blockchain technology to
              monetize learning and teaching
            </p>
          </div>
          <div className="Right">
            <img src="/assets/images/Criptocurrency.png" alt="" />
          </div>
        </div>

        <div className="core-features" id="about">
          <div className="sectionLeft">
            <img src="/assets/images/bitcoin.png" alt="bitcoin" />
          </div>
          <div className="sectionRight">
            <h1 className="section-heading">
              Unlocking the Future of Education and Social Media
            </h1>
            <h2 className="section-subheading">
              Learnhattan, a Blockchain-Powered Learning Ecosystem.
            </h2>
            <p className="section-text">
              Incorporating Crypto and Web3, students can monetize their
              engagement while accessing content from around the world. Our
              platform allows students to earn tokens by solving quizzes,
              participating in discussions, and engaging in various activities.
              Contents are represented as assets, enabling collaborative
              development and expansion. Content creators monetize their content
              with the help of smart contracts.
            </p>
          </div>
        </div>
        {/* <hr /> */}
        <div className="top-courses">
          <div className="section">
            <div class="featurehead">
              <h1>Why Learnhattan</h1>
              <div id="features">
                <div class="fea-base">
                  <div class="fea-box">
                    <i class="fa fa-gamepad">
                      <FaBitcoin />
                    </i>
                    <h3>Content as Asset</h3>
                    <p>
                      Courses treated as blockchain assets, ensuring
                      transparency and dynamic pricing.
                    </p>
                  </div>
                  <div class="fea-box">
                    <i class="fa-solid fa-fire-flame-curved">
                      <FaGlobe />
                    </i>
                    <h3>Web3 Incentivization</h3>
                    <p>
                      Rewards for active engagement by content creators and
                      learners.
                    </p>
                  </div>
                  <div class="fea-box">
                    <i class="fa-solid fa-arrow-right-arrow-left">
                      <FaHandHoldingUsd />
                    </i>
                    <h3>Focused Educational Blockchain</h3>
                    <p>Verified, distraction-free educational content.</p>
                  </div>
                  <div class="fea-box">
                    <i class="fa-solid fa-timeline">
                      <FaChalkboardTeacher />
                    </i>
                    <h3>Token Monetization</h3>
                    <p>
                      Token-based monetization empowers content creators
                      transparently.
                    </p>
                  </div>
                  <div class="fea-box">
                    <i class="fa-brands fa-bitcoin">
                      <FaUserGraduate />
                    </i>
                    <h3>Decentralized Identity</h3>
                    <p>
                      Users control their identity securely on the blockchain.
                    </p>
                  </div>
                  <div class="fea-box">
                    <i class="fa-solid fa-city">
                      <FaTrophy />
                    </i>
                    <h3>Privacy on Blockchain</h3>
                    <p>
                      Emphasis on privacy and security through decentralized
                      technologies.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* <hr /> */}

        <div className="stats">
          <section class="data-section">
            <div class="data-container">
              <div class="data-header">
                <h1 class="data-title">
                  Why do we need Decentralized Education
                </h1>
              </div>
              <div class="data-cards">
                <div class="data-card">
                  <div class="card-content">
                    <svg
                      fill="none"
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      class="card-icon"
                      viewBox="0 0 24 24"
                    >
                      <path d="M8 17l4 4 4-4m-4-5v9"></path>
                      <path d="M20.88 18.09A5 5 0 0018 9h-1.26A8 8 0 103 16.29"></path>
                    </svg>
                    <h2 class="card-title">$3.42T</h2>
                    <p class="card-description">Global education market cap</p>
                  </div>
                </div>
                <div class="data-card">
                  <div class="card-content">
                    <svg
                      fill="none"
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      class="card-icon"
                      viewBox="0 0 24 24"
                    >
                      <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2"></path>
                      <circle cx="9" cy="7" r="4"></circle>
                      <path d="M23 21v-2a4 4 0 00-3-3.87m-4-12a4 4 0 010 7.75"></path>
                    </svg>
                    <h2 class="card-title">87%</h2>
                    <p class="card-description">
                      Students uses online plateform for education
                    </p>
                  </div>
                </div>
                <div class="data-card">
                  <div class="card-content">
                    <svg
                      fill="none"
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      class="card-icon"
                      viewBox="0 0 24 24"
                    >
                      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
                    </svg>
                    <h2 class="card-title">75%</h2>
                    <p class="card-description">
                      reduction in administration cost
                    </p>
                  </div>
                </div>
                <div class="data-card">
                  <div class="card-content">
                    <svg
                      fill="none"
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      class="card-icon"
                      viewBox="0 0 24 24"
                    >
                      <path d="M3 18v-6a9 9 0 0118 0v6"></path>
                      <path d="M21 19a2 2 0 01-2 2h-1a2 2 0 01-2-2v-3a2 2 0 012-2h3zM3 19a2 2 0 002 2h1a2 2 0 002-2v-3a2 2 0 00-2-2H3z"></path>
                    </svg>
                    <h2 class="card-title">0</h2>
                    <p class="card-description">
                      For any kind of crypto & fat exchanges
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>

        <div className="roadmap">
          Roadmap
          <img src="/assets/images/Roadmap.png" alt="roadmap" />
        </div>

        {/* <div className="Achievements">
          <div className="sectionLeft">
            <h3 className="section-heading">Achievements</h3>
            <p className="section-text">Some information about achievements</p>
          </div>
          <div className="sectionRight">
            <div className="cardcontainer">
              <div className="card glass">Learnhattan</div>
              <div className="card glass">Learnhattan</div>
              <div className="card glass">Learnhattan</div>
            </div>
          </div>
        </div> */}
        {/* Call To Action */}

        <div className="cta" id="cta">
          <div class="custom-bg-container">
            <div class="custom-text-container">
              <h2 class="custom-title">
                <span class="custom-block">
                  Stop Losing Money While Learning
                </span>
                <span class="custom-block custom-text-indigo">
                  Join our KickAss Community
                </span>
              </h2>
              <p class="custom-description">
                Unlock endless possibilities at Learnhattan! Learn new skills
                and earn simultaneously. Ready to level up? Join our Discord
                community now for exclusive opportunities and a supportive
                learning environment. Let's grow together!
              </p>
              <div class="custom-button-container" target="_blank">
                <a href="https://discord.com/">
                  <button type="button" class="custom-button">
                    <FaDiscord /> Join Community
                  </button>
                </a>
              </div>
            </div>
          </div>
        </div>
        {/* Footer */}

        <div className="footer" id="footer">
          <footer class="custom-footer">
            <div class="custom-container">
              <ul class="footer-links">
                <li>
                  <a class="footer-link" href="/">
                    FAQ
                  </a>
                </li>
                <li>
                  <a class="footer-link" href="/">
                    Configuration
                  </a>
                </li>
                <li>
                  <a class="footer-link" href="/">
                    Github
                  </a>
                </li>
                <li>
                  <a
                    class="footer-link"
                    target="blank"
                    href="https://www.linkedin.com/company/learnhattan/"
                  >
                    LinkedIn
                  </a>
                </li>
              </ul>
              <div class="footer-social-icons">
                <a href="/" class="footer-icon">
                  <svg
                    width="20"
                    height="20"
                    fill="currentColor"
                    viewBox="0 0 1792 1792"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M1343 12v264h-157q-86 0-116 36t-30 108v189h293l-39 296h-254v759h-306v-759h-255v-296h255v-218q0-186 104-288.5t277-102.5q147 0 228 12z"></path>
                  </svg>
                </a>
                <a href="/" class="footer-icon">
                  <svg
                    width="20"
                    height="20"
                    fill="currentColor"
                    viewBox="0 0 1792 1792"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M1684 408q-67 98-162 167 1 14 1 42 0 130-38 259.5t-115.5 248.5-184.5 210.5-258 146-323 54.5q-271 0-496-145 35 4 78 4 225 0 401-138-105-2-188-64.5t-114-159.5q33 5 61 5 43 0 85-11-112-23-185.5-111.5t-73.5-205.5v-4q68 38 146 41-66-44-105-115t-39-154q0-88 44-163 121 149 294.5 238.5t371.5 99.5q-8-38-8-74 0-134 94.5-228.5t228.5-94.5q140 0 236 102 109-21 205-78-37 115-142 178 93-10 186-50z"></path>
                  </svg>
                </a>
                <a href="/" class="footer-icon">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    fill="currentColor"
                    viewBox="0 0 1792 1792"
                  >
                    <path d="M896 128q209 0 385.5 103t279.5 279.5 103 385.5q0 251-146.5 451.5t-378.5 277.5q-27 5-40-7t-13-30q0-3 .5-76.5t.5-134.5q0-97-52-142 57-6 102.5-18t94-39 81-66.5 53-105 20.5-150.5q0-119-79-206 37-91-8-204-28-9-81 11t-92 44l-38 24q-93-26-192-26t-192 26q-16-11-42.5-27t-83.5-38.5-85-13.5q-45 113-8 204-79 87-79 206 0 85 20.5 150t52.5 105 80.5 67 94 39 102.5 18q-39 36-49 103-21 10-45 15t-57 5-65.5-21.5-55.5-62.5q-19-32-48.5-52t-49.5-24l-20-3q-21 0-29 4.5t-5 11.5 9 14 13 12l7 5q22 10 43.5 38t31.5 51l10 23q13 38 44 61.5t67 30 69.5 7 55.5-3.5l23-4q0 38 .5 88.5t.5 54.5q0 18-13 30t-40 7q-232-77-378.5-277.5t-146.5-451.5q0-209 103-385.5t279.5-279.5 385.5-103zm-477 1103q3-7-7-12-10-3-13 2-3 7 7 12 9 6 13-2zm31 34q7-5-2-16-10-9-16-3-7 5 2 16 10 10 16 3zm30 45q9-7 0-19-8-13-17-6-9 5 0 18t17 7zm42 42q8-8-4-19-12-12-20-3-9 8 4 19 12 12 20 3zm57 25q3-11-13-16-15-4-19 7t13 15q15 6 19-6zm63 5q0-13-17-11-16 0-16 11 0 13 17 11 16 0 16-11zm58-10q-2-11-18-9-16 3-14 15t18 8 14-14z"></path>
                  </svg>
                </a>
                <a
                  href="https://www.linkedin.com/company/learnhattan/"
                  target="blank"
                  class="footer-icon"
                >
                  <svg
                    width="20"
                    height="20"
                    fill="currentColor"
                    viewBox="0 0 1792 1792"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M477 625v991h-330v-991h330zm21-306q1 73-50.5 122t-135.5 49h-2q-82 0-132-49t-50-122q0-74 51.5-122.5t134.5-48.5 133 48.5 51 122.5zm1166 729v568h-329v-530q0-105-40.5-164.5t-126.5-59.5q-63 0-105.5 34.5t-63.5 85.5q-11 30-11 81v553h-329q2-399 2-647t-1-296l-1-48h329v144h-2q20-32 41-56t56.5-52 87-43.5 114.5-15.5q171 0 275 113.5t104 332.5z"></path>
                  </svg>
                </a>
              </div>
              <div class="copyright">
                © 2023 Learnhattan, Inc. All rights reserved.
              </div>
            </div>
          </footer>
        </div>
      </div>
    </>
  );
};

export default Home;
