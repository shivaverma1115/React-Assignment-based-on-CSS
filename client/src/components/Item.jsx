import React from 'react'
import { Box, Stack } from '@mui/material'
import Img from '../assets/item.jpg'

const Item = () => {
    return (
        <Stack width={'fit-content'}spacing={0} >
            <Box p={0}m={0} borderRadius={10}>
                <img style={{borderRadius:'20px 20px 0 0'}} src={Img} />
            </Box>
            <Box px={2}py={0}m={0} borderRadius={'0 0 20px 20px'} bgcolor={'white'}>
                <h3>Random Title 1</h3>
                <p>$ 19.99</p>
            </Box>
        </Stack>
    )
}

export default Item
