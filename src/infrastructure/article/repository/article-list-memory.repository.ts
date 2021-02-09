import Article from "../../../use-case/page/entity/article";
import PageList from "../../../use-case/page/port/article-list.repository"

export default class ArticleListMemory implements PageList {
    private articleList: Map<string, Article>;

    constructor() {
        this.articleList = new Map();
        this.articleList.set('clean-architecture', {
            slug: "clean-architecture",
            title: "Clean Architecture",
            description: "introduction to clean architecture",
            content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        })
    }

    async get(slug?: string): Promise<Article[] | Article | undefined> {
        if (slug) {
            return this.articleList.get(slug);
        }

        return Array.from(this.articleList.values());
    }

    async create(article: Article): Promise<Article | {}> {
        this.articleList.set(article.slug, article);

        return this.articleList.get(article.slug) || {};
    }
}
