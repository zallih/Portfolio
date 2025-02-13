import { Component, inject, signal } from '@angular/core';
import { IProjects } from '../../interface/IProjects.interface';

import {MatDialog, MatDialogModule} from '@angular/material/dialog';
import { EDialohClass } from '../../enum/EDialogPanelClass.enum';
import { DialogProjectsComponent } from '../dialog/dialog-projects/dialog-projects.component';

@Component({
  selector: 'app-projects',
  imports: [MatDialogModule],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss'
})
export class ProjectsComponent {

  #dialog = inject(MatDialog);

  public arrayProjects = signal<IProjects[]>([
    {
      src: 'assets/img/projects/todo.png',
      alt: 'Projeto: To-Do App',
      title: 'App To-Do',
      width: '100px',
      height: '51px',
      description: '<p>Meu primeiro projeto usando Angular, uma lista de tarefas!</p>',
      links: [
        {
          name: 'Conheça o projeto',
          href:'https://app-to-do-v9ru.vercel.app/',
        }
      ]
    },
    {
      src: 'assets/img/projects/Logo.svg',
      alt: 'Projeto: Pokedex',
      title: 'Pokedex',
      width: '100px',
      height: '51px',
      description: '<p>Um projeto usando Angular e a famosa API de Pokemon!</p>',
      links: [
        {
          name: 'Conheça a Pokedex',
          href:'https://poke-dex-zeta.vercel.app/',
        }
      ]
    },
    {
      src: 'assets/img/projects/logogh.png',
      alt: 'Projeto: GitHub API',
      title: 'GitHub API',
      width: '100px',
      height: '51px',
      description: '<p>Usando React pela primeira vez, utilizando a API do GitHub!</p>',
      links: [
        {
          name: 'Conheça o projeto',
          href:'https://git-hub-azure.vercel.app/',
        }
      ]
    },
    {
      src: 'assets/img/projects/we.png',
      alt: 'Projeto: We Form',
      title: 'We Form',
      width: '100px',
      height: '51px',
      description: '<p>Projeto simples com html e css</p>',
      links: [
        {
          name: 'Conheça o projeto',
          href:'https://zallih.github.io/WeForm/index.html',
        }
      ]
    },
    {
      src: 'assets/img/projects/medi.png',
      alt: 'Projeto: MediCenter',
      title: 'MediCenter',
      width: '100px',
      height: '51px',
      description: '<p>Projeto simples com html e css utilizando flexbox</p>',
      links: [
        {
          name: 'Conheça o projeto',
          href:'https://zallih.github.io/MediCenter/',
        }
      ]
    },
    {
      src: 'assets/img/projects/awax.png',
      alt: 'Projeto: Awax',
      title: 'Awax',
      width: '100px',
      height: '51px',
      description: '<p>Projeto simples com html e css</p>',
      links: [
        {
          name: 'Conheça o projeto',
          href:'https://zallih.github.io/Awax/',
        }
      ]
    }
  ]);

  public openDialog(data: IProjects){
    this.#dialog.open(DialogProjectsComponent, {
      data,
      panelClass: EDialohClass.PROJECTS
    })
  }

}
