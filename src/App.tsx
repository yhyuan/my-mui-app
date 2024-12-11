import { Box, Grid, Typography, TextField, Button, Paper } from "@mui/material";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const App = () => {
  // Carousel settings
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
  };

  return (
    <Box sx={{ height: "100vh", overflow: "hidden" }}>
      <Grid container sx={{ height: "100%" }}>
        {/* Left Side - Signup Form */}
        <Grid
          item
          xs={12}
          md={6}
          sx={{
            display: "flex",
            flexDirection: "column",
            p: 3,
            gap: 2,
          }}
        >
          {/* Header */}
          <Typography
            variant="h4"
            sx={{
              flexShrink: 0,
              fontSize: "clamp(1.5rem, 3vw, 2.125rem)",
            }}
          >
            Sign Up
          </Typography>

          {/* Form */}
          <Box
            component="form"
            sx={{
              display: "flex",
              flexDirection: "column",
              gap: 2,
              flex: 1,
              justifyContent: "center",
            }}
          >
            <Grid container spacing={2}>
              <Grid item xs={6}>
                <TextField
                  fullWidth
                  size="small"
                  label="First Name"
                  name="firstName"
                />
              </Grid>
              <Grid item xs={6}>
                <TextField
                  fullWidth
                  size="small"
                  label="Last Name"
                  name="lastName"
                />
              </Grid>
            </Grid>

            <TextField
              fullWidth
              size="small"
              label="Email"
              type="email"
              name="email"
            />

            <TextField
              fullWidth
              size="small"
              label="Password"
              type="password"
              name="password"
            />

            <Grid container spacing={2}>
              <Grid item xs={6}>
                <TextField
                  fullWidth
                  size="small"
                  label="First Name"
                  name="firstName"
                />
              </Grid>
              <Grid item xs={6}>
                <TextField
                  fullWidth
                  size="small"
                  label="Last Name"
                  name="lastName"
                />
              </Grid>
            </Grid>

            <TextField
              fullWidth
              size="small"
              label="Email"
              type="email"
              name="email"
            />

            <TextField
              fullWidth
              size="small"
              label="Password"
              type="password"
              name="password"
            />

            <Grid container spacing={2}>
              <Grid item xs={6}>
                <TextField
                  fullWidth
                  size="small"
                  label="First Name"
                  name="firstName"
                />
              </Grid>
              <Grid item xs={6}>
                <TextField
                  fullWidth
                  size="small"
                  label="Last Name"
                  name="lastName"
                />
              </Grid>
            </Grid>

            <TextField
              fullWidth
              size="small"
              label="Email"
              type="email"
              name="email"
            />

            <TextField
              fullWidth
              size="small"
              label="Password"
              type="password"
              name="password"
            />
            <Grid container spacing={2}>
              <Grid item xs={6}>
                <TextField
                  fullWidth
                  size="small"
                  label="First Name"
                  name="firstName"
                />
              </Grid>
              <Grid item xs={6}>
                <TextField
                  fullWidth
                  size="small"
                  label="Last Name"
                  name="lastName"
                />
              </Grid>
            </Grid>

            <TextField
              fullWidth
              size="small"
              label="Email"
              type="email"
              name="email"
            />

            <TextField
              fullWidth
              size="small"
              label="Password"
              type="password"
              name="password"
            />

            <Grid container spacing={2}>
              <Grid item xs={6}>
                <TextField
                  fullWidth
                  size="small"
                  label="First Name"
                  name="firstName"
                />
              </Grid>
              <Grid item xs={6}>
                <TextField
                  fullWidth
                  size="small"
                  label="Last Name"
                  name="lastName"
                />
              </Grid>
            </Grid>

            <TextField
              fullWidth
              size="small"
              label="Email"
              type="email"
              name="email"
            />

            <TextField
              fullWidth
              size="small"
              label="Password"
              type="password"
              name="password"
            />

            <Grid container spacing={2}>
              <Grid item xs={6}>
                <TextField
                  fullWidth
                  size="small"
                  label="First Name"
                  name="firstName"
                />
              </Grid>
              <Grid item xs={6}>
                <TextField
                  fullWidth
                  size="small"
                  label="Last Name"
                  name="lastName"
                />
              </Grid>
            </Grid>

            <TextField
              fullWidth
              size="small"
              label="Email"
              type="email"
              name="email"
            />

            <TextField
              fullWidth
              size="small"
              label="Password"
              type="password"
              name="password"
            />

            <Grid container spacing={2}>
              <Grid item xs={6}>
                <TextField
                  fullWidth
                  size="small"
                  label="First Name"
                  name="firstName"
                />
              </Grid>
              <Grid item xs={6}>
                <TextField
                  fullWidth
                  size="small"
                  label="Last Name"
                  name="lastName"
                />
              </Grid>
            </Grid>

            <TextField
              fullWidth
              size="small"
              label="Email"
              type="email"
              name="email"
            />

            <TextField
              fullWidth
              size="small"
              label="Password"
              type="password"
              name="password"
            />

            <Button variant="contained" size="large" sx={{ mt: 2 }}>
              Sign Up
            </Button>
          </Box>
        </Grid>

        {/* Right Side - Carousel */}
        <Grid
          item
          xs={12}
          md={6}
          sx={{
            height: "100%",
            bgcolor: "grey.100",
          }}
        >
          <Box
            sx={{
              height: "100%",
              "& .slick-slider, & .slick-list, & .slick-track": {
                height: "100%",
              },
            }}
          >
            <Slider {...settings}>
              {[1, 2, 3].map((item) => (
                <Box
                  key={item}
                  sx={{
                    height: "100vh",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <img
                    src={`slide${item}.webp`}
                    alt={`Slide ${item}`}
                    style={{
                      maxHeight: "100%",
                      maxWidth: "100%",
                      objectFit: "cover",
                    }}
                  />
                </Box>
              ))}
            </Slider>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default App;
