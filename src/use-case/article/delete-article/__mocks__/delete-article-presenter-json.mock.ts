import DeleteArticlesResponse from '../delette-articles.response';
import DeleteArticlePresenter from '../port/delete-articles.presenter';

export default class DeleteArticlePresenterJsonMock implements DeleteArticlePresenter {
    response: DeleteArticlesResponse;

    constructor(response: DeleteArticlesResponse) {
        this.response = response;
    }

    viewModel(): DeleteArticlesResponse {
      return this.response;
    }

}