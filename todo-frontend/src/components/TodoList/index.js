import React from 'react'
import axios from '../../axios'
import { DeleteIcon, ListContainer, Row, Text, } from './styles'

function TodoList({ todos, fetchData }) {
    console.log(todos, "hello");

    const updateTodo = async (id) => {
        try {
            const response = await axios.put(`/todos/${id}`, {
                id
            })
            fetchData()
            return response.data.json;
        } catch (err) {
            console.log(err.message)
        }
    }

    const deleteTodo = async (id) => {
        try {
            const response = await axios.delete(`/todos/${id}`, {
                id
            })
            fetchData()
            return response.data.json;
        } catch (err) {
            console.log(err.message)
        }
    }

    return (
        <div>
            <ListContainer>
                {/* show all todos in bulletpoints */}
                {todos?.map((todo) => (
                    <Row key={todo._id}>
                        <Text onClick={() => updateTodo(todo._id)}
                            isCompleted={todo.completed}
                        >
                            {todo.text}
                        </Text>
                        <DeleteIcon onClick={() => deleteTodo(todo._id)}>X</DeleteIcon>
                    </Row>
                ))}
            </ListContainer>

        </div>
    )
}

export default TodoList