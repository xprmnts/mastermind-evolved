import { useState } from 'react';
import { Form, Input, Button, Row, Col } from 'antd';

async function createUser(username, password) {
    const response = await fetch('/api/auth/signup', {
        method: 'POST',
        body: JSON.stringify({ username, password }),
        headers: {
            'Content-Type': 'application/json'
        }
    });

    const data = await response.json();

    if (!response.ok) {
        throw new Error(data.message || 'Something went wrong!');
    }

    return data;
}

async function handleUsernameValidation(username) {
    try {
        const response = await fetch('/api/auth/validate-user', {
            method: 'POST',
            body: JSON.stringify({ username }),
            headers: {
                'Content-Type': 'application/json'
            }
        });

        const data = await response.json();

        if (!response.ok) {
            throw new Error(data.message || 'Something went wrong!');
        }
    } catch (error) {
        return Promise.reject(error.message);
    }

    return Promise.resolve(true);
}

function AuthForm() {
    const [isLogin, setIsLogin] = useState(false);

    const validateUnique = true;

    function switchAuthModeHandler() {
        setIsLogin(prevState => !prevState);
    }

    const onSubmitHandler = event => {
        console.log('form submitted');
    };

    const onFinish = async values => {
        if (isLogin) {
            // log in user
        } else {
            try {
                const result = await createUser(
                    values.username,
                    values.password
                );
                console.log(result);
            } catch (error) {
                console.log(error);
            }

            // send request to create user
        }
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
                    onSubmit={onSubmitHandler}
                >
                    <Form.Item
                        name='username'
                        validateTrigger='onBlur'
                        rules={[
                            {
                                required: true,
                                message: 'Username is required.'
                            },
                            () => ({
                                validator(_, value) {
                                    if (!isLogin) {
                                        return handleUsernameValidation(value);
                                    }
                                    return Promise.resolve();
                                }
                            })
                        ]}
                    >
                        <Input placeholder='Username' autoComplete='on' />
                    </Form.Item>
                    <Form.Item
                        name='password'
                        rules={[
                            {
                                required: true,
                                message: 'Password is required.'
                            }
                        ]}
                    >
                        <Input.Password
                            placeholder='Password'
                            autoComplete='on'
                        />
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
