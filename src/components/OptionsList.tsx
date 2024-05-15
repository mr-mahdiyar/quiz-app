import Option from "./Option";
import Grid from "@mui/material/Unstable_Grid2";

const containerStyle ={
  width: "80%",
  mx: "auto",
  mt: -10,
  rowSpacing: 10,
  justifyContent: "space-between"
}
const itemsStyle = {
  xs: 5
}

const OptionsList = () => {
  return (
    <Grid container {...containerStyle}>
      <Grid {...itemsStyle}>
        <Option optionText="گزینه اول" />
      </Grid>
      <Grid {...itemsStyle}>
        <Option optionText="گزینه دوم" />
      </Grid>
      <Grid {...itemsStyle}>
        <Option optionText="گزینه سوم" />
      </Grid>
      <Grid {...itemsStyle}>
        <Option optionText="گزینه چهارم" />
      </Grid>
    </Grid>
  );
};

export default OptionsList;
