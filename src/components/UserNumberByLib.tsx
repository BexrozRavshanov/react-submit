import { useState, useEffect } from "react";
import { PhoneInput } from "react-international-phone";
import "../assets/flag.css";

interface Props {
  numberValue: string;
  setNumberValue: (value: string) => void;
}

const UserNumberByLib: React.FC<Props> = ({ numberValue, setNumberValue }) => {
  const [phoneNumber, setPhoneNumber] = useState(numberValue);

  useEffect(() => {
    if (numberValue !== phoneNumber) {
      setPhoneNumber(numberValue);
    }
  }, [numberValue]);

  useEffect(() => {
    if (phoneNumber !== numberValue) {
      setNumberValue(phoneNumber);
    }
  }, [phoneNumber]);

  const handleChange = (newPhoneNumber: string) => {
    const formattedNumber = newPhoneNumber.startsWith("+998")
      ? newPhoneNumber
      : "+998" + newPhoneNumber.replace(/^\+998/, "");

    setPhoneNumber(formattedNumber);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    const inputElement = e.target as HTMLInputElement;
    const cursorPosition = inputElement.selectionStart || 0;

    if (
      (cursorPosition <= 4 && e.key === "Backspace") ||
      (cursorPosition < 4 && e.code.startsWith("Digit"))
    ) {
      e.preventDefault();
    }
  };

  return (
    <div>
      <PhoneInput
        defaultCountry="uz"
        value={phoneNumber}
        onChange={handleChange}
        inputProps={{
          onKeyDown: handleKeyDown,
        }}
      />
    </div>
  );
};

export default UserNumberByLib;
