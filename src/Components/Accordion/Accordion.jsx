import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import { ReactComponent as ExpandMoreIcon} from '../../Assests/ExpandMoreIcon.svg';

export default function BasicAccordion() {
    const accordions = {
        borderRadius: '5px',
        border: '1px solid #ffffff',
        margin: '20px',
    }
    const accordionSummary = {
        backgroundColor:'#121212',
        color: '#ffffff',
        borderRadius: '5px',
    }

    return (
        <div style={{ padding: '0 125px 50px 125px'}}>
            <h1 style={{ textAlign: 'center'}}>FAQs</h1>
            <Accordion sx={accordions}>
                <AccordionSummary
                    sx={accordionSummary}
                    expandIcon={<ExpandMoreIcon/>}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                >
                    <Typography>Is Qtify free to use?</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>
                        Yes! It is 100% free, and has 0% ads!
                    </Typography>
                </AccordionDetails>
            </Accordion>
            <Accordion sx={accordions}>
                <AccordionSummary
                    sx={accordionSummary}
                    expandIcon={<ExpandMoreIcon/>}
                    aria-controls="panel2a-content"
                    id="panel2a-header"
                >
                    <Typography>Can I download and listen to songs offline?</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>
                        Sorry, unfortunately we don't provide the service to download any songs.
                    </Typography>
                </AccordionDetails>
            </Accordion>

        </div>
    );
}