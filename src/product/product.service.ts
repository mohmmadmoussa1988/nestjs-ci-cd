import { Injectable } from '@nestjs/common';

@Injectable()
export class ProductService {

    public getProducts(): any[] {
        return [1,2,3,4,5,6,7,8,9,10];
      }


}
