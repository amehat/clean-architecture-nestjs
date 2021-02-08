import { Module } from "@nestjs/common";
import CreateArticleModule from "./page/create-article/create-article.module";

import AppController from "../app.controller";
import GetAllArticlesModule from "./page/get-all-articles/get-all-articles.module";

@Module({
    controllers: [AppController],
    imports: [CreateArticleModule, GetAllArticlesModule]
})
export default class AppModule {}
