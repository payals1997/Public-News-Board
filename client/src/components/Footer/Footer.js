import { Container, Grid, Box, Link } from "@material-ui/core";
import FacebookIcon from "@material-ui/icons/Facebook";
import TwitterIcon from "@material-ui/icons/Twitter";
import InstagramIcon from "@material-ui/icons/Instagram";
// import { withStyles } from "@material-ui/core/styles";
// import clsx from 'clsx'

// const styles = {
//   container: {
//     // display: 'flex',
//     // minHeight: '100vh',
//     // flexDirection: 'column',
//     marginTop:(5% + '60px'),
//     bottom: 0,
//     // justifyContent: 'flex-end'
//     // alignItems: 'center'
    
//   }
// }


function Footer() {
  // const {classes, className} = props

  return (
    <footer>
      <Box px={{ xs: 3, sm: 10 }} py={{ xs: 5, sm: 5 }} bgcolor="#424242" color="">
        <Container maxWidth="lg">
          <Grid container spacing={5}>
            <Grid item xs={12} sm={4}>
              <Box borderBottom={1}>Help</Box>
              <Box>
                <Link href="/" color="inherit">
                  Contact
                </Link>
                </Box>
                <Box>
                <Link href="/" color="inherit">
                  Support
                </Link>
                </Box>
            </Grid>
            <Grid item xs={12} sm={4}>
              <Box borderBottom={1} >Account</Box>
              <Box>
                <Link href="/login" color="inherit">
                  Signin
                </Link>
                </Box>
                <Box>
                <Link href="/signup" color="inherit">
                  Signup
                </Link>
              </Box>
            </Grid>
            <Grid item xs={12} sm={4}>
              <Box borderBottom={1}>Follow Us</Box>
              <Box>
                <Link href="/" color="inherit" mx={2}>
                  <FacebookIcon color="primary" fontSize="large"  />
                </Link>
                <Link href="/" color="inherit" pr={{xs:10, sm:50}}>
                  <TwitterIcon color="action" fontSize="large" />
                </Link>
                <Link href="/" color="inherit" pr={{xs:10, sm:10}}>
                  <InstagramIcon color="secondary" fontSize="large" />
                </Link>
              </Box>
            </Grid>
          </Grid>
          <Box textAlign="center" pt={{xs:5, sm:5}} pb={{ xs:5, sm:0 }}>
          ©Public News Board 
          </Box>
        </Container>
      </Box>
    </footer>
  );
}

export default Footer
