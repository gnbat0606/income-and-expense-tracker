import { Login } from "@/components/login";

export default function Home() {
  return (
    <div className="flex">
      <div className="w-[50%]">
        <Login />
      </div>
      <div className=" w-[50%] bg-back"></div>
    </div>
  );
}
