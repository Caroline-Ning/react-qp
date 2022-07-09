import React from "react";
import { Link } from "react-router-dom";
import { Grid, Paper, Container, styled, Typography } from "@mui/material";
import { StayPrimaryLandscape } from "@mui/icons-material";

const Item = styled(Paper)(({ theme }) => ({
  // backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  // ...theme.typography.body2,
  padding: theme.spacing(6),
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
}));

const styles = {
  icon: {
    width: 130,
  },
};

const WebTeamList = ({ webs }) => {
  return (
    <Grid container rowSpacing={3} columnSpacing={{ xs: 1, sm: 3, md: 3 }}>
      {webs.map((web) => (
        <Grid item xs={3} key={web.id}>
          <Link
            to={`/our-team/web/${web.id}`}
            style={{ textDecoration: "none" }}
          >
            <Item
              sx={{
                textDecoration: "none",
                transition: "0.5s color",
                ":hover": {
                  color: "primary.main",
                  // transitionDelay: "0.5s",
                  boxShadow: "0 2px 8px 5px rgba(0, 0, 0, 0.1)",
                },
              }}
            >
              {/* <div key={web.id}> */}
              <img src={web.imageSrc} alt="xx" style={styles.icon}></img>
              <div style={{ marginTop: "20px", fontFamily: ["Open Sans"] }}>
                {web.displayName}
              </div>
              <div style={{ marginTop: "5px", color: "#999" }}>
                some/sub/title
              </div>
              {/* </div> */}
            </Item>
          </Link>
        </Grid>
      ))}
    </Grid>
  );
};

export default WebTeamList;
