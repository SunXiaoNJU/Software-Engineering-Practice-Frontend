import { SearchOutlined } from '@ant-design/icons';
import { PageContainer } from '@ant-design/pro-components';
import { Alert, Button, Dropdown, Input, MenuProps, Result, Space } from 'antd';
import axios from 'axios';
import { useEffect, useState } from 'react';

const QA: React.FC = () => {
  const [value, setValue] = useState('');
  const [res, setRes] = useState('');
  const [isclick, setIsclick] = useState(false);

  const keyValueChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setValue(e.target.value);
  };

  const getData = async (value: string) => {
    const data = await axios.get(
      'http://101.43.13.8:8080/wenda/answer?word=' + value,
    );
    setRes(data.data.data);
  };

  useEffect(() => {
    getData(value);
  }, [value]);

  const askHandler = () => {
    setIsclick(true);
  };

  const resMsg = (
    <Result
      status="success"
      title="Here is the ANSWER!"
      subTitle="Cloud server configuration takes a while, if there's no answer, please wait."
    >
      {res}
    </Result>
  );

  const alertMsg = (
    <>
      <br />
      <br />
      <Alert type="warning" message="请重新输入关键词"></Alert>
    </>
  );

  const items: MenuProps['items'] = [
    {
      key: 1,
      label: '云计算',
    },
    {
      key: 2,
      label: '物联网',
    },
    {
      key: 3,
      label: '数据库',
    },
    {
      key: 4,
      label: '人工智能',
    },
    {
      key: 5,
      label: '大数据',
    },
    {
      key: 6,
      label: '软件开发',
    },
    {
      key: 7,
      label: '云原生',
    },
  ];

  return (
    <PageContainer ghost>
      <Space size={[16, 32]} wrap>
        <Input
          placeholder="请输入关键词"
          showCount
          maxLength={10}
          onChange={keyValueChange}
        />
        <Dropdown menu={{ items }} placement="bottom" arrow>
          <Button type="dashed" disabled danger>
            关键词提示
          </Button>
        </Dropdown>
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
