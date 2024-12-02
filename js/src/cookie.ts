// Cookies

function setCookie(name: string, value: string, daysToExpire: number): void {
    const expirationDate: Date = new Date();
    expirationDate.setDate(expirationDate.getDate() + daysToExpire);
    const cookieString: string = `${name}=${encodeURIComponent(value)}; expires=${expirationDate.toUTCString()}; path=/`;
    document.cookie = cookieString;
}

function getCookie(name: string): string | null {
    const cookies: string[] = document.cookie.split(';').map(cookie => cookie.trim());
    for (const cookie of cookies) {
        const [cookieName, cookieValue] = cookie.split('=');
        if (cookieName === name) {
            return decodeURIComponent(cookieValue);
        }
    }
    return null;
}

function deleteCookie(name: string): void {
    document.cookie = `${name}=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;`;
}
