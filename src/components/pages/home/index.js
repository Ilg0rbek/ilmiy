import React from "react";
import "./home.css";
import { Carousel } from "antd";
import { Link } from "react-router-dom";

function Home() {
  const data = [
    {
      id: 1,
      title:
        "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. ",
      src: "https://api.mentalaba.uz/assets/files/logo/9b93ba4e-948e-4bc5-b553-df4e6661865a.jpg",
    },
    {
      id: 4,
      title:
        "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. ",
      src: "https://telegra.ph/file/538bbbd81518fb9dafe50.jpg",
    },
    {
      id: 2,
      title:
        "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. ",
      src: "https://api.mentalaba.uz/assets/files/logo/9b93ba4e-948e-4bc5-b553-df4e6661865a.jpg",
    },
    {
      id: 3,
      title:
        "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. ",
      src: "https://telegra.ph/file/538bbbd81518fb9dafe50.jpg",
    },
  ];

  return (
    <div className="home">
      <Carousel autoplay effect="fade">
        {data?.map((v) => (
          <div key={v.id}>
            <div
              style={{
                height: "610px",
                backgroundImage: "url(" + v.src + ")",
                objectFit: "cover",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
                backgroundSize: "100%",
              }}
            >
              <div
                style={{
                  position: "absolute",
                  top: "180px",
                  left: "100px",
                }}
              >
                <p 
                  style={{
                    fontSize:"18px",
                    fontWeight:"500",
                    width:"500px",
                    color:'white'
                  }}
                >{v.title}</p>
                <Link className="btn btn-warning">Batafsil</Link>
              </div>
            </div>
          </div>
        ))}
      </Carousel>
    </div>
  );
}
export default Home;
