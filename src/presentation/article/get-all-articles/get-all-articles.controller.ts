import { Controller, Get, Query, Inject } from "@nestjs/common";

import GetAllArticles from "../../../use-case/article/get-all-articles/get-all-articles.use-case";
import GetAllArticlesResponse from "../../../use-case/article/get-all-articles/get-all-articles.response";
import GetAllArticlesRequest from "../../../use-case/article/get-all-articles/get-all-articles.request";
import GetAllArticlesJsonPresenter from "./presenter/get-all-articles-json.presenter";
import GetAllArticlesJsonView from "./view/model/get-all-articles-json.view-model";
import GetAllArticlesHtmlPresenter from "./presenter/get-all-articles-html.presenter";
import GetAllArticlesHtmlView from "./view/model/get-all-articles-html.view-model";
import ArticleList from "../../../use-case/article/port/article-list.repository";

@Controller('articles')
export default class GetAllArticlesController {
    constructor(
        @Inject('ArticleList')
        private readonly articleList: ArticleList
    ) {}

    @Get()
    async index(@Query('format') format: string, @Query('page') page: number) {
        const request = new GetAllArticlesRequest();
        let presenter;
        let view;
        
        switch(format) {
            case 'html':
                presenter = new GetAllArticlesHtmlPresenter(new GetAllArticlesResponse());
                view = new GetAllArticlesHtmlView();
                break;
            default:
                presenter = new GetAllArticlesJsonPresenter(new GetAllArticlesResponse());
                view = new GetAllArticlesJsonView(page);
                break;
        }

        const useCase = new GetAllArticles(this.articleList);
        await useCase.execute(request, presenter);

        return view.generateView(presenter.viewModel());
    }
}