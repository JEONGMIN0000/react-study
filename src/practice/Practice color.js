import './Quiz003.css'
import { useState } from 'react';

function Quiz003( ){

    //*Hint <ColorBox bgColor={value} />

    let [color,setColor] = useState('white');
    
    let [boxes,setBoxes] = useState([<div className="box" style={{ backgroundColor : color }}> 박스 </div>]);

    return(
        <div>
            <button onClick={()=>{
                let temp = [...boxes];
                temp.push(<div className="box"> 박스 </div>); 
                setBoxes(temp);
            }}>추가</button>

            <button onClick={() => { 
                let newcolor = 'red';
                setColor(newcolor);

                let temp = [...boxes];
                temp.unshift(<div className="box" style={{backgroundColor: newcolor}}> 박스 </div>); 
                setBoxes(temp);
            }}>앞빨간박스추가</button>
            <button onClick={() => {
                let newcolor = 'blue';
                setColor(newcolor);

                let temp = [...boxes];
                temp.unshift(<div className="box" style={{backgroundColor: newcolor}}> 박스 </div>); 
                setBoxes(temp);
            }}>앞파란박스추가</button>
            <button onClick={() => { 
                let newcolor = 'green';
                setColor(newcolor);

                let temp = [...boxes];
                temp.unshift(<div className="box" style={{backgroundColor: newcolor}}> 박스 </div>); 
                setBoxes(temp);
            }}>앞초록박스추가</button>

            <button onClick={() => { 
                let newcolor = 'red';
                setColor(newcolor);

                let temp = [...boxes];
                temp.push(<div className="box" style={{backgroundColor: newcolor}}> 박스 </div>); 
                setBoxes(temp);
            }}>뒤빨간박스추가</button>
            <button onClick={() => { 
                let newcolor = 'blue';
                setColor(newcolor);

                let temp = [...boxes];
                temp.push(<div className="box" style={{backgroundColor: newcolor}}> 박스 </div>); 
                setBoxes(temp);
            }}>뒤파란박스추가</button>
            <button onClick={() => { 
                let newcolor = 'green';
                setColor(newcolor);

                let temp = [...boxes];
                temp.push(<div className="box" style={{backgroundColor: newcolor}}> 박스 </div>); 
                setBoxes(temp);
            }}>뒤초록박스추가</button>

            <button onClick={() => { 
                let temp = [...boxes];
                temp.shift(); 
                setBoxes(temp);
            }}>앞박스삭제</button>
            <button onClick={() => { 
                let temp = [...boxes];
                temp.pop(); 
                setBoxes(temp);
            }}>뒤박스삭제</button>

            <div className='container'>
                {boxes}
            </div>

        </div>
        
    );

    
}

export default Quiz003;