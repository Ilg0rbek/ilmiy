import React, { useRef, useState, useEffect } from 'react';
import { SearchOutlined, PlusOutlined, EyeOutlined, DeleteOutlined } from '@ant-design/icons';
import Highlighter from 'react-highlight-words';
import { Button, Input, Progress, Space, Table, Tooltip, message } from 'antd';
import { red, green } from '@ant-design/colors';
import { useDispatch, useSelector } from 'react-redux';
import { deleteProfile, getAllStudenData } from '../../redux/reducers/profile.store';
import DeleteModal from './AddModal';
import axiosConfig, { setAuthToken } from '../../redux/baseUrl';
import { Oval } from 'react-loader-spinner'
import * as XLSX from 'xlsx';
import FileSaver from "file-saver"
import { useNavigate } from 'react-router-dom';
const Doctorant = () => {

  const [loading, setLoading] = useState(false)
  const [data, setData] = useState([])
  const [userSearch, setUserSearch] = useState("")
  const [kursSearch, setKursSearch] = useState("")
  const [isModalOpen, setIsModalOpen] = useState(false);
  const dispatch = useDispatch()


  const fileType = "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8";
  const fileExtension = ".xlsx";

  const getUserDoctorant = () =>{
    setLoading(true)
    axiosConfig.post("/auth/users",{user:userSearch, kurs:kursSearch}).then(res=>{
      // setAuthToken(sessionStorage.getItem("token"))
      console.log(res.data);
      setData(res.data)
      setLoading(false)
    }).catch(err=>{
      console.log(err.response.data.statusCode);
      if (err.response.data.statusCode === 401) {
        setLoading(false)
        message.error("Sahifani qayta yangilang")
      }
    })
  }

  const exportToCSV = (data) => {
    const ws = XLSX.utils.json_to_sheet(data);
    const wb = { Sheets: { data: ws }, SheetNames: ["data"] };
    const excelBuffer = XLSX.write(wb, { bookType: "xlsx", type: "array" });
    const datas = new Blob([excelBuffer], { type: fileType });
    FileSaver.saveAs(datas, Date.now() + fileExtension);
  };

  useEffect(() => {
    getUserDoctorant()
  }, [isModalOpen, userSearch, kursSearch])

  useEffect(() => {
    getUserDoctorant()
  }, [])

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

  const deleteStudent = (id) => {
    axiosConfig.delete(`/auth/delete/${id}`).then(res=>{
      getUserDoctorant()
      message.success("Talaba o'chirildi")
    }).catch(err=>{
      console.log(err);
    })
    // dispatch(deleteProfile(data))
    // window.location.reload()
  }

  const navigate = useNavigate()


  const columns = [
    {
      title: '№',
      dataIndex: '',
      key: '',
      width: '5%',
      render: (text, row, index) => (
          <>
              {index + 1 }
          </>
      ),
  },
    {
      title: 'FIO',
      dataIndex: 'fullName',
      key: 'fullName',
      width: '30%',
      ...getColumnSearchProps('fullName'),
    },
    {
      title: "Kursi",
      dataIndex: 'kurs',
      key: 'kurs',
      width: '10%',
      ...getColumnSearchProps('kurs'),
    },
    {
      title: "Foydalanuvchi nomi",
      dataIndex: 'username',
      key: 'username',
      width: '15%',
      ...getColumnSearchProps('username'),
    },
    {
      title: "Foydalanuvchi paroli",
      dataIndex: 'password',
      key: 'password',
      width: '15%',
      ...getColumnSearchProps('username'),
    },
    // {
    //   title: 'Telefon nomer',
    //   dataIndex: 'firstNumber',
    //   key: 'firstNumber',
    //   width: '15%',
    //   ...getColumnSearchProps('firstNumber'),
    //   //   sorter: (a, b) => a.address.length - b.address.length,
    //   //   sortDirections: ['descend', 'ascend'],
    // },
    {
      title: "Yonalsihi",
      dataIndex: 'yunalish',
      key: 'yunalish',
      width: '25%',
      ...getColumnSearchProps('yunalish'),
    },
    {
      title: "Fayllar",
      dataIndex: 'count',
      key: 'count',
      width: '25%',
      render: (text, row) => (
        <div>
          <Tooltip >
            <Progress
              percent={Math.round((
                row.kurs == '1-kurs' ? (((row.count['Metodologik kurs dasturi'] ? 1 : 0) / 5) + ((row.count['Nazorat daftari'] ? 1 : 0) / 5) + ((row.count['Shaxsiy yillik reja'] ?
                 1 : 0) / 5 + (row.count['Tezis'] ? 1 : 0) / 5 + (row.count['Maqolalar'] ? 1 : 0) / 5)) * 100 : row.kurs == '2-kurs' ? ((row.count['Metodologik kurs dasturi'] ? 1 : 0) / 10 + ((row.count['Metodologik kurs dasturi']
                  && row.count['Metodologik kurs dasturi'] > 1) ? 1 : 0) / 10 + (row.count['Shaxsiy yillik reja'] ? 1 : 0) / 10 + ((row.count['Shaxsiy yillik reja'] 
                  && row.count['Shaxsiy yillik reja'] > 1) ? 1 : 0) / 10 + (row.count['Nazorat daftari'] ? 1 : 0) / 10 + ((row.count['Nazorat daftari'] &&
                   row.count['Nazorat daftari'] > 1) ? 1 : 0) / 10 + (row.count['Tezis'] ? 1 : 0) / 10 + (row.count['Tezis'] && (row.count['Tezis'] >1) ? 1 : 0) / 10 + 
                   (row.count['Maqolalar'] ? 1 : 0) / 15 + (row.count['Maqolalar'] && (row.count['Maqolalar'] > 1) ? 1 : 0) / 15 + (row.count['Maqolalar'] && (row.count['Maqolalar'] > 2) ? 1 : 0) / 15 ) * 100 :
                  ((row.count['Metodologik kurs dasturi'] ? 1 : 0)  * 4 / 75 + ((row.count['Metodologik kurs dasturi'] && row.count['Metodologik kurs dasturi'] > 1) ? 1 : 0)  * 4 / 75 + 
                  ((row.count['Metodologik kurs dasturi'] && row.count['Metodologik kurs dasturi'] > 2) ? 1 : 0)  * 4 / 75 + (row.count['Shaxsiy yillik reja'] ? 1 : 0)  * 4 / 75 + 
                  ((row.count['Shaxsiy yillik reja'] && row.count['Shaxsiy yillik reja'] > 1) ? 1 : 0)  * 4 / 75 + ((row.count['Shaxsiy yillik reja'] && 
                  row.count['Shaxsiy yillik reja'] > 2) ? 1 : 0)  * 4 / 75 + (row.count['Nazorat daftari'] ? 1 : 0)  * 4 / 75 + ((row.count['Nazorat daftari'] &&
                   row.count['Nazorat daftari'] > 1) ? 1 : 0)  * 4 / 75 + ((row.count['Nazorat daftari'] && row.count['Nazorat daftari'] > 2) ? 1 : 0) * 4 / 75 + 
                   (row.count['Tezis'] ? 1 : 0)* 4 / 25 + (row.count['Maqolalar'] ? 1 : 0) * 2 / 25 + ((row.count['Maqolalar'] && row.count['Maqolalar'] > 1) ? 1 : 0) * 2 / 25 + 
                   (row.count['Dissertatsiya'] ? 1 : 0) / 10 + (row.count['Avtoreferat'] ? 1 : 0) / 10) * 100))}
              steps={4}
              strokeColor={[red[7], red[4], green[4], green[7]]}
            />
          </Tooltip>
        </div>
      ),
    },
    {
      title: "Amallar",
      dataIndex: 'cartItem',
      key: 'cartItem',
      width: '10%',
      render: (text, row) => (
        <div>
          <EyeOutlined onClick={() => navigate(`/admin/doctorantlist/detail/${row._id}`)} />

          <DeleteOutlined onClick={() => {
            deleteStudent(row._id)
          }} style={{ color: 'red', marginLeft: "15px" }} />
        </div>
      ),
    },
  ];
  const showModal = () => {
    setIsModalOpen(true);
  };





  const [count, setCountUser] = useState("")
  const [user, setUser] = useState("")
  const [chekin, setChekIn] = useState(false)

  const cerateUser = () => {
    if (count !== "" && user !== "") {
      setChekIn(true)
      axiosConfig.post(`/auth/generate-student`, { count, user }).then(res => {
        // console.log(res.data);
        setLoading(true)
        exportToCSV(res.data)
        getAllStudenData()
        window.location.reload()
        // setChekIn(false)
      }).catch(err => {
        console.log(err);
      })
    }
    else {
      message.error("Foydalanuvchi yaratish uchun kerakli sonni kiriting")
    }
  }

  return (
    <div>
      <div style={{ display: "flex", width: "100%", justifyContent: "space-between" }} className='mb-3'>
        <div style={{ display: "flex", width: "50%" }}>
          {
            chekin ? <div style={{ padding: "10px" }}><h6>Foydalanuvchilar tayyorlanmoqda..</h6></div> :
              <div style={{ display: "flex", width: "100%", justifyContent: "space-between " }}>
                <select onChange={(e) => setUser(e.target.value)} style={{ width: "21%" }} className='form-select shadow-none' name="" id="">
                  <option disabled selected style={{ fontSize: "14px" }}>Tanlang</option>
                  <option value="DSC">DSC</option>
                  <option value="PHD">PHD</option>
                  <option value="ST">ST</option>
                  <option value="M-DSC">M-DSC</option>
                  <option value="M-PHD">M-PHD</option>
                </select>
                <input style={{ width: "78%" }} onChange={(e) => setCountUser(e.target.value)} className='form-control shadow-none' type="text" placeholder='Foydalanuvchilarni yaratish uchun kerakli raqamni kiriting' />
              </div>
          }
          <button style={{ marginLeft: "5%" }} className='btn btn-primary text-white' onClick={cerateUser}>Yaratish</button>
        </div>
        {/* <div>
          <button onClick={exportToCSV} className='btn btn-secondary text-white'>
          excel
          </button>
        </div> */}
      </div>
      <div className="addNewYear" onClick={showModal}>
        Doktorantlarni qo'shish <PlusOutlined />
      </div>
      <DeleteModal isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen} />
      <div style={{ padding: "0 0 30px 0" }} className='table mb-5'>
        <div style={{ width: "100%", display: "flex", justifyContent:"end"}}>
          <div style={{width:"50%", display:"flex",justifyContent:"space-between"}}>
            <div style={{ width: "40%" }}>
              <select onChange={(e)=>setKursSearch(e.target.value)} className='form-select shadow-none' name="" id="">
                <option disabled selected>Kursi boyicha filterlash</option>
                <option value="">Umumiy qidirish</option>
                <option value="1-kurs">1-kurs</option>
                <option value="2-kurs">2-kurs</option>
                <option value="3-kurs">3-kurs</option>
              </select>
            </div>
            <div style={{ width: "40%" }}>
              <select onChange={(e)=>setUserSearch(e.target.value)} className='form-select shadow-none' name="" id="">
                <option disabled selected>Ta'lim turi bo'yicha filterlash</option>
                <option value="">Umumiy qidirish</option>
                <option value="DSC">DSC</option>
                <option value="PHD">PHD</option>
                <option value="ST">ST</option>
                <option value="M-DSC">M-DSC</option>
                <option value="M-PHD">M-PHD</option>
              </select>
            </div>
          </div>
        </div>
        <hr />
        {
          loading ?  <div className="for_loader">
          <Oval
              height={80}
              width={80}
              color="#4fa94d"
              wrapperStyle={{}}
              wrapperClass=""
              visible={true}
              ariaLabel='oval-loading'
              secondaryColor="#4fa94d"
              strokeWidth={2}
              strokeWidthSecondary={2}

          />
      </div> :
        <Table rowKey={(record) => record._id} columns={columns} pagination={false} dataSource={data} />
        }
      </div>
    </div>
  );
}

export default Doctorant; 