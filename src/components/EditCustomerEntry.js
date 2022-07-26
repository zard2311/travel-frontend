import React, { useState, useEffect } from 'react';
    
    // mui components
    import {
        Typography,
        TextField,
        Box,
        Button,
        Paper
    } from '@mui/material';
    
    // mui icons
    import { Edit } from '@mui/icons-material';
    
    // custom components
    import BottomNav from './BottomNav';
    
    //axios
    import { useTravelContext } from '../contexts/TravelContext';
    export default function EditCustomerEntry() {
        // input data
        const [name, setName] = useState("");
        const [phone, setPhone] = useState("");
        const [email, setEmail] = useState("");
        const [address, setAddress] = useState("");
        // edit req
        const { updateCustomer, customerId } = useTravelContext();
        const data = JSON.stringify({
            "data": {
                "name": name,
                "phone": phone,
                "email": email,
                "address": address
            }
        });
        const handleEditCustomer = () => {
            updateCustomer(customerId, data);
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
                        Edit Customer entry
                    </Typography>
                    <TextField
                        required
                        id="filled-name"
                        label="Name"
                        variant="outlined"
                        onChange={(e)=>setName(e.target.value)}
                    />
                    <TextField
                        required
                        id="filled-phone"
                        label="Phone"
                        variant="outlined"
                        onChange={(e)=>setPhone(e.target.value)}
                    />
                    <TextField
                        required
                        id="filled-email-input"
                        label="Email"
                        variant="outlined"
                        onChange={(e)=>setEmail(e.target.value)}
                    />
                    <TextField
                        required
                        id="filled-address-input"
                        label="Address"
                        variant="outlined"
                        onChange={(e)=>setAddress(e.target.value)}
                    />
                </div>
                <div>
                    <Button variant="outlined" onClick={handleEditCustomer} startIcon={<Edit />}>
                        Edit Customer Entry
                    </Button>
                </div>
                <Paper sx={{ position: 'fixed', bottom: 0, left: 0, right: 0 }} elevation={3}>
                    <BottomNav/>
                </Paper>
            </Box>
        );
    }