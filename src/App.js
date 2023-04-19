import * as React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { NavLink } from "react-router-dom";
import { Navbar } from "react-bootstrap";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import MenuItem from "@mui/material/MenuItem";
import Menu from '@mui/material/Menu';
import Media from "react-media";

function App() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div className="navigation">
      <Media
        query={{ minWidth: 500 }}
        render={() => (
          <Navbar sticky="top">
            <div className="container">
              <NavLink className="navbar-brand" to="/">
                <img src="mylogo.png" alt="My logo" width="60px" />
              </NavLink>
              <div>
                <ul className="navbar-nav ml-auto">
                  <li className="nav-item">
                    <NavLink className="nav-link" to="/">
                      Home
                    </NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink className="nav-link" to="/about">
                      About
                    </NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink className="nav-link" to="/contact">
                      Contact
                    </NavLink>
                  </li>
                </ul>
              </div>
            </div>
          </Navbar>
        )}
      />
      <Media
        query={{ maxWidth: 500 }}
        render={() => (
          <Navbar sticky="top">
            <div className="container">
              <NavLink className="navbar-brand" to="/">
                <img src="mylogo.png" alt="My logo" width="60px" />
              </NavLink>
            </div>
            <ul className="navbar-nav ml-auto">
              <Container maxWidth="lg">
                <IconButton
                  id="ham-button"
                  aria-controls={open ? "ham-menu" : undefined}
                  aria-haspopup="true"
                  aria-expanded={open ? "true" : undefined}
                  onClick={handleClick}
                >
                  <MenuIcon />
                </IconButton>
                <Menu
                  id="demo-positioned-menu"
                  aria-labelledby="demo-positioned-button"
                  anchorEl={anchorEl}
                  open={open}
                  onClose={handleClose}
                  anchorOrigin={{
                    vertical: "top",
                    horizontal: "left",
                  }}
                  transformOrigin={{
                    vertical: "top",
                    horizontal: "left",
                  }}
                >
                  <MenuItem onClick={handleClose}><NavLink to="/">Home</NavLink></MenuItem>
                  <MenuItem onClick={handleClose}><NavLink to="/about">About</NavLink></MenuItem>
                  <MenuItem onClick={handleClose}><NavLink to="/contact">Contact</NavLink></MenuItem>
                </Menu>
              </Container>
            </ul>
          </Navbar>
        )}
      />
    </div>
  );
}

export default App;
