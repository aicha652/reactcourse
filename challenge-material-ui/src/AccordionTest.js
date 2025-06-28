import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Switch from '@mui/material/Switch';
import Collapse from '@mui/material/Collapse';
import { useState } from 'react';


const label = { inputProps: { 'aria-label': 'Switch demo' } };


export default function AccordionTest() {

    const [checked, setChecked] = useState(false);
    return(
        <div>
      <Accordion style={{ marginLeft: "200px", marginRight: "200px" }} >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1-content"
          id="panel1-header"
        >
          <Typography component="span">Accordion 1</Typography>
        </AccordionSummary>
        <AccordionDetails style={{ marginLeft: "100px", marginRight: "100px"}} >
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
          malesuada lacus ex, sit amet blandit leo lobortis eget.
        </AccordionDetails>
      </Accordion>
      <Accordion style={{ marginLeft: "200px", marginRight: "200px" }} >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2-content"
          id="panel2-header"
        >
          <Typography component="span">Accordion 2</Typography>
        </AccordionSummary>
        <AccordionDetails>
            <Switch {...label} color="success" value={checked} onChange={() =>{ setChecked((prev) => !prev);}} />
        </AccordionDetails>
      </Accordion>

      <Collapse in={checked} collapsedSize={80} >
          <Accordion 
       style={{ marginLeft: "200px", marginRight: "200px", marginTop: "20px", background: "orange", height: "300px"}} >
        <AccordionDetails style={{ marginLeft: "100px", marginRight: "100px"}} >
          Hello World
        </AccordionDetails>
       </Accordion>
      
      </Collapse>
    </div>
    )
}