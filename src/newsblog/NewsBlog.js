import { useState } from 'react';
import './NewsBlog.css';
import Modal from './Modal';

function NewsBlog(){

    //javascript 코드
    let title = 'React Study';
    
    // let news1 = '오늘의 뉴스';
    // let news2 = '어제의 뉴스';
    // let news3 = '내일의 뉴스';

    let [news1, setNews1] = useState('오늘의 뉴스');
    let [news2, setNews2] = useState('어제의 뉴스');
    let [news3, setNews3] = useState('내일의 뉴스');

    let [news, setNews] = useState(['오늘의 뉴스', '어제의 뉴스', '내일의 뉴스']);

    let [count,setCount] = useState([0, 0, 0]);

    let [modalFlag,setModalFlag] = useState(false);

    return(
        <div>
            <div className='black-nav'>
                <h4>Blog Header</h4>
                <div style={{color:'orange', fontSize: "20px"}}>{title}</div>
            </div>

            {
                news.map((item, index)=>{
                    return (
                        <div className='post-list'>
                            <h4 onClick={()=>{
                                setModalFlag(!modalFlag);
                            }}>{news[index]}
                                <span onClick={()=>{
                                    let temp = [...count];
                                    temp[index] += 1;
                                    setCount(temp);
                                }}> ❤</span>{count[index]}</h4>
                            <p>내용 무</p>
                        </div>
                    )
                })
            }

            {/*
            <div className='post-list'>
                <h4 onClick={()=>{

                    setModalFlag(!modalFlag);

                    //setModalFlag(modalFlag? false : true);

                    // if(modalFlag ){
                    //     setModalFlag(false);
                    // } else{
                    //     setModalFlag(true);
                    // }
                    
                }}>{news[0]}
                    <span onClick={()=>{
                        setCount(count+1)
                    }}> ❤</span>{count}</h4>
                <p>내용 무</p>
            </div>

            <div className='post-list'>
                <h4>{news[1]}</h4>
                <p>내용 무</p>
            </div>

            <div className='post-list'>
                <h4>{news[2]}</h4>
                <p>내용 무</p>
            </div>
            */}

            {/* <div className='post-list'>
                <h4>{news1}</h4>
                <p>내용 무</p>
            </div>

            <div className='post-list'>
                <h4>{news2}</h4>
                <p>내용 무</p>
            </div>

            <div className='post-list'>
                <h4>{news3}</h4>
                <p>내용 무</p>
            </div> */}


            {/* <div className='post-list'>
                <h4>오늘의 뉴스</h4>
                <p>내용 무</p>
            </div>

            <div className='post-list'>
                <h4>어제의 뉴스</h4>
                <p>내용 무</p>
            </div>

            <div className='post-list'>
                <h4>내일의 뉴스</h4>
                <p>내용 무</p>
            </div> */}

            <button onClick={()=>{

                // 실패
                // news[0] = "Today News"; //'오늘의 뉴스' -> 'Today News'
                // setNews(news); // 배열 : 참조변수 : 주소 : 주소가 바뀌여야함 : 새로운 배열

                //되지만 비효율
                //setNews(['Today News', '어제의 뉴스', '내일의 뉴스']); //주소가 바뀌면 re-Rendering

                //array 새로운 배열 deep copy
                let temp = [...news];
                temp[0] = "Today News"; //0 인덱스 값 변경
                setNews(temp); //news = temp

                //unshift
                // let temp = [...news];
                // temp.shift();
                // temp.unshift('Today News');
                //setNews(temp);

                //splice
                // let temp = [...news];
                // temp.splice(0,1,"Today News");
                // setNews(temp);

            }}>제목 변경</button>


            {
                modalFlag == true ? <Modal news={news} setNews={setNews} bgColor={'lightgreen'}/> : null
            }   

            

        </div>
    )
    
}

export default NewsBlog;