import Article from '../entity/article';

export default class GetAllArticlesResponse {
    public articles: Article[];
    public errors: string[];
}
