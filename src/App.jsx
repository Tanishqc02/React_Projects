import { useState } from 'react'
import Student from './component/Student'
import './App.css'

function App() {
  const [name, setName] = useState('')
  const [age, setAge] = useState('')
  const [course, setCourse] = useState('')
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    if (name && age && course) {
      setSubmitted(true)
    }
  }

  return (
    <div className="app-container">
      <h1>Student Information Form</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Enter name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="number"
          placeholder="Enter age"
          value={age}
          onChange={(e) => setAge(e.target.value)}
        />
        <input
          type="text"
          placeholder="Enter course"
          value={course}
          onChange={(e) => setCourse(e.target.value)}
        />
        <button type="submit">Submit</button>
      </form>

      {submitted && (
        <Student name={name} age={age} course={course} />
      )}
    </div>
  )
}

export default App
