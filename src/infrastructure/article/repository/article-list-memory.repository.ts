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

    async get(slug: string): Promise<Article[] | Article | undefined> {
        return new Promise((resolve, reject) => {
            const articles = this.articleList.getAll();
            for (let i=0; i < articles.length; i++) {
                if (articles[i].slug === slug) {
                    console.log('GOOD')
                    resolve(this.articleList.get(articles[i].id));
                }
            }

            resolve(undefined);
        });
    }

    async getAll(): Promise<Article[] | undefined> {
        return this.articleList.getAll();
    }

    async create(article: Article): Promise<Article | {}> {
        return this.articleList.create(article);
    }

    async delete(slug: string): Promise<void> {
        return new Promise((resolve) => {
            const articles = this.articleList.getAll();
            for (let i=0; i < articles.length; i++) {
                if (articles[i].slug === slug) {
                    this.articleList.delete(`${articles[i].id}`);
                    resolve();
                }
            }
            resolve();
        });
    }
}
