import ArticleList from '../../__mocks__/article-list.mock';
import DeleteArticleRequest from '../delete-articles.request';
import DeleteArticle from "../delete-articles.use-case";
import DeleteArticleResponse from '../delette-articles.response';
import DeleteArticlePresenterJson from '../__mocks__/delete-article-presenter-json.mock';

describe('DeleteArticle', () => {
  it('should', async () => {
      const articleList = new ArticleList();
      articleList.create({
        slug: 'my-slug',
        title: 'my title',
        description: 'my descripttion',
        content: 'my content',
      })
      const deleteArticle = new DeleteArticle(articleList);
      const presenter = new DeleteArticlePresenterJson(new DeleteArticleResponse())
      await deleteArticle.execute(new DeleteArticleRequest('error-slug'), presenter);
      expect(JSON.parse(JSON.stringify(presenter.response))).toEqual({
          errors: {
            messages: ['Article "error-slug" was not deleted.'],
            status: true,
          }
      });
      await deleteArticle.execute(new DeleteArticleRequest('my-slug'), presenter);
      expect(JSON.parse(JSON.stringify(presenter.response))).toEqual({
          errors: {
            messages: ['Article "my-slug" has been deleted successfully.'],
            status: false,
          }
      });
  })
});