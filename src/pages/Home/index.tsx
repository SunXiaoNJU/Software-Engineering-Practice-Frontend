import Guide from '@/components/Guide';
import { APP_NAME } from '@/constants';
import { trim } from '@/utils/format';
import { PageContainer } from '@ant-design/pro-components';
import { Image } from 'antd';
import styles from './index.less';

const HomePage: React.FC = () => {
  const name = APP_NAME;
  return (
    <PageContainer ghost>
      <div className={styles.container}>
        <Guide name={trim(name)} />
      </div>
      <Image src="/HUAWEIYUN.jpg"></Image>
    </PageContainer>
  );
};

export default HomePage;
