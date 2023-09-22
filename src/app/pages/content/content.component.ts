import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {dataFake} from '../../data/dataFake'

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent {
  photoCover:string = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQPG_ruzsUJQZU8RDwlEzK6bad9k2h6d8J0TNs1cKiqxYJ4ceZGoYVxet8j1Q_zfVMeGIc&usqp=CAU'
  contentTitle:string = 'Google Procura desenvolvedores angular'
  contentDescription:string = ''
  private id:string | null = '0'

  constructor(
    private route:ActivatedRoute
  ){}

  ngOnInit():void{
    this.route.paramMap.subscribe( value =>
      this.id= value.get('id')

    )
    this.setValuesToComponent(this.id)
  }

  setValuesToComponent(id:string | null){
    const result = dataFake.filter(article => article.id == id)[0]

    this.contentTitle = result.title
    this.contentDescription = result.description
    this.photoCover = result.photoCover




  }
}
