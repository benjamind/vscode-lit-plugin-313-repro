import "./my-element";
import "./my-other";

// Pretending this is the Lit html function
// eslint-disable-next-line @typescript-eslint/no-explicit-any
declare const html: any;

const template = html` <my-other></my-other><my-element></my-element>`;
