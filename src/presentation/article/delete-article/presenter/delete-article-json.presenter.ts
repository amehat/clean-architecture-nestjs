import deleteArticlesResponse from "../../../../use-case/article/delete-article/delette-articles.response";
import DeleteArticlesPresenter from "../../../../use-case/article/delete-article/port/delete-articles.presenter";

export default class DeleteArticleJsonPresenter implements DeleteArticlesPresenter {
    response: deleteArticlesResponse;

    constructor(response: deleteArticlesResponse): void {
        this.response = response;
    }

    viewModel(): deleteArticlesResponse {
        return this.response;
    }

    present(response: deleteArticlesResponse): void {
         this.response = response;
    }
}