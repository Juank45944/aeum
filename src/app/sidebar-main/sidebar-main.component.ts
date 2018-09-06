import { Component, OnInit } from '@angular/core';
import * as $ from "jquery";
import * as M from "materialize-css";

@Component({
  selector: 'ae-sidebar-main',
  templateUrl: './sidebar-main.component.html',
  styleUrls: ['./sidebar-main.component.css']
})
export class SidebarMainComponent implements OnInit {

  private titles: any[];

  constructor() {
    this.initContent();
   }

  ngOnInit() {
    var collapsibleElems = document.querySelectorAll('.collapsible');
    var sidenavElems = document.querySelectorAll('.sidenav');
    var collapsibles = M.Collapsible.init(collapsibleElems);
    var sidenavs = M.Sidenav.init(sidenavElems);
  }

  /**
   * initContent
   */
  public initContent() {
    this.titles = [
      {
        numero: null,
        nombre: 'Resolución acreditación institucional',
        contenido: null
      },
      {
        numero: null,
        nombre: 'Fortalezas y oportunidades de mejora',
        contenido: null
      },
      {
        numero: '1',
        nombre: 'Transformaciones 2014 - 2017',
        contenido: [
          {
            numero: '1.1',
            nombre: 'Equilibrio en asignación docente',
            icon: 'description'
          },
          {
            numero: '1.2',
            nombre: 'Formación doctoral',
            icon: 'description'
          }
        ]
      },
      {
        numero: '2',
        nombre: 'Sinopsis',
        contenido: [
          {
            numero: '2.1',
            nombre: 'Breve reseña histórica de la institución',
            icon: 'description'
          },
          {
            numero: '2.2',
            nombre: 'Síntesis de la misión y visión institucional',
            icon: 'description'
          },
          {
            numero: '2.3',
            nombre: 'Número de estudiantes matriculados en los últimos 5 años por cada programa acreditado a la fecha de presentación del informe',
            icon: 'view_column'
          }
        ]
      },
      {
        numero: '3',
        nombre: 'Metodología de la autoevaluación',
        contenido: null
      },
      {
        numero: '4',
        nombre: 'Resultados de la autoevaluación 2017',
        contenido: [
          {
            numero: '4.1',
            nombre: 'Factor 1',
            icon: 'done'
          },
          {
            numero: '4.2',
            nombre: 'Factor 2',
            icon: 'done'
          },
          {
            numero: '4.3',
            nombre: 'Factor 3',
            icon: 'done'
          }
        ]
      },
      {
        numero: '5',
        nombre: 'Cuadros Maestros',
        contenido: null
      },
      {
        numero: '6',
        nombre: 'Informes de gestión',
        contenido: null
      },
      {
        numero: '7',
        nombre: 'Modelo de autoevaluación',
        contenido: null
      },
      {
        numero: '8',
        nombre: 'Plan de desarrollo 2018-2022',
        contenido: null
      },
    ];
  }


}
