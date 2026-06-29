import AuthTool from "./auth-tool";
import Logo from "@/components/logo";
import { BurgerMenu } from "./burger-menu";
import Link from "next/link";
export default function Header() {
  return (
    <>
      <nav className="w-screen h-6 px-5 py-10 flex items-center justify-between fixed">
        <div className="flex gap-4 items-center">
          <BurgerMenu />
          <div className="flex items-center gap-1">
            <Logo />
            <Link href={"/"} className="">
              <h1>GitListen</h1>
            </Link>
          </div>
        </div>
        <AuthTool />
      </nav>
    </>
  );
}
