import React, { useState } from 'react'

const Example4 = () => {
  const [input, setInput] = useState('')
  const [profile, setProfile] = useState({
    name: 'Prince Khunt',
    email: 'princekhunt@gmail.com',
    images: ['profile.png']
  })

  const changeName = () => {
    setProfile((prev) => ({
      ...prev,
      name: input
    }))
  }

  return (
    <div>
      <input onChange={(e) => setInput(e.target.value)} type="text" />
      <button onClick={changeName}>Change Name</button>
      <h1>User is {profile?.name}</h1>
      <h1>Profile picture is {profile?.images[0]}</h1>
    </div>
  )
}

export default Example4