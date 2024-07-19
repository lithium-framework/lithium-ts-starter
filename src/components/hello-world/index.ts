import { render , html } from '@lithium-framework/core';
import { NavigatorInformations } from '../navigator-informations';

export const HelloWorld = html`${() => {

  return html`<div>
    <h1>Hello World !</h1>
    ${NavigatorInformations}
  </div>`;

}}`