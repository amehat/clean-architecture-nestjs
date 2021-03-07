export default class DeleteArticleResponse {
    public article: { slug: string; title: string; description?: string; content: string; id: string };
    public errors: { status: boolean; messages: string[] };
}
