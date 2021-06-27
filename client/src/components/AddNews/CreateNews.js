import React, { useState } from "react";
import {
  Grid,
  Paper,
  TextField,
  Button,
  ButtonGroup,
  Select,
  MenuItem,
} from "@material-ui/core";
import "./CreateNews.scss";
import Box from "@material-ui/core/Box";
import IconButton from "@material-ui/core/IconButton";
import PhotoCamera from "@material-ui/icons/PhotoCamera";
import Videocam from "@material-ui/icons/Videocam";
import axios from "axios";
import Navbar from "../Navbar";

const defaultProps = {
  bgcolor: "background.paper",
  border: 1,
  style: { width: "12rem", height: "3rem" },
};

function CreateNews() {
  const [title, setTitle] = useState("");
  const [image, setImage] = useState({});
  const [video, setVideo] = useState({});
  const [content, setContent] = useState("");
  const [category, setCategory] = useState("");
  const [newsCity, setNewsCity] = useState("");
  const [Reporter_name, setReporter_name] = useState("");

  const paperStyle = { padding: "30px 20px", width: 700, margin: "20px auto" };
  const headerStyle = { margin: 0 };
  const gridStyle = { margin: "15px" };
  const textStyle = { margin: "10px" };

  const imageHandler = (e) => {
    setImage(e.target.files[0]);
  };

  const videoHandler = (e) => {
    setVideo(e.target.files[0]);
  };

  const handleSubmit = (e) => {
    const formData = new FormData();
    formData.append("title", title);
    formData.append("image", image);
    formData.append("video", video);
    formData.append("content", content);
    formData.append("category", category);
    formData.append("newsCity", newsCity);
    formData.append("Reporter_name", Reporter_name);

    axios.post("http://localhost:3001/newsBlogs/", formData).then(() => {
      console.log(formData);
    });
  };

  return (
    <>
      <Navbar />

      <Grid>
        <Paper elevation={10} style={paperStyle}>
          <Grid align="center">
            <h2 style={headerStyle} data-testid="header">
              Create News
            </h2>
          </Grid>
          <Grid align="center" style={gridStyle}>
            <TextField
              label="Enter Title"
              variant="outlined"
              onChange={(e) => setTitle(e.target.value)}
              style={textStyle}
              fullWidth
            />
            <TextField
              label="Report Your News here"
              variant="outlined"
              onChange={(e) => setContent(e.target.value)}
              multiline
              rows={10}
              rowsMax={20}
              fullWidth
              style={textStyle}
              required
            />
            <TextField
              label="Enter City"
              variant="outlined"
              onChange={(e) => setNewsCity(e.target.value)}
              style={textStyle}
              fullWidth
            />
            <TextField
              label="Enter your Name"
              variant="outlined"
              onChange={(e) => setReporter_name(e.target.value)}
              style={textStyle}
              fullWidth
            />
            {/**/}
            <ButtonGroup color="primary" variant="outlined" style={gridStyle}>
              <Box borderColor="grey.500" {...defaultProps}>
                <input
                  type="file"
                  name="image"
                  id="icon-button-photo"
                  accept="image/*"
                  multiple={false}
                  onChange={imageHandler}
                />
                <label htmlFor="icon-button-photo">
                  Add image
                  <IconButton color="primary" component="span">
                    <PhotoCamera />
                  </IconButton>
                </label>
              </Box>
              <Box borderColor="grey.500" {...defaultProps}>
                <input
                  type="file"
                  name="video"
                  accept="video/*"
                  capture="camcorder"
                  id="icon-button-video"
                  onChange={videoHandler}
                />
                <label htmlFor="icon-button-video">
                  Add Video
                  <IconButton color="primary" component="span">
                    <Videocam />
                  </IconButton>
                </label>
              </Box>
            </ButtonGroup>

            <Select
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              displayEmpty
              variant="outlined"
            >
              <MenuItem value="">Category</MenuItem>
              <MenuItem value="Entertainment">Entertainment</MenuItem>
              <MenuItem value="Sports">Sports</MenuItem>
              <MenuItem value="Politics">Politics</MenuItem>
              <MenuItem value="Scam">Scam</MenuItem>
            </Select>

            <div className="formSubmitButton">
              <Button
                color="primary"
                onClick={handleSubmit}
                variant="contained"
                style={textStyle}
              >
                Create Post
              </Button>
            </div>
          </Grid>
        </Paper>
      </Grid>
    </>
  );
}

export default CreateNews;
