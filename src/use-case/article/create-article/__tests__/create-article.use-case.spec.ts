import ArticleListMock from "../../__mocks__/article-list.mock";
import CreatePageRequest from "../create-article.request";
import CreateArticle from "../create-article.use-case";
import CreateArticlePresenterJson from "../__mocks__/create-article-presenter-json.mock";
import CreateArticleResponseMock from "../__mocks__/create-article-response.mock";

describe('CreateArticle', () => {
    it('should', async () => {
        const slug = 'slug-mock';
        const title = 'title-mock';
        const description = 'description-mock';
        const content = 'content-mock';
        const createArticle = new CreateArticle(new ArticleListMock());
        const presenter = new CreateArticlePresenterJson(new CreateArticleResponseMock());
        const response = await createArticle.execute(new CreatePageRequest(slug, title, description, content), presenter);
        expect(response).toEqual({});
    });
});