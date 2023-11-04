import { PageContainer } from '@ant-design/pro-components';
import { Button } from 'antd';

const KnowledgeMap: React.FC = () => {
  const clickHandler = () => {
    console.log('----');
  };

  return (
    <PageContainer ghost>
      <Button type="primary" onClick={clickHandler}>
        展示知识图谱
      </Button>
    </PageContainer>
  );
};

export default KnowledgeMap;
