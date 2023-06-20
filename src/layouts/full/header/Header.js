import React from 'react';
import { AppBar, Toolbar, styled, Stack, IconButton, Button } from '@mui/material';
import PropTypes from 'prop-types';

// components
import Profile from './Profile';
import { IconMenu } from '@tabler/icons';

const Header = (props) => {

  // const lgUp = useMediaQuery((theme) => theme.breakpoints.up('lg'));
  // const lgDown = useMediaQuery((theme) => theme.breakpoints.down('lg'));


  const AppBarStyled = styled(AppBar)(({ theme }) => ({
    boxShadow: 'none',
    background: theme.palette.background.paper,
    justifyContent: 'center',
    backdropFilter: 'blur(4px)',
    [theme.breakpoints.up('lg')]: {
      minHeight: '70px',
    },
  }));
  const ToolbarStyled = styled(Toolbar)(({ theme }) => ({
    width: '100%',
    color: theme.palette.text.secondary,
  }));

  return (
    <AppBarStyled position="sticky" color="default" style={{ backgroundColor: "#0E1432" }}>
      <ToolbarStyled>
        <IconButton
          color="inherit"
          aria-label="menu"
          onClick={props.toggleMobileSidebar}
          sx={{
            display: {
              lg: "none",
              xs: "inline",
            },
          }}
        >
          <IconMenu width="20" height="20" />
        </IconButton>

        {/* <IconButton
          size="large"
          aria-label="show 11 new notifications"
          color="inherit"
          aria-controls="msgs-menu"
          aria-haspopup="true"
          sx={{
            ...(typeof anchorEl2 === 'object' && {
              color: 'primary.main',
            }),
          }}
        >
          <Badge variant="dot" color="primary">
            <IconBellRinging size="21" stroke="1.5" />
          </Badge>

        </IconButton> */}
        <div >
          <Button variant="contained" target="_blank" className="headerbtn">
            Home
          </Button>
          <Button variant="contained" target="_blank" className="headerbtn">
            About
          </Button>
          <Button variant="contained" target="_blank" className="headerbtn">
            Contact
          </Button>
          <Button variant="contained" target="_blank" className="headerbtn">
            Subscribe
          </Button>
          <Button variant="contained" target="_blank" className="headerbtn">
            Audio
          </Button>
          <Button variant="contained" target="_blank" className="headerbtn">
            Video
          </Button>
          <Button variant="contained" target="_blank" className="headerbtn">
            Join Us
          </Button>
          <Button variant="contained" target="_blank" className="headerbtn">
            DMCA
          </Button>
          <Button variant="contained" target="_blank" className="headerbtn">
            Disclaimers
          </Button>
        </div>
        <Stack spacing={1} direction="row" alignItems="center">
          <Profile />
        </Stack>

      </ToolbarStyled>
    </AppBarStyled>
  );
};

Header.propTypes = {
  sx: PropTypes.object,
};

export default Header;
