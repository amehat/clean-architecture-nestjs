import { Inject } from "@nestjs/common";

import ArticleList from "../port/article-list.repository";
import DeleteArticleRequest from "./delete-articles.request";
import DeleteArticlesPresenter from "./port/delete-articles.presenter";

export default class DeleteArticle {
    constructor(
        @Inject('ArticleList')
        private readonly articleList: ArticleList
    ) {}

    async execute(request: DeleteArticleRequest, presenter: DeleteArticlesPresenter) {
        const { slug } = request;
        const response = presenter.response;
        await this.articleList.delete(slug);

        if ((await this.articleList.get(slug)) === undefined) {
            response.errors = {
                status: false,
                messages: [
                    `Article "${slug}" has been deleted successfully.`
                ]
            };
        } else {
            response.errors = {
                status: true,
                messages: [
                    `Article "${slug}" was not deleted.`
                ]
            };
        }

        presenter.present(response);
    }
}
