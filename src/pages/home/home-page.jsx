import React from "react";
import { Grid, Paper } from "@mui/material";

import { Header } from "../../components/molecules/header/header";

import { DataTable } from "../../components/molecules/table/table";
import { Container } from "@mui/system";

export const Home = () => {
  return (
    <React.Fragment>
      <Header />
      <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <Paper sx={{ p: 2, display: "flex", flexDirection: "column" }}>
              <DataTable />
            </Paper>
          </Grid>
        </Grid>
      </Container>
    </React.Fragment>
  );
};
