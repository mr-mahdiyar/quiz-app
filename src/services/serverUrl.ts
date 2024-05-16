export const serverUrl = "http://localhost:9000";

export const makeSubUrl = (subUrl: string) => {
    return `${serverUrl}/${subUrl}`
}