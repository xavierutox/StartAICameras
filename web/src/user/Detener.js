import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { TextField, Button, Card, Grid } from "@mui/material";
export default function Detener() {
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const axios = require("axios");
  async function handleSubmit(event) {
    event.preventDefault();
    const res = await axios
      .get("http://familiaperez.quickddns.com:4000/stop?password=" + password)
      .catch(function (error) {
        console.log(error.toJSON());
      });
    if (res) {
      navigate("/listo");
    }
  }

  return (
    <>
      <Card>
        <form onSubmit={handleSubmit}>
          <Grid container spacing={2} justify="center" sx={{ paddingTop: 2 }}>
            <Grid item xs={16} justify="center">
              <TextField
                fullWidth
                id="password"
                label="password"
                variant="outlined"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </Grid>
            <Grid item xs={16}>
              <Button
                fullWidth
                variant="contained"
                type="submit"
              >
                Iniciar camaras
              </Button>
            </Grid>
          </Grid>
        </form>
      </Card>
    </>
  );
}
