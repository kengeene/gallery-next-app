import { z } from "zod";
import {
  createTRPCRouter,
  protectedProcedure,
  publicProcedure,
} from "@/server/api/trpc";

export const postRouter = createTRPCRouter({
 getAll: publicProcedure.query(async ({ ctx }) => {
  try {
    const posts = await ctx.db.post.findMany({
      include: { author: true, likes: true },
      orderBy: { createdAt: "desc" },
    });
    return posts;
  } catch (error) {
    throw error;
  }
}),

  create: protectedProcedure
    .input(
      z.object({
        imageUrl: z.string().url(),
        caption: z.string().optional(),
      }),
    )
    .mutation(async ({ ctx, input }) => {
      const data = {
        imageUrl: input.imageUrl,
        caption: input.caption,
        author: { connect: { id: ctx.session.user.id } },
      };
      return ctx.db.post.create({
        data,
      });
    }),

  // like: protectedProcedure
  //   .input(z.object({ postId: z.string() }))
  //   .mutation(async ({ ctx, input }) => {
  //     return ctx.db.like.create({
  //       data: {
  //         user: { connect: { id: ctx.session.user.id } },
  //         post: { connect: { id: input.postId } },
  //       },
  //     });
  //   }),

  // unlike: protectedProcedure
  //   .input(z.object({ postId: z.string() }))
  //   .mutation(async ({ ctx, input }) => {
  //     return ctx.db.like.deleteMany({
  //       where: {
  //         userId: ctx.session.user.id,
  //         postId: input.postId,
  //       },
  //     });
  //   }),
});
