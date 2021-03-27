import ArticleListMock from "../../__mocks__/article-list.mock";
import CreateArticleRequest from "../create-article.request";
import CreateArticle from "../create-article.use-case";
import CreateArticlePresenterJson from "../__mocks__/create-article-presenter-json.mock";
import CreateArticleResponse from '../create-article.response';

describe('CreateArticle', () => {
    it('should create an article', async () => {
        const slug = 'slug-mock';
        const title = 'title-mock';
        const description = 'description-mock';
        const content = 'content-mock';
        const createArticle = new CreateArticle(new ArticleListMock());
        const presenter = new CreateArticlePresenterJson(new CreateArticleResponse());
        await createArticle.execute(new CreateArticleRequest(slug, title, description, content), presenter);
        expect(JSON.parse(JSON.stringify(presenter.viewModel()))).toEqual({
          article: {
            content: 'content-mock',
            description: 'description-mock',
            slug: 'slug-mock',
            title: 'title-mock'
          }
        });
    });
});