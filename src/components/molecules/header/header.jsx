import React from "react";
import { AppBar, CssBaseline, Toolbar, Typography } from "@mui/material";
import { ThemeProvider } from "styled-components";
import { createTheme } from "@mui/system";

const theme = createTheme();

export const Header = () => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <AppBar
        position="absolute"
        color="default"
        elevation={0}
        sx={{
          position: "relative",
          borderBottom: (t) => `1px solid ${t.palette.divider}`,
        }}
      >
        <Toolbar>
          <Typography variant="h6" color="inherit" noWrap>
            Sistema de Monitoramento de Pesquisas da Saúde
          </Typography>
        </Toolbar>
      </AppBar>
    </ThemeProvider>
  );
};
