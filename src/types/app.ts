export type AppData = {
    sections: Section[],
}

export type Section = {
    label: string,
    icon: string,
    pages: Page[],
}

export type Page = {
    label: string,
    icon: string,
    content: Paragraphs[],
    componentPath: string,
}

export type Paragraphs = {
    title: string,
    content: string[]
}