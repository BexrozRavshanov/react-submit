import { useState, useMemo } from "react";
import NameInput from "./NameInput.tsx";
import PhoneNumberInput from "./PhoneNumberInput.tsx";

import { checkVaildInputs } from "../utils/index.ts";

function SubmitForm() {
  const [nameValue, setNameValue] = useState("");
  const [numberValue, setNumberValue] = useState("");
  const nameValid = RegExp("[^0-9!@#$%^&*()]", "g");

  const submitAction = (event: React.FormEvent<HTMLFormElement>) => {
    checkVaildInputs(event, nameValue, numberValue, nameValid);
  };

  const isSubmitEnabled = useMemo(() => {
    return nameValue.length >= 3 && numberValue.length == 13;
  }, [nameValue, numberValue]);

  return (
    <>
      <div>
        <form onSubmit={submitAction}>
          <NameInput nameValue={nameValue} setNameValue={setNameValue} />
          <PhoneNumberInput
            numberValue={numberValue}
            setNumberValue={setNumberValue}
          />
          <button disabled={!isSubmitEnabled} type="submit">
            Submit
          </button>
        </form>
      </div>
    </>
  );
}

export default SubmitForm;
