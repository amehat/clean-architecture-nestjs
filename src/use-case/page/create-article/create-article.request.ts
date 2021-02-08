export default class CreatePageRequest {
    public title: string;
    public slug: string;
    public description: string;
    public content: string;

    constructor(slug: string, title: string, description: string, content: string) {
        this.title = title;
        this.slug = slug;
        this.description = description;
        this.content = content;
    }
}