import { animate, state, style, transition, trigger } from '@angular/animations';

export const highlightedStateTrigger = trigger('highlightedState', [
    state('default', style({
      border: '2px solid #B2B6FF'
    })),
    state('highlighted', style({
      border: '4px solid #B2B6FF',
      filter: 'brightness(92%)'
    })),
    transition('default => highlighted', [
      animate('200ms ease-out',  style({
        transform: 'scale(1.02)'
      })),
     
      animate(200)
    ])
  ])

  //Estado void
  //Nesses casos o Angular disponibiliza um estado chamado void, é uma palavra reservada que, em português, 
  //significa "vazio". Serve para indicar que o elemento não tem estado nenhum.
//   export const showStateTrigger = trigger('shownState', [

//     transition('void => *', [
//         style({
//             opacity: 0
//         }),
//         animate(300, style({
//             opacity: 1
//         }))
//     ]),
//     transition('* => void', [
//         animate(300, style({
//             opacity: 0
//         }))
//     ])

//   ])

//abaixo uma refatoração do codigo comentado acima
  export const showStateTrigger = trigger('shownState', [

    transition(':enter', [
        style({
            opacity: 0
        }),
        animate(300, style({
            opacity: 1
        }))
    ]),
    transition(':leave', [
        animate(300, style({
            opacity: 0
        }))
    ])

  ])

  export const checkButtonTrigger = trigger('checkButton', [
    //abaixo o asteristico significa qualquer estado
    transition('* => checked', [
        animate('400ms ease-in', style({
            transform: 'scale(0.4)'
        }))
    ])
  ])