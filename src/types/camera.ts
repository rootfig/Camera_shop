import { SearchParams } from '../constants';

export type Camera = {
  id: number;
  name: string;
  vendorCode: string;
  type: string;
  category: string;
  description: string;
  level: string;
  rating: number;
  price: number;
  previewImg: string;
  previewImg2x: string;
  previewImgWebp: string;
  previewImgWebp2x: string;
  reviewCount: number;
}

export type Cameras = {
  data: Camera[];
  dataTotalCount: number;
}

export type CamerasPayloadType = {
  [SearchParams.Page]?: number;
  [SearchParams.End]?: number;
  [SearchParams.Limit]?: number;
  [SearchParams.NameLike]?: string;
  [SearchParams.Sort]?: string | null;
  [SearchParams.Order]?: string | null;
  [SearchParams.PriceMin]?: string | null;
  [SearchParams.PriceMax]?: string | null;
  [SearchParams.Category]?: string | null;
  [SearchParams.Type]?: string | null;
  [SearchParams.Level]?: string | null;
};
