import CreateArticlePresenter from "../create-article.presenter";
import CreateArticleResponseMock from "./create-article-response.mock";
import CreateArticleResponse from '../create-article.response';

export default class CreateArticlePresenterJson implements CreateArticlePresenter {
    response: CreateArticleResponse;

    constructor(response: CreateArticleResponse) {
        this.response = response;
    }

    viewModel(): CreateArticleResponse {
        return this.response;
    }
}
