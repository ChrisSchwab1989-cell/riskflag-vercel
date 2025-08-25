export default async function handler(req, res) {
  try {
    const coins = [
      { rank: 1, name: "Bitcoin", symbol: "BTC", price: 65000 },
      { rank: 2, name: "Ethereum", symbol: "ETH", price: 3400 }
    ];
    res.status(200).json({ ok: true, coins, ts: Date.now() });
  } catch (e) {
    res.status(500).json({ ok: false, error: e.toString() });
  }
}
