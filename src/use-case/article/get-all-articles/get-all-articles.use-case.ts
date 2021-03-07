import { Inject } from "@nestjs/common";

import GetAllArticlesRequest from "./get-all-articles.request";
import ArticleList from "../port/article-list.repository";
import GetAllArticlesPresenter from "./port/get-all-articles.presenter";

export default class GetAllArticlesUseCase {
    constructor(
        @Inject('ArticleList')
        private readonly articleList: ArticleList
    ) {}

    async execute(request: GetAllArticlesRequest, presenter: GetAllArticlesPresenter): Promise<void> {
        const {} = request;
        const response = presenter.response;
        response.articles = await this.articleList.getAll();

        presenter.present(response);
    }
}
