import { auth } from "@clerk/nextjs/server";
import { UserButton } from "@clerk/nextjs";

export default function Home() {
  const { userId } = auth();
  return (
    <div className=" ">
      hello
      {userId && <UserButton afterSignOutUrl="/" />}
    </div>
  );
}
