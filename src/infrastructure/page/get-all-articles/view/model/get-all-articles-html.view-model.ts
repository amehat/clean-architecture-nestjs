import GetAllArticlesHtmlView from '../get-all-articles-html.view';

export default class GetAllArticlesHtmlViewModel {
    generateView(viewModel: any) {
        const view = new GetAllArticlesHtmlView();

        return view.render(viewModel.articles);
    }
}
