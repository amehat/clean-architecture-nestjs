import { Module } from "@nestjs/common";
import CreateArticleModule from "../presentation/article/create-article/create-article.module";

import AppController from "../app.controller";
import GetAllArticlesModule from "../presentation/article/get-all-articles/get-all-articles.module";

@Module({
    controllers: [AppController],
    imports: [CreateArticleModule, GetAllArticlesModule]
})
export default class AppModule {}
