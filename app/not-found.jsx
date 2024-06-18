import Link from "next/link";
import { monoton } from "./utils/fonts";

export default function NotFound() {
    return (
        <main className="flex flex-col items-center justify-center min-h-screen mx-auto p-6">
            <div className="flex flex-col justify-center items-center gap-5 text-center">
            <h1 className={`${monoton.className} text-6xl text-indigo-500`}>Password Manager</h1>
            <h2>We're sorry, we could not find the page you were looking for.</h2>
            <p>go back <Link className="text-indigo-500 font-semibold" href="/">Home</Link></p>
            </div>
        </main>
    );
}