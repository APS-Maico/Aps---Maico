import * as React from 'react';
import Box from '@mui/material/Box';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepButton from '@mui/material/StepButton';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

const steps = ['Pedido confirmado', 'Pedido em preparo', 'Pedido a caminho', 'Pedido Entregue'];

interface StepperProps {
  orderId: number;
  customer: string; // Novo
  address: string; // Novo
  deliveryFee: number; // Novo
}

export default function HorizontalNonLinearStepper({ orderId, customer, address, deliveryFee }: StepperProps) {
  const [activeStep, setActiveStep] = React.useState(0);
  const [completed, setCompleted] = React.useState<{ [k: number]: boolean }>({});

  // Carregar o estado do stepper do localStorage quando o componente é montado
  React.useEffect(() => {
    const savedData = localStorage.getItem(`order-${orderId}`);
    if (savedData) {
      const { activeStep, completed } = JSON.parse(savedData);
      setActiveStep(activeStep);
      setCompleted(completed);
    }
  }, [orderId]);

  const handleComplete = () => {
    const newCompleted = {
      ...completed,
      [activeStep]: true,
    };
  
    setCompleted(newCompleted);
    setActiveStep(activeStep + 1);
  
    const orderData = {
      orderId,
      activeStep: activeStep + 1,
      completed: newCompleted,
      customer,
      address,
      deliveryFee,
      status: steps[activeStep + 1], // Define o status com base no próximo passo
    };
  
    localStorage.setItem(`order-${orderId}`, JSON.stringify(orderData));
    
    console.log(`Pedido ${orderId} salvo no localStorage:`, orderData); // Debug
  };
  

  return (
    <Box sx={{ width: '100%' }}>
      <Stepper nonLinear activeStep={activeStep}>
        {steps.map((label, index) => (
          <Step key={label} completed={completed[index]}>
            <StepButton color="inherit" onClick={() => setActiveStep(index)}>
              {label}
            </StepButton>
          </Step>
        ))}
      </Stepper>
      <div>
        {activeStep === steps.length - 1 ? (
          <Typography>Pedido concluído</Typography>
        ) : (
          <Button onClick={handleComplete}>
            {activeStep === steps.length - 2 ? 'Finalizar' : 'Próximo Passo'}
          </Button>
        )}
      </div>
    </Box>
  );
}
