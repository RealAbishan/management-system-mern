import {Container, AppBar, Typography, Grow, Grid} from '@material-ui/core';
import Student from './Components/showStudents/showStudent.js';
import Create from './Components/createStudent/createStudent.js'
import useStyles from './style';

function App() {
  const classes = useStyles();
  return (
    <div  className="App">
      <Container className={classes.container}>
          <Typography className={classes.heading}>
            Student Admission for 2020/21 Acadamic Year
          </Typography>

        <Grow in>
          <Container>
            <Grid container justify="space-between" alignItems="stretch">
              <Grid item xs={12} sm={7}>
                <AppBar className={classes.appBar} position="static">
                  <Student/>
                </AppBar>
              </Grid>
              <Grid item xs={12} sm={4}>
                <AppBar className={classes.appBar} position="static">
                    <Create/>
                </AppBar>
              </Grid>
            </Grid>
          </Container>
        </Grow>
      </Container>
    </div>
  );
}

export default App;
