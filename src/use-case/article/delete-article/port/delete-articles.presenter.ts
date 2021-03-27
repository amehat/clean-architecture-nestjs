import DeleteArticleResponse from "../delette-articles.response";

export default interface DeleteArticlesPresenter {
    response: DeleteArticleResponse;
    viewModel(): DeleteArticleResponse;
}
