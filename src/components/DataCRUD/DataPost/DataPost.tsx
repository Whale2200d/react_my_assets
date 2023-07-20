// import axios from 'axios'
import React, { useState } from 'react'

function DataPost() {
  // const [postData, setPostData] = useState<string>('')

  // const SERVER_URL = 'http://localhost:5000'
  // const postRequestData = async () => {
  //   const { data } = await axios.post(`${SERVER_URL}/posts`)
  //   setPostData(data)
  // }

  const [values, setValues] = useState({
    email: '',
    password: '',
  })

  const handleChange = (e: any) => {
    setValues({
      ...values, [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e: any) => {
    e.preventDefault()
    alert(JSON.stringify(values, null, 2))
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input type='text' name='user_id' onChange={handleChange} />
        <button type='submit'>Post 요청</button>
      </form>
    </>
  )
}

export default DataPost