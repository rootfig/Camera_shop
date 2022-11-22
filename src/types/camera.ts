import { QueryParams } from '../constants';

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
  [QueryParams.Page]?: number;
  [QueryParams.End]?: number;
  [QueryParams.Limit]?: number;
  [QueryParams.NameLike]?: string;
  [QueryParams.Sort]?: string | null;
  [QueryParams.Order]?: string | null;
  [QueryParams.PriceMin]?: string | null;
  [QueryParams.PriceMax]?: string | null;
  [QueryParams.Category]?: string | null;
  [QueryParams.Type]?: string | null;
  [QueryParams.Level]?: string | null;
};
