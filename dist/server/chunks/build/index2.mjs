import { ssr, ssrHydrationKey, escape, createComponent } from 'solid-js/web';
import { k } from '../runtime.mjs';
import 'node:http';
import 'node:https';
import 'node:zlib';
import 'node:stream';
import 'node:buffer';
import 'node:util';
import 'node:url';
import 'node:net';
import 'node:fs';
import 'node:path';
import 'node:async_hooks';
import 'vinxi/lib/invariant';
import 'vinxi/lib/path';
import 'solid-js/web/storage';
import 'sst/node/event-bus';
import 'solid-js';

var n = ["<main", "><!--$-->", "<!--/--><h1>Hello world!</h1><button>Click Me</button></main>"];
function p() {
  return ssr(n, ssrHydrationKey(), escape(createComponent(k, { children: "Hello World" })));
}

export { p as default };
//# sourceMappingURL=index2.mjs.map
