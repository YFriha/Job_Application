import { Typography, Button } from "@mui/material";
import React from "react";

function Verification() {
  return (
    <div>
      <Typography
        fontSize={18}
        fontFamily={"sans-serif"}
        color={theme.palette.mode === "dark" ? "#009688" : "#9cd6d1"}
      >
        Your Email have been verified !
      </Typography>
      <Typography
        fontSize={18}
        fontFamily={"sans-serif"}
        color={theme.palette.mode === "dark" ? "#009688" : "#9cd6d1"}
      >
        Return to Login Page
      </Typography>
      <Button
              color="primary"
              variant="contained"
              sx={{
                bgcolor: theme.palette.mode === "dark" ? "#009688" : "#9cd6d1",
                ":hover": {
                  bgcolor:
                    theme.palette.mode === "dark" ? "#9cd6d1" : "#009688",
                },
              }}
              onClick={registration}
            >
              Go to login Page 
            </Button>
    </div>
  );
}

export default Verification;
