import {React} from 'react';
import { Layout, Menu } from 'antd';
const { Header} = Layout;

const TopHeader = () => {
    return(
<Header
        style={{
          position: 'sticky',
          top: 0,
          zIndex: 1,
          width: '100%',
          display: 'flex',
          alignItems: 'center',
        }}
      >
        <div className="demo-logo" />
        <Menu
          theme="dark"
          mode="horizontal"
          defaultSelectedKeys={['2']}
          items={[
            {
                key : 'home',
                label : 'Home'
            },
            {
                key : 'products',
                label : 'Products'
            },
            {
                key : 'services',
                label : 'Services'
            },
            {
                key : 'aboutus',
                label : 'About US'
            },
            {
                key : 'contactus',
                label : 'Contact Us'
            }
          ]}
          style={{
            flex: 1,
            minWidth: 0,
          }}
        />
      </Header>
    );
}

export default TopHeader;