// UserRoles.jsx
import React, { useState, useEffect } from "react";

const UserRoles = () => {
  const [users, setUsers] = useState([]);
  const [newUser, setNewUser] = useState({ name: "", email: "", role: "User" });

  useEffect(() => {
    setUsers([
      { id: 1, name: "Harshad Pathak", email: "tionstuff@gmail.com", role: "User" },
      { id: 2, name: "Paresh Patel", email: "aatfotech@gmail.com", role: "User" },
      { id: 3, name: "Hardik Savani", email: "admin@gmail.com", role: "Admin" },
      { id: 4, name: "Muskan Kumari", email: "muskan@email.com", role: "Manager" },
      { id: 5, name: "Anjali Mehra", email: "anjali@email.com", role: "User" },
      { id: 6, name: "Ravi Kumar", email: "ravi@email.com", role: "User" },
      { id: 7, name: "Sneha Sharma", email: "sneha@email.com", role: "Admin" },
      { id: 8, name: "Aryan Gupta", email: "aryan@email.com", role: "Manager" },
      { id: 9, name: "Neha Verma", email: "neha@email.com", role: "User" },
      { id: 10, name: "Rajesh Rathi", email: "rajesh@email.com", role: "User" },
    ]);
  }, []);

  const handleAddUser = () => {
    const { name, email, role } = newUser;
    if (!name || !email || !role) return alert("Please enter all fields");
    const id = users.length + 1;
    setUsers([{ id, ...newUser }, ...users]);
    setNewUser({ name: "", email: "", role: "User" });
  };

  return (
    <div className="min-h-screen bg-white text-black px-8 py-10">
      <h2 className="text-3xl font-bold mb-8 text-center">Users Management</h2>

      <div className="bg-gray-100 p-6 rounded-lg w-full max-w-4xl mx-auto mb-10">
        <h3 className="text-xl font-semibold mb-4">Create New User</h3>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div>
            <label className="block mb-1 font-medium text-lg" styles={{marginRight:'9px', fontSize:'30px'}}><b>Name    </b>:         </label>
            <input
              type="text"
              value={newUser.name}
              onChange={(e) => setNewUser({ ...newUser, name: e.target.value })}
              className="w-full px-4 py-2 border rounded-md"
              placeholder="Enter name"
            />
          </div>
          <div>
            <label className="block mb-1 font-medium text-lg" styles={{marginRight:'9px', fontSize:'50px'}}><b>Email   </b>:          </label>
            <input
              type="email"
              value={newUser.email}
              onChange={(e) => setNewUser({ ...newUser, email: e.target.value })}
              className="w-full px-4 py-2 border rounded-md"
              placeholder="Enter email"
            />
          </div>
          <div>
            <label className="block mb-1 font-medium text-lg" styles={{marginRight:'9px', fontSize:'50px'}}><b>Role   </b>:            </label>
            <select
              value={newUser.role}
              onChange={(e) => setNewUser({ ...newUser, role: e.target.value })}
              className="w-full px-4 py-2 border rounded-md"
            >
              <option>User</option>
              <option>Admin</option>
              <option>Manager</option>
            </select>
          </div>
        </div>

        <button
          onClick={handleAddUser}
          className="mt-6 px-6 py-2 bg-green-500 text-white font-semibold rounded-md hover:bg-green-600 block mx-auto"
styles={{marginLeft:'9px', fontSize:'20px'}}
        >
          CREATE
        </button>
      </div>

      <div className="overflow-x-auto max-w-6xl mx-auto">
        <h3 className="text-xl font-semibold mb-4 text-center">Existing Users</h3>
        <table className="w-full border border-gray-300 table-auto">
          <thead className="bg-gray-200 text-left">
            <tr>
              <th className="border px-6 py-3">No</th>
              <th className="border px-6 py-3">Name</th>
              <th className="border px-6 py-3">Email</th>
              <th className="border px-6 py-3">Role</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user, idx) => (
              <tr key={user.id} className="hover:bg-gray-100 transition-all">
                <td className="border px-6 py-2">{idx + 1}</td>
                <td className="border px-6 py-2">{user.name}</td>
                <td className="border px-6 py-2">{user.email}</td>
                <td className="border px-6 py-2">
                  <span
                    className={`px-3 py-1 rounded text-white text-sm ${
                      user.role === "Admin"
                        ? "bg-green-600"
                        : user.role === "Manager"
                        ? "bg-yellow-600"
                        : "bg-blue-600"
                    }`}
                  >
                    {user.role}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default UserRoles;