import React from 'react';
import {List, Modal} from 'antd';
import './List.css';

const listData = [];
for (let i = 0; i < 6; i++) {
    listData.push({
        href: 'http://ant.design',
        title: `ant design part ${i}`,
        avatar: 'https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png',
        description:
            'Ant Design, a design language for background applications, is refined by Ant UED Team.',
        content:
            'We supply a series of design principles, practical patterns and high quality design resources (Sketch and Axure), to help people create their product prototypes beautifully and efficiently.',
    });
}

function ListModal(props) {

    console.log('Rendering');

    return (
        <Modal
            title="Hotels"
            visible={props.visible}
            width={900}
            onOk={props.toggleModal}
            onCancel={props.toggleModal}
        >
            <List
                itemLayout="vertical"
                pagination={{
                    pageSize: 6,
                }}
                dataSource={listData}
                renderItem={item => (
                    <List.Item
                        key={item.title}
                        extra={
                            <img
                                width={272}
                                alt="logo"
                                src="https://gw.alipayobjects.com/zos/rmsportal/mqaQswcyDLcXyDKnZfES.png"
                            />
                        }
                    >
                        {item.content}
                    </List.Item>
                )}
            />
        </Modal>
    );
}

export default React.memo(ListModal, (prevProps, nextProps) => {
    return nextProps.visible === prevProps.visible
});
