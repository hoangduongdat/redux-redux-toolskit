import { Col, Row, Input, Button, Select, Tag } from 'antd';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Todo from '../Todo';
import  todoListSlice  from './todosSlice';

import {v4 as uuidv4} from 'uuid'
import { todoRemaningSelector } from './../../redux/selectors';

export default function TodoList() {
  const dispatch = useDispatch()
  const [todoInput, setTodoInput] = useState('')
  const [priority, setPriority] = useState('Medium')
 
  const todoList = useSelector(todoRemaningSelector);

  const addTodoClick= () =>{
    dispatch(todoListSlice.actions.addTodo({
      id: uuidv4(),
      name: todoInput,
      priority: priority,
      complete: false,
    }))
    setTodoInput('');
    setPriority('Medium');
  }
  return (
    <Row style={{ height: 'calc(100% - 40px)' }}>
      <Col span={24} style={{ height: 'calc(100% - 40px)', overflowY: 'auto' }}>
        {
          todoList.map((todo,index)=>(
            <Todo key={index} name={todo.name} prioriry ={todo.priority} completed={todo.completed} id={todo.id} />
          ))
        }
      </Col>
      <Col span={24}>
        <Input.Group style={{ display: 'flex' }} compact>
          <Input 
            value={todoInput}
            onChange={e=>setTodoInput(e.target.value)} />
          <Select defaultValue={priority} value={priority} onChange={(e) =>setPriority(e)}>
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
          <Button type='primary' onClick={addTodoClick}>
            Add
          </Button>
        </Input.Group>
      </Col>
    </Row>
  );
}
