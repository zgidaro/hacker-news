export const enhanceTimeString = (date: Date): string => {
    const now = new Date();
    const difference = now.getTime() - date.getTime();
    const diffInHours = difference / 1000 / 60 / 60;
    if (diffInHours > 24) {
        return date.toLocaleDateString();
    }
    else if (diffInHours > 1) {
        const fixed = Math.round(diffInHours);
        return `${fixed} hour${fixed > 2 ? 's' : ''} ago`;
    }
    else {
        const fixed = Math.round(diffInHours * 60);
        return `${fixed} minute${fixed > 2 ? 's' : ''} ago`;
    }
}