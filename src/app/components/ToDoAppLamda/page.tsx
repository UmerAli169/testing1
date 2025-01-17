"use client";

import { useEffect, useState } from "react";
import { customListUsers } from "../../../graphql/queries"; // Adjust import as necessary
import { generateClient } from "aws-amplify/api";
import { customAddUsers, customUpdateUsers, customDeleteUsers } from "../../../graphql/mutations";
const client = generateClient();

// Define the Todo type
interface Todo {
  id: string;
  name: string;
  description: string;
}

export default function Home() {
  const [todos, setTodos] = useState<Todo[]>([]); // State with type annotation
  const [newTodo, setNewTodo] = useState({ name: "", description: "" });
  const [editTodo, setEditTodo] = useState<Todo | null>(null);

  useEffect(() => {
    fetchTodos(); 
  }, []);

  const fetchTodos = async () => {
    try {
      const result = await client.graphql({ query: customListUsers });
      const items:any = result?.data?.customListUsers || [];
      setTodos(items); // Update the state with fetched todos
    } catch (error) {
      console.error("Error fetching todos:", error);
    }
  };

  const addTodo = async () => {
    if (!newTodo.name || !newTodo.description) {
      alert("Please provide both name and description.");
      return;
    }

    console.log(newTodo, "newTodo");

    try {
      const result = await client.graphql({
        query: customAddUsers,
        variables: { input: newTodo },
      });
      fetchTodos(); // Refresh the list after adding
      setNewTodo({ name: "", description: "" }); // Clear input fields
    } catch (error) {
      console.error("Error adding todo:", error);
    }
  };

  const saveTodo = async () => {
    if (!newTodo.name || !newTodo.description) {
      alert("Please provide both name and description.");
      return;
    }

    try {
      if (editTodo) {
        // Update existing todo
        const result = await client.graphql({
          query: customUpdateUsers,
          variables: { input: { ...newTodo, id: editTodo.id } },
        });
        setEditTodo(null); // Clear editing state
      } else {
        // Add new 
        console.log(newTodo,'newTodo')
        const result = await client.graphql({
          query: customAddUsers,
          variables: { input: newTodo },
        });
      }

      fetchTodos(); // Refresh the list after saving
      setNewTodo({ name: "", description: "" }); // Clear input fields
    } catch (error) {
      console.error("Error saving todo:", error);
    }
  };

  const deleteTodoById = async (id: string) => {
    try {
      const result = await client.graphql({
        query: customDeleteUsers, 
        variables: { input: {id:id }},
      });
      fetchTodos(); // Refresh the list after deletion
    } catch (error) {
      console.error("Error deleting todo:", error);
    }
  };

  return (
    <>
    <div className="min-h-screen flex justify-center items-start p-6 bg-gray-100">
      <div className="w-full max-w-xl bg-white p-6 rounded-lg shadow-lg">
        <h1 className="text-3xl font-bold text-center mb-6">Todo List</h1>

        {/* Todo Form */}
        <div className="mb-4 flex flex-col gap-4">
          <input
            type="text"
            placeholder="Name"
            value={newTodo.name}
            onChange={(e) => setNewTodo({ ...newTodo, name: e.target.value })}
            className="border p-3 rounded-md"
          />
          <input
            type="text"
            placeholder="Description"
            value={newTodo.description}
            onChange={(e) =>
              setNewTodo({ ...newTodo, description: e.target.value })
            }
            className="border p-3 rounded-md"
          />
          <button
            onClick={saveTodo}
            className="bg-blue-500 text-white px-6 py-3 rounded-md hover:bg-blue-600"
          >
            {editTodo ? "Save" : "Add Todo"}
          </button>
        </div>

        {/* Todo List */}
        <ul className="space-y-4 mt-6">
          {todos.map((todo) => (
            <li
              key={todo.id}
              className="flex justify-between items-center border p-4 rounded-md shadow-sm hover:bg-gray-50"
            >
              <div>
                <h3 className="font-semibold">{todo.name}</h3>
                <p className="text-gray-500">{todo.description}</p>
              </div>
              <div className="flex gap-4">
                <button
                  className="bg-yellow-500 text-white px-4 py-2 rounded-md hover:bg-yellow-600"
                  onClick={() => {
                    setEditTodo(todo);
                    setNewTodo({ name: todo.name, description: todo.description });
                  }}
                >
                  Edit
                </button>
                <button
                  className="bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-600"
                  onClick={() => deleteTodoById(todo.id)}
                >
                  Delete
                </button>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div></>
  );
}
