// DO NOT EDIT. This file is generated by fresh.
// This file SHOULD be checked into source version control.
// This file is automatically updated during development when running `dev.ts`.

import config from "./deno.json" assert { type: "json" };
import * as $0 from "./routes/api/joke.ts";
import * as $1 from "./routes/api/search.tsx";
import * as $2 from "./routes/index.tsx";
import * as $3 from "./routes/list.tsx";
import * as $4 from "./routes/pokemon/[id].tsx";
import * as $5 from "./routes/search.tsx";
import * as $$0 from "./islands/AddToList.tsx";
import * as $$1 from "./islands/Counter.tsx";
import * as $$2 from "./islands/HeaderCounter.tsx";
import * as $$3 from "./islands/List.tsx";
import * as $$4 from "./islands/LiveSearch.tsx";

const manifest = {
  routes: {
    "./routes/api/joke.ts": $0,
    "./routes/api/search.tsx": $1,
    "./routes/index.tsx": $2,
    "./routes/list.tsx": $3,
    "./routes/pokemon/[id].tsx": $4,
    "./routes/search.tsx": $5,
  },
  islands: {
    "./islands/AddToList.tsx": $$0,
    "./islands/Counter.tsx": $$1,
    "./islands/HeaderCounter.tsx": $$2,
    "./islands/List.tsx": $$3,
    "./islands/LiveSearch.tsx": $$4,
  },
  baseUrl: import.meta.url,
  config,
};

export default manifest;
