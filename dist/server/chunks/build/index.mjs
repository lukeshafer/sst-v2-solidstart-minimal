import { ssr, ssrHydrationKey, escape, createComponent } from 'solid-js/web';
import { k } from './index22.mjs';
import 'solid-js';

var n=["<main","><!--$-->","<!--/--><h1>Hello world!</h1><button>Click Me</button></main>"];function p(){return ssr(n,ssrHydrationKey(),escape(createComponent(k,{children:"Hello World"})))}

export { p as default };
//# sourceMappingURL=index.mjs.map
