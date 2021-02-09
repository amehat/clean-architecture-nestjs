import Article from "../../../../../use-case/page/entity/article";
import PaginationView from "../../../../../shared/json/pagination.view"

export default class GetAllArticlesJsonView {
    generateView(viewModel: { articles: Article }) {
        const pagination = new PaginationView();
        return pagination.render(viewModel.articles);
    }
}
