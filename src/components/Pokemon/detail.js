import React, {Component} from 'react';
import API from '../../axios/api';
import {Layout, Card, Typography} from 'antd';

export default class Details extends Component{
        state = {
          poke : {
              abilities:[],
              base_experience:0,
              height:0,
              held_items: [],
              id:0,
              is_default:0,
              location_area_encounters:'',
              moves:[],
              name:'',
              sprites:[],
              stats:[],
              types:[],
              weight:0
          }
        }
    
    componentDidMount() {
        const {id} = this.props.match.params;
        API.get(`pokemon/${id}`)
            .then(({data}) => {
                this.setState({poke:data});
            })
    }

    render(){
        const {Header, Content, Footer} = Layout;
        const {Title} = Typography;
        const {poke} = this.state;
        const {abilities, base_experience, height, held_items, id, location_area_encounters, moves, name, sprites, stats, types, weight} = poke;
        return(
            <Layout>
                <Layout>
                    <Header>
                        <Title level={2}>{`${id} : ${name.toUpperCase()}`}</Title>
                    </Header>
                    <Content>
                        <Card 
                            bordered={true}
                            cover={<img alt={name} src={sprites.front_default} />}
                            style={{ background: '#ECECEC', margin: '30px' }}></Card>
                    </Content>

                </Layout>
                <Footer>{types.map(type => (
                    <span>{type.type.name}</span>
                ))}</Footer>
            </Layout>
        );
    }
}