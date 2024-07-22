import { render , html } from '@lithium-framework/core';
import { HelloWorld } from './components/hello-world';

import "./index.scss";

render( html`<div>
  coucou
  ${HelloWorld}
</div>` , document.body )