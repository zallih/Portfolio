import { Component, signal } from '@angular/core';
import { Knowledge } from '../../interface/Knowledge.interface';

@Component({
  selector: 'app-knowledge',
  imports: [],
  templateUrl: './knowledge.component.html',
  styleUrl: './knowledge.component.scss'
})
export class KnowledgeComponent {
  public arrayKnowledge = signal<Knowledge[]>([
    {
      src: 'assets/icons/knowledge/html5.svg',
      alt: 'Icone conhecimento HTML5'
    },
    {
      src: 'assets/icons/knowledge/css3.svg',
      alt: 'Icone conhecimento CSS3'
    },
    {
      src: 'assets/icons/knowledge/angular.svg',
      alt: 'Icone conhecimento angualr'
    },
    {
      src: 'assets/icons/knowledge/sass.svg',
      alt: 'Icone conhecimento HTML5'
    },
    {
      src: 'assets/icons/knowledge/javascript.svg',
      alt: 'Icone conhecimento HTML5'
    },
    {
      src: 'assets/icons/knowledge/unity.svg',
      alt: 'Icone conhecimento HTML5'
    },

  ])
}
