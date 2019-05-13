import axios from 'axios';

export const fetchTodo = () => axios.get('http://localhost:4000');
export const addTodo = (name, address)  => axios.post('/create', {
    name, address
});
