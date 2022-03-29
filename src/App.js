import './App.css';
import React, {useState} from 'react';
import Form from './components/Form';

function App() {
  const [members, setMembers] = useState([]); // this is what is submited in values
  const [values, setValues] = useState({name:'', email:'', role:''}); //this is the input


  const onSubmit = () => {
    setMembers([values, ...members]) // add values to members array watchout for those brackets!
    setValues({name:'', email:'', role:''}); //resets the input so what is typed disappears, good UI!
  }

  const onChange = (name, value) => {
    setValues({...values, [name]: value}) //spread out those keys in values, [name] = parameter name (name, email role) need brackets, value= value being input
  }

  return (
    <div className="App">
      <h1>Team Builder App</h1>
      <Form
        values={values}
        change={onChange}
        submit={onSubmit}
      />
      {members.map((member, idx) => {
        return (
          <div key={idx}>
            Member {idx+1}: {member.name}, {member.email}, {member.role}
          </div>
        )
      })}
    </div>
  );
  
}


export default App;
