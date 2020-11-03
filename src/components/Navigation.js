import React from 'react'
import {
    AppBar,
    Grid,
    Typography,
    Avatar,
    Box,
    Toolbar,
} from '@material-ui/core'
import MenuIcon from '@material-ui/icons/Menu'
import pic from '../images/flufferNutter.jpg'
import useStyles from '../style'

const Navigation = (props) => {
    const classes = useStyles()
    return (
        <AppBar color="primary" position="relative">
            <Grid
                item
                container
                direction="row"
                justify="flex-start"
                alignItems="center"
            >
                <Grid item className={classes.avatarIcon}>
                    <Avatar alt="Fluffer Nutter" src={pic} />
                </Grid>
                <Grid item className={classes.navTitle}>
                    <Typography variant="h4">Carry On</Typography>
                </Grid>
                <Grid item className={classes.menuIconStyle}>
                    <MenuIcon />
                </Grid>
            </Grid>
        </AppBar>
    )
}

export default Navigation
