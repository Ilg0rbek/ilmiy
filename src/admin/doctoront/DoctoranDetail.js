import React, { useEffect, useState, useRef } from "react";
import axiosConfig from "../../redux/baseUrl";
import { SearchOutlined } from '@ant-design/icons';
import { useParams } from "react-router-dom";
import { Button,  Form, Space, Table, message, Select, Upload } from 'antd';
import Highlighter from 'react-highlight-words';

const DoctorantDetail = () => {


    let { id } = useParams()
    const [allDocument, setAllDocument] = useState([])

    console.log(id);

    const getAllDocument = () => {
        axiosConfig.get(`/documents/${id}`).then(res => {
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
        axiosConfig.get(`/auth/user/${id}`).then(res => {
            setMyData(res.data)
            console.log("salom", res);
        }).catch(err => {
            console.log(err);
        })
    }

    useEffect(() => {
        getMydata()
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
            <a href={`https://ilmiyapi.adu.uz/${row.document}`} target='_blank'
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
        // {
        //   title: "O'chirish",
        //   dataIndex: 'cartItem',
        //   key: 'cartItem',
        //   width: '20%',
        //   render: (text, row) => (
        //     <a
        //       style={{ color: 'red' }}
        //       onClick={() => {
        //         deleteStudent(row._id)
        //       }}
        //     >
        //       O'chirish
        //     </a>
        //   ),
        // },
      ];

    return (
        <div  className="container table">
            <h3 className="mb-4 text-center">Talaba haqida to'liq ma'lumot</h3>
            <div className="row" style={{width:"100%",display:"flex",justifyContent:"center"}}>
                <div className="col-md-8">
                    <div className="card mb-3">
                        <div className="card-body">
                            <div className="row">
                                <div className="col-sm-3">
                                    <h6 className="mb-0">Ism familya</h6>
                                </div>
                                <div className="col-sm-9 text-secondary">

                                    <input className="form-control shadow-none" disabled value={mydata?.fullName} placeholder="Ism familya to'ldirilmagan" />

                                </div>
                            </div>
                            <hr />
                            <div className="row">
                                <div className="col-sm-3">
                                    <h6 className="mb-0">Kursi</h6>
                                </div>
                                <div className="col-sm-9 text-secondary">

                                    <input className="form-control shadow-none" disabled value={mydata?.kurs} type="text" placeholder="kursi to'ldirilmagan" />

                                </div>
                            </div>
                            <hr />
                            <div className="row">
                                <div className="col-sm-3">
                                    <h6 className="mb-0">Tel nomer</h6>
                                </div>
                                <div className="col-sm-9 text-secondary">
                                    <input className="form-control shadow-none" disabled value={mydata?.firstNumber} placeholder="No'mer to'ldirilmagan " />
                                </div>
                            </div>
                            <hr />
                            <div className="row">
                                <div className="col-sm-3">
                                    <h6 className="mb-0">Yon'alishi</h6>
                                </div>
                                <div className="col-sm-9 text-secondary">
                                    <input className="form-control shadow-none" disabled value={mydata?.yunalish} placeholder="Yo'nalish to'ldirilmagan" />
                                </div>
                            </div>
                            <hr />
                            <div className="row">
                                <div className="col-sm-3">
                                    <h6 className="mb-0">Ilmmiy rahbari</h6>
                                </div>
                                <div className="col-sm-9 text-secondary">
                                    <input className="form-control shadow-none" disabled value={mydata?.ilmiyrahbar} placeholder="Yo'nalish to'ldirilmagan" />
                                </div>
                            </div>
                            <hr />
                            <div className="row">
                                <div className="col-sm-3">
                                    <h6 className="mb-0">Ilmmiy rahbari unvoni</h6>
                                </div>
                                <div className="col-sm-9 text-secondary">
                                    <input className="form-control shadow-none" disabled value={mydata?.ilmiyrahbarunvoni} placeholder="Yo'nalish to'ldirilmagan" />
                                </div>
                            </div>
                            <hr />
                            
                            <div className="row">
                                <div className="col-sm-3">
                                    <h6 className="mb-0">Shifr</h6>
                                </div>
                                <div className="col-sm-9 text-secondary">

                                    <input className="form-control shadow-none" disabled value={mydata?.shifr} placeholder="Shifr to'ldirilmagan" />

                                </div>
                            </div>
                            <hr />
                            <div className="row">
                                <div className="col-sm-3">
                                    <h6 className="mb-0">Manzil</h6>
                                </div>
                                <div className="col-sm-9 text-secondary">

                                    <input className="form-control shadow-none" disabled value={mydata?.adress} placeholder="Manzil to'ldirilmagan" />

                                </div>
                            </div>
                            <hr />
                            <div className="row">
                                <div className="col-sm-3">
                                    <h6 className="mb-0">Foydalanuvchi nomi</h6>
                                </div>
                                <div className="col-sm-9 text-secondary">
                                    <input className="form-control shadow-none" disabled value={mydata?.username} />
                                </div>
                            </div>
                            <hr />
                            <div className="row">
                                <div className="col-sm-3">
                                    <h6 className="mb-0">Foydalanuvchi paroli</h6>
                                </div>
                                <div className="col-sm-9 text-secondary">

                                    <input className="form-control shadow-none" disabled value={mydata?.password} />

                                </div>
                            </div>
                            <hr />
                        </div>
                    </div>


                </div>
            </div>
            <div className="row">
            <h2 className="text-center">Talabaga tegishli fayllar</h2>
            <Table rowKey={(record) => record._id} columns={columns} dataSource={allDocument} />
            </div>
        </div>
    )
}

export default DoctorantDetail