import React, { useState } from "react";
import { PlusOutlined, StarFilled } from "@ant-design/icons";
import NewsModal from "../modal/news.modal";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getAllNews, showData } from "../../redux/reducers/news.store";
import { FaRegTrashCan } from "react-icons/fa6";
import DeleteModal from "../modal/deleteModal";
import { MdOutlineEdit } from "react-icons/md";

const News = () => {
  const dispatch = useDispatch();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isModalOpen1, setIsModalOpen1] = useState(false);
  const stateNews = useSelector((state) => state.news.getData);
  const statePut = useSelector((state) => state?.news?.showStateData?.data);

  const [deleteId, setDeleteId] = useState();
  const [showId, setShowId] = useState();

  useEffect(() => {
    dispatch(getAllNews());
  }, []);

  useEffect(() => {
    dispatch(getAllNews());
  }, [isModalOpen, isModalOpen1]);

  const showModal = () => {
    setIsModalOpen(true);
  };
  const showModal1 = () => {
    setIsModalOpen1(true);
  };

  const edittData = (id) => {
    setShowId(id);
    dispatch(showData(id));
    setIsModalOpen(true);
  };

  return (
    <div>
      <NewsModal
        showId={showId}
        isModalOpen={isModalOpen}
        setIsModalOpen={setIsModalOpen}
        statePut={statePut}
      />
      <div className="addNewYear" onClick={showModal}>
        Ilmiy bo'limdagi yangiliklarni qo'shish <PlusOutlined />
      </div>

      <div className="table-responsive">
        <table class="table align-middle">
          <thead>
            <tr>
              <th style={{ maxWidth: "2px" }}>№</th>
              <th style={{ maxWidth: "2px" }}>Img</th>
              <th>Sarlavha</th>
              <th>Izoh</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {stateNews?.map((item, index) => {
              return (
                <tr key={index}>
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
                  <td className="p-2">
                    <span
                      className="p-2"
                      onClick={() => {
                        edittData(item._id);
                      }}
                    >
                      <MdOutlineEdit />
                    </span>
                    <span
                      className="p-2"
                      onClick={() => {
                        setDeleteId(item._id);
                        showModal1();
                      }}
                    >
                      <FaRegTrashCan />
                    </span>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
        <DeleteModal
          setIsModalOpen1={setIsModalOpen1}
          isModalOpen1={isModalOpen1}
          deleteId={deleteId}
        />
      </div>
    </div>
  );
};

export default News;
