import React from "react";
import { AppBar, Toolbar, IconButton, List, ListItem, ListItemText, Container } from "@material-ui/core";
import { Home } from "@material-ui/icons";

const header = () => {

    const Mystyle = {
        display: `flex`,
        justifyContent: `space-between`,
    }
    const Mystyle2 = {
        textDecoration: `none`,
        textTransform: `uppercase`,
        color: `white`
    }



const navLinks = [
  { title: `Home`, path: `/Home` },
  { title: `My Portfolio`, path: `/My-Portfolio` },
  { title: `Clients`, path: `/Clients` },
  { title: `Get In touch`, path: `/Get-In-touch` }
]

    return (
        <AppBar position="static" style={{background:"white", color:"black"}}>
            <Toolbar>
                <Container style={Mystyle}>
                    <IconButton edge="start" color="inherit" aria-label="home">
                        <Home fontSize="large" />
                    </IconButton>
                    <List component="nav" aria-labelledby="main navigation"
                    style={Mystyle}>
                    {navLinks.map(({ title, path }) => (
                        <a href={path} key={title}
                        style={Mystyle2}>
                            <ListItem button>
                                <ListItemText primary={title} style={{color: "black" }}/>
                            </ListItem>
                        </a>
                    ))}
                    </List>
                </Container>
            </Toolbar>
        </AppBar>
    );

}

export default header;