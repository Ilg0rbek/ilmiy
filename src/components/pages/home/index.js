import React, { useEffect } from "react";
import "./home.css";
import { Carousel } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { getAllNews } from "../../../redux/reducers/news.store";

const Home = () => {

  const coruselNews = useSelector((state)=>state.news.getData)
  const dispatch = useDispatch()

  useEffect(()=>{
    dispatch(getAllNews())
  },[])

  console.log(coruselNews);

  return(
    <div className="home">
    <Carousel autoplay>
      {
        coruselNews && coruselNews.map((item,index)=>(
          <div>
        <div
          className="swiperSlide"
          style={{
            backgroundImage:
              `url(http://localhost:8080/${item.image})`,
          }}
        >
          <div>
            <div className="title">
              {item.title}
              <br />
              <div className="btn btn-primary mt-5 ">Ko'proq bilish</div>
            </div>
          </div>
        </div>
      </div>
     
        ))
      }
    </Carousel>
  </div>
  )
};
export default Home;
