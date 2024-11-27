import './Quiz003.css'
import { useState } from 'react';

function Quiz003( ){

    // //1
    // let [boxes,setBoxes] = useState([<div className="box"> 박스 </div>]);

    // return(
    //     <div>
    //         <button onClick={()=>{
    //             let temp = [...boxes];
    //             temp.push(<div className="box"> 박스 </div>); 
    //             setBoxes(temp);
    //         }}>추가</button>

    //         <div className='container'>
    //             {boxes}
    //         </div>

    //     </div>
        
    // );

    //2
    let [count,setCount] = useState([0]);

    return(
        <div>

            <button onClick={()=>{
                //let temp = [0, ...count];
                //let temp = [...count, 1];  //let temp = [0, ...count, 1, 2]; //앞메 하나 뒤에 두개

                let temp = [...count];
                temp.push(0);
                setCount(temp);
            }}>추가</button>


            <div className='container'>
                {
                    count.map(()=>{
                        return <div className="box"> 박스 </div>;
                    })
                }
            </div>

        </div>
        
    );


}

export default Quiz003;