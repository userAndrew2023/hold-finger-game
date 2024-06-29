export default interface ShowPromiseResult {
    done: boolean; // true if user watch till the end, otherwise false
    description: string; // event description
    state: 'load' | 'render' | 'playing' | 'destroy'; // banner state
    error: boolean; // true if event was emitted due to error, otherwise false
}
