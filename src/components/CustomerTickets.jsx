function CustomerTickets({ tickets, addTask }) {
  const statusColor = (status) => {
    if (status === "Open") return "bg-red-500";
    if (status === "In Progress") return "bg-yellow-500";
    if (status === "Resolved") return "bg-green-500";
  };

  const priorityColor = (priority) => {
    if (priority === "High") return "text-red-400";
    if (priority === "Medium") return "text-yellow-400";
    if (priority === "Low") return "text-green-400";
  };

  return (<div>
         <h2 className="font-bold mt-4 mb-4 text-2xl">Resolved Tasks</h2>
   <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
    
      {tickets.map((ticket) => (
        <div
          key={ticket.id}
          onClick={() => addTask(ticket)}
          className="bg-gray-800 p-4 rounded-xl shadow-md cursor-pointer hover:shadow-lg"
        >
          <div className="flex justify-between">
            <h2 className="font-bold text-gray-100">{ticket.title}</h2>
            <span className={`text-white text-xs px-2 py-1 rounded ${statusColor(ticket.status)}`}>
              {ticket.status}
            </span>
          </div>
          <p className="text-gray-300 text-sm mt-2">{ticket.description}</p>
          <div className="flex justify-between mt-4 text-sm text-gray-300">
            <p>#{ticket.id}</p>
            <p className={priorityColor(ticket.priority)}>
              {ticket.priority.toUpperCase()} PRIORITY
            </p>
          </div>
          <div className="flex justify-between mt-2 text-sm text-gray-400">
            <p>{ticket.customer}</p>
            <p>{ticket.createdAt}</p>
          </div>
        </div>
      ))}
    </div>
    </div>
  );
}

export default CustomerTickets;