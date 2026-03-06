import { useEffect, useState } from "react";
import "./App.css";

import Banner from "./components/Banner";
import CustomerTickets from "./components/CustomerTickets";
import TaskStatus from "./components/TaskStatus";

function App() {
  const [tickets, setTickets] = useState([]);
  const [tasks, setTasks] = useState([]); // in-progress tasks
  const [resolvedTasks, setResolvedTasks] = useState([]); // resolved tasks
  const [inProgress, setInProgress] = useState(0);
  const [resolved, setResolved] = useState(0);

  useEffect(() => {
    fetch("/Tickets.json")
      .then((res) => res.json())
      .then((data) => setTickets(data));
  }, []);

  const addTask = (ticket) => {
    if (!tasks.find((t) => t.id === ticket.id)) {
      setTasks([...tasks, ticket]);
      setInProgress(inProgress + 1);
      alert("Ticket added to Task Status");
    } else {
      alert("Ticket already in progress");
    }
  };

 const completeTask = (id) => {
  const task = tasks.find((t) => t.id === id);
  if (task) {
    setTasks(tasks.filter((t) => t.id !== id));       // remove from in-progress
    setResolvedTasks([...resolvedTasks, task]);      // add to resolved
    setInProgress(inProgress - 1);
    setResolved(resolved + 1);
    alert("Task Completed");
  }
};
  return (
    <div className="p-8 bg-gray-950 min-h-screen text-gray-200">

      {/* Navbar */}
      <div className="navbar bg-gray-900 text-gray-100 shadow-md px-4">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden text-gray-100">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16"/>
              </svg>
            </div>
            <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-gray-800 text-gray-100 rounded-box w-52">
              <li><a>Home</a></li>
              <li><a>FAQ</a></li>
              <li><a>Changelog</a></li>
              <li><a>Blog</a></li>
              <li><a>Download</a></li>
              <li><a>Contact</a></li>
              <li>
                <button className="btn bg-purple-600 text-white hover:bg-purple-700 mt-2">
                  + New Ticket
                </button>
              </li>
            </ul>
          </div>
          <a className="text-xl font-bold text-gray-100">CS-Ticket System</a>
        </div>
        <div className="navbar-end hidden lg:flex">
          <ul className="menu menu-horizontal px-1 items-center gap-2 text-gray-100">
            <li><a>Home</a></li>
            <li><a>FAQ</a></li>
            <li><a>Changelog</a></li>
            <li><a>Blog</a></li>
            <li><a>Download</a></li>
            <li><a>Contact</a></li>
            <li>
              <button className="btn bg-purple-600 text-white hover:bg-purple-700 ml-2">
                + New Ticket
              </button>
            </li>
          </ul>
        </div>
      </div>

      {/* Banner */}
      <Banner inProgress={inProgress} resolved={resolved} />

      <div className="grid grid-cols-3 gap-6">

        {/* Left side */}
        <div className="col-span-2 space-y-6">

          {/* Customer Tickets */}
          <CustomerTickets tickets={tickets} addTask={addTask} />

          {/* Resolved Tickets */}
          <div className="bg-gray-800 p-4 rounded-xl shadow text-gray-200">
            <h2 className="font-bold mb-4 ">Resolved Tasks</h2>
            {resolvedTasks.length === 0 ? (
              <p className="text-gray-400">No resolved tasks yet.</p>
            ) : (
              resolvedTasks.map((t) => (
                <p key={t.id} className="mb-2 border-b border-gray-700 pb-1">
                  {t.title}
                </p>
              ))
            )}
          </div>

        </div>

        {/* Right side */}
      <TaskStatus
  tasks={tasks}
  completeTask={completeTask}
  resolvedTasks={resolvedTasks}   // <-- pass the array here
/>
      </div>

    </div>
  );
}

export default App;