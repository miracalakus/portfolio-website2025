"use client";

const TestComp: React.FC = () => {
  // Function to handle the button click and change the background color
  const changeBackgroundColor = () => {
    document.body.style.backgroundColor = `#${Math.floor(Math.random() * 16777215).toString(16)}`;
  };

  return (
<button
  onClick={changeBackgroundColor}
  className="px-6 py-3 text-lg sm:px-8 sm:py-4 md:px-10 md:py-5 text-white bg-blue-500 hover:bg-blue-700 rounded-full cursor-pointer focus:ring-4 focus:ring-blue-300 active:bg-blue-800 transition-all duration-200 ease-in-out"
>
  Party!!!!!🥳🎉
</button>

  );
};

export default TestComp;
