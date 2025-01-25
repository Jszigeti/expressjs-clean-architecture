import { z } from 'zod';

export const RecipeOutputDto = z.object({
  id: z.string().uuid(),
  title: z.string().min(1),
  summary: z.string().min(5),
  desc: z.string().min(5),
  author: z.string().min(1),
  category: z.string().min(1),
});
