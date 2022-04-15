import { Component, OnInit } from '@angular/core';
import { ActivatedRoute,Router } from '@angular/router';

@Component({
  selector: 'app-selecion-compra',
  templateUrl: './selecion-compra.component.html',
  styleUrls: ['./selecion-compra.component.css']
})
export class SelecionCompraComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit(): void {
  }

  createBook(){
    // Create Book logic
    this.router.navigate(['/login']);
 }

}
