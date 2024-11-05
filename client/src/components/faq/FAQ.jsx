import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Accordion from "@mui/material/Accordion";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";
import Fade from "@mui/material/Fade";
import Typography from "@mui/material/Typography";
import React from "react";

export default function AccordionTransition() {
  const [expanded1, setExpanded1] = React.useState(true);
  const [expanded2, setExpanded2] = React.useState(false);
  const [expanded3, setExpanded3] = React.useState(false);
  const [expanded4, setExpanded4] = React.useState(false);
  const [expanded5, setExpanded5] = React.useState(false);
  const [expanded6, setExpanded6] = React.useState(false);

  const handleExpansion1 = () => {
    setExpanded1((prevExpanded) => !prevExpanded);
  };
  const handleExpansion2 = () => {
    setExpanded2((prevExpanded) => !prevExpanded);
  };
  const handleExpansion3 = () => {
    setExpanded3((prevExpanded) => !prevExpanded);
  };
  const handleExpansion4 = () => {
    setExpanded4((prevExpanded) => !prevExpanded);
  };
  const handleExpansion5 = () => {
    setExpanded5((prevExpanded) => !prevExpanded);
  };
  const handleExpansion6 = () => {
    setExpanded6((prevExpanded) => !prevExpanded);
  };

  return (
    <div className="py-10 lg:py-20 font-bodyFont text-lightBodyText bg-darkPrimary relative overflow-hidden">
      <div className="px-5 sm:px-7 lg:px-10 xl:px-20 flex flex-col lg:flex-row gap-7  lg:gap-10">
        <div className="w-full lg:w-[40%] uppercase font-bodyFont text-lightTitleText text-3xl sm:text-4xl lg:text-5xl font-bold flex flex-col gap-2">
          Frequently Asked Question
          <span>(FAQ)</span>
        </div>
        <div className="w-full lg:w-[60%]">
          <div className="border-b border-lightBodyText">
            <Accordion
              expanded={expanded1}
              onChange={handleExpansion1}
              slots={{ transition: Fade }}
              slotProps={{ transition: { timeout: 400 } }}
              sx={[
                expanded1
                  ? {
                      "& .MuiAccordion-region": {
                        height: "auto",
                      },
                      "& .MuiAccordionDetails-root": {
                        display: "block",
                      },
                    }
                  : {
                      "& .MuiAccordion-region": {
                        height: 0,
                      },
                      "& .MuiAccordionDetails-root": {
                        display: "none",
                      },
                    },
              ]}
            >
              <AccordionSummary
                expandIcon={<ExpandMoreIcon className="text-lightPrimary" />}
                aria-controls="panel1-content"
                id="panel1-header"
                sx={{
                  backgroundColor: "#121212",
                  color: "#ffffff",
                  borderBottomWidth: "1px",
                  borderColor: "#999999",
                }}
              >
                <Typography
                  sx={{
                    fontFamily: "Poppins",
                    fontWeight: 300,
                    fontSize: "16px",
                  }}
                >
                  How long does it take to complete a project?
                </Typography>
              </AccordionSummary>
              <AccordionDetails
                sx={{
                  backgroundColor: "#121212",
                  color: "#999999",
                }}
              >
                <Typography
                  sx={{
                    fontFamily: "Poppins",
                    fontSize: "14px",
                    fontWeight: 300,
                  }}
                >
                  The timeline for project completion varies based on the scope
                  and complexity of the work. Typically, we discuss timelines
                  during the initial consultation and provide a detailed project
                  plan after understanding your requirements.
                </Typography>
              </AccordionDetails>
            </Accordion>
          </div>
          <div className="border-b border-lightBodyText">
            <Accordion
              expanded={expanded2}
              onChange={handleExpansion2}
              slots={{ transition: Fade }}
              slotProps={{ transition: { timeout: 400 } }}
              sx={[
                expanded2
                  ? {
                      "& .MuiAccordion-region": {
                        height: "auto",
                      },
                      "& .MuiAccordionDetails-root": {
                        display: "block",
                      },
                    }
                  : {
                      "& .MuiAccordion-region": {
                        height: 0,
                      },
                      "& .MuiAccordionDetails-root": {
                        display: "none",
                      },
                    },
              ]}
            >
              <AccordionSummary
                expandIcon={<ExpandMoreIcon className="text-lightPrimary" />}
                aria-controls="panel2-content"
                id="panel2-header"
                sx={{
                  backgroundColor: "#121212",
                  color: "#ffffff",
                  borderBottomWidth: "1px",
                  borderColor: "#999999",
                }}
              >
                <Typography
                  sx={{
                    fontFamily: "Poppins",
                    fontWeight: 300,
                    fontSize: "16px",
                  }}
                >
                  Do you provide ongoing support after the project is completed?
                </Typography>
              </AccordionSummary>
              <AccordionDetails
                sx={{
                  backgroundColor: "#121212",
                  color: "#999999",
                }}
              >
                <Typography
                  sx={{
                    fontFamily: "Poppins",
                    fontSize: "14px",
                    fontWeight: 300,
                  }}
                >
                  Yes, we offer ongoing support and maintenance services to
                  ensure your website and digital presence remain up-to-date and
                  functional. Our team is here to assist you with any issues or
                  updates you may need.
                </Typography>
              </AccordionDetails>
            </Accordion>
          </div>
          <div className="border-b border-lightBodyText">
            <Accordion
              expanded={expanded3}
              onChange={handleExpansion3}
              slots={{ transition: Fade }}
              slotProps={{ transition: { timeout: 400 } }}
              sx={[
                expanded3
                  ? {
                      "& .MuiAccordion-region": {
                        height: "auto",
                      },
                      "& .MuiAccordionDetails-root": {
                        display: "block",
                      },
                    }
                  : {
                      "& .MuiAccordion-region": {
                        height: 0,
                      },
                      "& .MuiAccordionDetails-root": {
                        display: "none",
                      },
                    },
              ]}
            >
              <AccordionSummary
                expandIcon={<ExpandMoreIcon className="text-lightPrimary" />}
                aria-controls="panel3-content"
                id="panel3-header"
                sx={{
                  backgroundColor: "#121212",
                  color: "#ffffff",
                  borderBottomWidth: "1px",
                  borderColor: "#999999",
                }}
              >
                <Typography
                  sx={{
                    fontFamily: "Poppins",
                    fontWeight: 300,
                    fontSize: "16px",
                  }}
                >
                  Can you work with existing branding and design?
                </Typography>
              </AccordionSummary>
              <AccordionDetails
                sx={{
                  backgroundColor: "#121212",
                  color: "#999999",
                }}
              >
                <Typography
                  sx={{
                    fontFamily: "Poppins",
                    fontSize: "14px",
                    fontWeight: 300,
                  }}
                >
                  Absolutely! We can work within your existing brand guidelines
                  or help you develop a new brand identity that aligns with your
                  vision and goals. Our design team collaborates closely with
                  you to ensure consistency and effectiveness.
                </Typography>
              </AccordionDetails>
            </Accordion>
          </div>
          <div className="border-b border-lightBodyText">
            <Accordion
              expanded={expanded4}
              onChange={handleExpansion4}
              slots={{ transition: Fade }}
              slotProps={{ transition: { timeout: 400 } }}
              sx={[
                expanded4
                  ? {
                      "& .MuiAccordion-region": {
                        height: "auto",
                      },
                      "& .MuiAccordionDetails-root": {
                        display: "block",
                      },
                    }
                  : {
                      "& .MuiAccordion-region": {
                        height: 0,
                      },
                      "& .MuiAccordionDetails-root": {
                        display: "none",
                      },
                    },
              ]}
            >
              <AccordionSummary
                expandIcon={<ExpandMoreIcon className="text-lightPrimary" />}
                aria-controls="panel4-content"
                id="panel4-header"
                sx={{
                  backgroundColor: "#121212",
                  color: "#ffffff",
                  borderBottomWidth: "1px",
                  borderColor: "#999999",
                }}
              >
                <Typography
                  sx={{
                    fontFamily: "Poppins",
                    fontWeight: 300,
                    fontSize: "16px",
                  }}
                >
                  What is your pricing structure?
                </Typography>
              </AccordionSummary>
              <AccordionDetails
                sx={{
                  backgroundColor: "#121212",
                  color: "#999999",
                }}
              >
                <Typography
                  sx={{
                    fontFamily: "Poppins",
                    fontSize: "14px",
                    fontWeight: 300,
                  }}
                >
                  Our pricing varies depending on the services provided and the
                  complexity of the project. We offer competitive rates and
                  transparent pricing, ensuring you understand the costs
                  involved before we begin any work.
                </Typography>
              </AccordionDetails>
            </Accordion>
          </div>
          <div className="border-b border-lightBodyText">
            <Accordion
              expanded={expanded5}
              onChange={handleExpansion5}
              slots={{ transition: Fade }}
              slotProps={{ transition: { timeout: 400 } }}
              sx={[
                expanded5
                  ? {
                      "& .MuiAccordion-region": {
                        height: "auto",
                      },
                      "& .MuiAccordionDetails-root": {
                        display: "block",
                      },
                    }
                  : {
                      "& .MuiAccordion-region": {
                        height: 0,
                      },
                      "& .MuiAccordionDetails-root": {
                        display: "none",
                      },
                    },
              ]}
            >
              <AccordionSummary
                expandIcon={<ExpandMoreIcon className="text-lightPrimary" />}
                aria-controls="panel5-content"
                id="panel5-header"
                sx={{
                  backgroundColor: "#121212",
                  color: "#ffffff",
                  borderBottomWidth: "1px",
                  borderColor: "#999999",
                }}
              >
                <Typography
                  sx={{
                    fontFamily: "Poppins",
                    fontWeight: 300,
                    fontSize: "16px",
                  }}
                >
                  How do you measure the success of your projects?
                </Typography>
              </AccordionSummary>
              <AccordionDetails
                sx={{
                  backgroundColor: "#121212",
                  color: "#999999",
                }}
              >
                <Typography
                  sx={{
                    fontFamily: "Poppins",
                    fontSize: "14px",
                    fontWeight: 300,
                  }}
                >
                  We track various metrics to assess project success, including
                  website traffic, conversion rates, and user engagement. We
                  also provide regular reports and insights to help you
                  understand the impact of our services on your business.
                </Typography>
              </AccordionDetails>
            </Accordion>
          </div>
          <div className="border-b border-lightBodyText">
            <Accordion
              expanded={expanded6}
              onChange={handleExpansion6}
              slots={{ transition: Fade }}
              slotProps={{ transition: { timeout: 400 } }}
              sx={[
                expanded6
                  ? {
                      "& .MuiAccordion-region": {
                        height: "auto",
                      },
                      "& .MuiAccordionDetails-root": {
                        display: "block",
                      },
                    }
                  : {
                      "& .MuiAccordion-region": {
                        height: 0,
                      },
                      "& .MuiAccordionDetails-root": {
                        display: "none",
                      },
                    },
              ]}
            >
              <AccordionSummary
                expandIcon={<ExpandMoreIcon className="text-lightPrimary" />}
                aria-controls="panel6-content"
                id="panel6-header"
                sx={{
                  backgroundColor: "#121212",
                  color: "#ffffff",
                  borderBottomWidth: "1px",
                  borderColor: "#999999",
                }}
              >
                <Typography
                  sx={{
                    fontFamily: "Poppins",
                    fontWeight: 300,
                    fontSize: "16px",
                  }}
                >
                  Do you offer custom solutions for unique business needs?
                </Typography>
              </AccordionSummary>
              <AccordionDetails
                sx={{
                  backgroundColor: "#121212",
                  color: "#999999",
                }}
              >
                <Typography
                  sx={{
                    fontFamily: "Poppins",
                    fontSize: "14px",
                    fontWeight: 300,
                  }}
                >
                  Yes, we specialize in creating tailored solutions that meet
                  the specific needs of your business. Whether you require a
                  custom software application or a unique digital marketing
                  strategy, we’re here to help.
                </Typography>
              </AccordionDetails>
            </Accordion>
          </div>
        </div>
      </div>
    </div>
  );
}
