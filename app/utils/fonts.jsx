import { Lora } from "next/font/google";
import { Chakra_Petch } from "next/font/google";
import { Monoton } from "next/font/google";
import { Bangers } from "next/font/google";
import { Space_Mono } from "next/font/google";
import { Raleway } from "next/font/google";
import { Oxygen } from "next/font/google";

export const lora = Lora({ subsets: ['latin'] });
export const chakra = Chakra_Petch({ subsets: ['latin'], weight: ['400', '300'] });
export const monoton = Monoton({ subsets: ['latin'], weight: ['400'] });
export const bangers = Bangers({ subsets: ['latin'], weight: ['400'] });
export const space = Space_Mono({ subsets: ['latin'], weight: ['400'] });
export const raleway = Raleway({ subsets: ['latin'], weight: ['400'] });
export const oxygen = Oxygen({ subsets: ['latin'], weight: ['400', '700'] })