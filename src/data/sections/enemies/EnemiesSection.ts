import type { Section } from "../../../types/app";
import { CHASE_PLAYER_STATE_PAGE } from "./pages/ChasePlayerStatePage";
import { STATE_MACHINE_PAGE } from "./pages/StateMachinePage";

export const ENEMIES_SECTION: Section = {
    label: 'Enemies',
    icon: 'mdi:menu',
    pages: [
        STATE_MACHINE_PAGE,
        CHASE_PLAYER_STATE_PAGE,
    ]
}