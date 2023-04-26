import { question } from "readline-sync";

class Point2D {
    // Khai báo thuộc tính của đối tượng
    Hoanhdo: number;
    Tungdo: number;

    /**
     * Phương thức khởi tạo một đối tượng thuộc lớp Point2D
     * @param x Hoành độ
     * @param y Tung độ
     */
    constructor(x: number = 0, y: number = 0) {
        this.Hoanhdo = x,
            this.Tungdo = y
    }

    /**
     * Phương thức nhập tọa độ điểm
     */
    public scan(): void {
        this.Hoanhdo = Number(question("Nhap hoang do x: "));
        this.Tungdo = Number(question("Nhap tung do y: "));
    }

    /**
     * Phương thức in tọa độ điểm
     */
    public print(): void {
        console.log("x:", this.Hoanhdo, "y:", this.Tungdo);
    }

    /**
     * Phương thức lấy hoành độ của điểm
     * @returns Hoành độ
     */
    public getX(): number {
        return this.Hoanhdo;
    }

    /**
     * Phương thức cập nhật hoành độ
     * @param value Hoành độ mới
     */
    public setX(value: number) {
        this.Hoanhdo = value;
    }

    /**
     * Phương thức lấy tung độ
     * @returns Tung độ
     */
    public getY(): number {
        return this.Tungdo;
    }

    /**
     * Phương thức cập nhật tung độ
     * @param value Tung độ mới
     */
    public setY(value: number) {
        this.Tungdo = value;
    }

    /**
     * Phương thức di chuyển điểm đến vị trí mới
     * @param dx Độ dời theo chiều ngang
     * @param dy Độ dời theo chiều dọc
     */
    public move(dx: number, dy: number): void {
        this.Hoanhdo += dx;
        this.Tungdo += dy;
    }

    /**
     * Phương thức tính khoảng cách đến một điểm khác
     * @param point Điểm cần được tính khoảng cách đến
     * @returns Khoảng cách
     */
    public getDistance(point: Point2D): number {
        const dx = point.Hoanhdo - this.Hoanhdo;
        const dy = point.Tungdo - this.Tungdo;
        const distance = Math.floor(Math.sqrt(dx * dx + dy * dy));
        return distance;
    }
}



function mainPoint() {
    // Khởi tạo đối tượng mới
    const p1: Point2D = new Point2D();

    // Test thử hàm scan
    p1.scan();


    // Test thử hàm print
    console.log("\nĐiểm p1 có tọa độ x và y")
    p1.print();

    // Test thử hàm get set, get
    console.log("\nTrước khi set: ");
    p1.print();

    p1.setX(1);
    p1.setY(-1);
    console.log("\nSau khi set: ");
    console.log("x =", p1.getX());
    console.log("y =", p1.getY());

    // Test thử hàm move
    console.log("\nDi chuyển điểm đến 1 vị trí khác")
    p1.move(2, 3);      // Di chuyển điểm hiện tại tới điểm có tọa độ {x=2,y=3}
    p1.print();

    // Test thử hàm getDistance
    console.log("\nTạo một điểm p2 mới có tọa độ")
    const p2: Point2D = new Point2D(5, 7);      // Tạo tọa độ p2 có {x=5,y=7}
    p2.print();                                 // in ra tọa độ p2
    console.log("\nKhoảng cách từ điểm hiện tại đến tọa độ điểm p2 =", p1.getDistance(p2));
};
mainPoint();

export { Point2D };