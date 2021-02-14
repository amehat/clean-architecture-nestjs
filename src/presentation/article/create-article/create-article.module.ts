import { Module } from "@nestjs/common";
import { InMemoryDBModule } from "@nestjs-addons/in-memory-db";

import ArticleListMemory from "../../../infrastructure/article/repository/article-list-memory.repository";
import CreateArticleController from "./create-article.controller";

@Module({
    controllers: [CreateArticleController],
    imports: [InMemoryDBModule.forFeature('article')],
    providers: [
        ArticleListMemory,
        {
            provide: 'ArticleList', useClass: ArticleListMemory
        },
    ]
})
export default class CreateArticleModule {}
