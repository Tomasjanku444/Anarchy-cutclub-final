import { createClient } from '@base44/sdk';

const base44 = createClient({
  appId: "69db8f56a539752bc17c2f3a",
  headers: {
    "api_key": "0a110e7a26d54a99a3402fe607a3b8f3"
  }
});

export { base44 };
