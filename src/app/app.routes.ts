import { Routes } from '@angular/router';
import { Example1Component } from './pages/examples/example-1/example-1.component';

export const routes: Routes = [
    {
        path: 'example-1',
        component: Example1Component
    },
    {
        path: '',
        loadComponent: () => import('./global-layout/global-layout.component').then(m => m.GlobalLayoutComponent),
        children: [
            {
                path: '', pathMatch: 'full', redirectTo: 'introduction',
            },
            {
                path: 'introduction',
                loadComponent: () => import('./pages/introduction/introduction.component').then(m => m.IntroductionComponent),
            },
            {
                path: 'summary',
                loadComponent: () => import('./pages/summary/summary.component').then(m => m.SummaryComponent),
            },
            {
                path: 'what-is-flexbox',
                loadComponent: () => import('./pages/what-is-flexbox/what-is-flexbox.component').then(m => m.WhatIsFlexboxComponent),
            },
            {
                path: 'what-is-grid',
                loadComponent: () => import('./pages/what-is-grid/what-is-grid.component').then(m => m.WhatIsGridComponent),
            },
            {
                path: 'examples/1',
                loadComponent: () => import('./pages/examples/example-1/example-1.component').then(m => m.Example1Component),
            },
            {
                path: 'examples/2',
                loadComponent: () => import('./pages/examples/example-2/example-2.component').then(m => m.Example2Component),
            },
            {
                path: 'examples/3',
                loadComponent: () => import('./pages/examples/example-3/example-3.component').then(m => m.Example3Component),
            },
            {
                path: 'examples/4',
                loadComponent: () => import('./pages/examples/example-4/example-4.component').then(m => m.Example4Component),
            },
            {
                path: 'examples/5',
                loadComponent: () => import('./pages/examples/example-5/example-5.component').then(m => m.Example5Component),
            },
            {
                path: 'questions',
                loadComponent: () => import('./pages/questions/questions.component').then(m => m.QuestionsComponent),
            },
            {
                path: 'conclusion',
                loadComponent: () => import('./pages/conclusion/conclusion.component').then(m => m.ConclusionComponent),
            },
        ]
    },
    {
        path: 'examples/6',
        loadComponent: () => import('./pages/examples/example-6/example-6.component').then(m => m.Example6Component),
    },
];
