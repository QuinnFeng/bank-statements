import jan from "./assets/01_16_2024-65A78CA8.G8X_PDF.pdf"; 
import dec from "./assets/12_13_2023-657AB625.GAL_PDF.pdf";
import nov from "./assets/11_14_2023-655476FA.GAC_PDF.pdf";
import img1 from "./assets/Screenshot_1.png";
import img2 from "./assets/Screenshot_2.png";
import img3 from "./assets/Screenshot_3.png";
import img4 from "./assets/Screenshot_4.png";
import img5 from "./assets/Screenshot_5.png";
interface statement {
  month: string;
  file: string;
}
export const statements: statement[] = [
  { month: "一月", file: jan },
  { month: "十二月", file: dec },
  { month: "十一月", file: nov }
];

export const images = [img1,img2,img3,img4,img5];


