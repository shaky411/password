import Link from "next/link";
import { bangers, monoton, raleway } from "./utils/fonts";

export default function NotFound() {
    return (
        <main className={`${raleway.className} flex flex-col items-center justify-Start min-h-screen mx-auto`}>
            <div className="flex flex-col justify-center items-center gap-5 text-center p-10 mt-36">
            <h1 className={`${bangers.className} text-4xl md:text-7xl text-indigo-500`}>Passwordmanager.org.uk</h1>
            <h2>We're sorry, we could not find the page you were looking for.</h2>
            <p>go back <Link className="text-indigo-500 font-semibold" href="/">Home</Link></p>
            </div>
        </main>
    );
}