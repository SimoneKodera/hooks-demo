import { Sidebar } from "../../components/Sidebar";
import { RouterContainer } from "../RouterContainer";
import './index.less';
import { Layout } from "antd";

const { Content, Sider } = Layout;


export const LayoutContainer = () => {
    return (
        <Layout className='layout-container'>
            <Sider width='320' className='sider'>
                <Sidebar></Sidebar>
            </Sider>
            <Content className='content'>
                <RouterContainer></RouterContainer>
            </Content>
        </Layout>
    )
}