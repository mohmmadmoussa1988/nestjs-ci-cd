import { ProductService } from './product.service';
import {
    Controller,
    Post,
    Body,
    Get,
    Patch,
    Param,
    Delete,
  } from '@nestjs/common';
  
@Controller('product')
export class ProductController {
    constructor(private productService: ProductService) {}

    @Get('all')
    public getProducts(): any[] {
      const products = this.productService.getProducts();
      return products;
    }


}
