export class MyOtherElement extends HTMLElement {}

customElements.define("my-other", MyOtherElement);

declare global {
  interface HTMLElementTagNameMap {
    "my-other": MyOtherElement;
  }
}
