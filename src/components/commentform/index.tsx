import { useState } from "react";

type commentformprops = {
  onSubmit: (text: string) => void;
  placeholder: string;
};

export default function CommmentForm({
  onSubmit,
  placeholder,
}: commentformprops) {
  const [text, setText] = useState("");

  const handleSubmit = () => {
    if (!text.trim()) return;

    onSubmit(text);

    setText("");
  };
  return (
    <>
      <div className="items-center justify-center">
        <div className="flex-row items-center justify-center">
          <input
            type="text"
            value={text}
            onChange={(e) => setText(e.target.value)}
            placeholder={placeholder}
            className="h-10 w-64 px-3 text-lg text-black border border-gray-400 rounded ml-5 mt-5"
          />
          <button
            className=" bg-blue-400 h-8 w-24 ml-4 rounded text-white"
            onClick={handleSubmit}
          >
            Comment
          </button>
        </div>
        {/* <Comp1 /> */}
      </div>
    </>
  );
}
