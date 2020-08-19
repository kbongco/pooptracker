import React, { useState } from 'react';
import Axios from 'axios';

export default function AddPoop(props) {
  const [TypeofPoop, updateTypeOfPoop] = useState('');
  const [Description, updateDescription] = useState('');
  const [Date, updateDate] = useState('')
  const [TimeOfDay, updateTimeOfDay] = useState('')
  const [ThoughtsFeels, updateThoughtsFeels] = useState('')

  const handleSubmit = async (e) => {
    e.preventDefault();

    const newPoop = await Axios.post(
      "https://api.airtable.com/v0/app4WcdqISrRRZRJp/Table%201",
      {
        fields: {
          TypeofPoop: TypeofPoop,
          Description: Description,
          Date: Date,
          TimeOfDay: TimeOfDay,
          ThoughtsFeels: ThoughtsFeels,
        },
      },
      {
        headers: {
          Authorization: `Bearer ${process.env.REACT_APP_AIRTABLE_KEY}`,
          "Content-Type": "application/json",
        },
      }
    );
    props.updateGetPoop(!props.getPoop);
  };
  return (
    <div className='form'>
      <form className='poop' onSubmit={handleSubmit}>
        <h2>Tell me about your poop</h2>
        <br></br>
        <label htmlFor="TypeOfPoop">How does your Poop Look?</label>
        <br></br>
        <input 
          type='text'
          id='TypeofPoop'
          onChange={(e) => updateTypeOfPoop(e.target.value)}
          value={TypeofPoop} />
        <br></br>
        <label htmlFor='Description'>What made your poop like that?</label>
        <br></br>
        <input type='textarea'
          id='description'
          onChange={(e) => updateDescription(e.target.value)}
          value={Description} />
        <label htmlFor='date'>When did you poop?</label>
        <input type='text'
          id='Date'
          onChange={(e) => updateDate(e.target.value)}
          value={Date} />
        <label htmlFor='timeofday'>What time of day did you poop?</label>
        <input type='text'
          id='timeofday'
          onChange={(e) => updateTimeOfDay(e.target.value)}
          value={TimeOfDay} />
        <label htmlFor='thoughts'>How do you feel about this poop?</label>
        <input type='text'
          id='thoughtsfeels'
          onChange={(e) => updateThoughtsFeels(e.target.value)}
          />
      </form>
    </div>
  )
}