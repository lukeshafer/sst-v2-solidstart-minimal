"use server"
import { EventBus } from 'sst/node/event-bus'

export default async function() {
  console.log("Server fn log working")
  return EventBus.Bus.eventBusName;
}
