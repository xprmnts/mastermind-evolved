import { useEffect, useState } from 'react';
import { Row, Col, Button, Select, Form } from 'antd';
import options from '../../assets/codeOptions';

const CodeSelector = () => {
    const [formItems, setFormItems] = useState([]);

    const formItemsGenerator = renderedSelectOptions => {
        const items = [];
        for (let i = 0; i < 4; i++) {
            items.push(
                <Col className='slot-input' key={i}>
                    <Form.Item
                        name={`slot${i + 1}`}
                        rules={[
                            {
                                required: true,
                                message: 'Required!'
                            }
                        ]}
                    >
                        <Select>{renderedSelectOptions}</Select>
                    </Form.Item>
                </Col>
            );
        }
        setFormItems(items);
    };

    useEffect(() => {
        const { Option } = Select;
        const renderedSelectOptions = options.map((option, index) => {
            return (
                <Option key={index} value={`${option.value}`}>
                    {option.icon}
                </Option>
            );
        });

        formItemsGenerator(renderedSelectOptions);
    }, []);

    return (
        <Form>
            <Row justify='space-between' align='middle'>
                {formItems}
            </Row>
            <Form.Item>
                <Button size='large' htmlType='submit' block>
                    Submit Code
                </Button>
            </Form.Item>
        </Form>
    );
};

export default CodeSelector;
