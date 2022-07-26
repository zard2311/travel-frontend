import React, { useState } from 'react';
    
// mui components
import {
    Typography,
    TextField,
    Box,
    Button,
    Paper
} from '@mui/material';

// icons components
import { Add } from '@mui/icons-material';

// custom components
import BottomNav from './BottomNav';
import { useTravelContext } from '../contexts/TravelContext';
export default function CreateCustomerEntry() {
    // input data
    const [name, setName] = useState("");
    const [phone, setPhone] = useState("");
    const [email, setEmail] = useState("");
    const [address, setAddress] = useState("");

    // axios
    const { createNewCustomer } = useTravelContext();
    const data = JSON.stringify({
        "data": {
            "name": name,
            "phone": phone,
            "email": email,
            "address": address
        }
    })
    const handleCreateNewCustomer = () => {
        createNewCustomer(data);
    };
    return (
        <Box
            component="form"
            sx={{
                '& .MuiTextField-root': { m: 1, width: '50ch' },
                display: 'flex',
                flexDirection: 'column'
            }}
            noValidate
            autoComplete="off"
        >
            <div>
                <Typography variant="h3" gutterBottom component="div">
                    Add new Customer entry
                </Typography>
                <TextField
                    required
                    id="filled-name"
                    label="Name"
                    variant="filled"
                    onChange={(e)=>setName(e.target.value)}
                />
                <TextField
                    required
                    id="filled-phone"
                    label="Phone"
                    variant="filled"
                    onChange={(e)=>setPhone(e.target.value)}
                />
                <TextField
                    required
                    id="filled-email-input"
                    label="Email"
                    variant="filled"
                    onChange={(e)=>setEmail(e.target.value)}
                />
                <TextField
                    required
                    id="filled-address-input"
                    label="Address"
                    variant="filled"
                    onChange={(e)=>setAddress(e.target.value)}
                />
            </div>
            <div>
                <Button onClick={handleCreateNewCustomer} variant="outlined" startIcon={<Add />}>
                    Add Customer Entry
                </Button>
            </div>
            <Paper sx={{ position: 'fixed', bottom: 0, left: 0, right: 0 }} elevation={3}>
                <BottomNav/>
            </Paper>
        </Box>
    );
}