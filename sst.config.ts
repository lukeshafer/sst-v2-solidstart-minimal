import { SSTConfig } from "sst";
import { EventBus, SolidStartSite } from "sst/constructs";

export default {
  config(_input) {
    return {
      name: "solidstart-sst2-dropin",
      region: "us-east-2",
    };
  },
  stacks(app) {
    app.stack(({ stack }) => {
      const bus = new EventBus(stack, "Bus", {
        defaults: {
          retries: 10,
        },
      });

      const site = new SolidStartSite(stack, "Site", {
        bind: [bus],
        buildCommand: "pnpm build",
      });
    });
  },
} satisfies SSTConfig;
