import React, { useRef, useState } from 'react';
import { SearchOutlined ,PlusOutlined,DeleteOutlined,EyeOutlined} from '@ant-design/icons';
import Highlighter from 'react-highlight-words';
import { Button, Input, Space, Table, message } from 'antd';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { deleteProfile, getAllStudenData } from '../../redux/reducers/profile.store';
import DeleteModal from '../modal/deleteModal';
import axiosConfig from '../../redux/baseUrl';
import AddStipend from './AddStipend.modal';
import { useNavigate } from 'react-router-dom';
import "../admin/index.css"

const StipendAll = () => {

    const [data, setData] = useState([])
    const [isModalOpen, setIsModalOpen] = useState(false);
    const dispatch = useDispatch()

    let season = sessionStorage.getItem("yearId")
    let stipend = sessionStorage.getItem("stipendNameId")
    const getAllStipend = () =>{
      axiosConfig.post("/students",{season,stipend}).then(res=>{
        console.log("mana res",res.data);
        setData(res.data)
      }).catch(err=>{
        console.log(err);
      })
    }

    
    
    useEffect(()=>{
      getAllStipend()
    },[isModalOpen])

    const [searchText, setSearchText] = useState('');
    const navigate = useNavigate()
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
    axiosConfig.delete(`/students/delete/${data}`).then(res=>{
      // console.log(res);
      message.success("Talaba o'chirildi")
      getAllStipend()
    }).catch(err=>{
      console.log(err);
    })
    // dispatch(deleteProfile(data))
    // message.success("Talaba o'chirildi")
    
  }

//   {
//     title: "Image",
//     dataIndex: "ImageURL",  // this is the value that is parsed from the DB / server side
//     render: theImageURL => <img alt={theImageURL} src={theImageURL} />  // 'theImageURL' is the variable you must declare in order the render the URL
// }
  const columns = [
    {
      title: 'Rasm',
      key: 'image',
      dataIndex: "image",  // this is the value that is parsed from the DB / server side
      width: '30%',
      render: image => <img style={{width:"120px",height:"100px"}} alt={"asas"} src={`https://ilmiyapi.adu.uz/${image}`} />
    },
    {
      title: "F.I.O",
      dataIndex: 'fullname',
      key: 'fullname',
      width: '20%',
      ...getColumnSearchProps('fullname'),
    },
    {
        title: "Action",
        dataIndex: 'cartItem',
        key: 'cartItem',
        width: '20%',
        render: (text,row) => (
            <a
              style={{display:"flex",justifyContent:"space-between",width:"50px"}} >
              <EyeOutlined onClick={()=>navigate(`/admin/stipendiants/all-stipends/${row._id}`)}/>
              <DeleteOutlined onClick={() => {deleteStudent(row._id)}} style={{color:"red"}}/>
            </a>
          ),
    },
  ];
  const showModal = () => {
    setIsModalOpen(true);
  };



    return (
        <div>
            <div className="addNewYear" onClick={showModal}>
                Stipendiantlarni qo'shish <PlusOutlined />
            </div>
           <AddStipend isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen}/>
           <div className='table'>
            <Table rowKey={(record) => record._id} columns={columns} dataSource={data} />
           </div>
        </div>
    )
}

export default StipendAll;