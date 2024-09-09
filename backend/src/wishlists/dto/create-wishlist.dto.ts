import { IsArray, IsInt, IsString, IsUrl, Length } from 'class-validator';

export class CreateWishlistDto {
  @IsString()
  @Length(1, 250)
  name: string;

  @IsUrl()
  image: string;

  @IsArray()
  @IsInt({ each: true })
  itemsId: number[];
}
