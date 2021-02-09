import GetAllArticlesResponse from "../../../use-case/page/get-all-articles/get-all-articles.response";
import GetAllArticlesPresenter from "../../../use-case/page/get-all-articles/get-all-pages.presenter";
import CreateArticlesResponse from "../../../use-case/page/get-all-articles/interface/get-all-pages.response";

export default class GetAllArticlesJsonPresenter implements GetAllArticlesPresenter {
    public response;

    constructor(response: GetAllArticlesResponse) {
        this.response = response;
    }
    
    viewModel(): GetAllArticlesResponse {
        return this.response;
    }

    present(response: GetAllArticlesResponse) {
        this.response = response;
    }
}