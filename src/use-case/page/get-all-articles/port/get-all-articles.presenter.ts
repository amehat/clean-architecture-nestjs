export default interface GetAllArticlesPresenter {
    response: any;
    constructor(response: any): void;
    present(response: any): void;
    viewModel(): any;
}
