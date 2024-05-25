import { html } from '@lithium-framework/core/flyComponent';

export function NavigatorInformations(){

  return html`<div>
    <h3>running on</h3>
    <p>${navigator.userAgent}</p>
  </div>`

}