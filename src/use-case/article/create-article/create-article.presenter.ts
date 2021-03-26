import CreateArticleResponse from './create-article.response';

export default interface CreateArticlePresenter {
    response: CreateArticleResponse;
    viewModel(): CreateArticleResponse;
}
