// JWT payload에서 회원 번호를 꺼냄. (me/login 응답에 memberId가 없어서 토큰에서 읽음)
// 서버가 어떤 claim에 담는지에 맞춰 memberId, id, userId, sub 순서로 찾음.
export function getMemberIdFromToken(token: string | null): number | null {
  if (!token) return null;

  try {
    const payload = token.split(".")[1];
    if (!payload) return null;

    const base64 = payload.replace(/-/g, "+").replace(/_/g, "/");
    const bytes = Uint8Array.from(atob(base64), (char) => char.charCodeAt(0));
    const claims = JSON.parse(new TextDecoder().decode(bytes)) as Record<
      string,
      unknown
    >;

    const memberId = Number(
      claims.memberId ?? claims.id ?? claims.userId ?? claims.sub,
    );
    return Number.isInteger(memberId) && memberId > 0 ? memberId : null;
  } catch {
    return null;
  }
}
