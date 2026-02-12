import { useState } from "react";

export default function Stepper({ steps }) {
  const [currentStep, setCurrentStep] = useState(0);

  const handleNext = () => {
    if (currentStep < steps.length - 1) setCurrentStep(currentStep + 1);
  };

  const handleBack = () => {
    if (currentStep > 0) setCurrentStep(currentStep - 1);
  };

  console.log(currentStep);

  return (
    <div className="stepper">
      <div>
        {steps.map(({ label, content }, idx) => {
          return (
            <div key={idx} className="stepper-container">
              <div
                className={`step-number ${
                  (idx <= currentStep && "active") || ""
                }`}
              >
                {idx + 1}
                {idx < steps.length - 1 && (
                  <div
                    className={`step-line ${
                      (idx < currentStep && "active") || ""
                    }`}
                  ></div>
                )}
              </div>
              <div className="step-content">{label}</div>
            </div>
          );
        })}
      </div>
      <div className="stepper-content">{steps[currentStep].content}</div>
      <div className="stepper-controls">
        <button onClick={handleBack}>Back</button>
        <button onClick={handleNext}>Next</button>
      </div>
    </div>
  );
}
