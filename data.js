// Grammar pool, extracted from the user's N2 chapter PDFs.
// Each item: id, title (pattern), meaning (1 line), examples (2), prompt (EN),
// modelAnswer (JA), modelFurigana, note.
// furigana pairs: [[word, reading], ...] applied via applyFurigana().

const GRAMMAR_POOL = [
{
  id: 1, title: "〜につき", meaning: "because of / due to (formal signs & announcements)",
  examples: [
    { jp: "清掃中につき、お足元にご注意ください。", furigana: [["清掃中","せいそうちゅう"],["足元","あしもと"],["注意","ちゅうい"]], en: "Because cleaning is in progress, please watch your step." },
    { jp: "会場内は禁煙につき、おたばこはご遠慮ください。", furigana: [["会場内","かいじょうない"],["禁煙","きんえん"],["遠慮","えんりょ"]], en: "Because smoking is prohibited inside the venue, please refrain from smoking." }
  ],
  prompt: "Write a notice: \"Closed today due to a company trip.\"",
  modelAnswer: "本日は社員旅行につき、休業いたします。",
  modelFurigana: [["本日","ほんじつ"],["社員旅行","しゃいんりょこう"],["休業","きゅうぎょう"]],
  note: "Formal/written — signs and notices, not casual speech."
},
{
  id: 2, title: "〜を問わず", meaning: "regardless of (age, time, experience, etc.)",
  examples: [
    { jp: "このスポーツセンターは、年齢を問わず、どなたでも利用できます。", furigana: [["年齢","ねんれい"],["利用","りよう"]], en: "This sports center can be used by anyone, regardless of age." },
    { jp: "経験の有無を問わず、やる気のある社員を募集します。", furigana: [["経験","けいけん"],["有無","うむ"],["社員","しゃいん"],["募集","ぼしゅう"]], en: "We are recruiting motivated employees regardless of experience." }
  ],
  prompt: "Say: \"This restaurant is popular regardless of nationality.\"",
  modelAnswer: "この店は国籍を問わず、人気がある。",
  modelFurigana: [["国籍","こくせき"],["人気","にんき"]],
  note: "Often paired with words like 昼夜, 男女, 有無."
},
{
  id: 3, title: "〜に限り／に限って〜ない", meaning: "only (this) / there's no way ~ (strong denial)",
  examples: [
    { jp: "本日に限り、通常価格100グラム1,500円の牛肉を半額でご提供いたしております。", furigana: [["本日","ほんじつ"],["通常","つうじょう"],["価格","かかく"],["牛肉","ぎゅうにく"],["半額","はんがく"],["提供","ていきょう"]], en: "Only today, beef normally priced at 1,500 yen per 100 grams is offered at half price." },
    { jp: "うちの子に限って、万引きなんてするはずがありません。", furigana: [["万引き","まんびき"]], en: "There's no way my child would shoplift." }
  ],
  prompt: "Say: \"There's no way he would lie.\"",
  modelAnswer: "彼に限って、うそをつくはずがない。",
  modelFurigana: [],
  note: "に限り = only (formal); に限って〜ない = strong belief 'not THIS person'."
},
{
  id: 4, title: "〜に応じ(て)", meaning: "according to / depending on",
  examples: [
    { jp: "給料は能力や経験に応じ、決めさせていただきます。", furigana: [["給料","きゅうりょう"],["能力","のうりょく"],["経験","けいけん"],["決める","きめる"]], en: "Salary will be decided according to ability and experience." },
    { jp: "新年会はご予算に応じていろいろなコースがございます。", furigana: [["新年会","しんねんかい"],["予算","よさん"]], en: "For the New Year's party, we have various courses depending on your budget." }
  ],
  prompt: "Say: \"The price changes depending on the season.\"",
  modelAnswer: "値段は季節に応じて変わる。",
  modelFurigana: [["値段","ねだん"],["季節","きせつ"]],
  note: "Pairs with words like 状況、年齢、能力、希望."
},
{
  id: 5, title: "〜にかかわらず", meaning: "regardless of (often paired opposites: do/not do, like/dislike)",
  examples: [
    { jp: "和室は、人数にかかわらず、2時間1,000円になります。", furigana: [["和室","わしつ"],["人数","にんずう"]], en: "Japanese-style rooms cost 1,000 yen for two hours, regardless of the number of people." },
    { jp: "会議で発言するしないにかかわらず、自分の意見はまとめておくべきです。", furigana: [["会議","かいぎ"],["発言","はつげん"],["意見","いけん"]], en: "Whether you speak up in a meeting or not, you should organize your own opinion." }
  ],
  prompt: "Say: \"This gym is open regardless of the weather.\"",
  modelAnswer: "このジムは天気にかかわらず、営業している。",
  modelFurigana: [["天気","てんき"],["営業","えいぎょう"]],
  note: "Similar to を問わず but often with V-る/V-ない opposite pairs."
},
{
  id: 6, title: "〜において／における", meaning: "in (a place, time, or field) — formal",
  examples: [
    { jp: "入学式は、3階のホールにおいて行われます。", furigana: [["入学式","にゅうがくしき"],["階","かい"],["行われます","おこなわれます"]], en: "The entrance ceremony will be held in the hall on the third floor." },
    { jp: "日本だけでなく、ほかの国においても、環境汚染は深刻な問題だ。", furigana: [["環境","かんきょう"],["汚染","おせん"],["深刻","しんこく"],["問題","もんだい"]], en: "Not only in Japan, but also in other countries, environmental pollution is a serious problem." }
  ],
  prompt: "Say: \"In modern society, this problem is important.\"",
  modelAnswer: "現代社会において、この問題は重要だ。",
  modelFurigana: [["現代社会","げんだいしゃかい"],["重要","じゅうよう"]],
  note: "Formal register; における + noun modifies the following noun."
},
{
  id: 7, title: "〜際に／際して", meaning: "when / on the occasion of",
  examples: [
    { jp: "カードを紛失した際はサービスセンターにご連絡ください。", furigana: [["紛失","ふんしつ"],["連絡","れんらく"]], en: "If you lose your card, please contact the service center." },
    { jp: "各種書類の提出に際しては、期限を厳守してください。", furigana: [["各種","かくしゅ"],["書類","しょるい"],["提出","ていしゅつ"],["期限","きげん"],["厳守","げんしゅ"]], en: "When submitting various documents, please strictly observe the deadline." }
  ],
  prompt: "Say: \"Please turn off your phone when entering the theater.\"",
  modelAnswer: "劇場に入る際は、携帯電話の電源を切ってください。",
  modelFurigana: [["劇場","げきじょう"],["携帯電話","けいたいでんわ"],["電源","でんげん"]],
  note: "際して is more formal/written than 際に."
},
{
  id: 8, title: "〜こと（規則）", meaning: "must (do/not do) — written rules only",
  examples: [
    { jp: "願書は1月28日必着のこと。", furigana: [["願書","がんしょ"],["必着","ひっちゃく"]], en: "Application forms must arrive by January 28." },
    { jp: "寮の台所はきれいに使用すること。", furigana: [["寮","りょう"],["台所","だいどころ"],["使用","しよう"]], en: "Use the dormitory kitchen cleanly." }
  ],
  prompt: "Write a rule: \"Do not run in the hallway.\"",
  modelAnswer: "廊下を走らないこと。",
  modelFurigana: [["廊下","ろうか"]],
  note: "Only for written rules/instructions, never spoken."
},
{
  id: 9, title: "〜て以来", meaning: "ever since",
  examples: [
    { jp: "母が入院して以来、家事はすべて私がしています。", furigana: [["入院","にゅういん"],["家事","かじ"]], en: "Since my mother was hospitalized, I have been doing all the housework." },
    { jp: "こちらに引っ越して以来、散歩を日課にしているんです。", furigana: [["引っ越し","ひっこし"],["散歩","さんぽ"],["日課","にっか"]], en: "Since moving here, I have made walking a daily habit." }
  ],
  prompt: "Say: \"I haven't smoked since I quit two years ago.\"",
  modelAnswer: "2年前にやめて以来、たばこを吸っていない。",
  modelFurigana: [],
  note: "The state continues unchanged until now."
},
{
  id: 10, title: "〜をはじめ(として/とする)", meaning: "starting with X / not just X but many others",
  examples: [
    { jp: "日本には富士山をはじめ、たくさんの美しい山がある。", furigana: [["富士山","ふじさん"]], en: "There are many beautiful mountains in Japan, beginning with Mt. Fuji." },
    { jp: "首相をはじめ、多くの政治家が大統領の歓迎会に出席した。", furigana: [["首相","しゅしょう"],["政治家","せいじか"],["大統領","だいとうりょう"],["歓迎会","かんげいかい"],["出席","しゅっせき"]], en: "Many politicians, including the prime minister, attended the reception for the president." }
  ],
  prompt: "Say: \"Many countries, starting with China, took part in the event.\"",
  modelAnswer: "中国をはじめ、多くの国がそのイベントに参加した。",
  modelFurigana: [["参加","さんか"]],
  note: "Gives a representative example, implying more of the same kind."
},
{
  id: 11, title: "〜のもとで／のもとに", meaning: "under (someone's guidance / certain conditions)",
  examples: [
    { jp: "彼はすばらしい自然環境のもとでこの作品を作り上げた。", furigana: [["自然環境","しぜんかんきょう"],["作品","さくひん"]], en: "He completed this work under a wonderful natural environment." },
    { jp: "子育ては夫婦の協力のもとに行われるべきだ。", furigana: [["子育て","こそだて"],["協力","きょうりょく"]], en: "Child-rearing should be carried out under the cooperation of husband and wife." }
  ],
  prompt: "Say: \"I grew up under my grandmother's guidance.\"",
  modelAnswer: "私は祖母の指導のもとで育った。",
  modelFurigana: [["祖母","そぼ"],["指導","しどう"],["育った","そだった"]],
  note: "Under a person's influence, or under certain conditions/situation."
},
{
  id: 12, title: "〜はもとより", meaning: "not to mention X, but also Y (of course X, and more)",
  examples: [
    { jp: "この温泉は、日本人はもとより、外国人にもたいへん人気があります。", furigana: [["温泉","おんせん"]], en: "This hot spring is very popular not only with Japanese people but also with foreigners." },
    { jp: "子どもの成長のためには、食事はもとより、睡眠や運動にも気をつけてください。", furigana: [["成長","せいちょう"],["睡眠","すいみん"],["運動","うんどう"]], en: "For children's growth, please pay attention not only to meals but also to sleep and exercise." }
  ],
  prompt: "Say: \"This shop is popular with locals, not to mention tourists.\"",
  modelAnswer: "この店は観光客はもとより、地元の人にも人気だ。",
  modelFurigana: [["観光客","かんこうきゃく"],["地元","じもと"]],
  note: "More formal/written than はもちろん."
},
{
  id: 13, title: "〜ものだ／もんだ", meaning: "that's just how it is (general truth / judgment)",
  examples: [
    { jp: "子どもは親に反抗するものですから、それも成長のひとつですよ。", furigana: [["反抗","はんこう"],["成長","せいちょう"]], en: "Children rebel against their parents; that's just the way it is, and it's part of growing up." },
    { jp: "誰でもほめられればやる気になるものですから。", furigana: [], en: "Anyone becomes motivated when praised, that's just how it is." }
  ],
  prompt: "Say casually: \"People change as they get older, you know.\"",
  modelAnswer: "人は年を取れば変わるもんだよ。",
  modelFurigana: [["年を取れば","としをとれば"]],
  note: "Sounds preachy — don't use with people above you in status."
},
{
  id: 14, title: "〜上で", meaning: "when doing something (important/required)",
  examples: [
    { jp: "この本は就職活動をする上での重要なポイントが書かれています。", furigana: [["就職活動","しゅうしょくかつどう"],["重要","じゅうよう"]], en: "This book contains important points for when doing job hunting." },
    { jp: "国際関係を考える上で、宗教問題は避けられない。", furigana: [["国際関係","こくさいかんけい"],["宗教","しゅうきょう"],["避ける","さける"]], en: "When considering international relations, religious issues cannot be avoided." }
  ],
  prompt: "Say: \"When learning a language, practice is essential.\"",
  modelAnswer: "言語を学ぶ上で、練習が欠かせない。",
  modelFurigana: [["言語","げんご"],["練習","れんしゅう"],["欠かせない","かかせない"]],
  note: "Followed by an important/necessary/should-type comment."
},
{
  id: 15, title: "〜ながら(も)", meaning: "even though / while (contrast)",
  examples: [
    { jp: "彼とは同じ寮に住んでいながら、ほとんど話をしたことがなかった。", furigana: [["寮","りょう"]], en: "Although we lived in the same dormitory, we hardly ever talked." },
    { jp: "彼は若いながらも、立派なプロジェクトリーダーだ。", furigana: [["立派","りっぱ"]], en: "Although he is young, he is an excellent project leader." }
  ],
  prompt: "Say: \"Although it's small, this apartment is very comfortable.\"",
  modelAnswer: "このアパートは狭いながらも、とても快適だ。",
  modelFurigana: [["狭い","せまい"],["快適","かいてき"]],
  note: "Different from ながら (simultaneous action) — this shows contrast."
},
{
  id: 16, title: "〜を〜とする／とした", meaning: "treat A as B / with A as B (purpose, center, theme)",
  examples: [
    { jp: "「みどりの会」は環境保護活動を目的とする市民の組織です。", furigana: [["環境","かんきょう"],["保護","ほご"],["活動","かつどう"],["目的","もくてき"],["市民","しみん"],["組織","そしき"]], en: "The \"Midori Association\" is a citizens' organization whose purpose is environmental protection activities." },
    { jp: "今回のシンポジウムは日本の伝統芸能をテーマとして行われます。", furigana: [["今回","こんかい"],["伝統","でんとう"],["芸能","げいのう"],["行う","おこなう"]], en: "This symposium will be held with Japanese traditional performing arts as its theme." }
  ],
  prompt: "Say: \"This club has international exchange as its purpose.\"",
  modelAnswer: "このクラブは国際交流を目的としている。",
  modelFurigana: [["国際交流","こくさいこうりゅう"]],
  note: "Common with 目的・中心・対象・手本・前提."
},
{
  id: 17, title: "〜をきっかけに／契機に", meaning: "triggered by / as an opportunity (契機 = bigger, more formal)",
  examples: [
    { jp: "日本のドラマをきっかけとして、日本文化に関心を持つようになった。", furigana: [["文化","ぶんか"],["関心","かんしん"],["持つ","もつ"]], en: "I became interested in Japanese culture because of Japanese dramas." },
    { jp: "彼と友人になったのは、入学式で隣に座ったことがきっかけだった。", furigana: [["友人","ゆうじん"],["入学式","にゅうがくしき"],["隣","となり"],["座る","すわる"]], en: "The reason I became friends with him was that we sat next to each other at the entrance ceremony." }
  ],
  prompt: "Say: \"That trip became the trigger for me to study abroad.\"",
  modelAnswer: "あの旅行がきっかけで、留学することになった。",
  modelFurigana: [["留学","りゅうがく"]],
  note: "契機 = bigger/more formal version, often historical/social."
},
{
  id: 18, title: "〜からには／〜以上は", meaning: "since (this is decided/a fact), you must...",
  examples: [
    { jp: "日本での就職を希望するからには、しっかり企業研究をしておいたほうがいい。", furigana: [["就職","しゅうしょく"],["希望","きぼう"],["企業","きぎょう"],["研究","けんきゅう"]], en: "Since you want to work in Japan, you should properly research companies." },
    { jp: "プロジェクトのリーダーを引き受けた以上、全力を尽くします。", furigana: [["引き受ける","ひきうける"],["全力","ぜんりょく"],["尽くす","つくす"]], en: "Since I accepted the role of project leader, I will do my very best." }
  ],
  prompt: "Say: \"Since I decided to run the marathon, I'll train properly.\"",
  modelAnswer: "マラソンに出ると決めたからには、ちゃんとトレーニングする。",
  modelFurigana: [["決めた","きめた"]],
  note: "からには = you chose it; 以上は = your existing role/situation."
},
{
  id: 19, title: "〜わけではない", meaning: "it's not that... / doesn't necessarily mean...",
  examples: [
    { jp: "退院しても、病気が完全に治ったわけではありませんから、無理をしないでください。", furigana: [["退院","たいいん"],["病気","びょうき"],["完全","かんぜん"],["治る","なおる"],["無理","むり"]], en: "Even though you've left the hospital, it doesn't mean your illness is completely cured." },
    { jp: "歌が下手なわけではないが、カラオケで歌うことはほとんどない。", furigana: [["歌","うた"],["下手","へた"]], en: "It's not that I'm bad at singing, but I rarely sing karaoke." }
  ],
  prompt: "Say: \"It's not that I dislike natto, but I rarely eat it.\"",
  modelAnswer: "納豆が嫌いなわけではないが、あまり食べない。",
  modelFurigana: [["納豆","なっとう"],["嫌い","きらい"]],
  note: "Softly denies a 100% assumption."
},
{
  id: 20, title: "〜ことなく", meaning: "without doing (something)",
  examples: [
    { jp: "これで満足することなく、さらに努力を続けます。", furigana: [["満足","まんぞく"],["努力","どりょく"]], en: "Without being satisfied with this, I will continue to work even harder." },
    { jp: "私たちが乗った新幹線は遅れることなく京都についた。", furigana: [["乗る","のる"],["新幹線","しんかんせん"],["遅れる","おくれる"],["京都","きょうと"]], en: "The Shinkansen we took arrived in Kyoto without being late." }
  ],
  prompt: "Say: \"He finished the marathon without stopping.\"",
  modelAnswer: "彼は止まることなくマラソンを完走した。",
  modelFurigana: [["完走","かんそう"]],
  note: "Formal, written style; stiffer than ないで."
},
{
  id: 21, title: "〜にもかかわらず", meaning: "despite / even though (unexpected result)",
  examples: [
    { jp: "彼の努力にもかかわらず、業績はよくならなかった。", furigana: [["努力","どりょく"],["業績","ぎょうせき"]], en: "Despite his efforts, the results did not improve." },
    { jp: "授業中にもかかわらず、学生はおしゃべりしたり、携帯電話でメールしたりしている。", furigana: [["授業中","じゅぎょうちゅう"],["学生","がくせい"],["携帯電話","けいたいでんわ"]], en: "Even though it is during class, the students are chatting and texting on their phones." }
  ],
  prompt: "Say: \"Despite the rain, many people came to the event.\"",
  modelAnswer: "雨にもかかわらず、たくさんの人がイベントに来た。",
  modelFurigana: [],
  note: "Different from にかかわらず (regardless of) — this means 'despite'."
},
{
  id: 22, title: "〜として", meaning: "as / in the role of",
  examples: [
    { jp: "入社後は企業人としての自覚を持って行動してください。", furigana: [["入社","にゅうしゃ"],["企業人","きぎょうじん"],["自覚","じかく"],["行動","こうどう"]], en: "After joining the company, please act with awareness as a company employee." },
    { jp: "当ホテルではお支払いのときにサービス料として10％いただきます。", furigana: [["支払い","しはらい"],["料","りょう"]], en: "At this hotel, we charge 10% as a service fee at the time of payment." }
  ],
  prompt: "Say: \"I went to Osaka as a tourist.\"",
  modelAnswer: "観光客として大阪に行った。",
  modelFurigana: [["観光客","かんこうきゃく"]],
  note: "States a role, qualification, or category."
},
{
  id: 23, title: "〜限り(は) ／〜限りでは", meaning: "as long as / (bonus) as far as I know",
  examples: [
    { jp: "高齢者でも、働ける限りは働きたいと思っている人が多い。", furigana: [["高齢者","こうれいしゃ"]], en: "Many people, even elderly, think they want to work for as long as they are able to work." },
    { jp: "私が知っている限りでは、電気製品はこの店がいちばん安いです。", furigana: [["知っている","しっている"],["電気製品","でんきせいひん"]], en: "As far as I know, this store is the cheapest for electrical appliances." }
  ],
  prompt: "Say: \"As long as you're healthy, you can keep working.\"",
  modelAnswer: "健康な限り、働き続けられる。",
  modelFurigana: [["健康","けんこう"]],
  note: "限りでは (with 知る/聞く/調べる) = 'as far as I know/heard'."
},
{
  id: 24, title: "〜ざるを得ない", meaning: "have no choice but to (don't want to, but must)",
  examples: [
    { jp: "台風接近のため、野外コンサートは中止せざるを得なくなった。", furigana: [["台風","たいふう"],["接近","せっきん"],["野外","やがい"],["中止","ちゅうし"]], en: "Due to the approaching typhoon, the outdoor concert had no choice but to be canceled." },
    { jp: "日本は食料を輸入に頼らざるを得ない状態だ。", furigana: [["食料","しょくりょう"],["輸入","ゆにゅう"],["頼る","たよる"],["状態","じょうたい"]], en: "Japan is in a state where it has no choice but to rely on imported food." }
  ],
  prompt: "Say: \"Since it's raining, we have no choice but to cancel the picnic.\"",
  modelAnswer: "雨だから、ピクニックを中止せざるを得ない。",
  modelFurigana: [],
  note: "する → せざるを得ない (irregular)."
},
{
  id: 25, title: "〜というものではない", meaning: "it's not always the case that... / not that simple",
  examples: [
    { jp: "勉強は今日やれば明日やらなくていいというものではない。", furigana: [["勉強","べんきょう"]], en: "Studying isn't something where if you do it today, you don't have to do it tomorrow." },
    { jp: "結婚は愛があればいいというものでもない。", furigana: [["結婚","けっこん"],["愛","あい"]], en: "Marriage isn't something where having love alone is enough." }
  ],
  prompt: "Say: \"Just because it's expensive doesn't mean it's delicious.\"",
  modelAnswer: "高ければおいしいというものではない。",
  modelFurigana: [["高ければ","たかければ"]],
  note: "Gently corrects a common assumption."
},
{
  id: 26, title: "〜はともかく(として)", meaning: "leaving aside X / X aside",
  examples: [
    { jp: "今の仕事は、給料はともかく、やりがいがあるいい仕事だと思っています。", furigana: [["給料","きゅうりょう"]], en: "As for my current job, salary aside, I think it's a good and rewarding job." },
    { jp: "この魚、見た目はともかく、味は最高ですから。", furigana: [["見た目","みため"],["味","あじ"],["最高","さいこう"]], en: "This fish — appearance aside — tastes excellent." }
  ],
  prompt: "Say: \"Price aside, this hotel's service is amazing.\"",
  modelAnswer: "値段はともかく、このホテルのサービスは最高だ。",
  modelFurigana: [["値段","ねだん"]],
  note: "Sets one topic aside to focus on another."
},
{
  id: 27, title: "〜かねない", meaning: "might (result in something bad) — risk",
  examples: [
    { jp: "今のような経営方法では、２、３年のうちに倒産しかねない。", furigana: [["経営方法","けいえいほうほう"],["倒産","とうさん"]], en: "With the current management method, the company might go bankrupt within 2–3 years." },
    { jp: "寝不足で運転したら事故を起こしかねないよ。", furigana: [["寝不足","ねぶそく"],["運転","うんてん"],["事故","じこ"]], en: "If you drive while sleep-deprived, you might cause an accident." }
  ],
  prompt: "Say: \"If you eat that much, you might get sick.\"",
  modelAnswer: "そんなに食べたら、病気になりかねないよ。",
  modelFurigana: [["病気","びょうき"]],
  note: "Only for negative/risky outcomes."
},
{
  id: 28, title: "〜というより", meaning: "rather than A, B is more accurate",
  examples: [
    { jp: "姉はぼくより10歳年上で、姉というより母親のような存在だ。", furigana: [["姉","あね"],["年上","としうえ"],["母親","ははおや"],["存在","そんざい"]], en: "My older sister is 10 years older than me, so she's more like a mother than a sister." },
    { jp: "この絵は絵というより、まるで写真のようだ。", furigana: [["絵","え"],["写真","しゃしん"]], en: "This picture is more like a photograph than a painting." }
  ],
  prompt: "Say: \"This isn't a hobby, it's more like a job.\"",
  modelAnswer: "これは趣味というより、仕事のようなものだ。",
  modelFurigana: [["趣味","しゅみ"]],
  note: "You correct your own first word choice."
},
{
  id: 29, title: "〜てはいられない", meaning: "can't just keep doing / not in a position to",
  examples: [
    { jp: "この仕事を明日までに仕上げなきゃならないので、のんびり休んではいられないんですよ。", furigana: [["仕上げ","しあげ"]], en: "I have to finish this work by tomorrow, so I can't afford to relax and rest." },
    { jp: "君たちも先輩になるのですから、いつまでも甘えてはいられませんよ。", furigana: [["先輩","せんぱい"],["甘えて","あまえて"]], en: "Since you're becoming seniors now, you can't keep relying on others forever." }
  ],
  prompt: "Say: \"The deadline is tomorrow, so I can't just keep sleeping.\"",
  modelAnswer: "締め切りは明日だから、寝てはいられない。",
  modelFurigana: [["締め切り","しめきり"]],
  note: "て form ~で becomes じゃいられない."
},
{
  id: 30, title: "〜つつ", meaning: "while (doing two things) — formal version of ながら",
  examples: [
    { jp: "喜ぶ子どもの顔を思い浮かべつつ、プレゼントを選ぶお父さんの姿が増えています。", furigana: [["喜ぶ","よろこぶ"],["思い浮かべ","おもいうかべ"],["姿","すがた"]], en: "The number of fathers choosing presents while picturing their children's happy faces has been increasing." },
    { jp: "この会議では各部署の問題点を検討しつつ、今後の方針を決定していきたいと思います。", furigana: [["各部署","かくぶしょ"],["検討","けんとう"],["方針","ほうしん"],["決定","けってい"]], en: "In this meeting, I would like us to examine issues while also deciding on future policy." }
  ],
  prompt: "Say: \"While thinking about the future, I chose this job.\"",
  modelAnswer: "将来のことを考えつつ、この仕事を選んだ。",
  modelFurigana: [["将来","しょうらい"],["選んだ","えらんだ"]],
  note: "More formal/written than ながら, same meaning."
},
{
  id: 31, title: "〜にわたって", meaning: "throughout (a whole span of time/place)",
  examples: [
    { jp: "台風で電線が切れ、この町は全域にわたって停電した。", furigana: [["台風","たいふう"],["電線","でんせん"],["全域","ぜんいき"],["停電","ていでん"]], en: "A power line was cut by the typhoon, and the entire town suffered a blackout." },
    { jp: "本日から約２週間にわたって、オリンピックが行われる。", furigana: [["行われる","おこなわれる"]], en: "Starting today, the Olympics will be held for approximately two weeks." }
  ],
  prompt: "Say: \"This festival is held for three days.\"",
  modelAnswer: "このお祭りは3日間にわたって行われる。",
  modelFurigana: [["祭り","まつり"]],
  note: "Covers the WHOLE range, not just part of it."
},
{
  id: 32, title: "〜にかけて", meaning: "from A to B (approximate range)",
  examples: [
    { jp: "本日、九州から四国地方にかけて、梅雨入りしました。", furigana: [["九州","きゅうしゅう"],["四国","しこく"],["地方","ちほう"],["梅雨入り","つゆいり"]], en: "Today, the rainy season has begun from Kyushu through to the Shikoku region." },
    { jp: "12月中旬から年末にかけて、町は買い物客でにぎわう。", furigana: [["中旬","ちゅうじゅん"],["年末","ねんまつ"]], en: "From mid-December through to the end of the year, the town is lively with shoppers." }
  ],
  prompt: "Say: \"It will be cold from tonight through tomorrow morning.\"",
  modelAnswer: "今夜から明日の朝にかけて、寒くなるでしょう。",
  modelFurigana: [["今夜","こんや"]],
  note: "Approximate range, not exact endpoints — pairs with から."
},
{
  id: 33, title: "〜にともなって", meaning: "along with (something), as a result of",
  examples: [
    { jp: "本社移転にともなって、最新のコンピューターシステムが導入されることになった。", furigana: [["本社","ほんしゃ"],["移転","いてん"],["導入","どうにゅう"]], en: "Along with the relocation of the head office, the latest computer system would be introduced." },
    { jp: "時代の変化にともなって、人々の考え方も変わってきた。", furigana: [["時代","じだい"],["変化","へんか"],["人々","ひとびと"]], en: "Along with the changes of the times, the way people think has also changed." }
  ],
  prompt: "Say: \"Along with the population increase, traffic has also increased.\"",
  modelAnswer: "人口の増加にともなって、交通量も増えた。",
  modelFurigana: [["人口","じんこう"],["増加","ぞうか"],["交通量","こうつうりょう"]],
  note: "One event causes/brings a connected change."
},
{
  id: 34, title: "〜とともに", meaning: "together with / not only...but also / along with a change",
  examples: [
    { jp: "彼は現地の医師とともに日夜病気の治療を行っている。", furigana: [["現地","げんち"],["医師","いし"],["日夜","にちや"],["治療","ちりょう"]], en: "He is carrying out treatment together with local doctors day and night." },
    { jp: "科学技術の進歩とともに、宇宙の謎が明らかになっていくだろう。", furigana: [["科学技術","かがくぎじゅつ"],["進歩","しんぽ"],["宇宙","うちゅう"],["謎","なぞ"]], en: "Along with the advancement of science and technology, the mysteries of the universe will likely become clear." }
  ],
  prompt: "Say: \"I want to travel together with my family.\"",
  modelAnswer: "家族とともに旅行したい。",
  modelFurigana: [["家族","かぞく"]],
  note: "Three uses: together with; not only X but Y; change alongside change."
},
{
  id: 35, title: "〜次第", meaning: "as soon as (something happens), immediately",
  examples: [
    { jp: "情報が入り次第、お伝えいたします。", furigana: [["情報","じょうほう"]], en: "As soon as information comes in, we will let you know." },
    { jp: "サンプルができ次第、お持ちしますので、ぜひご検討ください。", furigana: [["検討","けんとう"]], en: "As soon as the sample is ready, I will bring it to you." }
  ],
  prompt: "Say: \"I'll contact you as soon as I arrive.\"",
  modelAnswer: "到着次第、ご連絡します。",
  modelFurigana: [["到着","とうちゃく"],["連絡","れんらく"]],
  note: "Formal/polite; used in business and announcements."
},
{
  id: 36, title: "〜きり", meaning: "ever since... (nothing since) / only that many / stuck doing continuously",
  examples: [
    { jp: "彼は「ごめん」と言ったきり、黙ってしまった。", furigana: [["黙って","だまって"]], en: "He said \"sorry\" and then went completely silent after that." },
    { jp: "女性が１人きりで夜道を歩くのは危険だ。", furigana: [["夜道","よみち"],["危険","きけん"]], en: "It is dangerous for a woman to walk alone at night." }
  ],
  prompt: "Say: \"I've only met him once — since then, nothing.\"",
  modelAnswer: "彼とは一度会ったきり、会っていない。",
  modelFurigana: [["一度","いちど"]],
  note: "The situation stayed frozen since that one event."
},
{
  id: 37, title: "〜どころではない／じゃない", meaning: "no way I can (the situation makes it impossible)",
  examples: [
    { jp: "カラオケどころじゃないよ！レポート、書かなきゃ。明日締め切りなんだ。", furigana: [["締め切り","しめきり"]], en: "Karaoke is out of the question! I have to write a report. The deadline is tomorrow." },
    { jp: "人が多くて、ゆっくり泳ぐどころじゃなかったよ。", furigana: [], en: "There were so many people, it was nowhere near a situation where I could swim leisurely." }
  ],
  prompt: "Say: \"I'm so busy I can't even think about vacation.\"",
  modelAnswer: "忙しくて、休暇どころじゃないよ。",
  modelFurigana: [["休暇","きゅうか"]],
  note: "Stronger than 'I don't want to' — reality blocks it completely."
},
{
  id: 38, title: "〜ものの", meaning: "even though (fact) X ... it didn't lead to Y",
  examples: [
    { jp: "水泳教室に通ってはいるものの、いまだに25メートルしか泳げない。", furigana: [["水泳","すいえい"]], en: "Even though I do attend swimming classes, I still can't swim more than 25 meters." },
    { jp: "この靴、デザインが気に入って買ったものの、履く機会が全然ないんだ。", furigana: [["靴","くつ"],["履く","はく"],["機会","きかい"],["全然","ぜんぜん"]], en: "I bought these shoes because I liked the design, but I have had absolutely no opportunity to wear them." }
  ],
  prompt: "Say: \"I bought the book, but I haven't read it yet.\"",
  modelAnswer: "本を買ったものの、まだ読んでいない。",
  modelFurigana: [],
  note: "The first fact is real, but the expected result didn't follow."
},
{
  id: 39, title: "〜ことに", meaning: "to my (surprise/regret/joy) — emotion stated first",
  examples: [
    { jp: "うれしいことに、うちの高校が合唱コンクールで優勝したんですよ。", furigana: [["合唱","がっしょう"],["優勝","ゆうしょう"]], en: "Happily, our high school won the choral competition." },
    { jp: "残念なことに、行きつけの美容院が閉店してしまった。", furigana: [["残念","ざんねん"],["美容院","びよういん"],["閉店","へいてん"]], en: "Unfortunately, the hair salon I always go to has closed down." }
  ],
  prompt: "Say: \"To my surprise, the train arrived early.\"",
  modelAnswer: "驚いたことに、電車が早く着いた。",
  modelFurigana: [["驚いた","おどろいた"]],
  note: "Only with emotion words: 驚いた・困った・うれしい・悲しい・不思議な・残念な."
},
{
  id: 40, title: "〜にしては", meaning: "for a ~, (surprisingly)... — breaks an expectation",
  examples: [
    { jp: "今人気のエリナはモデルにしては背が高いほうではない。", furigana: [], en: "Erina, popular right now, is not particularly tall for a model." },
    { jp: "このお弁当は300円にしては量も多いし味もいい。", furigana: [["弁当","べんとう"],["量","りょう"]], en: "For a 300-yen bento, it has a large portion and tastes good too." }
  ],
  prompt: "Say: \"For a beginner, he plays very well.\"",
  modelAnswer: "初心者にしては、彼はとても上手に弾く。",
  modelFurigana: [["初心者","しょしんしゃ"],["弾く","ひく"]],
  note: "Only used when reality differs from the expectation set by the category."
},
{
  id: 41, title: "〜ことか", meaning: "how much...! (emotional exclamation, not factual)",
  examples: [
    { jp: "どれだけ勉強したことか。私の努力は誰も知らないでしょうね。", furigana: [["努力","どりょく"]], en: "Nobody knows how much I studied. No one would know the effort I put in." },
    { jp: "親友と別れなければならなくて、どんなに悲しかったことか。", furigana: [["親友","しんゆう"]], en: "How sad it was to have to part with my closest friend." }
  ],
  prompt: "Say to yourself: \"How happy I was when I passed the exam!\"",
  modelAnswer: "試験に合格したとき、どんなにうれしかったことか。",
  modelFurigana: [["試験","しけん"],["合格","ごうかく"]],
  note: "Often with どんなに・どれだけ・どれほど, said almost to oneself."
},
{
  id: 42, title: "〜さえ〜ば", meaning: "if only ~, that's the only condition needed",
  examples: [
    { jp: "そちらのご都合さえよければ、明日伺わせていただきます。", furigana: [["都合","つごう"],["伺う","うかがう"]], en: "If it is convenient for you, I will visit tomorrow." },
    { jp: "食べられさえすれば、味は問わないよ。", furigana: [], en: "As long as it's edible, I don't care about the taste." }
  ],
  prompt: "Say: \"As long as you have motivation, anyone can do this job.\"",
  modelAnswer: "やる気さえあれば、誰でもこの仕事ができる。",
  modelFurigana: [],
  note: "Only ONE condition is necessary — everything else is fine."
},
{
  id: 43, title: "〜ようがない", meaning: "there's no way to (do something) — literally impossible",
  examples: [
    { jp: "大雪で飛行機が欠航してしまったので行きようがない。", furigana: [["大雪","おおゆき"],["飛行機","ひこうき"],["欠航","けっこう"]], en: "The flight was cancelled due to heavy snow, so there is no way to go." },
    { jp: "携帯電話をなくしちゃって、連絡しようがなかったんだ。", furigana: [["携帯","けいたい"],["連絡","れんらく"]], en: "I lost my cell phone and there was no way to contact you." }
  ],
  prompt: "Say: \"I don't know his address, so there's no way to send it.\"",
  modelAnswer: "彼の住所を知らないから、送りようがない。",
  modelFurigana: [["住所","じゅうしょ"]],
  note: "You want to, but it's physically/logically impossible."
},
{
  id: 44, title: "〜あげく(に)", meaning: "after all that (effort), it ended badly",
  examples: [
    { jp: "お客さんは、あれこれ試着したあげく、何も買わずに帰っちゃって。", furigana: [["試着","しちゃく"]], en: "The customer tried on all sorts of things and in the end left without buying anything." },
    { jp: "３時間以上迷ったあげく、店員に初めにすすめられたパソコンを買うことにした。", furigana: [["迷う","まよう"]], en: "After agonizing for more than three hours, I ended up buying the computer the clerk had recommended from the start." }
  ],
  prompt: "Say: \"After thinking about it for a long time, I ended up quitting the job.\"",
  modelAnswer: "長い間悩んだあげく、仕事を辞めることにした。",
  modelFurigana: [["悩んだ","なやんだ"],["辞める","やめる"]],
  note: "Usually a negative or exhausting result after effort."
},
{
  id: 45, title: "〜ものではない／もんじゃない", meaning: "you shouldn't do ~ (soft warning/scolding)",
  examples: [
    { jp: "楽をしてお金をもうけようなんて考えるもんじゃない。", furigana: [["楽","らく"]], en: "You shouldn't think about making money the easy way." },
    { jp: "人の悪口を言うもんじゃありません。", furigana: [["悪口","わるぐち"]], en: "You must not badmouth other people." }
  ],
  prompt: "Say: \"You shouldn't judge people by their appearance.\"",
  modelAnswer: "人を見た目で判断するもんじゃない。",
  modelFurigana: [["見た目","みため"],["判断","はんだん"]],
  note: "Softer than a direct order — like advice from an elder."
},
{
  id: 46, title: "〜だけ〜てみる", meaning: "try at least, even if it might not work",
  examples: [
    { jp: "今から行っても間に合わないかもしれないけど、行くだけ行ってみようよ。", furigana: [], en: "It might be too late even if we go now, but let's at least try going." },
    { jp: "今日、課長機嫌がいいから、頼むだけ頼んでみたら？", furigana: [["課長","かちょう"],["機嫌","きげん"]], en: "The section chief is in a good mood today, so why not at least ask?" }
  ],
  prompt: "Say: \"It might not fit, but let's at least try wearing it.\"",
  modelAnswer: "似合わないかもしれないけど、着るだけ着てみよう。",
  modelFurigana: [["似合わない","にあわない"]],
  note: "Same verb repeated: V-るだけV-てみる."
},
{
  id: 47, title: "〜ばかりに", meaning: "just because of X (unfortunate result)",
  examples: [
    { jp: "本当のことを言ったばかりに、彼を怒らせてしまった。", furigana: [["怒らせて","おこらせて"]], en: "Just because I told the truth, I ended up making him angry." },
    { jp: "背が2センチ足りないばかりに、警察官になれなかった。", furigana: [["背","せ"],["警察官","けいさつかん"]], en: "Just because I was 2 centimeters too short, I couldn't become a police officer." }
  ],
  prompt: "Say: \"Just because I overslept, I missed the important meeting.\"",
  modelAnswer: "寝坊したばかりに、大事な会議に遅れてしまった。",
  modelFurigana: [["寝坊した","ねぼうした"],["大事","だいじ"],["会議","かいぎ"],["遅れて","おくれて"]],
  note: "Always a regret — one small cause, one bad result."
},
{
  id: 48, title: "〜ことはない", meaning: "there's no need to (advice)",
  examples: [
    { jp: "君が謝ることはないよ。悪いのは向こうなんだから。", furigana: [["謝る","あやまる"],["向こう","むこう"]], en: "You don't have to apologize. The one at fault is the other person." },
    { jp: "虫に刺されたくらいで病院に行くことはないよ。2、3日で治るから。", furigana: [["虫","むし"],["刺された","さされた"]], en: "There's no need to go to the hospital just for a bug bite." }
  ],
  prompt: "Say: \"You don't have to worry that much.\"",
  modelAnswer: "そんなに心配することはないよ。",
  modelFurigana: [["心配","しんぱい"]],
  note: "Reassuring, casual advice."
},
{
  id: 49, title: "〜に比べて", meaning: "compared to",
  examples: [
    { jp: "いちごはレモンに比べて、ビタミンCが多いんだって。", furigana: [["比べて","くらべて"]], en: "They say strawberries have more vitamin C compared to lemons." },
    { jp: "日本では冬は夏に比べ、2時間以上日照時間が短い。", furigana: [["日照時間","にっしょうじかん"]], en: "In Japan, winter has more than 2 hours less daylight compared to summer." }
  ],
  prompt: "Say: \"Compared to last year, this year is much colder.\"",
  modelAnswer: "去年に比べて、今年はずっと寒い。",
  modelFurigana: [["去年","きょねん"]],
  note: "Same meaning as より, slightly more formal."
},
{
  id: 50, title: "〜ものか／もんか", meaning: "definitely not! (strong denial, to self or others)",
  examples: [
    { jp: "こんなサービスの悪い店には二度と来るもんか。", furigana: [], en: "I will never come to a shop with such bad service again." },
    { jp: "一度断られたぐらいで、あいつがあきらめるものか。", furigana: [["断られた","ことわられた"]], en: "You think he'd give up just because he was refused once? No way." }
  ],
  prompt: "Say to yourself: \"There's no way I'll lose to him!\"",
  modelAnswer: "彼になんか負けるものか。",
  modelFurigana: [["負ける","まける"]],
  note: "Strong emotional denial — colloquial もんか in speech."
},
{
  id: 51, title: "〜というものだ", meaning: "that's just what X generally is (not personal opinion)",
  examples: [
    { jp: "困ったときに助け合うのが友達というものだろ。", furigana: [], en: "Helping each other out when someone's in trouble is what friends are for." },
    { jp: "貧しくても家族が仲よく暮らせるのが幸せというものですよ。", furigana: [["貧しくても","まずしくても"],["仲よく","なかよく"],["幸せ","しあわせ"]], en: "Even if you're poor, being able to live happily together as a family is what happiness really is." }
  ],
  prompt: "Say: \"Supporting each other is what a team is all about.\"",
  modelAnswer: "お互いに支え合うのがチームというものだ。",
  modelFurigana: [["支え合う","ささえあう"]],
  note: "States a general truth, not just your personal view."
},
{
  id: 52, title: "〜ばこそ", meaning: "precisely because (strong reason)",
  examples: [
    { jp: "この山の自然を愛すればこそ、観光客の数を厳しく制限しているのです。", furigana: [["自然","しぜん"],["愛する","あいする"],["観光客","かんこうきゃく"],["厳しく","きびしく"],["制限","せいげん"]], en: "Because we love this mountain's nature, we are strictly limiting the number of tourists." },
    { jp: "親友であればこそ、お互いの欠点を指摘し合えるのだ。", furigana: [["親友","しんゆう"],["互い","たがい"],["欠点","けってん"],["指摘","してき"]], en: "It's precisely because we are close friends that we can point out each other's flaws." }
  ],
  prompt: "Say: \"It's precisely because I care about you that I'm saying this.\"",
  modelAnswer: "あなたのことを思えばこそ、こう言っているんだ。",
  modelFurigana: [],
  note: "Stronger, more emphatic than からこそ."
},
{
  id: 53, title: "〜ないことはない／ないこともない", meaning: "it's not that... (hedging, avoiding a flat yes/no)",
  examples: [
    { jp: "そんなに好きではありませんが、飲めないことはありません。", furigana: [], en: "I don't like it that much, but it's not that I can't drink it." },
    { jp: "カラオケは行かないこともないんですが、誘われたときにお付き合いで行くぐらいです。", furigana: [["誘われた","さそわれた"]], en: "It's not that I never go to karaoke, but I only go along when invited." }
  ],
  prompt: "Say: \"It's not that I can't cook, but I don't do it often.\"",
  modelAnswer: "料理ができないことはないが、あまりしない。",
  modelFurigana: [["料理","りょうり"]],
  note: "Softens a direct answer — common in polite conversation."
},
{
  id: 54, title: "〜だけ（できるだけ）", meaning: "as much as possible / to the limit",
  examples: [
    { jp: "リンさんはお土産を持てるだけ持って、帰国した。", furigana: [["土産","みやげ"]], en: "Lin carried as many souvenirs as she could carry and returned home." },
    { jp: "悲しいときは泣きたいだけ泣けばいいよ。", furigana: [], en: "When you're sad, it's fine to cry as much as you want." }
  ],
  prompt: "Say: \"Please take as many as you want.\"",
  modelAnswer: "ほしいだけ持っていってください。",
  modelFurigana: [],
  note: "V-できる/たい/ほしい + だけ = to the max limit."
},
{
  id: 55, title: "〜もん", meaning: "because... (casual excuse, often feminine)",
  examples: [
    { jp: "この人形もこのお菓子も日本じゃなきゃ、買えないんだもん。", furigana: [["人形","にんぎょう"],["菓子","かし"]], en: "Because you can't buy this doll or this snack unless it's in Japan." },
    { jp: "まだ問題がたくさんあるもん。", furigana: [], en: "There are still a lot of problems." }
  ],
  prompt: "Say casually, giving an excuse: \"Because I was busy!\"",
  modelAnswer: "だって、忙しかったんだもん。",
  modelFurigana: [],
  note: "Very casual, often used by women/children as an excuse."
},
{
  id: 56, title: "〜わけにはいかない", meaning: "can't (due to a real reason) / must (no choice)",
  examples: [
    { jp: "午後から大事な会議があるから、帰るわけにはいかなくて。", furigana: [["大事","だいじ"],["会議","かいぎ"]], en: "I have an important meeting this afternoon, so I can't go home." },
    { jp: "私が行かないわけにはいかないんですよ。", furigana: [], en: "There's no way I can't go." }
  ],
  prompt: "Say: \"I promised, so I can't cancel now.\"",
  modelAnswer: "約束したから、今さらキャンセルするわけにはいかない。",
  modelFurigana: [["約束","やくそく"]],
  note: "Social/moral obligation blocks the action (or its opposite)."
},
{
  id: 57, title: "〜のみ", meaning: "only (formal, written)",
  examples: [
    { jp: "お薬のみご希望の方は、こちらの箱に診察券をお入れください。", furigana: [["希望","きぼう"],["箱","はこ"],["診察券","しんさつけん"]], en: "If you only wish to receive medicine, please put your patient ID card in this box." },
    { jp: "申し込みは郵送のみの受け付けとなります。", furigana: [["郵送","ゆうそう"]], en: "Applications will only be accepted by mail." }
  ],
  prompt: "Say formally: \"Reservations are accepted online only.\"",
  modelAnswer: "ご予約はオンラインのみの受け付けとなります。",
  modelFurigana: [["予約","よやく"]],
  note: "Stiffer, more formal than だけ — signs and notices."
},
{
  id: 58, title: "〜つもりで", meaning: "as if / pretending to be (to feel a certain way)",
  examples: [
    { jp: "旅行に行ったつもりで、この「列車の旅」のDVDを見て、楽しみましょう。", furigana: [["列車","れっしゃ"]], en: "Let's watch this \"Train Journey\" DVD and enjoy it as if we went on a trip." },
    { jp: "いつまでも若いつもりで徹夜してると体を壊すよ。", furigana: [["徹夜","てつや"],["壊す","こわす"]], en: "If you keep pulling all-nighters thinking you're still young, you'll ruin your health." }
  ],
  prompt: "Say: \"I clean the room as if it were my own home.\"",
  modelAnswer: "自分の家のつもりで部屋を掃除する。",
  modelFurigana: [["掃除","そうじ"]],
  note: "Imagining yourself as something you're not, to adopt that feeling/attitude."
}
];
