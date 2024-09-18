import { Signup } from "@/components/Signup";

export default function Home() {
  return (
    <div className="flex">
      <div className="w-[50%]">
        <Signup />
      </div>
      <div className=" w-[50%] bg-blue-600"></div>
    </div>
  );
}
