import {
  Body,
  Controller,
  Delete,
  Get,
  Path,
  Post,
  Route,
  SuccessResponse,
  Tags,
} from 'tsoa';
import {
  GetRecipeOutputDto,
  GetRecipesOutputDto,
  PostRecipeInputDto,
  PostRecipeOutputDto,
} from './dto';
import { createRecipeCodec, getRecipeCodec } from './recipe.codec';

@Route('recipes')
@Tags('Recipes')
export class RecipeController extends Controller {
  constructor() {
    super();
  }

  /**
   * @summary Get all recipes
   */
  @Get()
  @SuccessResponse(200)
  async list(): Promise<GetRecipesOutputDto> {
    return [];
  }

  /**
   * @summary Get a recipe by id
   * @param id The recipe's identifier
   */
  @Get('{id}')
  @SuccessResponse(200)
  async getById(@Path() id: string): Promise<GetRecipeOutputDto> {
    const recipeId = getRecipeCodec.decodeRecipeId(id);
    if (!recipeId.success) throw 'Invalid recipe id format';
    return {
      id: 'mockId',
      title: 'mockTitle',
      summary: 'mockSummary',
      author: 'mockAuthor',
      totalPages: 100,
    };
  }

  /**
   * @summary Create a recipe
   */
  @Post()
  @SuccessResponse(201)
  async create(
    @Body() requestBody: PostRecipeInputDto,
  ): Promise<PostRecipeOutputDto> {
    const decodingResult = createRecipeCodec.decode(requestBody);
    if (!decodingResult.success) throw decodingResult.error.toString();
    return {
      id: 'mockId',
      title: 'mockTitle',
      summary: 'mockSummary',
      author: 'mockAuthor',
      totalPages: 100,
    };
  }

  /**
   * @summary Delete a recipe by id
   * @param id The recipe's identifier
   */
  @Delete('{id}')
  @SuccessResponse(204)
  async delete(@Path() id: string): Promise<void> {
    const recipeId = getRecipeCodec.decodeRecipeId(id);
    if (!recipeId.success) throw 'Invalid recipe id format';
    return;
  }
}
