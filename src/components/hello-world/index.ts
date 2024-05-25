import { render , html , css , FlyComponent } from '@lithium-framework/core/flyComponent';
import { NavigatorInformations } from '../navigator-informations';

export function HelloWorld(){

  return html`<div>
    <h1>Hello World !</h1>
    ${NavigatorInformations()}
  </div>`;

}