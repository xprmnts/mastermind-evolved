import Link from 'next/link';
import { Row, Col, Button } from 'antd';

function UserDashboard() {
    return (
        <Row justify='center' align='middle'>
            <Col xs={12} sm={12}>
                <Link href='/game'>
                    <Button type='primary'>Play</Button>
                </Link>
            </Col>
        </Row>
    );
}

export default UserDashboard;
