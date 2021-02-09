import Article from '../../../../../use-case/page/entity/article';
import GetAllArticlesHtmlView from '../get-all-articles-html.view';

export default class GetAllArticlesHtmlViewModel {
    generateView(viewModel: { articles: Article}): string {
        const view = new GetAllArticlesHtmlView();

        return view.render(viewModel.articles);
    }
}
