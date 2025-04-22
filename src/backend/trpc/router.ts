import { postRouter } from "~/backend/trpc/routers/post";
import { createCallerFactory, createTRPCRouter } from "~/backend/trpc/init";

/**
 * This is the primary router for your server.
 *
 * All routers added in /api/routers should be manually added here.
 */
export const router = createTRPCRouter({
  post: postRouter,
});

// export type definition of API
export type AppRouter = typeof router;

/**
 * Create a server-side caller for the tRPC API.
 * @example
 * const trpc = createCaller(createContext);
 * const res = await trpc.post.all();
 *       ^? Post[]
 */
export const createCaller = createCallerFactory(router);
