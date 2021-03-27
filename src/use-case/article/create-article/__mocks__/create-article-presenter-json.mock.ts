import CreateArticlePresenter from "../create-article.presenter";
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
