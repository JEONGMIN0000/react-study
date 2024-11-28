
function ColorBox2(props){
//function ColorBox2({bgColor, boxes, setBoxes}){
    return (
        <div className="box" style={{backgroundColor:props.bgColor}}>
            <button className="btn_close" onClick={()=>{
                let temp = [...props.boxes];
                temp.splice(props.index,1);
                props.setBoxes(temp);
            }}>X</button>
        </div>
    )
}

export default ColorBox2;

