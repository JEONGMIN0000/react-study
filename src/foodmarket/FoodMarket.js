import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import './FoodMarket.css';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card'; 

import banner_bg from './banner_bg.jpg';
import food1 from './food1.jpg';
import food2 from './food2.jpg';
import food3 from './food3.jpg';
import FoodCard from './FoodCard.js';

import foodsData from '../data/foodsData.js';
import { useState } from 'react';

function FoodMarket() {

    let [foods,setFoods] = useState(foodsData);

    return (
        <div>
            <Navbar bg="light" data-bs-theme="light">
                <Container>
                    <Navbar.Brand href="#home">Market</Navbar.Brand>
                    <Nav className="me-auto">
                        <Nav.Link href="#home">Home</Nav.Link>
                        <Nav.Link href="#features">FoodDetail</Nav.Link>
                        <Nav.Link href="#pricing">Info</Nav.Link>
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
            <div className='main-bg' style={{ backgroundImage: 'url(' + banner_bg + ')' }}></div>

            <Container>
                <Row>
                {
                    foods.map((food, index) => {
                        return(<Col md={4} sm={2} key={index} > <FoodCard index={index} food={food} foods={foods} setFoods={setFoods}/> </Col>);
                    })
                }
                </Row>
            </Container>

        </div>
    );

}

export default FoodMarket;