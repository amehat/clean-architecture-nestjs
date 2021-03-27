import GetAllArticlesPresenter from "../../../use-case/page/get-all-articles/get-all-articles.presenter";
import GetAllArticlesResponse from "../../../use-case/page/get-all-articles/interface/get-all-articles.response";

export default class GetAllArticlesHtmlPresenter implements GetAllArticlesPresenter {
    public response;

    constructor(response: GetAllArticlesResponse) {
        this.response = response;
    }
    
    viewModel(): GetAllArticlesResponse {
        return JSON.parse(JSON.stringify(this.response));
    }
}