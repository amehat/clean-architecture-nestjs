import { Module } from "@nestjs/common";
import { InMemoryDBModule } from '@nestjs-addons/in-memory-db';

import ArticleListMemory from "../../../infrastructure/article/repository/article-list-memory.repository";
import DeleteArticleController from "./delete-article.controller";

@Module({
    controllers: [DeleteArticleController],
    imports: [InMemoryDBModule.forFeature('article')],
    providers: [
        ArticleListMemory,
        {
            provide: 'ArticleList', useClass: ArticleListMemory
        },
    ]
})
export default class DeleteArticleModule {}
