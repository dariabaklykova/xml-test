import { NodeList } from '../components'
import { Box, Typography } from '@mui/material'
import { list } from '../assets/example'

export const Main = () =>
    <Box sx={{ padding: '100px 50px 100px' }}>
        <Typography variant='h3'>Tree: </Typography>
        <NodeList nodes={list} />
    </Box>
