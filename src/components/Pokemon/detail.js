import React from 'react';

export default function Details(props) {
    const {id} = props.match.params;
    return id;
}