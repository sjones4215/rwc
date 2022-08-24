import {AppBar, IconButton, Toolbar, Typography} from "@mui/material";
import {SlideOut} from "./SlideOut";

export const SmallNavBar = () => {
 return(
        <AppBar>
            <Toolbar>
                <IconButton
                    size="large"
                    edge="start"
                    color="inherit"
                    aria-label="menu"
                    sx={{ mr: 2 }}
                >
                </IconButton>
                <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                   RWC
                </Typography>
                <SlideOut />
            </Toolbar>
        </AppBar>
 );
}