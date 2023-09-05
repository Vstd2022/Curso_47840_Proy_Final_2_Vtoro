import { createActionGroup, emptyProps, props } from "@ngrx/store";
import { User } from "src/app/dashboard/Pages/users/models";


export const AuthActions = createActionGroup({
  source: 'Auth',
  events: {
    // Establecer usuario autenticado
    'set auth user': props<{ payload: User | null }>()
  }
})