import React, { useRef, useState } from 'react';
import { SearchOutlined ,PlusOutlined} from '@ant-design/icons';
import Highlighter from 'react-highlight-words';
import { Button, Input, Space, Table, message } from 'antd';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { deleteProfile, getAllStudenData } from '../../redux/reducers/profile.store';
import DeleteModal from './AddModal';

const Doctorant = () =>{

    const data = useSelector((state)=>state.profile.getStudentdata)
    const [isModalOpen, setIsModalOpen] = useState(false);
    const dispatch = useDispatch()
    // const student = useSelector((state)=>state.profile.getStudentdata)

    useEffect(()=>{
        dispatch(getAllStudenData())
    },[isModalOpen])
    
    useEffect(()=>{
      dispatch(getAllStudenData())
    },[])

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
      <div className="addNewYear" onClick={showModal}>
        Doktorantlarni qo'shish <PlusOutlined />
      </div>
      <DeleteModal isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen}/>
      <Table rowKey={( record ) => record._id} columns={columns} dataSource={data} />
    </div>
  );
}

export default Doctorant; 