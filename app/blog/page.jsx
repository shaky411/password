import "@fortawesome/fontawesome-svg-core/styles.css";
import { bangers, oxygen, raleway } from "../utils/fonts";
import Link from "next/link";
import Image from "next/image";

async function fetchPosts() {
  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/posts`, {
    next: {
      revalidate: 1,
    },
  });
  if (!res.ok) {
    throw new Error("Failed to fetch posts");
  }
  const data = await res.json();
  return data;
}

export default async function Blog() {
  const posts = await fetchPosts();

  // Separate the first post and the remaining posts
  const firstPost = posts[0];
  const remainingPosts = posts.slice(1);

  return (
    <main className="flex flex-col items-center justify-center max-w-5xl mx-auto p-10 sm:p-10">
      <div className="flex flex-col items-center justify-between gap-4 text-center">
        <div>
          <h2
            className={`${bangers.className} text-5xl font-light text-slate-600`}
          >
            Blog
          </h2>
          <p className={`${raleway.className} font-light mt-4 mb-10`}>
            Follow along as I share insights on what I'm learning, the waves I'm
            catching, and the paths I'm navigating.
          </p>
        </div>

        <div>
          {/* First Post Section */}
          <section className="flex flex-col items-center justify-center mb-10 p-6 border-b border-gray-300">
            <Image
              priority
              className="w-full mb-4"
              src={firstPost.image}
              width={800}
              height={400}
              alt={firstPost.title}
            />
            <h2 className={`${raleway.className} text-gray-600 text-3xl`}>
              {firstPost.title}
            </h2>
            <span className="text-tiny text-gray-400 mt-2">{firstPost.date}</span>
            <p className={`${raleway.className} mt-4 mb-4 text-md`}>
              {firstPost.content.slice(0, 100)}...
            </p>
            <Link
              className={`${oxygen.className} rounded border-2 py-2 px-4 border-pink-400 hover:bg-slate-100 duration-400`}
              href={`/blog/${firstPost.id}`}
            >
              Continue Reading
            </Link>
          </section>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {remainingPosts.map((post) => (
              <ul key={post.id}>
                <li
                  className="flex flex-col items-center justify-center gap-4"
                  // key={post.id}
                >
                  <Image
                    priority
                    className="w-full opacity-25"
                    src={post.image}
                    width={500}
                    height={150}
                    alt={post.title}
                  />
                  <h2 className={`${raleway.className} text-gray-600 text-3xl`}>
                    {post.title}
                  </h2>
                  <p className={`${raleway.className}`}>{post.content.slice(0, 100)}...</p>
                  <Link
                    className={`${oxygen.className} rounded pointer-events-none border-2 py-2 px-4 border-pink-400 hover:bg-slate-100 duration-400`}
                    href={`/blog/${post.id}`}
                  >
                    Coming soon!
                  </Link>
                </li>
              </ul>
            ))}
          </div>
        </div>
      </div>

      {/* I want to have an image, blog title, blog subtitle, the body text, date time and posted by. I also want to have a like counter. On the individual id page I want a share story option */}
      {/* Next iteration will have a comments field */}

      {/* <Link
        className={`${oxygen.className} my-10 mr-auto bg-blue-500 hover:opacity-50 duration-400 px-4 py-2 text-white rounded`}
        href="/"
      >
        &larr; Back
      </Link> */}
    </main>
  );
}
