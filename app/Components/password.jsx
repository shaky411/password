"use client";

import { useState, useEffect } from "react";
import { Checkbox } from "@nextui-org/react";
import { Input } from "@nextui-org/react";
import "@fortawesome/fontawesome-svg-core/styles.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCopy } from "@fortawesome/free-solid-svg-icons";

export default function Password() {
  const [generatedPassword, setGeneratedPassword] = useState("");
  const [checkboxValid, setCheckboxValid] = useState(false);
  const [showErrorMessage, setShowErrorMessage] = useState(false);
  const [passwordOptions, setPasswordOptions] = useState({
    length: 12,
    lowerCase: false,
    upperCase: false,
    numeric: false,
    special: false,
  });

  // const myDefault = "5168";

  const specialCharacters = "@%!#$?".split("");

  // Generate array of numeric characters using split()
  const numericCharacters = "0123456789".split("");

  // Generate array of lowercase characters using split()
  const lowerCasedCharacters = "abcdefghijklmnopqrstuvwxyz".split("");

  // Generate array of uppercase characters using split()
  const upperCasedCharacters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");

  const handleCheckboxChange = (option, value) => {
    setPasswordOptions((prevOptions) => ({
      ...prevOptions,
      [option]: value,
    }));
    // Check if at least one checkbox is selected
    setCheckboxValid(
      passwordOptions.lowerCase ||
        passwordOptions.upperCase ||
        passwordOptions.numeric ||
        passwordOptions.special
    );
  };

  const handleLengthChange = (e) => {
    let length = parseInt(e.target.value);
    if (!isNaN(length)) {
      setPasswordOptions((prevOptions) => ({
        ...prevOptions,
        length: length,
      }));
    }
  };

  const handleGeneratePassword = () => {
    const { lowerCase, upperCase, numeric, special } = passwordOptions;
    const isAtLeastOneOptionSelected =
      lowerCase || upperCase || numeric || special;

    if (isAtLeastOneOptionSelected) {
      const password = generatePassword(passwordOptions);
      setGeneratedPassword(password);
      setShowErrorMessage(false); // Hide error message if at least one option is selected
    } else {
      setShowErrorMessage(true); // Show error message if no option is selected
    }
  };

  const getRandom = (arr) => {
    let randomIndex = Math.floor(Math.random() * arr.length);
    return arr[randomIndex];
  };

  const generatePassword = (options) => {
    const { length, lowerCase, upperCase, numeric, special } = options;

    let availableCharacters = [];

    if (lowerCase)
      availableCharacters = availableCharacters.concat(lowerCasedCharacters);
    if (upperCase)
      availableCharacters = availableCharacters.concat(upperCasedCharacters);
    if (numeric)
      availableCharacters = availableCharacters.concat(numericCharacters);
    if (special)
      availableCharacters = availableCharacters.concat(specialCharacters);

    if (!lowerCase && !upperCase && !numeric && !special) {
      alert("Please select at least one character type.");
      return "";
    }

    let password = "";

    // Ensure inclusion of at least one character from each category only if multiple options are selected
    if (lowerCase || upperCase || numeric || special) {
      if (lowerCase) password += getRandom(lowerCasedCharacters);
      if (upperCase) password += getRandom(upperCasedCharacters);
      if (numeric) password += getRandom(numericCharacters);
      if (special) password += getRandom(specialCharacters);

      // If only one option is selected, generate remaining characters randomly
      for (let i = password.length; i < length; i++) {
        password += getRandom(availableCharacters);
      }
    } else {
      // If only one option is selected, generate the password randomly without ensuring inclusion of characters from all categories
      for (let i = 0; i < length; i++) {
        password += getRandom(availableCharacters);
      }
    }

    return password;
  };

  useEffect(() => {}, [passwordOptions]);

  useEffect(() => {}, []);

  useEffect(() => {
    setShowErrorMessage(false); // Hide error message when at least one checkbox is selected
  }, [checkboxValid]);

  useEffect(() => {
    // Hide error message when at least one option is selected
    if (
      passwordOptions.lowerCase ||
      passwordOptions.upperCase ||
      passwordOptions.numeric ||
      passwordOptions.special
    ) {
      setShowErrorMessage(false);
    }
  }, [passwordOptions]);

  const handleCopyPassword = () => {
    if (generatedPassword) {
      navigator.clipboard.writeText(generatedPassword);
      alert("Password copied to clipboard!");
    }
  };


  return (
    <div className="flex flex-col items-center justify-center max-w-4xl w-full border rounded-lg p-10">
      <Input
        variant="bordered"
        className="w-full sm:w-1/2 mr-auto"
        type="number"
        label="Password Length"
        value={passwordOptions.length}
        onChange={handleLengthChange}
      />
      <div className="display:block sm:flex justify-start gap-4 mt-4">
        <Checkbox
        className="mr-1 md:mr-0"
          checked={passwordOptions.lowerCase}
          onChange={(e) => handleCheckboxChange("lowerCase", e.target.checked)}
        >
          Lowercase
        </Checkbox>
        <Checkbox
        className="mr-1 md:mr-0"
          checked={passwordOptions.upperCase}
          onChange={(e) => handleCheckboxChange("upperCase", e.target.checked)}
        >
          Uppercase
        </Checkbox>
        <Checkbox
        className="mr-1 md:mr-0"
          checked={passwordOptions.numeric}
          onChange={(e) => handleCheckboxChange("numeric", e.target.checked)}
        >
          Numeric
        </Checkbox>
        <Checkbox
          checked={passwordOptions.special}
          onChange={(e) => handleCheckboxChange("special", e.target.checked)}
        >
          Special
        </Checkbox>
      </div>
      {showErrorMessage && (
        <p className="text-red-500 mt-4">Please select at least one option.</p>
      )}
      <div className="mt-4 bg-slate-100 border p-6 rounded-lg w-full flex items-center gap-4 justify-center">
        <textarea
          readOnly
          className="border resize-none border-slate-300 shadow-lg rounded-lg p-4 text-center w-full"
          placeholder="Your secure password"
          value={generatedPassword}
          onChange={() => {}}
        ></textarea>

<button onClick={handleCopyPassword} disabled={!generatedPassword} className="bg-slate-500 text-white px-4 py-2 rounded-lg ml-auto hover:opacity-45 duration-500 text-sm"><FontAwesomeIcon className="" icon={faCopy} /></button>
      </div>

      

      <button
        onClick={handleGeneratePassword}
        className="bg-[#FD735B] text-white px-4 py-2 rounded-lg mt-4 w-full hover:opacity-45 duration-500 font-semibold"
      >
        Generate Password
      </button>
      <span className="text-sm mr-auto mt-4 text-slate-400">Created by M Norris</span>
    </div>
  );
}
