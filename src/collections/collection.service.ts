import { CollectionServiceImp } from './interfaces/collection.service.imp';
import { Injectable } from '@nestjs/common';

@Injectable()
export class CollectionService implements CollectionServiceImp {
  create() {
    return {
      id: 1,
      name: '',
      url: '',
      categories: '',
      description: '',
      logoImg: '',
      featureImg: '',
      bannerImg: '',
      createdAt: new Date(),
      updatedAt: new Date(),
    };
  }

  list() {
    const collection = {
      id: 1,
      name: '',
      url: '',
      categories: '',
      description: '',
      logoImg: '',
      featureImg: '',
      bannerImg: '',
      createdAt: new Date(),
      updatedAt: new Date(),
    };
    return [collection, collection];
  }
}
