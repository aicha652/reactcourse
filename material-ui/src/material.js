import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Avatar from '@mui/material/Avatar';
import Checkbox from '@mui/material/Checkbox';
import Slider from '@mui/material/Slider';
import Chip from '@mui/material/Chip';
import Container from '@mui/material/Container';
import FormatListBulletedAddIcon from '@mui/icons-material/FormatListBulletedAdd';
//import { deepOrange, deepPurple } from '@mui/material/colors';


export default function Material() {

  const label = { inputProps: { 'aria-label': 'Checkbox demo' } };
  return (
    <Container maxWidth="sm">
    <Stack direction="row" spacing={2} style={{ background: "gray" }} >
      <Button
       variant="contained" 
       /*style={{ backgroundColor: "#009688", color: "#e0f2f1" }}*/
       onClick={() => {
        alert("clicked")
      }}
       color="primary">Primary</Button>
      <Button variant="contained"  size="large" color="success">
        Success
      </Button>
      <Button variant="outlined" color="error">
        Error
      </Button>
      <Checkbox {...label} />
      
      <Slider aria-label="Volume"  />

      <Chip label="primary" color="primary" />
      <Chip label="success" color="success" />
      <FormatListBulletedAddIcon style={{ background: "red", fontSize: "80px" }} />
    </Stack>
    </Container>
    /*<Stack direction="row" spacing={2}>
      <Avatar>H</Avatar>
      <Avatar sx={{ bgcolor: deepOrange[500] }}>N</Avatar>
      <Avatar sx={{ bgcolor: deepPurple[500] }}>OP</Avatar>
    </Stack>*/
  );
}