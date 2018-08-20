// Angular
import { Component, OnInit } from '@angular/core';

// MyApp
import { ProductService } from "../product/product.service";

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  products: any;
  productImages: any;
  productName: string;
  slideIndex = 0;

  constructor(private productService: ProductService) { }

  ngOnInit() {
    this.getProducts();
  }

  getProducts() {
    this.productService.getProducts()
      .subscribe(data => {
        this.products = data.groups;
        console.log(this.products);
      });
  }

  openModal(images, name) {
    this.productName = name;
    this.productImages = images;
    document.getElementById('myModal').style.display = "block";
    this.slideIndex = 0;
  }

  closeModal() {
    document.getElementById('myModal').style.display = "none";
  }

  plusSlides(n) {
    if (this.productImages.length == this.slideIndex + n)
      this.slideIndex = 0;
    else if (this.slideIndex + n == -1)
      this.slideIndex = this.productImages.length - 1;
    else
      this.slideIndex += n;
  }

  currentSlide(n) {
    this.slideIndex = n;
  }
}
