import CreateArticlePresenter from '../../../../use-case/article/create-article/create-article.presenter';
import CreateArticleResponse from '../../../../use-case/article/create-article/create-article.response';
export default class CreateArticleJsonPresenter implements CreateArticlePresenter {
    public response: CreateArticleResponse;

    constructor(response: CreateArticleResponse) {
        this.response = response;
    }

    viewModel(): CreateArticleResponse {
        return this.response;
    }
}