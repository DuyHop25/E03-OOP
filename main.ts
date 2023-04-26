import {Program} from './program'

/**
 * Hàm chạy chương trình chính.
 * Kỹ thuật: IIFE
 */
(function main(): void {
    const p = new Program();
    p.run();
})();
