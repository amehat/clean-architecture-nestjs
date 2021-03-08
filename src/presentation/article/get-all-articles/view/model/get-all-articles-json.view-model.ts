import Article from "../../../../../use-case/article/entity/article";
import PaginationView from "../../../../shared/json/pagination.view"

export default class GetAllArticlesJsonView {
    page: number;

    constructor(page?: number) {
        if (page) {
            this.page = page;
        }
    }

    generateView(viewModel: { articles: Article }) {
        const pagination = new PaginationView(this.page);
        return pagination.render(viewModel.articles);
    }
}
