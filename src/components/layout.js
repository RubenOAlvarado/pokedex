import React, {Component} from 'react';
import PokeGrid from './grid';
import { Layout, PageHeader } from 'antd';
import { Typography } from 'antd';

const {Title} = Typography;
const { Content, Footer } = Layout;

export default class PokeLayout extends Component{
    render(){
        return((<div>
        <PageHeader
        style={{textAlign:"center", 
                border: '1px solid rgb(235,237,240)',
                backgroundColor: '#F5F5F5',
                padding: 24,
            }}>
            <Title level={2}>Pokedex Kanto</Title>
        </PageHeader>
        <Layout>
            <Content style={{ padding: '0 24px', minHeight: 280 }}>
                <PokeGrid />
            </Content>
            <Footer style={{ textAlign: 'center' }}>Munditower ©2020 Created with Ant & React</Footer>
          </Layout>
        </div>));
    }
}  
 

