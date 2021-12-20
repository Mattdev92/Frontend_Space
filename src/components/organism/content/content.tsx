import React, { FC } from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import { ContentProps } from "./content.types";
import TechCard from "../../molecules/card/card";

const Content: FC<ContentProps> = ({ data }) => {
  return (
    <Box sx={{ flexGrow: 1, marginTop: 10 }}>
      <Grid
        container
        spacing={{ xs: 2, md: 2 }}
        columns={{ xs: 4, sm: 8, md: 12 }}
      >
        {Object.keys(data.allArticles).length !== 0 &&
          data.allArticles.map(
            ({ category, title, description, date }, idx) => {
              return (
                <Grid item xs={4} sm={4} md={4} key={idx}>
                  <TechCard
                    type={category}
                    title={title}
                    description={description}
                    key={idx}
                    date={date}
                  />
                </Grid>
              );
            }
          )}
      </Grid>
    </Box>
  );
};

export default Content;
