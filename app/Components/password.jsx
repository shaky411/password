"use client";

import coffee from "../../assets/bmc-button.png";
import { oxygen, raleway } from "../utils/fonts";
import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";
import { Checkbox } from "@nextui-org/react";
import { Input } from "@nextui-org/react";
import "@fortawesome/fontawesome-svg-core/styles.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCopy,
  faInfoCircle,
  faTriangleExclamation,
} from "@fortawesome/free-solid-svg-icons";
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
  useDisclosure,
} from "@nextui-org/react";
import { faApple, faMicrosoft } from "@fortawesome/free-brands-svg-icons";

export default function Password() {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  const [generatedPassword, setGeneratedPassword] = useState("");
  const [checkboxValid, setCheckboxValid] = useState(false);
  const [showErrorMessage, setShowErrorMessage] = useState(false);
  const [passwordStrength, setPasswordStrength] = useState("");
  const [crackingTime, setCrackingTime] = useState("");
  const [passwordOptions, setPasswordOptions] = useState({
    length: 20,
    lowerCase: true,
    upperCase: true,
    numeric: true,
    special: true,
  });

  // const myDefault = "5168";

  const specialCharacters = "@%!#$?/+-£*~;:".split("");

  // Generate array of numeric characters using split()
  const numericCharacters = "0123456789".split("");

  // Generate array of lowercase characters using split()
  const lowerCasedCharacters = "abcdefghijklmnopqrstuvwxyz".split("");

  // Generate array of uppercase characters using split()
  const upperCasedCharacters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");

  const handleCheckboxChange = (option, value) => {
    setPasswordOptions((prevOptions) => {
      const updatedOptions = { ...prevOptions, [option]: value };
      setCheckboxValid(
        updatedOptions.lowerCase ||
          updatedOptions.upperCase ||
          updatedOptions.numeric ||
          updatedOptions.special
      );
      return updatedOptions;
    });
  };

  const handleLengthChange = (e) => {
    const input = e.target.value;
    const length = parseInt(input);

    // Set length to null if input is empty; otherwise, parse the number
    if (input === "") {
      setPasswordOptions((prevOptions) => ({ ...prevOptions, length: null }));
    } else if (!isNaN(length) && length > 0) {
      setPasswordOptions((prevOptions) => ({ ...prevOptions, length }));
    }
  };

  const handleGeneratePassword = () => {
    if (passwordOptions.length) {
      const password = generatePassword(passwordOptions);
      setGeneratedPassword(password);
      setCrackingTime(calculateCrackingTime(password, passwordOptions));
    } else {
      alert("Please enter a valid password length.");
    }
  };
  
  const getRandom = (arr) => {
    const randomValues = new Uint32Array(1);
    window.crypto.getRandomValues(randomValues);
    let randomIndex = randomValues[0] % arr.length;
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

    if (lowerCase || upperCase || numeric || special) {
      if (lowerCase) password += getRandom(lowerCasedCharacters);
      if (upperCase) password += getRandom(upperCasedCharacters);
      if (numeric) password += getRandom(numericCharacters);
      if (special) password += getRandom(specialCharacters);

      for (let i = password.length; i < length; i++) {
        password += getRandom(availableCharacters);
      }

      password = shuffleString(password); // Ensure no predictable patterns
    } else {
      for (let i = 0; i < length; i++) {
        password += getRandom(availableCharacters);
      }
    }

    return password;
  };

  useEffect(() => {
    setCheckboxValid(
      passwordOptions.lowerCase ||
        passwordOptions.upperCase ||
        passwordOptions.numeric ||
        passwordOptions.special
    );
  }, [passwordOptions]);

  useEffect(() => {
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
      // alert("Password copied to clipboard!");
      onOpen();
    }
  };

  const getBackgroundColor = (strength) => {
    switch (strength) {
      case "Weak":
        return "bg-red-100";
      case "Good":
        return "bg-yellow-100";
      case "Strong":
        return "bg-green-100";
      default:
        return "bg-slate-100";
    }
  };

  const shuffleString = (str) => {
    const arr = str.split("");
    for (let i = arr.length - 1; i > 0; i--) {
      const randomValues = new Uint32Array(1);
      window.crypto.getRandomValues(randomValues);
      const j = randomValues[0] % (i + 1);
      [arr[i], arr[j]] = [arr[j], arr[i]];
    }
    return arr.join("");
  };

  const calculateCrackingTime = (password, options) => {
    let charsetSize = 0;
    if (options.lowerCase) charsetSize += 26;
    if (options.upperCase) charsetSize += 26;
    if (options.numeric) charsetSize += 10;
    if (options.special) charsetSize += specialCharacters.length;

    const combinations = Math.pow(charsetSize, password.length);
    let seconds = combinations / 1e9; // Assuming 1 billion guesses per second

    // Apply a random factor for slight variation
    const randomFactor = 0.9 + Math.random() * 0.2; // random number between 0.9 and 1.1
    seconds *= randomFactor;

    const timeUnits = [
      { unit: "seconds", value: 60 },
      { unit: "minutes", value: 60 },
      { unit: "hours", value: 24 },
      { unit: "days", value: 365 },
      { unit: "years", value: 1 },
    ];

    let time = seconds;
    let unitIndex = 0;

    while (
      unitIndex < timeUnits.length - 1 &&
      time >= timeUnits[unitIndex].value
    ) {
      time /= timeUnits[unitIndex].value;
      unitIndex++;
    }

    if (time >= 1e12)
      return `${(time / 1e12).toFixed(2)} trillion ${
        timeUnits[unitIndex].unit
      }`;
    if (time >= 1e9)
      return `${(time / 1e9).toFixed(2)} billion ${timeUnits[unitIndex].unit}`;
    if (time >= 1e6)
      return `${(time / 1e6).toFixed(2)} million ${timeUnits[unitIndex].unit}`;
    if (time >= 1e3)
      return `${(time / 1e3).toFixed(2)} thousand ${timeUnits[unitIndex].unit}`;

    return `${Math.round(time)} ${timeUnits[unitIndex].unit}`;
  };

  return (
    <div
      className={`${oxygen.className} flex flex-col mt-4 items-start justify-center max-w-6xl w-full border shadow rounded-lg p-4 sm:p-10`}
    >
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
          isSelected={passwordOptions.lowerCase}
          checked={passwordOptions.lowerCase}
          onChange={(e) => handleCheckboxChange("lowerCase", e.target.checked)}
        >
          Lowercase
        </Checkbox>
        <Checkbox
          className="mr-1 md:mr-0"
          isSelected={passwordOptions.upperCase}
          checked={passwordOptions.upperCase}
          onChange={(e) => handleCheckboxChange("upperCase", e.target.checked)}
        >
          Uppercase
        </Checkbox>
        <Checkbox
          className="mr-1 md:mr-0"
          isSelected={passwordOptions.numeric}
          checked={passwordOptions.numeric}
          onChange={(e) => handleCheckboxChange("numeric", e.target.checked)}
        >
          Numeric
        </Checkbox>
        <Checkbox
          isSelected={passwordOptions.special}
          checked={passwordOptions.special}
          onChange={(e) => handleCheckboxChange("special", e.target.checked)}
        >
          Special
        </Checkbox>
      </div>
      {showErrorMessage && (
        <p className="text-red-500 mt-4">Please select at least one option.</p>
      )}
      <div
        className={`mt-4 border p-6 rounded-lg w-full flex items-center gap-4 justify-center ${getBackgroundColor(
          passwordStrength
        )}`}
      >
        <textarea
          id="result"
          readOnly
          key={generatedPassword} // Force re-render by using key prop
          className="border resize-none border-slate-300 shadow-lg rounded-lg p-4 text-center w-full"
          placeholder="Your secure password"
          value={generatedPassword}
        ></textarea>

        <button
          onClick={handleCopyPassword}
          className={`${oxygen.className} text-center font-semibold relative inline-block group py-2 px-3`}
        >
          <span className="absolute inset-0 w-full h-full transition duration-500 ease-out transform translate-x-1 translate-y-1 bg-orange-800 group-hover:-translate-x-0 group-hover:-translate-y-0"></span>
          <span className="absolute inset-0 w-full h-full bg-white border border-orange-800 group-hover:bg-orange-100"></span>
          <span className="relative text-[#FD735B]">
            <FontAwesomeIcon icon={faCopy} />
          </span>
        </button>

        {/* <button
          onClick={handleCopyPassword}
          disabled={!generatedPassword}
          className="bg-slate-500 text-white px-4 py-2 rounded-lg ml-auto hover:opacity-45 duration-500 text-sm"
        >
          <FontAwesomeIcon className="" icon={faCopy} />
        </button> */}
      </div>

      <div className="mt-4 w-full text-center">
        

        {/* Cracking time display - only shown after password generation */}
      {generatedPassword && (
        <div className="mt-4 text-center">
          <p>It would take a computer approximately <strong>{crackingTime}</strong> to crack this password.</p>
        </div>
      )}
      </div>

      <div className="mx-auto mt-4 w-full">
        <button
          onClick={handleGeneratePassword}
          className={`${oxygen.className} text-center font-semibold relative inline-block group py-2 px-3 w-full`}
        >
          <span className="absolute inset-0 w-full h-full transition duration-500 ease-out transform translate-x-1 translate-y-1 bg-orange-800 group-hover:-translate-x-0 group-hover:-translate-y-0"></span>
          <span className="absolute inset-0 w-full h-full bg-[#FD735B] border border-orange-800 group-hover:bg-orange-300"></span>
          <span className="relative text-white">Generate Password</span>
        </button>
      </div>
      

      
      <Modal isOpen={isOpen} onOpenChange={onOpenChange}>
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader
                className={`${raleway.className} flex flex-col gap-1`}
              >
                Password copied to your clipboard.
              </ModalHeader>
              <ModalBody>
                <p
                  className={`${raleway.className} bg-gray-100 border p-4 rounded-lg`}
                >
                  Your password has been copied to your clipboard. To paste the
                  password somewhere else, press{" "}
                  <FontAwesomeIcon
                    className="text-slate-500"
                    icon={faMicrosoft}
                  />{" "}
                  <strong>CTRL + V</strong> on your keyboard or,{" "}
                  <FontAwesomeIcon className="text-slate-500" icon={faApple} />{" "}
                  <strong>CMD + V</strong>
                </p>

                <span
                  className={`${oxygen.className} text-sm text-rose-400 mr-auto mt-2`}
                >
                  <FontAwesomeIcon
                    className="mr-1"
                    icon={faTriangleExclamation}
                  />
                  Once copied, please save the password in a secure location
                  such as a password manager.
                </span>

                <div className="flex items-center mr-auto">
                  <Link
                    className="w-fit cursor-pointer"
                    href="https://buymeacoffee.com/7kqkk5rvsfv"
                    target="_blank"
                    rel="noopener noreferrer nofollow"
                  >
                    <Image
                      priority
                      src={coffee}
                      width={200}
                      height={200}
                      alt="buy me a coffee logo"
                    />
                  </Link>
                </div>
              </ModalBody>
              <ModalFooter>
                {/* <div className="">
                  <button
                    onPress={onClose}
                    className="relative inline-block font-medium group py-1.5 px-2.5 "
                  >
                    <span className="absolute inset-0 w-full h-full transition duration-500 ease-out transform translate-x-1 translate-y-1 bg-indigo-500 group-hover:-translate-x-0 group-hover:-translate-y-0"></span>
                    <span className="absolute inset-0 w-full h-full bg-white border border-indigo-600 group-hover:bg-indigo-50"></span>
                    <span className="relative text-indigo-600 ">Close</span>
                  </button>
                </div> */}

                <Button color="danger" variant="light" onPress={onClose}>
                  Close
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </div>
  );
}
