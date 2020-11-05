import {
    AppBar,
    Box,
    Select,
    MenuItem,
    Button,
    Typography,
    Card,
    CardContent,
    CardActions,
    Chip,
    Dialog,
    DialogTitle,
    DialogContent,
    DialogContentText,
    DialogActions,
} from '@material-ui/core'
import React, { useState } from 'react'

const UserLanding = (props) => {
    const [proffesion, setProfession] = useState('All')
    const [open, setOpen] = React.useState(false)

    const handleClickOpen = () => {
        setOpen(true)
    }

    const handleClose = () => {
        setOpen(false)
    }

    const selectFilter = (event) => {
        setProfession(event.target.value)
    }

    React.useEffect(() => props.getBusinesses(), [])

    return (
        <Box style={{ height: '100vh', width: '100vw' }}>
            <AppBar color="secondary" position="relative">
                <Select
                    value={proffesion}
                    onChange={selectFilter}
                    style={{ width: 200 }}
                >
                    <MenuItem value={'All'}>All</MenuItem>
                    <MenuItem value={'Landscaper'}>Landscaper</MenuItem>
                    <MenuItem value={'Electrician'}>Electrician</MenuItem>
                    <MenuItem value={'Plumber'}>Plumber</MenuItem>
                </Select>
            </AppBar>
            {/* <Button onClick={props.getBusinesses}>CLICK ME</Button> */}

            {props.businesses.map((item, id) => {
                let phone = ''

                const cleaned = ('' + item.phone).replace(/\D/g, '')
                const match = cleaned.match(/^(\d{3})(\d{3})(\d{4})$/)
                if (match) {
                    phone = '(' + match[1] + ') ' + match[2] + '-' + match[3]
                }

                if (proffesion === item.proffesion || proffesion === 'All') {
                    return (
                        <Box
                            style={{
                                width: '100vw',
                                display: 'flex',
                                justifyContent: 'center',
                            }}
                            key={item.business_name}
                        >
                            <Card
                                style={{
                                    width: 350,

                                    margin: 20,
                                    display: 'flex',
                                    justifyContent: 'center',
                                    flexDirection: 'column',
                                }}
                            >
                                <CardContent style={{ paddingBottom: 1 }}>
                                    <Typography variant="h5" component="h2">
                                        {item.business_name}
                                    </Typography>
                                    <Typography color="textSecondary">
                                        {item.proffesion}
                                    </Typography>

                                    <Chip
                                        label={`Address: ${item.business_address}`}
                                    />
                                    <Chip label={`Email: ${item.email}`} />
                                    <Chip label={`Phone: ${phone}`} />
                                </CardContent>
                                <CardActions>
                                    <Button
                                        size="small"
                                        onClick={handleClickOpen}
                                    >
                                        REQUEST SERVICE
                                    </Button>
                                </CardActions>
                            </Card>
                            <Dialog
                                open={open}
                                onClose={handleClose}
                                aria-labelledby="draggable-dialog-title"
                            >
                                <DialogTitle
                                    style={{ cursor: 'move' }}
                                    id="draggable-dialog-title"
                                >
                                    Subscribe
                                </DialogTitle>
                                <DialogContent>
                                    <DialogContentText>
                                        To subscribe to this website, please
                                        enter your email address here. We will
                                        send updates occasionally.
                                    </DialogContentText>
                                </DialogContent>
                                <DialogActions>
                                    <Button
                                        autoFocus
                                        onClick={handleClose}
                                        color="primary"
                                    >
                                        Cancel
                                    </Button>
                                    <Button
                                        onClick={handleClose}
                                        color="primary"
                                    >
                                        Subscribe
                                    </Button>
                                </DialogActions>
                            </Dialog>
                        </Box>
                    )
                }
            })}
        </Box>
    )
}

export default UserLanding
