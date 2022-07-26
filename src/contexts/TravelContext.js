import React, { createContext, useContext, useEffect, useState } from 'react';
import http from '../http';
const TravelContext = createContext();

export const useTravelContext = () => {
    return useContext(TravelContext);
};

export const TravelProvider = ({children}) => {
    const [customers, setCustomers] = useState("");
    const [nav_value, set_nav_value] = useState("CustomerList");
    const [customerId, setCustomerId] = useState("");
    
    // add new Customer
    const createNewCustomer = async (data) => {
        await http.post("/api/customers", data);
    };
    // update a customer entry
    const updateCustomer = async (customerId, data) => {
        await http.put(`/api/customers/${customerId}`, data);
    };
    // delete a customer entry
    const deleteCustomer = async (customerId) => {
        await http.delete(`/api/customers/${customerId}`);
    };
    // change navigation value
    const changeNavValue = (value) => {
        set_nav_value(value);
    };
    // get customer id value
    const getCustomerId = (id) => {
        setCustomerId(id);
    };

    useEffect(()=>{
        const readAllCustomers = async () => {
            const response = await http.get("/api/customers");
            const responseArr = Object.values(response.data.data);
            setCustomers(responseArr);
        };
        return readAllCustomers;
    }, []);

    const value = {
        createNewCustomer,
        customers,
        updateCustomer,
        deleteCustomer,
        changeNavValue,
        nav_value,
        getCustomerId,
        customerId
    };

    // context provider
    return(
        <TravelContext.Provider value={value}>
            {children}
        </TravelContext.Provider>
    )
}; 