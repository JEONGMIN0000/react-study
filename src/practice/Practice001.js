import logo from './logo.svg';
import './Practice001.css';
import { useState } from 'react';

function Practice001() {

    const num = ['하나', '둘', '셋'];
    const [index, setIndex] = useState(0);

    return (
        <div className="App">
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
                <p> {num[index]} </p>
                {/* <button onClick={()=>{
                    {index+1<num.length ? setIndex(index + 1) : setIndex(0)};
                }}>변경버튼</button> */}
                {/* <button onClick={()=>{
                    setIndex(index + 1);
                    if(index+1 >= num.length){
                        setIndex(0);
                    }
                }}>변경버튼</button> */}
                <button onClick={()=>{
                    setIndex( (index + 1) % num.length) ;
                }}>변경버튼</button>
            </header>
        </div>
    );
}


export default Practice001;
