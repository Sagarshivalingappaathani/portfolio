import React from 'react';
import AnimationLottie from "../helper/animation-lottie";
import loader from "/public/lottie/preloader.json";

const Preloader = () => {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-white z-50">
      <div className="w-56 h-56">
        <AnimationLottie animationPath={loader} />
      </div>
    </div>
  );
};

export default Preloader;
