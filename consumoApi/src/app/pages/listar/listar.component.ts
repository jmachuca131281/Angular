import { Component, OnInit } from '@angular/core';
import { BreedsService } from 'src/app/services/breeds.service';
import { Message } from '@angular/compiler/src/i18n/i18n_ast';

@Component({
  selector: 'app-listar',
  templateUrl: './listar.component.html',
  styleUrls: ['./listar.component.css']
})
export class ListarComponent implements OnInit {
  breedList: string[] = []; // Array de  
  breedSelected: string;
  breedImages: any[] = [];
  breadRandomImage: string; // Se agregas la nueva propiedad para almacenar la información.

  constructor(public breedService: BreedsService) { }

  ngOnInit(): void { // Llamamos el metodo que carga las imagenes
    this.loadBreeds();
  }

  loadImages() {
    this.breedService.getImages(this.breedSelected).subscribe(
      (data) => {
        this.breadRandomImage = data['message'];
      },
      (error) => {
        console.log(error);
      }
    )
  }

  loadRandomImage() {   // Creamos el nuevo método para tomar la información.
    this.breedService.getRandomImage().subscribe(
      (data) => {
        this.breadRandomImage = data['message']; // El servicio debuelve el json
      },
      (error) => {
        console.log(error);
      }
    )
  }

  loadBreeds() {
    this.breedList = [
      'affenpinscher',
      'african',
      'airedale',
      'akita',
      'appenzeller',
      'basenji',
      'beagle',
      'bluetick',
      'borzoi',
      'bouvier',
      'boxer',
      'brabancon',
      'briard',
      'bulldog',
      'bullterrier',
      'cairn',
      'cattledog',
      'chihuahua',
      'chow',
      'clumber',
      'cockapoo',
      'collie',
      'coonhound',
      'corgi',
      'cotondetulear',
      'dachshund',
      'dalmatian',
      'dane',
      'deerhound',
      'dhole',
      'dingo',
      'doberman',
      'elkhound',
      'entlebucher',
      'eskimo',
      'frise',
      'germanshepherd',
      'greyhound',
      'groenendael',
      'hound',
      'husky',
      'keeshond',
      'kelpie',
      'komondor',
      'kuvasz',
      'labrador',
      'leonberg',
      'lhasa',
      'malamute',
      'malinois',
      'maltese',
      'mastiff',
      'mexicanhairless',
      'mix',
      'mountain',
      'newfoundland',
      'otterhound',
      'papillon',
      'pekinese',
      'pembroke',
      'pinscher',
      'pointer',
      'pomeranian',
      'poodle',
      'pug',
      'puggle',
      'pyrenees',
      'redbone',
      'retriever',
      'ridgeback',
      'rottweiler',
      'saluki',
      'samoyed',
      'schipperke',
      'schnauzer',
      'setter',
      'sheepdog',
      'shiba',
      'shihtzu',
      'spaniel',
      'springer',
      'stbernard',
      'terrier',
      'vizsla',
      'weimaraner',
      'whippet',
      'wolfhound'
    ];
  }
}

