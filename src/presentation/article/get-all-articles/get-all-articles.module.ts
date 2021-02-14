import { Module } from "@nestjs/common";
import { InMemoryDBModule } from '@nestjs-addons/in-memory-db';

import ArticleListMemory from "../../../infrastructure/article/repository/article-list-memory.repository";
import GetAllArticlesController from "./get-all-articles.controller";
@Module({
    controllers: [GetAllArticlesController],
    imports: [InMemoryDBModule.forFeature('article')],
    providers: [
        ArticleListMemory,
        {
            provide: 'ArticleList', useClass: ArticleListMemory
        },
    ]
})
export default class GetAllArticlesModule {}
