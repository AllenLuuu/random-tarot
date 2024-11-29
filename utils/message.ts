import {
  Card,
  ChatRole,
  DivinationElements,
  LLMMessage,
  LLMRole,
  Message,
  Spread,
} from "../types";
import { systemPrompt } from "./prompt";

export interface MessageAddReq {
  messages: LLMMessage[];
}

const prefix =
  process.env.NODE_ENV === "development" ? "http://localhost:3005/llm" : "/llm";

export type MessageAddRes = Omit<Message, "role">;

export const addMessage = async (messages: Message[]) => {
  const payload = {
    messages: [
      {
        role: LLMRole.System,
        content: systemPrompt,
      },
      ...messages,
    ],
  };
  const res = await fetch(prefix + "/chat", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(payload as MessageAddReq),
  });

  return res.body?.getReader();
};

export const constructDivinationMessage = (
  divinationElements: DivinationElements
) => {
  const spreadReservedKeys = ["name", "description", "interpretations"];
  const cardReservedKeys = [
    "position",
    "name",
    "direction",
    "description",
    "normal",
    "reversed",
  ];
  const simplifiedDivinationElements: DivinationElements = {
    question: divinationElements.question,
    // 仅保留 divinationElements.spread 中在 spreadReservedKeys 内的 key
    spread: Object.fromEntries(
      Object.entries(divinationElements.spread).filter(([key]) =>
        spreadReservedKeys.includes(key)
      )
    ) as Spread,
    cards: divinationElements.cards.map((card) =>
      Object.fromEntries(
        Object.entries(card).filter(([key]) => cardReservedKeys.includes(key))
      )
    ) as Card[],
  };
  return {
    role: ChatRole.User,
    content: JSON.stringify(simplifiedDivinationElements),
  };
};
