import '../styles/HomePage.scss'
import {AppBar, Box, Button, IconButton, Toolbar, Typography} from "@mui/material";

const HomePage = () => {
    const navItems = ['Home', 'About', 'Contact', 'Events'];
    return (

        <span>
            <AppBar component="nav" className="app-bar">
        <Toolbar>
          <IconButton
              color="inherit"
              aria-label="open drawer"
              edge="start"
              sx={{ mr: 2, display: { sm: 'none' } }}
          >
          </IconButton>
          <Typography
              variant="h6"
              component="div"
              sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } }}
          >
            MUI
          </Typography>
          <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
            {navItems.map((item) => (
                <Button key={item} sx={{ color: '#fff' }}>
                    {item}
                </Button>
            ))}
          </Box>
        </Toolbar>
      </AppBar>
        </span>
    );
}

export default HomePage