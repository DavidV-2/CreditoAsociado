import { RenderMode, ServerRoute } from '@angular/ssr';

export const serverRoutes: ServerRoute[] = [

  { path: 'login', renderMode: RenderMode.Client },
  { path: 'home', renderMode: RenderMode.Prerender },
  { path: 'dashboard', renderMode: RenderMode.Prerender },
  

  { path: 'creditos', renderMode: RenderMode.Client },
  { path: 'creditos/crear', renderMode: RenderMode.Client },
  { path: 'creditos/:id', renderMode: RenderMode.Client },


  { path: '**', renderMode: RenderMode.Client }
];