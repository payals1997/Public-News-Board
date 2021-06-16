import React, { useState } from 'react'
import {
    Grid,
    Paper,
    TextField,
    Button,
    ButtonGroup,
    Select,
    MenuItem
} from "@material-ui/core";
import PhotoCamera from "@material-ui/icons/PhotoCamera";
import Videocam from "@material-ui/icons/Videocam";

function CreateNews() {
    const paperStyle = { padding: "30px 20px", width: 700, margin: "20px auto" };
    const headerStyle = { margin: 0 };
    const gridStyle = { margin: "15px" };
    const textStyle = { margin: "10px" };
    const [category, setCategory] = useState("")
    const updateVal = (e, val) => {
        setCategory(e.target.value)
    }
    return (
        <Grid>
            <Paper elevation={10} style={paperStyle}>
                <Grid align="center">
                    <h2 style={headerStyle}>Create News</h2>
                </Grid>
                <Grid align="center" style={gridStyle}>

                    <TextField label="Enter Title" variant="outlined" style={textStyle} fullWidth />
                    <TextField
                        label="Report Your News here"
                        variant="outlined"
                        multiline
                        rows={10}
                        rowsMax={20}
                        fullWidth
                        style={textStyle}
                    />
                    {/* <TextField label="Enter your Name" variant="outlined" style={textStyle} fullWidth /> */}
                    <ButtonGroup color="primary" variant="outlined" style={gridStyle}>
                        <Button endIcon={<PhotoCamera />}>
                            Image
                        </Button>
                        <Button endIcon={<Videocam />}>
                            Video
                        </Button>
                        <Select value={category} displayEmpty variant="outlined" onChange={updateVal}>
                            <MenuItem value="">Category</MenuItem>
                            <MenuItem value={1}>Entertainment</MenuItem>
                            <MenuItem value={2}>Sports</MenuItem>
                            <MenuItem value={3}>Politics</MenuItem>
                            <MenuItem value={4}>Scam</MenuItem>
                        </Select>
                    </ButtonGroup>
                    <Button color="primary" variant="contained" style={textStyle}>
                        Create Post
                    </Button>


                </Grid>

            </Paper>
        </Grid>
    )
}

export default CreateNews
