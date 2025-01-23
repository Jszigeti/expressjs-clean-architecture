import { z } from 'zod';
import { RecipeOutputDto } from './recipe.dto';

export const GetRecipeOutputDto = RecipeOutputDto;
export type GetRecipeOutputDto = ReturnType<typeof GetRecipeOutputDto.parse>;

export const GetRecipesOutputDto = z.array(RecipeOutputDto);
export type GetRecipesOutputDto = ReturnType<typeof GetRecipesOutputDto.parse>;

export const RecipeIdDto = z.string().uuid();
