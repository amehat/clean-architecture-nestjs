import { truncate } from "fs";

export default class PaginationView {
    limitPerPage = 2;

    pageByDefault = 1;

    currentPage: number | undefined = undefined;

    constructor(currentPage?: number) {
        if (currentPage) {
            this.currentPage = currentPage;
        }
    }

    render(listResult: any, ) {
        const totalPage = Math.ceil((listResult.length)/this.limitPerPage) === 0 ? 1 : Math.ceil((listResult.length)/this.limitPerPage);
        const page  = (this.currentPage || this.pageByDefault) > totalPage ? totalPage : (this.currentPage || this.pageByDefault);
        const data = [];
        for (let i = (page-1) * this.limitPerPage; i < (page * this.limitPerPage); i++) {
            if (listResult[i]) {
              data.push(listResult[i]);
            }
        }
        return {
            data,
            page,
            total: listResult.length,
            totalPage: data.length,
            range: `${page}/${totalPage}`,
            from: `${(((page) -1) * this.limitPerPage) + 1}`,
            to: (page)  * this.limitPerPage
        }
    }
}
