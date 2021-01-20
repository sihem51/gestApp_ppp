import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Produit } from 'src/app/model/produit';
import { ProduitserviceService } from 'src/app/service/produitservice.service';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-updateprod',
  templateUrl: './updateprod.component.html',
  styleUrls: ['./updateprod.component.css']
})
export class UpdateprodComponent implements OnInit {
  private baseUrl="http://localhost:9090/getstock/produit";
  id :number ;
  produit : Produit = new Produit () ;
  constructor(private service : ProduitserviceService ,private route : ActivatedRoute , private router : Router ,private http: HttpClient) { }

  ngOnInit(): void {
    this.id  = this.route.snapshot.params['id'];
    this.service.getPeoduitById(this.id).subscribe(
      data  =>{this.produit  = data;}
    );


  }
  onsubmit(){

    this.http.put(`${this.baseUrl}/${this.id}`, this.produit).subscribe(
      data  =>{console.log(data)
             this.goToProduit()  ;         }
    )
  }
  goToProduit(){
    this.router.navigate(['/produit'])
  }

}
