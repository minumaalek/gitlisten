import { auth } from "@/auth";
import * as actions from "@/actions";
import Profile from "./profile";
import Icon from "./icon";

export default async function AuthTool() {
  const session = await auth();

  return (
    <div className="">
      {session?.user ? (
        <Profile
          image={session.user.image}
          name={session.user.name}
          email={session.user.email}
        />
      ) : (
        <form action={actions.signIn}>
          <button className="primary">Login</button>
        </form>
      )}
    </div>
  );
}
