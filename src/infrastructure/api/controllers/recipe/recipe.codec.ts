import { RecipeIdDto, PostRecipeInputDto } from './dto';

export const getRecipeCodec = {
  decodeRecipeId: (params: unknown) => RecipeIdDto.safeParse(params),
};

export const createRecipeCodec = {
  decode: (params: unknown) => PostRecipeInputDto.safeParse(params),
};
