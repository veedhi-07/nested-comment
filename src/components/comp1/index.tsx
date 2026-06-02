export default function comp1() {
  //   const onSubmit = () => {
  //     console.log("Submitted....");
  //   };
  return (
    <>
      <div className="display-flex items-center justify-center">
        <div className="display-flex flex-row items-center justify-center">
          <input
            type="text"
            placeholder="Add a new Comment"
            // className="h-30 w-7 text-2xl text-black"
            className="h-10 w-64 px-3 text-lg text-black border border-gray-400 rounded ml-5 mt-5"
          />
          <button
            className=" bg-blue-400 h-8 w-24 ml-4 rounded"
            onClick={() => {console.log("Submitted...")}}
          >
            Comment
          </button>
        </div>
      </div>
    </>
  );
}
