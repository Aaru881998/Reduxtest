import * as React from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import {useForm} from "react-hook-form"
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import {addUser} from "../authSlice"
// TODO remove, this demo shouldn't need to reset the theme.


export default function Form() {
  const{register,handleSubmit}=useForm()
const dispatch=useDispatch()
  const histort=useNavigate()

const onSubmit=async(value)=>{
  console.log("value",value);
dispatch(addUser(value))
histort("/table")
}




  return (
    <Box
      sx={{
        pt: { xs: 8, sm: 4 },
        minHeight: {
          md: "90vh",
        },
        backgroundColor: "#f1f5fe",
      }}
    >
      <Container component="main" maxWidth="xs">
        <Box
          sx={{
            marginTop: 8,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Typography component="h1" variant="h5">
            Add Data
          </Typography>
          <Box
            component="form"
            noValidate
            onSubmit={handleSubmit(onSubmit)}
            sx={{ mt: 3 }}

          >
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <TextField
                  autoComplete="given-name"
                  name="firstName"
                  required
                  fullWidth
                  id="firstName"
                  label="First Name"
                  autoFocus
                  {...register("firstName")}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  fullWidth
                  id="lastName"
                  label="Last Name"
                  name="lastName"
                  autoComplete="family-name"
                  {...register("lastName")}

                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="email"
                  label="Email Address"
                  name="email"
                  autoComplete="email"
                  {...register("email")}

                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  name="password"
                  label="Password"
                  type="password"
                  id="password"
                  autoComplete="new-password"
                  {...register("password")}

                />
              </Grid>
            </Grid>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{
                mt: 3,
                mb: 2,
                backgroundColor: "cadetblue",
                borderRadius: "16px",
              }}
            >
              Submit
            </Button>
          </Box>
        </Box>
      </Container>
    </Box>
  );
}
