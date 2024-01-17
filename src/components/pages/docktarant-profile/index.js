import React, { useRef, useState,useEffect } from 'react';
import { SearchOutlined ,PlusOutlined} from '@ant-design/icons';
import "./profile.css";
import Highlighter from 'react-highlight-words';
import { Button, Input, Form, Space, Table, message,Select } from 'antd';
import { UploadOutlined, MessageOutlined } from "@ant-design/icons";
import { red, green } from "@ant-design/colors";
import { useDispatch, useSelector } from "react-redux";
import { postProfile, updateProfile } from "../../../redux/reducers/profile.store";
import axiosConfig from "../../../redux/baseUrl";

const StudentProlie = () => {
  const [edit, setEdit] = useState(true);
  const [userProfileData, setUserProfileData] = useState({
    fullName: "",
    firstNumber: "",
    kurs: "",
    adress: "",
    yunalish: "",
    shifr: ""
  });

  const dispatch = useDispatch()
  const state = useSelector(state => state.profile)

  const handleChange = (e) => {
    setUserProfileData(() => {
      return {
        ...userProfileData,
        [e.target.name]: e.target.value,
      };
    });
  };
  const allData = {
    id: sessionStorage.getItem("userId"),
    userProfileData
  }
  const hendleUpdate = () => {
    dispatch(updateProfile(allData))
  }

  useEffect(() => { }, [state.loading])


  const formData = new FormData()

  const [plan, setPlan] = useState("")
  const [selectData, setSelectData] = useState([])
  let userId = sessionStorage.getItem("userId")

  const addAllFile = () => {
    formData.append("document", plan)
    formData.append("title", selectData.label)
    formData.append("owner", userId)
    // console.log(formData.get("document"));
    axiosConfig.post(`/documents`, formData).then(res => {
      console.log(res);
    }).catch(err => {
      console.log(err);
    })
  }

  const [allDocument, setAllDocument] = useState([])

  const getAllDocument = () => {
    axiosConfig.get(`/documents`).then(res => {
      console.log(res.data);
      setAllDocument(res.data)
    }).catch(err => {
      console.log(err);
    })
  }

  useEffect(() => {
    getAllDocument()
  }, [])

  const [mydata, setMyData] = useState()





  const [option, setOption] = useState([
    { value: 1, label: "Shaxsiy yillik reja" },
    { value: 2, label: "Metodologik dastur" },
    { value: 3, label: "Maqolalar" },
    { value: 4, label: "Tezis" },
    { value: 5, label: "Til bilish sertifikat" },
    { value: 6, label: "Yillik xisobot" }
  ])

  const selectChange = (e, b) => {
    setSelectData(b)
  }



  
  const [searchText, setSearchText] = useState('');
  const [searchedColumn, setSearchedColumn] = useState('');
  const searchInput = useRef(null);
  const handleSearch = (selectedKeys, confirm, dataIndex) => {
    confirm();
    setSearchText(selectedKeys[0]);
    setSearchedColumn(dataIndex);
  };
  const handleReset = (clearFilters) => {
    clearFilters();
    setSearchText('');
  };
  const getColumnSearchProps = (dataIndex) => ({
    filterDropdown: ({ setSelectedKeys, selectedKeys, confirm, clearFilters, close }) => (
      <div
        style={{
          padding: 8,
        }}
        onKeyDown={(e) => e.stopPropagation()}
      >
        <Input
          ref={searchInput}
          placeholder={`Search ${dataIndex}`}
          value={selectedKeys[0]}
          onChange={(e) => setSelectedKeys(e.target.value ? [e.target.value] : [])}
          onPressEnter={() => handleSearch(selectedKeys, confirm, dataIndex)}
          style={{
            marginBottom: 8,
            display: 'block',
          }}
        />
        <Space>
          <Button
            type="primary"
            onClick={() => handleSearch(selectedKeys, confirm, dataIndex)}
            icon={<SearchOutlined />}
            size="small"
            style={{
              width: 90,
            }}
          >
            Search
          </Button>
          <Button
            onClick={() => clearFilters && handleReset(clearFilters)}
            size="small"
            style={{
              width: 90,
            }}
          >
            Reset
          </Button>
          <Button
            type="link"
            size="small"
            onClick={() => {
              confirm({
                closeDropdown: false,
              });
              setSearchText(selectedKeys[0]);
              setSearchedColumn(dataIndex);
            }}
          >
            Filter
          </Button>
          <Button
            type="link"
            size="small"
            onClick={() => {
              close();
            }}
          >
            close
          </Button>
        </Space>
      </div>
    ),

    filterIcon: (filtered) => (
      <SearchOutlined
        style={{
          color: filtered ? '#1677ff' : undefined,
        }}
      />
    ),

    onFilter: (value, record) =>
      record[dataIndex].toString().toLowerCase().includes(value.toLowerCase()),

    onFilterDropdownOpenChange: (visible) => {
      if (visible) {
        setTimeout(() => searchInput.current?.select(), 100);
      }
    },

    render: (text) =>
      searchedColumn === dataIndex ? (
        <Highlighter
          highlightStyle={{
            backgroundColor: '#ffc069',
            padding: 0,
          }}
          searchWords={[searchText]}
          autoEscape
          textToHighlight={text ? text.toString() : ''}
        />
      ) : (
        text
      ),
  });

  const deleteStudent = (data) =>{
    dispatch(deleteProfile(data))
    message.success("Talaba o'chirildi")
    dispatch(getAllStudenData())
  }
  const [isModalOpen, setIsModalOpen] = useState(false);  
  const columns = [
    {
      title: 'FIO',
      dataIndex: 'fullName',
      key: 'fullName',
      width: '30%',
      ...getColumnSearchProps('fullName'),
    },
    {
      title: "Kursi",
      dataIndex: 'email',
      key: 'email',
      width: '20%',
      ...getColumnSearchProps('email'),
    },
    {
      title: "Foydalanuvchi nomi",
      dataIndex: 'username',
      key: 'username',
      width: '20%',
      ...getColumnSearchProps('username'),
    },
    {
      title: 'Telefon nomer',
      dataIndex: 'firstNumber',
      key: 'firstNumber',
      width: '20%',
      ...getColumnSearchProps('firstNumber'),
    //   sorter: (a, b) => a.address.length - b.address.length,
    //   sortDirections: ['descend', 'ascend'],
    },
    {
        title: "Yonalsihi",
        dataIndex: 'seccondNumber',
        key: 'seccondNumber',
        width: '20%',
        ...getColumnSearchProps('seccondNumber'),
      },
    {
        title: "O'chirish",
        dataIndex: 'cartItem',
        key: 'cartItem',
        width: '20%',
        render: (text,row) => (
            <a
              style={{ color: 'red' }}
              onClick={() => {
                deleteStudent(row._id)
              }}
            >
              Remove
            </a>
          ),
    },
  ];
  const showModal = () => {
    setIsModalOpen(true);
  };


  return (
    <div>
      <div className="container mt-3  ">
        <div className="main-body">
          <div className="row gutters-sm">
            <div className="col-md-4 mb-3">
              <div className="card">
                <div className="card-body">
                  <div className="d-flex flex-column align-items-center text-center">
                    <img
                      src="https://www.pngall.com/wp-content/uploads/5/User-Profile-PNG.png "
                      alt="Admin"
                      className="rounded-circle"
                      width="150"
                    />
                    <div className="mt-3">
                      <h4>{mydata?.fullName}</h4>
                      <p className="text-secondary mb-1">
                        Doktarantura talabasi
                      </p>
                      <p className="text-muted font-size-sm">
                        {mydata?.adress}
                      </p>
                      {/* <button className="btn btn-">Follow</button>
                      <button className="btn btn-outline- ms-1">Message</button> */}
                    </div>
                  </div>
                </div>
              </div>

              {/* Messages */}
              <div className="card mt-3">
                <ul className="list-group list-group-flush">
                  <li className="list-group-item d-flex justify-content-between align-items-center flex-wrap">
                    <h6 className="m-2">Habarlarni ko'rish</h6>
                    <MessageOutlined className="ms-2" />
                  </li>
                </ul>
              </div>
            </div>

            <div className="col-md-8">
              <div className="card mb-3">
                <div className="card-body">
                  <div className="row">
                    <div className="col-sm-3">
                      <h6 className="mb-0">Ism familya</h6>
                    </div>
                    <div className="col-sm-9 text-secondary">
                      {edit ? (
                        <Input disabled value={mydata?.fullName} placeholder="Full name" />
                      ) : (
                        <Input name="fullName" onChange={handleChange} placeholder="Full name" />
                      )}
                    </div>
                  </div>
                  <hr />
                  <div className="row">
                    <div className="col-sm-3">
                      <h6 className="mb-0">Kursi</h6>
                    </div>
                    <div className="col-sm-9 text-secondary">
                      {edit ? (
                        <Input disabled value={mydata?.kursi} type="text" placeholder="kursi" />
                      ) : (
                        <Input name="kurs" onChange={handleChange} type="text" placeholder="Kursi" />
                      )}
                    </div>
                  </div>
                  <hr />
                  <div className="row">
                    <div className="col-sm-3">
                      <h6 className="mb-0">Tel nomer</h6>
                    </div>
                    <div className="col-sm-9 text-secondary">
                      {edit ? <Input disabled value={mydata?.firstNumber} placeholder="+998 " /> : <Input name="firstNumber" onChange={handleChange} placeholder="+998 " />}
                    </div>
                  </div>
                  <hr />
                  <div className="row">
                    <div className="col-sm-3">
                      <h6 className="mb-0">Yon'alishi</h6>
                    </div>
                    <div className="col-sm-9 text-secondary">
                      {edit ? <Input disabled value={mydata?.yunalish} placeholder="Yo'nalish" /> : <Input name="yunalish" onChange={handleChange} placeholder="Yo'nalisi" />}
                    </div>
                  </div>
                  <hr />
                  <div className="row">
                    <div className="col-sm-3">
                      <h6 className="mb-0">Shifr</h6>
                    </div>
                    <div className="col-sm-9 text-secondary">
                      {edit ? (
                        <Input disabled value={mydata?.shifr} placeholder="Shifr " />
                      ) : (
                        <Input name="shifr" onChange={handleChange} placeholder="Shifri " />
                      )}
                    </div>
                  </div>
                  <hr />
                  <div className="row">
                    <div className="col-sm-3">
                      <h6 className="mb-0">Manzil</h6>
                    </div>
                    <div className="col-sm-9 text-secondary">
                      {edit ? (
                        <Input disabled value={mydata?.adress} placeholder="Manzil " />
                      ) : (
                        <Input name="adress" onChange={handleChange} placeholder="Manzil " />
                      )}
                    </div>
                  </div>
                  <hr />
                  <div className="row">
                    <div className="col-sm-12">
                      <Button type="primary" ghost onClick={() => setEdit(!edit)}>
                        {edit ? "Qo'shish" : "Bekor qilish"}
                      </Button>
                      {!edit && (
                        <Button onClick={hendleUpdate} type="primary" danger ghost className="ms-3" >
                          Saqlash
                        </Button>
                      )}
                    </div>
                  </div>
                </div>

                <div className="row gutters-sm">
                  <div className="col-sm-6 mb-3">
                    <div className="card h-100">
                      <div className="card-body">
                        <h6 className="d-flex align-items-center  justify-content-between  mb-3">
                          Kerakli hujjatlar
                          {/* <Tooltip title="3 yuklandi / 1 ta xujjat yuklanmagan / 4 ta xujjat bilan to'liq bo'ladi ">
                            <Progress
                              percent={75}
                              steps={4}
                              strokeColor={[green[6], green[6], red[5]]}
                            />
                          </Tooltip> */}
                        </h6>
                        <Select

                          showSearch
                          style={{
                            width: "100%",
                            marginBottom: "20px"
                          }}
                          placeholder="Search to Select"
                          optionFilterProp="children"
                          filterOption={(input, option) => (option?.label ?? '').includes(input)}
                          filterSort={(optionA, optionB) =>
                            (optionA?.label ?? '').toLowerCase().localeCompare((optionB?.label ?? '').toLowerCase())
                          }
                          options={option}
                          onChange={(e, b) => { selectChange(e, b) }}
                        />
                        <div
                          className="mb-3"
                          style={{
                            border: "1px solid #d9d9d9",
                            borderRadius: "10px",
                          }}
                        >
                          <input type="file" accept=".pdf, .docx, .doc" onChange={(e) => setPlan(e.target.files[0])} />
                          {/* <Upload
                            beforeUpload={(file) => {
                              setPlan(file)
                              return false;
                            }}
                            accept=".docx, doc, zip, pdf"
                            maxCount={1}
                          >
                            <Button
                              size="meduim"
                              style={{
                                border: "none",
                              }}

                              icon={<UploadOutlined />}
                            >

                              {selectData != "" ?
                                selectData.label + " yuklash" : "Yuqorida kerakli fayl turini tanlng"}
                            </Button>
                          </Upload> */}
                        </div>

                        <Button onClick={addAllFile} type="primary" ghost>Yuklash</Button>
                      </div>
                    </div>
                  </div>
                  <div className="col-sm-6 mb-3">
                    <div className="card h-100">
                      <div className="card-body">
                        <h6 className="d-flex align-items-center mb-3">
                          Foydalanuvchi parolini yangilash
                        </h6>
                        <Form>
                          <Form.Item>
                            <Input placeholder="Eski parolni kiriting" />
                          </Form.Item>
                          <Form.Item>
                            <Input placeholder="Yangi parolni kiriting" />
                          </Form.Item>
                          <Form.Item>
                            <Input placeholder="Yangi parolni qayta kiriting" />
                          </Form.Item>
                          <Button type="primary" ghost>Yangilash</Button>
                        </Form>
                      </div>
                    </div>
                  </div>
                </div>
              </div>


            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-12">
            <DeleteModal isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen} />
            <Table rowKey={(record) => record._id} columns={columns} dataSource={data} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default StudentProlie;
