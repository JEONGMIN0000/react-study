import './Quiz004.css'
import ColorBox2 from './ColorBox2';
import { useState } from 'react';

function Quiz004( ){

    
    //let [boxes,setBoxes] = useState([1,2,3,4,5]);
    let [boxes,setBoxes] = useState(['red','blue','green','black']);
    

    return(
        <div>
            <button onClick={() => { 
                let temp = ['red',...boxes];
                setBoxes(temp);
            }}>앞빨간박스추가</button>
            <button onClick={() => { 
                let temp = ['blue',...boxes];
                setBoxes(temp);
            }}>앞파란박스추가</button>
            <button onClick={() => { 
                let temp = ['green',...boxes];
                setBoxes(temp);
            }}>앞초록박스추가</button>

            <button onClick={() => { 
                let temp = [...boxes,'red'];
                setBoxes(temp);
            }}>뒤빨간박스추가</button>
            <button onClick={() => { 
                let temp = [...boxes,'blue'];
                setBoxes(temp);
            }}>뒤파란박스추가</button>
            <button onClick={() => { 
                let temp = [...boxes,'green'];
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
                {
                    
                    boxes.map((value, index)=>{
                        return <ColorBox2 bgColor = {value} boxes = {boxes} setBoxes = {setBoxes} index = {index} />
                    })
                    
                }
            </div>
        </div>
        
    );


}

export default Quiz004;