import { Body, Controller, Post, Query, Inject } from "@nestjs/common";

import CreateArticle from "../../../use-case/page/create-article/create-article.use-case";
import CreateArticleRequest from "../../../use-case/page/create-article/create-article.request";
import CreateArticleResponse from "../../../use-case/page/create-article/create-article.response";
import CreateArticleJsonPresenter from "./presenter/create-article-json.presenter";
import CreateArticleJsonView from "./view/create-article-json.view";
import ArticleList from "../../../use-case/page/port/article-list.repository";
import Article from "../../../use-case/page/entity/article";


@Controller('articles')
export default class CreateArticleController {
    constructor(
        @Inject('ArticleList')
        private readonly articleList: ArticleList
    ) {}

    @Post()
    async createPage(@Query('format') format: string, @Body() article: Article) {
        const { slug, title, description, content } = article;
        const request = new CreateArticleRequest(slug, title, description, content);
        let presenter = null;
        let view;
        switch(format) {
            default:
                presenter = new CreateArticleJsonPresenter(new CreateArticleResponse());
                view = new CreateArticleJsonView();
                break;
        }

        const useCase = new CreateArticle(this.articleList);
        await useCase.execute(request, presenter);

        return view.generateView(presenter.viewModel());
    }
}
