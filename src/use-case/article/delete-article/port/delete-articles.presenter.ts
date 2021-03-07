import DeleteArticleResponse from "../delette-articles.response";
import DeleteArticlesResponse from "../delette-articles.response";

export default interface DeleteArticlesPresenter {
    response: DeleteArticleResponse;
    constructor(response: DeleteArticleResponse): void;
    present(response: DeleteArticleResponse): void;
    viewModel(): DeleteArticleResponse;
}
