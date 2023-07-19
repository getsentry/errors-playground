import type { EventProcessor, Hub, Integration } from "@sentry/types";
import { isBrowser } from "./utils/isBrowser";

import template from "./template.html";
import "./styles/reset.css";
import "./styles/widget.css";
import "./styles/portal.css";
import { Replay, BrowserClient } from "@sentry/browser";

export default class ReplayWidget implements Integration {
  public static id: string = "ReplayWidget";
  public name: string = ReplayWidget.id;

  private _uiState: "idle" | "recording" | "submitting" = "idle";
  private _hub: Hub | null = null;
  private _client: BrowserClient | null = null;
  private _replayIntegration: Integration | null = null;
  private _isInstalled: boolean = false;

  setupOnce(
    addGlobalEventProcessor: (callback: EventProcessor) => void,
    getCurrentHub: () => Hub
  ): void {
    if (!isBrowser()) {
      return;
    }

    addGlobalEventProcessor((event) => {
      if (!this._isInstalled) {
        this._hub = getCurrentHub();
        this._client = this._hub.getClient() as BrowserClient;
        this._replayIntegration = this._client.getIntegration(Replay);

        if (this._replayIntegration === null) {
          console.error('ReplayWidget: "Replay" integration is required.');
          return event;
        }

        this._setup();
      }

      return event;
    });
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

    const form = dialog.querySelector("#dialog-form") as HTMLFormElement;

    if (!form) {
      console.error("ReplayWidget: cannot access form in DOM.");
      return;
    }

    form.addEventListener("submit", (event) => {
      event.preventDefault();
      const formData = new FormData(form).entries();
      const data = Object.fromEntries(formData);
      console.log(data);
    });

    const closeButtons = form.querySelectorAll(".close");
    closeButtons.forEach((button) =>
      button.addEventListener("click", (event) => {
        event.preventDefault();
        dialog.close();
      })
    );

    const recordingOptions = dialog.querySelector("#recording-options");
    const startRecording = dialog.querySelector("#start-recording");
    const grabLastSeconds = dialog.querySelector("#grab-last-seconds");
    const formFields = dialog.querySelector("#form-fields");
    const footerButtons = dialog.querySelector("#footer-buttons");
    const removeRecording = dialog.querySelector("#remove-recording");

    if (
      !recordingOptions ||
      !removeRecording ||
      !startRecording ||
      !grabLastSeconds ||
      !formFields ||
      !footerButtons
    ) {
      console.error("ReplayWidget: cannot access dialog controls in DOM.");
      return;
    }

    startRecording.addEventListener("click", () => {
      this._uiState = "recording";
    });

    grabLastSeconds.addEventListener("click", () => {
      this._uiState = "submitting";
      formFields.classList.remove("hidden");
      footerButtons.classList.remove("hidden");
      recordingOptions.classList.add("hidden");
    });

    removeRecording.addEventListener("click", () => {
      this._uiState = "idle";
      formFields.classList.add("hidden");
      footerButtons.classList.add("hidden");
      recordingOptions.classList.remove("hidden");
    });

    this._isInstalled = true;
  }
}
