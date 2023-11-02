export type Entry = {
  id: number;
  title: string;
  content: string;
};

export const accordionEntries: Entry[] = [
  {
    id: 1,
    title: 'Hemmet',
    content:
      'Välkommen till ditt hem! Ett utrymme där du kan slappna av och vara dig själv. Skapa minnen och njut av varje stund du tillbringar här.',
  },
  {
    id: 2,
    title: 'Lägenheten',
    content:
      'Din lägenhet är en plats som speglar din stil och personlighet. Skapa en atmosfär där du trivs och känner dig hemma.',
  },
  {
    id: 3,
    title: 'Sommarstugan',
    content:
      'Låt sommarstugan vara din fristad där du kan koppla av och återansluta med naturen. Skapa minnen som varar för evigt i detta vackra tillflyktsort.',
  },
];
