import { render , html , css } from '@lithium-framework/core';
import { NavigatorInformations } from '../navigator-informations';

export function HelloWorld(){

  return html`<div>
    <h1>Hello World !</h1>
    ${NavigatorInformations()}
  </div>`;

}