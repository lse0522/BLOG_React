import './App.css';
import {useState} from 'react';

function App() {
  let [글제목, 글제목변경] = useState([]);
  let [title, titlechange] = useState('');

  let [modal, setModal] = useState(false);
  let [본문제목, set본문제목] = useState('0');

  let [내용, 내용변경] = useState('');
  let [글내용, 글내용변경] = useState([]);

  //let [date, date변경] = useState('');
  let [날짜, 날짜변경] = useState([]);


  return (
    <div className="App">
      <input type="text" onChange={(e)=>{
        titlechange(e.target.value);
      }} />
      <textarea onChange={(e)=>{
        내용변경(e.target.value);
      }} />
      <button type="sumbit" onClick={()=>{
        let copy글제목=[...글제목];
        copy글제목.unshift(title);
        글제목변경(copy글제목);

        let copy글내용 =[...글내용];
        copy글내용.unshift(내용);
        글내용변경(copy글내용);

        let d = new Date();
        let year = d.getFullYear();
        let month = ('0' + (d.getMonth() + 1)).slice(-2);
        let day = ('0' + d.getDate()).slice(-2);
        let dateStr = year + '-' + month + '-' + day;
        let copydate = dateStr;
        copydate.unshift(날짜);
        날짜변경(copydate);
        
      }}>글발행</button>

    {
      글제목.map(function(a, i){
        return(
          <div className="list" key={i} onClick={()=>{
            setModal(prev => !prev);
            set본문제목(i);

          }} >
            <h4>{ 글제목[i] }</h4>
            <p>{날짜}</p>
          </div>
        )
      })
    }
    {
      modal == true ? <Modal 본문제목={본문제목} 글제목={글제목} 글내용={글내용} /> : null
    } 

    </div>
  );
}

function Modal(props){
  return(
    <div>
      <h4>{props.글제목[props.본문제목]}</h4>
      <p>{props.글내용[props.본문제목]}</p>
      <p>2022.08.18</p>
    </div>
  );
}

export default App;
