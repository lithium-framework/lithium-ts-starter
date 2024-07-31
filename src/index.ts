import { render , html } from '@lithium-framework/core';
import { HelloWorld } from './components/hello-world';

import "./index.scss";

render( html`<main-application>${HelloWorld}</main-application>` ,document.body )