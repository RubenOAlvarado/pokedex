import React, {Component} from 'react';
import API from '../axios/api';
import Pokemon from './pokemon';
import {GridList} from '@rmwc/grid-list';
import {Toolbar, ToolbarRow, ToolbarTitle} from "@rmwc/toolbar";
import '@material/grid-list/dist/mdc.grid-list.css';
import '@material/toolbar/dist/mdc.toolbar.css';

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
        <Toolbar fixed>
            <ToolbarRow>
              <ToolbarTitle>PokéDex de Kanto</ToolbarTitle>
            </ToolbarRow>
        </Toolbar>
        <div>
        <GridList tileAspect={'3x4'} headerCaption={false}>
            {this.state.pokemons.map(pokemon => (
                <Pokemon key={pokemon.id} uri_poke={pokemon.url} />
            ))}
          </GridList>
        </div>
          </div>);
    }
}
