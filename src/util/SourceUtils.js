import {isHlsPlaylist} from "./HlsUtils";
import {isDashManifest} from "./DashUtils";
import {isImage} from "./ImageUtils";

export function sourceType(url) {
    if (isHlsPlaylist(url)) {
        return 'hls'
    }
    if (isDashManifest(url)) {
        return 'dash';
    }
    if (isImage(url)) {
        return 'image';
    }
    return 'url';
}

export function isDashOrHls(type) {
    return type === 'hls' || type === 'dash';
}
