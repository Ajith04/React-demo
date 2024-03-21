import {React} from 'react';
import { Layout} from 'antd';
import TopHeader from '../../components/header';
import MyFooter from '../../components/footer';
import MyContent from '../../components/content';



const Home = () => {
    return(
<div>
<Layout>
      <TopHeader/ >
      <MyContent/ >
      <MyFooter/ >
    </Layout>
</div>
    );
}

export default Home;