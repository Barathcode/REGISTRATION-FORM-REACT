import {useState} from 'react'
import './App.css'

const App = () => {

  const [user,setUser] = useState({
    name:"",
    age:0,
    gender:"",
    isMarried:false,
    country:"",
    bio:""
  })

  function changeHandler (e) {
    const name = e.target.name;
    const value = e.target.type === 'checkbox' ? e.target.checked : e.target.value;
    setUser({...user,[name]: value})
  }

  return (
    <> 
      <table>
        <tbody>
          <tr>
            <td>Name</td>
            <td>{user.name}</td>
          </tr>
          <tr>
            <td>Age</td>
            <td>{user.age}</td>
          </tr>
          <tr>
            <td>Gender</td>
            <td>{user.gender}</td>
          </tr>
          <tr>
            <td>Marital status</td>
            <td>{user.isMarried ? "Married" : "Not Married"}</td>
          </tr>
          <tr>
            <td>Country</td>
            <td>{user.country}</td>
          </tr>
          <tr>
            <td>Bio</td>
            <td>{user.bio}</td>
          </tr>
        </tbody>
      </table>

      <form>

          <input type='text' name='name' placeholder='Enter your Full name' onChange={changeHandler} value={user.name} />
          <input type='number' name='age' placeholder='Enter your Age' onChange={changeHandler} value={user.age} />

        <div className='gender'>
          <label htmlFor="male">
            <input type='radio' name='gender' id="male" checked={user.gender == "Male"} onChange={changeHandler} value="Male" /> Male
          </label>
          <label htmlFor="female">
            <input type='radio' name='gender' id="female" checked={user.gender == "Female"} onChange={changeHandler} value="Female" /> Female
          </label>
        </div>

        <label htmlFor='isMarried'>
          <input type='checkbox' name='isMarried' id='isMarried' checked={user.isMarried} onChange={changeHandler} /> Is Married
        </label>

        <div className='select-div'>
          <label htmlFor='country'> Select Country :</label>
            <select name='country' id='country' value={user.country} onChange={changeHandler}>
              <option value="India">India</option>
              <option value="USA">USA</option>
              <option value="UK">UK</option>
            </select>
        </div>

        <textarea name='bio' id='bio' cols='30' rows='5' placeholder='Write something about you' onChange={changeHandler} value={user.bio} />

      </form>

    </>
  )
}

export default App
