import React, { useEffect } from "react";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import { Box, Button, Container, Paper } from "@mui/material";

// Custom components
import { LargeTextField, SmallTextField } from "../../atoms/inputs/textfield";
import { formularioMock } from "../../../mocks/input-mock";
import { useParams } from "react-router-dom";

export const BaseForm = ({ formualarioInfos = formularioMock }) => {
  const { nomeFormulario } = useParams();

  useEffect(() => {
    // Chamada para o formularioModel baseado no nomeFormulario
    console.log("TODO");
  }, []);

  function handleSend(e) {
    // Chamar API de submeter form
    console.log("Submit");
  }

  return (
    <Container component="main" maxWidth="sm" sx={{ mb: 4 }}>
      <Paper variant="outlined" sx={{ my: { xs: 3, md: 6 }, p: { xs: 2, md: 3 } }}>
        <Typography component="h1" variant="h4" align="center">
          {formualarioInfos.title}
        </Typography>
        <React.Fragment>
          <Grid container spacing={3} sx={{ my: { xs: 1, md: 1 }, p: { xs: 1, md: 1 } }}>
            {formualarioInfos.sections.map(({ inputs }) => (
              <React.Fragment key={inputs.name}>
                {inputs.map((input) => {
                  return input.size === "large" ? (
                    <LargeTextField
                      key={input.id}
                      required
                      id={input.id}
                      name={input.id}
                      label={input.label}
                      placeholder={input.placeholder}
                      value={input.value}
                    />
                  ) : (
                    <SmallTextField
                      key={input.id}
                      required
                      id={input.id}
                      name={input.id}
                      label={input.label}
                      placeholder={input.placeholder}
                      value={input.value}
                    />
                  );
                })}
              </React.Fragment>
            ))}
          </Grid>
          <Box sx={{ display: "flex", justifyContent: "flex-end" }}>
            <Button variant="contained" onClick={handleSend} sx={{ mt: 3, ml: 1 }}>
              Enviar
            </Button>
          </Box>
        </React.Fragment>
      </Paper>
    </Container>
  );
};
