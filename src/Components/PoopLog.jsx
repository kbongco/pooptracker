import React from 'react';
import { Link } from 'react-router-dom';

export default function PoopLog(props) {
  const { poop } = props
  return (
    <div className='container'>
      <table className='design'>
        <thead>
          <tr>
            <th>Type of Poop</th>
            <th>Description</th>
            <th>Date</th>
            <th>Time of Day</th>
            <th>Thoughts/Feels</th>
          </tr>
        </thead>
        <tbody>
          {poop.map((poops) => (
            <tr>
              <td>
                <p>{poops.fields.TypeofPoop}</p>
              </td>
              <td>
                <p>{poops.fields.Description}</p>
              </td>
              <td>
                <p>{poops.fields.Date}</p>
              </td>
              <td>
                <p>{poops.fields.TimeOfDay}</p>
              </td>
              <td>
                <p>{poops.fields.ThoughtsFeels}</p>
              </td>
            </tr>
          ))}
        </tbody>

      </table>
      <Link className='add' to={'/newpoop'}>
        <button>Add your poop here</button>
        </Link>
    </div>
  );
}