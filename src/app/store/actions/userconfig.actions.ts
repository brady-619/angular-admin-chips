import { userConfig } from '../../models/userconfig.model';
import { createAction, props } from "@ngrx/store";

const SetUserConfig = createAction(
    '[User config] Asignación',
    props<{ config: userConfig }>()
);

const DeleteUserConfig = createAction(
    '[User config] Eliminar',
    props<{ user:string }>()
);

const ObtainUserConfig = createAction(
    '[User config] Obtener',
    props<{ user:string }>()
);


export const userConfigActions = {
    SetUserConfig,
    DeleteUserConfig,
    ObtainUserConfig
}

