import Article from "../entity/article";

export default class CreatePageResponse {
    public article: Article;
    public errors: string[];
}
