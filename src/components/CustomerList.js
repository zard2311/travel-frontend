import * as React from 'react';
    
// mui components
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import List from '@mui/material/List';
import Paper from '@mui/material/Paper';

// custom components
import BottomNav from './BottomNav';
import CustomerListItem from './CustomerListItem';

// data
import { useTravelContext } from '../contexts/TravelContext';

// icons
import {
    PersonOutline,
    PhoneOutlined,
    EmailOutlined,
    HomeOutlined,
    ShoppingBagOutlined,
} from '@mui/icons-material';

export default function CustomerList() {
    const { customers } = useTravelContext();
    return (
        <Box sx={{ pb: 7 }}>
            <CssBaseline />
            <List>
                {
                    customers && customers.map(
                        ({id, attributes: {name, phone, email, address}}, i)=>(
                        <CustomerListItem
                            key={i}
                            id={id}
                            customerFieldData={[
                                {icon: <PersonOutline/>, attrib: name},
                                {icon: <PhoneOutlined/>, attrib: phone},
                                {icon: <EmailOutlined/>, attrib: email},
                                {icon: <HomeOutlined/>, attrib: address}
                            ]}
                        />
                    ))
                }
            </List>
            <Paper sx={{ position: 'fixed', bottom: 0, left: 0, right: 0 }} elevation={3}>
                <BottomNav/>
            </Paper>
        </Box>
    );
};