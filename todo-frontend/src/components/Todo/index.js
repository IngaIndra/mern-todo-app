import React, { useEffect, useState } from 'react'
import axios from '../../axios'
import { Container } from "./styles";
import Form from '../Form';

function Todo() {
    const [input, setInput] = useState('');
    const [todos, setTodos] = useState([])
    // console.log(input, 'input');

    const fetchData = async () => {
        try {
            const response = await axios.get('/todos')
            setTodos(response.data)
        } catch (err) {
            console.log(err.message)
        }
    }

    useEffect(() => {
        fetchData()
    }, []);

    const addTodo = async () => {
        console.log('addedTodo')
    }

    console.log(todos, 'todos');


    return (
        <Container>
            <h2>List of Todos</h2>
            {/* Form component */}
            <Form input={input} setInput={setInput} />
            {/* Todo list component*/}
            {/* Key component*/}
            {/* Author component */}
        </Container>
    )
}

export default Todo