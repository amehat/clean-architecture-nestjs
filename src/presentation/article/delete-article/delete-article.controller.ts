import { Controller, Get, Query, Inject, Delete, Param } from "@nestjs/common";

import ArticleList from "../../../use-case/article/port/article-list.repository";
import DeleteArticlesRequest from "../../../use-case/article/delete-article/delete-articles.request";
import DeleteArticle from "../../../use-case/article/delete-article/delete-articles.use-case";
import DeleteArticleJsonPresenter from "./presenter/delete-article-json.presenter";
import DeleteArticleResponse from "../../../use-case/article/delete-article/delette-articles.response";
import DeleteArticleJsonViewModel from "./view/model/delete-article-json.view-model";
import DeleteArticleHtmlViewModel from "./view/model/delete-article-html.view-model";
import DeleteArticleHtmlPresenter from "./presenter/delete-article-html.presenter";

@Controller('articles')
export default class DeleteArticleController {
    constructor(
        @Inject('ArticleList')
        private readonly articleList: ArticleList
    ) {}

    @Delete(':slug')
    async index(@Param('slug') slug: string, @Query('format') format: string) {
        const request = new DeleteArticlesRequest(slug);
        let presenter;
        let view;

        switch(format) {
            case "html":
                presenter = new DeleteArticleHtmlPresenter(new DeleteArticleResponse());
                view = new DeleteArticleHtmlViewModel();
                break;
            default:
                presenter = new DeleteArticleJsonPresenter(new DeleteArticleResponse());
                view = new DeleteArticleJsonViewModel();
                break;
        }

        const useCase = new DeleteArticle(this.articleList);
        await useCase.execute(request, presenter);

        return view.generateView(presenter.viewModel());
    }
}
