"use client";

const TestComp: React.FC = () => {
  // Function to handle the button click and change the background color
  const changeBackgroundColor = () => {
    document.body.style.backgroundColor = `#${Math.floor(Math.random() * 16777215).toString(16)}`;
  };

  return (
  <button
  onClick={changeBackgroundColor}
  className="btn btn-primary btn-primary-hover font-subtitle cursor-pointer"
  >
  Discooo!!!!!🥳🎉
  </button>

  );
};

export default TestComp;
