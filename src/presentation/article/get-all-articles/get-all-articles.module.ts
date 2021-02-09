import { Module } from "@nestjs/common";

import ArticleListMemory from "../../../infrastructure/article/repository/article-list-memory.repository";
import GetAllArticlesController from "./get-all-articles.controller";

@Module({
    controllers: [GetAllArticlesController],
    providers: [
        {
            provide: 'ArticleList', useClass: ArticleListMemory
        },
    ]
})
export default class GetAllArticlesModule {}
