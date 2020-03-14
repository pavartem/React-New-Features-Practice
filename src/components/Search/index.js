import React, {useState, useEffect} from 'react';
import {Form, Input, Button, DatePicker, message} from 'antd';
import {SearchOutlined} from '@ant-design/icons';
import moment from 'moment';
import './Search.css';
import List from '../List/index';
import {connect} from "react-redux";
import {search} from "../../actions";

const {RangePicker} = DatePicker;
const dateFormat = 'YYYY/MM/DD';

function Search(props) {

    const [visible, setVisible] = useState(false);

    const [test, setTest] = useState(false);

    useEffect(() => {
        message.error('UseEffect executed on every render like ComponentDidUpdate !!!');
    });

    useEffect(() => {
        message.warning('UseEffect executed just one time like componentDidMount !!!');
    }, []);

    useEffect(() => {
        message.success('UseEffect executed for the first render and when visible is changed in the state !!!');
    }, [visible]);

    const toggleModal = () => {
        setVisible(!visible);
        props.search();
    };

    return (
        <div className='search-wrapper'>
            <Form className='search'>
                <Input size='large' style={{width: 300}} className='mr-4' placeholder=""/>
                <RangePicker
                    size='large'
                    defaultValue={[moment('2020/04/01', dateFormat), moment('2020/04/01', dateFormat)]}
                    format={dateFormat}
                    style={{width: 550, marginRight: 20}}
                    className='search-range'
                    onChange={() => setTest(!test)}
                />
                <Button
                    icon={<SearchOutlined/>}
                    className='search-btn'
                    type='primary'
                    size='large'
                    onClick={toggleModal}
                >
                    Search
                </Button>
            </Form>
            <List visible={visible} toggleModal={toggleModal}/>
        </div>
    );
}

const mapStateToProps = state => ({
    search,
});

const mapDispatchToProps = dispatch => ({
    search: () => dispatch(search()),
});

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(Search);
