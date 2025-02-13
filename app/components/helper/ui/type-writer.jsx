"use client";
import { useEffect, useState } from "react";

export const TypewriterEffectSmooth = ({
  words,
  cursor = true,
  speed = 50,
  deletionSpeed = 50,
  repeat = Infinity,
}) => {
  const [currentText, setCurrentText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentWord = words[currentIndex % words.length].text;

    const timeout = setTimeout(() => {
      if (!isDeleting) {
        setCurrentText(currentWord.substring(0, currentText.length + 1));
        if (currentText === currentWord) {
          setIsDeleting(true);
          setTimeout(() => setIsDeleting(false), 1000);
        }
      } else {
        setCurrentText(currentWord.substring(0, currentText.length - 1));
        if (currentText === "") {
          setIsDeleting(false);
          setCurrentIndex((prevIndex) => prevIndex + 1);
        }
      }
    }, isDeleting ? deletionSpeed : speed);

    return () => clearTimeout(timeout);
  }, [currentText, currentIndex, isDeleting, words, speed, deletionSpeed]);

  return (
    <span>
      {currentText}
      {cursor && <span className="blinking-cursor">|</span>}
    </span>
  );
};