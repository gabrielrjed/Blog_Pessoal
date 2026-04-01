import {Controller, Get, HttpCode, HttpStatus, Param, ParseIntPipe, Post, Body, Delete, Put} from "@nestjs/common";
import {Postagem} from "../entities/postagem.entity";
import {PostagemService} from "../services/postagem.service";

@Controller("/postagens")
export class PostagemController {
    constructor(private readonly postagemService: PostagemService) {}

    @Get()
    @HttpCode(HttpStatus.OK)
    findAll(): Promise<Postagem[]>{
        return this.postagemService.findAll();
    }
    @Get('/:id')
    findById(@Param('id', ParseIntPipe) id: number){
        return this.postagemService.findById(id);
    }
    @Post()
    @HttpCode(HttpStatus.CREATED)
    create(@Body() postagem: Postagem): Promise<Postagem>{
        return this.postagemService.create(postagem);
    }
    @Delete('/:id')
    @HttpCode(HttpStatus.NO_CONTENT)
    delete(@Param('id', ParseIntPipe) id: number){
        return this.postagemService.delete(id);
    }
    @Get('/titulo/:titulo')
    @HttpCode(HttpStatus.OK)
    findAllByTitulo(@Param('titulo') titulo: string): Promise<Postagem[]>{
        return this.postagemService.findAllByTitulo(titulo);
    }
    @Put()
    @HttpCode(HttpStatus.OK)
    update(@Body()postagem: Postagem): Promise<Postagem>{
        return this.postagemService.update(postagem);
    }
}


