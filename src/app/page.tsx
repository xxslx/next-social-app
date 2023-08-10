import FollowingBar from "@/components/FollowingBar";
import PostList from "@/components/PostList";
import { getServerSession } from "next-auth";
import { authOptions } from "@/app/auth/signin/page";
import { redirect } from "next/navigation";

//ssr
export default async function HomePage() {
  const session = await getServerSession(authOptions);
  const user = session?.user;

  if (!user) {
    redirect("/auth/signin"); // session 있다면 로그인 페이지로 이동
  }

  return (
    <section>
      <FollowingBar />
      <PostList />
    </section>
  );
}
