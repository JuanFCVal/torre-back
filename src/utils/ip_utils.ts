class IpUtils {
  static getIp(req: any): string {
    let ip = req.headers['x-forwarded-for'] || req.connection.remoteAddress;
    if (ip.substr(0, 7) == '::ffff:') {
      ip = ip.substr(7);
    }
    return ip;
  }
}
