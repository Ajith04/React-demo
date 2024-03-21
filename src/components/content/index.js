import {React} from 'react';
import { Layout } from 'antd';
const { Content} = Layout;

const MyContent = () => {
    return (
<Content
        style={{
          padding: '0 48px',
        }}
      >
        
        <div
          style={{
            padding: 24,
            minHeight: 380,
            
          }}
        >
          Ajith
        </div>
      </Content>

    );
}

export default MyContent;