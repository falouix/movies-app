export class Movie {
    display_title: string | undefined;
    mpaa_rating: string | undefined;
    critics_pick: string| undefined;
    byline: string| undefined;
    headline: string| undefined;
    summary_short: string| undefined;
    publication_date: string| undefined;
    opening_date: string| undefined;
    date_updated: string| undefined;
    link: {
        type: string| undefined;
        url: string| undefined;
        suggested_link_text: string| undefined;
    }| undefined;
    multimedia:{
        type: string| undefined;
        src: string| undefined;
        height: string| undefined;
        width: string| undefined;
     } | undefined;
}
