import { Collection } from "@/components/shared/Collection"
import { navLinks } from "@/constants"
import { getUserImages } from "@/lib/actions/image.actions";
import Image from "next/image"
import Link from "next/link"
import { auth } from "@clerk/nextjs";
import { redirect } from "next/navigation";
import { getUserById } from "@/lib/actions/user.actions";

const Home = async ({ searchParams }: SearchParamProps) => {
  const page = Number(searchParams?.page) || 1;
  const { userId } = auth();

  console.log("Clerk userId:", userId); // Debug log

  if (!userId) {
    console.log("No userId found, redirecting to sign-in"); // Debug log
    redirect("/sign-in");
  }

  let user;
  let images;

  try {
    console.log("Attempting to fetch user with ID:", userId); // Debug log
    user = await getUserById(userId);
    console.log("User fetched:", user ? "Success" : "Not found"); // Debug log
    
    if (!user) {
      console.log("User not found in database"); // Debug log
      return (
        <div className="flex flex-col items-center justify-center min-h-screen">
          <h1 className="h1-bold mb-4">Welcome to AI Image Generator</h1>
          <p className="text-center mb-4">It looks like your account hasnt been fully set up yet.</p>
          <Link href="/profile" className="blue_btn">
            Complete Your Profile
          </Link>
        </div>
      );
    }

    console.log("Fetching images for user:", user._id); // Debug log
    images = await getUserImages({ page, userId: user._id });
    console.log("Images fetched:", images ? "Success" : "Failed"); // Debug log
  } catch (error) {
    console.error("Error fetching user or images:", error);
    return (
      <div className="flex flex-col items-center justify-center min-h-screen">
        <h1 className="h1-bold mb-4">Oops! Something went wrong</h1>
        <p className="text-center mb-4">We are having trouble loading your information. Please try again later.</p>
        <p className="text-center text-sm text-gray-500">Error details: {(error as Error).message}</p>
      </div>
    );
  }

  return (
    <>
      <section className="home">
        <ul className="flex-center w-full gap-20">
          {navLinks.slice(1, 5).map((link) => (
            <Link
              key={link.route}
              href={link.route}
              className="flex-center flex-col gap-2"
            >
              <li className="flex-center w-fit rounded-full bg-white p-4">
               <Image src={link.icon} alt={link.label} width={24} height={24} priority />
              </li>
              <p className="p-14-medium text-center text-white">{link.label}</p>
            </Link>
          ))}
        </ul>
      </section>

      <section className="sm:mt-12">
        <Collection 
          images={images?.data}
          totalPages={images?.totalPages}
          page={page}
        />
      </section>
    </>
  )
}

export default Home