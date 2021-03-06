import { ComponentFactoryResolver, Injector } from '@angular/core';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-c',
  templateUrl: './c.component.html',
  styleUrls: ['./c.component.scss'],
})
export class CComponent implements OnInit {
  constructor(
    private injector: Injector,
    public cfResolver: ComponentFactoryResolver
  ) {}

  ngOnInit(): void {}
}
