import "sst/node/config";
declare module "sst/node/config" {
  export interface ConfigTypes {
    APP: string;
    STAGE: string;
  }
}

import "sst/node/event-bus";
declare module "sst/node/event-bus" {
  export interface EventBusResources {
    "Bus": {
      eventBusName: string;
    }
  }
}

import "sst/node/site";
declare module "sst/node/site" {
  export interface SolidStartSiteResources {
    "Site": {
      url: string;
    }
  }
}

import "sst/node/site";
declare module "sst/node/site" {
  export interface SolidStartSiteResources {
    "Site": {
      url: string;
    }
  }
}

