import { NodeList } from '../components'
import { Box, Typography } from '@mui/material'

const list = [
    {
        "id": 1,
        "parent": 0,
        "droppable": true,
        "text": "id 1 Parent 0"
    },
    {
        "id": 2,
        "parent": 1,
        "text": "id 2 Parent 1",
        "data": {
            "fileType": "csv",
            "fileSize": "0.5MB"
        }
    },
    {
        "id": 3,
        "parent": 1,
        "text": "id 3 Parent 1",
        "data": {
            "fileType": "text",
            "fileSize": "4.8MB"
        }
    },
    {
        "id": 4,
        "parent": 0,
        "droppable": true,
        "text": "id 4"
    },
    {
        "id": 8,
        "parent": 4,
        "droppable": false,
        "text": "id 8 Parent 4"
    },
    {
        "id": 5,
        "parent": 4,
        "droppable": true,
        "text": "id 5 Parent 4"
    },
    {
        "id": 6,
        "parent": 5,
        "text": "id 6 parent 5",
        "data": {
            "fileType": "image",
            "fileSize": "2.1MB"
        }
    },
    {
        "id": 7,
        "parent": 0,
        "text": "id 7 parent 0",
        "data": {
            "fileType": "image",
            "fileSize": "0.8MB"
        }
    }
]

export const Main = () =>
    <Box sx={{ padding: '100px 50px 100px' }}>
        <Typography variant='h3'>Three: </Typography>
        <NodeList nodes={list} />
    </Box>
