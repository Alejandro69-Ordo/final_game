import { Component, OnInit } from '@angular/core';
import { ActivatedRoute,Router } from '@angular/router';
import { Observable,Subscriber } from 'rxjs';
import { Saller } from 'src/app/Services_Back/Saller';
import { VendedorService } from 'src/app/Services_Back/vendedor.service';
import Swal from 'sweetalert2';
import { Product } from '../../Services_Back/producto/Product';
import { ProductoService } from '../../Services_Back/producto/producto.service';

@Component({
  selector: 'app-update-producto',
  templateUrl: './update-producto.component.html',
  styleUrls: ['./update-producto.component.css']
})
export class UpdateProductoComponent implements OnInit {

  product:Product=new Product();
  observable?:Observable<Saller>;
  observable_pr?:Observable<Product>;
  myimage?: Observable<any>;
  file:File=new File([],'');
  foto?:string;

  constructor(private router:Router
    ,private activatedRoute: ActivatedRoute,
    private vendedor_service:VendedorService,
    private producto_service:ProductoService) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe( params => {
      let id = params['vendedor'];
      this.observable= this.vendedor_service. getClientById(id);
    })

    this.activatedRoute.params.subscribe( params => {
      let id = params['producto'];
      this.observable_pr= this.producto_service.getProductById(id);
    })

    this.observable_pr?.subscribe(
      _objet=>{
            this.product=_objet

    }, error => console.log(error));

  }

  update(): void {
    this.activatedRoute.params.subscribe( params => {
      let id = params['vendedor'];
      this.observable= this.vendedor_service. getClientById(id);
    })

    this.observable?.subscribe(
      _objet=>{
        console.log(_objet)
        this.product.saller=_objet;
        this.product.imageUrl=this.foto;
        this.producto_service.update(this.product,this.product.productId).subscribe(data_=>{
          console.log(data_)

          this.producto_service.upload(this.file,data_.productId).subscribe();

          Swal.fire('Producto Actualizado', `Nombre ${this.product.name}`,`success`);
          this.activatedRoute.params.subscribe( params => {
            let id = params['vendedor'];
            this.router.navigate(['/vendedor_',id])
          })

        });

    }, error => console.log(error));
  }

  isImageSaved: boolean = false;
  cardImageBase64: string = '';


  CreateBase64String(fileInput: any) {
    if (fileInput.target.files && fileInput.target.files[0]) {
      const reader = new FileReader();
      reader.onload = (e: any) => {
        const image = new Image();
        image.src = e.target.result;
        image.onload = rs => {
          const imgBase64Path = e.target.result;
          this.cardImageBase64 = imgBase64Path;
          this.isImageSaved = true;
            this.foto=imgBase64Path;
        };
      };
      this.file=fileInput.target.files[0];
      reader.readAsDataURL(fileInput.target.files[0]);
    }
  }
  //________________________

  convertToBase64(file: File) {
    this.myimage = new Observable((subscriber: Subscriber<any>) => {
      this.readFile(file, subscriber);
    });
  }

  readFile(file: File, subscriber: Subscriber<any>) {
    const filereader = new FileReader();
    filereader.readAsDataURL(file);

    filereader.onload = () => {
      subscriber.next(filereader.result);
      subscriber.complete();
    };
    filereader.onerror = (error) => {
      subscriber.error(error);
      subscriber.complete();
    };
  }


}
