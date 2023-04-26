import { question } from "readline-sync";
import chalk from "chalk"; // Thư viện để làm màu cho terminal
import { Point2D } from "./point2D";
import { Circle } from "./circle";

class Program {
  // Các đối tượng thử nghiệm
  private point: Point2D;
  private circle: Circle;

  // Lấy các hàm trong thư viện chalk để dùng
  private info = chalk.blueBright.bold;
  private danger = chalk.redBright.italic.bold;
  private success = chalk.greenBright.bold;

  constructor() {
    this.point = new Point2D();
    this.circle = new Circle(this.point, 1);
  }
  /**
 * Hàm in ra menu của chương trình
 */
  private menu() {
    console.log(this.info("============= E02 ============="));
    console.log("1. Point2D: Nhap diem");
    console.log("2. Point2D: In diem");
    console.log("3. Point2D: Get/set");
    console.log("4. Point2D: Di chuyen");
    console.log("5. Point2D: Tinh khoang cach");
    console.log(this.info("=================================="));
    console.log("6. Circle: Nhap hinh tron");
    console.log("7. Point2D: In hinh tron");
    console.log("8. Point2D: Get/set");
    console.log("9. Point2D: Di chuyen");
    console.log("10. Point2D: Tinh dien tich");
    console.log(this.info("============= Menu ==============="));
  }

  /**
   * Hàm chạy chương trình chính
   */
  public run() {
    let choice: number = 0;

    do {
      this.menu();
      choice = Number(question(this.info('Chon chuc nang (Nhap so 0 de dung): ')));
      console.clear();
      switch (choice) {
        case 1:
          this.point.scan();
          console.log(this.success("Diem vua nhap la: "));
          this.point.print();
          break;
        case 2:
          console.log(this.success("Toa do diem la: "));
          this.point.print();
          break;
        case 3:
          console.log(this.success("Thu nghiem ham set"));
          this.point.setX(1);
          this.point.setY(-1);
          this.point.print();
          console.log(this.success("Thu nghiem ham get"));
          console.log("x =", this.point.getX());
          console.log("y =", this.point.getY());
          break;
        case 4:
          const dx = Number(question(this.info('Nhap dx: ')));
          const dy = Number(question(this.info('Nhap dy: ')));
          this.point.move(dx, dy);
          console.log(this.success("Diem sau khi di chuyen: "));
          this.point.print();
          break;
        case 5:
          const anotherPoint = new Point2D();
          console.log(this.success("Nhap mot diem khac: "));
          anotherPoint.scan();
          const distance = this.point.getDistance(anotherPoint);
          console.log(this.success(`Khoang cach tu diem (${this.point.getX()}, ${this.point.getY()}) den diem
                         (${anotherPoint.getX()}, ${anotherPoint.getY()}) la ${distance}`));
          break;
        case 6:
          this.circle.scan();
          console.log(this.success("Hinh tron vua nhap la: "));
          this.circle.print();
          break;
        case 7:
          console.log(this.success("Thong tin hinh tron la: "));
          this.circle.print();
          break;
        case 8:
          console.log(this.success("Thu nghiem ham set"));
          this.circle.setRadius(3);
          this.circle.setCenter(new Point2D(6, 9));
          this.circle.print();
          console.log(this.success("Thu nghiem ham get"));
          this.circle.getCenter().print();
          console.log("R =", this.circle.getRadius());
          break;
        case 9:
          const dx1 = Number(question(this.info('Nhap dx: ')));
          const dy1 = Number(question(this.info('Nhap dy: ')));
          this.circle.move(dx1, dy1);
          console.log(this.success("Hinh tron sau khi di chuyen: "));
          this.circle.print();
          break;
        case 10:
          const s = this.circle.getArea();
          console.log(this.success(`Dien tich hinh tron la: ${s}`));
          break;
      }
    } while (choice !== 0);
    console.log(this.info("Cam on ban da su dung ung dung. Tam biet!"));
  }
}


export { Program };