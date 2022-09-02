function FindProxyForURL(url, host)
{
  //Anything Opower internal DNS goes to the proxy
  if(shExpMatch(host, "*.opower.it") || shExpMatch(host, "*.vcniadlsprd.oraclevcn.com") || shExpMatch(host, "*.vcnyyzlsprd.oraclevcn.com") || shExpMatch(host, "*.bmbdcs.oraclevcn.com")) {
    //Attempt to use SOCKS5H tunnel and fallback to direct if it it's down. This allows for a simpler, no-touch use of the browser on OCNA or Opower VPN
    return "SOCKS5 127.0.0.1:1080; SOCKS 127.0.0.1:1080; DIRECT";
  } else {
    //Anything Opower internal IP goes to the proxy
    if(shExpMatch(host, "10*.*.*.*")) {
      if(isInNet(host, "10.20.0.0", "255.254.0.0") || isInNet(host, "10.30.0.0", "255.254.0.0") || isInNet(host, "10.48.0.0", "255.255.0.0") || isInNet(host, "100.79.0.0", "255.255.192.0") || isInNet(host, "100.86.8.0", "255.255.248.0")) {
        //Attempt to use SOCKS5H tunnel and fallback to direct if it it's down. This allows for a simpler, no-touch use of the browser on OCNA or Opower VPN
        return "SOCKS5 127.0.0.1:1080; SOCKS 127.0.0.1:1080; DIRECT";
      }
    }
  }
  //Everything else
  return "DIRECT";
}
