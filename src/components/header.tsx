import AuthTool from "./auth-tool";
import Logo from "@/components/logo";
import Icon from "./icon";

export default function Header() {
  const menuLine = <div className="border-2 border-white w-7"></div>;

  return (
    <>
      <nav className="w-screen h-6 px-5 py-10 flex items-center justify-between">
        <div className="flex gap-4 items-center">
          <div className="flex flex-col gap-1 cursor-pointer">
            {[...Array(3)].map((_, index) => (
              <div key={index} className="border-2 border-white w-6" />
            ))}
          </div>
          <div className="flex items-center gap-1">
            <Logo />
            <h1 className="">GitListen</h1>
          </div>
        </div>
        <AuthTool />
      </nav>
    </>
  );
}
