import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Produit } from 'src/app/model/produit';
import { ProduitserviceService } from 'src/app/service/produitservice.service';

@Component({
  selector: 'app-produit',
  templateUrl: './produit.component.html',
  styleUrls: ['./produit.component.css']
})
export class ProduitComponent implements OnInit {
  produit :Produit [] =[] ;
  constructor(private service : ProduitserviceService , private route : ActivatedRoute , private router : Router ) { }

  ngOnInit(): void { this.service.getData().subscribe(
    data =>{ this.produit=data}
  )
  }
    addProduit(){
      this.router.navigate(['addproduit']);

    }
    updateProduit(id : number){
      this.router.navigate(['updaProd', id]);
    }
}
