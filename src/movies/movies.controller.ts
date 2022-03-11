import { Body, Controller, Delete, Get, Param, Patch, Post, Query } from '@nestjs/common';

@Controller('movies')
export class MoviesController {

  @Get()
  getAll() {
    return `movie`;
  }

  @Get("search")
  search(@Query("year") searchingYear: string){
    return `We are searching for a movie with year: ${searchingYear}`
  }


  @Get("/:id")
  getOne(@Param("id") movieId: string) {
    return `This MovieID: ${movieId}`;
  }

  @Post()
  create(@Body() movieData) {
    console.log(movieData);
    return movieData;
  }

  @Delete("/:id")
  remove(@Param("id") movieId: string) {
    return `This will create a movie ${movieId}`;
  }

  @Patch("/:id")
  patch(@Param("id") movieId: string, @Body() updateData) {
    return {
      updateMovie: movieId,
      ...updateData
    }
  }
}
