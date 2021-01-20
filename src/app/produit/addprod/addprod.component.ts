import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Produit } from 'src/app/model/produit';
import { ProduitserviceService } from 'src/app/service/produitservice.service';

@Component({
  selector: 'app-addprod',
  templateUrl: './addprod.component.html',
  styleUrls: ['./addprod.component.css']
})
export class AddprodComponent implements OnInit {
  produit: Produit= new Produit();

  constructor(private service : ProduitserviceService , private route : ActivatedRoute , private router : Router) { }

  ngOnInit(): void {
  }
     addproduit() {
        this.service.createData(this.produit).subscribe(
          data=> {console.log(data)
            this.goToProduit()}

        )
      }

      onsubmit(){
        console.log(this.produit);

        this.addproduit();
      }
       goToProduit(){
    this.router.navigate(['/produit'])
  }
}
