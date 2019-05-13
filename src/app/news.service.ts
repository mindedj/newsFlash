import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NewsService {

  constructor() { }

  
  getNews(){
    return [{
      title: "Man City NOT chasing Bruno Fernandes",
      uploader: "Sam Lee",
      date: new Date().toLocaleString(),
      text: "Jesus, seems I got it wrong on Bruno Fernandes! City insist they’re *not* in for him. Apologies for the duff information",
      src: "../assets/bruno.png",
      ertekeles: 10,
      mutat: false
    },
    {
      title: "Why Mkhitaryan will (most likely) not go to the Finals of the Europa League in Baku",
      uploader: "John Jam",
      date: new Date().toLocaleString(),
      text: `
      Multiple reasons come to mind. First and foremost, his safety cannot be guaranteed. Armenia and Azerbaijan have a complicated relationship (read: hateful) due to a conflict in the early 90's concerning a territory which was part of Azerbaijan but ethnically Armenian. The Armenians of the region tried to secede through a referendum, but the government of Azerbaijan refused to recognize this referendum and rescinded the autonomy of the region, after which war broke out. At the end of the active fighting, Armenians controlled the territory and some surrounding lowlands which used to be inhabited by Azerbaijanis. Here's a map of the current situation. A lot of bad things happened during the war, including more than 5 massacres against Armenians and one big massacre against Azerbaijanis. All of this contributed to the toxic situation we have at the present time.
      Due to this conflict, hate of Armenians is widespread in Azerbaijan. Regular Armenians are not allowed to enter the country at all. This policy goes as far as detaining Russian and Estonian citizens with Armenian sounding surnames for hours and refusing to let them enter the country. Here is an example of a Russian citizen being deported because of their surname ending in -yan. For the record, such a policy does not exist in Armenia; Azerbaijanis are allowed to enter without any problems.
      A case which symbolizes the ubiquity of Armenophobia in Azerbaijan is the murder of Gurgen Margaryan. Back in 2004, Gurgen (an Armenian soldier) was in Hungary to participate in the NATO Partnership for Peace Program. While there, an Azerbaijani participant of the same program axed him to death in his sleep. He was sentenced to life imprisonment in Hungary.
      In 2012 however, Hungary agreed to extradite him in order to sit out the rest of his sentence in an Azerbaijani jail. When he arrived at the airport in Baku he was instead pardoned immediately by the president. He received a hero's welcome including back pay for the 8 years he served in a Hungarian prison and he was promoted to the rank of major and on top of it all he received an appartment from the government (source). People at the highest offices in Azerbaijan reacted positively to all of this, with the Commissioner for Human Rights in Azerbaijan being quoted to say "Ramil Safarov must set an example of patriotism for the Azerbaijani youth"(source). Here are some more responses of Azerbaijani officials. I hope you can understand why he wouldn't want to go to a country which glorifies the murder of a sleeping Armenian to such an extent.
      Conclusion
      Only Mkhitaryan himself knows why we will or won't go, but I believe I have shown you plenty of reasons for him not to go. Whether it is solidarity with the other Armenians not allowed to enter the country, or the response to/active fostering of Anti-Armenian sentiment by their government, I personally believe he shouldn't go. I hope this gives enough information on the decision that he will have to make.`,
      src: "../assets/mhkitaryan.png",
      ertekeles: 10,
      mutat: false
    },
    {
      title: "Benfica is close to signing Barcelona keeper Cillessen",
      uploader: "ABola",
      date: new Date().toLocaleString(),
      text: `O Benfica está muito perto de contratar o guarda-redes Jasper Cillessen. Os encarnados têm praticamente tudo certo com o guardião titular da seleção holandesa, que tem autorização do Barcelona para procurar um novo clube, depois de três anos como suplente do alemão Ter Stegen na equipa catalã.
      O Benfica procurava reforçar a baliza com um guarda-redes preparado para dar resposta imediata ao mais alto nível.
         A ideia é continuar com Odysseas Vlachodimos. Já Mile Svilar vai ser emprestado. 
          Leia mais na edição impressa de A BOLA desta sexta-feira` ,
      src: "../assets/cillessen.png",
      ertekeles: 3,
      mutat: false
    }]
  };
}
