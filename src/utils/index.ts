import { isValidPhoneNumber } from "libphonenumber-js";

export const checkVaildInputs = (
  event: React.FormEvent<HTMLFormElement>,
  nameValue: string,
  numberValue: string,
  nameValid: RegExp
) => {
  event.preventDefault();
  if (nameValue != "" && numberValue != "") {
    console.log(`user name is ${nameValue} and user number is ${numberValue}`);
  }
  if (nameValid.test(nameValue) && isValidPhoneNumber(numberValue, "UZ")) {
    alert("Everything is ok");
  } else {
    alert("You write something wrong");
  }
};
