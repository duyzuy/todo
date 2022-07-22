import React from "react";
import { Box, Toolbar, Container, Paper } from "@mui/material";

const MainContent = ({ component }) => {
  return (
    <Box
      className="admin__content"
      sx={{
        flex: 1,
        flexGrow: 1,
        height: "100vh",
        overflow: "auto",
        backgroundColor: "#f1f1f1",
      }}
    >
      <Toolbar />
      <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
        <Paper elevation={1} sx={{ p: 4, backgroundColor: "#fff" }}>
          {component}
        </Paper>
      </Container>
    </Box>
  );
};

export default MainContent;
