import React, {Component} from 'react';
import API from '../axios/api';
import Pokemon from './pokemon';
import {Col, Row} from 'antd';

const URI_KANTO = '/pokemon?limit=151';

export default class PokeGrid extends Component{
    state = {
      pokemons:[]
    }

    componentDidMount () {
      API.get(URI_KANTO)
        .then(res => {
          const pokemons = res.data.results;
          this.setState({pokemons});
        })
        .catch(err => console.log(err));
    }

    render(){
      return(<div>
        <div style={{ background: '#ECECEC', padding: '30px' }}>
          <Row gutter={8} type="flex" justify="space-between">
              {this.state.pokemons.map(pokemon => (
                  <Col span={8} key={pokemon.id}><Pokemon uri_poke={pokemon.url} /></Col>
              ))}
          </Row>
        </div>
          </div>);
    }
}
