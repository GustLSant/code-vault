import type { AppData } from "../types/app";
import { ENEMIES_SECTION } from "./sections/enemies/EnemiesSection";
import { PLAYER_SECTION } from "./sections/player/PlayerSection";

export const APP_DATA: AppData = {
    sections: [
        PLAYER_SECTION,
        ENEMIES_SECTION,
    ]
}