import deletteArticlesResponse from "../../../../use-case/article/delete-article/delette-articles.response";
import DeleteArticlesPresenter from "../../../../use-case/article/delete-article/port/delete-articles.presenter";

export default class DeleteArticleJsonPresenter implements DeleteArticlesPresenter {
    response: deletteArticlesResponse;

    constructor(response: deletteArticlesResponse): void {
        this.response = response;
    }

    viewModel(): deletteArticlesResponse {
        return this.response;
    }

    present(response: deletteArticlesResponse): void {
         this.response = response;
    }
}