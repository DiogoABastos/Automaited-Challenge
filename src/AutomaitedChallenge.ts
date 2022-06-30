import AutomaitedExtension from "./AutomaitedExtension";
import MutationObserverConfig from "./interfaces/MutationObserverConfig";

class AutomaitedChallenge {
  private targetDivSelector: string = "#root";

  private targetDiv: HTMLDivElement | null;

  private observer: MutationObserver;

  private config: MutationObserverConfig = {
    attributes: true,
    childList: true,
    characterData: true,
  };

  public static shared: AutomaitedChallenge = new AutomaitedChallenge();

  private constructor() {
    this.targetDiv = this.getTargetDivFromPage();
    this.observer = this.addObserver();
  }

  /**
   * Start Automaited browser extension
   */
  public start(): void {
    if (!this.targetDiv) {
      return;
    }

    this.observer.observe(this.targetDiv, this.config);
  }

  /**
   * Get target div from page
   */
  private getTargetDivFromPage(): HTMLDivElement | null {
    const div: HTMLDivElement | null = document.querySelector(
      this.targetDivSelector
    );

    return div;
  }

  /**
   * Add observer to check change in target div
   */
  private addObserver(): MutationObserver {
    return new MutationObserver((mutations: MutationRecord[]) => {
      mutations.forEach((_) => {
        this.runExtension();
      });
    });
  }

  /**
   * Run Automaited browser extension
   */
  private runExtension(): void {
    const automaitedExtension = new AutomaitedExtension();
    automaitedExtension.addChangeEventListenerToAllInputs();
    automaitedExtension.addClickEventListenerToAutomateButton();
  }
}

export default AutomaitedChallenge;
