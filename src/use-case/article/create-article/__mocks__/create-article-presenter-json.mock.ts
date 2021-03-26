import CreateArticlePresenter from "../create-article.presenter";
import CreateArticleResponseMock from "./create-article-response.mock";

export default class CreateArticlePresenterJson implements CreateArticlePresenter {
    response: any;
    constructor(response: CreateArticleResponseMock) {
        this.response = response;
    }
    viewModel() {
        return this.response;
    }
}
