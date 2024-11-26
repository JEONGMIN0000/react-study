import './Quiz002.css';
import TextItem from './TextItem';
import React, { useState } from 'react';

// function Quiz002() {

//   let[textArr, setTextArr] = useState(['하나', '둘', '셋', '넷', '다섯']);

//   return (
    
//       textArr.map((item,index)=>{
//         return <TextItem text={textArr[index]}/>
//       })

//   );

// }

// export default Quiz002;

//----------------------------------

function Quiz002() {

  let title = ['하나', '둘', '셋', '넷', '다섯'];
  let content = ['내용하나', '내용둘', '내용셋', '내용넷', '내용다섯'];

  return (
    
    title.map((item, index)=>{
      return <TextItem title={title[index]} content={content[index]}/>;
        // return <TextItem title={item} />;
      })

  );

}

export default Quiz002;
