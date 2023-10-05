export class CollectionEntity {
  id: number;

  name: string;

  description: string;

  url?: string;

  categories?: string;

  logoImg?: string;

  featureImg?: string;

  bannerImg?: string;

  createdAt: Date;

  updatedAt: Date;
}
