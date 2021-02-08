export default class GetAllArticlesResponse {
    public articles: { slug: string; title: string; description?: string; content: string }[];
    public errors: string[];
}
