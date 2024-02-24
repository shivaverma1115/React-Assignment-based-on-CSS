import React from 'react'
import { Box, Stack } from '@mui/material'
import { IoHome } from "react-icons/io5";
import { GrGallery } from "react-icons/gr";
import { IoMdMail } from "react-icons/io";
import { AiFillExclamationCircle } from "react-icons/ai";

const Navbar = () => {
    return (
        <Box>
            <Stack spacing={3} direction={'row'} bgcolor={'#333333'} color={'white'} p={1} >
                <Stack direction={'row'} spacing={1} >
                    <IoHome />
                    <Box>Home</Box>
                </Stack>
                <Stack direction={'row'} spacing={1} >
                    <GrGallery />
                    <Box>Gallery</Box>
                </Stack>
                <Stack direction={'row'} spacing={1} >
                    <IoMdMail />
                    <Box>Mail</Box>
                </Stack>
                <Stack direction={'row'} spacing={1} >
                    <AiFillExclamationCircle />
                    <Box>About</Box>
                </Stack>
            </Stack>
        </Box>
    )
}

export default Navbar
