import { Module } from "@nestjs/common";

import ArticleListMemory from "../../../infrastructure/page/repository/article-list-memory.repository";
import CreateArticleController from "./create-article.controller";

@Module({
    controllers: [CreateArticleController],
    providers: [
        {
            provide: 'ArticleList', useClass: ArticleListMemory
        },
    ]
})
export default class CreateArticleModule {}
