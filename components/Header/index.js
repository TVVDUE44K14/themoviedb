import { React, useState, useEffect } from "react";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, faSearch } from "@fortawesome/free-solid-svg-icons";
import styles from "./header.module.scss";
import Image from "next/image";
const Header = () => {
  const LogoImg =
    "https://www.themoviedb.org/assets/2/v4/logos/v2/blue_short-8e7b30f73a4020692ccca9c88bafe5dcb6f8a62a4c6bc55cd9ba82bb2cd95f6c.svg";
  const [movieSub, setMovieSub] = useState(false);
  const [showsSub, setShowsSub] = useState(false);
  const [peopleSub, setPeopleSub] = useState(false);
  const [moreSub, setMoreSub] = useState(false);
  const [headerClass, setHeaderClass] = useState("normal nav-down");
  const listenScrollEvent = () => {
    if (window.scrollY >= 70) {
      return setHeaderClass("normal nav-up");
    } else if (window.scrollY <= 73) {
      return setHeaderClass("normal nav-down");
    }
  };
  useEffect(() => {
    window.addEventListener("scroll", listenScrollEvent);
    return () => window.removeEventListener("scroll", listenScrollEvent);
  }, []);
  return (
    <>
      <header id={headerClass} className={styles.header}>
        <div className={styles.content}>
          <div className={styles.subMedia}>
            <div className={styles.navigationMenu}>
              <Link href="/">
                <a className={styles.logo}>
                  <Image
                    src={`${LogoImg}`}
                    alt="The Movie Database (TMDB)"
                    width={"154px"}
                    height={"20px"}
                  ></Image>
                </a>
              </Link>
              <ul className={styles.menuSub}>
                <li
                  className={styles.movieItem}
                  onMouseEnter={() => setMovieSub(true)}
                  onMouseLeave={() => setMovieSub(false)}
                >
                  Movies
                  {movieSub && (
                    <div className={styles.subPopup}>
                      <Link href="/movies/popular">
                        <a>Popular</a>
                      </Link>
                      <Link href="/movies/popular">
                        <a>Now Playing</a>
                      </Link>
                      <Link href="/movies/popular">
                        <a>Upcoming</a>
                      </Link>
                      <Link href="/movies/popular">
                        <a>Top Rated</a>
                      </Link>
                    </div>
                  )}
                </li>

                <li
                  className={styles.TvShowsItem}
                  onMouseEnter={() => setShowsSub(true)}
                  onMouseLeave={() => setShowsSub(false)}
                >
                  TV Shows
                  {showsSub && (
                    <div className={styles.subPopup}>
                      <Link href="/movies/popular">
                        <a>Popular</a>
                      </Link>
                      <Link href="/movies/popular">
                        <a>Airing Today</a>
                      </Link>
                      <Link href="/movies/popular">
                        <a>On TV</a>
                      </Link>
                      <Link href="/movies/popular">
                        <a>Top Rated</a>
                      </Link>
                    </div>
                  )}
                </li>

                <li
                  className={styles.peopleItem}
                  onMouseEnter={() => setPeopleSub(true)}
                  onMouseLeave={() => setPeopleSub(false)}
                >
                  People
                  {peopleSub && (
                    <div className={styles.subPopup}>
                      <Link href="/">
                        <a>Popular People</a>
                      </Link>
                    </div>
                  )}
                </li>

                <li
                  className={styles.MoreItem}
                  onMouseEnter={() => setMoreSub(true)}
                  onMouseLeave={() => setMoreSub(false)}
                >
                  More
                  {moreSub && (
                    <div className={styles.subPopup}>
                      <Link href="/movies/popular">
                        <a>Discussions</a>
                      </Link>
                      <Link href="/movies/popular">
                        <a>Leaderboard</a>
                      </Link>
                      <Link href="/movies/popular">
                        <a>Support</a>
                      </Link>
                      <Link href="/movies/popular">
                        <a>API</a>
                      </Link>
                    </div>
                  )}
                </li>
              </ul>
            </div>
            <div className={styles.navigationAction}>
              <ul className={styles.subAction}>
                <li className={styles.plusIcon}>
                  <Link href="/">
                    <a>
                      <FontAwesomeIcon icon={faPlus} size="lg" fixedWidth />
                    </a>
                  </Link>
                </li>
                <li className={styles.languages}>
                  <div className={styles.languagesDefault}>
                    <a>EN</a>
                  </div>
                </li>
                <li className={styles.login}>
                  <Link href="/">
                    <a>Login</a>
                  </Link>
                </li>
                <li className={styles.signUp}>
                  <Link href="/">
                    <a>Join TMDB</a>
                  </Link>
                </li>
                <li className={styles.searchItem}>
                  <a>
                    <FontAwesomeIcon icon={faSearch} size="lg" fixedWidth />
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};
export default Header;
