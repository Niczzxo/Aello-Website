import { LegalPage, type LegalSection, AFFILIATION_NOTICE } from '@/components/layout/LegalPage'

const sections: LegalSection[] = [
    {
        id: 'what-flow-is',
        title: 'What Aello is',
        content: (
            <p>Aello is a free, open-source app, licensed under GPL-3.0, that plays YouTube's public catalog. It doesn't host, upload, store or redistribute any videos or music. Everything you watch or hear in Aello is streamed directly from YouTube.</p>
        ),
    },
    {
        id: 'content-on-youtube',
        title: 'Content on YouTube',
        content: (
            <>
                <p>If a video or song infringes your copyright, the place to act is YouTube, which hosts it. Use <a href="https://support.google.com/youtube/answer/2807622" target="_blank" rel="noopener noreferrer">YouTube's copyright removal process</a>.</p>
                <p>Once YouTube removes something, it's gone from Aello too. Removing Aello from app stores wouldn't take the content down.</p>
            </>
        ),
    },
    {
        id: 'this-website',
        title: 'This website',
        content: (
            <p>The screenshots on this site show the app in use, so they include video thumbnails, channel art and album covers that belong to others, shown incidentally. If one of them includes your work and you'd like it replaced, tell us and we'll swap the screenshot.</p>
        ),
    },
    {
        id: 'source-code',
        title: 'Aello\'s source code',
        content: (
            <p>Aello's code is public on <a href="https://github.com/Niczzxo/Aello-Native" target="_blank" rel="noopener noreferrer">GitHub</a> under GPL-3.0. If you believe any part of it infringes your rights, open an issue there and we'll look into it.</p>
        ),
    },
    {
        id: 'trademarks',
        title: 'Trademarks',
        content: (
            <p>{AFFILIATION_NOTICE} Other product names mentioned on this site belong to their owners.</p>
        ),
    },
    {
        id: 'contact',
        title: 'Contact',
        content: (
            <p>Open an issue on <a href="https://github.com/Niczzxo/Aello-Native/issues" target="_blank" rel="noopener noreferrer">GitHub</a>.</p>
        ),
    },
]

export function DMCA() {
    return (
        <LegalPage
            kicker="Copyright & DMCA"
            title="Nothing hosted,"
            accent="nothing to take down."
            updated="27 September 2026"
            intro={<p>Aello is a client app. It plays videos that live on YouTube and doesn't store any of them. Here's where to go if you believe something infringes your copyright.</p>}
            sections={sections}
        />
    )
}

export default DMCA
