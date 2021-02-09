import CreateArticlePresenter from "use-case/create-article/create-article.presenter";
import CreateArticleResponse from "use-case/create-article/interface/create-article.response";

export default class CreateArticleJsonPresenter implements CreateArticlePresenter {
    public response;

    constructor(response: any) {
        this.response = response;
    }
    
    viewModel() {
        return this.response;
    }
}