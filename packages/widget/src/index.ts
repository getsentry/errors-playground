import type { EventProcessor, Hub, Integration } from "@sentry/types";
import { isBrowser } from "./utils/isBrowser";

import template from "./template.html";
import "./styles/reset.css";
import "./styles/widget.css";
import "./styles/portal.css";

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

    const portal = document.createElement("div");
    portal.id = "replay-widget-portal";
    portal.innerHTML = template;
    body.appendChild(portal);

    const widget = body.querySelector("#replay-widget");

    if (!widget) {
      console.error("ReplayWidget: cannot access widget in DOM.");
      return;
    }

    const dialog = body.querySelector(
      "#replay-widget-dialog"
    ) as HTMLDialogElement;

    if (!dialog) {
      console.error("ReplayWidget: cannot access dialog in DOM.");
      return;
    }

    widget.addEventListener("click", () => {
      dialog.showModal();
    });
  }
}
