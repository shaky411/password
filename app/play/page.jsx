
import Title from "../learningComponents/title";
import UseStateUseEffect from "../learningComponents/useStateUseEffect";
import { bangers } from "../utils/fonts";

export default function Play() {
  return (
    <main className="flex flex-col items-center justify-center max-w-6xl mx-auto p-10 sm:p-10">
        <h1 className={`${bangers.className} text-gray-600 text-6xl`}>Playground</h1>
      <UseStateUseEffect />
      <Title />
    </main>
  );
}
