import React, { useState } from "react";
import axios from "axios";
// import { useHistory } from "react-router-dom";

const AddTask = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState("To-Do");
  //   const history = useHistory();

  const handleSubmit = (e) => {
    e.preventDefault();

    axios
      .post("http://localhost:5000/tasks", { title, description, category })
      .then((res) => {
        alert("Task added successfully!");
        setTitle("");
        setDescription("");
        setCategory("");
        console.log(res.data);
      })
      .catch((error) => console.error("Error adding task:", error));
  };

  return (
    <div className="container mx-auto mt-6">
      <h2 className="text-2xl font-bold mb-4">Add New Task</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="block mb-2">Title</label>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="w-full p-2 border"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block mb-2">Description</label>
          <textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className="w-full p-2 border"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block mb-2">Category</label>
          <select
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            className="w-full p-2 border"
          >
            <option value="To-Do">To-Do</option>
            <option value="In Progress">In Progress</option>
            <option value="Done">Done</option>
          </select>
        </div>
        <button
          type="submit"
          className="bg-blue-500 text-white px-4 py-2 w-full mt-5 rounded-lg"
        >
          Add Task
        </button>
      </form>
    </div>
  );
};

export default AddTask;
