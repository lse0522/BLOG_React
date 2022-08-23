import './App.css';
import {useEffect, useState} from 'react';

function App() {
  let [글제목, 글제목변경] = useState([]);
  let [title, titlechange] = useState('');

  let [modal, setModal] = useState(false);
  let [본문제목, set본문제목] = useState('0');

  let [내용, 내용변경] = useState('');
  let [글내용, 글내용변경] = useState([]);

  //let [date, date변경] = useState('');
  let [날짜, 날짜변경] = useState([]);

  // let [like, setLike] = useState();

  return (
    <div className="App">
      <div className="blog_bar"/>
      <div className="blog">
      <div className="blog_name">BLOG</div>
      <div className="blog_user">
       <img className="blog_p" src="p.png"  />
       <div className="blog_user_r">
        <span>✏️글쓰기</span>
        <input type="text" onChange={(e)=>{
          titlechange(e.target.value);
        }} />

        <textarea
        onChange={(e)=>{
           내용변경(e.target.value);
         }} />
        <button type="sumbit" onClick={()=>{
         let copy글제목=[...글제목];
         copy글제목.unshift(title);
         글제목변경(copy글제목);

         let copy글내용 =[...글내용];
          copy글내용.unshift(내용);
         글내용변경(copy글내용);
       }}>글발행</button>
       </div>
      </div>
      
    <div className="blog_list">
      <div className="blog_text">
        <div className="blog_text_1">글제목</div>
        <div className="blog_text_2">공감</div>
        {/* <div className="blog_text_3">작성일</div> */}
      </div>

    {
      글제목.map(function(a, i){
        return(
          <div className="list" key={i} onClick={(e)=>{
            setModal(prev => !prev);
            set본문제목(i);
          }} >
            <div className="list_name"><h4>{ 글제목[i] }</h4></div>
            {/* <div className="list_view"><span onClick={(e)=>{
              e.stopPropagation();
              let copylike = [...like];
              copylike[i] = like[i];
              setLike(copylike);
            }}>♥️</span>{like[i]}</div> */}
            {/* <div className="list_date"><p>2022.08.16</p></div> */}
          </div>
        )
      })
    }
    </div>
    <div className="blog_modbal">
    {
      modal == true ? <Modal 본문제목={본문제목} 글제목={글제목} 글내용={글내용} /> : null
    } 
    </div>
    </div>
    </div>
  );
}

function Modal(props){
  return(
    <div className="blog_main">
      <div className="blog_main_listname"><p>{props.글제목[props.본문제목]}</p></div>
      <div className="blog_main_text">
        <pre>{props.글내용[props.본문제목]}</pre>

        </div>
    </div>
  );
}

export default App;
