import Article from "../../../../use-case/page/entity/article";

export default class GetAllArticlesView {
    render(content: Article): string {
        const li = Object.values(content).map((data: Article) =>  `<li id="${data.slug}">
          <div>
            <span class="label">title:</span>
            <span class="value">${data.title}</span>
          </div>
          <div>
            <span class="label">description:</span>
            <span class="value">${data.description}</span>
          </div>
          <div>
            <span class="label">content:</span>
            <span class="value">${data.content}</span>
          </div>
          <div>
            <span class="label">slug:</span>
            <span class="value">${data.slug}</span>
          </div>
        </li>`).join('');
        const html = `<ul>${li}</ul>`;

        return html;
    }
}