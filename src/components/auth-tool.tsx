import { auth } from "@/auth";
import * as actions from "@/actions";
import Image from "next/image";
import Icon from "./icon";

export default async function AuthTool() {
  const session = await auth();

  return (
    <div className="">
      {session?.user ? (
        <Icon className="IMG">
          {session.user.image && (
            <Image
              src={session.user.image}
              width={40}
              height={40}
              alt="avatar"
              className="rounded-full"
            />
          )}
        </Icon>
      ) : (
        <form action={actions.signIn}>
          <button className="primary">Login</button>
        </form>
      )}
    </div>
  );
}
