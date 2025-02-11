import { PhoneInput } from "react-international-phone";
import "../assets/flag.css";

interface Props {
  numberValue: string;
  setNumberValue: (value: string) => void;
}

const PhoneNumberInput: React.FC<Props> = ({ numberValue, setNumberValue }) => {
  const countryCode = "+998";

  const handleChange = (newPhoneNumber: string) => {
    const formattedNumber = newPhoneNumber.startsWith(countryCode)
      ? newPhoneNumber
      : countryCode + newPhoneNumber.replace(/^\+998/, "");
    setNumberValue(formattedNumber);
  };

  return (
    <div>
      <PhoneInput
        defaultCountry="uz"
        forceDialCode={true}
        value={numberValue}
        onChange={handleChange}
      />
    </div>
  );
};

export default PhoneNumberInput;
