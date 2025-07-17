import NextAuth from "next-auth";
import GithubProvider from "next-auth/providers/github";
import KakaoProvider from "next-auth/providers/kakao";
import NaverProvider from "next-auth/providers/naver";
import GoogleProvider from "next-auth/providers/google"

export const authOptions = {
    providers: [
        GithubProvider({
            clientId: 'Ov23liulOsd037vXKbyc',
            clientSecret: '0dc2bf0f1902690d844ff76b5e48fcc7383ffcc0',
        }),
        // KakaoProvider({
        //     clientId: "c0d3dcec55209c4bb2da08a08dfc8207",
        //     clientSecret: "HXbLbplFLENH3J9IfB3L9M22giAxDKDC"
        // }),
        // NaverProvider({
        //     clientId: "9KPvJe2AoBfMWcp30i5L",
        //     clientSecret: "totuRaPSef"
        // }),
        GoogleProvider({
            clientId: "94228601886-04s89lerji0m3rdl11glftdudvk5kstg.apps.googleusercontent.com",
            clientSecret: "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"
        })
    ],
    secret: 'qwer1234'

};
export default NextAuth(authOptions); 