import posts from "../../data/posts";
import { bangers, oxygen, raleway } from "@/app/utils/fonts";
import Image from "next/image";
import Link from "next/link";
import "@fortawesome/fontawesome-svg-core/styles.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faInfoCircle,
  faShare,
  faThumbsUp,
} from "@fortawesome/free-solid-svg-icons";

async function getPost(postId) {
  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/posts`);
  const posts = await res.json();
  return posts.find((post) => post.id === postId);
}

export default async function PostPage({ params }) {
  const post = await getPost(params.postId);

  if (!post) {
    return <p>Post not found</p>;
  }

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

      {/* <div className="flex gap-4">
      <div className="border w-fit px-2 py-1 rounded shadow">
        <button className="mr-2 text-gray-500">
          <FontAwesomeIcon icon={faThumbsUp} />
        </button>

        <span className="text-blue-500">3</span>
      </div>

      <div className="border w-fit px-2 py-1 rounded shadow">
        <button className=" text-gray-500">
          <FontAwesomeIcon icon={faShare} />
        </button>
      </div>

      </div> */}

      <div className="mt-4 mr-auto">
        <Link
          href="/blog"
          class="relative inline-block font-medium group py-1.5 px-2.5 "
        >
          <span class="absolute inset-0 w-full h-full transition duration-500 ease-out transform translate-x-1 translate-y-1 bg-indigo-500 group-hover:-translate-x-0 group-hover:-translate-y-0"></span>
          <span class="absolute inset-0 w-full h-full bg-white border border-indigo-600 group-hover:bg-indigo-50"></span>
          <span class="relative text-indigo-600 ">&larr; back</span>
        </Link>
      </div>
    </main>
  );
}
