import Article from "../entity/article";
import ArticleList from "../port/article-list.repository";

export default class ArticleListMock implements ArticleList {
    store = new Map();
    async get(slug?: string): Promise<Article | Article[] | undefined> {
        return slug ? this.store.get(slug) : this.store;
    }
    async getAll(): Promise<Article[] | undefined> {
        const articleList: Article[] = [];
        this.store.forEach((article) => {
            articleList.push(article);
        });

        return articleList;
    }
    async create(article: Article): Promise<{} | Article> {
        return this.store.set(article.slug, article);
    }
    async delete(slug?: string): Promise<void> {
        this.store.delete(slug);
    }
}
