export function isImage(url) {
    if (!url) return false;
    const filename = url.split('?')[0];
    const supportFormats = ['.jpg', '.jpeg', '.png', '.svg', '.gif'];
    for (const fmt of supportFormats) {
        if (filename.endsWith(fmt)) {
            return true;
        }
    }
    console.log('false', filename);
    return false;
}
