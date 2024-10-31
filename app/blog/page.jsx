import "@fortawesome/fontawesome-svg-core/styles.css";
import { bangers, oxygen, raleway } from "../utils/fonts";
import Link from "next/link";
import Image from "next/image";
import NewsletterForm from "../Components/newsForm";
import ogImage from "../../public/blog_ogImage.jpg"

export const metadata = {
  title: {
    default: "Marc's Blog",
  },
  alternates: {
    canonical: "https://www.passwordmanager.org.uk/blog",
  },
  keywords:
    "blog, blogs, marc's blog, my blog, surfing, tech, trails, family",
  openGraph: {
    title: "Marc's Blog",
    description: "Follow along as I share insights on what I'm learning, the waves I'm catching, and the paths I'm navigating.",
    images: [
      {
        url: ogImage.src,
        width: ogImage.width,
        height: ogImage.height,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
  },
  description: "Follow along as I share insights on what I'm learning, the waves I'm catching, and the paths I'm navigating.",
  metadataBase: new URL("https://www.passwordmanager.org.uk/blog"),
  robots: {
    index: true,
    follow: true,
    nocache: true,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

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
  console.log("Fetched posts data:", data); // Log the data to confirm it's an array
  return Array.isArray(data) ? data : []; // Ensure we return an array even if data is undefined
}

export default async function Blog() {
  const posts = await fetchPosts();

  // Check that posts array exists and contains elements
  if (!Array.isArray(posts) || posts.length === 0) {
    return <p>No posts available</p>;
  }

  // Separate the first post and the remaining posts
  const firstPost = posts[0];
  const secondPost = posts[1];
  const remainingPosts = posts.slice(2);

  return (
    <main className="flex flex-col items-center justify-center max-w-5xl mx-auto p-10 sm:p-10">
      <div className="flex flex-col items-center justify-between gap-4 text-center">
        <div>
          <h2
            className={`${bangers.className} text-5xl font-light text-slate-600`}
          >
            Blog
          </h2>
          <p className={`${raleway.className} font-light mt-4`}>
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
            <span className="text-tiny text-gray-400 mt-2">
              {firstPost.date}
            </span>
            <p className={`${raleway.className} mt-4 text-md`}>
              {typeof firstPost.content === "string"
                ? firstPost.content.slice(0, 100)
                : "Content not available"}
              ...
            </p>

            <span className="my-2 text-gray-400 text-sm">{firstPost.reading_time}</span>

            <div className="mx-auto">
              <Link
                href={`/blog/${firstPost.id}`}
                className={`${oxygen.className} relative inline-block group py-2 px-3`}
              >
                <span className="absolute inset-0 w-full h-full transition duration-500 ease-out transform translate-x-1 translate-y-1 bg-pink-500 group-hover:-translate-x-0 group-hover:-translate-y-0"></span>
                <span className="absolute inset-0 w-full h-full bg-white border border-pink-500 group-hover:bg-pink-50"></span>
                <span className="relative text-pink-500 ">
                  Continue reading
                </span>
              </Link>
            </div>

            {/* <Link
              className={`${oxygen.className} rounded border-2 py-2 px-4 border-pink-400 hover:bg-slate-100 duration-400`}
              href={`/blog/${firstPost.id}`}
            >
              Continue Reading
            </Link> */}
          </section>

          {/* First Post Section */}
          <section className="flex flex-col items-center justify-center mb-10 p-6 border-b border-gray-300">
            <Image
              priority
              className="w-full mb-4"
              src={secondPost.image}
              width={800}
              height={400}
              alt={secondPost.title}
            />
            <h2 className={`${raleway.className} text-gray-600 text-3xl`}>
              {secondPost.title}
            </h2>
            <span className="text-tiny text-gray-400 mt-2">
              {secondPost.date}
            </span>
            <p className={`${raleway.className} mt-4 text-md`}>
              {typeof secondPost.content === "string"
                ? secondPost.content.slice(0, 100)
                : "Content not available"}
              ...
            </p>

            <span className="my-2 text-gray-400 text-sm">{secondPost.reading_time}</span>

            <div className="mx-auto">
              <Link
                href={`/blog/${secondPost.id}`}
                className={`${oxygen.className} relative inline-block group py-2 px-3`}
              >
                <span className="absolute inset-0 w-full h-full transition duration-500 ease-out transform translate-x-1 translate-y-1 bg-pink-500 group-hover:-translate-x-0 group-hover:-translate-y-0"></span>
                <span className="absolute inset-0 w-full h-full bg-white border border-pink-500 group-hover:bg-pink-50"></span>
                <span className="relative text-pink-500 ">
                  Continue reading
                </span>
              </Link>
            </div>

            {/* <Link
              className={`${oxygen.className} rounded border-2 py-2 px-4 border-pink-400 hover:bg-slate-100 duration-400`}
              href={`/blog/${firstPost.id}`}
            >
              Continue Reading
            </Link> */}
          </section>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {remainingPosts.map((post) => (
              <ul key={post.id}>
                <li className="flex flex-col items-center justify-center gap-4">
                  <Image
                    priority
                    className="w-full"
                    src={post.image}
                    width={500}
                    height={150}
                    alt={post.title}
                  />
                  <h2 className={`${raleway.className} text-gray-600 text-3xl`}>
                    {post.title}
                  </h2>
                  <p className={`${raleway.className}`}>
                    {typeof post.content === "string"
                      ? post.content.slice(0, 100)
                      : "Content not available"}
                    ...
                  </p>

                  {/* <span className="my-2 text-gray-400 text-sm">{post.reading_time}</span> */}

                  <div className="mx-auto">
                    <Link
                      href={`/blog/${post.id}`}
                      className={`${oxygen.className} relative inline-block group py-2 px-3`}
                    >
                      <span className="absolute inset-0 w-full h-full transition duration-500 ease-out transform translate-x-1 translate-y-1 bg-pink-500 group-hover:-translate-x-0 group-hover:-translate-y-0"></span>
                      <span className="absolute inset-0 w-full h-full bg-white border border-pink-500 group-hover:bg-pink-50"></span>
                      <span className="relative text-pink-500 ">
                        Continue reading
                      </span>
                    </Link>
                  </div>
                </li>
              </ul>
            ))}
          </div>
        </div>
      </div>

      {/* <NewsletterForm /> */}
    </main>
  );
}
