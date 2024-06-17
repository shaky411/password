import { Lora } from "next/font/google";
import { Chakra_Petch } from "next/font/google";
import { Monoton } from "next/font/google";

export const lora = Lora({ subsets: ['latin'] });
export const chakra = Chakra_Petch({ subsets: ['latin'], weight: ['400', '300'] });
export const monoton = Monoton({ subsets: ['latin'], weight: ['400'] });