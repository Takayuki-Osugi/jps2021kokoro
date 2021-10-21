// Define study
const study = lab.util.fromObject({
  "title": "root",
  "type": "lab.flow.Sequence",
  "parameters": {},
  "plugins": [
    {
      "type": "lab.plugins.Metadata",
      "path": undefined
    },
    {
      "type": "lab.plugins.Download",
      "filePrefix": "ws_kisoshin2021",
      "path": undefined
    }
  ],
  "metadata": {
    "title": "WS_kisoshin2021",
    "description": "",
    "repository": "",
    "contributors": "Masanori Kobayashi (Yamagata University)"
  },
  "messageHandlers": {},
  "files": {},
  "responses": {},
  "content": [
    {
      "type": "lab.flow.Loop",
      "templateParameters": [],
      "sample": {
        "mode": "draw-shuffle"
      },
      "files": {},
      "responses": {
        "": ""
      },
      "parameters": {},
      "messageHandlers": {
        "before:prepare": async function anonymous(
) {
let participantID;
//参加者番号がすでにあるかどうかをチェック
if(this.state.participantID)
{
  participantID = this.state.participantID;
}
//参加者番号が生成されていない場合に生成
else
{
  //JATOS以外の場合は参加者番号をランダム生成する
  if (typeof jatos == 'undefined') {
    participantID = this.random.range(10000, 100000);
  }
  //JATOS利用時は参加者番号にJATOSのWorker IDを置き換える
  else{
    participantID = await new Promise((resolve) => {
      jatos.onLoad(() => resolve(jatos.workerId))
    })
  }
}

//作成した(または読み込んだ)参加者番号をlab.jsに読み込む
this.options.templateParameters.push({participantID: participantID})
}
      },
      "title": "exp",
      "plugins": [
        {
          "type": "fullscreen",
          "message": "この実験はフルスクリーンで実施します。準備ができたら，下のボタンを押してください。",
          "hint": "\u003Cbutton\u003Eフルスクリーンを許可する\u003C\u002Fbutton\u003E",
          "path": "lab.plugins.Fullscreen"
        }
      ],
      "shuffleGroups": [],
      "template": {
        "type": "lab.flow.Sequence",
        "files": {},
        "responses": {
          "": ""
        },
        "parameters": {},
        "messageHandlers": {},
        "title": "expFlow",
        "content": [
          {
            "type": "lab.flow.Sequence",
            "files": {},
            "responses": {
              "": ""
            },
            "parameters": {},
            "messageHandlers": {},
            "title": "briefing",
            "content": [
              {
                "type": "lab.html.Page",
                "items": [
                  {
                    "type": "text",
                    "title": "",
                    "content": "\u003Cp\u003E本実験・調査の実施責任者は山形大学人文社会科学部の小林正法と大杉尚之です。本実験・調査への参加はあなたの任意によるものです。\u003C\u002Fp\u003E\n\u003Col\u003E\n    \u003Cli\u003E本実験・調査の目的\n        \u003Cbr\u003E単語の記憶について調べることが本実験・調査の目的です。\n    \u003C\u002Fli\u003E\n    \u003Cli\u003E本実験・調査の手続き\n        \u003Cbr\u003Eもし，あなたが本実験・調査に参加にした場合，あなたは単語の学習などの認知課題に取り組んでいただきます。この実験・調査の所要時間は約5分程度です。\n    \u003C\u002Fli\u003E\n    \u003Cli\u003E潜在的なリスク・苦痛など\n        \u003Cbr\u003E実験による多少の疲労は除き，潜在的なリスクや苦痛はありません。また，いつ，いかなる理由でも，自由に実験を中止していただけます（6.参加と中止もご参照ください）。\n    \u003C\u002Fli\u003E\n    \u003Cli\u003E参加による利益\n        \u003Cbr\u003Eあなたが本実験・調査に参加することで学習，認知，感情についての研究を発展に繋がります。\n    \u003C\u002Fli\u003E\n    \u003Cli\u003E匿名性の確保\n        \u003Cbr\u003E本実験・調査によって得られた情報は法律による開示請求を除き，匿名性が維持されます。匿名性は実験参加者番号の付与，統計的解析によって保たれます。収集されたデータは匿名化した上で，統計的処理を行い，論文や学会発表で公表されます。また，二次分析などを目的とし，匿名化した上で各個人のデータを公表する場合があります。これらの場合に個人が特定される形でデータが公表されることは決してありません。\n    \u003C\u002Fli\u003E\n    \u003Cli\u003E参加と中止\n        \u003Cbr\u003Eあなたは本実験・調査への参加もしくは不参加を自由に選択できます。また，参加した場合でも，いつでも，どのような理由でも，途中で実験・調査を中止することができます。\n        もし，途中で実験・調査を中止したくなった場合は，「ESCキー」を押した後，ウィンドウを閉じることで実験・調査を中止できます。\n    \u003C\u002Fli\u003E\n    \u003Cli\u003E実験・調査実施者への問い合わせ\n        \u003Cbr\u003E本実験・調査に対して質問がある場合は，実施責任者にお問い合わせください。\n    \u003C\u002Fli\u003E\n\u003C\u002Fol\u003E"
                  },
                  {
                    "required": true,
                    "type": "checkbox",
                    "options": [
                      {
                        "label": "上記の説明をよく読み，理解した上で，実験・調査への参加に同意します。",
                        "coding": "yes"
                      }
                    ],
                    "label": "実験・調査への参加に同意いただけますか？同意いただける方はチェックをお願いします。同意いただけない方は，ESCを押した後，ウィンドウを閉じてください。",
                    "name": "IC"
                  },
                  {
                    "required": true,
                    "type": "html",
                    "content": "\u003Cdiv class = 'content-horizontal-center'\u003E\u003Cbutton\u003E次へ\u003C\u002Fbutton\u003E\u003C\u002Fdiv\u003E",
                    "name": ""
                  }
                ],
                "scrollTop": true,
                "submitButtonText": "\u003E\u003E次へ",
                "submitButtonPosition": "hidden",
                "files": {},
                "responses": {
                  "": ""
                },
                "parameters": {},
                "messageHandlers": {},
                "title": "informedConsent"
              },
              {
                "type": "lab.html.Page",
                "items": [
                  {
                    "required": true,
                    "type": "input",
                    "label": "年齢",
                    "attributes": {
                      "type": "number",
                      "min": "0",
                      "max": "99"
                    },
                    "help": "年齢を半角数字で入力してください",
                    "name": "age"
                  },
                  {
                    "required": false,
                    "type": "input",
                    "label": "性別",
                    "help": "性別を入力してください（未回答でもかまいません）",
                    "name": "sex"
                  },
                  {
                    "required": true,
                    "type": "html",
                    "content": "\u003Cdiv class = 'content-horizontal-center'\u003E\u003Cbutton\u003E次へ\u003C\u002Fbutton\u003E\u003C\u002Fdiv\u003E",
                    "name": ""
                  }
                ],
                "scrollTop": true,
                "submitButtonText": "次へ",
                "submitButtonPosition": "hidden",
                "files": {},
                "responses": {
                  "": ""
                },
                "parameters": {},
                "messageHandlers": {},
                "title": "demographic"
              }
            ]
          },
          {
            "type": "lab.html.Page",
            "items": [
              {
                "type": "text",
                "title": "実験にご参加ありがとうございます。",
                "content": "本実験では，みなさんに様々に単語を覚えていただき，その後，覚えた単語を思い出していただきます。\n\u003Cbr\u003E\u003Cbr\u003E説明をよく読んでいただいた方は「次へ」を押して，実験を開始してください。"
              },
              {
                "required": true,
                "type": "html",
                "content": "\u003Cdiv class = 'content-horizontal-center'\u003E\u003Cbutton\u003E次へ\u003C\u002Fbutton\u003E\u003C\u002Fdiv\u003E",
                "name": ""
              }
            ],
            "scrollTop": true,
            "submitButtonText": "次へ",
            "submitButtonPosition": "hidden",
            "files": {
              "inst.001.png": "embedded\u002F3c3debfd0f862e2cd8b74bd5429a56760959056bfb6ba3c435ae0e1cc2442603.png"
            },
            "responses": {
              "": ""
            },
            "parameters": {},
            "messageHandlers": {},
            "title": "instruction"
          },
          {
            "type": "lab.flow.Sequence",
            "files": {},
            "responses": {
              "": ""
            },
            "parameters": {},
            "messageHandlers": {
              "before:prepare": function anonymous(
) {
let list = [];

list[0] = [
    '選挙',
    '候補者',
    '投票',
    '落選',
    '立候補',
    '演説',
    '当選',
    '参議院',
    '再選',
    'うるさい',
    'ポスター',
    '選ぶ',
    '不正',
    '違反',
    '買収',
    '車'
]

list[1] = [
    '時計',
    '時間',
    '時刻',
    '目覚まし',
    '時',
    '秒針',
    '刻む',
    '腕',
    '針',
    'スイス',
    '正確',
    '便利',
    'バンド',
    '柱',
    '動く',
    '音'
]

list[2] = [
    '重要',
    'ポイント',
    'チェック',
    '肝心',
    '重点',
    '文化財',
    '大事',
    '試験',
    '大切',
    '学問',
    '書類',
    '必要',
    '主要',
    '問題',
    '事項',
    '勉強'
]

list[3] = [
    '予防',
    'ワクチン',
    '接種',
    '注射',
    'うがい',
    'インフルエンザ',
    '防ぐ',
    '伝染病',
    '風邪',
    '虫歯',
    '結核',
    '防止',
    '防災',
    '防除',
    '治療',
    '検査'
]

list[4]  = [
    '礼儀',
    'おじぎ',
    'わきまえる',
    '作法',
    '目上',
    '行儀',
    '丁寧',
    '礼',
    '茶道',
    '儀礼',
    '道徳',
    '不作法',
    '守る',
    '正しさ',
    '礼節',
    '折り目'
]

list[5]  = [
  '希望',
  'かなえる',
  '願い',
  '夢',
  '未来',
  '願望',
  '期待',
  '将来',
  '望み',
  '抱く',
  '大志',
  '持つ',
  '楽しい',
  '失望',
  '絶望',
  '空'
]

list[6]  = [
  '悪魔',
  'サタン',
  '怖い',
  '天使',
  '魔女',
  '悪い',
  'お化け',
  '善人',
  '鬼',
  '醜い',
  '悪人',
  'デビル',
  '恐ろしい',
  '妖精',
  '神'
]

list[7]  = [
  '記録',
  '更新',
  '陸上',
  'オリンピック',
  'スポーツ',
  '日記',
  '協議',
  '残す',
  '書く',
  'ノート',
  '破る',
  '残る',
  '収録',
  '実録',
  '金字塔',
  '紙'
]

list = this.random.shuffle(list);

let listOldWordList=[];
let listNewWordList=[];
let lureOldWordList=[];
let lureNewWordList=[];
let recoOldList = [];
let recoNewList = [];

//学習リストを作成
for(i = 0; i < list.length/2; i++)
{
  for(j in list[i])
  {
    if(j == 0){
      recoOldList.push({item:list[i][j], listNo: i, itemType: 'lure', condition:'old'})
    }
    else{
      listOldWordList.push({item:list[i][j], listNo: i, itemType: 'list', condition:'old'})
    }
    if(j == 1 | j == 8 | j == 10)
    {
      recoOldList.push({item:list[i][j], listNo: i, itemType: 'list', condition:'old'})
    }
  }
}

//再認用に新奇語リストを作成
for(i = list.length/2; i < list.length; i++)
{
  for(j in list[i])
  {
    if(j == 0){
      recoNewList.push({item:list[i][j], listNo: i, itemType: 'lure', condition:'new'})
    }
    else{
      listNewWordList.push({item:list[i][j], listNo: i, itemType: 'list', condition:'new'})
    }
    if(j == 1 | j == 8 | j == 10)
    {
      recoNewList.push({item:list[i][j], listNo: i, itemType: 'list', condition:'new'})
    }
  }
}

window.listOldWordList = listOldWordList;
window.recoOldList = recoOldList;
window.recoNewList = recoNewList;
}
            },
            "title": "main",
            "content": [
              {
                "type": "lab.flow.Sequence",
                "files": {},
                "responses": {
                  "": ""
                },
                "parameters": {},
                "messageHandlers": {},
                "title": "learningPhase",
                "content": [
                  {
                    "type": "lab.html.Page",
                    "items": [
                      {
                        "type": "text",
                        "content": "これから様々な単語が各単語1秒ずつ表示されます。単語を覚えていってください。後ほど，記憶テストを行いますので，できるだけ努力して覚えてください！",
                        "title": "これから学習段階をはじめます"
                      },
                      {
                        "required": true,
                        "type": "text",
                        "content": "準備ができたら「次へ」を押してください。単語学習を開始します。"
                      },
                      {
                        "required": true,
                        "type": "html",
                        "content": "\u003Cdiv class = 'content-horizontal-center'\u003E\u003Cbutton\u003E次へ\u003C\u002Fbutton\u003E\u003C\u002Fdiv\u003E",
                        "name": ""
                      }
                    ],
                    "scrollTop": true,
                    "submitButtonText": "次へ",
                    "submitButtonPosition": "hidden",
                    "files": {},
                    "responses": {
                      "": ""
                    },
                    "parameters": {},
                    "messageHandlers": {},
                    "title": "learningInst",
                    "timeout": "10000"
                  },
                  {
                    "type": "lab.canvas.Frame",
                    "context": "\u003C!-- Nested components use this canvas --\u003E\n\u003Ccanvas \u002F\u003E",
                    "contextSelector": "canvas",
                    "files": {},
                    "responses": {
                      "": ""
                    },
                    "parameters": {},
                    "messageHandlers": {},
                    "title": "Frame",
                    "content": {
                      "type": "lab.flow.Sequence",
                      "files": {},
                      "responses": {
                        "": ""
                      },
                      "parameters": {},
                      "messageHandlers": {},
                      "title": "\u002F",
                      "content": [
                        {
                          "type": "lab.canvas.Screen",
                          "content": [
                            {
                              "type": "i-text",
                              "left": 0,
                              "top": -50,
                              "angle": 0,
                              "width": 347.44,
                              "height": 90.4,
                              "stroke": null,
                              "strokeWidth": 1,
                              "fill": "tomato",
                              "text": "START！",
                              "fontStyle": "normal",
                              "fontWeight": "normal",
                              "fontSize": "80",
                              "fontFamily": "sans-serif",
                              "lineHeight": 1.16,
                              "textAlign": "center"
                            }
                          ],
                          "viewport": [
                            800,
                            600
                          ],
                          "files": {},
                          "responses": {
                            "": ""
                          },
                          "parameters": {},
                          "messageHandlers": {},
                          "title": "start",
                          "timeout": "1000"
                        },
                        {
                          "type": "lab.canvas.Screen",
                          "content": [
                            {
                              "type": "i-text",
                              "left": 0,
                              "top": -54,
                              "angle": 0,
                              "width": 52.48,
                              "height": 90.4,
                              "stroke": null,
                              "strokeWidth": 1,
                              "fill": "black",
                              "text": "+",
                              "fontStyle": "normal",
                              "fontWeight": "normal",
                              "fontSize": "80",
                              "fontFamily": "sans-serif",
                              "lineHeight": 1.16,
                              "textAlign": "center"
                            }
                          ],
                          "viewport": [
                            800,
                            600
                          ],
                          "files": {},
                          "responses": {
                            "": ""
                          },
                          "parameters": {},
                          "messageHandlers": {},
                          "title": "fixation",
                          "timeout": "500"
                        },
                        {
                          "type": "lab.flow.Loop",
                          "templateParameters": [],
                          "sample": {
                            "mode": "sequential"
                          },
                          "files": {},
                          "responses": {
                            "": ""
                          },
                          "parameters": {},
                          "messageHandlers": {
                            "before:prepare": function anonymous(
) {
this.options.sample.mode = 'sequential';
const listOldWordList = window.listOldWordList;

for(value of listOldWordList)
{
  this.options.templateParameters.push(value)
}
}
                          },
                          "title": "learningBlock",
                          "shuffleGroups": [],
                          "template": {
                            "type": "lab.flow.Sequence",
                            "files": {},
                            "responses": {
                              "": ""
                            },
                            "parameters": {},
                            "messageHandlers": {},
                            "title": "learningTrial",
                            "content": [
                              {
                                "type": "lab.canvas.Screen",
                                "content": [
                                  {
                                    "type": "i-text",
                                    "left": 0,
                                    "top": -50,
                                    "angle": 0,
                                    "width": 916,
                                    "height": 90.4,
                                    "stroke": null,
                                    "strokeWidth": 1,
                                    "fill": "black",
                                    "text": "${this.parameters.item}",
                                    "fontStyle": "normal",
                                    "fontWeight": "normal",
                                    "fontSize": "80",
                                    "fontFamily": "sans-serif",
                                    "lineHeight": 1.16,
                                    "textAlign": "center"
                                  }
                                ],
                                "viewport": [
                                  800,
                                  600
                                ],
                                "files": {},
                                "responses": {
                                  "": ""
                                },
                                "parameters": {},
                                "messageHandlers": {},
                                "title": "listItem",
                                "timeout": "1000"
                              },
                              {
                                "type": "lab.canvas.Screen",
                                "content": [],
                                "viewport": [
                                  800,
                                  600
                                ],
                                "files": {},
                                "responses": {
                                  "": ""
                                },
                                "parameters": {},
                                "messageHandlers": {},
                                "title": "blank",
                                "timeout": "500"
                              }
                            ]
                          }
                        }
                      ]
                    }
                  }
                ]
              },
              {
                "type": "lab.flow.Sequence",
                "files": {},
                "responses": {
                  "": ""
                },
                "parameters": {},
                "messageHandlers": {},
                "title": "mathPhase",
                "content": [
                  {
                    "type": "lab.html.Page",
                    "items": [
                      {
                        "type": "text",
                        "content": "これから計算課題に取り組んでいただきます。画面表示された計算式が正しいかどうかを判断し，ボタンを押して回答してください。\n\n\u003Cbr\u003E\u003Cbr\u003E10秒経つと自動的に開始します。"
                      }
                    ],
                    "scrollTop": true,
                    "submitButtonText": "次へ",
                    "submitButtonPosition": "hidden",
                    "files": {},
                    "responses": {
                      "": ""
                    },
                    "parameters": {},
                    "messageHandlers": {},
                    "title": "mathInst",
                    "timeout": "10000"
                  },
                  {
                    "type": "lab.canvas.Frame",
                    "context": "\u003C!-- Nested components use this canvas --\u003E\n\u003Ccanvas \u002F\u003E",
                    "contextSelector": "canvas",
                    "files": {},
                    "responses": {
                      "": ""
                    },
                    "parameters": {},
                    "messageHandlers": {},
                    "title": "Frame",
                    "content": {
                      "type": "lab.flow.Sequence",
                      "files": {},
                      "responses": {
                        "": ""
                      },
                      "parameters": {},
                      "messageHandlers": {},
                      "title": "\u002F",
                      "content": [
                        {
                          "type": "lab.canvas.Screen",
                          "content": [
                            {
                              "type": "i-text",
                              "left": 0,
                              "top": 0,
                              "angle": 0,
                              "width": 199.49,
                              "height": 54.24,
                              "stroke": null,
                              "strokeWidth": 1,
                              "fill": "tomato",
                              "text": "START！",
                              "fontStyle": "normal",
                              "fontWeight": "normal",
                              "fontSize": "48",
                              "fontFamily": "sans-serif",
                              "lineHeight": 1.16,
                              "textAlign": "center"
                            }
                          ],
                          "viewport": [
                            800,
                            600
                          ],
                          "files": {},
                          "responses": {
                            "": ""
                          },
                          "parameters": {},
                          "messageHandlers": {},
                          "title": "start",
                          "timeout": "1000"
                        },
                        {
                          "type": "lab.flow.Loop",
                          "templateParameters": [
                            {
                              "correctResponse": false
                            },
                            {
                              "correctResponse": true
                            }
                          ],
                          "sample": {
                            "mode": "draw-shuffle",
                            "n": "100"
                          },
                          "files": {},
                          "responses": {
                            "": ""
                          },
                          "parameters": {},
                          "messageHandlers": {},
                          "title": "mathBlock",
                          "timeout": "30000",
                          "shuffleGroups": [],
                          "template": {
                            "type": "lab.flow.Sequence",
                            "files": {},
                            "responses": {
                              "": ""
                            },
                            "parameters": {},
                            "messageHandlers": {},
                            "title": "mathTrial",
                            "content": [
                              {
                                "type": "lab.canvas.Screen",
                                "content": [
                                  {
                                    "type": "circle",
                                    "left": -289,
                                    "top": 190,
                                    "angle": 0,
                                    "width": 220,
                                    "height": 220,
                                    "stroke": null,
                                    "strokeWidth": 1,
                                    "fill": "tomato"
                                  },
                                  {
                                    "type": "circle",
                                    "left": 289,
                                    "top": 189,
                                    "angle": 0,
                                    "width": 220,
                                    "height": 220,
                                    "stroke": null,
                                    "strokeWidth": 1,
                                    "fill": "royalblue"
                                  },
                                  {
                                    "type": "i-text",
                                    "left": 289,
                                    "top": 189,
                                    "angle": 0,
                                    "width": 150,
                                    "height": 56.5,
                                    "stroke": null,
                                    "strokeWidth": 1,
                                    "fill": "#ffffff",
                                    "text": "正しい",
                                    "fontStyle": "normal",
                                    "fontWeight": "bold",
                                    "fontSize": "50",
                                    "fontFamily": "sans-serif",
                                    "lineHeight": 1.16,
                                    "textAlign": "center"
                                  },
                                  {
                                    "type": "aoi",
                                    "left": 290,
                                    "top": 189,
                                    "angle": 0,
                                    "width": 220,
                                    "height": 220,
                                    "stroke": null,
                                    "strokeWidth": 1,
                                    "fill": "rgba(0, 0, 0, 0.2)",
                                    "label": "trueBtn"
                                  },
                                  {
                                    "type": "i-text",
                                    "left": 0,
                                    "top": -50,
                                    "angle": 0,
                                    "width": 682.75,
                                    "height": 54.24,
                                    "stroke": "",
                                    "strokeWidth": 0,
                                    "fill": "black",
                                    "text": "${this.parameters.mathText }",
                                    "fontStyle": "normal",
                                    "fontWeight": "normal",
                                    "fontSize": "80",
                                    "fontFamily": "sans-serif",
                                    "lineHeight": 1.16,
                                    "textAlign": "center"
                                  },
                                  {
                                    "type": "i-text",
                                    "left": 0,
                                    "top": -200,
                                    "angle": 0,
                                    "width": 480,
                                    "height": 78.11,
                                    "stroke": null,
                                    "strokeWidth": 1,
                                    "fill": "#000000",
                                    "text": "計算結果が正しいかを判断し，\nボタンを押して回答してください",
                                    "fontStyle": "normal",
                                    "fontWeight": "normal",
                                    "fontSize": "32",
                                    "fontFamily": "sans-serif",
                                    "lineHeight": 1.16,
                                    "textAlign": "center"
                                  },
                                  {
                                    "type": "i-text",
                                    "left": -285,
                                    "top": 190,
                                    "angle": 0,
                                    "width": 100,
                                    "height": 56.5,
                                    "stroke": null,
                                    "strokeWidth": 1,
                                    "fill": "#ffffff",
                                    "text": "誤り",
                                    "fontStyle": "normal",
                                    "fontWeight": "bold",
                                    "fontSize": "50",
                                    "fontFamily": "sans-serif",
                                    "lineHeight": 1.16,
                                    "textAlign": "center"
                                  },
                                  {
                                    "type": "aoi",
                                    "left": -288,
                                    "top": 189,
                                    "angle": 0,
                                    "width": 220,
                                    "height": 220,
                                    "stroke": null,
                                    "strokeWidth": 1,
                                    "fill": "rgba(0, 0, 0, 0.2)",
                                    "label": "falseBtn"
                                  }
                                ],
                                "viewport": [
                                  800,
                                  600
                                ],
                                "files": {},
                                "responses": {
                                  "click @falseBtn": "false",
                                  "click @trueBtn": "true"
                                },
                                "parameters": {},
                                "messageHandlers": {
                                  "before:prepare": function anonymous(
) {
let mathArray = [];
let mathAnswer = 0;

//1〜9の範囲からランダムに3つの数字を生成
//合計をmathAnswerに入れておく
for (i = 0; i < 3; i++)
{
  mathArray[i] = Math.floor(Math.random()*10) + 1
  mathAnswer += mathArray[i]
}

//誤った回答を出す場合は乱数を答えに加える
if(this.parameters.correctResponse == false)
{ 
  mathAnswer　+= this.random.choice([-2,-1,1,2])
}

//数式をテキストとしてまとめる
const mathText = String(mathArray[0]) + ' + ' + String(mathArray[1]) + ' + ' + String(mathArray[2]) + ' = ' + String(mathAnswer) + ' ?';
this.parameters.mathText = mathText;
}
                                },
                                "title": "math",
                                "correctResponse": "${this.parameters.correctResponse}"
                              },
                              {
                                "type": "lab.canvas.Screen",
                                "content": [
                                  {
                                    "type": "i-text",
                                    "left": 0,
                                    "top": -50,
                                    "angle": 0,
                                    "width": 1041.44,
                                    "height": 90.4,
                                    "stroke": null,
                                    "strokeWidth": 1,
                                    "fill": "tomato",
                                    "text": "${state.correct? '○' : '×'}",
                                    "fontStyle": "normal",
                                    "fontWeight": "bold",
                                    "fontSize": "80",
                                    "fontFamily": "sans-serif",
                                    "lineHeight": 1.16,
                                    "textAlign": "center"
                                  }
                                ],
                                "viewport": [
                                  800,
                                  600
                                ],
                                "files": {},
                                "responses": {
                                  "": ""
                                },
                                "parameters": {},
                                "messageHandlers": {},
                                "title": "feedback",
                                "timeout": "500",
                                "tardy": true
                              },
                              {
                                "type": "lab.canvas.Screen",
                                "content": [],
                                "viewport": [
                                  800,
                                  600
                                ],
                                "files": {},
                                "responses": {
                                  "": ""
                                },
                                "parameters": {},
                                "messageHandlers": {},
                                "title": "blank",
                                "timeout": "500"
                              }
                            ]
                          }
                        }
                      ]
                    }
                  }
                ]
              },
              {
                "type": "lab.flow.Sequence",
                "files": {},
                "responses": {
                  "": ""
                },
                "parameters": {},
                "messageHandlers": {},
                "title": "testPhase",
                "content": [
                  {
                    "type": "lab.html.Page",
                    "items": [
                      {
                        "type": "text",
                        "content": "これから記憶テストに取り組んでいただきます。画面に以下のいずれかの単語が表示されます。\n\u003Cul\u003E\n\u003Cli\u003E先ほど覚えた単語（古い単語）\u003C\u002Fli\u003E\n\u003Cli\u003E先ほど覚えていない単語（新しい単語）\u003C\u002Fli\u003E\n\u003C\u002Ful\u003E\n画面に表示された単語が，どちらかを判断し，ボタンを押してください。\n\u003Cbr\u003E\u003Cbr\u003E\n「次へ」を押すと記憶テストを開始します。"
                      },
                      {
                        "required": true,
                        "type": "html",
                        "content": "\u003Cdiv class = 'content-horizontal-center'\u003E\u003Cbutton\u003E次へ\u003C\u002Fbutton\u003E\u003C\u002Fdiv\u003E",
                        "name": ""
                      }
                    ],
                    "scrollTop": true,
                    "submitButtonText": "次へ",
                    "submitButtonPosition": "hidden",
                    "files": {},
                    "responses": {
                      "": ""
                    },
                    "parameters": {},
                    "messageHandlers": {},
                    "title": "testInst",
                    "timeout": "10000"
                  },
                  {
                    "type": "lab.canvas.Frame",
                    "context": "\u003C!-- Nested components use this canvas --\u003E\n\u003Ccanvas \u002F\u003E",
                    "contextSelector": "canvas",
                    "files": {},
                    "responses": {
                      "": ""
                    },
                    "parameters": {},
                    "messageHandlers": {},
                    "title": "Frame",
                    "content": {
                      "type": "lab.flow.Sequence",
                      "files": {},
                      "responses": {
                        "": ""
                      },
                      "parameters": {},
                      "messageHandlers": {},
                      "title": "\u002F",
                      "content": [
                        {
                          "type": "lab.canvas.Screen",
                          "content": [
                            {
                              "type": "i-text",
                              "left": 0,
                              "top": -50,
                              "angle": 0,
                              "width": 347.44,
                              "height": 90.4,
                              "stroke": null,
                              "strokeWidth": 1,
                              "fill": "tomato",
                              "text": "START！",
                              "fontStyle": "normal",
                              "fontWeight": "normal",
                              "fontSize": "80",
                              "fontFamily": "sans-serif",
                              "lineHeight": 1.16,
                              "textAlign": "center"
                            }
                          ],
                          "viewport": [
                            800,
                            600
                          ],
                          "files": {},
                          "responses": {
                            "": ""
                          },
                          "parameters": {},
                          "messageHandlers": {},
                          "title": "start",
                          "timeout": "1000"
                        },
                        {
                          "type": "lab.canvas.Screen",
                          "content": [
                            {
                              "type": "circle",
                              "left": 289,
                              "top": 188,
                              "angle": 0,
                              "width": 220,
                              "height": 220,
                              "stroke": null,
                              "strokeWidth": 1,
                              "fill": "royalblue"
                            },
                            {
                              "type": "i-text",
                              "left": 288,
                              "top": 188,
                              "angle": 0,
                              "width": 160,
                              "height": 97.63,
                              "stroke": "",
                              "strokeWidth": 1,
                              "fill": "#ffffff",
                              "text": "見た\n（古い）",
                              "fontStyle": "normal",
                              "fontWeight": "bold",
                              "fontSize": "40",
                              "fontFamily": "sans-serif",
                              "lineHeight": 1.16,
                              "textAlign": "center"
                            },
                            {
                              "type": "circle",
                              "left": -289,
                              "top": 189,
                              "angle": 0,
                              "width": 220,
                              "height": 220,
                              "stroke": "",
                              "strokeWidth": 1,
                              "fill": "tomato"
                            },
                            {
                              "type": "i-text",
                              "left": -290,
                              "top": 190,
                              "angle": 0,
                              "width": 200,
                              "height": 97.63,
                              "stroke": "",
                              "strokeWidth": 1,
                              "fill": "#ffffff",
                              "text": "見てない\n（新しい）",
                              "fontStyle": "normal",
                              "fontWeight": "bold",
                              "fontSize": "40",
                              "fontFamily": "sans-serif",
                              "lineHeight": 1.16,
                              "textAlign": "center"
                            },
                            {
                              "type": "i-text",
                              "left": 0,
                              "top": 0,
                              "angle": 0,
                              "width": 52.48,
                              "height": 90.4,
                              "stroke": null,
                              "strokeWidth": 1,
                              "fill": "black",
                              "text": "+",
                              "fontStyle": "normal",
                              "fontWeight": "normal",
                              "fontSize": "80",
                              "fontFamily": "sans-serif",
                              "lineHeight": 1.16,
                              "textAlign": "center"
                            }
                          ],
                          "viewport": [
                            800,
                            600
                          ],
                          "files": {},
                          "responses": {},
                          "parameters": {},
                          "messageHandlers": {},
                          "title": "fixation",
                          "timeout": "1000"
                        },
                        {
                          "type": "lab.flow.Loop",
                          "templateParameters": [],
                          "sample": {
                            "mode": "draw-shuffle",
                            "n": ""
                          },
                          "files": {},
                          "responses": {
                            "": ""
                          },
                          "parameters": {},
                          "messageHandlers": {
                            "before:prepare": function anonymous(
) {
let recoOldList = window.recoOldList;
let recoNewList = window.recoNewList;
let itemList = [];

for(value of recoOldList)
{
  itemList.push(value)
}

for(value of recoNewList)
{
  itemList.push(value)
}

itemList = this.random.shuffle(itemList)

for(value of itemList)
{
  this.options.templateParameters.push(value)
}
}
                          },
                          "title": "testBlock",
                          "shuffleGroups": [],
                          "template": {
                            "type": "lab.flow.Sequence",
                            "files": {},
                            "responses": {
                              "": ""
                            },
                            "parameters": {},
                            "messageHandlers": {},
                            "title": "testTrial",
                            "content": [
                              {
                                "type": "lab.canvas.Screen",
                                "content": [
                                  {
                                    "type": "i-text",
                                    "left": 0,
                                    "top": -50,
                                    "angle": 0,
                                    "width": 916,
                                    "height": 90.4,
                                    "stroke": null,
                                    "strokeWidth": 1,
                                    "fill": "black",
                                    "text": "${this.parameters.item}",
                                    "fontStyle": "normal",
                                    "fontWeight": "normal",
                                    "fontSize": "80",
                                    "fontFamily": "sans-serif",
                                    "lineHeight": 1.16,
                                    "textAlign": "center"
                                  },
                                  {
                                    "type": "circle",
                                    "left": 289,
                                    "top": 188,
                                    "angle": 0,
                                    "width": 220,
                                    "height": 220,
                                    "stroke": null,
                                    "strokeWidth": 1,
                                    "fill": "royalblue"
                                  },
                                  {
                                    "type": "i-text",
                                    "left": 288,
                                    "top": 188,
                                    "angle": 0,
                                    "width": 160,
                                    "height": 97.63,
                                    "stroke": "",
                                    "strokeWidth": 1,
                                    "fill": "#ffffff",
                                    "text": "見た\n（古い）",
                                    "fontStyle": "normal",
                                    "fontWeight": "bold",
                                    "fontSize": "40",
                                    "fontFamily": "sans-serif",
                                    "lineHeight": 1.16,
                                    "textAlign": "center"
                                  },
                                  {
                                    "type": "circle",
                                    "left": -289,
                                    "top": 189,
                                    "angle": 0,
                                    "width": 220,
                                    "height": 220,
                                    "stroke": "",
                                    "strokeWidth": 1,
                                    "fill": "tomato"
                                  },
                                  {
                                    "type": "i-text",
                                    "left": -290,
                                    "top": 190,
                                    "angle": 0,
                                    "width": 200,
                                    "height": 97.63,
                                    "stroke": "",
                                    "strokeWidth": 1,
                                    "fill": "#ffffff",
                                    "text": "見てない\n（新しい）",
                                    "fontStyle": "normal",
                                    "fontWeight": "bold",
                                    "fontSize": "40",
                                    "fontFamily": "sans-serif",
                                    "lineHeight": 1.16,
                                    "textAlign": "center"
                                  },
                                  {
                                    "type": "aoi",
                                    "left": -288,
                                    "top": 189,
                                    "angle": 0,
                                    "width": 220,
                                    "height": 220,
                                    "stroke": null,
                                    "strokeWidth": 1,
                                    "fill": "rgba(0, 0, 0, 0.2)",
                                    "label": "newBtn"
                                  },
                                  {
                                    "type": "aoi",
                                    "left": 288,
                                    "top": 186,
                                    "angle": 0,
                                    "width": 220,
                                    "height": 220,
                                    "stroke": null,
                                    "strokeWidth": 1,
                                    "fill": "rgba(0, 0, 0, 0.2)",
                                    "label": "oldBtn"
                                  }
                                ],
                                "viewport": [
                                  800,
                                  600
                                ],
                                "files": {},
                                "responses": {
                                  "click @newBtn": "new",
                                  "click @oldBtn": "old"
                                },
                                "parameters": {},
                                "messageHandlers": {
                                  "end": function anonymous(
) {
//old反応
if(this.data.response == "old")
{
  //old項目
  if(this.parameters.condition == "old")
  {
    if(this.parameters.itemType == "list")
    {
      this.data.responseType = "hit"
    }
    if(this.parameters.itemType == "lure")
    {
      this.data.responseType = "falseRecognition"
    }
  }
  //new項目
  if(this.parameters.condition == "new")
  {
    if(this.parameters.itemType == "list")
    {
      this.data.responseType = "falseAlarm"
    }
    if(this.parameters.itemType == "lure")
    {
      this.data.responseType = "falseRecognitionNew"
    }
  }
}
//new反応
if(this.data.response == "new")
{
  //old項目
  if(this.parameters.condition == "old")
  {
    if(this.parameters.itemType == "list")
    {
      this.data.responseType = "miss"
    }
    if(this.parameters.itemType == "lure")
    {
      this.data.responseType = "falseRejection"
    }
  }
  //new項目
  if(this.parameters.condition == "new")
  {
    if(this.parameters.itemType == "list")
    {
      this.data.responseType = "correctRejection"
    }
    if(this.parameters.itemType == "lure")
    {
      this.data.responseType = "correctFalseRejection"
    }
  }
}
}
                                },
                                "title": "testItem"
                              },
                              {
                                "type": "lab.canvas.Screen",
                                "content": [
                                  {
                                    "type": "circle",
                                    "left": 289,
                                    "top": 188,
                                    "angle": 0,
                                    "width": 220,
                                    "height": 220,
                                    "stroke": null,
                                    "strokeWidth": 1,
                                    "fill": "royalblue"
                                  },
                                  {
                                    "type": "i-text",
                                    "left": 288,
                                    "top": 188,
                                    "angle": 0,
                                    "width": 160,
                                    "height": 97.63,
                                    "stroke": "",
                                    "strokeWidth": 1,
                                    "fill": "#ffffff",
                                    "text": "見た\n（古い）",
                                    "fontStyle": "normal",
                                    "fontWeight": "bold",
                                    "fontSize": "40",
                                    "fontFamily": "sans-serif",
                                    "lineHeight": 1.16,
                                    "textAlign": "center"
                                  },
                                  {
                                    "type": "circle",
                                    "left": -289,
                                    "top": 189,
                                    "angle": 0,
                                    "width": 220,
                                    "height": 220,
                                    "stroke": "",
                                    "strokeWidth": 1,
                                    "fill": "tomato"
                                  },
                                  {
                                    "type": "i-text",
                                    "left": -290,
                                    "top": 190,
                                    "angle": 0,
                                    "width": 160,
                                    "height": 78.11,
                                    "stroke": "",
                                    "strokeWidth": 1,
                                    "fill": "#ffffff",
                                    "text": "見てない\n（新しい）",
                                    "fontStyle": "normal",
                                    "fontWeight": "bold",
                                    "fontSize": "40",
                                    "fontFamily": "sans-serif",
                                    "lineHeight": 1.16,
                                    "textAlign": "center"
                                  }
                                ],
                                "viewport": [
                                  800,
                                  600
                                ],
                                "files": {},
                                "responses": {},
                                "parameters": {},
                                "messageHandlers": {},
                                "title": "blank",
                                "timeout": "500"
                              }
                            ]
                          }
                        }
                      ]
                    }
                  }
                ]
              }
            ]
          },
          {
            "type": "lab.flow.Sequence",
            "files": {},
            "responses": {
              "": ""
            },
            "parameters": {},
            "messageHandlers": {},
            "title": "deberifing",
            "content": [
              {
                "type": "lab.html.Screen",
                "files": {},
                "responses": {
                  "click button#next": "next"
                },
                "parameters": {},
                "messageHandlers": {
                  "run": function anonymous(
) {
//過去データ
const previousMean = 86.5;
const previousError = 2;

//本実験のデータ
//任意のコンポーネントの変数のみを抽出する
const rowName = "testItem"　//行名（正誤が出力されるコンポーネント名）

//列名（従属変数名)
const colName = "responseType"

//データを抽出
const ds = this.options.datastore
let yourData = ds.extract(colName, rowName)

//平均を計算
let lureCount = 0;
for(value of yourData)
{
  if(value == "falseRecognition")
  {
    lureCount += 1
  }
}

let yourMean = (lureCount / 4) * 100

//グラフ設定
new Chart(document.getElementById('plotArea').getContext('2d'), {
  type: 'barWithErrorBars',
  data: {
    labels: ['あなたのデータ', '過去のデータ'],
    datasets: [
      {
        barThickness: 100,
        data: [
          {
            label:'あなたのデータ',
            y: yourMean
          },
          {
            label:'過去のデータ',
            y: previousMean,
            yMin: previousMean-previousError,
            yMax: previousMean+previousError,
          },
        ],
        //棒グラフの色
        backgroundColor: [
          'rgba(255, 99, 132, 0.5)',
          'rgba(54, 162, 235, 0.5)'
        ],
      }
    ],
  },
  //y軸の最小と最大を指定
  options : {
    scales : {
      y : {
        min: 0,
        max: 100,
      }
    },
    plugins:{
      legend: {
        display: false
      }
    }
  }
});
}
                },
                "title": "displayMeanCorrectRate_with_other",
                "content": "\u003Cheader\u003E\n  虚再認率（%)\n\u003C\u002Fheader\u003E\n\u003Cmain class = \"content-horizontal-center content-vertical-center\"\u003E\n  \u003Cdiv class = \"w-l\"\u003E\n    \u003Cdiv\u003E\n    \u003Ccanvas id = \"plotArea\"\u003E\u003C\u002Fcanvas\u003E\n    \u003C\u002Fdiv\u003E\n    \u003Cdiv\u003E\n      \u003Cp style = \"text-align: left\"\u003E\n        グラフは「今回，覚えていない単語を誤って覚えていた（古い）」と判断した割合です。本来は0％になるべき数値になります。この値が高いほど，偽物の記憶（虚記憶）が生じた程度を示しています。\n        \u003Cbr\u003E左側のグラフは，この実験の結果（あなたの実験結果）です。右側のグラフは，100名分のデータの平均値です。比較してみましょう。\n      \u003C\u002Fp\u003E\n    \u003C\u002Fdiv\u003E\n  \u003C\u002Fdiv\u003E\n\u003C\u002Fmain\u003E\n\u003Cfooter\u003E\n  \u003Cbutton id = \"next\"\u003E次へ\u003C\u002Fbutton\u003E\n\u003C\u002Ffooter\u003E",
                "tardy": true
              },
              {
                "type": "lab.html.Page",
                "items": [
                  {
                    "type": "text",
                    "title": "\u003Cspan style = \"color: tomato\"\u003Eフォールスメモリの実験はこれで終了です。\u003C\u002Fspan\u003E",
                    "content": "引き続き，もう1つの実験に取り組んでいただきます。準備ができたら，「次へ」をクリックしてください。"
                  },
                  {
                    "required": true,
                    "type": "html",
                    "content": "\u003Cdiv class=\"content-horizontal-center\"\u003E\u003Cbutton\u003E次へ\u003C\u002Fbutton\u003E\u003C\u002Fdiv\u003E",
                    "name": ""
                  }
                ],
                "scrollTop": true,
                "submitButtonText": "Continue →",
                "submitButtonPosition": "hidden",
                "files": {},
                "responses": {
                  "": ""
                },
                "parameters": {},
                "messageHandlers": {},
                "title": "thanks"
              }
            ]
          },
          {
            "type": "lab.flow.Loop",
            "templateParameters": [
              {
                "exp": "changeBlindness",
                "": ""
              }
            ],
            "sample": {
              "mode": "draw-shuffle"
            },
            "files": {},
            "responses": {
              "": ""
            },
            "parameters": {},
            "messageHandlers": {},
            "title": "changeBlindness",
            "shuffleGroups": [],
            "template": {
              "type": "lab.flow.Sequence",
              "files": {},
              "responses": {
                "": ""
              },
              "parameters": {},
              "messageHandlers": {},
              "title": "\u002F",
              "content": [
                {
                  "type": "lab.html.Page",
                  "items": [
                    {
                      "type": "text",
                      "title": "注意課題",
                      "content": "注意課題では，画面上の変化を検出する課題をしていただきます。"
                    },
                    {
                      "required": true,
                      "type": "text",
                      "content": "",
                      "title": "準備ができた方は「次へ」を押して，開始してください。"
                    },
                    {
                      "required": true,
                      "type": "html",
                      "content": "\u003Cdiv class = 'content-horizontal-center'\u003E\u003Cbutton id = \"nextBtn\"\u003E次へ\u003C\u002Fbutton\u003E\u003C\u002Fdiv\u003E",
                      "name": ""
                    }
                  ],
                  "scrollTop": true,
                  "submitButtonText": "次へ",
                  "submitButtonPosition": "hidden",
                  "files": {
                    "inst.001.png": "embedded\u002F3c3debfd0f862e2cd8b74bd5429a56760959056bfb6ba3c435ae0e1cc2442603.png"
                  },
                  "responses": {
                    "": ""
                  },
                  "parameters": {},
                  "messageHandlers": {},
                  "title": "Instruction"
                },
                {
                  "type": "lab.flow.Sequence",
                  "files": {},
                  "responses": {
                    "": ""
                  },
                  "parameters": {},
                  "messageHandlers": {
                    "before:prepare": function anonymous(
) {
if(this.parameters.participantID%2==1){
  this.parameters.stimset1 = 1;
  this.parameters.stimset2 = 2;  
}else{
  this.parameters.stimset1 = 2;
  this.parameters.stimset2 = 1;  
}
}
                  },
                  "title": "Main",
                  "content": [
                    {
                      "type": "lab.flow.Sequence",
                      "files": {},
                      "responses": {
                        "": ""
                      },
                      "parameters": {},
                      "messageHandlers": {},
                      "title": "Session1",
                      "content": [
                        {
                          "type": "lab.html.Page",
                          "items": [
                            {
                              "type": "text",
                              "content": "2枚の写真画像が繰り返し交互に提示されます。画像の一部が変化していますので，変化を見つけたらクリックしてください。その後，画像のどの領域（左上，右上，左下，右下）が変化したか, 該当する位置でクリックしてください。\n\n「次へ」ボタンを押すと練習を開始します。全部で2試行あります。",
                              "title": "変化検出課題"
                            },
                            {
                              "required": true,
                              "type": "image",
                              "width": "",
                              "height": "",
                              "src": "${ this.files[\"inst1.jpg\"] }",
                              "name": ""
                            },
                            {
                              "required": true,
                              "type": "html",
                              "content": "\u003Cdiv class = 'content-horizontal-center'\u003E\u003Cbutton id = \"nextBtn\"\u003E次へ\u003C\u002Fbutton\u003E\u003C\u002Fdiv\u003E",
                              "name": ""
                            }
                          ],
                          "scrollTop": true,
                          "submitButtonText": "Continue →",
                          "submitButtonPosition": "hidden",
                          "files": {
                            "inst1.jpg": "embedded\u002F26436184ea9315dbc44558467d1128bae6f3d4b988a7f8f897e7aed8c87cadfd.jpg"
                          },
                          "responses": {
                            "": ""
                          },
                          "parameters": {},
                          "messageHandlers": {},
                          "title": "Inst1",
                          "width": "l"
                        },
                        {
                          "type": "lab.canvas.Frame",
                          "context": "\u003C!-- Nested components use this canvas --\u003E\n\u003Ccanvas \u002F\u003E",
                          "contextSelector": "canvas",
                          "files": {},
                          "responses": {
                            "": ""
                          },
                          "parameters": {},
                          "messageHandlers": {},
                          "title": "Frame",
                          "content": {
                            "type": "lab.flow.Loop",
                            "templateParameters": [
                              {
                                "changeloc": "UL",
                                "stimset": "0",
                                "trialNO": "1",
                                "blankid": "0"
                              },
                              {
                                "changeloc": "BR",
                                "stimset": "0",
                                "trialNO": "2",
                                "blankid": "0"
                              }
                            ],
                            "sample": {
                              "mode": "sequential"
                            },
                            "files": {},
                            "responses": {
                              "": ""
                            },
                            "parameters": {},
                            "messageHandlers": {},
                            "title": "Set_Pra",
                            "shuffleGroups": [
                              [
                                "changeloc",
                                "stimset",
                                "blankid"
                              ]
                            ],
                            "template": {
                              "type": "lab.flow.Sequence",
                              "files": {},
                              "responses": {
                                "": ""
                              },
                              "parameters": {},
                              "messageHandlers": {
                                "before:prepare": function anonymous(
) {
this.parameters.feedback;

}
                              },
                              "title": "Trials_p",
                              "content": [
                                {
                                  "type": "lab.canvas.Screen",
                                  "content": [
                                    {
                                      "type": "i-text",
                                      "left": 0,
                                      "top": 0,
                                      "angle": 0,
                                      "width": 526.56,
                                      "height": 36.16,
                                      "stroke": null,
                                      "strokeWidth": 1,
                                      "fill": "black",
                                      "text": "${this.parameters.trialNO} 試行目",
                                      "fontStyle": "normal",
                                      "fontWeight": "normal",
                                      "fontSize": 32,
                                      "fontFamily": "sans-serif",
                                      "lineHeight": 1.16,
                                      "textAlign": "center"
                                    },
                                    {
                                      "type": "i-text",
                                      "left": 0,
                                      "top": 50,
                                      "angle": 0,
                                      "width": 350.08,
                                      "height": 36.16,
                                      "stroke": "#aaaaaa",
                                      "strokeWidth": 1,
                                      "fill": "black",
                                      "text": "画面をクリックして次へ",
                                      "fontStyle": "normal",
                                      "fontWeight": "normal",
                                      "fontSize": 32,
                                      "fontFamily": "sans-serif",
                                      "lineHeight": 1.16,
                                      "textAlign": "center"
                                    }
                                  ],
                                  "viewport": [
                                    800,
                                    600
                                  ],
                                  "files": {},
                                  "responses": {
                                    "": ""
                                  },
                                  "parameters": {},
                                  "messageHandlers": {
                                    "before:prepare": function anonymous(
) {
this.options.events['click'] = function(e) {
  this.end();
}

}
                                  },
                                  "title": "Fix_p"
                                },
                                {
                                  "type": "lab.canvas.Screen",
                                  "content": [],
                                  "viewport": [
                                    800,
                                    600
                                  ],
                                  "files": {},
                                  "responses": {
                                    "": ""
                                  },
                                  "parameters": {},
                                  "messageHandlers": {},
                                  "title": "Blank_p",
                                  "timeout": "500"
                                },
                                {
                                  "type": "lab.canvas.Screen",
                                  "content": [],
                                  "viewport": [
                                    800,
                                    600
                                  ],
                                  "files": {},
                                  "responses": {
                                    "": ""
                                  },
                                  "parameters": {},
                                  "messageHandlers": {
                                    "before:prepare": function anonymous(
) {
let stimset = this.parameters.stimset;
let changeloc = this.parameters.changeloc;
let blankid = this.parameters.blankid;
const stim_img = [];

for (let i=1; i< 5; i++){
  stim_img[i] = new Image();
  if(blankid == 1){
    if(i==1){
      stim_img[i].src = "static/SS" + stimset + "_" + changeloc + 1 + ".jpg";
    }else if(i==3){ 
      stim_img[i].src = "static/SS" + stimset + "_" + changeloc + 2 + ".jpg";  
    }else{
      stim_img[i].src = "static/blank.jpg";
    }
  }else{
     if(i==1){
      stim_img[i].src = "static/SS" + stimset + "_" + changeloc + 1 + ".jpg";
    }else if(i==2){ 
      stim_img[i].src = "static/SS" + stimset + "_" + changeloc + 2 + ".jpg";  
    }else if(i==3){ 
      stim_img[i].src = "static/SS" + stimset + "_" + changeloc + 1 + ".jpg";  
    }else{
      stim_img[i].src = "static/SS" + stimset + "_" + changeloc + 2 + ".jpg"; 
    }   
  }
}

this.options.events['click'] = function(e) {
  this.end();
}

this.options.renderFunction = (t, canvas, ctx, obj) => {
  num = Math.floor(t/200);
  ctx.drawImage(stim_img[num%4+1],-400, -300);
  this.queueAnimationFrame();
}
}
                                  },
                                  "title": "Motion Display_p",
                                  "skip": "${ parameters.feefback2 ==1}"
                                },
                                {
                                  "type": "lab.canvas.Screen",
                                  "content": [],
                                  "viewport": [
                                    800,
                                    600
                                  ],
                                  "files": {},
                                  "responses": {
                                    "": ""
                                  },
                                  "parameters": {},
                                  "messageHandlers": {
                                    "before:prepare": function anonymous(
) {
this.parameters.CBRT=this.state.duration;
}
                                  },
                                  "title": "Blank_p",
                                  "timeout": "500",
                                  "tardy": true
                                },
                                {
                                  "type": "lab.canvas.Screen",
                                  "content": [],
                                  "viewport": [
                                    800,
                                    600
                                  ],
                                  "files": {},
                                  "responses": {
                                    "": ""
                                  },
                                  "parameters": {},
                                  "messageHandlers": {
                                    "before:prepare": function anonymous(
) {
let stimset = this.parameters.stimset;
let changeloc = this.parameters.changeloc;
this.parameters.CBRT=this.state.CBRT;
let resp_tri = 0;
const stim_img = new Image();
stim_img.src = "static/SS" + stimset + "_" + changeloc + 3 + ".jpg";

this.options.events['click'] = function(e) {
  if((e.clientX - (document.documentElement.clientWidth / 2) < -20)&&(e.clientY - (document.documentElement.clientHeight / 2) < -20)){
        this.parameters.response = "UL";
        resp_tri = 1;
    }else if((e.clientX - (document.documentElement.clientWidth / 2) > 20)&&(e.clientY - (document.documentElement.clientHeight / 2) < -20)){
        this.parameters.response = "UR";
        resp_tri = 1;
    }else if((e.clientX - (document.documentElement.clientWidth) / 2 < -20)&&(e.clientY - (document.documentElement.clientHeight / 2) > 20)){
        this.parameters.response = "BL";
        resp_tri = 1;
    }else if((e.clientX - (document.documentElement.clientWidth / 2) > 20)&&(e.clientY - (document.documentElement.clientHeight / 2) > 20)){
        this.parameters.response = "BR";
        resp_tri = 1;
    }
    if(resp_tri == 1){
      if(this.parameters.response==changeloc){
          this.parameters.pcorrect =1;
          this.end();
      }else{
          this.parameters.pcorrect =0; 
          this.end();
      }
    }
}

this.options.renderFunction = (t, canvas, ctx, obj) => {
  ctx.drawImage(stim_img,-400, -300);
  this.queueAnimationFrame();
}
}
                                  },
                                  "title": "Response_p",
                                  "tardy": true
                                }
                              ]
                            }
                          }
                        },
                        {
                          "type": "lab.html.Page",
                          "items": [
                            {
                              "type": "text",
                              "content": "全部で4試行あります。",
                              "title": "次からは本実験の開始です。"
                            },
                            {
                              "required": true,
                              "type": "html",
                              "content": "\u003Cdiv class = 'content-horizontal-center'\u003E\u003Cbutton id = \"nextBtn\"\u003E次へ\u003C\u002Fbutton\u003E\u003C\u002Fdiv\u003E",
                              "name": ""
                            }
                          ],
                          "scrollTop": true,
                          "submitButtonText": "Continue →",
                          "submitButtonPosition": "hidden",
                          "files": {
                            "inst1.png": "embedded\u002Fab209b63a763d0a5cb4df8a364219abb177691345c87b469a16cd773f9b9bf22.png"
                          },
                          "responses": {
                            "": ""
                          },
                          "parameters": {},
                          "messageHandlers": {},
                          "title": "Inst2",
                          "width": "l"
                        },
                        {
                          "type": "lab.canvas.Frame",
                          "context": "\u003C!-- Nested components use this canvas --\u003E\n\u003Ccanvas \u002F\u003E",
                          "contextSelector": "canvas",
                          "files": {},
                          "responses": {
                            "": ""
                          },
                          "parameters": {},
                          "messageHandlers": {},
                          "title": "Frame",
                          "content": {
                            "type": "lab.flow.Loop",
                            "templateParameters": [
                              {
                                "changeloc": "UL",
                                "stimset": "${parameters.stimset1}",
                                "trialNO": "1",
                                "blankid": "0"
                              },
                              {
                                "changeloc": "UR",
                                "stimset": "${parameters.stimset1}",
                                "trialNO": "2",
                                "blankid": "0"
                              },
                              {
                                "changeloc": "BL",
                                "stimset": "${parameters.stimset1}",
                                "trialNO": "3",
                                "blankid": "0"
                              },
                              {
                                "changeloc": "BR",
                                "stimset": "${parameters.stimset1}",
                                "trialNO": "4",
                                "blankid": "0"
                              }
                            ],
                            "sample": {
                              "mode": "sequential"
                            },
                            "files": {},
                            "responses": {
                              "": ""
                            },
                            "parameters": {},
                            "messageHandlers": {},
                            "title": "Set_EXP",
                            "shuffleGroups": [
                              [
                                "changeloc",
                                "stimset",
                                "blankid"
                              ]
                            ],
                            "template": {
                              "type": "lab.flow.Sequence",
                              "files": {},
                              "responses": {
                                "": ""
                              },
                              "parameters": {},
                              "messageHandlers": {
                                "before:prepare": function anonymous(
) {
this.parameters.feedback;
this.parameters.CBRT;
}
                              },
                              "title": "Trials",
                              "content": [
                                {
                                  "type": "lab.canvas.Screen",
                                  "content": [
                                    {
                                      "type": "i-text",
                                      "left": 0,
                                      "top": 0,
                                      "angle": 0,
                                      "width": 514.24,
                                      "height": 36.16,
                                      "stroke": null,
                                      "strokeWidth": 1,
                                      "fill": "black",
                                      "text": "${this.parameters.trialNO} 試行目",
                                      "fontStyle": "normal",
                                      "fontWeight": "normal",
                                      "fontSize": 32,
                                      "fontFamily": "sans-serif",
                                      "lineHeight": 1.16,
                                      "textAlign": "center"
                                    },
                                    {
                                      "type": "i-text",
                                      "left": 0,
                                      "top": 50,
                                      "angle": 0,
                                      "width": 350.08,
                                      "height": 36.16,
                                      "stroke": "#aaaaaa",
                                      "strokeWidth": 1,
                                      "fill": "black",
                                      "text": "画面をクリックして次へ",
                                      "fontStyle": "normal",
                                      "fontWeight": "normal",
                                      "fontSize": 32,
                                      "fontFamily": "sans-serif",
                                      "lineHeight": 1.16,
                                      "textAlign": "center"
                                    }
                                  ],
                                  "viewport": [
                                    800,
                                    600
                                  ],
                                  "files": {},
                                  "responses": {
                                    "": ""
                                  },
                                  "parameters": {},
                                  "messageHandlers": {
                                    "before:prepare": function anonymous(
) {
this.options.events['click'] = function(e) {
  this.end();
}

}
                                  },
                                  "title": "Fix"
                                },
                                {
                                  "type": "lab.canvas.Screen",
                                  "content": [],
                                  "viewport": [
                                    800,
                                    600
                                  ],
                                  "files": {},
                                  "responses": {
                                    "": ""
                                  },
                                  "parameters": {},
                                  "messageHandlers": {},
                                  "title": "Blank",
                                  "timeout": "500"
                                },
                                {
                                  "type": "lab.canvas.Screen",
                                  "content": [],
                                  "viewport": [
                                    800,
                                    600
                                  ],
                                  "files": {},
                                  "responses": {
                                    "": ""
                                  },
                                  "parameters": {},
                                  "messageHandlers": {
                                    "before:prepare": function anonymous(
) {
let stimset = this.parameters.stimset;
let changeloc = this.parameters.changeloc;
let blankid = this.parameters.blankid;
const stim_img = [];

for (let i=1; i< 5; i++){
  stim_img[i] = new Image();
  if(blankid == 1){
    if(i==1){
      stim_img[i].src = "static/SS" + stimset + "_" + changeloc + 1 + ".jpg";
    }else if(i==3){ 
      stim_img[i].src = "static/SS" + stimset + "_" + changeloc + 2 + ".jpg";  
    }else{
      stim_img[i].src = "static/blank.jpg";
    }
  }else{
     if(i==1){
      stim_img[i].src = "static/SS" + stimset + "_" + changeloc + 1 + ".jpg";
    }else if(i==2){ 
      stim_img[i].src = "static/SS" + stimset + "_" + changeloc + 2 + ".jpg";  
    }else if(i==3){ 
      stim_img[i].src = "static/SS" + stimset + "_" + changeloc + 1 + ".jpg";  
    }else{
      stim_img[i].src = "static/SS" + stimset + "_" + changeloc + 2 + ".jpg"; 
    }   
  }
}

this.options.events['click'] = function(e) {
  this.end();
}

this.options.renderFunction = (t, canvas, ctx, obj) => {
  num = Math.floor(t/200);
  ctx.drawImage(stim_img[num%4+1],-400, -300);
  this.queueAnimationFrame();
}
}
                                  },
                                  "title": "Motion Display",
                                  "skip": "${ parameters.feefback2 ==1}"
                                },
                                {
                                  "type": "lab.canvas.Screen",
                                  "content": [],
                                  "viewport": [
                                    800,
                                    600
                                  ],
                                  "files": {},
                                  "responses": {
                                    "": ""
                                  },
                                  "parameters": {},
                                  "messageHandlers": {
                                    "before:prepare": function anonymous(
) {
this.parameters.CBRT=this.state.duration;
}
                                  },
                                  "title": "Blank",
                                  "timeout": "500",
                                  "tardy": true
                                },
                                {
                                  "type": "lab.canvas.Screen",
                                  "content": [],
                                  "viewport": [
                                    800,
                                    600
                                  ],
                                  "files": {},
                                  "responses": {
                                    "": ""
                                  },
                                  "parameters": {},
                                  "messageHandlers": {
                                    "before:prepare": function anonymous(
) {
let stimset = this.parameters.stimset;
let changeloc = this.parameters.changeloc;
this.parameters.CBRT=this.state.CBRT;
let resp_tri = 0;
const stim_img = new Image();
stim_img.src = "static/SS" + stimset + "_" + changeloc + 3 + ".jpg";

this.options.events['click'] = function(e) {
  if((e.clientX - (document.documentElement.clientWidth / 2) < -20)&&(e.clientY - (document.documentElement.clientHeight / 2) < -20)){
        this.parameters.response = "UL";
        resp_tri = 1;
    }else if((e.clientX - (document.documentElement.clientWidth / 2) > 20)&&(e.clientY - (document.documentElement.clientHeight / 2) < -20)){
        this.parameters.response = "UR";
        resp_tri = 1;
    }else if((e.clientX - (document.documentElement.clientWidth) / 2 < -20)&&(e.clientY - (document.documentElement.clientHeight / 2) > 20)){
        this.parameters.response = "BL";
        resp_tri = 1;
    }else if((e.clientX - (document.documentElement.clientWidth / 2) > 20)&&(e.clientY - (document.documentElement.clientHeight / 2) > 20)){
        this.parameters.response = "BR";
        resp_tri = 1;
    }
    if(resp_tri == 1){
      if(this.parameters.response==changeloc){
          this.parameters.pcorrect =1;
          this.end();
      }else{
          this.parameters.pcorrect =0; 
          this.end();
      }
    }
}

this.options.renderFunction = (t, canvas, ctx, obj) => {
  ctx.drawImage(stim_img,-400, -300);
  this.queueAnimationFrame();
}
}
                                  },
                                  "title": "Response1",
                                  "tardy": true
                                }
                              ]
                            }
                          }
                        }
                      ]
                    },
                    {
                      "type": "lab.flow.Sequence",
                      "files": {},
                      "responses": {
                        "": ""
                      },
                      "parameters": {},
                      "messageHandlers": {},
                      "title": "Session2",
                      "content": [
                        {
                          "type": "lab.html.Page",
                          "items": [
                            {
                              "type": "text",
                              "content": "2枚の写真画像が繰り返し交互に提示されます。画像の一部が変化していますので，変化を見つけたらクリックしてください。その後，画像のどの領域（左上，右上，左下，右下）が変化したか, 該当する位置でクリックしてください。\n\n「次へ」ボタンを押すと練習を開始します。全部で2試行あります。",
                              "title": "変化検出課題"
                            },
                            {
                              "required": true,
                              "type": "image",
                              "width": "",
                              "height": "",
                              "src": "${ this.files[\"inst1.jpg\"] }",
                              "name": ""
                            },
                            {
                              "required": true,
                              "type": "html",
                              "content": "\u003Cdiv class = 'content-horizontal-center'\u003E\u003Cbutton id = \"nextBtn\"\u003E次へ\u003C\u002Fbutton\u003E\u003C\u002Fdiv\u003E",
                              "name": ""
                            }
                          ],
                          "scrollTop": true,
                          "submitButtonText": "Continue →",
                          "submitButtonPosition": "hidden",
                          "files": {
                            "inst1.jpg": "embedded\u002F26436184ea9315dbc44558467d1128bae6f3d4b988a7f8f897e7aed8c87cadfd.jpg"
                          },
                          "responses": {
                            "": ""
                          },
                          "parameters": {},
                          "messageHandlers": {},
                          "title": "Inst1"
                        },
                        {
                          "type": "lab.canvas.Frame",
                          "context": "\u003C!-- Nested components use this canvas --\u003E\n\u003Ccanvas \u002F\u003E",
                          "contextSelector": "canvas",
                          "files": {},
                          "responses": {
                            "": ""
                          },
                          "parameters": {},
                          "messageHandlers": {},
                          "title": "Frame",
                          "content": {
                            "type": "lab.flow.Loop",
                            "templateParameters": [
                              {
                                "changeloc": "UL",
                                "stimset": "0",
                                "trialNO": "1",
                                "blankid": "1"
                              },
                              {
                                "changeloc": "BR",
                                "stimset": "0",
                                "trialNO": "2",
                                "blankid": "1"
                              }
                            ],
                            "sample": {
                              "mode": "sequential"
                            },
                            "files": {},
                            "responses": {
                              "": ""
                            },
                            "parameters": {},
                            "messageHandlers": {},
                            "title": "Set_Pra",
                            "shuffleGroups": [
                              [
                                "changeloc",
                                "stimset",
                                "blankid"
                              ]
                            ],
                            "template": {
                              "type": "lab.flow.Sequence",
                              "files": {},
                              "responses": {
                                "": ""
                              },
                              "parameters": {},
                              "messageHandlers": {
                                "before:prepare": function anonymous(
) {
this.parameters.feedback;
this.parameters.CBRT;
}
                              },
                              "title": "Trials_p",
                              "content": [
                                {
                                  "type": "lab.canvas.Screen",
                                  "content": [
                                    {
                                      "type": "i-text",
                                      "left": 0,
                                      "top": 0,
                                      "angle": 0,
                                      "width": 526.56,
                                      "height": 36.16,
                                      "stroke": null,
                                      "strokeWidth": 1,
                                      "fill": "black",
                                      "text": "${this.parameters.trialNO} 試行目",
                                      "fontStyle": "normal",
                                      "fontWeight": "normal",
                                      "fontSize": 32,
                                      "fontFamily": "sans-serif",
                                      "lineHeight": 1.16,
                                      "textAlign": "center"
                                    },
                                    {
                                      "type": "i-text",
                                      "left": 0,
                                      "top": 50,
                                      "angle": 0,
                                      "width": 350.08,
                                      "height": 36.16,
                                      "stroke": "#aaaaaa",
                                      "strokeWidth": 1,
                                      "fill": "black",
                                      "text": "画面をクリックして次へ",
                                      "fontStyle": "normal",
                                      "fontWeight": "normal",
                                      "fontSize": 32,
                                      "fontFamily": "sans-serif",
                                      "lineHeight": 1.16,
                                      "textAlign": "center"
                                    }
                                  ],
                                  "viewport": [
                                    800,
                                    600
                                  ],
                                  "files": {},
                                  "responses": {
                                    "": ""
                                  },
                                  "parameters": {},
                                  "messageHandlers": {
                                    "before:prepare": function anonymous(
) {
this.options.events['click'] = function(e) {
  this.end();
}

}
                                  },
                                  "title": "Fix_p"
                                },
                                {
                                  "type": "lab.canvas.Screen",
                                  "content": [],
                                  "viewport": [
                                    800,
                                    600
                                  ],
                                  "files": {},
                                  "responses": {
                                    "": ""
                                  },
                                  "parameters": {},
                                  "messageHandlers": {},
                                  "title": "Blank_p",
                                  "timeout": "500"
                                },
                                {
                                  "type": "lab.canvas.Screen",
                                  "content": [],
                                  "viewport": [
                                    800,
                                    600
                                  ],
                                  "files": {},
                                  "responses": {
                                    "": ""
                                  },
                                  "parameters": {},
                                  "messageHandlers": {
                                    "before:prepare": function anonymous(
) {
let stimset = this.parameters.stimset;
let changeloc = this.parameters.changeloc;
let blankid = this.parameters.blankid;
const stim_img = [];

for (let i=1; i< 5; i++){
  stim_img[i] = new Image();
  if(blankid == 1){
    if(i==1){
      stim_img[i].src = "static/SS" + stimset + "_" + changeloc + 1 + ".jpg";
    }else if(i==3){ 
      stim_img[i].src = "static/SS" + stimset + "_" + changeloc + 2 + ".jpg";  
    }else{
      stim_img[i].src = "static/blank.jpg";
    }
  }else{
     if(i==1){
      stim_img[i].src = "static/SS" + stimset + "_" + changeloc + 1 + ".jpg";
    }else if(i==2){ 
      stim_img[i].src = "static/SS" + stimset + "_" + changeloc + 2 + ".jpg";  
    }else if(i==3){ 
      stim_img[i].src = "static/SS" + stimset + "_" + changeloc + 1 + ".jpg";  
    }else{
      stim_img[i].src = "static/SS" + stimset + "_" + changeloc + 2 + ".jpg"; 
    }   
  }
}

this.options.events['click'] = function(e) {
  this.end();
}

this.options.renderFunction = (t, canvas, ctx, obj) => {
  num = Math.floor(t/200);
  ctx.drawImage(stim_img[num%4+1],-400, -300);
  this.queueAnimationFrame();
}
}
                                  },
                                  "title": "Motion Display_p",
                                  "skip": "${ parameters.feefback2 ==1}"
                                },
                                {
                                  "type": "lab.canvas.Screen",
                                  "content": [],
                                  "viewport": [
                                    800,
                                    600
                                  ],
                                  "files": {},
                                  "responses": {
                                    "": ""
                                  },
                                  "parameters": {},
                                  "messageHandlers": {
                                    "before:prepare": function anonymous(
) {
this.parameters.CBRT=this.state.duration;
}
                                  },
                                  "title": "Blank_p",
                                  "timeout": "500",
                                  "tardy": true
                                },
                                {
                                  "type": "lab.canvas.Screen",
                                  "content": [],
                                  "viewport": [
                                    800,
                                    600
                                  ],
                                  "files": {},
                                  "responses": {
                                    "": ""
                                  },
                                  "parameters": {},
                                  "messageHandlers": {
                                    "before:prepare": function anonymous(
) {
let stimset = this.parameters.stimset;
let changeloc = this.parameters.changeloc;
let resp_tri = 0;
this.parameters.CBRT=this.state.CBRT;
const stim_img = new Image();
stim_img.src = "static/SS" + stimset + "_" + changeloc + 3 + ".jpg";

this.options.events['click'] = function(e) {
  if((e.clientX - (document.documentElement.clientWidth / 2) < -20)&&(e.clientY - (document.documentElement.clientHeight / 2) < -20)){
        this.parameters.response = "UL";
        resp_tri = 1;
    }else if((e.clientX - (document.documentElement.clientWidth / 2) > 20)&&(e.clientY - (document.documentElement.clientHeight / 2) < -20)){
        this.parameters.response = "UR";
        resp_tri = 1;
    }else if((e.clientX - (document.documentElement.clientWidth) / 2 < -20)&&(e.clientY - (document.documentElement.clientHeight / 2) > 20)){
        this.parameters.response = "BL";
        resp_tri = 1;
    }else if((e.clientX - (document.documentElement.clientWidth / 2) > 20)&&(e.clientY - (document.documentElement.clientHeight / 2) > 20)){
        this.parameters.response = "BR";
        resp_tri = 1;
    }
    if(resp_tri == 1){
      if(this.parameters.response==changeloc){
          this.parameters.pcorrect =1;
          this.end();
      }else{
          this.parameters.pcorrect =0; 
          this.end();
      }
    }
}

this.options.renderFunction = (t, canvas, ctx, obj) => {
  ctx.drawImage(stim_img,-400, -300);
  this.queueAnimationFrame();
}
}
                                  },
                                  "title": "Response_p",
                                  "tardy": true
                                }
                              ]
                            }
                          }
                        },
                        {
                          "type": "lab.html.Page",
                          "items": [
                            {
                              "type": "text",
                              "content": "全部で4試行あります。",
                              "title": "次からは本実験の開始です。"
                            },
                            {
                              "required": true,
                              "type": "html",
                              "content": "\u003Cdiv class = 'content-horizontal-center'\u003E\u003Cbutton id = \"nextBtn\"\u003E次へ\u003C\u002Fbutton\u003E\u003C\u002Fdiv\u003E",
                              "name": ""
                            }
                          ],
                          "scrollTop": true,
                          "submitButtonText": "Continue →",
                          "submitButtonPosition": "hidden",
                          "files": {
                            "inst1.png": "embedded\u002Fab209b63a763d0a5cb4df8a364219abb177691345c87b469a16cd773f9b9bf22.png"
                          },
                          "responses": {
                            "": ""
                          },
                          "parameters": {},
                          "messageHandlers": {},
                          "title": "Inst2",
                          "width": "l"
                        },
                        {
                          "type": "lab.canvas.Frame",
                          "context": "\u003C!-- Nested components use this canvas --\u003E\n\u003Ccanvas \u002F\u003E",
                          "contextSelector": "canvas",
                          "files": {},
                          "responses": {
                            "": ""
                          },
                          "parameters": {},
                          "messageHandlers": {},
                          "title": "Frame",
                          "content": {
                            "type": "lab.flow.Loop",
                            "templateParameters": [
                              {
                                "changeloc": "UL",
                                "stimset": "${parameters.stimset2}",
                                "trialNO": "1",
                                "blankid": "1"
                              },
                              {
                                "changeloc": "UR",
                                "stimset": "${parameters.stimset2}",
                                "trialNO": "2",
                                "blankid": "1"
                              },
                              {
                                "changeloc": "BL",
                                "stimset": "${parameters.stimset2}",
                                "trialNO": "3",
                                "blankid": "1"
                              },
                              {
                                "changeloc": "BR",
                                "stimset": "${parameters.stimset2}",
                                "trialNO": "4",
                                "blankid": "1"
                              }
                            ],
                            "sample": {
                              "mode": "sequential"
                            },
                            "files": {},
                            "responses": {
                              "": ""
                            },
                            "parameters": {},
                            "messageHandlers": {},
                            "title": "Set_EXP",
                            "shuffleGroups": [
                              [
                                "changeloc",
                                "stimset",
                                "blankid"
                              ]
                            ],
                            "template": {
                              "type": "lab.flow.Sequence",
                              "files": {},
                              "responses": {
                                "": ""
                              },
                              "parameters": {},
                              "messageHandlers": {
                                "before:prepare": function anonymous(
) {
this.parameters.feedback;
this.parameters.CBRT;
}
                              },
                              "title": "Trials",
                              "content": [
                                {
                                  "type": "lab.canvas.Screen",
                                  "content": [
                                    {
                                      "type": "i-text",
                                      "left": 0,
                                      "top": 0,
                                      "angle": 0,
                                      "width": 526.56,
                                      "height": 36.16,
                                      "stroke": null,
                                      "strokeWidth": 1,
                                      "fill": "black",
                                      "text": "${this.parameters.trialNO} 試行目",
                                      "fontStyle": "normal",
                                      "fontWeight": "normal",
                                      "fontSize": 32,
                                      "fontFamily": "sans-serif",
                                      "lineHeight": 1.16,
                                      "textAlign": "center"
                                    },
                                    {
                                      "type": "i-text",
                                      "left": 0,
                                      "top": 50,
                                      "angle": 0,
                                      "width": 350.08,
                                      "height": 36.16,
                                      "stroke": "#aaaaaa",
                                      "strokeWidth": 1,
                                      "fill": "black",
                                      "text": "画面をクリックして次へ",
                                      "fontStyle": "normal",
                                      "fontWeight": "normal",
                                      "fontSize": 32,
                                      "fontFamily": "sans-serif",
                                      "lineHeight": 1.16,
                                      "textAlign": "center"
                                    }
                                  ],
                                  "viewport": [
                                    800,
                                    600
                                  ],
                                  "files": {},
                                  "responses": {
                                    "": ""
                                  },
                                  "parameters": {},
                                  "messageHandlers": {
                                    "before:prepare": function anonymous(
) {
this.options.events['click'] = function(e) {
  this.end();
}

}
                                  },
                                  "title": "Fix"
                                },
                                {
                                  "type": "lab.canvas.Screen",
                                  "content": [],
                                  "viewport": [
                                    800,
                                    600
                                  ],
                                  "files": {},
                                  "responses": {
                                    "": ""
                                  },
                                  "parameters": {},
                                  "messageHandlers": {},
                                  "title": "Blank",
                                  "timeout": "500"
                                },
                                {
                                  "type": "lab.canvas.Screen",
                                  "content": [],
                                  "viewport": [
                                    800,
                                    600
                                  ],
                                  "files": {},
                                  "responses": {
                                    "": ""
                                  },
                                  "parameters": {},
                                  "messageHandlers": {
                                    "before:prepare": function anonymous(
) {
let stimset = this.parameters.stimset;
let changeloc = this.parameters.changeloc;
let blankid = this.parameters.blankid;
const stim_img = [];

for (let i=1; i< 5; i++){
  stim_img[i] = new Image();
  if(blankid == 1){
    if(i==1){
      stim_img[i].src = "static/SS" + stimset + "_" + changeloc + 1 + ".jpg";
    }else if(i==3){ 
      stim_img[i].src = "static/SS" + stimset + "_" + changeloc + 2 + ".jpg";  
    }else{
      stim_img[i].src = "static/blank.jpg";
    }
  }else{
     if(i==1){
      stim_img[i].src = "static/SS" + stimset + "_" + changeloc + 1 + ".jpg";
    }else if(i==2){ 
      stim_img[i].src = "static/SS" + stimset + "_" + changeloc + 2 + ".jpg";  
    }else if(i==3){ 
      stim_img[i].src = "static/SS" + stimset + "_" + changeloc + 1 + ".jpg";  
    }else{
      stim_img[i].src = "static/SS" + stimset + "_" + changeloc + 2 + ".jpg"; 
    }   
  }
}

this.options.events['click'] = function(e) {
  this.end();
}

this.options.renderFunction = (t, canvas, ctx, obj) => {
  num = Math.floor(t/200);
  ctx.drawImage(stim_img[num%4+1],-400, -300);
  this.queueAnimationFrame();
}
}
                                  },
                                  "title": "Motion Display",
                                  "skip": "${ parameters.feefback2 ==1}"
                                },
                                {
                                  "type": "lab.canvas.Screen",
                                  "content": [],
                                  "viewport": [
                                    800,
                                    600
                                  ],
                                  "files": {},
                                  "responses": {
                                    "": ""
                                  },
                                  "parameters": {},
                                  "messageHandlers": {
                                    "before:prepare": function anonymous(
) {
this.parameters.CBRT=this.state.duration;
}
                                  },
                                  "title": "Blank",
                                  "timeout": "500",
                                  "tardy": true
                                },
                                {
                                  "type": "lab.canvas.Screen",
                                  "content": [],
                                  "viewport": [
                                    800,
                                    600
                                  ],
                                  "files": {},
                                  "responses": {
                                    "": ""
                                  },
                                  "parameters": {},
                                  "messageHandlers": {
                                    "before:prepare": function anonymous(
) {
let stimset = this.parameters.stimset;
let changeloc = this.parameters.changeloc;
let resp_tri = 0;
this.parameters.CBRT=this.state.CBRT;
const stim_img = new Image();
stim_img.src = "static/SS" + stimset + "_" + changeloc + 3 + ".jpg";

this.options.events['click'] = function(e) {
  if((e.clientX - (document.documentElement.clientWidth / 2) < -20)&&(e.clientY - (document.documentElement.clientHeight / 2) < -20)){
        this.parameters.response = "UL";
        resp_tri = 1;
    }else if((e.clientX - (document.documentElement.clientWidth / 2) > 20)&&(e.clientY - (document.documentElement.clientHeight / 2) < -20)){
        this.parameters.response = "UR";
        resp_tri = 1;
    }else if((e.clientX - (document.documentElement.clientWidth) / 2 < -20)&&(e.clientY - (document.documentElement.clientHeight / 2) > 20)){
        this.parameters.response = "BL";
        resp_tri = 1;
    }else if((e.clientX - (document.documentElement.clientWidth / 2) > 20)&&(e.clientY - (document.documentElement.clientHeight / 2) > 20)){
        this.parameters.response = "BR";
        resp_tri = 1;
    }
    if(resp_tri == 1){
      if(this.parameters.response==changeloc){
          this.parameters.pcorrect =1;
          this.end();
      }else{
          this.parameters.pcorrect =0; 
          this.end();
      }
    }
}

this.options.renderFunction = (t, canvas, ctx, obj) => {
  ctx.drawImage(stim_img,-400, -300);
  this.queueAnimationFrame();
}
}
                                  },
                                  "title": "Response2",
                                  "tardy": true
                                }
                              ]
                            }
                          }
                        }
                      ]
                    }
                  ]
                },
                {
                  "type": "lab.html.Screen",
                  "files": {},
                  "responses": {
                    "click button#next": "next"
                  },
                  "parameters": {},
                  "messageHandlers": {
                    "run": function anonymous(
) {

//過去データ
const previousMean1 = 2.54;
const previousError1 = 0.32;
const previousMean2 = 7.01;
const previousError2 = 0.52;

//本実験のデータ
//任意のコンポーネントの変数のみを抽出する
const rowName1 = "Response1"//行名（正誤が出力されるコンポーネント名）
const rowName2 = "Response2"//行名（正誤が出力されるコンポーネント名）

//列名（従属変数名)
const colName = "CBRT"

//データを抽出
const ds = this.options.datastore
// noblank
const yourData1 = ds.data.filter(
  row1 => row1.sender === rowName1 && row1.pcorrect === 1
)
const rtCorrectTrials1 = yourData1.map(row1 => row1.CBRT)
// blank
const yourData2 = ds.data.filter(
  row2 => row2.sender === rowName2 && row2.pcorrect === 1
)
const rtCorrectTrials2 = yourData2.map(row2 => row2.CBRT)

//平均反応時間を計算
let yourMean1 = Math.round(lab.util.stats.mean(rtCorrectTrials1) * 100)/100/1000
let yourMean2 = Math.round(lab.util.stats.mean(rtCorrectTrials2) * 100)/100/1000


//グラフ設定
new Chart(document.getElementById('plotArea').getContext('2d'), {
  type: 'barWithErrorBars',
  data: {
    labels: ['ブランクなし', 'ブランクあり'],
    datasets: [
      {
        barThickness: 100,
        data: [
          {
            label:'ブランクなし',
            y: yourMean1
          },
          {
            label:'ブランクあり',
            y: yourMean2
          },
        ],
        //棒グラフの色
        backgroundColor: [
          'rgba(255, 99, 132, 0.5)',
          'rgba(54, 162, 235, 0.5)'
        ],
      }
    ],
  },
  //y軸の最小と最大を指定
  options : {
    scales : {
      y : {
        min: 0,
        max: 10,
      }
    },
    plugins:{
      legend: {
        display: false
      }
    }
  }
});

new Chart(document.getElementById('plotArea2').getContext('2d'), {
  type: 'barWithErrorBars',
  data: {
    labels: ['ブランクなし', 'ブランクあり'],
    datasets: [
      {
        barThickness: 100,
        data: [
          {
            label:'ブランクなし',
            y: previousMean1,
            yMin: previousMean1-previousError1,
            yMax: previousMean1+previousError1,
          },
          {
            label:'ブランクあり',
            y: previousMean2,
            yMin: previousMean2-previousError2,
            yMax: previousMean2+previousError2,
          },
        ],
        //棒グラフの色
        backgroundColor: [
          'rgba(255, 99, 132, 0.5)',
          'rgba(54, 162, 235, 0.5)'
        ],
      }
    ],
  },
  //y軸の最小と最大を指定
  options : {
    scales : {
      y : {
        min: 0,
        max: 10,
      }
    },
    plugins:{
      legend: {
        display: false
      }
    }
  }
});

}
                  },
                  "title": "displayMeanCorrectRate_with_other",
                  "content": "\u003Cheader\u003E\n  平均正答反応時間（秒）\n\u003C\u002Fheader\u003E\n\u003Cmain class = \"content-horizontal-center content-vertical-center\"\u003E\n  \u003Cdiv class = \"w-l\"\u003E\n    \u003Cp style = \"text-align: left\"\u003E\n    あなたのデータ  \n    \u003C\u002Fp\u003E  \n    \u003Ccanvas id = \"plotArea\"\u003E\u003C\u002Fcanvas\u003E\n  \u003C\u002Fdiv\u003E\n  \u003Cdiv class = \"w-l\"\u003E\n    \u003Cp style = \"text-align: left\"\u003E\n    過去のデータ  \n    \u003C\u002Fp\u003E \n    \u003Ccanvas id = \"plotArea2\"\u003E\u003C\u002Fcanvas\u003E\n  \u003C\u002Fdiv\u003E\n \u003C\u002Fmain\u003E\n \u003Cmain class = \"content-horizontal-center content-vertical-center\"\u003E\n      \u003Cp style = \"text-align: left\"\u003E\n        グラフは「ブランクなし（空白画面なし）」と「ブランクあり（空白画面あり）」における変化を見つけるまでの反応時間です。「ブランクあり（空白画面あり）」では変化箇所の動きが見えないので，変化前後の画像を記憶して答える必要があり，時間がかかるといった結果になったのではないでしょうか。\n        \u003Cbr\u003E左側のグラフは，この実験の結果（あなたの実験結果）です。右側のグラフは，100名分のデータの平均値です。比較してみましょう。\n      \u003C\u002Fp\u003E\n    \u003C\u002Fdiv\u003E\n\u003C\u002Fmain\u003E\n\u003Cfooter\u003E\n  \u003Cbutton id = \"next\"\u003E次へ\u003C\u002Fbutton\u003E\n\u003C\u002Ffooter\u003E",
                  "tardy": true
                }
              ]
            }
          }
        ]
      }
    },
    {
      "type": "lab.html.Page",
      "items": [
        {
          "type": "text",
          "title": "\u003Cspan style = \"color: tomato\"\u003E変化の見落としの実験はこれで終了です。\u003C\u002Fspan\u003E",
          "content": "ブラウザを閉じて実験を終了してください。ありがとうございました。"
        }
      ],
      "scrollTop": true,
      "submitButtonText": "Continue →",
      "submitButtonPosition": "hidden",
      "files": {},
      "responses": {
        "": ""
      },
      "parameters": {},
      "messageHandlers": {},
      "title": "thanks"
    }
  ]
})

// Let's go!
study.run()