"use client"

import { useState, useEffect } from "react";
import posts from "../../data/posts";
import { bangers, oxygen, raleway } from "@/app/utils/fonts";
import Image from "next/image";
import Link from "next/link";
import "@fortawesome/fontawesome-svg-core/styles.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faThumbsUp } from "@fortawesome/free-solid-svg-icons";
import { createClient } from "@supabase/supabase-js";

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

// Initialize Supabase
const supabase = createClient(supabaseUrl, supabaseKey);

async function getPost(postId) {
  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/posts`);
  const posts = await res.json();
  return posts.find((post) => post.id === postId);
}

export default function PostPage({ params }) {
  const [post, setPost] = useState(null);
  const [likes, setLikes] = useState(0);
  const [hasLiked, setHasLiked] = useState(false); // Track if user has liked the post

  useEffect(() => {
    const fetchPostAndLikes = async () => {
      const post = await getPost(params.postId);
      setPost(post);

      if (post) {
        // Get the current likes count for this post from Supabase
        const { data, error } = await supabase
          .from("blog_post_likes")
          .select("likes")
          .eq("id", post.id)
          .single();

        if (data) setLikes(data.likes || 0);
        if (error) console.error("Error fetching likes:", error);

        // Check if the user has liked the post by looking at local storage
        const likedPosts = JSON.parse(localStorage.getItem("likedPosts") || "{}");
        setHasLiked(!!likedPosts[post.id]); // Set to true if post.id is in local storage
      }
    };

    fetchPostAndLikes();
  }, [params.postId]);

  const handleLike = async () => {
    if (hasLiked) return; // Prevent multiple likes

    // Update the like count in Supabase
    const { data, error } = await supabase
      .from("blog_post_likes")
      .upsert({ id: post.id, likes: likes + 1 }, { onConflict: ["id"] })
      .select("likes")
      .single();

    if (data) {
      setLikes(data.likes);
      setHasLiked(true); // Update local state

      // Update local storage
      const likedPosts = JSON.parse(localStorage.getItem("likedPosts") || "{}");
      likedPosts[post.id] = true;
      localStorage.setItem("likedPosts", JSON.stringify(likedPosts));
    }

    if (error) console.error("Error updating likes:", error);
  };

  if (!post) {
    return <p>Post not found</p>;
  }

  return (
    <main className="flex flex-col gap-4 justify-start max-w-6xl mx-auto p-10 sm:p-10 min-h-screen">
      {/* Post Image */}
      <Image
        priority
        className="rounded-md w-full"
        src={post.image}
        width={1100}
        height={400}
        alt={post.title}
      />

      {/* Post Details */}
      <div className="flex flex-col gap-3">
        <h2 className={`${raleway.className} text-2xl sm:text-4xl`}>{post.title}</h2>
        <span className={`${raleway.className} text-gray-700`}>{post.subtitle}</span>
      </div>

      <span className="text-sm text-gray-400">{post.date} - {post.author}</span>

      {/* Post Content */}
      <div className={`${raleway.className} space-y-4`}>
        {post.content.split("\n").map((paragraph, index) => (
          <p key={index} className="text-base leading-relaxed">{paragraph}</p>
        ))}
      </div>

      {/* Likes Button */}
      <div className="flex gap-4">
        <div className="border w-fit px-2 py-1 rounded shadow">
          <button
            onClick={handleLike}
            className="mr-2 text-gray-500"
            disabled={hasLiked} // Disable button if liked
          >
            <FontAwesomeIcon icon={faThumbsUp} />
          </button>
          <span className="text-blue-500">{likes}</span>
        </div>
      </div>

      {/* Back to Blog Link */}
      <Link
        className={`${oxygen.className} mt-4 mr-auto bg-gray-400 hover:opacity-50 duration-400 px-4 py-2 text-white rounded`}
        href="/blog"
      >
        &larr; Back
      </Link>
    </main>
  );
}
