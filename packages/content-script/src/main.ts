import { App } from "./app.ts";
import { NetStrategy } from "./features/net/net.strategy.ts";

async function main() {
  new App()
    .registerService(new NetStrategy())
    // .registerService(new CredentialsStrategy())
    .run();
}

main();
