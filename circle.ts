import { question } from "readline-sync";
import { Point2D } from "./point2D";

class Circle {
  // Khai báo thuộc tính của đối tượng
  private _center: Point2D;
  private _radius: number;

  /**
   * Phương thức khởi tạo đối tượng Circle
   * @param center Tâm của hình tròn
   * @param radius Bán kính
   */
  constructor(center: Point2D, radius: number) {
    this._center = center;
    if (radius > 0)
      this._radius = radius;
    else 
      this._radius = 1;
  }

  /**
   * Phương thức nhập thông tin của hình tròn từ bàn phím
   */
  public scan(): void {
    console.log("Nhap tam hinh tron: ");
    this._center.scan();
    this._radius = parseFloat(question("Nhap ban kinh: ") || "0");
  }

  /**
   * Phương thức in thông tin của hình tròn
   */
  public print(): void {
    console.log("Tam: ");
    this._center.print();
    console.log(`Ban kinh: ${this._radius}`);
  }

  /**
   * Phương thức lấy tâm của hình tròn
   * @returns Tâm của hình tròn
   */
  public getCenter(): Point2D {
    return this._center;
  }

  /**
   * Phương thức cập nhật tâm của hình tròn bằng một điểm khác
   * @param center Tâm hình tròn
   */
  public setCenter(center: Point2D) {
    const x = center.getX();
    const y = center.getY()
    this._center = new Point2D(x, y);
  }

  /**
   * Phương thức lấy bán kính hình tròn
   * @returns Bán kính của hình tròn
   */
  public getRadius(): number {
    return this._radius;
  }

  /**
   * Phương thức cập nhật bán kình hình tròn
   * @param radius Bán kính mới của hình tròn
   */
  public setRadius(radius: number) {
    if (radius > 0)
      this._radius = radius;
  }

  /**
   * Phương thức di chuyển hình tròn đến vị trí mới
   * @param dx Độ dời theo chiều ngang
   * @param dy Độ dời theo chiều dọc
   */
  public move(dx: number, dy: number): void {
    this._center.move(dx, dy);
  }

  /**
   * Phương thức tính diện tích hình tròn
   * @returns Diện tích hình tròn
   */
  public getArea(): number {
    return Math.PI * this._radius ** 2;
  }
}


// Sử dụng Point2D
function mainPoint() {
    // Khởi tạo đối tượng mới
    const p1: Point2D = new Point2D();

    // Test thử hàm scan
    p1.scan();
    
    // Test thử hàm print
    p1.print();

    // Test thử hàm get set, get
    console.log("Truoc khi set: ");
    p1.print();
    p1.setX(1);
    p1.setY(-1);
    console.log("Sau khi set: ");
    console.log("x =", p1.getX());
    console.log("y =", p1.getY());
    
    // Test thử hàm move
    p1.move(2, 3);
    p1.print();

    // Test thử hàm getDistance
    const p2: Point2D = new Point2D(4, 5);
    p2.print();
    console.log(p1.getDistance(p2));
};

// Sử dụng Circle
function mainCircle() {
    // Khởi tạo đối tượng mới
    const center: Point2D = new Point2D(0, 0);
    const circle: Circle = new Circle(center, 3);
    
    // Test thử hàm scan
    circle.scan();
    
    // Test thử hàm print
    circle.print();

    // Test thử hàm get set, get
    console.log("\nTrước khi set");
    circle.print();
    circle.setRadius(3);
    circle.setCenter(new Point2D(6, 9));
    console.log("\nSau khi set: ");
    circle.getCenter().print();
    console.log("\nR =",circle.getRadius());
    
    // Test thử hàm move
    circle.move(2, 3);
    console.log("\nHình tròn sau khi di chuyển: ");
    circle.print();

    // Test thử hàm getArea
    const s = circle.getArea();
    console.log(`\nDiện tích hình tròn là: ${s}`);
}

mainCircle();


export { Circle };
