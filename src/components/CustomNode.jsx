import { useMemo } from "react";
import Typography from "@mui/material/Typography";
import ArrowRightIcon from "@mui/icons-material/ArrowRight";
import ListItemText from '@mui/material/ListItemText';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import Collapse from '@mui/material/Collapse';
import Box from '@mui/material/Box'
import InboxIcon from '@mui/icons-material/MoveToInbox';
// import DraftsIcon from '@mui/icons-material/Drafts';
// import SendIcon from '@mui/icons-material/Send';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
// import StarBorder from '@mui/icons-material/StarBorder';

// import { TypeIcon } from "./TypeIcon";
// import styles from "./Custommodule.css";

export const CustomNode = ({ node: { id, text, droppable, parent }, onToggle, depth, isOpen }) => {
    const indent = depth * 24;

    const handleToggle = (e) => {
        e.stopPropagation();
        onToggle(id);
    };

    const filter = useMemo(() => depth ? 1 - (depth * 0.02) : 1, [])
    const pl = useMemo(() => depth ? depth * 4 : 1, [])
    const ml = useMemo(() => depth ? depth * 2 : 0)
    const background = useMemo(() => depth ? '#fafafa' : '#ffffff')

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
