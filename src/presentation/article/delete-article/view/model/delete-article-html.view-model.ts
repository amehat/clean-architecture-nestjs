import Article from "src/use-case/article/entity/article";
import DeleteArticleHtmlView from "../delete-article-html.view";

export default class DeleteArticleHtmlViewModel {
    generateView(viewModel: { article: Article, errors: { status: boolean; messages: string[] } }): string {
        const view = new DeleteArticleHtmlView()

        return view.render(viewModel);
    }
}
