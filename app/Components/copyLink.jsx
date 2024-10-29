"use client"; // This marks the component as a client component

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCopy, faLink } from "@fortawesome/free-solid-svg-icons";

export default function CopyLinkButton({ url }) {
  const handleCopyLink = () => {
    navigator.clipboard.writeText(url)
      .then(() => {
        alert("Link copied to clipboard!");
      })
      .catch((err) => {
        console.error("Failed to copy link: ", err);
      });
  };

  return (
    <button
      onClick={handleCopyLink}
      className="text-gray-500 hover:text-gray-900 duration-300"
    >
      <FontAwesomeIcon icon={faLink} size="xl" />
    </button>
  );
}
