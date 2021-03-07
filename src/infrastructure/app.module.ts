import { Module } from "@nestjs/common";
import { InMemoryDBModule } from '@nestjs-addons/in-memory-db';

import CreateArticleModule from "../presentation/article/create-article/create-article.module";
import AppController from "../app.controller";
import GetAllArticlesModule from "../presentation/article/get-all-articles/get-all-articles.module";
import DeleteArticleModule from "../presentation/article/delete-article/delete-article.module";

@Module({
    controllers: [AppController],
    imports: [CreateArticleModule, DeleteArticleModule, GetAllArticlesModule, InMemoryDBModule.forRoot()],
})
export default class AppModule {}
