/* eslint eqeqeq: "off", curly: "error", @typescript-eslint/no-unused-vars: "off", react-hooks/exhaustive-deps: "off", array-callback-return: "off", no-eval: "off", jsx-a11y/alt-text: "off", jsx-a11y/anchor-is-valid: "off" */
import React, { useState } from 'react';
import { httpGet } from '../utils/http';
import { Search as Find } from '@mui/icons-material'
import '../App.css';
import { FormControl, InputLabel, Input, InputAdornment, IconButton } from '@mui/material';

const Search = (props) => {
    const [find, setFind] = useState('');
    const [disabled, setDisabled] = useState(true);

    const changeValue = (e) => {
        setFind(e.target.value);
        if(e.target.value){
            setDisabled(false);
        }else{
            setDisabled(true);
            props.setList([]);
        }
    }

    const clickButton = async () => {
        let data = await httpGet(`http://localhost:3001/character/search`, {name: find}, {});
        if(data){
            if(data.characters){
                props.setList(JSON.parse(JSON.stringify(data.characters)));
            }
        }
    }

  	return <FormControl variant='standard' fullWidth>
        <InputLabel htmlFor='search-field'>Search name</InputLabel>
        <Input id='search-field'
            value={find}
            onChange={changeValue}
            endAdornment={
                <InputAdornment position='end'>
                    <IconButton disabled={disabled} onClick={clickButton} id='button-search'>
                        <Find/>
                    </IconButton>
                </InputAdornment>
            }
        />
    </FormControl>
}

export default Search;
