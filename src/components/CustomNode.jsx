import { useMemo } from "react";
import ListItemText from '@mui/material/ListItemText';
import ListItemButton from '@mui/material/ListItemButton';
import Box from '@mui/material/Box'
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';

export const CustomNode = ({ node: { id, droppable, parent }, onToggle, depth, isOpen }) => {
    const handleToggle = (e) => {
        e.stopPropagation();
        onToggle(id);
    };

    const filter = useMemo(() => depth ? 1 - (depth * 0.02) : 1, [depth])
    const pl = useMemo(() => depth ? depth * 4 : 1, [depth])
    const ml = useMemo(() => depth ? depth * 2 : 0, [depth])
    const background = useMemo(() => depth ? '#fafafa' : '#ffffff', [depth])

    return (
        <Box sx={{ background, filter: `brightness(${filter})`, mt: !depth ? '16px' : '0px' }}>
            {droppable ? (
                <ListItemButton onClick={onToggle} sx={{
                    background: '#fafafa', filter: `brightness(${filter})`, pl
                }}>
                    <ListItemText primary={`id ${id} parent ${parent}`} />
                    {isOpen ? <ExpandLess /> : <ExpandMore />}
                </ListItemButton>
            ) :
                < ListItemText primary={`id ${id} parent ${parent}`} sx={{ padding: '8px 16px', margin: 0, ml }} />}
        </Box>
    );
};
