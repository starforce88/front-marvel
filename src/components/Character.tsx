/* eslint eqeqeq: "off", curly: "error", @typescript-eslint/no-unused-vars: "off", react-hooks/exhaustive-deps: "off", array-callback-return: "off", no-eval: "off", jsx-a11y/alt-text: "off", jsx-a11y/anchor-is-valid: "off" */

import { CalendarMonth, Close, Description } from '@mui/icons-material';
import { Dialog, DialogContent, DialogTitle, Divider, IconButton, List, ListItemButton, ListItemIcon, ListItemText } from '@mui/material';
import React, { useEffect, useState } from 'react';
import moment from 'moment';
//import 'moment/locale/en-us';

const Character = (props) => {
    moment.locale('en');
    const closeModal = () => {
        props.setOpen(false);
        props.setInfo({});
    }

    return <Dialog open={props.open} onClose={closeModal.bind(this)} fullWidth>
        <DialogTitle sx={{ m: 0, p: 2}}>
            {props.info.name}
            <IconButton sx={{position: 'absolute', right: 8, top: 8}} onClick={closeModal.bind(this)}>
                <Close/>
            </IconButton>
        </DialogTitle>
        <DialogContent dividers>
            <List component={'nav'}>
                <ListItemButton>
                    <ListItemIcon>
                        <CalendarMonth/>
                    </ListItemIcon>
                    <ListItemText
                        primary={'Last modificate'}
                        secondary={moment(props.info.modified).format('LLLL')}
                    />
                </ListItemButton>
                <Divider/>
                <ListItemButton>
                    <ListItemIcon>
                        <Description/>
                    </ListItemIcon>
                    <ListItemText
                        primary={'Description'}
                        secondary={props.info.description ? props.info.description : 'N/A'}
                    />
                </ListItemButton>
            </List>
        </DialogContent>
    </Dialog>
}

export default Character;