import Article from "../entity/article";

export default interface ArticleList {
    get(slug?: string): Promise<Article[] | Article | undefined>;
    getAll(): Promise<Article[] | undefined>;
    create(article: Article): Promise<Article>;
    delete(slug?: string): Promise<void>
}
