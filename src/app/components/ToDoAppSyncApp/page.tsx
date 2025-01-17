'use client';

import { useState, useEffect } from 'react';
import { generateClient } from 'aws-amplify/api';
import { createTodo1, updateTodo1, deleteTodo1 } from '../../../graphql/mutations';
import { listTodo1s } from '../../../graphql/queries';
import { fetchAuthSession } from '@aws-amplify/auth';


interface Todo {
  id: string;
  name: string;
  description: string;
  createdAt: string;
  updatedAt: string;
}

const client = generateClient();

export default function TodoApp() {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [newTodo, setNewTodo] = useState<string>('');
  const [editTodoId, setEditTodoId] = useState<string | null>(null);
  const [editTodoName, setEditTodoName] = useState<string>('');

  // Fetch all todos on component load
  useEffect(() => {
    fetchTodos();
  }, []);

  const fetchTodos = async () => {
    try {
      const result = await client.graphql({ query: listTodo1s });

      const items = result?.data?.listTodo1s?.items || [];


      setTodos(items as Todo[]);
    } catch (error) {
      console.error('Error fetching todos:', error);
    }
  };

  const addTodo = async () => {
    const session = await fetchAuthSession();
  console.log(session,'sessionumeralikhan')
    if (!newTodo) return;
    try {
      const result = await client.graphql({
        query: createTodo1,
        variables: { 
          input: {
            name: newTodo,
          },
        },
      });
      setNewTodo('');
      fetchTodos();
      console.log('Todo added:', result);
    } catch (error) {
      console.error('Error adding todo:', error);
    }
  };
  

  const startEdit = (todo: Todo) => {
   
    setEditTodoId(todo.id);
    setEditTodoName(todo.name);
  };

  const saveEdit = async () => {
    if (!editTodoId || !editTodoName) return;
    try {
      const result = await client.graphql({
        query: updateTodo1,
        variables: {
          input: {
            id: editTodoId,
            name: editTodoName,
          },   authMode: 'AMAZON_COGNITO_USER_POOLS',
        },
      });
      setEditTodoId(null);
      setEditTodoName('');
      fetchTodos();
      console.log('Todo updated:', result);
    } catch (error) {
      console.error('Error updating todo:', error);
    }
  };

  const deleteTodoItem = async (id: string) => {
    try {
      const result = await client.graphql({
        query: deleteTodo1,
        variables: {
          input: {
            id,
          },   authMode: 'AMAZON_COGNITO_USER_POOLS',
        },
      });
      fetchTodos();
      console.log('Todo deleted:', result);
    } catch (error) {
      console.error('Error deleting todo:', error);
    }
  };

  return (
    <> 
    <div className='min-h-screen bg-gray-100 p-6 flex flex-col items-center'>
      <h1 className='text-3xl font-bold mb-6'>Todo App</h1>

      <div className='w-full max-w-md flex gap-4 mb-6'>
        <input
          type='text'
          value={newTodo}
          onChange={(e) => setNewTodo(e.target.value)}
          className='flex-1 px-4 py-2 border rounded-md focus:outline-none'
          placeholder='Enter a new todo'
        />
        <button onClick={addTodo} className='bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600'>
          Add
        </button>
      </div>

      <ul className='w-full max-w-md space-y-4'>
        {todos.map((todo) => (
          <li key={todo.id} className='flex items-center justify-between bg-white p-4 shadow rounded-md'>
            {editTodoId === todo.id ? (
              <div className='flex-1 flex gap-2'>
                <input
                  type='text'
                  value={editTodoName}
                  onChange={(e) => setEditTodoName(e.target.value)}
                  className='flex-1 px-2 py-1 border rounded-md focus:outline-none'
                />
                <button onClick={saveEdit} className='bg-green-500 text-white px-4 py-2 rounded-md hover:bg-green-600'>
                  Save
                </button>
              </div>
            ) : (
              <>
                <span className='flex-1'>{todo.name}</span>
                <div className='flex gap-2'>
                  <button
                    onClick={() => startEdit(todo)}
                    className='bg-yellow-500 text-white px-4 py-2 rounded-md hover:bg-yellow-600'
                  >
                    Edit
                  </button>
                  <button
                    onClick={() => deleteTodoItem(todo.id)}
                    className='bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-600'
                  >
                    Delete
                  </button>
                </div>
              </>
            )}
          </li>
        ))}
      </ul>
    </div></>
  );
}
