import { ProcessingStrategy } from "../../types/strategy.types.ts";
import { AppConfig } from "@chrome-safe-stream/shared/src";

export class NetStrategy implements ProcessingStrategy {
  private static readonly IPv4_REPLACEMENT = "***.***.***.***";

  private static readonly IPv6_REPLACEMENT =
    "****:****:****:****:****:****:****:****";

  static readonly IPV4_REGEX = /\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}/gi;

  static readonly IPV6_REGEX = /(?:[A-F0-9]{1,4}:){7}[A-F0-9]{1,4}/gi;

  private readonly name = "NetStrategy";

  getName(): keyof AppConfig {
    return this.name;
  }

  shouldProcess(input: string) {
    if (NetStrategy.IPV4_REGEX.test(input)) {
      return true;
    }

    if (NetStrategy.IPV6_REGEX.test(input)) {
      return true;
    }

    return false;
  }

  process(input: string) {
    return input
      .replace(NetStrategy.IPV4_REGEX, NetStrategy.IPv4_REPLACEMENT)
      .replace(NetStrategy.IPV6_REGEX, NetStrategy.IPv6_REPLACEMENT);
  }
}
