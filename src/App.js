import './App.css';
import {useState} from 'react';

function App() {
  let [글제목, 글제목변경] = useState('');
  let [title, titlechange] = useState('');

  return (
    <div className="App">
      <input type="text" onChange={(e)=>{
        글제목변경(e.target.value);
      }} />
      <button type="sumbit" onClick={()=>{
        let copy글제목=[...글제목];
        titlechange(copy글제목);
      }}>글발행</button>


      <div className="list">
        <h4>{title}</h4>
        <p>2022.08.18</p>
      </div>

    </div>
  );
}




export default App;
