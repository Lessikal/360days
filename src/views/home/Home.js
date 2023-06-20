import React, { useState } from 'react';
import {
  FormControl,
  InputAdornment,
  TextField,
  createStyles,
  makeStyles,
  Button,
  MenuItem,
  ListItemIcon,
  ListItemText,
} from "@material-ui/core";
import { IconCalendarEvent, IconFolders } from '@tabler/icons';
import IMG from 'src/assets/images/img.png';

import { Grid, Card, Typography } from '@mui/material';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { CalendarPicker } from '@mui/x-date-pickers/CalendarPicker';
import SearchIcon from "@material-ui/icons/Search";
import ClearIcon from "@material-ui/icons/Clear";
import "./Home.css";

const useStyles = makeStyles(() => {
  return createStyles({
    search: {
      margin: "0",
    }
  });
});

const TypeSearch = () => {
  const { search } = useStyles();

  const [showClearIcon, setShowClearIcon] = useState("none");

  const handleChange = (e) => {
    setShowClearIcon(e.target.value === "" ? "none" : "flex");
  };

  const handleClick = () => {
    console.log("clicked the clear icon...");
  };

  return (
    <div className='PageContaner'>
      <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
        <Grid item xs={3}></Grid>
        <Grid item xs={6}>
          <FormControl className={search}>
            <TextField
              sx={{
                '& .MuiOutlinedInput-input::placeholder': {
                  color: "red",
                  opacity: '0.8',
                },
                '& .MuiOutlinedInput-input.Mui-disabled::placeholder': {
                  color: "red",
                  opacity: '1',
                },
                '& .Mui-disabled .MuiOutlinedInput-notchedOutline': {
                  borderColor: "red",
                },
              }}
              className="searchbar"
              size="small"
              variant="outlined"
              placeholder="search"
              onChange={handleChange}
              InputProps={{
                endAdornment: (
                  <>
                    <InputAdornment position="end" style={{ display: showClearIcon }} onClick={handleClick}>
                      <ClearIcon />
                    </InputAdornment>
                    <InputAdornment position="start">
                      <SearchIcon />
                    </InputAdornment>
                  </>
                ),
              }}
            />
          </FormControl>
        </Grid>
        <Grid item xs={3}></Grid>
      </Grid>
      <div className='MainPageContainer'>
        <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
          <Grid item xs={3}>
            <Card>
              <div className='Card globalFont'>
                <LocalizationProvider dateAdapter={AdapterDayjs}>
                  <CalendarPicker />
                </LocalizationProvider>
              </div>
            </Card>
            <Card>
              <div className='Card aligncenter'>
                <Button variant="contained" target="_blank" className="redbutton globalFont">
                  Achives
                </Button>
                <div className='aligncenter'>
                  <Typography className='bagegray globalFont'>May 2023 [433]</Typography>
                  <Typography className='bagegray globalFont'>May 2023 [433]</Typography>
                  <Typography className='bagegray globalFont'>May 2023 [433]</Typography>
                  <Typography className='bagegray globalFont'>May 2023 [433]</Typography>
                  <Typography className='bagegray globalFont'>May 2023 [433]</Typography>
                  <Typography className='bagegray globalFont'>May 2023 [433]</Typography>
                </div>
              </div>
            </Card>
          </Grid>
          <Grid item xs={6}>
            <Card>
              <div className='Card aligncenter'>
                <Button variant="contained" target="_blank" className="redbutton globalFont">
                  Smash Vision Video(May 31 2023)
                </Button>
              </div>
              <div className='Card'>
                <MenuItem>
                  <ListItemIcon>
                    <IconCalendarEvent width={20} />
                  </ListItemIcon>
                  <ListItemText className="globalFont">May 31 2023</ListItemText>
                </MenuItem>
              </div>
              <div className='Card'>
                <Typography className='globalFont'>
                  Set up and configure the development environment
                  Create a Laravel project and set up dependencies
                  Develop and implement database schema using MySQL
                  Build RESTful APIs for CRUD operations
                  Implement user authentication and authorization
                  Develop a scalable and efficient API architecture
                  Write unit tests for the backend code
                  Set up and configure the development environment
                  Create a Laravel project and set up dependencies
                  Develop and implement database schema using MySQL
                  Build RESTful APIs for CRUD operations
                  Implement user authentication and authorization
                  Develop a scalable and efficient API architecture
                  Write unit tests for the backend code
                </Typography>
              </div>

              <div className='Card aligncenter'>
                <Typography className='globalFont' style={{ textAlign: "left" }}>
                  This content is for members only
                </Typography>
                <Button variant="contained" target="_blank" className="borderradius20button globalFont">
                  <IconFolders />
                  Smash Vision Video, VIDEO
                </Button>
              </div>
            </Card>
            <Card>
              <div className='Card aligncenter'>
                <Button variant="contained" target="_blank" className="redbutton">
                  Smash Vision Video(May 31 2023)
                </Button>
              </div>
              <div className='Card'>
                <MenuItem>
                  <ListItemIcon>
                    <IconCalendarEvent width={20} />
                  </ListItemIcon>
                  <ListItemText>May 31 2023</ListItemText>
                </MenuItem>
              </div>
              <div className='Card'>
                <Typography>
                  Set up and configure the development environment
                  Create a Laravel project and set up dependencies
                  Develop and implement database schema using MySQL
                  Build RESTful APIs for CRUD operations
                  Implement user authentication and authorization
                  Develop a scalable and efficient API architecture
                  Write unit tests for the backend code
                  Set up and configure the development environment
                  Create a Laravel project and set up dependencies
                  Develop and implement database schema using MySQL
                  Build RESTful APIs for CRUD operations
                  Implement user authentication and authorization
                  Develop a scalable and efficient API architecture
                  Write unit tests for the backend code
                </Typography>
              </div>

              <div className='Card aligncenter'>
                <Typography style={{ textAlign: "left" }}>
                  This content is for members only
                </Typography>
                <Button variant="contained" target="_blank" className="borderradius20button">
                  <IconFolders />
                  Smash Vision Video, VIDEO
                </Button>
              </div>
            </Card>
          </Grid>
          <Grid item xs={3}>
            <Card>
              <div className='Card aligncenter'>
                <Typography className='globalFont'>
                  1 Month Subscribtion
                </Typography>
                <Button variant="contained" target="_blank" className="redbutton globalFont">
                  Subscribe
                </Button>
              </div>
              <div className='Card aligncenter'>
                <img src={IMG} alt='' style={{ width: "-webkit-fill-available" }} />
              </div>
              <div className='Card aligncenter globalFont'>
                <Typography>
                  5+1 Month Subscribtion
                </Typography>
                <Button variant="contained" target="_blank" className="redbutton globalFont">
                  Subscribe
                </Button>
              </div>
              <div className='Card aligncenter'>
                <img src={IMG} alt='' style={{ width: "-webkit-fill-available" }} />
              </div>
            </Card>
            <Card>
              <div className='Card aligncenter'>
                <Button variant="contained" target="_blank" className="redbutton globalFont">
                  Categories
                </Button>
                <div className='aligncenter'>
                  <Typography className='bagegray globalFont'>4 club video5</Typography>
                  <Typography className='bagegray globalFont'>8th wonder pool 543</Typography>
                  <Typography className='bagegray globalFont'>8th wonder pool lodin 543</Typography>
                  <Typography className='bagegray globalFont'>8th wonder video317</Typography>
                  <Typography className='bagegray globalFont'>8th wonder video317wonder</Typography>
                  <Typography className='bagegray globalFont'>8th wonde wonder</Typography>
                </div>
              </div>
            </Card>
          </Grid>
        </Grid>
      </div>
    </div>
  );
};

export default TypeSearch;
