export interface Spread {
  name: string;
  guide?: string;
  description: string;
  link?: string;
  interpretations: Interpretation[];
}

export type Interpretation = {
  position: number;
  interpretation: string;
}[];

export interface Card {
  name: string;
  description: string;
  normal: string;
  reversed: string;
  detail?: string;
  link?: string;
  position?: number;
  flipped?: boolean;
  direction?: "normal" | "reversed";
}

export interface DivinationElements {
  question: string;
  spread: Spread;
  cards: Card[];
}

export enum ChatRole {
  Assistant = "assistant",
  User = "user",
}

export enum LLMRole {
  Assistant = "assistant",
  User = "user",
  System = "system",
}

export interface Message {
  role: ChatRole;
  content: string;
}

export interface LLMMessage {
  role: LLMRole;
  content: string;
}
