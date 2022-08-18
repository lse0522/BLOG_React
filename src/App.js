import './App.css';
import {useState} from 'react';

function App() {
  //let [글제목, 글제목변경] = useState( ['남자코트 추천', '강남 우동맛집', '파이썬 독학'] );
  let [글제목, 글제목변경] = useState([]);
  let [title, titlechange] = useState('');

  return (
    <div className="App">
      <input type="text" onChange={(e)=>{
        titlechange(e.target.value);
      }} />
      <button type="sumbit" onClick={()=>{
        let copy글제목=[...글제목];
        copy글제목.unshift(title);
        글제목변경(copy글제목);
      }}>글발행</button>

    {
      글제목.map(function(a, i){
        return(
          <div className="list" key={i}>
            <h4>{ 글제목[i] }</h4>
            <p>2022.08.18</p>
          </div>
        )
      })
    }

    </div>
  );
}


export default App;
