import posts from "../../data/posts";
import { bangers, oxygen, raleway } from "@/app/utils/fonts";
import Image from "next/image";
// import Head from "next/head";
import Link from "next/link";
import "@fortawesome/fontawesome-svg-core/styles.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faInfoCircle,
  faShare,
  faThumbsUp,
} from "@fortawesome/free-solid-svg-icons";
import {
  faFacebook,
  faLinkedin,
  faMedium,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";


async function getPost(postId) {
  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/posts`);
  const posts = await res.json();
  return posts.find((post) => post.id === postId);
}

// Dynamically generate metadata
export async function generateMetadata({ params }) {
  const post = await getPost(params.postId);
  const currentUrl = `${process.env.NEXT_PUBLIC_BASE_URL}/blog/${post.id}`;

  return {
    title: post.title,
    openGraph: {
      title: post.title,
      description: post.subtitle,
      url: currentUrl,
      type: "article",
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
    return <p>Post not found</p>;
  }

  // Construct the current URL dynamically using environment variable
  const currentUrl = `${process.env.NEXT_PUBLIC_BASE_URL}/blog/${post.id}`

  return (
    <main className="flex flex-col gap-4 justify-start max-w-6xl mx-auto p-10 sm:p-10 min-h-screen">

      {/* <Head>
        <title>{post.title}</title>
        <meta property="og:title" content={post.title} />
        <meta property="og:description" content={post.subtitle} />
        <meta property="og:image" content={post.image} />
        <meta property="og:url" content={currentUrl} />
        <meta property="og:type" content="article" />
      </Head> */}

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

      {/* <div className="flex flex-col mt-4">


        <span className={`${raleway.className} text-gray-500`}>Share it</span>
        
        <div className="flex gap-4 my-4">
        <Link
          href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(
            currentUrl
          )}`}
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-500 hover:text-gray-900 duration-300"
        >
          <FontAwesomeIcon icon={faFacebook} size="xl" />
        </Link>

        
        <Link
          href={`https://www.linkedin.com/shareArticle?mini=true&url=${encodeURIComponent(
            currentUrl
          )}&title=${encodeURIComponent(
            post.title
          )}&summary=${encodeURIComponent(
            post.subtitle
          )}&source=${encodeURIComponent(currentUrl)}`}
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-500 hover:text-gray-900 duration-300"
        >
          <FontAwesomeIcon icon={faLinkedin} size="xl" />
        </Link>

        <Link
          href={`https://twitter.com/intent/tweet?url=${encodeURIComponent(
            currentUrl
          )}&text=${encodeURIComponent(post.title)}`}
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-500 hover:text-gray-900 duration-300"
        >
          <FontAwesomeIcon icon={faTwitter} size="xl" />
        </Link>
        </div>
        
      </div> */}

      <Link
        className="text-gray-500 hover:text-gray-900 duration-300 w-fit"
        target="_blank"
        rel="noopener noreferrer nofollow"
        href="https://medium.com/@shaky411"
      >
        <FontAwesomeIcon size="xl" icon={faMedium} />
      </Link>
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
