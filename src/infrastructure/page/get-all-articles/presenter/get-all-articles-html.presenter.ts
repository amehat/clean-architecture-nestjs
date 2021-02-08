import GetAllArticlesPresenter from "../../../use-case/page/get-all-articles/get-all-articles.presenter";
import GetAllArticlesResponse from "../../../use-case/page/get-all-articles/interface/get-all-articles.response";

export default class GetAllArticlesHtmlPresenter implements GetAllArticlesPresenter {
    public response;

    constructor(response: any) {
        this.response = response;
    }
    
    viewModel() {
        return this.response;
    }

    present(response: any) {
        this.response = JSON.parse(JSON.stringify(response));
    }
}