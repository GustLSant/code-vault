export type SidebarLibraryData = {
    name: string,
    routeName: string,
    customIcon: string,
}

export type SidebarModuleData = {
    name: string,
    routeName: string,
    components: SidebarComponentData[]
};

export type SidebarComponentData = {
    name: string,
    routeName: string,
}