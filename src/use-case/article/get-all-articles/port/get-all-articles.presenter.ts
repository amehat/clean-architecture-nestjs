import GetAllArticlesResponse from "../get-all-articles.response";
export default interface GetAllArticlesPresenter {
    response: GetAllArticlesResponse;
    viewModel(): GetAllArticlesResponse;
}
