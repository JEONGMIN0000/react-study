import React, { useState } from 'react';
import './Quiz001.css';

function Quiz001() {

  let [count, setCount] = useState(0);

  return (
    <div>
      <button onClick={()=>
        {
          setCount(count + 2);
        }
      }>짝수출력</button> <span className='red'>{count}</span>
    </div>
  );
}

export default Quiz001;
