import { useEffect, useState } from "react";

interface InputProps {
  nameValue: string;
  setNameValue: (value: string) => void;
}

const UserName: React.FC<InputProps> = ({ nameValue, setNameValue }) => {
  const [localValue, setLocalValue] = useState("");

  useEffect(() => {
    setLocalValue(nameValue);
  }, [nameValue]);

  function getPhoneNumber(event: React.ChangeEvent<HTMLInputElement>) {
    let nameValue = event.target.value.replace(/[^A-Za-zА-Яа-я ]/g, "");
    nameValue = nameValue
      .toLowerCase()
      .split(" ")
      .map((words) => words.charAt(0).toUpperCase() + words.slice(1))
      .join(" ");
    nameValue = nameValue.slice(0, 24);
    nameValue = nameValue.replace(/\s{2,}/g, " ");
    setLocalValue(nameValue);
    setNameValue(nameValue);
  }
  function getNameValid(event: React.KeyboardEvent<HTMLInputElement>) {
    if (!localValue && event.code == "Space") {
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
          onKeyDown={getNameValid}
          placeholder="Davron"
        />
      </div>
    </>
  );
};

export default UserName;
