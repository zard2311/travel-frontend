import * as React from 'react';
    
// core components
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';

// icons
import {
    Add,
    PeopleAltOutlined,
    ShoppingBagOutlined,
} from '@mui/icons-material';

// contexts
import { useTravelContext } from '../contexts/TravelContext';

export default function LabelBottomNavigation() {
    const { nav_value, changeNavValue } = useTravelContext();
    const handleChange = function (event, newValue) {
        changeNavValue(newValue);
    };
    return (
        <BottomNavigation showLabels value={nav_value} onChange={handleChange}>
            <BottomNavigationAction
                label="Customer"
                value="CustomerList"
                icon={<PeopleAltOutlined />}
            />
            <BottomNavigationAction
                label="Add Customer"
                value="AddCustomer"
                icon={<Add />}
            />
             <BottomNavigationAction
                label="Travel Package"
                value=""
                icon={<ShoppingBagOutlined />}
            />
            <BottomNavigationAction
                label="Add Travel Package"
                value="AddCustomer"
                icon={<Add />}
            />
        </BottomNavigation>
    );
};