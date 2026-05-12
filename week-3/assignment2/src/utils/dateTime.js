
export function getFormattedDateTime() {
    const now = new Date()

    const date = new Intl.DateTimeFormat('en-Np', {
        dateStyle: 'medium',
    }).format(now)

    const time = new Intl.DateTimeFormat('en-Np', {
        timeStyle: "short"
    }).format(now)

    return [date, time]
}