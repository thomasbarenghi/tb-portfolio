export default function Popup(props) {
  return (
    <>
      <div className=" fixed bottom-[16px] left-[16px] right-[16px] z-50 flex items-end justify-end xs:left-auto md:bottom-[30px] md:right-[30px] ">
        <div classname="bg-white rounded-xl w-full h-max flex  ">
          <div className="max-w-[300px] rounded-2xl bg-white p-6 shadow-xl ">
            <h1 className="pb-2 text-start text-xl font-medium">
              {props.title}
            </h1>
            <p className="pb-2 text-start text-sm text-black">
              {props.description}
            </p>
            <div className="flex items-center justify-center">
              <button
                className="w-full  text-start text-sm font-bold text-[#F24E1E]"
                onClick={props.closePopup}
              >
                {props.buttonText}
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
