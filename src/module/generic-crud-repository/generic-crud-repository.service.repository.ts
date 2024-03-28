export const CRUD_REPOSITORY = 'CRUD_REPOSITORY'
export interface ICRUDRepositoty<T> {

    findAll(alias: string, params: { itemsPerPage: number; page: number; keyword: string }): Promise<{ data: T[]; count: number }>;
    findById(alias: string, id: number): Promise<T>;
    deleteItem(alias: string, id: number): Promise<number>;
    createItem(alias: string, item: T): Promise<T>;
    updateItem(alias: string, id: number, item: Partial<T>): Promise<T>;

}