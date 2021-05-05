import { useState } from 'react';
import { Form, Input, Button, Row, Col } from 'antd';

function AuthForm() {
    const [isLogin, setIsLogin] = useState(true);

    function switchAuthModeHandler() {
        setIsLogin(prevState => !prevState);
    }

    const onFinish = values => {
        console.log('Success:', values);
    };

    const onFinishFailed = errorInfo => {
        console.log('Failed:', errorInfo);
    };

    return (
        <Row justify='center' align='middle' className='auth-form-container'>
            <Col xs={16} sm={16} md={12} lg={8} className='auth-form'>
                <h1>{isLogin ? 'Login' : 'Sign Up'}</h1>
                <Form
                    name='auth'
                    onFinish={onFinish}
                    onFinishFailed={onFinishFailed}
                >
                    <Form.Item
                        name='username'
                        rules={[
                            {
                                required: true,
                                message: 'Your username'
                            }
                        ]}
                    >
                        <Input placeholder='Username' />
                    </Form.Item>
                    <Form.Item
                        name='password'
                        rules={[
                            {
                                required: true,
                                message: 'Your password'
                            }
                        ]}
                    >
                        <Input placeholder='Password' />
                    </Form.Item>
                    <Form.Item>
                        <Button type='primary' htmlType='submit'>
                            {isLogin ? 'Login' : 'Create Account'}
                        </Button>
                    </Form.Item>
                    <Form.Item>
                        <Button
                            type='link'
                            htmlType='button'
                            onClick={switchAuthModeHandler}
                        >
                            {isLogin
                                ? 'Create new account'
                                : 'Login with existing account'}
                        </Button>
                    </Form.Item>
                </Form>
            </Col>
        </Row>
    );
}

export default AuthForm;
