"use client";

// This component was developed to test various functions on this website. It is not used for any other purpose.

const TestComp: React.FC = () => {
  // Function to handle the button click and change the background color
  const changeBackgroundColor = () => {
    document.body.style.backgroundColor = `#${Math.floor(Math.random() * 16777215).toString(16)}`;
  };

  return (
  <button
  onClick={changeBackgroundColor}
  className="btn btn-primary btn-primary-hover btn-primary-checked font-secondtitle cursor-pointer"
  >
  Discooo!!!!!🥳🎉
  </button>

  );
};

export default TestComp;
