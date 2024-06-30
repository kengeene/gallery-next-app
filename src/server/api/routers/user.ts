import {
  createTRPCRouter,
  protectedProcedure,
} from "@/server/api/trpc";

export const userRouter = createTRPCRouter({
    get: protectedProcedure.query(async ({ ctx }) => {
        try {
    const posts = await ctx.db.user.findUnique({
        where: { id: ctx.session.user.id },
        include: { posts: true, likes: true },
    })
    return posts;
  } catch (error) {
    throw error;
  }
}),
});
