import DeleteArticlesPresenter from "../../../use-case/page/delete-articles/delete-articles.presenter";
import DeleteArticlesResponse from "../../../use-case/page/delete-articles/port/delete-articles.response";

export default class DeleteArticlesHtmlPresenter implements DeleteArticlesPresenter {
    public response;

    constructor(response: DeleteArticlesResponse) {
        this.response = response;
    }
    
    viewModel(): DeleteArticlesResponse {
        return this.response;
    }

    present(response: DeleteArticlesResponse): void {
        this.response = JSON.parse(JSON.stringify(response));
    }
}