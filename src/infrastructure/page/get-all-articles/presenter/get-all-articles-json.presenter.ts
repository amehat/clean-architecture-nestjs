import GetAllArticlesPresenter from "../../../use-case/page/get-all-articles/get-all-pages.presenter";
import CreateArticlesResponse from "../../../use-case/page/get-all-articles/interface/get-all-pages.response";

export default class GetAllArticlesJsonPresenter implements GetAllArticlesPresenter {
    public response;

    constructor(response: any) {
        this.response = response;
    }
    
    viewModel() {
        return this.response;
    }

    present(response: any) {
        this.response;
    }
}