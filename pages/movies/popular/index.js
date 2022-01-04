import { React, useState, useEffect } from "react";
import "antd/dist/antd.css";
import { useDispatch, useSelector } from "react-redux";
import { Row, Col, Button } from "antd";
import Filter from "/components/Filter";
import MovieItem from "/components/Movie";
import styles from "./popular.module.scss";
import { getListMoviesRequest } from "/store/movieSlice";
import Image from "next/image";
const Popular = () => {
  const listItemMovie = useSelector((state) => {
    return state?.movies?.list;
  });
  const [hidden, setHidden] = useState(false);

  let anotherNum = 1;
  let numPage = 3;
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getListMoviesRequest({ page: 1 }));
  }, [dispatch]);

  const movieList = [...listItemMovie];
  useEffect(() => {
    if (typeof window !== "undefined") {
      const listItem = document.querySelector("#list");
      const footer = document.querySelector("#footer");
      console.log(Math.round(window.scrollY + window.innerHeight));
      console.log(
        Math.round(
          listItem.clientHeight + listItem.offsetTop + footer.clientHeight
        )
      );
      window.addEventListener("scroll", () => {
        if (
          anotherNum + 1 >= 2 &&
          window.scrollY + window.innerHeight >=
            listItem.clientHeight + listItem.offsetTop + footer.clientHeight
        ) {
          console.log(window.scrollY + window.innerHeight, "222");
          console.log(
            listItem.clientHeight + listItem.offsetTop + footer.clientHeight,
            "333"
          );
          console.log(
            Math.round(window.scrollY + window.innerHeight) ===
              Math.round(
                listItem.clientHeight + listItem.offsetTop + footer.clientHeight
              )
          );
          dispatch(
            getListMoviesRequest({
              page: numPage++,
            })
          );
        }
      });
    }
  }, [dispatch, numPage, anotherNum]);
  const handleLoadMore = () => {
    dispatch(
      getListMoviesRequest({
        page: anotherNum + 1,
      })
    );
    setHidden(true);
  };
  return (
    <>
      <section className={styles.list}>
        <div className={styles.content} id="list">
          <h2
            style={{
              fontSize: "25px",
              fontWeight: 700,
              width: "100%",
              paddingLeft: "40px",
            }}
          >
            Popular Movies
          </h2>
          <Row className={styles.content}>
            <Col xs="3" className={styles.filter}>
              <Filter />
            </Col>
            <Col xs="9" className={styles.listMovies}>
              {movieList &&
                movieList.map((movie, index) => (
                  <MovieItem key={index} movie={movie} index={index} />
                ))}
              {hidden && (
                <Image
                  src="/spinner.gif"
                  alt="Loading"
                  width={1500}
                  height={300}
                />
              )}
              {!hidden && anotherNum ? (
                <Button className={styles.loadMore} onClick={handleLoadMore}>
                  Load More
                </Button>
              ) : (
                <Button className={styles.loadMore}>Load More</Button>
              )}
            </Col>
          </Row>
        </div>
      </section>
    </>
  );
};

export default Popular;
