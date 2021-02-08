import PaginationView from "../../../../../shared/json/pagination.view"

export default class GetAllArticlesJsonView {
    generateView(viewModel: any) {
        const pagination = new PaginationView();
        return pagination.render(viewModel.articles);
    }
}
