function Banner({ inProgress, resolved }) {
  return (
    <div className="flex gap-6 mb-6">
      {/* In Progress Card */}
      <div className="flex-1 p-6 rounded-xl bg-gradient-to-r from-purple-600 to-purple-400 text-white shadow-md">
        <p className="text-sm font-medium">In Progress</p>
        <h2 className="text-3xl font-bold">{inProgress}</h2>
      </div>

      {/* Resolved Card */}
      <div className="flex-1 p-6 rounded-xl bg-gradient-to-r from-green-600 to-green-400 text-white shadow-md">
        <p className="text-sm font-medium">Resolved</p>
        <h2 className="text-3xl font-bold">{resolved}</h2>
      </div>
    </div>
  );
}

export default Banner;