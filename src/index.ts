import { Utils } from '@lithium-framework/core';
import { render , html , css , FlyComponent } from '@lithium-framework/core/flyComponent';
import { HelloWorld } from './components/hello-world';

render( HelloWorld() ,document.body )