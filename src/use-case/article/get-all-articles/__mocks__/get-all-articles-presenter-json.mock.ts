import GetAllArticlesResponse from "../get-all-articles.response";
import GetAllArticlesPresenter from "../port/get-all-articles.presenter";

export default class GetAllArticlePresenterJson implements GetAllArticlesPresenter {
    response: GetAllArticlesResponse;

    constructor(response: GetAllArticlesResponse) {
      this.response = response;
    }

    viewModel(): GetAllArticlesResponse {
      return this.response;
    }
}
