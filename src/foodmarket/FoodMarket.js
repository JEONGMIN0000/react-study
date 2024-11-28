import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import './FoodMarket.css';

import foodsData from '../data/foodsData.js';
import { useState } from 'react';

import { Routes, Route, Link, useNavigate } from 'react-router-dom';

import Home from './pages/Home.js';

function FoodMarket() {

    let [foods, setFoods] = useState(foodsData);

    let navigate = useNavigate(); //경로 조작 함수

    return (
        <div>
            <Navbar bg="light" data-bs-theme="light">
                <Container>
                    <Navbar.Brand href="/">Market</Navbar.Brand> {/* 새로고침 */}
                    <Nav className="me-auto">
                        <Nav.Link href="#home"> <Link to="/"> Home </Link> </Nav.Link>
                        <Nav.Link  onClick={()=>{navigate("/detail")}}> FoodDetail </Nav.Link>
                        <Nav.Link onClick={()=>{navigate("/info")}}> Info</Nav.Link>
                    </Nav>
                </Container>
            </Navbar>

            {/* 
                1. css이미지 경로  :  <div className='main-bg'}></div>
                2. js 에서 import 후 사용  :  <div style={{backgroundImage : 'url(' + banner_bg + ')'}}></div>
                                                <img src = {banner_bg}></img>
                3. public 폴더에 저장후 사용
                    img src = {'/food1.jpg'}
                    img src = {process.env.PUBLIC_URL + '/food1.jpg'}
                    
                    package.json
                    "homepage":"/newurlpath" 상세경로
            */}

            <Routes>
                <Route path="/" element={<Home foods={foods} />} />
                <Route path="/detail" element={<h1>detail page</h1>} />
                <Route path="/info" element={<h1>info page</h1>} />
            </Routes>

        </div>
    );

}

export default FoodMarket;