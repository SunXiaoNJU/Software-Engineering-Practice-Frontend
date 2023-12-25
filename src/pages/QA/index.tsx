import { SearchOutlined } from '@ant-design/icons';
import { PageContainer } from '@ant-design/pro-components';
import { Alert, Button, Input, Result, Space } from 'antd';
import axios from 'axios';
import { useState } from 'react';

const QA: React.FC = () => {
  const [ivalue, setIvalue] = useState('');
  const [res, setRes] = useState('');
  const [isclick, setIsclick] = useState(false);

  const ivalueChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setIvalue(e.target.value);
    setIsclick(false);
  };

  const getData = async (value: string) => {
    const data = await axios.get(
      'http://101.43.13.8:8080/llm/answer?sentence=' + value,
    );
    setRes(data.data.data);
  };

  const askHandler = () => {
    setRes('请稍等...');
    getData(ivalue);
    setIsclick(true);
  };

  const resMsg = (
    <Result
      status="success"
      title="智能问答结果"
      subTitle="Cloud server configuration takes a while, if there's no answer, please wait a minute."
    >
      {res}
    </Result>
  );

  const alertMsg = (
    <>
      <br />
      <br />
      <Alert type="warning" message="请重新输入问题"></Alert>
    </>
  );

  return (
    <PageContainer ghost>
      <Space size={[16, 32]} wrap>
        <Input
          addonBefore="Question:"
          placeholder="请输入问题"
          showCount
          maxLength={25}
          onChange={ivalueChange}
          style={{ width: '25vw' }}
        />
        <Button
          type="primary"
          shape="circle"
          icon={<SearchOutlined />}
          onClick={askHandler}
        />
      </Space>
      {isclick ? res ? resMsg : alertMsg : <></>}
    </PageContainer>
  );
};
export default QA;
