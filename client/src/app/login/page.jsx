export default function Home() {
  return (
    <div className="flex h-screen">
      <div className=" w-[50%] bg-white flex items-center justify-center">
        <div className="flex flex-col justify-center gap-10">
          <div className="flex justify-center">
            <img src="logo&name.png" alt="" />
          </div>
          <div className="flex justify-center flex-col">
            <h1 className="text-center">Welcome Back</h1>
            <div className="text-center">
              Welcome back, Please enter your details
            </div>
          </div>
          <div className="flex flex-col gap-4 ">
            <input
              className="bg-gray-100 rounded-md border-gray-200 border-[1px] p-2"
              placeholder="Email"
            />
            <input
              className="bg-gray-100 rounded-md border-gray-200 border-[1px] p-2"
              placeholder="Password"
            />
            <button className="bg-blue-600 text-white rounded-2xl py-2">
              Log in
            </button>
          </div>
          <div className="flex gap-1 justify-center">
            <div>Don’t have account?</div>
            <button>Sign up</button>
          </div>
        </div>
      </div>
      <div className=" w-[50%] bg-blue-600"></div>
    </div>
  );
}
