import {React} from 'react';
import { Layout} from 'antd';
const { Footer } = Layout;

const MyFooter = () => {
    return (
<Footer
        style={{
          textAlign: 'center',
        }}
      >
        ©{new Date().getFullYear()} Created by Udesign Co.
      </Footer>

    );
}

export default MyFooter;