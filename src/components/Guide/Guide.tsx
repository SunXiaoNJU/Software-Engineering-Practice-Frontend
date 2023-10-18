import { Layout, Row, Typography } from 'antd';
import React from 'react';
import styles from './Guide.less';

interface Props {
  name: string;
}

// 脚手架示例组件
const Guide: React.FC<Props> = (props) => {
  const { name } = props;
  return (
    <Layout>
      <Row>
        <Typography.Title level={2} className={styles.title}>
          欢迎鉴赏 <i>{name}</i> ~
        </Typography.Title>
      </Row>
    </Layout>
  );
};

export default Guide;
