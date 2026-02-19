import type { Section } from "../../../types/app";
import { FPS_CAMERA_CONTROLLER_PAGE } from "./pages/FpsCameraControllePage";
import { MOVEMENT_CONTROLER_PAGE } from "./pages/MovementControllerPage";

export const PLAYER_SECTION: Section = {
    label: 'Player',
    icon: 'mdi:menu',
    pages: [
        MOVEMENT_CONTROLER_PAGE,
        FPS_CAMERA_CONTROLLER_PAGE,
    ]
}