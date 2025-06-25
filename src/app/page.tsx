
import Link from "next/link";


export default function Home() {
  return (
    <div  className="h-[500px] text-center items-center justify-center flex">

<div className="flex flex-col gap-8">
<p className="font-bold text-bold ">FOR THE LOVE OF EVERYTHING BLACK</p>

      <p>Log in here to view products Page</p>
<Link href="./log_in">
<div className="bg-black p-2 text-white cursor-pointer">
      <button className="cursor-pointer">Log In</button>

</div>
</Link>

<div>
  <p>Don't Have an account?
    <Link href="./sign_up">

     <span className="text-blue-700 text-underline cursor-pointer">Sign up</span></Link>
</p>
</div>
</div>
      

    </div>
  );
}
