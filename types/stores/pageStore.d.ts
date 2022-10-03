export default instance;
declare const instance: PageStore;
declare class PageStore {
    getInitialState(): any;
    reduce(state: any, action: any): any;
}
