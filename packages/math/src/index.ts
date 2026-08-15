import { evaluate, format } from "mathjs";

export function stringToEval(s: string) {
  return format(evaluate(s));
}
