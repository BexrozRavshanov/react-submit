import { useEffect, useState } from "react";

interface InputProps {
  numberValue: string;
  setNumberValue: (value: string) => void;
}

const UserNumber: React.FC<InputProps> = ({ numberValue, setNumberValue }) => {
  const [localValue, setLocalValue] = useState("");

  useEffect(() => {
    setLocalValue(numberValue);
  }, [numberValue]);

  function getPhoneNumber(event: React.ChangeEvent<HTMLInputElement>) {
    let phoneNumber = event.target.value.replace(/\D/g, "");
    let countryCode = "+998";

    if (phoneNumber.startsWith("998")) {
      phoneNumber = phoneNumber.slice(3);
    }

    let number = countryCode;
    if (phoneNumber.length > 0) {
      number += " " + phoneNumber.slice(0, 2);
    }
    if (phoneNumber.length > 2) {
      number += " " + phoneNumber.slice(2, 5);
    }
    if (phoneNumber.length > 5) {
      number += " " + phoneNumber.slice(5, 7);
    }
    if (phoneNumber.length > 7) {
      number += " " + phoneNumber.slice(7, 9);
    }
    setLocalValue(number.trim());
    setNumberValue(number.trim());
  }
  function getPhoneNumberValid(event: React.KeyboardEvent<HTMLInputElement>) {
    if (event.code == "Backspace" && localValue.length == 4) {
      event.preventDefault();
    }
  }
  return (
    <>
      <div>
        <h2>Write here phone number</h2>
        <input
          type="text"
          value={localValue}
          onChange={getPhoneNumber}
          onKeyDown={getPhoneNumberValid}
          placeholder="+998 90 123 45 67"
        />
      </div>
    </>
  );
};

export default UserNumber;
