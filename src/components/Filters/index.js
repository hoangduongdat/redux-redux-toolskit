import { Col, Row, Input, Typography, Radio, Select, Tag } from 'antd';
import { useState } from 'react';
import { useDispatch } from 'react-redux';


import filtersSlice from './filtersSlice';

const { Search } = Input;

export default function Filters() {
  const dispatch =useDispatch()

  const [searchInput, setSearchInput] = useState('')
  const [status, setStatus] = useState('All')
  const [priority, setPriority] = useState([])


  const handleSearchChange=(e) =>{
    setSearchInput(e.target.value);
    dispatch(filtersSlice.actions.searchTodo(e.target.value))
  }

  const handleSelectChange =(value)=>{
    setPriority(value)
    dispatch(filtersSlice.actions.priorityTodo(value))
  }

  const handleCompletedChange = (e)=>{
    setStatus(e.target.value)
    dispatch(filtersSlice.actions.statusTodo(e.target.value))
  }


  return (
    <Row justify='center'>
      <Col span={24}>
        <Typography.Paragraph
          style={{ fontWeight: 'bold', marginBottom: 3, marginTop: 10 }}
        >
          Search
        </Typography.Paragraph>
        <Search 
          placeholder='input search text' 
          value={searchInput}
          onChange={handleSearchChange} 
        />
      </Col>
      <Col sm={24}>
        <Typography.Paragraph
          style={{ fontWeight: 'bold', marginBottom: 3, marginTop: 10 }}
        >
          Filter By Status
        </Typography.Paragraph>
        <Radio.Group value={status} onChange={handleCompletedChange}>
          <Radio value='All'>All</Radio>
          <Radio value='Completed'>Completed</Radio>
          <Radio value='Todo'>To do</Radio>
        </Radio.Group>
      </Col>
      <Col sm={24}>
        <Typography.Paragraph
          style={{ fontWeight: 'bold', marginBottom: 3, marginTop: 10 }}
        >
          Filter By Priority
        </Typography.Paragraph>
        <Select
          mode='multiple'
          allowClear
          placeholder='Please select'
          style={{ width: '100%' }}
          value={priority}
          onChange={handleSelectChange}
        >
          <Select.Option value='High' label='High'>
            <Tag color='red'>High</Tag>
          </Select.Option>
          <Select.Option value='Medium' label='Medium'>
            <Tag color='blue'>Medium</Tag>
          </Select.Option>
          <Select.Option value='Low' label='Low'>
            <Tag color='gray'>Low</Tag>
          </Select.Option>
        </Select>
      </Col>
    </Row>
  );
}
