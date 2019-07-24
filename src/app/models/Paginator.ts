export interface Paginator<T>{
  itemsPerPage: number;
  pageInit: number;
  currentPage: number;
  lastPage: number;
  items: T[];
}
