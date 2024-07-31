import { html } from '@lithium-framework/core';

export function NavigatorInformations(){

  return html`<div>
    <h3>running on</h3>
    <p>${navigator.userAgent}</p>
  </div>`

}