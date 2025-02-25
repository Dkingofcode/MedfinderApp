import React from 'react'

const profile = () => {
  return (
    <div>
         <div className="container mx-auto p-6">
      <h2 className="text-2xl font-bold">Profile</h2>
      {/* User Details */}
      <div className="mt-4 p-4 border rounded-lg bg-white">
        <p><strong>Name:</strong> John Doe</p>
        <p><strong>Email:</strong> john@example.com</p>
        <button className="mt-2 px-4 py-2 bg-orange-500 text-white rounded-lg">Edit Profile</button>
      </div>
    </div>
    </div>
  )
}

export default profile;
