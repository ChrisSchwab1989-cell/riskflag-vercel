export default async function handler(req, res) {
  try {
    const tickers = req.query.tickers || "AAPL, SAP.DE";
    // Dummy-Daten – hier kannst du später echte APIs einbauen
    const result = tickers.split(",").map(t => ({
      ticker: t.trim(),
      price: Math.random() * 100 + 50,
      analysts: 10,
      recommendation: "Kaufen"
    }));
    res.status(200).json({ ok: true, tickers: result });
  } catch (e) {
    res.status(500).json({ ok: false, error: e.toString() });
  }
}
