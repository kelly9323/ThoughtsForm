import React, {useState} from 'react';
import ReactDOM  from 'react-dom';
import AddThoughtForm from './AddThoughtForm/AddThoughtForm'
import Thought from './Thought/Thought'
import { generateId, getNewExpirationTime } from './utilities'
import './styles.css'

export default function PassingThoughts(){
const [thoughts, setThoughts] = useState([
  {
    id: generateId(),
    text: "First thought",
    expiresAt: getNewExpirationTime(),
  },
  {
    id: generateId(),
    text: "Second thought",
    expiresAt: getNewExpirationTime(),
  },
]);

const addThought = (thought) =>{
setThoughts((prev)=> [thought, ...prev])
}

const removeThought = (thoughtIdToRemove) => {
    setThoughts((thoughts)=> thoughts.filter((thought)=> thought.id !== thoughtIdToRemove))
}
    return (
      <div>
        <header>
          <h1>Passing Thoughts</h1>
        </header>
        <main>
          <AddThoughtForm addThought={addThought} />
          <ul className="thoughts">
            {thoughts.map((thought) => (
              <Thought 
              key ={thought.id}
              thought={thought}
              removeThought = {removeThought}
               />
            ))}
          </ul>
        </main>
      </div>
    );
}