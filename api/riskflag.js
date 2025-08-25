export default async function handler(req, res) {
  try {
    const data = {
      fearGreedCrypto: 47,
      fearGreedStocks: 55,
      vix: 18.2,
      fundingBTC: 0.01,
      fundingETH: 0.02,
      stablecoinDominanz: 0.27
    };
    res.status(200).json({ ok: true, data, ts: Date.now() });
  } catch (e) {
    res.status(500).json({ ok: false, error: e.toString() });
  }
}
