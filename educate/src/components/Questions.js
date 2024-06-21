import React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

const Questions = () => {
  return (
    <div>
      <main>
        <article className="question-contain">
          <h1>Frequently Asked Questions</h1>

          <Accordion>
            <AccordionSummary expandIcon={<ExpandMoreIcon/>}>
              <Typography><strong>How does Educate work?</strong></Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                Educate allows you to choose a language and find the nearest
                center that speaks your language near you for homework help.
              </Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion>
            <AccordionSummary expandIcon={<ExpandMoreIcon/>}>
              <Typography><strong>Do I have to pay to use Educate?</strong></Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                Educate is a free online system to help find centers near you
                that offer free homework help.
              </Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion>
            <AccordionSummary expandIcon={<ExpandMoreIcon/>}>
              <Typography>
                <strong>Is there another language beside spanish and english?</strong>
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                As the program expands other languages might be added.
              </Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion>
            <AccordionSummary expandIcon={<ExpandMoreIcon/>}>
              <Typography><strong>What if I want to add a center?</strong></Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                If you know of a place which offers free assistance please fill
                out the link below with the information so we can review and add
                it.
              </Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion>
            <AccordionSummary expandIcon={<ExpandMoreIcon/>}>
              <Typography>
                <strong>How do I know a center exists and is not fake?</strong>
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                Every center shown is verified by our team to make sure the
                hours and times are correct.If they are not please let us know
                and we can update the information.
              </Typography>
            </AccordionDetails>
          </Accordion>
        </article>
      </main>
    </div>
  );
};
// accordian page in react and javascript

export default Questions;
