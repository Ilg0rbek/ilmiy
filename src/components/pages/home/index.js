import React from "react";
import "./home.css";
import { Carousel } from "antd";

const Home = () => (
  <div className="home">
    <Carousel autoplay>
      <div>
        <div
          className="swiperSlide"
          style={{
            backgroundImage:
              "url(https://adu.uz/rasmlar/news/2021/photo_2023-04-06_16-39-37.jpg)",
          }}
        >
          <div>
            <div className="title">
              Andijon davlat universitetida yoshlar bilan birgalikda semenar
              bo'lib o'tdi
              <br />
              <div className="btn btn-primary mt-5 ">Ko'proq bilish</div>
            </div>
          </div>
        </div>
      </div>
      <div>
        <div
          className="swiperSlide"
          style={{
            backgroundImage:
              "url(https://adu.uz/rasmlar/news/2021/photo_2023-02-04_17-24-36.jpg)",
          }}
        >
          <div className="title">
            Andijon davlat universitetida Andijon hokimi yoshlar bilan uchrashuv
            o'tkazdi
            <br />
            <div className="btn btn-primary mt-5 ">Ko'proq bilish</div>
          </div>
        </div>
      </div>
      <div>
        <div
          className="swiperSlide"
          style={{
            backgroundImage:
              "url(https://adu.uz/rasmlar/news/2021/photo_2023-04-06_16-39-37.jpg)",
          }}
        >
          <div className="title">
            Andijon davlat universitetida yoshlar bilan birgalikda semenar
            bo'lib o'tdi
            <br />
            <div className="btn btn-primary mt-5 ">Ko'proq bilish</div>
          </div>
        </div>
      </div>
      <div>
        <div
          className="swiperSlide"
          style={{
            backgroundImage:
              "url(https://adu.uz/rasmlar/news/2021/photo_2023-02-04_17-24-36.jpg)",
          }}
        >
          <div className="title">
            Andijon davlat universitetida Andijon hokimi yoshlar bilan uchrashuv
            o'tkazdi
            <br />
            <div className="btn btn-primary mt-5 ">Ko'proq bilish</div>
          </div>
        </div>
      </div>
    </Carousel>
  </div>
);
export default Home;
