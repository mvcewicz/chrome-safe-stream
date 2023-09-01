import { NetStrategy } from "./net.strategy.ts";

describe("net.service", () => {
  let netService: NetStrategy;

  beforeEach(() => {
    netService = new NetStrategy();
  });

  it("should hide ip from input", () => {
    const input = "hello world 1.1.1.1 x 127.0.0.1";
    expect(netService.process(input)).toEqual(
      "hello world ***.***.***.*** x ***.***.***.***",
    );
  });
});
