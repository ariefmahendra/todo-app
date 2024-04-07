import axios from "axios";

let todos = [];

const FetchTodos = async () => {
    try {
        const response = await axios.get('https://jsonplaceholder.typicode.com/todos');
        todos = response.data;
    } catch(error) {
        console.error(error);
    }
}

const GetTodos = () => {
    return todos;
}

const CreateTodo = (task) => {
    const newTodo = {
        id: todos.length + 1,
        userId: 1,
        title: task.title,
        completed: task.completed
    };
    todos.push(newTodo);
}

const DeleteTodo = (id) => {
    todos = todos.filter(todo => todo.id !== id);
}

const getTodosCompleted = ()  => {
    return todos.filter(todo => todo.completed === true);
}

const getTodosUncompleted = ()  => {
    return todos.filter(todo => todo.completed === false);
}

export {
    FetchTodos, 
    CreateTodo,
    DeleteTodo,
    GetTodos,
    getTodosCompleted,
    getTodosUncompleted
}