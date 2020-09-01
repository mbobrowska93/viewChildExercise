import { Component, OnInit, ViewChild, AfterViewInit, ElementRef} from '@angular/core';
import { ChildComponent } from '../child/child.component';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements AfterViewInit {

  @ViewChild(ChildComponent) child: ChildComponent;
  @ViewChild('ref') ref: ElementRef;


  constructor() { }

  ngOnInit(): void {
   
  }

  ngAfterViewInit() {
    console.log(this.child.showAlert());
    console.log(this.ref.nativeElement.value); // undefined
  }

}

