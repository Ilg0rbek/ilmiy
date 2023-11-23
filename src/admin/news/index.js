import React, { useState } from "react";
import { PlusOutlined } from "@ant-design/icons";
import NewsModal from "../modal/news.modal";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { deleteData, getAllNews } from "../../redux/reducers/news.store";
// import Item from "antd/es/list/Item";
import { FaRegTrashCan } from "react-icons/fa6";
import { message } from "antd";

const News = () => {
  const dispatch = useDispatch();
  const [testData, setTestData] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const stateNews = useSelector((state) => state.news.getData);

  useEffect(() => {
    dispatch(getAllNews());
  }, [isModalOpen]);

  console.log(stateNews);
  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleDeleteData = (id) => {
    dispatch(deleteData(id));
    message.success(`${id}`);
    dispatch(getAllNews());
  };
  return (
    <div>
      <NewsModal isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen} />
      <div className="addNewYear" onClick={showModal}>
        Ilmiy bo'limdagi yangiliklarni qo'shish <PlusOutlined />
      </div>

      <div className="table-responsive">
        <table class="table align-middle">
          <thead>
            <tr>
              <th>№</th>
              <th>Img</th>
              <th>Sarlavha</th>
              <th>Izoh</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {stateNews?.map((item, index) => {
              return (
                <tr>
                  <td>{index + 1}</td>
                  <td>
                    <img
                      className="w-20"
                      style={{ width: "100px" }}
                      src={`http://localhost:8080/${item.image}`}
                      alt=""
                    />
                  </td>
                  <td>{item.title}</td>
                  <td>{item.desc}</td>
                  <td onClick={() => handleDeleteData(item._id)}>
                    <FaRegTrashCan />
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default News;
