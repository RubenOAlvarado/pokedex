import React, {Component} from 'react';
import API from '../axios/api';
import {Card} from 'antd';

const {Meta} = Card;

export default class Pokemon extends Component{
    state = {
        id:0,
        name:'',
        sprites:[],
    }

    componentDidMount () {
        const uri_poke = this.props.uri_poke;
        API.get(uri_poke)
            .then(res =>  {
                const {data} = res;
                this.setState({
                    id: data.id,
                    name: data.name,
                    sprites: data.sprites,
                });
            })
            .catch(err => console.log(err));
    }

    render(){
        const {sprites, name, id } = this.state;
        return(<Card bordered={true}
                hoverable
                cover={<img alt={name} src={sprites.front_default} />}>
                <Meta title={`${id} : ${name.toUpperCase()}`} style={{textAlign:"center"}}/>
        </Card>);
    }
    
}