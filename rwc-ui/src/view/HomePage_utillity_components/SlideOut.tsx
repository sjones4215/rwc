import React from "react"
import { Drawer} from "@mui/material";
import { useState } from "react";
import MenuIcon from '@mui/icons-material/Menu';

export const SlideOut = () => {
    const [state, setState] = useState(false);


    const toggleDrawer = () => {
        if(state) {
            setState(false)
        } else {
            setState(true)
        }
    }

    return (
        <div>
            <MenuIcon onClick={toggleDrawer} style={{ color: 'white' }}>test</MenuIcon>
            <Drawer
                anchor={'right'}
                open={state}
                onClose={toggleDrawer}
            >
                <div>It Works</div>
            </Drawer>
        </div>
    )
};