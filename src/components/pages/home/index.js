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
              `url(https://ilmiyapi.adu.uz/${item.image})`,
              backgroundSize:"100%"
          }}
        >
          
          <div>
            <div className="title">
              {item.title}
              <br />
              <br />
              <br />
              {item.desc.slice(0,250)}{item.desc.length > 50 ? '...':''}
              <br />
              {/* <div className="btn btn-primary mt-5 ">Ko'proq bilish</div> */}
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
