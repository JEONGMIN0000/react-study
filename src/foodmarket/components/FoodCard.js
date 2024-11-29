import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card'; 
import { useNavigate } from 'react-router-dom';

function FoodCard({ food, foods, index }) {
    const navigate = useNavigate(); // useNavigate로 navigate 함수 정의

    return (
        <Card style={{ width: '18rem' }}>
            {/* 이미지 경로에 맞게 이미지 렌더링 */}
            <Card.Img variant="top" src={process.env.PUBLIC_URL + food.imgPath} />
            <Card.Body>
                <Card.Title>{food.title}</Card.Title>
                <Card.Text>{food.content}</Card.Text>
                <Card.Text>{foods[index].price}</Card.Text>
                {/* navigate를 통해 상세보기로 이동 */}
                <Button variant="primary" onClick={() => navigate("/detail/" + food.id)}>
                    상세보기
                </Button>
            </Card.Body>
        </Card>
    );
}

export default FoodCard;
