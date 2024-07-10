import React from "react";

const Form = ({ user }) => {
  return (
    <form className="flex gap-3 border-b border-zinc-600 p-4">
      <img
        className="rounded-full h-[35px] md:h-[45px]"
        src={user?.photoURL}
        alt={user?.displayName}
      />

      <div className="w-full">
        <input
          className="w-full mt-1 mb-2 bg-transparent
         outline-none md:text-lg"
          type="text"
        />

        <div className="flex justify-between items-center">
          <input type="file" />
          <button
            className="bg-blue-600 flex items-center 
    justify-center px-4 py-2 min-w-[85px] min-h-[40px] 
    rounded-full transition hover:bg-blue-800"
          >
            Tweetle
          </button>
        </div>
      </div>
    </form>
  );
};

export default Form;
