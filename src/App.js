import { useState } from 'react';

function App() {
  const [todos, setTodos] = useState([]);
  const [completedTodos, setCompletedTodos] = useState([]);
  const [inputValue, setInputValue] = useState('');
  
    const handleInputChange = (event) => {
      setInputValue(event.target.value);
    };
  
    const handleAddTodo = () => {
      if (inputValue.trim() !== '') {
        setTodos([...todos, { id: Date.now(), text: inputValue, completed: false }]);
        setInputValue('');
      }
    };

    const handleToggleComplete = (index) => {
        const updatedTodos = [...todos];
        const updatedTodo = updatedTodos[index];
        updatedTodo.completed = !updatedTodo.completed;
        setTodos(updatedTodos);

        if(updatedTodo.completed){
          setCompletedTodos([...completedTodos, updatedTodo]);
        }
        else{
          const updatedCompletedTodos = completedTodos.filter(
            (todo) => todo !== updatedTodo
          );
          setCompletedTodos(updatedCompletedTodos);
        }
    };

    const handleDeleteTodo = (id) => {
      const updatedTodos = todos.filter((todo) => {
        return todo.id !== id || !todo.completed;
      });
      setTodos(updatedTodos);

      const updatedCompleted = completedTodos.filter((todo) => {
        return todo.id !== id || !todo.completed;
      });
      setCompletedTodos(updatedCompleted);
    };

  return (
    <div className= "App">
      <h1>Todo List</h1>
      <div className="input-container">
          <input
            type="text"
            value={inputValue}
            onChange={handleInputChange}
            placeholder="Enter a task"
          />
          <button onClick={handleAddTodo}>Add</button>
      </div>
      <div className="list-container">
        <div className="active" id="todo-container">
          <h2>active todos</h2>
            <ul>
              {todos.map((todo, index) => (
                <li
                  key={index}
                  style={{ textDecoration: todo.completed ? 'line-through' : 'none' }}
                  onClick={() => handleToggleComplete(index)}
                >
                  {todo.text}
                </li>
              ))}
            </ul>
        </div>
        <div className="completed" id="todo-container">
          <h2>completed todos</h2>
          <ul>
            {completedTodos.map((todo, index) => (
              <li key={index}>
              <span>{todo.text}</span>
              {todo.completed && <button onClick={() => handleDeleteTodo(todo.id)}>Delete</button>}
            </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default App;
