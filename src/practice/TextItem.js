
// function TextItem({text}) {

//     return (
//         <div className="App">
//             <div className='textItem'>
//                 <p className='title'>제목 : {text} </p>
//                 <p>내용 : 내용{text}</p>
//             </div>
//         </div>
//     );
// }

// export default TextItem;

//----------------------------------

// function TextItem(props) { // title : '' , content = ''

//     return (
//         <div className="App">
//             <div className='textItem'>
//                 <p className='title'>제목 : {props.title} </p>
//                 <p>내용 : {props.content} </p>
//             </div>
//         </div>
//     );
// }

// export default TextItem;

function TextItem({title, content}) { // title : '' , content = ''

    return (
        <div className="App">
            <div className='textItem'>
                <p className='title'>제목 : {title} </p>
                <p>내용 : {content} </p>
            </div>
        </div>
    );
}

export default TextItem;


