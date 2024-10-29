import * as React from 'react';
import Box from '@mui/material/Box';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepButton from '@mui/material/StepButton';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

// Adicione o novo passo "Revisar anúncio"
const steps = ['Pedido confirmado','Pedido em preparo', 'Pedido a caminho', 'Pedido Entregue'];

export default function HorizontalNonLinearStepper() {
  const [activeStep, setActiveStep] = React.useState(0);
  const [completed, setCompleted] = React.useState<{ [k: number]: boolean }>({});

  const totalSteps = () => steps.length;
  const completedSteps = () => Object.keys(completed).length;
  const isLastStep = () => activeStep === totalSteps() - 1;
  const allStepsCompleted = () => completedSteps() === totalSteps();

  const handleNext = () => {
    const newActiveStep =
      isLastStep() && !allStepsCompleted()
        ? steps.findIndex((step, i) => !(i in completed))
        : activeStep + 1;
    setActiveStep(newActiveStep);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleStep = (step: number) => () => {
    if (!isClientView) { // Apenas permite clicar se não estiver na visão do cliente
      setActiveStep(step);
    }
  };

  const handleComplete = () => {
    const newCompleted = {
      ...completed,
      [activeStep]: true,
    });
    handleNext();

    // Salvar o estado do pedido no localStorage
    const orderData = {
      activeStep: activeStep + 1,
      completed: newCompleted,
    };
    localStorage.setItem(`order-${orderId}`, JSON.stringify(orderData));
  };

  const handleReset = () => {
    setActiveStep(0);
    setCompleted({});
    localStorage.removeItem(`order-${orderId}`); // Limpa o armazenamento do pedido ao resetar
  };

  return (
    <Box sx={{ width: '100%' }}>
      <Stepper nonLinear activeStep={activeStep}>
        {steps.map((label, index) => (
          <Step key={label} completed={completed[index]}>
            <StepButton color="inherit" onClick={handleStep(index)} disabled={isClientView}> {/* Desabilita o clique se for a visão do cliente */}
              {label}
            </StepButton>
          </Step>
        ))}
      </Stepper>
      <div>
        {allStepsCompleted() ? (
          <React.Fragment>
            <Typography sx={{ mt: 2, mb: 1 }}>Pedido concluído</Typography>
            <Box sx={{ display: 'flex', flexDirection: 'row', pt: 2 }}>
              <Box sx={{ flex: '1 1 auto' }} />
              {!isClientView && <Button onClick={handleReset}>Resetar</Button>}
            </Box>
          </React.Fragment>
        ) : (
          <React.Fragment>
            <Box sx={{ display: 'flex', flexDirection: 'row', justifyContent: 'flex-end', pt: 2 }}>
              {activeStep !== steps.length &&
                (completed[activeStep] ? (
                  <Typography/>
                ) : (
                  <Button onClick={handleComplete}>
                    {completedSteps() === totalSteps() - 1 ? 'Finalizar' : 'Completar Passo'}
                  </Button>
                ))}
            </Box>
          </React.Fragment>
        )}
      </div>
    </Box>
  );
}