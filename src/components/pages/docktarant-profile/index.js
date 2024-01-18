import React, { useRef, useState, useEffect } from 'react';
import { SearchOutlined, PlusOutlined } from '@ant-design/icons';
import "./profile.css";
import Highlighter from 'react-highlight-words';
import { Button,  Form, Space, Table, message, Select, Upload } from 'antd';
import { UploadOutlined, MessageOutlined } from "@ant-design/icons";
import axiosConfig from "../../../redux/baseUrl";
import DeleteModal from '../../../admin/doctoront/AddModal';

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


  const handleChange = (e) => {
    setUserProfileData(() => {
      return {
        ...userProfileData,
        [e.target.name]: e.target.value,
      };
    });
  };

  let userId = sessionStorage.getItem("userId")

  const hendleUpdate = () => {
    axiosConfig.put(`/auth/user/${userId}`,userProfileData).then(res=>{
      console.log("yangi",res);
      getMydata()
    }).catch(err=>{
      console.log(err);
    })
  }
  
  let id = sessionStorage.getItem("userId")
  const [oldPassword, setOldPassword] = useState()
  const [password, setPassword] = useState()
  const [confirmPassword, setConfirmPassword] = useState()
  
  const hendleUpdatePassword = () => {
    axiosConfig.post(`/auth/update-password`, {oldPassword, password, confirmPassword, id}).then(res=>{
      console.log("parol",res.data);
      if (res.data.msg == "parol Eski parol xato kiritildi") {
        message.success("Parolingiz muvaffaqiyatli yangilandi")
        setOldPassword("")
        setPassword("")
        setConfirmPassword("")
        getMydata()
      }
      else{
        message.error(res.data)
      }
    }).catch(err=>{
      console.log("parol",err);
    })
  }



  const formData = new FormData()

  const [plan, setPlan] = useState("")
  const [selectData, setSelectData] = useState([])

  const addAllFile = () => {
    formData.append("document", plan)
    formData.append("title", selectData.label)
    formData.append("owner", userId)
    // console.log(formData.get("document"));
    axiosConfig.post(`/documents`, formData).then(res => {
      console.log(res.status);
      if (res.status == 201) {
        getAllDocument()
        setSelectData("")
        message.success('Fayl samarali yuklandi');
      }
    }).catch(err => {
      console.log(err);
    })
  }

  const [allDocument, setAllDocument] = useState([])

  const getAllDocument = () => {
    axiosConfig.get(`/documents`).then(res => {
      // console.log(res.data);
      setAllDocument(res.data)
    }).catch(err => {
      console.log(err);
    })
  }

  useEffect(() => {
    getAllDocument()
  }, [])

  const [mydata, setMyData] = useState()
  const getMydata = () => {
    axiosConfig.get(`/auth/user/${userId}`).then(res => {
      setMyData(res.data)
      // console.log("salom",res.data);
    }).catch(err => {
      console.log(err);
    })
  }

  useEffect(() => {
    getMydata()
  }, [])

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
        <input  className="form-control shadow-none"
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

  const deleteStudent = (data) => {
    axiosConfig.delete(`/documents/${data}`).then(res => {
      if (res.status == 200) {
        getAllDocument()
        message.success("Fayl o'chirildi")
      }
    }).catch(err => {
      console.log(err);
    })
    // dispatch(getAllStudenData())
  }
  const [isModalOpen, setIsModalOpen] = useState(false);
  const columns = [
    {
      title: 'Fayl nomi',
      dataIndex: 'title',
      key: 'title',
      width: '30%',
      ...getColumnSearchProps('title'),
    },
    {
      title: "Fayl",
      dataIndex: 'document',
      key: 'document',
      width: '20%',
      ...getColumnSearchProps('document'),
      render: (text, row) => (
        <a href={`https://ilmiyapi.adu.uz/api${row.document}`} target='_blank'
          style={{ color: 'blue' }}
        >
          Faylni yuklash
        </a>
      ),
    },
    {
      title: "Sanasi",
      dataIndex: 'createdAt',
      key: 'createdAt',
      width: '20%',
      render: ((text, date) => console.log("log", date)),
      ...getColumnSearchProps('createdAt'),
    },
    {
      title: "O'chirish",
      dataIndex: 'cartItem',
      key: 'cartItem',
      width: '20%',
      render: (text, row) => (
        <a
          style={{ color: 'red' }}
          onClick={() => {
            deleteStudent(row._id)
          }}
        >
          O'chirish
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
                        {/* Doktarantura {new Date().getDate() - new Date(mydata?.createdAt).getDate() + 1} - kurs talabasi */}
                        Doktarantura {mydata?.kurs} talabasi
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
                        <input  className="form-control shadow-none" disabled value={mydata?.fullName} placeholder="Full name" />
                      ) : (
                        <input  className="form-control shadow-none" name="fullName" defaultValue={mydata?.fullName} onChange={handleChange} placeholder="Full name" />
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
                        <input  className="form-control shadow-none" disabled value={mydata?.kurs} type="text" placeholder="kursi" />
                      ) : (
                        // <input  className="form-control shadow-none" name="kurs" onChange={handleChange} type="text" placeholder="Kursi" />
                        <select name='kurs' onChange={handleChange} style={{ boxShadow: "none" }} className='form-control'>
                          <option selected disabled>Tanlang</option>
                          <option value="1-kusr">1-kusr</option>
                          <option value="2-kusr">2-kusr</option>
                          <option value="3-kusr">3-kusr</option>
                        </select>
                      )}
                    </div>
                  </div>
                  <hr />
                  <div className="row">
                    <div className="col-sm-3">
                      <h6 className="mb-0">Tel nomer</h6>
                    </div>
                    <div className="col-sm-9 text-secondary">
                      {edit ? <input  className="form-control shadow-none" disabled value={mydata?.firstNumber} placeholder="+998 " /> : <input  className="form-control shadow-none" defaultValue={mydata?.firstNumber} name="firstNumber" onChange={handleChange} placeholder="+998 " />}
                    </div>
                  </div>
                  <hr />
                  <div className="row">
                    <div className="col-sm-3">
                      <h6 className="mb-0">Yon'alishi</h6>
                    </div>
                    <div className="col-sm-9 text-secondary">
                      {edit ? <input  className="form-control shadow-none" disabled value={mydata?.yunalish} placeholder="Yo'nalish" /> : <input  className="form-control shadow-none" name="yunalish" defaultValue={mydata?.yunalish} onChange={handleChange} placeholder="Yo'nalisi" />}
                    </div>
                  </div>
                  <hr />
                  <div className="row">
                    <div className="col-sm-3">
                      <h6 className="mb-0">Shifr</h6>
                    </div>
                    <div className="col-sm-9 text-secondary">
                      {edit ? (
                        <input  className="form-control shadow-none" disabled value={mydata?.shifr} placeholder="Shifr " />
                      ) : (
                        <input  className="form-control shadow-none" name="shifr" defaultValue={mydata?.shifr} onChange={handleChange} placeholder="Shifri " />
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
                        <input  className="form-control shadow-none" disabled value={mydata?.adress} placeholder="Manzil " />
                      ) : (
                        <input  className="form-control shadow-none" name="adress" defaultValue={mydata?.adress} onChange={handleChange} placeholder="Manzil " />
                      )}
                    </div>
                  </div>
                  <hr />
                  <div className="row">
                    <div className="col-sm-3">
                      <h6 className="mb-0">Foydalanuvchi nomi</h6>
                    </div>
                    <div className="col-sm-9 text-secondary">
                      {edit ? (
                        <input  className="form-control shadow-none" disabled value={mydata?.username} placeholder="Manzil " />
                      ) : (
                        <input  className="form-control shadow-none" name="adress" disabled value={mydata?.username}  placeholder="Manzil " />
                      )}
                    </div>
                  </div>
                  <hr />
                  <div className="row">
                    <div className="col-sm-3">
                      <h6 className="mb-0">Foydalanuvchi paroli</h6>
                    </div>
                    <div className="col-sm-9 text-secondary">
                      {edit ? (
                        <input  className="form-control shadow-none" disabled value={mydata?.password} placeholder="Manzil " />
                      ) : (
                        <input  className="form-control shadow-none" name="adress" disabled value={mydata?.password}  placeholder="Manzil " />
                      )}
                    </div>
                  </div>
                  <hr />
                  <div className="row">
                    <div className="col-sm-12">
                      <Button type="primary" ghost onClick={() => setEdit(!edit)}>
                        {edit ? "Ma'lumotlarni yangilsh" : "Bekor qilish"}
                      </Button>
                      {!edit && (
                        <Button onClick={()=>{hendleUpdate(); setEdit(!edit)}} type="primary" danger ghost className="ms-3" >
                          Saqlash 
                        </Button>
                      )}
                    </div>
                  </div>
                </div>
                <hr />
                <div className="row gutters-sm">
                  <div className="col-sm-6 mb-3">
                    <div className=" h-100">
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
                          {/* <input type="file" accept=".pdf, .docx, .doc" onChange={(e) => setPlan(e.target.files[0])} /> */}
                          <Upload
                            beforeUpload={(file) => {
                              setPlan(file)
                              return false;
                            }}
                            accept=".pdf, .docx, .doc"
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
                          </Upload>
                        </div>

                        <Button onClick={addAllFile} type="primary" ghost>Yuklash</Button>
                      </div>
                    </div>
                  </div>
                  <div className="col-sm-6 mb-3">
                    <div className=" h-100">
                      <div className="card-body">
                        <h6 className="d-flex align-items-center mb-3">
                          Foydalanuvchi parolini yangilash
                        </h6>
                        <Form>
                          <Form.Item>
                            <input value={oldPassword} onChange={(e)=>setOldPassword(e.target.value)} className="form-control shadow-none" placeholder="Eski parolni kiriting" />
                          </Form.Item>
                          <Form.Item>
                            <input value={password} onChange={(e)=>setPassword(e.target.value)} className="form-control shadow-none" placeholder="Yangi parolni kiriting" />
                          </Form.Item>
                          <Form.Item>
                            <input value={confirmPassword} onChange={(e)=>setConfirmPassword(e.target.value)} className="form-control shadow-none" placeholder="Yangi parolni qayta kiriting" />
                          </Form.Item>
                          <Button type="primary" onClick={hendleUpdatePassword} ghost>Yangilash</Button>
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
            <h2 className="text-center">Yuklangan fayillar</h2>
            <Table rowKey={(record) => record._id} columns={columns} dataSource={allDocument} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default StudentProlie;
