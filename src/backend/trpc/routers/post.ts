import { z } from "zod";

import { createTRPCRouter, publicProcedure } from "~/backend/trpc/init";

export const postRouter = createTRPCRouter({
  hello: publicProcedure
    .input(z.object({ text: z.string() }))
    .query(({ input }) => {
      return {
        greeting: `Hello ${input.text}`,
      };
    }),
});
