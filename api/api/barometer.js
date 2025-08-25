export default async function handler(req, res) {
  const { tickers = "" } = req.query;
  const list = tickers ? tickers.split(",").map(s => s.trim()).filter(Boolean) : [];
  res.status(200).json({
    ok: true,
    inputs: list,
    recommendation: list.length ? "Beobachten" : "Bitte Ticker eingeben",
    ts: Date.now()
  });
}
