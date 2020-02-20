import React, {Component} from 'react';
import API from '../axios/api';
import {Card} from 'antd';
import {Link} from 'react-router-dom';

const {Meta} = Card;

export default class Pokemon extends Component{
    state = {
            name:'',
            id:0,
            sprites:[],
    }

    componentDidMount () {
        const uri_poke = this.props.uri_poke;
        API.get(uri_poke)
            .then(({data}) =>  {
                this.setState({
                    name: data.name,
                    id: data.id,
                    sprites:data.sprites
                });
            })
            .catch(err => console.log(err));
    }

    render(){
        const {name, id, sprites} = this.state;
        return( 
            <Link to={`/pokemon/${id}`}>
                <Card bordered={true}
                hoverable
                cover={<img alt={name} src={sprites.front_default} />}
                style={{ background: '#ECECEC', padding: '30px' }}>
                    <Meta title={`${id} : ${name.toUpperCase()}`} style={{textAlign:"center"}}/>
                </Card>
            </Link>
        );
    }
    
}