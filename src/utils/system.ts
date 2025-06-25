function getSystemType(): string {
    const userAgent = navigator.userAgent.toLowerCase();
    if (
        userAgent.indexOf('Android') !== -1 ||
        userAgent.indexOf('android') !== -1
    ) {
        return 'android';
    } else if (userAgent.indexOf('mac') !== -1) {
        return 'macos';
    } else if (userAgent.indexOf('windows') !== -1) {
        return 'windows';
    } else if (userAgent.indexOf('linux') !== -1) {
        return 'linux';
    } else if (
        userAgent.indexOf('iphone') !== -1 ||
        userAgent.indexOf('ipad') !== -1 ||
        userAgent.indexOf('ipod') !== -1
    ) {
        return 'ios';
    } else {
        return 'unknown';
    }
}

export default getSystemType;
