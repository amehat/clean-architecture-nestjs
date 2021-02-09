import GetAllArticlesResponse from "../get-all-articles.response";
export default interface GetAllArticlesPresenter {
    response: any;
    constructor(response: GetAllArticlesResponse): void;
    present(response: GetAllArticlesResponse): void;
    viewModel(): GetAllArticlesResponse;
}
