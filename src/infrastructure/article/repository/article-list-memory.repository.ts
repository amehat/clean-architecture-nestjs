import { Injectable } from "@nestjs/common";
import { InjectInMemoryDBService, InMemoryDBService } from "@nestjs-addons/in-memory-db";

import ArticleEntity from "./article.entity";
import Article from "../../../use-case/article/entity/article";
import PageList from "../../../use-case/article/port/article-list.repository"

@Injectable()
export default class ArticleListMemory implements PageList {
    constructor(
        @InjectInMemoryDBService('article')
        private articleList: InMemoryDBService<ArticleEntity>
    ) {}

    async get(slug?: string): Promise<Article[] | Article | undefined> {
        if (slug) {
          return this.articleList.get(slug);
        }
        return this.articleList.getAll();
    }

    async create(article: Article): Promise<Article | {}> {
        return this.articleList.create(article);
    }
}
