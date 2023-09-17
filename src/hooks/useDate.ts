const useDate = (date: Date) => {
    // @ts-ignore
    const dateTs = (new Date(date)).getTime();
    
    const currentTs = Date.now();

    const between = currentTs - dateTs;

    if (between < 60 * 1000) {
        return `${Math.floor(between / 1000)}s`;
    } else if (between < 60 * 60 * 1000) {
        return `${Math.floor(between / (60 * 1000))}min`;
    } else if (between < 24 * 60 * 60 * 1000) {
        return `${Math.floor(between / (60 * 60 * 1000))}h`;
    } else if (between < 365 * 24 * 60 * 60 * 1000) {
        return `${Math.floor(between / (24 * 60 * 60 * 1000))}d`;
    } else {
        return `${Math.floor(between / (365 * 24 * 60 * 60 * 1000))}y`;
    }
}

export default useDate;