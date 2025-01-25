import { z } from 'zod';
import { RecipeOutputDto } from './recipe.dto';

export const PostRecipeInputDto = z.object({
  title: z.string().min(1),
  summary: z.string().min(5),
  desc: z.string().min(5),
  author: z.string().min(1),
  category: z.string().min(1),
});

export type PostRecipeInputDto = ReturnType<typeof PostRecipeInputDto.parse>;

export const PostRecipeOutputDto = RecipeOutputDto;
export type PostRecipeOutputDto = ReturnType<typeof PostRecipeOutputDto.parse>;
