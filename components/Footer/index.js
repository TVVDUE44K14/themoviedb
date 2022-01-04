import React from "react";
import Link from "next/link";
import styles from "./footer.module.scss";
const Footer = () => {
  const logo =
    "https://www.themoviedb.org/assets/2/v4/logos/v2/blue_square_2-d537fb228cf3ded904ef09b136fe3fec72548ebc1fea3fbbd1ad9e36364db38b.svg";
  return (
    <>
      <footer id="footer" className={styles.footer}>
        <nav>
          <div className={styles.join}>
            <img
              src={`${logo}`}
              alt="The Movie Database (TMDB)"
              width={130}
              height={90}
            />
            <Link href="/">
              <a>Join the community</a>
            </Link>
          </div>
          <div>
            <h3>The Basics</h3>
            <ul>
              <li>About TMDB</li>
              <li>Contact Us</li>
              <li>Support Forums</li>
              <li>API</li>
              <li>System Status</li>
            </ul>
          </div>
          <div>
            <h3>Get involved</h3>
            <ul>
              <li>Contributed Bible</li>
              <li>3rd Party Applications</li>
              <li>Add New Movie</li>
              <li>Add New TV Show</li>
            </ul>
          </div>
          <div>
            <h3>Community</h3>
            <ul>
              <li>Contributed Bible</li>
              <li>Discussions</li>
              <li>Leaderboard</li>
              <li>twitter</li>
            </ul>
          </div>
          <div>
            <h3>Legal</h3>
            <ul>
              <li>Terms of Use</li>
              <li>API Terms of Use</li>
              <li>Privacy Policy</li>
            </ul>
          </div>
        </nav>
      </footer>
    </>
  );
};
export default Footer;
