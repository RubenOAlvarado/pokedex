import React, {Component} from 'react';
import API from '../axios/api';
import {Elevation} from '@rmwc/elevation';
import {GridTile, GridTilePrimary, GridTilePrimaryContent, GridTileSecondary, GridTileTitle} from '@rmwc/grid-list';
import {Typography} from "@rmwc/typography";
import {Ripple} from '@rmwc/ripple';
import '@material/elevation/dist/mdc.elevation.css';
import '@material/grid-list/dist/mdc.grid-list.css';
import '@material/typography/dist/mdc.typography.css';
import '@material/ripple/dist/mdc.ripple.css';

export default class Pokemon extends Component{
    state = {
        abilities:[],
        height: 0,
        id:0,
        name:'',
        sprites:[],
        stats:[],
        weight:0,
    }

    componentDidMount () {
        const uri_poke = this.props.uri_poke;
        API.get(uri_poke)
            .then(res =>  {
                const {data} = res;
                this.setState({
                    abilities: data.abilities,
                    height: data.height,
                    id: data.id,
                    name: data.name,
                    sprites: data.sprites,
                    stats: data.stats,
                    weight: data.weight,
                });
            })
            .catch(err => console.log(err));
    }

    render(){
        const {sprites, name } = this.state;
        return(<Ripple><Elevation z={24}>
            <GridTile>
            <GridTilePrimary>
                <GridTilePrimaryContent src={sprites.front_default} />
            </GridTilePrimary>
            <GridTileSecondary>
                <GridTileTitle>
                <Typography>{name.toUpperCase()}</Typography>
                </GridTileTitle>
            </GridTileSecondary>
            </GridTile>
        </Elevation></Ripple>);
    }
    
}