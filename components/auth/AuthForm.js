import { useState } from 'react';
import { signIn } from 'next-auth/client';
import { useRouter } from 'next/router';
import { useDispatch } from 'react-redux';
import { userActions } from '../../store/user-slice';
import { Form, Input, Button, Row, Col } from 'antd';

import createUser from '../../helpers/auth/createUser';
import handleUsernameValidation from '../../helpers/auth/handleUsernameValidation';

function AuthForm() {
    const [isLogin, setIsLogin] = useState(true);
    const [formError, setFormError] = useState('');

    const router = useRouter();
    const dispatch = useDispatch();

    function switchAuthModeHandler() {
        setIsLogin(prevState => !prevState);
    }

    const onFinish = async values => {
        if (isLogin) {
            const result = await signIn('credentials', {
                redirect: false,
                username: values.username,
                password: values.password
            });
            if (!result.error) {
                router.replace('/dashboard');
                dispatch(
                    userActions.authenticate({
                        username: values.username
                    })
                );
            }
            setFormError(result.error);
        } else {
            try {
                const create = await createUser(
                    values.username,
                    values.password
                );
                const result = await signIn('credentials', {
                    redirect: false,
                    username: values.username,
                    password: values.password
                });
                if (!result.error) {
                    dispatch(
                        userActions.authenticate({
                            username: values.username
                        })
                    );
                    router.replace('/dashboard');
                }
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
                >
                    <Form.Item
                        name='username'
                        validateTrigger='onBlur'
                        validateFirst='true'
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
                        hasFeedback
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
                {formError && formError.length > 0 && <p>{formError}</p>}
            </Col>
        </Row>
    );
}

export default AuthForm;
