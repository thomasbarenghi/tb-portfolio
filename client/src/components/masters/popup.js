export default function Popup(props) {
  return (
    <>
      <div className=" fixed bottom-[16px] right-[16px] left-[16px] xs:left-auto md:bottom-[30px] md:right-[30px] z-50 flex justify-end items-end ">
        <div classname="bg-white rounded-xl w-full h-max flex  ">
          <div className="rounded-2xl bg-white p-6 max-w-[300px] shadow-xl ">
            <h1 className="pb-2 text-start text-xl font-medium">
              {props.title}
            </h1>
            <p className="pb-2 text-start text-sm text-black">
              {props.description}
            </p>
            <div className="flex items-center justify-center">
              <button className="w-full  text-sm text-start font-bold text-[#F24E1E]"
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
