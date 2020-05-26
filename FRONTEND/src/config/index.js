var local = "localhost",
  local_ip = "127.0.0.1",
  local_port = 3000

export default {
  SERVER: {
    PORT: local_port,
    DOMAIN: local,
    IP: local_ip,
    PROTOCOL: function () {
      if (local_port == 443) {
        return "https://"
      }
      return "http://"
    },
    ASSET: () => {
      let port_url = ''
      let protocol = ''
      if (local_port == 443) {
        protocol = "https://"
      } else {
        protocol = "http://"
        port_url = ':' + local_port
      }

      return protocol + local + port_url;
    }
  },
  SITE: {
    NAME: 'hùng đẹp trai'
  },
  EMOJIS: [
    { symbol: "🙂", sign: ":)" },
    { symbol: "🙂", sign: "=)" },
    { symbol: "😊", sign: ":^)" },
    { symbol: "😀", sign: ":}" },
    { symbol: "😁", sign: ":o)" },
    { symbol: "😃", sign: ":‑D" },
    { symbol: "😄", sign: "=D" },
    { symbol: "😆", sign: "X‑D" },
    { symbol: "😍", sign: "B^D" },
    { symbol: "🙁", sign: ":‑(" },
    { symbol: "😠", sign: ":(" },
    { symbol: "😡", sign: ":‑<" },
    { symbol: "😞", sign: ":[" },
    { symbol: "😟", sign: ">:[" },
    { symbol: "😣", sign: ":{" },
    { symbol: "😖", sign: ">:(" },
    { symbol: "😢", sign: ":'‑(" },
    { symbol: "😭", sign: ":'(" },
    { symbol: "😂", sign: ":')" },
    { symbol: "😨", sign: "D‑':" },
    { symbol: "😧", sign: "D:<" },
    { symbol: "😦", sign: "D:" },
    { symbol: "😱", sign: "D;" },
    { symbol: "😫", sign: "D=" },
    { symbol: "😩", sign: "DX" },
    { symbol: "😮", sign: ":-0" },
    { symbol: "😯", sign: "8‑0" },
    { symbol: "😲", sign: ">:O" },
    { symbol: "😗", sign: ":-*" },
    { symbol: "😙", sign: ":^*" },
    { symbol: "😚", sign: ":^-" },
    { symbol: "😘", sign: ":x" },
    { symbol: "😍", sign: ":X" },
    { symbol: "😉", sign: ";‑)" },
    { symbol: "😜", sign: "*-)" },
    { symbol: "😘", sign: ";D" },
    { symbol: "😛", sign: ":P" },
    { symbol: "😝", sign: "x‑p" },
    { symbol: "😜", sign: "=p" },
    { symbol: "🤑", sign: ">:P" },
    { symbol: "🤔", sign: ":‑/" },
    { symbol: "😕", sign: ":‑." },
    { symbol: "😟", sign: ":S" },
    { symbol: "😐", sign: ":‑|" },
    { symbol: "😑", sign: ":|" },
    { symbol: "😳", sign: ":$" },
    { symbol: "😞", sign: ":b3" },
    { symbol: "😖", sign: ":‑X" },
    { symbol: "🤐", sign: ":&" },
    { symbol: "😶", sign: "O:‑)" },
    { symbol: "😇", sign: "O:)" },
    { symbol: "👼", sign: "0;^)" },
    { symbol: "😈", sign: ">;3" },
    { symbol: "😎", sign: "|;‑)" },
    { symbol: "😪", sign: "|‑O" },
    { symbol: "😏", sign: ":‑J" },
    { symbol: "😒", sign: "#‑)" },
    { symbol: "😵", sign: "%‑)" },
    { symbol: "😕", sign: "%)" },
    { symbol: "🤒", sign: ":#/" },
    { symbol: "😷", sign: ":D-" },
    { symbol: "🤢", sign: ":cR" },
    { symbol: "🤕", sign: "<:‑/" },
    { symbol: "🤨", sign: ":-l" },
    { symbol: "💝", sign: "<3" }
  ]
}