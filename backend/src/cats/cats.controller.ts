import { Body, Controller, Delete, Get, Param, Patch, Post, Render } from '@nestjs/common';
import { CountService } from 'src/count/count.service';
import { CatsService } from './cats.service';
import { CreateCatDto } from './dto/create-cat.dto';
import { UpdateCatDto } from './dto/update-cat.dto';
import { Cat } from './schemas/cat.schema';

@Controller('cats')
export class CatsController {
    constructor(private readonly catsService: CatsService, 
                private readonly countService : CountService){}
    
    @Get()
    async getAll(): Promise<Cat[]>{
        
        return await this.catsService.getAll();
    }
    @Get('/:id')
    @Render('view.ejs')
    async getOne(@Param('id') catId: number) {
        let cat =  await this.catsService.getOne(catId);
        return {name : cat[0].name};
    }
    
    @Post()
    async create(@Body() catsData : CreateCatDto) {
        return await this.catsService.create(catsData);
    }

    @Patch('/:id')
    async update(@Param('id') catId: number, @Body() updateData: UpdateCatDto) {
        return this.catsService.update(catId,updateData)
    }

    @Delete('/:id')
    async delete(@Param('id') catId: number) {
        return this.catsService.delete(catId);
    }
}
