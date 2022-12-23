import { Component, OnInit } from '@angular/core';
import { ProductModel } from 'src/app/models/product';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {

  products:ProductModel[] = [
    {name:"Keçi Peyniri",price:250.15,imageUrl:"https://www.peynircibaba.com/image/catalog/urunler/1008.jpg"},
    {name:"Tokat Zeytinyağlı Yaprak Sarma (1KG)",price:250.15,imageUrl:"https://organikmarketten.com/1029-large_default/zeytinyagli-yaprak-sarma-1kg.jpg"},
    {name:"Organik Pancar Turşusu (Ev Yapımıdır) 500 GR",price:25.15,imageUrl:"https://organikmarketten.com/1025-large_default/organik-pancar-tursusu-ev-yapimidir-500-gr.jpg"},
    {name:"Organik Biber Turşusu (Jalapeno) (Ev Yapımıdır) 500 GR",price:25.15,imageUrl:"https://organikmarketten.com/1027-large_default/organik-biber-tursusu-jalapeno-ev-yapimidir-500-gr.jpg"},
    {name:"Metin Baba Doğal Katkısız Tahin (600 Gr)",price:80.15,imageUrl:"https://organikmarketten.com/978-large_default/metin-baba-dogal-katkisiz-tahin-600-gr.jpg"},
    {name:"Sivas Organik Petek Bal 250 GR",price:50.15,imageUrl:"https://organikmarketten.com/764-large_default/kars-organik-petek-bal-250-gr.jpg"},
    {name:"Zeytin ",price:100,imageUrl:"https://organikmarketten.com/455-home_default/gemlik-zeytin-1kg.jpg"},
    {name:"Kahramanmaraş Dondurması 1 Kg",price:70,imageUrl:"https://kahramanmaras.bel.tr/fs/dosyalar/resimler/344.jpg"}
  ]
  //birden fazla ürün tasıyacak modelden nesne oluşturuldu.
  constructor() { }

  ngOnInit(): void {
  }

}
