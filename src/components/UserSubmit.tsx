import { useState, useMemo } from "react";
import UserName from "./UserName.tsx";
import { isValidPhoneNumber } from "libphonenumber-js";
import UserNumberByLib from "./UserNumberByLib.tsx";

function UserSubmit() {
  const [nameValue, setNameValue] = useState("");
  const [numberValue, setNumberValue] = useState("+998");

  const getUserInfo = (event: any) => {
    if (nameValue != "" && numberValue != "") {
      console.log(
        `user name is ${nameValue} and user number is ${numberValue}`
      );
      event.preventDefault();
    } else {
      event.preventDefault();
    }

    if (
      /[^0-9\!\@\#\$\%\^\&\*\(\)]/g.test(nameValue) &&
      isValidPhoneNumber(numberValue, "UZ")
    ) {
      alert("Everything is ok");
    } else {
      alert("You write something wrong");
    }
  };

  const disabledAble = useMemo(() => {
    return nameValue.length >= 3 && numberValue.length == 17;
  }, [nameValue, numberValue]);

  return (
    <>
      <div>
        <form onSubmit={getUserInfo}>
          <UserName nameValue={nameValue} setNameValue={setNameValue} />
          <UserNumberByLib
            numberValue={numberValue}
            setNumberValue={setNumberValue}
          />
          <button disabled={!disabledAble} type="submit">
            Submit
          </button>
        </form>
        <div></div>
      </div>
    </>
  );
}

export default UserSubmit;
