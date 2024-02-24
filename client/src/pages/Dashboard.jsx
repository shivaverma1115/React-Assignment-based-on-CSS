import React from 'react'
import Navbar from '../components/Navbar'
import Item from '../components/Item'
import { Box, Grid } from '@mui/material'

const Dashboard = () => {
    const arr = [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, , 1, 1, 1, 1, 1, 1, 1];
    return (
        <Box bgcolor={'#f4f4f4'} minHeight={'100vh'} >
            <Navbar />
            {
                arr.map((ele, i) => {
                    return <Grid gridTemplateRows={'repeat(100px,1fr)'} > 
                        <Item />
                    </Grid>
                })
            }
        </Box>
    )
}

export default Dashboard
