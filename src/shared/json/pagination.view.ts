export default class PaginationView {
    limitPerPage = 10;

    pageByDefault = 1;

    render(list: any) {
        // TODO: create thrut paginate
        return {
            data: list,
            page: 1,
            total: list.length,
            range: '1/1'
        }
    }
}
