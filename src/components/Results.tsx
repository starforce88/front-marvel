/* eslint eqeqeq: "off", curly: "error", @typescript-eslint/no-unused-vars: "off", react-hooks/exhaustive-deps: "off", array-callback-return: "off", no-eval: "off", jsx-a11y/alt-text: "off", jsx-a11y/anchor-is-valid: "off" */

import { People, Person, Person2 } from '@mui/icons-material';
import { Divider, List, ListItemButton, ListItemIcon, ListItemText } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { httpGet } from '../utils/http';

const Results = (props) => {
    const openInfo = async (id) => {
        let data = await httpGet(`http://localhost:3001/character/search/${id}`, {}, {});
        if(data){
            if(data.info){
                props.setInfo(JSON.parse(JSON.stringify(data.info)));
                props.setOpen(true);
            }
        }
    }

    return <List component={'nav'}>
        {
            props.list.map((item, index) => {
                return [
                    <ListItemButton key={`item-character-${index}`} onClick={openInfo.bind(this, item['id'])} id={`result-${index+1}`}>
                        <ListItemIcon>
                            <Person2/>
                        </ListItemIcon>
                        <ListItemText
                            primary={item['name']}
                        />
                    </ListItemButton>,
                    <Divider key={`divider-${index}`}/>
                ]
            })
        }
    </List>
}

export default Results;