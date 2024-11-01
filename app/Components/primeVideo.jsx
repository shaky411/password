import Image from "next/image";
import Link from "next/link";
import primeVideo from "../../public/assets/prime_video.jpg";

export default function PrimeVideo() {
  return (
    <main className="mx-auto">
      <div>
        <Link
          target="_blank"
          rel="noopener noreferrer nofollow"
          href="https://amzn.to/48uKRyw"
        >
          <Image src={primeVideo} width={2000} alt="prime video banner" />
        </Link>
      </div>
    </main>
  );
}
