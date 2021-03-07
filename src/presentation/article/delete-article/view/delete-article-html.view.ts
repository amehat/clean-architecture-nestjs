import Article from "../../../../use-case/article/entity/article";

export default class DeleteArticlesHtmlView {
    render(model: {article: Article, errors: { status: boolean; messages: string[] } }): string {
        const { article, errors } = model;
        if (errors && errors.status === true) {
            const countMessage = errors.messages.length;
            let title = '';
            if (countMessage === 1) {
                title = 'An error has occurred:';
            } else {
                title = 'Some errors have occurred:';
            }
            return `<div>
                <span class="label">${title}</span>
                <span class="error-message">${errors.messages.join('<br>')}</span>
            </div>`;
        }

        return `Article has been deleted successfully!`;
    }
}