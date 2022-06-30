import FormInputLabels from "./interfaces/FormInputLabel";
import FormInputs from "./interfaces/FormInputs";

class AutomaitedExtension {
  private inputs: FormInputs;

  private automateButton: HTMLElement | null;

  private labels: FormInputLabels;

  constructor() {
    this.inputs = this.getFormInputsFromPage();
    this.automateButton = this.getAutomateButtonFromPage();
    this.labels = this.getFormLabelsFromPage();
  }

  /**
   * Get all input labels from page
   */
  private getFormInputsFromPage(): FormInputs {
    const username: HTMLInputElement | null = document.getElementById(
      "username"
    ) as HTMLInputElement | null;
    const about: HTMLInputElement | null = document.getElementById(
      "about"
    ) as HTMLInputElement | null;
    const firstName: HTMLInputElement | null = document.getElementById(
      "first-name"
    ) as HTMLInputElement | null;
    const lastName = document.getElementById(
      "last-name"
    ) as HTMLInputElement | null;
    const email: HTMLInputElement | null = document.getElementById(
      "email"
    ) as HTMLInputElement | null;
    const country: HTMLInputElement | null = document.getElementById(
      "country"
    ) as HTMLInputElement | null;
    const streetAddress: HTMLInputElement | null = document.getElementById(
      "street-address"
    ) as HTMLInputElement | null;
    const city: HTMLInputElement | null = document.getElementById(
      "city"
    ) as HTMLInputElement | null;
    const region: HTMLInputElement | null = document.getElementById(
      "region"
    ) as HTMLInputElement | null;
    const postalCode: HTMLInputElement | null = document.getElementById(
      "postal-code"
    ) as HTMLInputElement | null;
    const age: HTMLInputElement | null = document.querySelector(
      "input[name='age']"
    ) as HTMLInputElement | null;
    const comments: HTMLInputElement | null = document.getElementById(
      "comments"
    ) as HTMLInputElement | null;
    const candidates: HTMLInputElement | null = document.getElementById(
      "candidates"
    ) as HTMLInputElement | null;
    const offers: HTMLInputElement | null = document.getElementById(
      "offers"
    ) as HTMLInputElement | null;
    const pushEverything: HTMLInputElement | null = document.getElementById(
      "push-everything"
    ) as HTMLInputElement | null;
    const pushEmail: HTMLInputElement | null = document.getElementById(
      "push-email"
    ) as HTMLInputElement | null;
    const pushNothing: HTMLInputElement | null = document.getElementById(
      "push-nothing"
    ) as HTMLInputElement | null;

    return {
      username,
      about,
      firstName,
      lastName,
      email,
      country,
      streetAddress,
      city,
      region,
      postalCode,
      age,
      comments,
      candidates,
      offers,
      pushEverything,
      pushEmail,
      pushNothing,
    };
  }

  /**
   * Get the automate button from page
   */
  private getAutomateButtonFromPage(): HTMLButtonElement | null {
    const button: HTMLButtonElement | null = document.getElementById(
      "automate"
    ) as HTMLButtonElement | null;

    return button;
  }

  /**
   * Get all input labels from page
   */
  private getFormLabelsFromPage(): FormInputLabels {
    const age: HTMLDivElement | null = document.getElementById(
      "demo-simple-select"
    ) as HTMLDivElement | null;

    return {
      age,
    };
  }

  /**
   * Log input element and its value to console
   * @param {HTMLInputElement} input - Form input
   */
  private logElementAndValueToConsole(input: HTMLInputElement): void {
    if (this.getCheckboxInputs().includes(input)) {
      console.log(input, input.checked, input.value);
    } else {
      console.log(input, input.value);
    }
  }

  /**
   * Get all form checkbox inputs
   */
  private getCheckboxInputs(): (HTMLInputElement | null)[] {
    return [this.inputs.comments, this.inputs.candidates, this.inputs.offers];
  }

  /**
   * Add change event listener to all inputs to keep track of their values
   */
  public addChangeEventListenerToAllInputs(): void {
    Object.values(this.inputs).forEach((input: any) => {
      if (!input) {
        return;
      }

      this.addChangeEventListener(input);
    });
  }

  /**
   * Add change event listener to input to keep track of its value
   * @param {HTMLInputElement} input - Form input
   */
  private addChangeEventListener(input: HTMLInputElement): void {
    input.addEventListener("change", (event: any) => {
      this.logElementAndValueToConsole(event.target);
    });
  }

  /**
   * Add click event listener to automate button to keep track of when it is clicked to update form
   */
  public addClickEventListenerToAutomateButton(): void {
    if (!this.automateButton) {
      return;
    }

    this.automateButton.addEventListener("click", () => {
      this.updateForm();
    });
  }

  /**
   * Update form according to instructions
   */
  private updateForm(): void {
    if (this.inputs.firstName) {
      this.inputs.firstName.value = "James";
    }

    this.updateInput(this.inputs.firstName, "James");
    this.updateInput(this.inputs.lastName, "Bond");
    this.updateInput(this.inputs.country, "Great Britain");
    this.updateInput(this.inputs.age, "37");
    this.updateRadioInput(this.inputs.comments, true);
    this.updateRadioInput(this.inputs.offers, true);
    this.updateRadioInput(this.inputs.pushEmail, true);

    this.updateLabel(this.labels.age, "37");
  }

  /**
   * Update form input if it exists
   */
  private updateInput(input: HTMLInputElement | null, value: string): void {
    if (!input) {
      return;
    }

    input.value = value;
  }

  /**
   * Update form radio input if it exists
   */
  private updateRadioInput(
    input: HTMLInputElement | null,
    value: boolean
  ): void {
    if (!input) {
      return;
    }

    input.checked = value;
  }

  /**
   * Update form label if it exists
   */
  private updateLabel(label: HTMLDivElement | null, value: string) {
    if (!label) {
      return;
    }

    label.textContent = value;
  }
}

export default AutomaitedExtension;
