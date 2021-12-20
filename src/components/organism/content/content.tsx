import React, { FC, useContext } from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import { ContentProps } from "./content.types";
import TechCard from "../../molecules/card/card";
import { MyContext } from "../../../globalState/context";

const Content: FC<ContentProps> = ({ data }) => {
  const { state } = useContext(MyContext);
  const { filters } = state;

  const FilteredStateCategory = Object.keys(filters)
    .filter((key) => filters[key])
    .map((item) => item.toUpperCase());

  const FilteredCategory = (category: string) => {
    const ifRender = FilteredStateCategory.filter((item) => category === item);
    return ifRender.length > 0;
  };
  console.log(FilteredStateCategory);
  return (
    <Box sx={{ flexGrow: 1, marginTop: 10 }}>
      <Grid
        container
        spacing={{ xs: 2, md: 2 }}
        columns={{ xs: 4, sm: 8, md: 12 }}
      >
        {Object.keys(data.allArticles).length !== 0 &&
          data.allArticles.map(
            ({ category, title, description, date }, idx) =>
              FilteredCategory(category.toUpperCase()) && (
                <Grid item xs={4} sm={4} md={4} key={idx}>
                  <TechCard
                    type={category}
                    title={title}
                    description={description}
                    key={idx}
                    date={date}
                  />
                </Grid>
              )
          )}
      </Grid>
    </Box>
  );
};

export default Content;