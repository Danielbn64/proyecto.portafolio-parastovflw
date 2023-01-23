import { AnimationMetadata,trigger, state, style, animate, transition,} from '@angular/animations';

export const fading: AnimationMetadata =
    trigger('fadeIn',[
        state('*', style({
            opacity: 1
        })),
        transition(':enter',[
            style({
                opacity: 0
            }),
            animate('500ms linear',
            style({
                opacity: 1
            }))
        ]),
    ]);