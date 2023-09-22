import { createClient } from "next-sanity"

import { apiVersion, dataset, projectId, useCdn } from "../env"

export const client = createClient({
  apiVersion,
  dataset,
  projectId,
  useCdn,
  token: 
  "skbuDgeeBUvKCIXDY4JqxemMyiCFTnONkN4t685FROiKB8AQUKuy4Ux1ZCTABW4PHMEXSD7LTHjNc8ZCD0yVA3AUva8YVvB6Wx064OulouxmRJgxs7w0h9Td6XBwe0vV9IyDWZf558mpUNTdPKPbYCXCGdGnuOGJLsAMDHDy72Dwl4P7Mrb3",
})