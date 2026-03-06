function TaskStatus({ tasks, completeTask, resolvedTasks = [] }) {
  return (
    <div className="bg-gray-800 p-4 shadow rounded-xl text-gray-200">
      <h2 className="font-bold mb-4 text-2xl">Task Status</h2>

      {/* In-progress tasks */}
      {tasks.length === 0 ? (
        <p className="text-gray-400">No tasks selected</p>
      ) : (
        tasks.map((task) => (
          <div key={task.id} className="mb-3 border-b border-gray-700 pb-3">
            <div className="flex justify-between items-center">
              <p>{task.title}</p>
              <button
                onClick={() => completeTask(task.id)}
                className="bg-green-500 text-white px-3 py-1 rounded hover:bg-green-600"
              >
                Complete
              </button>
            </div>
          </div>
        ))
      )}

      {/* Resolved tasks */}
      <h2 className="font-bold mt-4 mb-4 text-2xl">Resolved Tasks</h2>
      {resolvedTasks.length === 0 ? (
        <p className="text-gray-400">No tasks resolved yet.</p>
      ) : (
        resolvedTasks.map((task) => (
          <p key={task.id} className="mb-2 border-b border-gray-700 pb-1">
            {task.title} ✅
          </p>
        ))
      )}
    </div>
  );
}

export default TaskStatus;