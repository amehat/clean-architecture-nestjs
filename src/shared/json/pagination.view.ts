export default class PaginationView {
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
