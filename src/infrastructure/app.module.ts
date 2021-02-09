import { Module } from "@nestjs/common";
import CreateArticleModule from "../presentation/page/create-page/create-article.module";

import AppController from "../app.controller";
import GetAllArticlesModule from "../presentation/page/get-all-articles/get-all-articles.module";

@Module({
    controllers: [AppController],
    imports: [CreateArticleModule, GetAllArticlesModule]
})
export default class AppModule {}
