/**
 * Türkiye cep telefonu numaraları için biçimlendirme ve doğrulama.
 * Yalnızca istemci tarafında, formu doldururken kullanılır; hiçbir numara
 * saklanmaz veya analitiğe gönderilmez.
 */

/** Kullanıcının yazdığından yalnızca rakamları alır, ülke kodunu ayıklar. */
export function normalizeTrMobile(input: string): string {
  let digits = input.replace(/\D/g, "");

  if (digits.startsWith("0090")) digits = digits.slice(4);
  else if (digits.startsWith("90") && digits.length > 10) digits = digits.slice(2);
  if (digits.startsWith("0")) digits = digits.slice(1);

  return digits.slice(0, 10);
}

/** Geçerli bir TR cep numarası mı? (5XXXXXXXXX — 10 hane, 5 ile başlar) */
export function isValidTrMobile(input: string): boolean {
  const digits = normalizeTrMobile(input);
  return digits.length === 10 && digits.startsWith("5");
}

/** Yazarken okunur hâle getirir: 0532 111 22 33 */
export function formatTrMobile(input: string): string {
  const d = normalizeTrMobile(input);
  if (d.length === 0) return "";

  const parts = [d.slice(0, 3), d.slice(3, 6), d.slice(6, 8), d.slice(8, 10)];
  return `0${parts.filter(Boolean).join(" ")}`.trimEnd();
}
