export interface News {
  title: string;
  news: string;
  photoUrl: string;
  votes: number;
  date: string | Date;
}

export const NEWS: News[] = [
  {
    title: 'Milan poza czwórką. Rossoneri polegli w Rzymie',
    news: 'AC Milan jeszcze niedawno był uważany za głównego rywala Interu Mediolan w walce o mistrzostwo Włoch, a po poniedziałkowym meczu 33. kolejki z Lazio wypadł poza pierwszą piątkę. Rossoneri w wyjazdowym spotkaniu na Stadio Olimpico przegrali 0:3.',
    photoUrl: 'assets/images/news2.jpg',
    votes: 0,
    date: '2021-04-26',
  },
  {
    title: 'Atalanta bez litości dla Bolonii. Pracowity mecz Skorupskiego',
    news: 'Atalanta wysoko rozbiła u siebie Bolonię (5:0). Po pierwszej połowie La Dea prowadziła już 2:0, a gdy po przerwie czerwoną kartkę obejrzał Jerdy Schouten, tylko dopełnili formalności.',
    photoUrl: 'assets/images/news3.jpg',
    votes: 0,
    date: '2021-04-25',
  },
  {
    title: 'Inter wykonał kolejny krok w kierunku tytułu',
    news: 'Inter Mediolan zgodnie z planem pokonał na swoim stadionie Hellas Weronę. 18-krotni mistrzowie Włoch zanotowali jednocześnie 14. triumf na swoim obiekcie.',
    photoUrl: 'assets/images/news1.jpg',
    votes: 0,
    date: '2021-04-25',
  },
];
