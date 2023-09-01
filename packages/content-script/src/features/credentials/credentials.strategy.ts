import { ProcessingStrategy } from "../../types/strategy.types.ts";
import { Strategy } from "@chrome-safe-stream/shared/src";

export class CredentialsStrategy implements ProcessingStrategy {
  private readonly name: Strategy = "NetStrategy";

  getName() {
    return this.name;
  }

  shouldProcess(): boolean {
    return false;
  }

  process(input: string) {
    return input;
  }
}
