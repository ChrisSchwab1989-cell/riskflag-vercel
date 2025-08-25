export default async function handler(req, res) {
  try {
    const data = Array.from({ length: 10 }, (_, i) => ({
      rank: i + 1,
      coin: "Coin" + (i + 1),
      price: (Math.random() * 2000).toFixed(2),
      change24h: (Math.random() * 10 - 5).toFixed(2) + "%"
    }));
    res.status(200).json({ ok: true, top: data });
  } catch (e) {
    res.status(500).json({ ok: false, error: e.toString() });
  }
}
