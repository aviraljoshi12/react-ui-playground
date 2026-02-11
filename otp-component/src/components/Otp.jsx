import { useEffect, useRef, useState } from "react";

export default function Otp({ otpLength = 6 }) {
  const [otpFields, setOtpFields] = useState(new Array(otpLength).fill(""));
  const ref = useRef([]);
  console.log(ref.current);
  const handleChange = (e, idx) => {
    const key = e.key;
    if (key === "ArrowRight") {
      ref.current[idx + 1]?.focus();
    }
    if (key === "ArrowLeft") {
      ref.current[idx - 1]?.focus();
    }
    const copyOtpFields = [...otpFields];
    if (key === "Backspace") {
      copyOtpFields[idx] = "";
      setOtpFields(copyOtpFields);
      ref.current[idx - 1]?.focus();
      return;
    }

    if (isNaN(key)) return;

    copyOtpFields[idx] = key;
    ref.current[idx + 1]?.focus();
    setOtpFields(copyOtpFields);
  };

  useEffect(() => {
    ref.current[0].focus();
  }, []);
  return (
    <div className="container">
      {otpFields.map((value, idx) => (
        <input
          type="text"
          ref={(currentInput) => (ref.current[idx] = currentInput)}
          value={value}
          key={idx}
          onKeyDown={(e) => handleChange(e, idx)}
        />
      ))}
    </div>
  );
}
