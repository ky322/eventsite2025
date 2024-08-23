import { AppBar, Typography, Toolbar, Stack, Container, Box, Menu, MenuItem, IconButton } from '@mui/material';
import { styled } from '@mui/material/styles';
import MenuIcon from "@mui/icons-material/Menu";
import { Link } from "react-scroll";
import { useState } from 'react';

const APP_BAR_MOBILE = 64;
const APP_BAR_DESKTOP = 88;

const ScrollLink = ({ to, children }) => {
  return (
    <Link
      activeClass="active"
      to={to}
      spy={false}
      smooth={true}
      offset={-150}
      duration={500}
    >
      <Typography sx={{ color: "black", textDecoration: "underline" }}> {/*probably need to restyle links */}
        {children}
      </Typography>
    </Link>
  );
};

const ToolbarStyle = styled(Toolbar)(({ theme }) => ({
  height: APP_BAR_MOBILE,
  transition: theme.transitions.create(['height', 'background-color'], {
    easing: theme.transitions.easing.easeInOut,
    duration: theme.transitions.duration.shorter
  }),
  [theme.breakpoints.up('md')]: {
    height: APP_BAR_DESKTOP
  }
}));

export default function Navbar() {
  const [anchorElNav, setAnchorElNav] = useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
    <AppBar sx={{ backgroundColor: "transparent" }} elevation={0}>
      <Container maxWidth="xl">
        <ToolbarStyle style={{ flex: 1, float: "right" }}>
          <Box sx={{ flexGrow: 1, display: { xs: "flex-end", md: "none" } }}>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "right",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: "block", md: "none" },
              }}
            >
              <MenuItem key="About" onClick={handleCloseNavMenu}>
                <a href="#about">
                  <Typography> About </Typography>
                </a>
              </MenuItem>
              <MenuItem key="Tracks" onClick={handleCloseNavMenu}>
                <a href="#tracks">
                  <Typography> Tracks </Typography>
                </a>
              </MenuItem>
              <MenuItem key="FAQ" onClick={handleCloseNavMenu}>
                <a href="#faq">
                  <Typography> FAQ </Typography>
                </a>
              </MenuItem>
              <MenuItem key="Sponsors" onClick={handleCloseNavMenu}>
                <a href="#sponsors">
                  <Typography> Sponsors </Typography>
                </a>
              </MenuItem>
              <MenuItem key="Speakers" onClick={handleCloseNavMenu}>
                <a href="#speakers">
                  <Typography> Speakers </Typography>
                </a>
              </MenuItem>
              <MenuItem key="Apply" onClick={handleCloseNavMenu}>
                <a href="https://apply.bigredhacks.com">
                  <Typography> Apply </Typography>
                </a>
              </MenuItem>
            </Menu>
          </Box>
          <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
            <Stack direction="row" alignItems="right" color="white" spacing={6}>
              <ScrollLink to="about">About</ScrollLink>
              <ScrollLink to="tracks">Tracks</ScrollLink>
              <ScrollLink to="faq">FAQ</ScrollLink>
              <ScrollLink to="sponsors">Sponsors</ScrollLink>
              <ScrollLink to="sponsors">Speakers</ScrollLink>
              <a href="https://apply.bigredhacks.com">
                <Typography fontWeight="bold">Apply</Typography>
              </a>
            </Stack>
          </Box>
        </ToolbarStyle>
        <ToolbarStyle style={{ flex: 1, float: "left" }}>
          <Box sx={{ flexGrow: 1, display: { xs: "flex-end", md: "none" } }}>
            <IconButton
              size="large"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
          </Box>
        </ToolbarStyle>
      </Container>
      {/*<ToolbarStyle style={{ flex: 1, justifyContent: "flex-start" }}>
        <img src="/brh-logo.png" style={{ height: "2rem", width: "2rem", padding: "0.75rem" }} />
      </ToolbarStyle>
      <ToolbarStyle style={{ flex: 1, justifyContent: "flex-end" }}>
        <Stack direction="row" alignItems="center" color="white" spacing={5}>
          <a href="#about"><Typography>About</Typography></a>
          <a href="#tracks"><Typography>Tracks</Typography></a>
          <a href="#faq"><Typography>FAQ</Typography></a>
          <a href="#sponsors"><Typography>Sponsors</Typography></a>
          <a href="#speakers"><Typography>Speakers</Typography></a>
          <Button variant="contained" color="primary" size="large">
            <a href='https://apply.bigredhacks.com/'>
              <Typography fontWeight="bold" color={'white'}>
                Apply
              </Typography>
            </a>
          </Button>
        </Stack>
      </ToolbarStyle>*/}
    </AppBar >
  )
}