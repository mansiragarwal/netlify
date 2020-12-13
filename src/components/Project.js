import React, { useEffect, useState } from 'react';
import './Project.css';
import { Link as scrollLink, animateScroll as smoothScroll } from "react-scroll";
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepButton from '@material-ui/core/StepButton';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Context from './2WayQ/Context';
import Ideation from './2WayQ/Ideation';
import Prototyping from './2WayQ/Prototyping';
import IntegratingResponsiveness from './2WayQ/IntResp';
import FinalProduct from './2WayQ/FinalProduct';
import { createMuiTheme } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/styles';



const theme = createMuiTheme({
    palette: {
      primary: {
        main: '#6A00F4',
      },
      secondary: {
        // This is green.A700 as hex.
        main: '#11cb5f',
      },
    },
  });

export default function Project() {
    const [scroll, setScroll] = useState(0);
    const [activeStep, setActiveStep] = React.useState(0);
    const steps = ['Context', 'Ideation', 'Prototyping', 'Integrating Reponsiveness', 'Final Product'];
    const [completed, setCompleted] = React.useState({});

    useEffect(() => {

        let progressBarHandler = () => {
            
            const totalScroll = document.documentElement.scrollTop;
            const windowHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
            const scroll = `${totalScroll / windowHeight}`;

            setScroll(scroll);
        }

        window.addEventListener("scroll", progressBarHandler);

        return () => window.removeEventListener("scroll", progressBarHandler);
    });

    const handleStep = (step) => () => {
        setActiveStep(step);
      };


    return (
        <ThemeProvider theme={theme}>

        <div className="App">
            
            <Stepper nonLinear activeStep={activeStep} position = "fixed">
        {steps.map((label, index) => (
          <Step key={label}>
            <StepButton onClick={handleStep(index)}>
              {label}
            </StepButton>
          </Step>
        ))}
      </Stepper>
      <div id="progressBarContainer">
                <div id="progressBar" style={{transform: `scale(${scroll}, 1)`, opacity: `100`}} />
            </div>
            <div>
            {activeStep == 0 ? ( <Context /> ) : null}
            {activeStep == 1 ? ( <Ideation /> ) : null}
            {activeStep == 2 ? ( <Prototyping /> ) : null}
            {activeStep == 3 ? ( <IntegratingResponsiveness /> ) : null}
            {activeStep == 4 ? ( <FinalProduct /> ) : null}
            </div>
        </div>
        </ThemeProvider>
    );
}