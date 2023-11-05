import { PageContainer } from '@ant-design/pro-components';
import { Button, Image } from 'antd';
import { useState } from 'react';

const KnowledgeMap: React.FC = () => {
  const [isShow, setIsShow] = useState(false);
  const clickHandler = () => {
    setIsShow(true);
  };

  return (
    <PageContainer ghost>
      <Button type="primary" onClick={clickHandler}>
        展示知识图谱
      </Button>
      {isShow ? <Image src="/graph.png"></Image> : <></>}
    </PageContainer>
  );
};

export default KnowledgeMap;
