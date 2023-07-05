import type { EventProcessor, Hub, Integration } from "@sentry/types";
import { isBrowser } from "./utils/isBrowser";

import "./widget.css";

export default class ReplayWidget implements Integration {
  public static id: string = "ReplayWidget";
  public name: string = ReplayWidget.id;

  setupOnce(
    addGlobalEventProcessor: (callback: EventProcessor) => void,
    getCurrentHub: () => Hub
  ): void {
    if (!isBrowser()) {
      return;
    }

    this._setup();
  }

  private _setup(): void {
    console.log("ReplayWidget setup");

    const body = document.querySelector("body");

    if (!body) {
      console.error("ReplayWidget: cannot access body or head in DOM.");
      return;
    }

    const wrapper = document.createElement("div");
    wrapper.id = "replay-widget-wrapper";

    const widget = document.createElement("button");
    widget.id = "replay-widget";

    widget.addEventListener("click", () => {
      console.log("SHOW MODAL");
    });

    wrapper.appendChild(widget);

    body.appendChild(wrapper);
  }
}
