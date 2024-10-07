import { IoArrowUpCircleSharp } from "react-icons/io5";

export const YourIncome = () => {
  return (
    <div className="w-[384px] h-[216px] bg-white rounded-xl ">
      <p className="flex items-center gap-2 py-4 px-6 border-b-[1px] border-slate-200">
        <div className=" border-green-500 border-l-8 w-2 h-2 rounded-[50%]" />{" "}
        <div className="font-semibold">Your Income</div>
      </p>
      <p className="flex flex-col gap-4 px-6 py-5">
        <p className="">
          <div className=" text-4xl font-semibold">1,200,000₮</div>
          <div className=" text-slate-500 text-lg">Your Income Amount</div>
        </p>
        <div className="flex gap-2 items-center">
          <IoArrowUpCircleSharp className="fill-green-500" />{" "}
          <div className="text-[18px]">32% from last month</div>
        </div>
      </p>
    </div>
  );
};
