"use client";

import coffee from "../../assets/bmc-button.png";
import { oxygen } from "../utils/fonts";
import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";
import { Checkbox } from "@nextui-org/react";
import { Input } from "@nextui-org/react";
import "@fortawesome/fontawesome-svg-core/styles.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCopy,
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
      setPasswordStrength(evaluatePasswordStrength(password, passwordOptions));
    } else {
      setShowErrorMessage(true); // Show error message if no option is selected
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

  const evaluatePasswordStrength = (password, options) => {
    let strength = 0;

    if (options.length >= 12) strength += 1;
    if (options.length >= 16) strength += 1;

    if (options.lowerCase) strength += 1;
    if (options.upperCase) strength += 1;
    if (options.numeric) strength += 1;
    if (options.special) strength += 1;

    if (strength <= 2) return "Weak";
    if (strength <= 4) return "Good";
    return "Strong";
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

  return (
    <div className={`${oxygen.className} flex flex-col mt-4 items-start justify-center max-w-6xl w-full border shadow rounded-lg p-4 sm:p-10`}>
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
          className="border resize-none border-slate-300 shadow-lg rounded-lg p-4 text-center w-full"
          placeholder="Your secure password"
          value={generatedPassword}
          onChange={() => {}}
        ></textarea>

        <button
          onClick={handleCopyPassword}
          disabled={!generatedPassword}
          className="bg-slate-500 text-white px-4 py-2 rounded-lg ml-auto hover:opacity-45 duration-500 text-sm"
        >
          <FontAwesomeIcon className="" icon={faCopy} />
        </button>
      </div>

      <div className="mt-4 w-full text-center">
        <span
          className={`font-semibold ${
            passwordStrength === "Weak"
              ? "text-red-500"
              : passwordStrength === "Good"
              ? "text-yellow-500"
              : "text-green-500"
          }`}
        >
          {passwordStrength && `${passwordStrength} password`}
        </span>
      </div>

      <button
        onClick={handleGeneratePassword}
        className="bg-[#FD735B] text-white px-4 py-2 rounded-lg mt-4 w-full hover:opacity-45 duration-500 font-semibold"
      >
        Generate Password
      </button>

      <Modal isOpen={isOpen} onOpenChange={onOpenChange}>
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1">
                Password copied to your clipboard.
              </ModalHeader>
              <ModalBody>
                <p className="bg-gray-100 border p-4 rounded-lg">
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

                <span className="text-sm text-rose-400 mr-auto mt-2">
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
