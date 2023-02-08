import React, { FormEvent, useState } from 'react';

import './App.css';
import { Bug, BugPriority } from './Bug';
import {v4 as uuid} from 'uuid';
import BugListTable from './BugListTable';



function App() {
  const [newBugDescription, setNewBugDescription] = useState<string>('');
  const [newBugPriority, setNewBugPriority] = useState<string>('Low');
  const [bugList, setBugList] = useState<Bug[]>([]);

  const addBug = (event: FormEvent) => {
    event.preventDefault();
    const newBug: Bug = {
      id: uuid(),
      description: newBugDescription,
      priority: newBugPriority as BugPriority,
    }

    setBugList([
      ...bugList,
      newBug
    ]);

    setNewBugDescription('');
    setNewBugPriority('Medium');
  };
  const deleteBug = (id: string) => {
    const bugs = bugList.filter(bug => bug.id !== id);

    setBugList(bugs);
  };

  return (
    <div className="app">
      <header>
      <img src={require('./images/lady-bug-pixelized.png')} className="lady-bug-icon" alt='lady-bug-pixelized' />
      <h1> Lady Bug Tracker </h1>
      </header>
     <h3>Never allow the same bug bite you twice!</h3>
     <form className="add-new-bug-form" onSubmit={addBug}>
        <label htmlFor='newBugDescription'>
        New Bug Description:
        <textarea id="newBugDescription" onChange={event => setNewBugDescription(event.target.value)} value={newBugDescription} name="Explain your bug..."></textarea>
      </label>
      <label htmlFor='newBugPriority' className="newBugPriorityTitle" >
        New Bug Priority:
       <select id="newBugPriority" value={newBugPriority} onChange={event => setNewBugPriority(event.target.value)}>
        <option value="Low">Low</option>
        <option value="Medium">Medium</option>
        <option value="High">High</option>
       </select>
       <button type="submit">Add New Bug</button>
      </label>
     </form>
     <BugListTable bugs={bugList} onDeleteBug={(id: string) =>  deleteBug(id)} />
    </div>
  );
}

export default App;
