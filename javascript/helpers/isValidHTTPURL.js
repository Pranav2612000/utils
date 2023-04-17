function isValidHttpUrl(url_string) {
    try {
        let url = new URL(url_string);

        return url.protocol === 'http:' || url.protocol === 'https:';
    }
    catch (e) {
        return false;
    }
}