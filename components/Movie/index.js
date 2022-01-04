import React from "react";
import Link from "next/link";
import { Card, Progress } from "antd";
import dayjs from "dayjs";
function MovieItem({ movie, index }) {
  const listItem = movie;
  const IMG_API = "https://image.tmdb.org/t/p/w200/";
  return (
    <>
      <div
        key={index}
        style={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "space-between",
        }}
      >
        {listItem.map((movie, index) => (
          <Card key={index}>
            <div key={index}>
              <Link href="/">
                <a>
                  <img
                    loading="lazy"
                    src={IMG_API + movie.poster_path}
                    alt={movie.title}
                  />
                </a>
              </Link>

              <div
                style={{
                  position: "relative",

                  display: "flex",
                  alignContent: "flex-start",
                  flexWrap: "wrap",
                }}
              >
                <div
                  style={{
                    position: "absolute",
                    left: "10px",
                    top: "-19px",
                  }}
                >
                  <Progress
                    type="circle"
                    text="white"
                    height={34}
                    width={34}
                    strokeColor={
                      `${movie.vote_average * 10} ` < 70 ? "yellow" : "green"
                    }
                    percent={`${movie.vote_average * 10}`}
                  />
                </div>
                <div
                  style={{
                    padding: "26px 10px 12px 10px",
                    whiteSpace: "normal",
                  }}
                >
                  <h3 style={{ fontWeight: "700" }}>
                    <Link href="/">
                      <a style={{ color: "black", cursor: "pointer" }}>
                        {movie.title}
                      </a>
                    </Link>
                  </h3>

                  <span style={{ fontSize: "1em", color: "rgba(0,0,0,0.6)" }}>
                    {`${dayjs(`${movie.release_date}`).format("MMM D, YYYY")}`}
                  </span>
                </div>
              </div>
            </div>
          </Card>
        ))}
      </div>
    </>
  );
}

export default MovieItem;
