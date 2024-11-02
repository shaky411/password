import posts from "../../data/posts";
import { bangers, raleway } from "@/app/utils/fonts";
import Image from "next/image";
import CopyLinkButton from "@/app/Components/copyLink";
// import Head from "next/head";
import Link from "next/link";
import "@fortawesome/fontawesome-svg-core/styles.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faXTwitter,
} from "@fortawesome/free-brands-svg-icons";

async function getPost(postId) {
  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/posts`);
  const posts = await res.json();
  return posts.find((post) => post.id === postId);
}

// Dynamically generate metadata
export async function generateMetadata({ params }) {
  const post = await getPost(params.postId);

  if(!post) {
    return{
      title: "Post not found",
      description: "The blog post you're looking for does not exist.",
    };
  }

  const currentUrl = `${process.env.NEXT_PUBLIC_BASE_URL}/blog/${post.id}`;

  return {
    title: post.title,
    keywords: `blog, blog post, reading, ${post.title}, writing, blogs`,
    openGraph: {
      title: post.title,
      description: post.subtitle,
      type: "article",
      url: currentUrl,
      authors: post.author,
      images: [
        {
          url: post.image,
          width: 800,
          height: 600,
          alt: post.title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.subtitle,
      image: post.image,
    },
  };
}

export default async function PostPage({ params }) {
  const post = await getPost(params.postId);
  console.log("this is the post", post);

  if (!post) {
    // Redirect to a 404 page or display a not found message
    return (
      <main className="flex flex-col justify-start gap-4 items-center min-h-screen p-10">
        <h1 className={`${bangers.className} text-4xl sm:text-7xl font-bold text-slate-600`}>Post Not Found</h1>
        <p className="text-gray-500">The blog post you're looking for does not exist.</p>
        <div className="">
      <Link href="/blog" className="relative inline-block font-medium group py-1.5 px-2.5 ">
          <span className="absolute inset-0 w-full h-full transition duration-500 ease-out transform translate-x-1 translate-y-1 bg-indigo-500 group-hover:-translate-x-0 group-hover:-translate-y-0"></span>
          <span className="absolute inset-0 w-full h-full bg-white border border-indigo-600 group-hover:bg-indigo-50"></span>
          <span className="relative text-indigo-600 ">&larr; back</span>
        </Link>
      </div>
      </main>
    );
  }

  // Construct the current URL dynamically using environment variable
  const currentUrl = `${process.env.NEXT_PUBLIC_BASE_URL}/blog/${post.id}`;

  return (
    <main className="flex flex-col gap-4 justify-start max-w-6xl mx-auto p-10 sm:p-10 min-h-screen">

      <Image
        priority
        className="rounded-md w-full"
        src={post.image}
        width={1100}
        height={400}
        alt={post.title}
      />

      <span className="text-tiny ml-auto text-gray-400">
        {post.image_details}
      </span>

      <div className="flex flex-col gap-3">
        <h2 className={`${raleway.className} text-2xl sm:text-4xl`}>
          {post.title}
        </h2>
        <span className={`${raleway.className} text-gray-700`}>
          {post.subtitle}
        </span>
      </div>

      <span className="text-sm text-gray-400">
        {post.date} - {post.author}
      </span>

      <div className={`${raleway.className} space-y-4`}>
        {post.content.split("\n").map((paragraph, index) => (
          <p key={index} className="text-base leading-relaxed">
            {paragraph}
          </p>
        ))}
      </div>

      <span className={`${raleway.className} italic text-gray-400 text-sm`}>Thanks for taking the time to read my post.</span>

      {/* Sharing links */}
      <div className="flex flex-col mt-4">
        <span className={`${raleway.className} text-blue-500`}>Share it</span>

        <div className="flex gap-2 my-4">
          <Link
            href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(
              currentUrl
            )}`}
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-500 hover:text-blue-500 duration-300"
          >
            <FontAwesomeIcon icon={faFacebook} size="xl" />
          </Link>

          <Link
            href={`https://twitter.com/intent/tweet?url=${encodeURIComponent(
              currentUrl
            )}&text=${encodeURIComponent(post.title)}`}
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-500 hover:text-black duration-300"
          >
            <FontAwesomeIcon icon={faXTwitter} size="xl" />
          </Link>

          <CopyLinkButton url={currentUrl} />
        </div>
      </div>

      <div className="mt-4 mr-auto">
        <Link
          href="/blog"
          className="relative inline-block font-medium group py-1.5 px-2.5 "
        >
          <span className="absolute inset-0 w-full h-full transition duration-500 ease-out transform translate-x-1 translate-y-1 bg-indigo-500 group-hover:-translate-x-0 group-hover:-translate-y-0"></span>
          <span className="absolute inset-0 w-full h-full bg-white border border-indigo-600 group-hover:bg-indigo-50"></span>
          <span className="relative text-indigo-600 ">&larr; back</span>
        </Link>
      </div>
    </main>
  );
}
