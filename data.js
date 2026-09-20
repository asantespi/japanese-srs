// Grammar pool, extracted from the user's N2 chapter PDFs.
// Each item: id, title (pattern), meaning (1 line), examples (2), prompt (EN),
// modelAnswer (JA), modelFurigana, vocab (words needed to build the answer), note.
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
  vocab: [
    { jp: "本日", reading: "ほんじつ", en: "today (formal)" },
    { jp: "社員旅行", reading: "しゃいんりょこう", en: "company trip" },
    { jp: "休業", reading: "きゅうぎょう", en: "closed for business" }
  ],
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
  vocab: [
    { jp: "国籍", reading: "こくせき", en: "nationality" },
    { jp: "人気がある", reading: "にんきがある", en: "to be popular" }
  ],
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
  vocab: [
    { jp: "うそをつく", reading: "うそをつく", en: "to tell a lie" },
    { jp: "はずがない", reading: "はずがない", en: "there's no way that..." }
  ],
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
  vocab: [
    { jp: "値段", reading: "ねだん", en: "price" },
    { jp: "季節", reading: "きせつ", en: "season" },
    { jp: "変わる", reading: "かわる", en: "to change" }
  ],
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
  vocab: [
    { jp: "天気", reading: "てんき", en: "weather" },
    { jp: "営業している", reading: "えいぎょうしている", en: "to be open for business" }
  ],
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
  vocab: [
    { jp: "現代社会", reading: "げんだいしゃかい", en: "modern society" },
    { jp: "重要", reading: "じゅうよう", en: "important" }
  ],
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
  vocab: [
    { jp: "劇場", reading: "げきじょう", en: "theater" },
    { jp: "携帯電話", reading: "けいたいでんわ", en: "cell phone" },
    { jp: "電源を切る", reading: "でんげんをきる", en: "to turn off the power" }
  ],
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
  vocab: [
    { jp: "廊下", reading: "ろうか", en: "hallway" },
    { jp: "走る", reading: "はしる", en: "to run" }
  ],
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
  vocab: [
    { jp: "やめる", reading: "やめる", en: "to quit" },
    { jp: "たばこを吸う", reading: "たばこをすう", en: "to smoke" }
  ],
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
  vocab: [
    { jp: "中国", reading: "ちゅうごく", en: "China" },
    { jp: "多くの国", reading: "おおくのくに", en: "many countries" },
    { jp: "参加する", reading: "さんかする", en: "to participate" }
  ],
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
  vocab: [
    { jp: "祖母", reading: "そぼ", en: "grandmother" },
    { jp: "指導", reading: "しどう", en: "guidance" },
    { jp: "育つ", reading: "そだつ", en: "to grow up" }
  ],
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
  vocab: [
    { jp: "観光客", reading: "かんこうきゃく", en: "tourist" },
    { jp: "地元の人", reading: "じもとのひと", en: "local person" }
  ],
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
  vocab: [
    { jp: "年を取る", reading: "としをとる", en: "to get older" },
    { jp: "変わる", reading: "かわる", en: "to change" }
  ],
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
  vocab: [
    { jp: "言語", reading: "げんご", en: "language" },
    { jp: "練習", reading: "れんしゅう", en: "practice" },
    { jp: "欠かせない", reading: "かかせない", en: "indispensable" }
  ],
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
  vocab: [
    { jp: "狭い", reading: "せまい", en: "small / cramped" },
    { jp: "快適", reading: "かいてき", en: "comfortable" }
  ],
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
  vocab: [
    { jp: "国際交流", reading: "こくさいこうりゅう", en: "international exchange" },
    { jp: "目的", reading: "もくてき", en: "purpose" }
  ],
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
  vocab: [
    { jp: "旅行", reading: "りょこう", en: "trip" },
    { jp: "留学する", reading: "りゅうがくする", en: "to study abroad" }
  ],
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
  vocab: [
    { jp: "マラソンに出る", reading: "マラソンにでる", en: "to enter a marathon" },
    { jp: "決める", reading: "きめる", en: "to decide" },
    { jp: "トレーニングする", reading: "トレーニングする", en: "to train" }
  ],
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
  vocab: [
    { jp: "納豆", reading: "なっとう", en: "natto" },
    { jp: "嫌い", reading: "きらい", en: "disliked" }
  ],
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
  vocab: [
    { jp: "止まる", reading: "とまる", en: "to stop" },
    { jp: "完走する", reading: "かんそうする", en: "to finish running / complete a race" }
  ],
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
  vocab: [
    { jp: "雨", reading: "あめ", en: "rain" },
    { jp: "イベント", reading: "イベント", en: "event" }
  ],
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
  vocab: [
    { jp: "観光客", reading: "かんこうきゃく", en: "tourist" },
    { jp: "大阪", reading: "おおさか", en: "Osaka" }
  ],
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
  vocab: [
    { jp: "健康", reading: "けんこう", en: "healthy" },
    { jp: "働き続ける", reading: "はたらきつづける", en: "to keep working" }
  ],
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
  vocab: [
    { jp: "ピクニック", reading: "ピクニック", en: "picnic" },
    { jp: "中止する", reading: "ちゅうしする", en: "to cancel" }
  ],
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
  vocab: [
    { jp: "高い", reading: "たかい", en: "expensive" },
    { jp: "おいしい", reading: "おいしい", en: "delicious" }
  ],
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
  vocab: [
    { jp: "値段", reading: "ねだん", en: "price" },
    { jp: "サービス", reading: "サービス", en: "service" },
    { jp: "最高", reading: "さいこう", en: "the best" }
  ],
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
  vocab: [
    { jp: "病気になる", reading: "びょうきになる", en: "to get sick" }
  ],
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
  vocab: [
    { jp: "趣味", reading: "しゅみ", en: "hobby" },
    { jp: "仕事", reading: "しごと", en: "job / work" }
  ],
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
  vocab: [
    { jp: "締め切り", reading: "しめきり", en: "deadline" },
    { jp: "寝る", reading: "ねる", en: "to sleep" }
  ],
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
  vocab: [
    { jp: "将来", reading: "しょうらい", en: "future" },
    { jp: "選ぶ", reading: "えらぶ", en: "to choose" }
  ],
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
  vocab: [
    { jp: "祭り", reading: "まつり", en: "festival" },
    { jp: "行われる", reading: "おこなわれる", en: "to be held" }
  ],
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
  vocab: [
    { jp: "今夜", reading: "こんや", en: "tonight" },
    { jp: "寒くなる", reading: "さむくなる", en: "to get cold" }
  ],
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
  vocab: [
    { jp: "人口", reading: "じんこう", en: "population" },
    { jp: "増加", reading: "ぞうか", en: "increase" },
    { jp: "交通量", reading: "こうつうりょう", en: "traffic volume" }
  ],
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
  vocab: [
    { jp: "家族", reading: "かぞく", en: "family" },
    { jp: "旅行する", reading: "りょこうする", en: "to travel" }
  ],
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
  vocab: [
    { jp: "到着する", reading: "とうちゃくする", en: "to arrive" },
    { jp: "連絡する", reading: "れんらくする", en: "to contact" }
  ],
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
  vocab: [
    { jp: "一度", reading: "いちど", en: "once" },
    { jp: "会う", reading: "あう", en: "to meet" }
  ],
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
  vocab: [
    { jp: "忙しい", reading: "いそがしい", en: "busy" },
    { jp: "休暇", reading: "きゅうか", en: "vacation" }
  ],
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
  vocab: [
    { jp: "買う", reading: "かう", en: "to buy" },
    { jp: "読む", reading: "よむ", en: "to read" }
  ],
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
  vocab: [
    { jp: "驚く", reading: "おどろく", en: "to be surprised" },
    { jp: "電車", reading: "でんしゃ", en: "train" },
    { jp: "着く", reading: "つく", en: "to arrive" }
  ],
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
  vocab: [
    { jp: "初心者", reading: "しょしんしゃ", en: "beginner" },
    { jp: "弾く", reading: "ひく", en: "to play (an instrument)" }
  ],
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
  vocab: [
    { jp: "試験", reading: "しけん", en: "exam" },
    { jp: "合格する", reading: "ごうかくする", en: "to pass" }
  ],
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
  vocab: [
    { jp: "やる気", reading: "やるき", en: "motivation" },
    { jp: "誰でも", reading: "だれでも", en: "anyone" }
  ],
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
  vocab: [
    { jp: "住所", reading: "じゅうしょ", en: "address" },
    { jp: "送る", reading: "おくる", en: "to send" }
  ],
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
  vocab: [
    { jp: "悩む", reading: "なやむ", en: "to agonize / worry" },
    { jp: "辞める", reading: "やめる", en: "to quit" }
  ],
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
  vocab: [
    { jp: "見た目", reading: "みため", en: "appearance" },
    { jp: "判断する", reading: "はんだんする", en: "to judge" }
  ],
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
  vocab: [
    { jp: "似合う", reading: "にあう", en: "to suit / look good on" },
    { jp: "着る", reading: "きる", en: "to wear" }
  ],
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
  vocab: [
    { jp: "寝坊する", reading: "ねぼうする", en: "to oversleep" },
    { jp: "大事な会議", reading: "だいじなかいぎ", en: "important meeting" },
    { jp: "遅れる", reading: "おくれる", en: "to be late" }
  ],
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
  vocab: [
    { jp: "心配する", reading: "しんぱいする", en: "to worry" }
  ],
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
  vocab: [
    { jp: "去年", reading: "きょねん", en: "last year" },
    { jp: "今年", reading: "ことし", en: "this year" },
    { jp: "寒い", reading: "さむい", en: "cold" }
  ],
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
  vocab: [
    { jp: "負ける", reading: "まける", en: "to lose" }
  ],
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
  vocab: [
    { jp: "お互いに", reading: "おたがいに", en: "to each other" },
    { jp: "支え合う", reading: "ささえあう", en: "to support each other" }
  ],
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
  vocab: [
    { jp: "思う", reading: "おもう", en: "to think of / care about" },
    { jp: "言う", reading: "いう", en: "to say" }
  ],
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
  vocab: [
    { jp: "料理ができる", reading: "りょうりができる", en: "to be able to cook" }
  ],
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
  vocab: [
    { jp: "ほしい", reading: "ほしい", en: "want" },
    { jp: "持っていく", reading: "もっていく", en: "to take / carry away" }
  ],
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
  vocab: [
    { jp: "だって", reading: "だって", en: "because (casual)" },
    { jp: "忙しい", reading: "いそがしい", en: "busy" }
  ],
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
  vocab: [
    { jp: "約束する", reading: "やくそくする", en: "to promise" },
    { jp: "今さら", reading: "いまさら", en: "now, at this point" },
    { jp: "キャンセルする", reading: "キャンセルする", en: "to cancel" }
  ],
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
  vocab: [
    { jp: "予約", reading: "よやく", en: "reservation" },
    { jp: "オンライン", reading: "オンライン", en: "online" },
    { jp: "受け付け", reading: "うけつけ", en: "acceptance / reception" }
  ],
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
  vocab: [
    { jp: "自分の家", reading: "じぶんのいえ", en: "one's own home" },
    { jp: "部屋", reading: "へや", en: "room" },
    { jp: "掃除する", reading: "そうじする", en: "to clean" }
  ],
  note: "Imagining yourself as something you're not, to adopt that feeling/attitude."
},
{
  id: 59, title: "〜から見ると／からいうと／からすると", meaning: "judging from ~ / from the standpoint of ~",
  examples: [
    { jp: "便利さという点から見ると、やはり田舎より都会のほうが暮らしやすい。", furigana: [["田舎","いなか"],["都会","とかい"]], en: "Looking at it from the point of convenience, the city is still easier to live in than the countryside." },
    { jp: "彼の考え方からすると、どんなアイデアも実行できなければ無駄だということになる。", furigana: [["実行","じっこう"],["無駄","むだ"]], en: "From his way of thinking, any idea is useless if it can't be carried out." }
  ],
  prompt: "Say: \"Judging from the current economic situation, this plan is difficult.\"",
  modelAnswer: "今の経済状況から見ると、この計画は難しい。",
  modelFurigana: [["経済状況","けいざいじょうきょう"],["計画","けいかく"],["難しい","むずかしい"]],
  vocab: [
    { jp: "経済状況", reading: "けいざいじょうきょう", en: "economic situation" },
    { jp: "計画", reading: "けいかく", en: "plan" }
  ],
  note: "からいうと and からすると are near-synonyms of から見ると — all mean 'taking ~ as the basis for judging'."
},
{
  id: 60, title: "〜その一方で", meaning: "while (on the other hand) — two contrasting situations about one topic",
  examples: [
    { jp: "仕事を求めて都会に出る若者がいる一方、故郷に戻って就職する若者もいる。", furigana: [["都会","とかい"],["若者","わかもの"],["故郷","こきょう"],["就職","しゅうしょく"]], en: "While there are young people who go to the city looking for work, there are also young people who return to their hometown to find employment." },
    { jp: "インターネットの普及で、簡単に情報が手に入るようになった。しかしその一方で、個人情報の流出という問題も出てきた。", furigana: [["普及","ふきゅう"],["情報","じょうほう"],["個人情報","こじんじょうほう"],["流出","りゅうしゅつ"]], en: "Thanks to the spread of the internet, it became easy to get information. However, at the same time, the problem of personal information leaks has also emerged." }
  ],
  prompt: "Say: \"This medicine is effective, but on the other hand it has side effects.\"",
  modelAnswer: "この薬は効果がある一方で、副作用もある。",
  modelFurigana: [["薬","くすり"],["効果","こうか"],["副作用","ふくさよう"]],
  vocab: [
    { jp: "効果がある", reading: "こうかがある", en: "to be effective" },
    { jp: "副作用", reading: "ふくさよう", en: "side effect" }
  ],
  note: "Describes two different — often opposite — sides of one situation."
},
{
  id: 61, title: "〜ことから", meaning: "because of the fact that ~ (reason for a name, judgment, or cause)",
  examples: [
    { jp: "このサツマイモは中が赤いことから、紅イモと呼ばれています。", furigana: [["紅","べに"]], en: "Because the inside of this sweet potato is red, it's called a \"red potato.\"" },
    { jp: "チンパンジーは道具が使えることから、人間に最も近いと考えられている。", furigana: [], en: "Because chimpanzees can use tools, they are thought to be closest to humans." }
  ],
  prompt: "Say: \"Because this town is by the sea, fishing is thriving here.\"",
  modelAnswer: "この町は海に近いことから、漁業が盛んだ。",
  modelFurigana: [["町","まち"],["海","うみ"],["漁業","ぎょぎょう"],["盛ん","さかん"]],
  vocab: [
    { jp: "漁業", reading: "ぎょぎょう", en: "fishing industry" },
    { jp: "盛んだ", reading: "さかんだ", en: "to be thriving" }
  ],
  note: "Gives the reason behind a name, judgment, or how something came to be."
},
{
  id: 62, title: "〜のみならず", meaning: "not only ~ but also (adds a bigger/second fact)",
  examples: [
    { jp: "現在、日本のコンビニは若者のみならず、あらゆる世代の人々に様々な目的で利用されている。", furigana: [["若者","わかもの"],["世代","せだい"],["様々","さまざま"],["目的","もくてき"]], en: "Nowadays, convenience stores in Japan are used not only by young people but by people of all generations for various purposes." },
    { jp: "難民問題は人道的な問題であるのみならず、近隣諸国にも影響を及ぼす政治的な側面もある。", furigana: [["難民問題","なんみんもんだい"],["人道的","じんどうてき"],["影響","えいきょう"]], en: "The refugee problem is not only a humanitarian issue, but also has a political aspect that affects neighboring countries." }
  ],
  prompt: "Say: \"This app is useful not only for students but also for working adults.\"",
  modelAnswer: "このアプリは学生のみならず、社会人にも役に立つ。",
  modelFurigana: [["学生","がくせい"],["社会人","しゃかいじん"],["役に立つ","やくにたつ"]],
  vocab: [
    { jp: "社会人", reading: "しゃかいじん", en: "working adult" },
    { jp: "役に立つ", reading: "やくにたつ", en: "to be useful" }
  ],
  note: "More formal/written than 〜だけでなく."
},
{
  id: 63, title: "〜といった", meaning: "such as ~ (giving representative examples)",
  examples: [
    { jp: "くるみやアーモンドといったナッツ類を毎日食べると、記憶力がよくなるそうです。", furigana: [["類","るい"],["記憶力","きおくりょく"]], en: "They say that eating nuts such as walnuts and almonds every day improves memory." },
    { jp: "仏教は、中国、日本、韓国、タイといったアジアの国で広く信仰されている。", furigana: [["仏教","ぶっきょう"],["韓国","かんこく"],["信仰","しんこう"]], en: "Buddhism is widely believed in Asian countries such as China, Japan, South Korea, and Thailand." }
  ],
  prompt: "Say: \"Fruits such as apples and oranges are good for the body.\"",
  modelAnswer: "りんごやオレンジといった果物は体にいい。",
  modelFurigana: [["果物","くだもの"],["体","からだ"]],
  vocab: [
    { jp: "果物", reading: "くだもの", en: "fruit" },
    { jp: "体にいい", reading: "からだにいい", en: "good for the body" }
  ],
  note: "Same meaning as 〜など, giving a couple of typical examples."
},
{
  id: 64, title: "〜にしたがって／につれて", meaning: "as ~ changes, so does something else",
  examples: [
    { jp: "暑くなるにしたがって、体調を崩す人が増えた。", furigana: [["体調","たいちょう"]], en: "As it got hotter, more people started falling ill." },
    { jp: "留学生活が長くなるにつれて、国のことを思い出すことが少なくなったような気がする。", furigana: [], en: "As study abroad life went on longer, I feel like I started thinking about my home country less." }
  ],
  prompt: "Say: \"As the population increases, food shortages become a problem.\"",
  modelAnswer: "人口が増えるにしたがって、食料不足が問題になる。",
  modelFurigana: [["人口","じんこう"],["食料不足","しょくりょうぶそく"]],
  vocab: [
    { jp: "人口", reading: "じんこう", en: "population" },
    { jp: "食料不足", reading: "しょくりょうぶそく", en: "food shortage" }
  ],
  note: "につれて is interchangeable with にしたがって in most cases."
},
{
  id: 65, title: "〜得る(うる)／〜得ない(えない)", meaning: "can possibly / cannot possibly (formal, used in essays and reports)",
  examples: [
    { jp: "普通の人が宇宙へ行ける日が来るなんて、100年前には想像し得なかったことだ。", furigana: [["宇宙","うちゅう"],["想像","そうぞう"]], en: "That a day would come when ordinary people could go to space was something unimaginable 100 years ago." },
    { jp: "マーケティング調査の結果によっては、発売時期の変更もあり得る。", furigana: [["調査","ちょうさ"],["発売時期","はつばいじき"],["変更","へんこう"]], en: "Depending on the marketing research results, a change in the release date is possible." }
  ],
  prompt: "Say formally: \"Such a mistake is unthinkable.\"",
  modelAnswer: "そのようなミスは考えられ得ない。",
  modelFurigana: [],
  vocab: [
    { jp: "考えられる", reading: "かんがえられる", en: "to be conceivable" }
  ],
  note: "うる is a literary alternative to える in the plain affirmative only; the negative is always 〜えない."
},
{
  id: 66, title: "〜に反して", meaning: "contrary to (expectations/wishes) — the opposite result happened",
  examples: [
    { jp: "今回の経済政策は国民の期待に反して、まったく効果がなかった。", furigana: [["経済政策","けいざいせいさく"],["国民","こくみん"],["効果","こうか"]], en: "Contrary to the public's expectations, this economic policy had no effect at all." },
    { jp: "彼は、親の意向に反して、戦場カメラマンになった。", furigana: [["意向","いこう"],["戦場","せんじょう"]], en: "Against his parents' wishes, he became a war photographer." }
  ],
  prompt: "Say: \"Contrary to my expectations, the test was easy.\"",
  modelAnswer: "私の予想に反して、試験は簡単だった。",
  modelFurigana: [["予想","よそう"],["試験","しけん"],["簡単","かんたん"]],
  vocab: [
    { jp: "予想", reading: "よそう", en: "expectation" },
    { jp: "試験", reading: "しけん", en: "exam" }
  ],
  note: "Pairs with words like 予想・期待・意向."
},
{
  id: 67, title: "〜に関して／に関する", meaning: "regarding / about (a topic being discussed or researched)",
  examples: [
    { jp: "修理に関するお問い合わせはサービスセンターまでお電話かメールでご連絡ください。", furigana: [["修理","しゅうり"],["問い合わせ","といあわせ"]], en: "For inquiries regarding repairs, please contact the service center by phone or email." },
    { jp: "友人は地震の予知に関して研究論文を書いたそうだ。", furigana: [["地震","じしん"],["予知","よち"],["研究論文","けんきゅうろんぶん"]], en: "I heard that my friend wrote a research paper regarding earthquake prediction." }
  ],
  prompt: "Say: \"Regarding this project, there are still many questions.\"",
  modelAnswer: "このプロジェクトに関して、まだ多くの疑問がある。",
  modelFurigana: [["疑問","ぎもん"]],
  vocab: [
    { jp: "疑問", reading: "ぎもん", en: "question / doubt" }
  ],
  note: "に関して connects to a verb/clause; に関する modifies a following noun directly."
},
{
  id: 68, title: "〜反面", meaning: "on the other hand (one thing has two contrasting sides)",
  examples: [
    { jp: "IT機器は多機能化が進んで、便利な反面、操作が複雑すぎて使いこなせない人が増えている。", furigana: [["機器","きき"],["多機能化","たきのうか"],["複雑","ふくざつ"]], en: "As IT devices become more multifunctional, while they are convenient, the number of people who can't use them because the operation is too complex is increasing." },
    { jp: "国民の長寿は喜ばしい反面、国の財政負担が増えるという問題もある。", furigana: [["長寿","ちょうじゅ"],["財政負担","ざいせいふたん"]], en: "While the population's longevity is something to be happy about, there is also the problem that the country's financial burden increases." }
  ],
  prompt: "Say: \"Working from home is convenient, but on the other hand you feel lonely.\"",
  modelAnswer: "在宅勤務は便利な反面、孤独を感じる。",
  modelFurigana: [["在宅勤務","ざいたくきんむ"],["孤独","こどく"]],
  vocab: [
    { jp: "在宅勤務", reading: "ざいたくきんむ", en: "working from home" },
    { jp: "孤独を感じる", reading: "こどくをかんじる", en: "to feel lonely" }
  ],
  note: "Very close to 〜一方で, but 反面 always frames the two sides as good vs bad."
},
{
  id: 69, title: "〜上(じょう)", meaning: "from the point of view of ~ (theoretical, historical, health, etc.)",
  examples: [
    { jp: "お札にはその国の歴史上の人物の顔が描かれていることが多い。", furigana: [["札","さつ"],["歴史上","れきしじょう"],["人物","じんぶつ"]], en: "Banknotes often have the face of a historically significant person from that country depicted on them." },
    { jp: "あの２人は表面上は親しそうに見えるけど、本当はあまり仲がよくないんだ。", furigana: [["表面上","ひょうめんじょう"],["仲","なか"]], en: "Those two look close on the surface, but in reality they don't get along very well." }
  ],
  prompt: "Say: \"This medicine has no problems from a safety standpoint.\"",
  modelAnswer: "この薬は安全上、問題がない。",
  modelFurigana: [["薬","くすり"],["安全上","あんぜんじょう"],["問題","もんだい"]],
  vocab: [
    { jp: "安全上", reading: "あんぜんじょう", en: "from a safety standpoint" },
    { jp: "問題がない", reading: "もんだいがない", en: "to have no problem" }
  ],
  note: "Attaches directly to nouns like 理論・教育・法律・歴史・表面 — no particle in between."
},
{
  id: 70, title: "〜つつある", meaning: "is gradually ~ing (a change happening right now, not finished)",
  examples: [
    { jp: "異常気象の影響が世界各地に広がりつつある。", furigana: [["異常気象","いじょうきしょう"],["影響","えいきょう"],["各地","かくち"]], en: "The effects of abnormal weather are gradually spreading across the world." },
    { jp: "日本銀行は、国内の景気について、緩やかに回復しつつあると発表した。", furigana: [["景気","けいき"],["緩やかに","ゆるやかに"],["回復","かいふく"]], en: "The Bank of Japan announced that the domestic economy is gradually recovering." }
  ],
  prompt: "Say: \"The number of foreign tourists is gradually increasing.\"",
  modelAnswer: "外国人観光客の数が増えつつある。",
  modelFurigana: [["外国人観光客","がいこくじんかんこうきゃく"],["数","かず"]],
  vocab: [
    { jp: "外国人観光客", reading: "がいこくじんかんこうきゃく", en: "foreign tourist" },
    { jp: "増える", reading: "ふえる", en: "to increase" }
  ],
  note: "More formal than 〜ている; often used in news reports about ongoing change."
},
{
  id: 71, title: "〜に限らず", meaning: "not limited to ~ (applies more broadly than just this one example)",
  examples: [
    { jp: "環境対策のためにも、夏に限らず、年間を通して節電を心がけるべきだ。", furigana: [["環境対策","かんきょうたいさく"],["年間","ねんかん"],["節電","せつでん"]], en: "For the sake of environmental measures, one should be mindful of saving electricity throughout the year, not just in summer." },
    { jp: "水の問題は特定の地域に限らず、世界的な問題になるだろう。", furigana: [["特定","とくてい"],["地域","ちいき"],["世界的","せかいてき"]], en: "The water problem will likely become a global issue, not limited to specific regions." }
  ],
  prompt: "Say: \"Not limited to Japan, this custom also exists in other countries.\"",
  modelAnswer: "日本に限らず、この習慣はほかの国にもある。",
  modelFurigana: [["習慣","しゅうかん"]],
  vocab: [
    { jp: "習慣", reading: "しゅうかん", en: "custom" }
  ],
  note: "Similar meaning to 〜だけでなく, but more written/formal."
},
{
  id: 72, title: "尊敬語・謙譲語（ビジネス敬語）", meaning: "special honorific/humble business vocabulary (お見えになる, おいでになる, 承る, 拝借する, 存じる, まいる...)",
  examples: [
    { jp: "横浜からお越しの大山様、佐藤様がお待ちですので、１階の受付までお越しください。", furigana: [["越","こ"],["受付","うけつけ"]], en: "Mr./Ms. Oyama and Mr./Ms. Sato, who came from Yokohama, are waiting for you, so please come to the reception desk on the 1st floor." },
    { jp: "本日のご予約は山本が承りました。ありがとうございました。", furigana: [["山本","やまもと"],["承","うけたまわ"]], en: "Yamamoto took your reservation for today. Thank you very much." }
  ],
  prompt: "Say politely (humble form): \"I will borrow this material.\"",
  modelAnswer: "この資料を拝借いたします。",
  modelFurigana: [["資料","しりょう"],["拝借","はいしゃく"]],
  vocab: [
    { jp: "資料", reading: "しりょう", en: "material / document" },
    { jp: "拝借する", reading: "はいしゃくする", en: "to (humbly) borrow" }
  ],
  note: "尊敬語 raises the other person's action (お見えになる=来る); 謙譲語 lowers your own (拝借する=借りる)."
},
{
  id: 73, title: "お／ご〜願えますでしょうか", meaning: "could you please... (polite business request, = お/ご〜いただく／ください)",
  examples: [
    { jp: "事故の状況をもう一度詳しくお話し願えますか。", furigana: [["事故","じこ"],["状況","じょうきょう"],["詳しく","くわしく"]], en: "Could you tell me the details of the accident's situation once more?" },
    { jp: "見学ご希望の方は、この書類にご記入願います。", furigana: [["見学","けんがく"],["希望","きぼう"],["書類","しょるい"],["記入","きにゅう"]], en: "Those who wish to tour, please fill out this document." }
  ],
  prompt: "Ask politely in business style: \"Could you please wait a moment?\"",
  modelAnswer: "少々お待ち願えますか。",
  modelFurigana: [["少々","しょうしょう"]],
  vocab: [
    { jp: "少々", reading: "しょうしょう", en: "a moment / a little" }
  ],
  note: "お+V-ます stem+願います for verbs; ご+noun+願います for nouns."
},
{
  id: 74, title: "お／ご〜申し上げる", meaning: "to (humbly) do something for someone — more polite than お／ご〜する",
  examples: [
    { jp: "新校舎建設のため、ご寄付をお願い申し上げます。", furigana: [["新校舎","しんこうしゃ"],["建設","けんせつ"],["寄付","きふ"]], en: "For the construction of the new school building, we humbly ask for your donation." },
    { jp: "被害に遭われた方に心からお見舞い申し上げます。", furigana: [["被害","ひがい"],["遭","あ"],["見舞","みま"]], en: "We express our heartfelt sympathy to those who were affected." }
  ],
  prompt: "Say formally: \"I will explain about today's schedule.\"",
  modelAnswer: "本日の日程についてご説明申し上げます。",
  modelFurigana: [["本日","ほんじつ"],["日程","にってい"],["説明","せつめい"]],
  vocab: [
    { jp: "日程", reading: "にってい", en: "schedule" },
    { jp: "説明する", reading: "せつめいする", en: "to explain" }
  ],
  note: "This means 'do' something for someone, not 'say' — even with words like 説明 (explain)."
},
{
  id: 75, title: "〜ばと思います", meaning: "I would appreciate it if you could... / I wish (soft, polite request or wish)",
  examples: [
    { jp: "こちらの事情をご理解いただければと思います。", furigana: [["事情","じじょう"],["理解","りかい"]], en: "I would appreciate it if you could understand the circumstances here." },
    { jp: "皆さんのご意見をお聞かせくださればと思います。", furigana: [["皆","みな"],["意見","いけん"]], en: "I would appreciate it if everyone could share their opinions." }
  ],
  prompt: "Say politely: \"I would appreciate it if you could reply by tomorrow.\"",
  modelAnswer: "明日までにお返事いただければと思います。",
  modelFurigana: [["返事","へんじ"]],
  vocab: [
    { jp: "返事", reading: "へんじ", en: "reply" }
  ],
  note: "Softer and more polite than a direct request — common in business emails."
},
{
  id: 76, title: "〜につきましては／にとりましては／におきましては／としまして／に関しまして", meaning: "polite/formal versions of について・にとって・において・として・に関して",
  examples: [
    { jp: "発売の時期につきましては、現在検討中でございます。", furigana: [["発売","はつばい"],["時期","じき"],["検討中","けんとうちゅう"]], en: "Regarding the release timing, it is currently under consideration." },
    { jp: "わが社といたしましては、今回の契約はぜひ進めたいと考えております。", furigana: [["契約","けいやく"]], en: "As for our company, we would definitely like to proceed with this contract." }
  ],
  prompt: "Say formally: \"Regarding the price, we will contact you separately.\"",
  modelAnswer: "価格につきましては、別途ご連絡いたします。",
  modelFurigana: [["価格","かかく"],["別途","べっと"],["連絡","れんらく"]],
  vocab: [
    { jp: "価格", reading: "かかく", en: "price" },
    { jp: "別途", reading: "べっと", en: "separately" }
  ],
  note: "Dressed-up 'business suit' versions of casual connectors — use in formal writing and speeches."
},
{
  id: 77, title: "〜のなんのって", meaning: "so extremely ~ that I can't even describe it (spoken exaggeration)",
  examples: [
    { jp: "虫歯を抜いたら、痛いのなんのって。何も食べられないんだ。", furigana: [["虫歯","むしば"],["抜いた","ぬいた"]], en: "I had a cavity pulled, and it hurt so much I can't even describe it. I can't eat anything." },
    { jp: "隣の部屋の人がテレビでサッカー見ていて、うるさいのなんのって、全然寝られなかったんだ。", furigana: [["隣","となり"],["全然","ぜんぜん"]], en: "The person next door was watching soccer on TV, and it was so noisy I can't even describe it, I couldn't sleep at all." }
  ],
  prompt: "Say casually: \"That movie was so scary I can't even describe it.\"",
  modelAnswer: "あの映画は怖いのなんのって。",
  modelFurigana: [["映画","えいが"],["怖い","こわい"]],
  vocab: [
    { jp: "映画", reading: "えいが", en: "movie" },
    { jp: "怖い", reading: "こわい", en: "scary" }
  ],
  note: "Feeling too big for words. な-adjectives take な (静かなのなんのって); nouns drop だ."
},
{
  id: 78, title: "〜たて", meaning: "freshly / just done (right after being made or completed)",
  examples: [
    { jp: "炊きたてのご飯ってほんといいね。何杯でも食べられそう。", furigana: [["炊きたて","たきたて"],["何杯","なんばい"]], en: "Freshly cooked rice is really good, isn't it. I feel like I could eat any number of bowls." },
    { jp: "このベンチ、ペンキぬりたてだって。", furigana: [], en: "This bench is apparently freshly painted." }
  ],
  prompt: "Say: \"I love freshly baked bread.\"",
  modelAnswer: "焼きたてのパンが大好きだ。",
  modelFurigana: [["焼きたて","やきたて"],["大好き","だいすき"]],
  vocab: [
    { jp: "焼く", reading: "やく", en: "to bake / grill" },
    { jp: "パン", reading: "パン", en: "bread" }
  ],
  note: "Verb stem + たて; common with 作る・できる・焼く・炊く・なる."
},
{
  id: 79, title: "〜ったら／ってば", meaning: "seriously, [X]... (exasperated complaint about someone/something familiar)",
  examples: [
    { jp: "うちの犬ったら、私が浴衣着てたら、よその人と間違えてほえたのよ。", furigana: [["浴衣","ゆかた"]], en: "My dog, seriously, when I was wearing a yukata, it barked at me mistaking me for a stranger." },
    { jp: "お母さんってば、いつも勝手に私の部屋に入るのよ。", furigana: [], en: "My mom, seriously, always comes into my room without asking." }
  ],
  prompt: "Say: \"My little brother, seriously, never cleans his room.\"",
  modelAnswer: "うちの弟ったら、全然部屋を掃除しないのよ。",
  modelFurigana: [["弟","おとうと"],["全然","ぜんぜん"],["部屋","へや"],["掃除","そうじ"]],
  vocab: [
    { jp: "弟", reading: "おとうと", en: "younger brother" },
    { jp: "掃除する", reading: "そうじする", en: "to clean" }
  ],
  note: "Name the person/thing, sigh with ったら, then complain. Only for familiar people or things; ってば is the same feeling."
},
{
  id: 80, title: "〜ようになっている", meaning: "is set up / designed so that X automatically happens",
  examples: [
    { jp: "ほこりが鼻に入るとくしゃみが出て、自然にそれを外へ出すようになっています。", furigana: [["鼻","はな"],["自然","しぜん"]], en: "When dust gets into your nose, you sneeze, and it's set up so that naturally pushes it out." },
    { jp: "このライターは着火部分を固くして、子どもがいたずらしても火がつかないようになっています。", furigana: [["着火","ちゃっか"],["固く","かたく"]], en: "This lighter has a hardened ignition part, so it's set up so that even if a child fiddles with it, it won't light." }
  ],
  prompt: "Say: \"This door is set up to lock automatically when it closes.\"",
  modelAnswer: "このドアは閉めると自動的にかぎがかかるようになっている。",
  modelFurigana: [["自動的","じどうてき"]],
  vocab: [
    { jp: "自動的", reading: "じどうてき", en: "automatic" },
    { jp: "かぎがかかる", reading: "かぎがかかる", en: "to lock" }
  ],
  note: "Describes how a machine, system or body mechanism is built to work — not a change over time."
},
{
  id: 81, title: "〜わけだ", meaning: "no wonder / so that's why (understanding the reason)",
  examples: [
    { jp: "このゲーム、人気があるわけだよ。やってみたら、キャラクターも個性的だし、ストーリーも独創的だし、最高だよ。", furigana: [["人気","にんき"],["個性的","こせいてき"],["独創的","どくそうてき"],["最高","さいこう"]], en: "No wonder this game is popular. When I tried it, the characters are unique and the story is original, it's the best." },
    { jp: "この道、カーブが多くて見通しが悪いし、街灯は少ないし…。事故が多いわけだ。", furigana: [["見通し","みとおし"],["街灯","がいとう"],["事故","じこ"]], en: "This road has a lot of curves and poor visibility, and there are few streetlights... No wonder there are a lot of accidents." }
  ],
  prompt: "Say: \"He worked all night — no wonder he's tired.\"",
  modelAnswer: "一晩中働いていたのか。疲れているわけだ。",
  modelFurigana: [["一晩中","ひとばんじゅう"],["働いて","はたらいて"],["疲れて","つかれて"]],
  vocab: [
    { jp: "一晩中", reading: "ひとばんじゅう", en: "all night" },
    { jp: "疲れる", reading: "つかれる", en: "to be tired" }
  ],
  note: "An 'aha' — you learn the reason behind something you'd noticed. If the reason is unknown, use どういうわけか."
},
{
  id: 82, title: "〜どころか", meaning: "far from ~ (it's the opposite, or much more extreme)",
  examples: [
    { jp: "ううん。雨に降られて、暑いどころかすごく寒くて、風邪ひきそうだったよ。", furigana: [["風邪","かぜ"]], en: "No. It rained on me, and far from hot, it was really cold, I thought I might catch a cold." },
    { jp: "運動するとおなかがすくでしょ？やせるどころか体重増えちゃった。", furigana: [], en: "When you exercise, you get hungry, right? Far from losing weight, I actually gained weight." }
  ],
  prompt: "Say: \"Far from being cheap, it was actually very expensive.\"",
  modelAnswer: "安いどころか、とても高かった。",
  modelFurigana: [["安い","やすい"],["高かった","たかかった"]],
  vocab: [
    { jp: "安い", reading: "やすい", en: "cheap" },
    { jp: "高い", reading: "たかい", en: "expensive" }
  ],
  note: "Denies A and states the opposite — or something far more extreme (漢字どころかひらがなも…). A is often what the listener just said."
},
{
  id: 83, title: "〜ようでは／ようじゃ", meaning: "if you keep being/doing ~, it won't turn out well (critical warning)",
  examples: [
    { jp: "締め切りを守れないようじゃ、漫画家としてやっていけないよ。", furigana: [["締め切り","しめきり"],["漫画家","まんがか"]], en: "If you can't keep deadlines, you won't be able to make it as a manga artist." },
    { jp: "おしゃれに全然気を使わないようじゃ、社会人としてまずいんじゃない？", furigana: [["全然","ぜんぜん"],["社会人","しゃかいじん"]], en: "If you don't pay any attention to your appearance at all, isn't that bad as a working adult?" }
  ],
  prompt: "Say: \"If you can't even greet people, you can't work in customer service.\"",
  modelAnswer: "挨拶もできないようじゃ、接客の仕事はできないよ。",
  modelFurigana: [["挨拶","あいさつ"],["接客","せっきゃく"],["仕事","しごと"]],
  vocab: [
    { jp: "挨拶", reading: "あいさつ", en: "greeting" },
    { jp: "接客", reading: "せっきゃく", en: "customer service" }
  ],
  note: "Criticizes the current state; followed by a negative judgment about the outcome."
}
];

// ---- Chapters ----
// Each grammar item's chapter is derived from its id range below, so the
// existing 58 items (chapters 1-6) never needed per-item edits. Adding a new
// chapter later just means appending new GRAMMAR_POOL items and one new
// range here.
const CHAPTERS = [
  { id: 1, title: "Chapter 1 — Formal notices & conditions" },
  { id: 2, title: "Chapter 2 — Business & narrative connectors" },
  { id: 3, title: "Chapter 3 — Roles, limits & obligations" },
  { id: 4, title: "Chapter 4 — Simultaneous change & duration" },
  { id: 5, title: "Chapter 5 — Emotion, exception & attempt" },
  { id: 6, title: "Chapter 6 — Regret, defiance & comparison" },
  { id: 7, title: "Chapter 7 — Perspective & gradual change" },
  { id: 8, title: "Chapter 8 — Business keigo" },
  { id: 9, title: "Chapter 9 — Colloquial emphasis & reasoning" }
];

const CHAPTER_RANGES = [
  { chapter: 1, min: 1, max: 8 },
  { chapter: 2, min: 9, max: 21 },
  { chapter: 3, min: 22, max: 29 },
  { chapter: 4, min: 30, max: 35 },
  { chapter: 5, min: 36, max: 46 },
  { chapter: 6, min: 47, max: 58 },
  { chapter: 7, min: 59, max: 71 },
  { chapter: 8, min: 72, max: 76 },
  { chapter: 9, min: 77, max: 83 }
];

function getChapterForId(id) {
  const r = CHAPTER_RANGES.find((r) => id >= r.min && id <= r.max);
  return r ? r.chapter : null;
}
