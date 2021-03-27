import ArticleListMock from "../../__mocks__/article-list.mock";
import GetAllPArticlesRequest from "../get-all-articles.request";
import GetAllArticlesResponse from "../get-all-articles.response";
import GetAllArticles from "../get-all-articles.use-case";
import GetAllArticlePresenterJson from "../__mocks__/get-all-articles-presenter-json.mock";

describe('GetAllArticles', () => {
    it('should', async () => {
        const getAllArticles = new GetAllArticles(new ArticleListMock());
        const presenter = new GetAllArticlePresenterJson(new GetAllArticlesResponse());
        await getAllArticles.execute(new GetAllPArticlesRequest(), presenter);
        expect(JSON.parse(JSON.stringify(presenter.viewModel()))).toEqual({
          articles: [],
        });
    })
});