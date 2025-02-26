import { useState, useEffect, useRef } from "react"

const spanishVerbData = {
    "abandonar": {
        "present-tense": [
            "abandono",
            "abandonas",
            "abandona",
            "abandonamos",
            "abandonáis",
            "abandonan"
        ],
        "future-tense": [
            "abandonaré",
            "abandonarás",
            "abandonará",
            "abandonaremos",
            "abandonaréis",
            "abandonarán"
        ],
        "preterite-tense": [
            "abandoné",
            "abandonaste",
            "abandonó",
            "abandonamos",
            "abandonasteis",
            "abandonaron"
        ],
        "present-subjunctive-tense": [
            "abandone",
            "abandones",
            "abandone",
            "abandonemos",
            "abandonéis",
            "abandonen"
        ],
        "future-subjunctive-tense": [
            "abandonare",
            "abandonares",
            "abandonare",
            "abandonáremos",
            "abandonareis",
            "abandonaren"
        ]
    },
    "abordar": {
        "present-tense": [
            "abordo",
            "abordas",
            "aborda",
            "abordamos",
            "abordáis",
            "abordan"
        ],
        "future-tense": [
            "abordaré",
            "abordarás",
            "abordará",
            "abordaremos",
            "abordaréis",
            "abordarán"
        ],
        "preterite-tense": [
            "abordé",
            "abordaste",
            "abordó",
            "abordamos",
            "abordasteis",
            "abordaron"
        ],
        "present-subjunctive-tense": [
            "aborde",
            "abordes",
            "aborde",
            "abordemos",
            "abordéis",
            "aborden"
        ],
        "future-subjunctive-tense": [
            "abordare",
            "abordares",
            "abordare",
            "abordáremos",
            "abordareis",
            "abordaren"
        ]
    },
    "abortar": {
        "present-tense": [
            "aborto",
            "abortas",
            "aborta",
            "abortamos",
            "abortáis",
            "abortan"
        ],
        "future-tense": [
            "abortaré",
            "abortarás",
            "abortará",
            "abortaremos",
            "abortaréis",
            "abortarán"
        ],
        "preterite-tense": [
            "aborté",
            "abortaste",
            "abortó",
            "abortamos",
            "abortasteis",
            "abortaron"
        ],
        "present-subjunctive-tense": [
            "aborte",
            "abortes",
            "aborte",
            "abortemos",
            "abortéis",
            "aborten"
        ],
        "future-subjunctive-tense": [
            "abortare",
            "abortares",
            "abortare",
            "abortáremos",
            "abortareis",
            "abortaren"
        ]
    },
    "abrazar": {
        "present-tense": [
            "abrazo",
            "abrazas",
            "abraza",
            "abrazamos",
            "abrazáis",
            "abrazan"
        ],
        "future-tense": [
            "abrazaré",
            "abrazarás",
            "abrazará",
            "abrazaremos",
            "abrazaréis",
            "abrazarán"
        ],
        "preterite-tense": [
            "abracé",
            "abrazaste",
            "abrazó",
            "abrazamos",
            "abrazasteis",
            "abrazaron"
        ],
        "present-subjunctive-tense": [
            "abrace",
            "abraces",
            "abrace",
            "abracemos",
            "abracéis",
            "abracen"
        ],
        "future-subjunctive-tense": [
            "abrazare",
            "abrazares",
            "abrazare",
            "abrazáremos",
            "abrazareis",
            "abrazaren"
        ]
    },
    "abrir": {
        "present-tense": [
            "abro",
            "abres",
            "abre",
            "abrimos",
            "abrís",
            "abren"
        ],
        "future-tense": [
            "abriré",
            "abrirás",
            "abrirá",
            "abriremos",
            "abriréis",
            "abrirán"
        ],
        "preterite-tense": [
            "abrí",
            "abriste",
            "abrió",
            "abrimos",
            "abristeis",
            "abrieron"
        ],
        "present-subjunctive-tense": [
            "abra",
            "abras",
            "abra",
            "abramos",
            "abráis",
            "abran"
        ],
        "future-subjunctive-tense": [
            "abriere",
            "abrieres",
            "abriere",
            "abriéremos",
            "abriereis",
            "abrieren"
        ]
    },
    "aburrir": {
        "present-tense": [
            "aburro",
            "aburres",
            "aburre",
            "aburrimos",
            "aburrís",
            "aburren"
        ],
        "future-tense": [
            "aburriré",
            "aburrirás",
            "aburrirá",
            "aburriremos",
            "aburriréis",
            "aburrirán"
        ],
        "preterite-tense": [
            "aburrí",
            "aburriste",
            "aburrió",
            "aburrimos",
            "aburristeis",
            "aburrieron"
        ],
        "present-subjunctive-tense": [
            "aburra",
            "aburras",
            "aburra",
            "aburramos",
            "aburráis",
            "aburran"
        ],
        "future-subjunctive-tense": [
            "aburriere",
            "aburrieres",
            "aburriere",
            "aburriéremos",
            "aburriereis",
            "aburrieren"
        ]
    },
    "aburrirse": {
        "present-tense": [
            "me aburro",
            "te aburres",
            "se aburre",
            "nos aburrimos",
            "os aburrís",
            "se aburren"
        ],
        "future-tense": [
            "me aburriré",
            "te aburrirás",
            "se aburrirá",
            "nos aburriremos",
            "os aburriréis",
            "se aburrirán"
        ],
        "preterite-tense": [
            "me aburrí",
            "te aburriste",
            "se aburrió",
            "nos aburrimos",
            "os aburristeis",
            "se aburrieron"
        ],
        "present-subjunctive-tense": [
            "me aburra",
            "te aburras",
            "se aburra",
            "nos aburramos",
            "os aburráis",
            "se aburran"
        ],
        "future-subjunctive-tense": [
            "me aburriere",
            "te aburrieres",
            "se aburriere",
            "nos aburriéremos",
            "os aburriereis",
            "se aburrieren"
        ]
    },
    "abusar": {
        "present-tense": [
            "abuso",
            "abusas",
            "abusa",
            "abusamos",
            "abusáis",
            "abusan"
        ],
        "future-tense": [
            "abusaré",
            "abusarás",
            "abusará",
            "abusaremos",
            "abusaréis",
            "abusarán"
        ],
        "preterite-tense": [
            "abusé",
            "abusaste",
            "abusó",
            "abusamos",
            "abusasteis",
            "abusaron"
        ],
        "present-subjunctive-tense": [
            "abuse",
            "abuses",
            "abuse",
            "abusemos",
            "abuséis",
            "abusen"
        ],
        "future-subjunctive-tense": [
            "abusare",
            "abusares",
            "abusare",
            "abusáremos",
            "abusareis",
            "abusaren"
        ]
    },
    "acabar": {
        "present-tense": [
            "acabo",
            "acabas",
            "acaba",
            "acabamos",
            "acabáis",
            "acaban"
        ],
        "future-tense": [
            "acabaré",
            "acabarás",
            "acabará",
            "acabaremos",
            "acabaréis",
            "acabarán"
        ],
        "preterite-tense": [
            "acabé",
            "acabaste",
            "acabó",
            "acabamos",
            "acabasteis",
            "acabaron"
        ],
        "present-subjunctive-tense": [
            "acabe",
            "acabes",
            "acabe",
            "acabemos",
            "acabéis",
            "acaben"
        ],
        "future-subjunctive-tense": [
            "acabare",
            "acabares",
            "acabare",
            "acabáremos",
            "acabareis",
            "acabaren"
        ]
    },
    "acampar": {
        "present-tense": [
            "acampo",
            "acampas",
            "acampa",
            "acampamos",
            "acampáis",
            "acampan"
        ],
        "future-tense": [
            "acamparé",
            "acamparás",
            "acampará",
            "acamparemos",
            "acamparéis",
            "acamparán"
        ],
        "preterite-tense": [
            "acampé",
            "acampaste",
            "acampó",
            "acampamos",
            "acampasteis",
            "acamparon"
        ],
        "present-subjunctive-tense": [
            "acampe",
            "acampes",
            "acampe",
            "acampemos",
            "acampéis",
            "acampen"
        ],
        "future-subjunctive-tense": [
            "acampare",
            "acampares",
            "acampare",
            "acampáremos",
            "acampareis",
            "acamparen"
        ]
    },
    "aceptar": {
        "present-tense": [
            "acepto",
            "aceptas",
            "acepta",
            "aceptamos",
            "aceptáis",
            "aceptan"
        ],
        "future-tense": [
            "aceptaré",
            "aceptarás",
            "aceptará",
            "aceptaremos",
            "aceptaréis",
            "aceptarán"
        ],
        "preterite-tense": [
            "acepté",
            "aceptaste",
            "aceptó",
            "aceptamos",
            "aceptasteis",
            "aceptaron"
        ],
        "present-subjunctive-tense": [
            "acepte",
            "aceptes",
            "acepte",
            "aceptemos",
            "aceptéis",
            "acepten"
        ],
        "future-subjunctive-tense": [
            "aceptare",
            "aceptares",
            "aceptare",
            "aceptáremos",
            "aceptareis",
            "aceptaren"
        ]
    },
    "acercar": {
        "present-tense": [
            "acerco",
            "acercas",
            "acerca",
            "acercamos",
            "acercáis",
            "acercan"
        ],
        "future-tense": [
            "acercaré",
            "acercarás",
            "acercará",
            "acercaremos",
            "acercaréis",
            "acercarán"
        ],
        "preterite-tense": [
            "acerqué",
            "acercaste",
            "acercó",
            "acercamos",
            "acercasteis",
            "acercaron"
        ],
        "present-subjunctive-tense": [
            "acerque",
            "acerques",
            "acerque",
            "acerquemos",
            "acerquéis",
            "acerquen"
        ],
        "future-subjunctive-tense": [
            "acercare",
            "acercares",
            "acercare",
            "acercáremos",
            "acercareis",
            "acercaren"
        ]
    },
    "acercarse": {
        "present-tense": [
            "me acerco",
            "te acercas",
            "se acerca",
            "nos acercamos",
            "os acercáis",
            "se acercan"
        ],
        "future-tense": [
            "me acercaré",
            "te acercarás",
            "se acercará",
            "nos acercaremos",
            "os acercaréis",
            "se acercarán"
        ],
        "preterite-tense": [
            "me acerqué",
            "te acercaste",
            "se acercó",
            "nos acercamos",
            "acercasteis",
            "se acercaron"
        ],
        "present-subjunctive-tense": [
            "me acerque",
            "te acerques",
            "se acerque",
            "nos acerquemos",
            "os acerquéis",
            "se acerquen"
        ],
        "future-subjunctive-tense": [
            "me acercare",
            "te acercares",
            "se acercare",
            "nos acercáremos",
            "os acercareis",
            "se acercaren"
        ]
    },
    "acompañar": {
        "present-tense": [
            "acompaño",
            "acompañas",
            "acompaña",
            "acompañamos",
            "acompañáis",
            "acompañan"
        ],
        "future-tense": [
            "acompañaré",
            "acompañarás",
            "acompañará",
            "acompañaremos",
            "acompañaréis",
            "acompañarán"
        ],
        "preterite-tense": [
            "acompañé",
            "acompañaste",
            "acompañó",
            "acompañamos",
            "acompañasteis",
            "acompañaron"
        ],
        "present-subjunctive-tense": [
            "acompañe",
            "acompañes",
            "acompañe",
            "acompañemos",
            "acompañéis",
            "acompañen"
        ],
        "future-subjunctive-tense": [
            "acompañare",
            "acompañares",
            "acompañare",
            "acompañáremos",
            "acompañareis",
            "acompañaren"
        ]
    },
    "aconsejar": {
        "present-tense": [
            "aconsejo",
            "aconsejas",
            "aconseja",
            "aconsejamos",
            "aconsejáis",
            "aconsejan"
        ],
        "future-tense": [
            "aconsejaré",
            "aconsejarás",
            "aconsejará",
            "aconsejaremos",
            "aconsejaréis",
            "aconsejarán"
        ],
        "preterite-tense": [
            "aconsejé",
            "aconsejaste",
            "aconsejó",
            "aconsejamos",
            "aconsejasteis",
            "aconsejaron"
        ],
        "present-subjunctive-tense": [
            "aconseje",
            "aconsejes",
            "aconseje",
            "aconsejemos",
            "aconsejéis",
            "aconsejen"
        ],
        "future-subjunctive-tense": [
            "aconsejare",
            "aconsejares",
            "aconsejare",
            "aconsejáremos",
            "aconsejareis",
            "aconsejaren"
        ]
    },
    "acontecer": {
        "present-tense": [
            "acontezco",
            "aconteces",
            "acontece",
            "acontecemos",
            "acontecéis",
            "acontecen"
        ],
        "future-tense": [
            "aconteceré",
            "acontecerás",
            "acontecerá",
            "aconteceremos",
            "aconteceréis",
            "acontecerán"
        ],
        "preterite-tense": [
            "acontecí",
            "aconteciste",
            "aconteció",
            "acontecimos",
            "acontecisteis",
            "acontecieron"
        ],
        "present-subjunctive-tense": [
            "acontezca",
            "acontezcas",
            "acontezca",
            "acontezcamos",
            "acontezcáis",
            "acontezcan"
        ],
        "future-subjunctive-tense": [
            "aconteciere",
            "acontecieres",
            "aconteciere",
            "aconteciéremos",
            "aconteciereis",
            "acontecieren"
        ]
    },
    "acordar": {
        "present-tense": [
            "acuerdo",
            "acuerdas",
            "acuerda",
            "acordamos",
            "acordáis",
            "acuerdan"
        ],
        "future-tense": [
            "acordaré",
            "acordarás",
            "acordará",
            "acordaremos",
            "acordaréis",
            "acordarán"
        ],
        "preterite-tense": [
            "acordé",
            "acordaste",
            "acordó",
            "acordamos",
            "acordasteis",
            "acordaron"
        ],
        "present-subjunctive-tense": [
            "acuerde",
            "acuerdes",
            "acuerde",
            "acordemos",
            "acordéis",
            "acuerden"
        ],
        "future-subjunctive-tense": [
            "acordare",
            "acordares",
            "acordare",
            "acordáremos",
            "acordareis",
            "acordaren"
        ]
    },
    "acordarse": {
        "present-tense": [
            "me acuerdo",
            "te acuerdas",
            "se acuerda",
            "nos acordamos",
            "os acordáis",
            "se acuerdan"
        ],
        "future-tense": [
            "me acordaré",
            "te acordarás",
            "se acordará",
            "nos acordaremos",
            "os acordaréis",
            "se acordarán"
        ],
        "preterite-tense": [
            "me acordé",
            "te acordaste",
            "se acordó",
            "nos acordamos",
            "os acordasteis",
            "se acordaron"
        ],
        "present-subjunctive-tense": [
            "me acuerde",
            "te acuerdes",
            "se acuerde",
            "nos acordemos",
            "os acordéis",
            "se acuerden"
        ],
        "future-subjunctive-tense": [
            "me acordare",
            "te acordares",
            "se acordare",
            "nos acordáremos",
            "os acordareis",
            "se acordaren"
        ]
    },
    "acortar": {
        "present-tense": [
            "acorto",
            "acortas",
            "acorta",
            "acortamos",
            "acortáis",
            "acortan"
        ],
        "future-tense": [
            "acortaré",
            "acortarás",
            "acortará",
            "acortaremos",
            "acortaréis",
            "acortarán"
        ],
        "preterite-tense": [
            "acorté",
            "acortaste",
            "acortó",
            "acortamos",
            "acortasteis",
            "acortaron"
        ],
        "present-subjunctive-tense": [
            "acorte",
            "acortes",
            "acorte",
            "acortemos",
            "acortéis",
            "acorten"
        ],
        "future-subjunctive-tense": [
            "acortare",
            "acortares",
            "acortare",
            "acortáremos",
            "acortareis",
            "acortaren"
        ]
    },
    "acostar": {
        "present-tense": [
            "acuesto",
            "acuestas",
            "acuesta",
            "acostamos",
            "acostáis",
            "acuestan"
        ],
        "future-tense": [
            "acostaré",
            "acostarás",
            "acostará",
            "acostaremos",
            "acostaréis",
            "acostarán"
        ],
        "preterite-tense": [
            "acosté",
            "acostaste",
            "acostó",
            "acostamos",
            "acostasteis",
            "acostaron"
        ],
        "present-subjunctive-tense": [
            "acueste",
            "acuestes",
            "acueste",
            "acostemos",
            "acostéis",
            "acuesten"
        ],
        "future-subjunctive-tense": [
            "acostare",
            "acostares",
            "acostare",
            "acostáremos",
            "acostareis",
            "acostaren"
        ]
    },
    "acostarse": {
        "present-tense": [
            "me acuesto",
            "te acuestas",
            "se acuesta",
            "nos acostamos",
            "os acostáis",
            "se acuestan"
        ],
        "future-tense": [
            "me acostaré",
            "te acostarás",
            "se acostará",
            "nos acostaremos",
            "os acostaréis",
            "se acostarán"
        ],
        "preterite-tense": [
            "me acosté",
            "te acostaste",
            "se acostó",
            "nos acostamos",
            "os acostasteis",
            "se acostaron"
        ],
        "present-subjunctive-tense": [
            "me acueste",
            "te acuestes",
            "se acueste",
            "nos acostemos",
            "os acostéis",
            "se acuesten"
        ],
        "future-subjunctive-tense": [
            "me acostare",
            "te acostares",
            "se acostare",
            "nos acostáremos",
            "os acostareis",
            "se acostaren"
        ]
    },
    "acostumbrar": {
        "present-tense": [
            "acostumbro",
            "acostumbras",
            "acostumbra",
            "acostumbramos",
            "acostumbráis",
            "acostumbran"
        ],
        "future-tense": [
            "acostumbraré",
            "acostumbrarás",
            "acostumbrará",
            "acostumbraremos",
            "acostumbraréis",
            "acostumbrarán"
        ],
        "preterite-tense": [
            "acostumbré",
            "acostumbraste",
            "acostumbró",
            "acostumbramos",
            "acostumbrasteis",
            "acostumbraron"
        ],
        "present-subjunctive-tense": [
            "acostumbre",
            "acostumbres",
            "acostumbre",
            "acostumbremos",
            "acostumbréis",
            "acostumbren"
        ],
        "future-subjunctive-tense": [
            "acostumbrare",
            "acostumbrares",
            "acostumbrare",
            "acostumbráremos",
            "acostumbrareis",
            "acostumbraren"
        ]
    },
    "acostumbrarse": {
        "present-tense": [
            "me acostumbro",
            "te acostumbras",
            "se acostumbra",
            "nos acostumbramos",
            "os acostumbráis",
            "se acostumbran"
        ],
        "future-tense": [
            "me acostumbraré",
            "te acostumbrarás",
            "se acostumbrará",
            "nos acostumbraremos",
            "os acostumbraréis",
            "se acostumbrarán"
        ],
        "preterite-tense": [
            "me acostumbré",
            "te acostumbraste",
            "se acostumbró",
            "nos acostumbramos",
            "os acostumbrasteis",
            "se acostumbraron"
        ],
        "present-subjunctive-tense": [
            "me acostumbre",
            "te acostumbres",
            "se acostumbre",
            "nos acostumbremos",
            "os acostumbréis",
            "se acostumbren"
        ],
        "future-subjunctive-tense": [
            "me acostumbrare",
            "te acostumbrares",
            "se acostumbrare",
            "nos acostumbráremos",
            "os acostumbrareis",
            "se acostumbraren"
        ]
    },
    "actuar": {
        "present-tense": [
            "actúo",
            "actúas",
            "actúa",
            "actuamos",
            "actuáis",
            "actúan"
        ],
        "future-tense": [
            "actuaré",
            "actuarás",
            "actuará",
            "actuaremos",
            "actuaréis",
            "actuarán"
        ],
        "preterite-tense": [
            "actué",
            "actuaste",
            "actuó",
            "actuamos",
            "actuasteis",
            "actuaron"
        ],
        "present-subjunctive-tense": [
            "actúe",
            "actúes",
            "actúe",
            "actuemos",
            "actuéis",
            "actúen"
        ],
        "future-subjunctive-tense": [
            "actuare",
            "actuares",
            "actuare",
            "actuáremos",
            "actuareis",
            "actuaren"
        ]
    },
    "adivinar": {
        "present-tense": [
            "adivino",
            "adivinas",
            "adivina",
            "adivinamos",
            "adivináis",
            "adivinan"
        ],
        "future-tense": [
            "adivinaré",
            "adivinarás",
            "adivinará",
            "adivinaremos",
            "adivinaréis",
            "adivinarán"
        ],
        "preterite-tense": [
            "adiviné",
            "adivinaste",
            "adivinó",
            "adivinamos",
            "adivinasteis",
            "adivinaron"
        ],
        "present-subjunctive-tense": [
            "adivine",
            "adivines",
            "adivine",
            "adivinemos",
            "adivinéis",
            "adivinen"
        ],
        "future-subjunctive-tense": [
            "adivinare",
            "adivinares",
            "adivinare",
            "adivináremos",
            "adivinareis",
            "adivinaren"
        ]
    },
    "admirar": {
        "present-tense": [
            "admiro",
            "admiras",
            "admira",
            "admiramos",
            "admiráis",
            "admiran"
        ],
        "future-tense": [
            "admiraré",
            "admirarás",
            "admirará",
            "admiraremos",
            "admiraréis",
            "admirarán"
        ],
        "preterite-tense": [
            "admiré",
            "admiraste",
            "admiró",
            "admiramos",
            "admirasteis",
            "admiraron"
        ],
        "present-subjunctive-tense": [
            "admire",
            "admires",
            "admire",
            "admiremos",
            "admiréis",
            "admiren"
        ],
        "future-subjunctive-tense": [
            "admirare",
            "admirares",
            "admirare",
            "admiráremos",
            "admirareis",
            "admiraren"
        ]
    },
    "admitir": {
        "present-tense": [
            "admito",
            "admites",
            "admite",
            "admitimos",
            "admitís",
            "admiten"
        ],
        "future-tense": [
            "admitiré",
            "admitirás",
            "admitirá",
            "admitiremos",
            "admitiréis",
            "admitirán"
        ],
        "preterite-tense": [
            "admití",
            "admitiste",
            "admitió",
            "admitimos",
            "admitisteis",
            "admitieron"
        ],
        "present-subjunctive-tense": [
            "admita",
            "admitas",
            "admita",
            "admitamos",
            "admitáis",
            "admitan"
        ],
        "future-subjunctive-tense": [
            "admitiere",
            "admitieres",
            "admitiere",
            "admitiéremos",
            "admitiereis",
            "admitieren"
        ]
    },
    "adorar": {
        "present-tense": [
            "adoro",
            "adoras",
            "adora",
            "adoramos",
            "adoráis",
            "adoran"
        ],
        "future-tense": [
            "adoraré",
            "adorarás",
            "adorará",
            "adoraremos",
            "adoraréis",
            "adorarán"
        ],
        "preterite-tense": [
            "adoré",
            "adoraste",
            "adoró",
            "adoramos",
            "adorasteis",
            "adoraron"
        ],
        "present-subjunctive-tense": [
            "adore",
            "adores",
            "adore",
            "adoremos",
            "adoréis",
            "adoren"
        ],
        "future-subjunctive-tense": [
            "adorare",
            "adorares",
            "adorare",
            "adoráremos",
            "adorareis",
            "adoraren"
        ]
    },
    "adornar": {
        "present-tense": [
            "adorno",
            "adornas",
            "adorna",
            "adornamos",
            "adornáis",
            "adornan"
        ],
        "future-tense": [
            "adornaré",
            "adornarás",
            "adornará",
            "adornaremos",
            "adornaréis",
            "adornarán"
        ],
        "preterite-tense": [
            "adorné",
            "adornaste",
            "adornó",
            "adornamos",
            "adornasteis",
            "adornaron"
        ],
        "present-subjunctive-tense": [
            "adorne",
            "adornes",
            "adorne",
            "adornemos",
            "adornéis",
            "adornen"
        ],
        "future-subjunctive-tense": [
            "adornare",
            "adornares",
            "adornare",
            "adornáremos",
            "adornareis",
            "adornaren"
        ]
    },
    "advertir": {
        "present-tense": [
            "advierto",
            "adviertes",
            "advierte",
            "advertimos",
            "advertís",
            "advierten"
        ],
        "future-tense": [
            "advertiré",
            "advertirás",
            "advertirá",
            "advertiremos",
            "advertiréis",
            "advertirán"
        ],
        "preterite-tense": [
            "advertí",
            "advertiste",
            "advirtió",
            "advertimos",
            "advertisteis",
            "advirtieron"
        ],
        "present-subjunctive-tense": [
            "advierta",
            "adviertas",
            "advierta",
            "advirtamos",
            "advirtáis",
            "adviertan"
        ],
        "future-subjunctive-tense": [
            "advirtiere",
            "advirtieres",
            "advirtiere",
            "advirtiéremos",
            "advirtiereis",
            "advirtieren"
        ]
    },
    "afirmar": {
        "future-tense": [
            "afirmaré",
            "afirmarás",
            "afirmará",
            "afirmaremos",
            "afirmaréis",
            "afirmarán"
        ],
        "present-tense": [
            "afirmo",
            "afirmas",
            "afirma",
            "afirmamos",
            "afirmáis",
            "afirman"
        ],
        "preterite-tense": [
            "afirmé",
            "afirmaste",
            "afirmó",
            "afirmamos",
            "afirmasteis",
            "afirmaron"
        ],
        "present-subjunctive-tense": [
            "afirme",
            "afirmes",
            "afirme",
            "afirmemos",
            "afirméis",
            "afirmen"
        ],
        "future-subjunctive-tense": [
            "afirmare",
            "afirmares",
            "afirmare",
            "afirmáremos",
            "afirmareis",
            "afirmaren"
        ]
    },
    "afeitar": {
        "present-tense": [
            "afeito",
            "afeitas",
            "afeita",
            "afeitamos",
            "afeitáis",
            "afeitan"
        ],
        "future-tense": [
            "afeitaré",
            "afeitarás",
            "afeitará",
            "afeitaremos",
            "afeitaréis",
            "afeitarán"
        ],
        "preterite-tense": [
            "afeité",
            "afeitaste",
            "afeitó",
            "afeitamos",
            "afeitasteis",
            "afeitaron"
        ],
        "present-subjunctive-tense": [
            "afeite",
            "afeites",
            "afeite",
            "afeitemos",
            "afeitéis",
            "afeiten"
        ],
        "future-subjunctive-tense": [
            "afeitare",
            "afeitares",
            "afeitare",
            "afeitáremos",
            "afeitareis",
            "afeitaren"
        ]
    },
    "afeitarse": {
        "present-tense": [
            "me afeito",
            "te afeitas",
            "se afeita",
            "nos afeitamos",
            "os afeitáis",
            "se afeitan"
        ],
        "future-tense": [
            "me afeitaré",
            "te afeitarás",
            "se afeitará",
            "nos afeitaremos",
            "os afeitaréis",
            "se afeitarán"
        ],
        "preterite-tense": [
            "me afeité",
            "te afeitaste",
            "se afeitó",
            "nos afeitamos",
            "os afeitasteis",
            "se afeitaron"
        ],
        "present-subjunctive-tense": [
            "me afeite",
            "te afeites",
            "se afeite",
            "nos afeitemos",
            "os afeitéis",
            "se afeiten"
        ],
        "future-subjunctive-tense": [
            "me afeitare",
            "te afeitares",
            "se afeitare",
            "nos afeitáremos",
            "os afeitareis",
            "se afeitaren"
        ]
    },
    "afligir": {
        "present-tense": [
            "aflijo",
            "afliges",
            "aflige",
            "afligimos",
            "afligís",
            "afligen"
        ],
        "future-tense": [
            "afligiré",
            "afligirás",
            "afligirá",
            "afligiremos",
            "afligiréis",
            "afligirán"
        ],
        "preterite-tense": [
            "afligí",
            "afligiste",
            "afligió",
            "afligimos",
            "afligisteis",
            "afligieron"
        ],
        "present-subjunctive-tense": [
            "aflija",
            "aflijas",
            "aflija",
            "aflijamos",
            "aflijáis",
            "aflijan"
        ],
        "future-subjunctive-tense": [
            "afligiere",
            "afligieres",
            "afligiere",
            "afligiéremos",
            "afligiereis",
            "afligieren"
        ]
    },
    "agorar": {
        "present-tense": [
            "agüero",
            "agüeras",
            "agüera",
            "agoramos",
            "agoráis",
            "agüeran"
        ],
        "future-tense": [
            "agoraré",
            "agorarás",
            "agorará",
            "agoraremos",
            "agoraréis",
            "agorarán"
        ],
        "preterite-tense": [
            "agoré",
            "agoraste",
            "agoró",
            "agoramos",
            "agorasteis",
            "agoraron"
        ],
        "present-subjunctive-tense": [
            "agüere",
            "agüeres",
            "agüere",
            "agoremos",
            "agoréis",
            "agüeren"
        ],
        "future-subjunctive-tense": [
            "agorare",
            "agorares",
            "agorare",
            "agoráremos",
            "agorareis",
            "agoraren"
        ]
    },
    "agradar": {
        "present-tense": [
            "agrado",
            "agradas",
            "agrada",
            "agradamos",
            "agradáis",
            "agradan"
        ],
        "future-tense": [
            "agradaré",
            "agradarás",
            "agradará",
            "agradaremos",
            "agradaréis",
            "agradarán"
        ],
        "preterite-tense": [
            "agradé",
            "agradaste",
            "agradó",
            "agradamos",
            "agradasteis",
            "agradaron"
        ],
        "present-subjunctive-tense": [
            "agrade",
            "agrades",
            "agrade",
            "agrademos",
            "agradéis",
            "agraden"
        ],
        "future-subjunctive-tense": [
            "agradare",
            "agradares",
            "agradare",
            "agradáremos",
            "agradareis",
            "agradaren"
        ]
    },
    "agradecer": {
        "present-tense": [
            "agradezco",
            "agradeces",
            "agradece",
            "agradecemos",
            "agradecéis",
            "agradecen"
        ],
        "future-tense": [
            "agradeceré",
            "agradecerás",
            "agradecerá",
            "agradeceremos",
            "agradeceréis",
            "agradecerán"
        ],
        "preterite-tense": [
            "agradecí",
            "agradeciste",
            "agradeció",
            "agradecimos",
            "agradecisteis",
            "agradecieron"
        ],
        "present-subjunctive-tense": [
            "agradezca",
            "agradezcas",
            "agradezca",
            "agradezcamos",
            "agradezcáis",
            "agradezcan"
        ],
        "future-subjunctive-tense": [
            "agradeciere",
            "agradecieres",
            "agradeciere",
            "agradeciéremos",
            "agradeciereis",
            "agradecieren"
        ]
    },
    "aguantar": {
        "present-tense": [
            "aguanto",
            "aguantas",
            "aguanta",
            "aguantamos",
            "aguantáis",
            "aguantan"
        ],
        "future-tense": [
            "aguantaré",
            "aguantarás",
            "aguantará",
            "aguantaremos",
            "aguantaréis",
            "aguantarán"
        ],
        "preterite-tense": [
            "aguanté",
            "aguantaste",
            "aguantó",
            "aguantamos",
            "aguantasteis",
            "aguantaron"
        ],
        "present-subjunctive-tense": [
            "aguante",
            "aguantes",
            "aguante",
            "aguantemos",
            "aguantéis",
            "aguanten"
        ],
        "future-subjunctive-tense": [
            "aguantare",
            "aguantares",
            "aguantare",
            "aguantáremos",
            "aguantareis",
            "aguantaren"
        ]
    },
    "ahorcar": {
        "present-tense": [
            "ahorco",
            "ahorcas",
            "ahorca",
            "ahorcamos",
            "ahorcáis",
            "ahorcan"
        ],
        "future-tense": [
            "ahorcaré",
            "ahorcarás",
            "ahorcará",
            "ahorcaremos",
            "ahorcaréis",
            "ahorcarán"
        ],
        "preterite-tense": [
            "ahorqué",
            "ahorcaste",
            "ahorcó",
            "ahorcamos",
            "ahorcasteis",
            "ahorcaron"
        ],
        "present-subjunctive-tense": [
            "ahorque",
            "ahorques",
            "ahorque",
            "ahorquemos",
            "ahorquéis",
            "ahorquen"
        ],
        "future-subjunctive-tense": [
            "ahorcare",
            "ahorcares",
            "ahorcare",
            "ahorcáremos",
            "ahorcareis",
            "ahorcaren"
        ]
    },
    "ahorrar": {
        "present-tense": [
            "ahorro",
            "ahorras",
            "ahorra",
            "ahorramos",
            "ahorráis",
            "ahorran"
        ],
        "future-tense": [
            "ahorraré",
            "ahorrarás",
            "ahorrará",
            "ahorraremos",
            "ahorraréis",
            "ahorrarán"
        ],
        "preterite-tense": [
            "ahorré",
            "ahorraste",
            "ahorró",
            "ahorramos",
            "ahorrasteis",
            "ahorraron"
        ],
        "present-subjunctive-tense": [
            "ahorre",
            "ahorres",
            "ahorre",
            "ahorremos",
            "ahorréis",
            "ahorren"
        ],
        "future-subjunctive-tense": [
            "ahorrare",
            "ahorrares",
            "ahorrare",
            "ahorráremos",
            "ahorrareis",
            "ahorraren"
        ]
    },
    "alcanzar": {
        "present-tense": [
            "alcanzo",
            "alcanzas",
            "alcanza",
            "alcanzamos",
            "alcanzáis",
            "alcanzan"
        ],
        "future-tense": [
            "alcanzaré",
            "alcanzarás",
            "alcanzará",
            "alcanzaremos",
            "alcanzaréis",
            "alcanzarán"
        ],
        "preterite-tense": [
            "alcancé",
            "alcanzaste",
            "alcanzó",
            "alcanzamos",
            "alcanzasteis",
            "alcanzaron"
        ],
        "present-subjunctive-tense": [
            "alcance",
            "alcances",
            "alcance",
            "alcancemos",
            "alcancéis",
            "alcancen"
        ],
        "future-subjunctive-tense": [
            "alcanzare",
            "alcanzares",
            "alcanzare",
            "alcanzáremos",
            "alcanzareis",
            "alcanzaren"
        ]
    },
    "alegrar": {
        "present-tense": [
            "alegro",
            "alegras",
            "alegra",
            "alegramos",
            "alegráis",
            "alegran"
        ],
        "future-tense": [
            "alegraré",
            "alegrarás",
            "alegrará",
            "alegraremos",
            "alegraréis",
            "alegrarán"
        ],
        "preterite-tense": [
            "alegré",
            "alegraste",
            "alegró",
            "alegramos",
            "alegrasteis",
            "alegraron"
        ],
        "present-subjunctive-tense": [
            "alegre",
            "alegres",
            "alegre",
            "alegremos",
            "alegréis",
            "alegren"
        ],
        "future-subjunctive-tense": [
            "alegrare",
            "alegrares",
            "alegrare",
            "alegráremos",
            "alegrareis",
            "alegraren"
        ]
    },
    "alegrarse": {
        "present-tense": [
            "me alegro",
            "te alegras",
            "se alegra",
            "nos alegramos",
            "os alegráis",
            "se alegran"
        ],
        "future-tense": [
            "me alegraré",
            "te alegrarás",
            "se alegrará",
            "nos alegraremos",
            "os alegraréis",
            "se alegrarán"
        ],
        "preterite-tense": [
            "me alegré",
            "te alegraste",
            "se alegró",
            "nos alegramos",
            "alegrasteis",
            "se alegraron"
        ],
        "present-subjunctive-tense": [
            "me alegre",
            "te alegres",
            "se alegre",
            "nos alegremos",
            "os alegréis",
            "se alegren"
        ],
        "future-subjunctive-tense": [
            "me alegrare",
            "te alegrares",
            "se alegrare",
            "nos alegráremos",
            "os alegrareis",
            "se alegraren"
        ]
    },
    "alentar": {
        "present-tense": [
            "aliento",
            "alientas",
            "alienta",
            "alentamos",
            "alentáis",
            "alientan"
        ],
        "future-tense": [
            "alentaré",
            "alentarás",
            "alentará",
            "alentaremos",
            "alentaréis",
            "alentarán"
        ],
        "preterite-tense": [
            "alenté",
            "alentaste",
            "alentó",
            "alentamos",
            "alentasteis",
            "alentaron"
        ],
        "present-subjunctive-tense": [
            "aliente",
            "alientes",
            "aliente",
            "alentemos",
            "alentéis",
            "alienten"
        ],
        "future-subjunctive-tense": [
            "alentare",
            "alentares",
            "alentare",
            "alentáremos",
            "alentareis",
            "alentaren"
        ]
    },
    "aliviar": {
        "present-tense": [
            "alivio",
            "alivias",
            "alivia",
            "aliviamos",
            "aliviáis",
            "alivian"
        ],
        "future-tense": [
            "aliviaré",
            "aliviarás",
            "aliviará",
            "aliviaremos",
            "aliviaréis",
            "aliviarán"
        ],
        "preterite-tense": [
            "alivié",
            "aliviaste",
            "alivió",
            "aliviamos",
            "aliviasteis",
            "aliviaron"
        ],
        "present-subjunctive-tense": [
            "alivie",
            "alivies",
            "alivie",
            "aliviemos",
            "aliviéis",
            "alivien"
        ],
        "future-subjunctive-tense": [
            "aliviare",
            "aliviares",
            "aliviare",
            "aliviáremos",
            "aliviareis",
            "aliviaren"
        ]
    },
    "almorzar": {
        "present-tense": [
            "almuerzo",
            "almuerzas",
            "almuerza",
            "almorzamos",
            "almorzáis",
            "almuerzan"
        ],
        "future-tense": [
            "almorzaré",
            "almorzarás",
            "almorzará",
            "almorzaremos",
            "almorzaréis",
            "almorzarán"
        ],
        "preterite-tense": [
            "almorcé",
            "almorzaste",
            "almorzó",
            "almorzamos",
            "almorzasteis",
            "almorzaron"
        ],
        "present-subjunctive-tense": [
            "almuerce",
            "almuerces",
            "almuerce",
            "almorcemos",
            "almorcéis",
            "almuercen"
        ],
        "future-subjunctive-tense": [
            "almorzare",
            "almorzares",
            "almorzare",
            "almorzáremos",
            "almorzareis",
            "almorzaren"
        ]
    },
    "alquilar": {
        "present-tense": [
            "alquilo",
            "alquilas",
            "alquila",
            "alquilamos",
            "alquiláis",
            "alquilan"
        ],
        "future-tense": [
            "alquilaré",
            "alquilarás",
            "alquilará",
            "alquilaremos",
            "alquilaréis",
            "alquilarán"
        ],
        "preterite-tense": [
            "alquilé",
            "alquilaste",
            "alquiló",
            "alquilamos",
            "alquilasteis",
            "alquilaron"
        ],
        "present-subjunctive-tense": [
            "alquile",
            "alquiles",
            "alquile",
            "alquilemos",
            "alquiléis",
            "alquilen"
        ],
        "future-subjunctive-tense": [
            "alquilare",
            "alquilares",
            "alquilare",
            "alquiláremos",
            "alquilareis",
            "alquilaren"
        ]
    },
    "amanecer": {
        "present-tense": [
            "amanezco",
            "amaneces",
            "amanece",
            "amanecemos",
            "amanecéis",
            "amanecen"
        ],
        "future-tense": [
            "amaneceré",
            "amanecerás",
            "amanecerá",
            "amaneceremos",
            "amaneceréis",
            "amanecerán"
        ],
        "preterite-tense": [
            "amanecí",
            "amaneciste",
            "amaneció",
            "amanecimos",
            "amanecisteis",
            "amanecieron"
        ],
        "present-subjunctive-tense": [
            "amanezca",
            "amanezcas",
            "amanezca",
            "amanezcamos",
            "amanezcáis",
            "amanezcan"
        ],
        "future-subjunctive-tense": [
            "amaneciere",
            "amanecieres",
            "amaneciere",
            "amaneciéremos",
            "amaneciereis",
            "amanecieren"
        ]
    },
    "amar": {
        "present-tense": [
            "amo",
            "amas",
            "ama",
            "amamos",
            "amáis",
            "aman"
        ],
        "future-tense": [
            "amaré",
            "amarás",
            "amará",
            "amaremos",
            "amaréis",
            "amarán"
        ],
        "preterite-tense": [
            "amé",
            "amaste",
            "amó",
            "amamos",
            "amasteis",
            "amaron"
        ],
        "present-subjunctive-tense": [
            "ame",
            "ames",
            "ame",
            "amemos",
            "améis",
            "amen"
        ],
        "future-subjunctive-tense": [
            "amare",
            "amares",
            "amare",
            "amáremos",
            "amareis",
            "amaren"
        ]
    },
    "amenazar": {
        "present-tense": [
            "amenazo",
            "amenazas",
            "amenaza",
            "amenazamos",
            "amenazáis",
            "amenazan"
        ],
        "future-tense": [
            "amenazaré",
            "amenazarás",
            "amenazará",
            "amenazaremos",
            "amenazaréis",
            "amenazarán"
        ],
        "preterite-tense": [
            "amenacé",
            "amenazaste",
            "amenazó",
            "amenazamos",
            "amenazasteis",
            "amenazaron"
        ],
        "present-subjunctive-tense": [
            "amenace",
            "amenaces",
            "amenace",
            "amenacemos",
            "amenacéis",
            "amenacen"
        ],
        "future-subjunctive-tense": [
            "amenazare",
            "amenazares",
            "amenazare",
            "amenazáremos",
            "amenazareis",
            "amenazaren"
        ]
    },
    "andar": {
        "present-tense": [
            "ando",
            "andas",
            "anda",
            "andamos",
            "andáis",
            "andan"
        ],
        "future-tense": [
            "andaré",
            "andarás",
            "andará",
            "andaremos",
            "andaréis",
            "andarán"
        ],
        "preterite-tense": [
            "anduve",
            "anduviste",
            "anduvo",
            "anduvimos",
            "anduvisteis",
            "anduvieron"
        ],
        "present-subjunctive-tense": [
            "ande",
            "andes",
            "ande",
            "andemos",
            "andéis",
            "anden"
        ],
        "future-subjunctive-tense": [
            "anduviere",
            "anduvieres",
            "anduviere",
            "anduviéremos",
            "anduviereis",
            "anduvieren"
        ]
    },
    "anhelar": {
        "present-tense": [
            "anhelo",
            "anhelas",
            "anhela",
            "anhelamos",
            "anheláis",
            "anhelan"
        ],
        "future-tense": [
            "anhelaré",
            "anhelarás",
            "anhelará",
            "anhelaremos",
            "anhelaréis",
            "anhelarán"
        ],
        "preterite-tense": [
            "anhelé",
            "anhelaste",
            "anheló",
            "anhelamos",
            "anhelasteis",
            "anhelaron"
        ],
        "present-subjunctive-tense": [
            "anhele",
            "anheles",
            "anhele",
            "anhelemos",
            "anheléis",
            "anhelen"
        ],
        "future-subjunctive-tense": [
            "anhelare",
            "anhelares",
            "anhelare",
            "anheláremos",
            "anhelareis",
            "anhelaren"
        ]
    },
    "anunciar": {
        "present-tense": [
            "anuncio",
            "anuncias",
            "anuncia",
            "anunciamos",
            "anunciáis",
            "anuncian"
        ],
        "future-tense": [
            "anunciaré",
            "anunciarás",
            "anunciará",
            "anunciaremos",
            "anunciaréis",
            "anunciarán"
        ],
        "preterite-tense": [
            "anuncié",
            "anunciaste",
            "anunció",
            "anunciamos",
            "anunciasteis",
            "anunciaron"
        ],
        "present-subjunctive-tense": [
            "anuncie",
            "anuncies",
            "anuncie",
            "anunciemos",
            "anunciéis",
            "anuncien"
        ],
        "future-subjunctive-tense": [
            "anunciare",
            "anunciares",
            "anunciare",
            "anunciáremos",
            "anunciareis",
            "anunciaren"
        ]
    },
    "añadir": {
        "present-tense": [
            "añado",
            "añades",
            "añade",
            "añadimos",
            "añadís",
            "añaden"
        ],
        "future-tense": [
            "añadiré",
            "añadirás",
            "añadirá",
            "añadiremos",
            "añadiréis",
            "añadirán"
        ],
        "preterite-tense": [
            "añadí",
            "añadiste",
            "añadió",
            "añadimos",
            "añadisteis",
            "añadieron"
        ],
        "present-subjunctive-tense": [
            "añada",
            "añadas",
            "añada",
            "añadamos",
            "añadáis",
            "añadan"
        ],
        "future-subjunctive-tense": [
            "añadiere",
            "añadieres",
            "añadiere",
            "añadiéremos",
            "añadiereis",
            "añadieren"
        ]
    },
    "apagar": {
        "present-tense": [
            "apago",
            "apagas",
            "apaga",
            "apagamos",
            "apagáis",
            "apagan"
        ],
        "future-tense": [
            "apagaré",
            "apagarás",
            "apagará",
            "apagaremos",
            "apagaréis",
            "apagarán"
        ],
        "preterite-tense": [
            "apagué",
            "apagaste",
            "apagó",
            "apagamos",
            "apagasteis",
            "apagaron"
        ],
        "present-subjunctive-tense": [
            "apague",
            "apagues",
            "apague",
            "apaguemos",
            "apaguéis",
            "apaguen"
        ],
        "future-subjunctive-tense": [
            "apagare",
            "apagares",
            "apagare",
            "apagáremos",
            "apagareis",
            "apagaren"
        ]
    },
    "aparecer": {
        "present-tense": [
            "aparezco",
            "apareces",
            "aparece",
            "aparecemos",
            "aparecéis",
            "aparecen"
        ],
        "future-tense": [
            "apareceré",
            "aparecerás",
            "aparecerá",
            "apareceremos",
            "apareceréis",
            "aparecerán"
        ],
        "preterite-tense": [
            "aparecí",
            "apareciste",
            "apareció",
            "aparecimos",
            "aparecisteis",
            "aparecieron"
        ],
        "present-subjunctive-tense": [
            "aparezca",
            "aparezcas",
            "aparezca",
            "aparezcamos",
            "aparezcáis",
            "aparezcan"
        ],
        "future-subjunctive-tense": [
            "apareciere",
            "aparecieres",
            "apareciere",
            "apareciéremos",
            "apareciereis",
            "aparecieren"
        ]
    },
    "aplaudir": {
        "present-tense": [
            "aplaudo",
            "aplaudes",
            "aplaude",
            "aplaudimos",
            "aplaudís",
            "aplauden"
        ],
        "future-tense": [
            "aplaudiré",
            "aplaudirás",
            "aplaudirá",
            "aplaudiremos",
            "aplaudiréis",
            "aplaudirán"
        ],
        "preterite-tense": [
            "aplaudí",
            "aplaudiste",
            "aplaudió",
            "aplaudimos",
            "aplaudisteis",
            "aplaudieron"
        ],
        "present-subjunctive-tense": [
            "aplauda",
            "aplaudas",
            "aplauda",
            "aplaudamos",
            "aplaudáis",
            "aplaudan"
        ],
        "future-subjunctive-tense": [
            "aplaudiere",
            "aplaudieres",
            "aplaudiere",
            "aplaudiéremos",
            "aplaudiereis",
            "aplaudieren"
        ]
    },
    "aplicar": {
        "present-tense": [
            "aplico",
            "aplicas",
            "aplica",
            "aplicamos",
            "aplicáis",
            "aplican"
        ],
        "future-tense": [
            "aplicaré",
            "aplicarás",
            "aplicará",
            "aplicaremos",
            "aplicaréis",
            "aplicarán"
        ],
        "preterite-tense": [
            "apliqué",
            "aplicaste",
            "aplicó",
            "aplicamos",
            "aplicasteis",
            "aplicaron"
        ],
        "present-subjunctive-tense": [
            "aplique",
            "apliques",
            "aplique",
            "apliquemos",
            "apliquéis",
            "apliquen"
        ],
        "future-subjunctive-tense": [
            "aplicare",
            "aplicares",
            "aplicare",
            "aplicáremos",
            "aplicareis",
            "aplicaren"
        ]
    },
    "apostar": {
        "present-tense": [
            "apuesto",
            "apuestas",
            "apuesta",
            "apostamos",
            "apostáis",
            "apuestan"
        ],
        "future-tense": [
            "apostaré",
            "apostarás",
            "apostará",
            "apostaremos",
            "apostaréis",
            "apostarán"
        ],
        "preterite-tense": [
            "aposté",
            "apostaste",
            "apostó",
            "apostamos",
            "apostasteis",
            "apostaron"
        ],
        "present-subjunctive-tense": [
            "apueste",
            "apuestes",
            "apueste",
            "apostemos",
            "apostéis",
            "apuesten"
        ],
        "future-subjunctive-tense": [
            "apostare",
            "apostares",
            "apostare",
            "apostáremos",
            "apostareis",
            "apostaren"
        ]
    },
    "apoyar": {
        "present-tense": [
            "apoyo",
            "apoyas",
            "apoya",
            "apoyamos",
            "apoyáis",
            "apoyan"
        ],
        "future-tense": [
            "apoyaré",
            "apoyarás",
            "apoyará",
            "apoyaremos",
            "apoyaréis",
            "apoyarán"
        ],
        "preterite-tense": [
            "apoyé",
            "apoyaste",
            "apoyó",
            "apoyamos",
            "apoyasteis",
            "apoyaron"
        ],
        "present-subjunctive-tense": [
            "apoye",
            "apoyes",
            "apoye",
            "apoyemos",
            "apoyéis",
            "apoyen"
        ],
        "future-subjunctive-tense": [
            "apoyare",
            "apoyares",
            "apoyare",
            "apoyáremos",
            "apoyareis",
            "apoyaren"
        ]
    },
    "apreciar": {
        "present-tense": [
            "aprecio",
            "aprecias",
            "aprecia",
            "apreciamos",
            "apreciáis",
            "aprecian"
        ],
        "future-tense": [
            "apreciaré",
            "apreciarás",
            "apreciará",
            "apreciaremos",
            "apreciaréis",
            "apreciarán"
        ],
        "preterite-tense": [
            "aprecié",
            "apreciaste",
            "apreció",
            "apreciamos",
            "apreciasteis",
            "apreciaron"
        ],
        "present-subjunctive-tense": [
            "aprecie",
            "aprecies",
            "aprecie",
            "apreciemos",
            "apreciéis",
            "aprecien"
        ],
        "future-subjunctive-tense": [
            "apreciare",
            "apreciares",
            "apreciare",
            "apreciáremos",
            "apreciareis",
            "apreciaren"
        ]
    },
    "aprender": {
        "present-tense": [
            "aprendo",
            "aprendes",
            "aprende",
            "aprendemos",
            "aprendéis",
            "aprenden"
        ],
        "future-tense": [
            "aprenderé",
            "aprenderás",
            "aprenderá",
            "aprenderemos",
            "aprenderéis",
            "aprenderán"
        ],
        "preterite-tense": [
            "aprendí",
            "aprendiste",
            "aprendió",
            "aprendimos",
            "aprendisteis",
            "aprendieron"
        ],
        "present-subjunctive-tense": [
            "aprenda",
            "aprendas",
            "aprenda",
            "aprendamos",
            "aprendáis",
            "aprendan"
        ],
        "future-subjunctive-tense": [
            "aprendiere",
            "aprendieres",
            "aprendiere",
            "aprendiéremos",
            "aprendiereis",
            "aprendieren"
        ]
    },
    "apretar": {
        "present-tense": [
            "aprieto",
            "aprietas",
            "aprieta",
            "apretamos",
            "apretáis",
            "aprietan"
        ],
        "future-tense": [
            "apretaré",
            "apretarás",
            "apretará",
            "apretaremos",
            "apretaréis",
            "apretarán"
        ],
        "preterite-tense": [
            "apreté",
            "apretaste",
            "apretó",
            "apretamos",
            "apretasteis",
            "apretaron"
        ],
        "present-subjunctive-tense": [
            "apriete",
            "aprietes",
            "apriete",
            "apretemos",
            "apretéis",
            "aprieten"
        ],
        "future-subjunctive-tense": [
            "apretare",
            "apretares",
            "apretare",
            "apretáremos",
            "apretareis",
            "apretaren"
        ]
    },
    "asistir": {
        "present-subjunctive-tense": [
            "asista",
            "asistas",
            "asista",
            "asistamos",
            "asistáis",
            "asistan"
        ],
        "present-tense": [
            "asisto",
            "asistes",
            "asiste",
            "asistimos",
            "asistís",
            "asisten"
        ],
        "future-tense": [
            "asistiré",
            "asistirás",
            "asistirá",
            "asistiremos",
            "asistiréis",
            "asistirán"
        ],
        "preterite-tense": [
            "asistí",
            "asististe",
            "asistió",
            "asistimos",
            "asististeis",
            "asistieron"
        ],
        "future-subjunctive-tense": [
            "asistiere",
            "asistieres",
            "asistiere",
            "asistiéremos",
            "asistiereis",
            "asistieren"
        ]
    },
    "aprobar": {
        "present-tense": [
            "apruebo",
            "apruebas",
            "aprueba",
            "aprobamos",
            "aprobáis",
            "aprueban"
        ],
        "future-tense": [
            "aprobaré",
            "aprobarás",
            "aprobará",
            "aprobaremos",
            "aprobaréis",
            "aprobarán"
        ],
        "preterite-tense": [
            "aprobé",
            "aprobaste",
            "aprobó",
            "aprobamos",
            "aprobasteis",
            "aprobaron"
        ],
        "present-subjunctive-tense": [
            "apruebe",
            "apruebes",
            "apruebe",
            "aprobemos",
            "aprobéis",
            "aprueben"
        ],
        "future-subjunctive-tense": [
            "aprobare",
            "aprobares",
            "aprobare",
            "aprobáremos",
            "aprobareis",
            "aprobaren"
        ]
    },
    "arreglar": {
        "present-tense": [
            "arreglo",
            "arreglas",
            "arregla",
            "arreglamos",
            "arregláis",
            "arreglan"
        ],
        "future-tense": [
            "arreglaré",
            "arreglarás",
            "arreglará",
            "arreglaremos",
            "arreglaréis",
            "arreglarán"
        ],
        "preterite-tense": [
            "arreglé",
            "arreglaste",
            "arregló",
            "arreglamos",
            "arreglasteis",
            "arreglaron"
        ],
        "present-subjunctive-tense": [
            "arregle",
            "arregles",
            "arregle",
            "arreglemos",
            "arregléis",
            "arreglen"
        ],
        "future-subjunctive-tense": [
            "arreglare",
            "arreglares",
            "arreglare",
            "arregláremos",
            "arreglareis",
            "arreglaren"
        ]
    },
    "ayudar": {
        "present-tense": [
            "ayudo",
            "ayudas",
            "ayuda",
            "ayudamos",
            "ayudáis",
            "ayudan"
        ],
        "future-tense": [
            "ayudaré",
            "ayudarás",
            "ayudará",
            "ayudaremos",
            "ayudaréis",
            "ayudarán"
        ],
        "preterite-tense": [
            "ayudé",
            "ayudaste",
            "ayudó",
            "ayudamos",
            "ayudasteis",
            "ayudaron"
        ],
        "present-subjunctive-tense": [
            "ayude",
            "ayudes",
            "ayude",
            "ayudemos",
            "ayudéis",
            "ayuden"
        ],
        "future-subjunctive-tense": [
            "ayudare",
            "ayudares",
            "ayudare",
            "ayudáremos",
            "ayudareis",
            "ayudaren"
        ]
    },
    "arrepentirse": {
        "present-tense": [
            "me arrepiento",
            "te arrepientes",
            "se arrepiente",
            "nos arrepentimos",
            "os arrepentís",
            "se arrepienten"
        ],
        "future-tense": [
            "me arrepentiré",
            "te arrepentirás",
            "se arrepentirá",
            "nos arrepentiremos",
            "os arrepentiréis",
            "se arrepentirán"
        ],
        "preterite-tense": [
            "me arrepentí",
            "te arrepentiste",
            "se arrepintió",
            "nos arrepentimos",
            "os arrepentisteis",
            "se arrepintieron"
        ],
        "present-subjunctive-tense": [
            "me arrepienta",
            "te arrepientas",
            "se arrepienta",
            "nos arrepintamos",
            "os arrepintáis",
            "se arrepientan"
        ],
        "future-subjunctive-tense": [
            "me arrepintiere",
            "te arrepintieres",
            "se arrepintiere",
            "nos arrepintiéremos",
            "os arrepintiereis",
            "se arrepintieren"
        ]
    },
    "arrojar": {
        "present-tense": [
            "arrojo",
            "arrojas",
            "arroja",
            "arrojamos",
            "arrojáis",
            "arrojan"
        ],
        "future-tense": [
            "arrojaré",
            "arrojarás",
            "arrojará",
            "arrojaremos",
            "arrojaréis",
            "arrojarán"
        ],
        "preterite-tense": [
            "arrojé",
            "arrojaste",
            "arrojó",
            "arrojamos",
            "arrojasteis",
            "arrojaron"
        ],
        "present-subjunctive-tense": [
            "arroje",
            "arrojes",
            "arroje",
            "arrojemos",
            "arrojéis",
            "arrojen"
        ],
        "future-subjunctive-tense": [
            "arrojare",
            "arrojares",
            "arrojare",
            "arrojáremos",
            "arrojareis",
            "arrojaren"
        ]
    },
    "asociar": {
        "present-tense": [
            "asocio",
            "asocias",
            "asocia",
            "asociamos",
            "asociáis",
            "asocian"
        ],
        "future-tense": [
            "asociaré",
            "asociarás",
            "asociará",
            "asociaremos",
            "asociaréis",
            "asociarán"
        ],
        "preterite-tense": [
            "asocié",
            "asociaste",
            "asoció",
            "asociamos",
            "asociasteis",
            "asociaron"
        ],
        "present-subjunctive-tense": [
            "asocie",
            "asocies",
            "asocie",
            "asociemos",
            "asociéis",
            "asocien"
        ],
        "future-subjunctive-tense": [
            "asociare",
            "asociares",
            "asociare",
            "asociáremos",
            "asociareis",
            "asociaren"
        ]
    },
    "aspirar": {
        "present-tense": [
            "aspiro",
            "aspiras",
            "aspira",
            "aspiramos",
            "aspiráis",
            "aspiran"
        ],
        "future-tense": [
            "aspiraré",
            "aspirarás",
            "aspirará",
            "aspiraremos",
            "aspiraréis",
            "aspirarán"
        ],
        "preterite-tense": [
            "aspiré",
            "aspiraste",
            "aspiró",
            "aspiramos",
            "aspirasteis",
            "aspiraron"
        ],
        "present-subjunctive-tense": [
            "aspire",
            "aspires",
            "aspire",
            "aspiremos",
            "aspiréis",
            "aspiren"
        ],
        "future-subjunctive-tense": [
            "aspirare",
            "aspirares",
            "aspirare",
            "aspiráremos",
            "aspirareis",
            "aspiraren"
        ]
    },
    "asustar": {
        "present-tense": [
            "asusto",
            "asustas",
            "asusta",
            "asustamos",
            "asustáis",
            "asustan"
        ],
        "future-tense": [
            "asustaré",
            "asustarás",
            "asustará",
            "asustaremos",
            "asustaréis",
            "asustarán"
        ],
        "preterite-tense": [
            "asusté",
            "asustaste",
            "asustó",
            "asustamos",
            "asustasteis",
            "asustaron"
        ],
        "present-subjunctive-tense": [
            "asuste",
            "asustes",
            "asuste",
            "asustemos",
            "asustéis",
            "asusten"
        ],
        "future-subjunctive-tense": [
            "asustare",
            "asustares",
            "asustare",
            "asustáremos",
            "asustareis",
            "asustaren"
        ]
    },
    "asustarse": {
        "present-tense": [
            "me asusto",
            "te asustas",
            "se asusta",
            "nos asustamos",
            "os asustáis",
            "se asustan"
        ],
        "future-tense": [
            "me asustaré",
            "te asustarás",
            "se asustará",
            "nos asustaremos",
            "os asustaréis",
            "se asustarán"
        ],
        "preterite-tense": [
            "me asusté",
            "te asustaste",
            "se asustó",
            "nos asustamos",
            "os asustasteis",
            "se asustaron"
        ],
        "present-subjunctive-tense": [
            "me asuste",
            "te asustes",
            "se asuste",
            "nos asustemos",
            "os asustéis",
            "se asusten"
        ],
        "future-subjunctive-tense": [
            "me asustare",
            "te asustares",
            "se asustare",
            "nos asustáremos",
            "os asustareis",
            "se asustaren"
        ]
    },
    "atacar": {
        "present-tense": [
            "ataco",
            "atacas",
            "ataca",
            "atacamos",
            "atacáis",
            "atacan"
        ],
        "future-tense": [
            "atacaré",
            "atacarás",
            "atacará",
            "atacaremos",
            "atacaréis",
            "atacarán"
        ],
        "preterite-tense": [
            "ataqué",
            "atacaste",
            "atacó",
            "atacamos",
            "atacasteis",
            "atacaron"
        ],
        "present-subjunctive-tense": [
            "ataque",
            "ataques",
            "ataque",
            "ataquemos",
            "ataquéis",
            "ataquen"
        ],
        "future-subjunctive-tense": [
            "atacare",
            "atacares",
            "atacare",
            "atacáremos",
            "atacareis",
            "atacaren"
        ]
    },
    "atender": {
        "present-tense": [
            "atiendo",
            "atiendes",
            "atiende",
            "atendemos",
            "atendéis",
            "atienden"
        ],
        "future-tense": [
            "atenderé",
            "atenderás",
            "atenderá",
            "atenderemos",
            "atenderéis",
            "atenderán"
        ],
        "preterite-tense": [
            "atendí",
            "atendiste",
            "atendió",
            "atendimos",
            "atendisteis",
            "atendieron"
        ],
        "present-subjunctive-tense": [
            "atienda",
            "atiendas",
            "atienda",
            "atendamos",
            "atendáis",
            "atiendan"
        ],
        "future-subjunctive-tense": [
            "atendiere",
            "atendieres",
            "atendiere",
            "atendiéremos",
            "atendiereis",
            "atendieren"
        ]
    },
    "atraer": {
        "present-tense": [
            "atraigo",
            "atraes",
            "atrae",
            "atraemos",
            "atraéis",
            "atraen"
        ],
        "future-tense": [
            "atraeré",
            "atraerás",
            "atraerá",
            "atraeremos",
            "atraeréis",
            "atraerán"
        ],
        "preterite-tense": [
            "atraje",
            "atrajiste",
            "atrajo",
            "atrajimos",
            "atrajisteis",
            "atrajeron"
        ],
        "present-subjunctive-tense": [
            "atraiga",
            "atraigas",
            "atraiga",
            "atraigamos",
            "atraigáis",
            "atraigan"
        ],
        "future-subjunctive-tense": [
            "atrajere",
            "atrajeres",
            "atrajere",
            "atrajéremos",
            "atrajereis",
            "atrajeren"
        ]
    },
    "atravesar": {
        "present-tense": [
            "atravieso",
            "atraviesas",
            "atraviesa",
            "atravesamos",
            "atravesáis",
            "atraviesan"
        ],
        "future-tense": [
            "atravesaré",
            "atravesarás",
            "atravesará",
            "atravesaremos",
            "atravesaréis",
            "atravesarán"
        ],
        "preterite-tense": [
            "atravesé",
            "atravesaste",
            "atravesó",
            "atravesamos",
            "atravesasteis",
            "atravesaron"
        ],
        "present-subjunctive-tense": [
            "atraviese",
            "atravieses",
            "atraviese",
            "atravesemos",
            "atraveséis",
            "atraviesen"
        ],
        "future-subjunctive-tense": [
            "atravesare",
            "atravesares",
            "atravesare",
            "atravesáremos",
            "atravesareis",
            "atravesaren"
        ]
    },
    "atreverse": {
        "present-tense": [
            "me atrevo",
            "te atreves",
            "se atreve",
            "nos atrevemos",
            "os atrevéis",
            "se atreven"
        ],
        "future-tense": [
            "me atreveré",
            "te atreverás",
            "se atreverá",
            "nos atreveremos",
            "os atreveréis",
            "se atreverán"
        ],
        "preterite-tense": [
            "me atreví",
            "te atreviste",
            "se atrevió",
            "nos atrevimos",
            "os atrevisteis",
            "se atrevieron"
        ],
        "present-subjunctive-tense": [
            "me atreva",
            "te atrevas",
            "se atreva",
            "nos atrevamos",
            "os atreváis",
            "se atrevan"
        ],
        "future-subjunctive-tense": [
            "me atreviere",
            "te atrevieres",
            "se atreviere",
            "nos atreviéremos",
            "os atreviereis",
            "se atrevieren"
        ]
    },
    "aumentar": {
        "present-tense": [
            "aumento",
            "aumentas",
            "aumenta",
            "aumentamos",
            "aumentáis",
            "aumentan"
        ],
        "future-tense": [
            "aumentaré",
            "aumentarás",
            "aumentará",
            "aumentaremos",
            "aumentaréis",
            "aumentarán"
        ],
        "preterite-tense": [
            "aumenté",
            "aumentaste",
            "aumentó",
            "aumentamos",
            "aumentasteis",
            "aumentaron"
        ],
        "present-subjunctive-tense": [
            "aumente",
            "aumentes",
            "aumente",
            "aumentemos",
            "aumentéis",
            "aumenten"
        ],
        "future-subjunctive-tense": [
            "aumentare",
            "aumentares",
            "aumentare",
            "aumentáremos",
            "aumentareis",
            "aumentaren"
        ]
    },
    "avanzar": {
        "present-tense": [
            "avanzo",
            "avanzas",
            "avanza",
            "avanzamos",
            "avanzáis",
            "avanzan"
        ],
        "future-tense": [
            "avanzaré",
            "avanzarás",
            "avanzará",
            "avanzaremos",
            "avanzaréis",
            "avanzarán"
        ],
        "preterite-tense": [
            "avancé",
            "avanzaste",
            "avanzó",
            "avanzamos",
            "avanzasteis",
            "avanzaron"
        ],
        "present-subjunctive-tense": [
            "avance",
            "avances",
            "avance",
            "avancemos",
            "avancéis",
            "avancen"
        ],
        "future-subjunctive-tense": [
            "avanzare",
            "avanzares",
            "avanzare",
            "avanzáremos",
            "avanzareis",
            "avanzaren"
        ]
    },
    "averiguar": {
        "present-tense": [
            "averiguo",
            "averiguas",
            "averigua",
            "averiguamos",
            "averiguáis",
            "averiguan"
        ],
        "future-tense": [
            "averiguaré",
            "averiguarás",
            "averiguará",
            "averiguaremos",
            "averiguaréis",
            "averiguarán"
        ],
        "preterite-tense": [
            "averigüé",
            "averiguaste",
            "averiguó",
            "averiguamos",
            "averiguasteis",
            "averiguaron"
        ],
        "present-subjunctive-tense": [
            "averigüe",
            "averigües",
            "averigüe",
            "averigüemos",
            "averigüéis",
            "averigüen"
        ],
        "future-subjunctive-tense": [
            "averiguare",
            "averiguares",
            "averiguare",
            "averiguáremos",
            "averiguareis",
            "averiguaren"
        ]
    },
    "avisar": {
        "present-tense": [
            "aviso",
            "avisas",
            "avisa",
            "avisamos",
            "avisáis",
            "avisan"
        ],
        "future-tense": [
            "avisaré",
            "avisarás",
            "avisará",
            "avisaremos",
            "avisaréis",
            "avisarán"
        ],
        "preterite-tense": [
            "avisé",
            "avisaste",
            "avisó",
            "avisamos",
            "avisasteis",
            "avisaron"
        ],
        "present-subjunctive-tense": [
            "avise",
            "avises",
            "avise",
            "avisemos",
            "aviséis",
            "avisen"
        ],
        "future-subjunctive-tense": [
            "avisare",
            "avisares",
            "avisare",
            "avisáremos",
            "avisareis",
            "avisaren"
        ]
    },
    "bajar": {
        "present-tense": [
            "bajo",
            "bajas",
            "baja",
            "bajamos",
            "bajáis",
            "bajan"
        ],
        "future-tense": [
            "bajaré",
            "bajarás",
            "bajará",
            "bajaremos",
            "bajaréis",
            "bajarán"
        ],
        "preterite-tense": [
            "bajé",
            "bajaste",
            "bajó",
            "bajamos",
            "bajasteis",
            "bajaron"
        ],
        "present-subjunctive-tense": [
            "baje",
            "bajes",
            "baje",
            "bajemos",
            "bajéis",
            "bajen"
        ],
        "future-subjunctive-tense": [
            "bajare",
            "bajares",
            "bajare",
            "bajáremos",
            "bajareis",
            "bajaren"
        ]
    },
    "bañar": {
        "present-tense": [
            "baño",
            "bañas",
            "baña",
            "bañamos",
            "bañáis",
            "bañan"
        ],
        "future-tense": [
            "bañaré",
            "bañarás",
            "bañará",
            "bañaremos",
            "bañaréis",
            "bañarán"
        ],
        "preterite-tense": [
            "bañé",
            "bañaste",
            "bañó",
            "bañamos",
            "bañasteis",
            "bañaron"
        ],
        "present-subjunctive-tense": [
            "bañe",
            "bañes",
            "bañe",
            "bañemos",
            "bañéis",
            "bañen"
        ],
        "future-subjunctive-tense": [
            "bañare",
            "bañares",
            "bañare",
            "bañáremos",
            "bañareis",
            "bañaren"
        ]
    },
    "bañarse": {
        "present-tense": [
            "me baño",
            "te bañas",
            "se baña",
            "nos bañamos",
            "os bañáis",
            "se bañan"
        ],
        "future-tense": [
            "me bañaré",
            "te bañarás",
            "se bañará",
            "nos bañaremos",
            "os bañaréis",
            "se bañarán"
        ],
        "preterite-tense": [
            "me bañé",
            "te bañaste",
            "se bañó",
            "nos bañamos",
            "os bañasteis",
            "se bañaron"
        ],
        "present-subjunctive-tense": [
            "me bañe",
            "te bañes",
            "se bañe",
            "nos bañemos",
            "os bañéis",
            "se bañen"
        ],
        "future-subjunctive-tense": [
            "me bañare",
            "te bañares",
            "se bañare",
            "nos bañáremos",
            "os bañareis",
            "se bañaren"
        ]
    },
    "barrer": {
        "present-tense": [
            "barro",
            "barres",
            "barre",
            "barremos",
            "barréis",
            "barren"
        ],
        "future-tense": [
            "barreré",
            "barrerás",
            "barrerá",
            "barreremos",
            "barreréis",
            "barrerán"
        ],
        "preterite-tense": [
            "barrí",
            "barriste",
            "barrió",
            "barrimos",
            "barristeis",
            "barrieron"
        ],
        "present-subjunctive-tense": [
            "barra",
            "barras",
            "barra",
            "barramos",
            "barráis",
            "barran"
        ],
        "future-subjunctive-tense": [
            "barriere",
            "barrieres",
            "barriere",
            "barriéremos",
            "barriereis",
            "barrieren"
        ]
    },
    "batir": {
        "present-tense": [
            "bato",
            "bates",
            "bate",
            "batimos",
            "batís",
            "baten"
        ],
        "future-tense": [
            "batiré",
            "batirás",
            "batirá",
            "batiremos",
            "batiréis",
            "batirán"
        ],
        "preterite-tense": [
            "batí",
            "batiste",
            "batió",
            "batimos",
            "batisteis",
            "batieron"
        ],
        "present-subjunctive-tense": [
            "bata",
            "batas",
            "bata",
            "batamos",
            "batáis",
            "batan"
        ],
        "future-subjunctive-tense": [
            "batiere",
            "batieres",
            "batiere",
            "batiéremos",
            "batiereis",
            "batieren"
        ]
    },
    "bautizar": {
        "present-tense": [
            "bautizo",
            "bautizas",
            "bautiza",
            "bautizamos",
            "bautizáis",
            "bautizan"
        ],
        "future-tense": [
            "bautizaré",
            "bautizarás",
            "bautizará",
            "bautizaremos",
            "bautizaréis",
            "bautizarán"
        ],
        "preterite-tense": [
            "bauticé",
            "bautizaste",
            "bautizó",
            "bautizamos",
            "bautizasteis",
            "bautizaron"
        ],
        "present-subjunctive-tense": [
            "bautice",
            "bautices",
            "bautice",
            "bauticemos",
            "bauticéis",
            "bauticen"
        ],
        "future-subjunctive-tense": [
            "bautizare",
            "bautizares",
            "bautizare",
            "bautizáremos",
            "bautizareis",
            "bautizaren"
        ]
    },
    "beber": {
        "present-tense": [
            "bebo",
            "bebes",
            "bebe",
            "bebemos",
            "bebéis",
            "beben"
        ],
        "future-tense": [
            "beberé",
            "beberás",
            "beberá",
            "beberemos",
            "beberéis",
            "beberán"
        ],
        "preterite-tense": [
            "bebí",
            "bebiste",
            "bebió",
            "bebimos",
            "bebisteis",
            "bebieron"
        ],
        "present-subjunctive-tense": [
            "beba",
            "bebas",
            "beba",
            "bebamos",
            "bebáis",
            "beban"
        ],
        "future-subjunctive-tense": [
            "bebiere",
            "bebieres",
            "bebiere",
            "bebiéremos",
            "bebiereis",
            "bebieren"
        ]
    },
    "bendecir": {
        "present-tense": [
            "bendigo",
            "bendices",
            "bendice",
            "bendecimos",
            "bendecís",
            "bendicen"
        ],
        "future-tense": [
            "bendeciré",
            "bendecirás",
            "bendecirá",
            "bendeciremos",
            "bendeciréis",
            "bendecirán"
        ],
        "preterite-tense": [
            "bendije",
            "bendijiste",
            "bendijo",
            "bendijimos",
            "bendijisteis",
            "bendijeron"
        ],
        "present-subjunctive-tense": [
            "bendiga",
            "bendigas",
            "bendiga",
            "bendigamos",
            "bendigáis",
            "bendigan"
        ],
        "future-subjunctive-tense": [
            "bendijere",
            "bendijeres",
            "bendijere",
            "bendijéremos",
            "bendijereis",
            "bendijeren"
        ]
    },
    "bordar": {
        "present-tense": [
            "bordo",
            "bordas",
            "borda",
            "bordamos",
            "bordáis",
            "bordan"
        ],
        "future-tense": [
            "bordaré",
            "bordarás",
            "bordará",
            "bordaremos",
            "bordaréis",
            "bordarán"
        ],
        "preterite-tense": [
            "bordé",
            "bordaste",
            "bordó",
            "bordamos",
            "bordasteis",
            "bordaron"
        ],
        "present-subjunctive-tense": [
            "borde",
            "bordes",
            "borde",
            "bordemos",
            "bordéis",
            "borden"
        ],
        "future-subjunctive-tense": [
            "bordare",
            "bordares",
            "bordare",
            "bordáremos",
            "bordareis",
            "bordaren"
        ]
    },
    "borrar": {
        "present-tense": [
            "borro",
            "borras",
            "borra",
            "borramos",
            "borráis",
            "borran"
        ],
        "future-tense": [
            "borraré",
            "borrarás",
            "borrará",
            "borraremos",
            "borraréis",
            "borrarán"
        ],
        "preterite-tense": [
            "borré",
            "borraste",
            "borró",
            "borramos",
            "borrasteis",
            "borraron"
        ],
        "present-subjunctive-tense": [
            "borre",
            "borres",
            "borre",
            "borremos",
            "borréis",
            "borren"
        ],
        "future-subjunctive-tense": [
            "borrare",
            "borrares",
            "borrare",
            "borráremos",
            "borrareis",
            "borraren"
        ]
    },
    "brillar": {
        "present-tense": [
            "brillo",
            "brillas",
            "brilla",
            "brillamos",
            "brilláis",
            "brillan"
        ],
        "future-tense": [
            "brillaré",
            "brillarás",
            "brillará",
            "brillaremos",
            "brillaréis",
            "brillarán"
        ],
        "preterite-tense": [
            "brillé",
            "brillaste",
            "brilló",
            "brillamos",
            "brillasteis",
            "brillaron"
        ],
        "present-subjunctive-tense": [
            "brille",
            "brilles",
            "brille",
            "brillemos",
            "brilléis",
            "brillen"
        ],
        "future-subjunctive-tense": [
            "brillare",
            "brillares",
            "brillare",
            "brilláremos",
            "brillareis",
            "brillaren"
        ]
    },
    "charlar": {
        "present-subjunctive-tense": [
            "charle",
            "charles",
            "charle",
            "charlemos",
            "charléis",
            "charlen"
        ],
        "present-tense": [
            "charlo",
            "charlas",
            "charla",
            "charlamos",
            "charláis",
            "charlan"
        ],
        "future-tense": [
            "charlaré",
            "charlarás",
            "charlará",
            "charlaremos",
            "charlaréis",
            "charlarán"
        ],
        "preterite-tense": [
            "charlé",
            "charlaste",
            "charló",
            "charlamos",
            "charlasteis",
            "charlaron"
        ],
        "future-subjunctive-tense": [
            "charlare",
            "charlares",
            "charlare",
            "charláremos",
            "charlareis",
            "charlaren"
        ]
    },
    "brindar": {
        "present-tense": [
            "brindo",
            "brindas",
            "brinda",
            "brindamos",
            "brindáis",
            "brindan"
        ],
        "future-tense": [
            "brindaré",
            "brindarás",
            "brindará",
            "brindaremos",
            "brindaréis",
            "brindarán"
        ],
        "preterite-tense": [
            "brindé",
            "brindaste",
            "brindó",
            "brindamos",
            "brindasteis",
            "brindaron"
        ],
        "present-subjunctive-tense": [
            "brinde",
            "brindes",
            "brinde",
            "brindemos",
            "brindéis",
            "brinden"
        ],
        "future-subjunctive-tense": [
            "brindare",
            "brindares",
            "brindare",
            "brindáremos",
            "brindareis",
            "brindaren"
        ]
    },
    "broncearse": {
        "present-tense": [
            "me bronceo",
            "te bronceas",
            "se broncea",
            "nos bronceamos",
            "os bronceáis",
            "se broncean"
        ],
        "future-tense": [
            "me broncearé",
            "te broncearás",
            "se bronceará",
            "nos broncearemos",
            "os broncearéis",
            "se broncearán"
        ],
        "preterite-tense": [
            "me bronceé",
            "te bronceaste",
            "se bronceó",
            "nos bronceamos",
            "os bronceasteis",
            "se broncearon"
        ],
        "present-subjunctive-tense": [
            "me broncee",
            "te broncees",
            "se broncee",
            "nos bronceemos",
            "os bronceéis",
            "se bronceen"
        ],
        "future-subjunctive-tense": [
            "me bronceare",
            "te bronceares",
            "se bronceare",
            "nos bronceáremos",
            "os bronceareis",
            "se broncearen"
        ]
    },
    "bucear": {
        "present-tense": [
            "buceo",
            "buceas",
            "bucea",
            "buceamos",
            "buceáis",
            "bucean"
        ],
        "future-tense": [
            "bucearé",
            "bucearás",
            "buceará",
            "bucearemos",
            "bucearéis",
            "bucearán"
        ],
        "preterite-tense": [
            "buceé",
            "buceaste",
            "buceó",
            "buceamos",
            "buceasteis",
            "bucearon"
        ],
        "present-subjunctive-tense": [
            "bucee",
            "bucees",
            "bucee",
            "buceemos",
            "buceéis",
            "buceen"
        ],
        "future-subjunctive-tense": [
            "buceare",
            "buceares",
            "buceare",
            "buceáremos",
            "buceareis",
            "bucearen"
        ]
    },
    "burlar": {
        "present-tense": [
            "burlo",
            "burlas",
            "burla",
            "burlamos",
            "burláis",
            "burlan"
        ],
        "future-tense": [
            "burlaré",
            "burlarás",
            "burlará",
            "burlaremos",
            "burlaréis",
            "burlarán"
        ],
        "preterite-tense": [
            "burlé",
            "burlaste",
            "burló",
            "burlamos",
            "burlasteis",
            "burlaron"
        ],
        "present-subjunctive-tense": [
            "burle",
            "burles",
            "burle",
            "burlemos",
            "burléis",
            "burlen"
        ],
        "future-subjunctive-tense": [
            "burlare",
            "burlares",
            "burlare",
            "burláremos",
            "burlareis",
            "burlaren"
        ]
    },
    "burlarse": {
        "present-tense": [
            "me burlo",
            "te burlas",
            "se burla",
            "nos burlamos",
            "os burláis",
            "se burlan"
        ],
        "future-tense": [
            "me burlaré",
            "te burlarás",
            "se burlará",
            "nos burlaremos",
            "os burlaréis",
            "se burlarán"
        ],
        "preterite-tense": [
            "me burlé",
            "te burlaste",
            "se burló",
            "nos burlamos",
            "os burlasteis",
            "se burlaron"
        ],
        "present-subjunctive-tense": [
            "me burle",
            "te burles",
            "se burle",
            "nos burlemos",
            "os burléis",
            "se burlen"
        ],
        "future-subjunctive-tense": [
            "me burlare",
            "te burlares",
            "se burlare",
            "nos burláremos",
            "os burlareis",
            "se burlaren"
        ]
    },
    "buscar": {
        "present-tense": [
            "busco",
            "buscas",
            "busca",
            "buscamos",
            "buscáis",
            "buscan"
        ],
        "future-tense": [
            "buscaré",
            "buscarás",
            "buscará",
            "buscaremos",
            "buscaréis",
            "buscarán"
        ],
        "preterite-tense": [
            "busqué",
            "buscaste",
            "buscó",
            "buscamos",
            "buscasteis",
            "buscaron"
        ],
        "present-subjunctive-tense": [
            "busque",
            "busques",
            "busque",
            "busquemos",
            "busquéis",
            "busquen"
        ],
        "future-subjunctive-tense": [
            "buscare",
            "buscares",
            "buscare",
            "buscáremos",
            "buscareis",
            "buscaren"
        ]
    },
    "caber": {
        "present-tense": [
            "quepo",
            "cabes",
            "cabe",
            "cabemos",
            "cabéis",
            "caben"
        ],
        "future-tense": [
            "cabré",
            "cabrás",
            "cabrá",
            "cabremos",
            "cabréis",
            "cabrán"
        ],
        "preterite-tense": [
            "cupe",
            "cupiste",
            "cupo",
            "cupimos",
            "cupisteis",
            "cupieron"
        ],
        "present-subjunctive-tense": [
            "quepa",
            "quepas",
            "quepa",
            "quepamos",
            "quepáis",
            "quepan"
        ],
        "future-subjunctive-tense": [
            "cupiere",
            "cupieres",
            "cupiere",
            "cupiéremos",
            "cupiereis",
            "cupieren"
        ]
    },
    "caer": {
        "present-tense": [
            "caigo",
            "caes",
            "cae",
            "caemos",
            "caéis",
            "caen"
        ],
        "future-tense": [
            "caeré",
            "caerás",
            "caerá",
            "caeremos",
            "caeréis",
            "caerán"
        ],
        "preterite-tense": [
            "caí",
            "caíste",
            "cayó",
            "caímos",
            "caísteis",
            "cayeron"
        ],
        "present-subjunctive-tense": [
            "caiga",
            "caigas",
            "caiga",
            "caigamos",
            "caigáis",
            "caigan"
        ],
        "future-subjunctive-tense": [
            "cayere",
            "cayeres",
            "cayere",
            "cayéremos",
            "cayereis",
            "cayeren"
        ]
    },
    "calcular": {
        "present-tense": [
            "calculo",
            "calculas",
            "calcula",
            "calculamos",
            "calculáis",
            "calculan"
        ],
        "future-tense": [
            "calcularé",
            "calcularás",
            "calculará",
            "calcularemos",
            "calcularéis",
            "calcularán"
        ],
        "preterite-tense": [
            "calculé",
            "calculaste",
            "calculó",
            "calculamos",
            "calculasteis",
            "calcularon"
        ],
        "present-subjunctive-tense": [
            "calcule",
            "calcules",
            "calcule",
            "calculemos",
            "calculéis",
            "calculen"
        ],
        "future-subjunctive-tense": [
            "calculare",
            "calculares",
            "calculare",
            "calculáremos",
            "calculareis",
            "calcularen"
        ]
    },
    "calentar": {
        "present-tense": [
            "caliento",
            "calientas",
            "calienta",
            "calentamos",
            "calentáis",
            "calientan"
        ],
        "future-tense": [
            "calentaré",
            "calentarás",
            "calentará",
            "calentaremos",
            "calentaréis",
            "calentarán"
        ],
        "preterite-tense": [
            "calenté",
            "calentaste",
            "calentó",
            "calentamos",
            "calentasteis",
            "calentaron"
        ],
        "present-subjunctive-tense": [
            "caliente",
            "calientes",
            "caliente",
            "calentemos",
            "calentéis",
            "calienten"
        ],
        "future-subjunctive-tense": [
            "calentare",
            "calentares",
            "calentare",
            "calentáremos",
            "calentareis",
            "calentaren"
        ]
    },
    "calentarse": {
        "present-tense": [
            "me caliento",
            "te calientas",
            "se calienta",
            "nos calentamos",
            "os calentáis",
            "se calientan"
        ],
        "future-tense": [
            "me calentaré",
            "te calentarás",
            "se calentará",
            "nos calentaremos",
            "os calentaréis",
            "se calentarán"
        ],
        "preterite-tense": [
            "me calenté",
            "te calentaste",
            "se calentó",
            "nos calentamos",
            "os calentasteis",
            "se calentaron"
        ],
        "present-subjunctive-tense": [
            "me caliente",
            "te calientes",
            "se caliente",
            "nos calentemos",
            "os calentéis",
            "se calienten"
        ],
        "future-subjunctive-tense": [
            "me calentare",
            "te calentares",
            "se calentare",
            "nos calentáremos",
            "os calentareis",
            "se calentaren"
        ]
    },
    "callar": {
        "present-tense": [
            "callo",
            "callas",
            "calla",
            "callamos",
            "calláis",
            "callan"
        ],
        "future-tense": [
            "callaré",
            "callarás",
            "callará",
            "callaremos",
            "callaréis",
            "callarán"
        ],
        "preterite-tense": [
            "callé",
            "callaste",
            "calló",
            "callamos",
            "callasteis",
            "callaron"
        ],
        "present-subjunctive-tense": [
            "calle",
            "calles",
            "calle",
            "callemos",
            "calléis",
            "callen"
        ],
        "future-subjunctive-tense": [
            "callare",
            "callares",
            "callare",
            "calláremos",
            "callareis",
            "callaren"
        ]
    },
    "callarse": {
        "present-tense": [
            "me callo",
            "te callas",
            "se calla",
            "nos callamos",
            "os calláis",
            "se callan"
        ],
        "future-tense": [
            "me callaré",
            "te callarás",
            "se callará",
            "nos callaremos",
            "os callaréis",
            "se callarán"
        ],
        "preterite-tense": [
            "me callé",
            "te callaste",
            "se calló",
            "nos callamos",
            "os callasteis",
            "se callaron"
        ],
        "present-subjunctive-tense": [
            "me calle",
            "te calles",
            "se calle",
            "nos callemos",
            "os calléis",
            "se callen"
        ],
        "future-subjunctive-tense": [
            "me callare",
            "te callares",
            "se callare",
            "nos calláremos",
            "os callareis",
            "se callaren"
        ]
    },
    "calmar": {
        "present-tense": [
            "calmo",
            "calmas",
            "calma",
            "calmamos",
            "calmáis",
            "calman"
        ],
        "future-tense": [
            "calmaré",
            "calmarás",
            "calmará",
            "calmaremos",
            "calmaréis",
            "calmarán"
        ],
        "preterite-tense": [
            "calmé",
            "calmaste",
            "calmó",
            "calmamos",
            "calmasteis",
            "calmaron"
        ],
        "present-subjunctive-tense": [
            "calme",
            "calmes",
            "calme",
            "calmemos",
            "calméis",
            "calmen"
        ],
        "future-subjunctive-tense": [
            "calmare",
            "calmares",
            "calmare",
            "calmáremos",
            "calmareis",
            "calmaren"
        ]
    },
    "calmarse": {
        "present-tense": [
            "me calmo",
            "te calmas",
            "se calma",
            "nos calmamos",
            "os calmáis",
            "se calman"
        ],
        "future-tense": [
            "me calmaré",
            "te calmarás",
            "se calmará",
            "nos calmaremos",
            "os calmaréis",
            "se calmarán"
        ],
        "preterite-tense": [
            "me calmé",
            "te calmaste",
            "se calmó",
            "nos calmamos",
            "os calmasteis",
            "se calmaron"
        ],
        "present-subjunctive-tense": [
            "me calme",
            "te calmes",
            "se calme",
            "nos calmemos",
            "os calméis",
            "se calmen"
        ],
        "future-subjunctive-tense": [
            "me calmare",
            "te calmares",
            "se calmare",
            "nos calmáremos",
            "os calmareis",
            "se calmaren"
        ]
    },
    "caminar": {
        "present-tense": [
            "camino",
            "caminas",
            "camina",
            "caminamos",
            "camináis",
            "caminan"
        ],
        "future-tense": [
            "caminaré",
            "caminarás",
            "caminará",
            "caminaremos",
            "caminaréis",
            "caminarán"
        ],
        "preterite-tense": [
            "caminé",
            "caminaste",
            "caminó",
            "caminamos",
            "caminasteis",
            "caminaron"
        ],
        "present-subjunctive-tense": [
            "camine",
            "camines",
            "camine",
            "caminemos",
            "caminéis",
            "caminen"
        ],
        "future-subjunctive-tense": [
            "caminare",
            "caminares",
            "caminare",
            "camináremos",
            "caminareis",
            "caminaren"
        ]
    },
    "cancelar": {
        "present-tense": [
            "cancelo",
            "cancelas",
            "cancela",
            "cancelamos",
            "canceláis",
            "cancelan"
        ],
        "future-tense": [
            "cancelaré",
            "cancelarás",
            "cancelará",
            "cancelaremos",
            "cancelaréis",
            "cancelarán"
        ],
        "preterite-tense": [
            "cancelé",
            "cancelaste",
            "canceló",
            "cancelamos",
            "cancelasteis",
            "cancelaron"
        ],
        "present-subjunctive-tense": [
            "cancele",
            "canceles",
            "cancele",
            "cancelemos",
            "canceléis",
            "cancelen"
        ],
        "future-subjunctive-tense": [
            "cancelare",
            "cancelares",
            "cancelare",
            "canceláremos",
            "cancelareis",
            "cancelaren"
        ]
    },
    "cansar": {
        "present-tense": [
            "canso",
            "cansas",
            "cansa",
            "cansamos",
            "cansáis",
            "cansan"
        ],
        "future-tense": [
            "cansaré",
            "cansarás",
            "cansará",
            "cansaremos",
            "cansaréis",
            "cansarán"
        ],
        "preterite-tense": [
            "cansé",
            "cansaste",
            "cansó",
            "cansamos",
            "cansasteis",
            "cansaron"
        ],
        "present-subjunctive-tense": [
            "canse",
            "canses",
            "canse",
            "cansemos",
            "canséis",
            "cansen"
        ],
        "future-subjunctive-tense": [
            "cansare",
            "cansares",
            "cansare",
            "cansáremos",
            "cansareis",
            "cansaren"
        ]
    },
    "cansarse": {
        "present-tense": [
            "me canso",
            "te cansas",
            "se cansa",
            "nos cansamos",
            "os cansáis",
            "se cansan"
        ],
        "future-tense": [
            "me cansaré",
            "te cansarás",
            "se cansará",
            "nos cansaremos",
            "os cansaréis",
            "se cansarán"
        ],
        "preterite-tense": [
            "me cansé",
            "te cansaste",
            "se cansó",
            "nos cansamos",
            "os cansasteis",
            "se cansaron"
        ],
        "present-subjunctive-tense": [
            "me canse",
            "te canses",
            "se canse",
            "nos cansemos",
            "os canséis",
            "se cansen"
        ],
        "future-subjunctive-tense": [
            "me cansare",
            "te cansares",
            "se cansare",
            "nos cansáremos",
            "os cansareis",
            "se cansaren"
        ]
    },
    "caracterizar": {
        "present-tense": [
            "caracterizo",
            "caracterizas",
            "caracteriza",
            "caracterizamos",
            "caracterizáis",
            "caracterizan"
        ],
        "future-tense": [
            "caracterizaré",
            "caracterizarás",
            "caracterizará",
            "caracterizaremos",
            "caracterizaréis",
            "caracterizarán"
        ],
        "preterite-tense": [
            "caractericé",
            "caracterizaste",
            "caracterizó",
            "caracterizamos",
            "caracterizasteis",
            "caracterizaron"
        ],
        "present-subjunctive-tense": [
            "caracterice",
            "caracterices",
            "caracterice",
            "caractericemos",
            "caractericéis",
            "caractericen"
        ],
        "future-subjunctive-tense": [
            "caracterizare",
            "caracterizares",
            "caracterizare",
            "caracterizáremos",
            "caracterizareis",
            "caracterizaren"
        ]
    },
    "cargar": {
        "present-tense": [
            "cargo",
            "cargas",
            "carga",
            "cargamos",
            "cargáis",
            "cargan"
        ],
        "future-tense": [
            "cargaré",
            "cargarás",
            "cargará",
            "cargaremos",
            "cargaréis",
            "cargarán"
        ],
        "preterite-tense": [
            "cargué",
            "cargaste",
            "cargó",
            "cargamos",
            "cargasteis",
            "cargaron"
        ],
        "present-subjunctive-tense": [
            "cargue",
            "cargues",
            "cargue",
            "carguemos",
            "carguéis",
            "carguen"
        ],
        "future-subjunctive-tense": [
            "cargare",
            "cargares",
            "cargare",
            "cargáremos",
            "cargareis",
            "cargaren"
        ]
    },
    "casar": {
        "present-tense": [
            "caso",
            "casas",
            "casa",
            "casamos",
            "casáis",
            "casan"
        ],
        "future-tense": [
            "casaré",
            "casarás",
            "casará",
            "casaremos",
            "casaréis",
            "casarán"
        ],
        "preterite-tense": [
            "casé",
            "casaste",
            "casó",
            "casamos",
            "casasteis",
            "casaron"
        ],
        "present-subjunctive-tense": [
            "case",
            "cases",
            "case",
            "casemos",
            "caséis",
            "casen"
        ],
        "future-subjunctive-tense": [
            "casare",
            "casares",
            "casare",
            "casáremos",
            "casareis",
            "casaren"
        ]
    },
    "cortar": {
        "future-subjunctive-tense": [
            "cortare",
            "cortares",
            "cortare",
            "cortáremos",
            "cortareis",
            "cortaren"
        ],
        "present-subjunctive-tense": [
            "corte",
            "cortes",
            "corte",
            "cortemos",
            "cortéis",
            "corten"
        ],
        "present-tense": [
            "corto",
            "cortas",
            "corta",
            "cortamos",
            "cortáis",
            "cortan"
        ],
        "future-tense": [
            "cortaré",
            "cortarás",
            "cortará",
            "cortaremos",
            "cortaréis",
            "cortarán"
        ],
        "preterite-tense": [
            "corté",
            "cortaste",
            "cortó",
            "cortamos",
            "cortasteis",
            "cortaron"
        ]
    },
    "casarse": {
        "present-tense": [
            "me caso",
            "te casas",
            "se casa",
            "nos casamos",
            "os casáis",
            "se casan"
        ],
        "future-tense": [
            "me casaré",
            "te casarás",
            "se casará",
            "nos casaremos",
            "os casaréis",
            "se casarán"
        ],
        "preterite-tense": [
            "me casé",
            "te casaste",
            "se casó",
            "nos casamos",
            "os casasteis",
            "se casaron"
        ],
        "present-subjunctive-tense": [
            "me case",
            "te cases",
            "se case",
            "nos casemos",
            "os caséis",
            "se casen"
        ],
        "future-subjunctive-tense": [
            "me casare",
            "te casares",
            "se casare",
            "nos casáremos",
            "os casareis",
            "se casaren"
        ]
    },
    "castigar": {
        "present-tense": [
            "castigo",
            "castigas",
            "castiga",
            "castigamos",
            "castigáis",
            "castigan"
        ],
        "future-tense": [
            "castigaré",
            "castigarás",
            "castigará",
            "castigaremos",
            "castigaréis",
            "castigarán"
        ],
        "preterite-tense": [
            "castigué",
            "castigaste",
            "castigó",
            "castigamos",
            "castigasteis",
            "castigaron"
        ],
        "present-subjunctive-tense": [
            "castigue",
            "castigues",
            "castigue",
            "castiguemos",
            "castiguéis",
            "castiguen"
        ],
        "future-subjunctive-tense": [
            "castigare",
            "castigares",
            "castigare",
            "castigáremos",
            "castigareis",
            "castigaren"
        ]
    },
    "causar": {
        "present-tense": [
            "causo",
            "causas",
            "causa",
            "causamos",
            "causáis",
            "causan"
        ],
        "future-tense": [
            "causaré",
            "causarás",
            "causará",
            "causaremos",
            "causaréis",
            "causarán"
        ],
        "preterite-tense": [
            "causé",
            "causaste",
            "causó",
            "causamos",
            "causasteis",
            "causaron"
        ],
        "present-subjunctive-tense": [
            "cause",
            "causes",
            "cause",
            "causemos",
            "causéis",
            "causen"
        ],
        "future-subjunctive-tense": [
            "causare",
            "causares",
            "causare",
            "causáremos",
            "causareis",
            "causaren"
        ]
    },
    "cazar": {
        "present-tense": [
            "cazo",
            "cazas",
            "caza",
            "cazamos",
            "cazáis",
            "cazan"
        ],
        "future-tense": [
            "cazaré",
            "cazarás",
            "cazará",
            "cazaremos",
            "cazaréis",
            "cazarán"
        ],
        "preterite-tense": [
            "cacé",
            "cazaste",
            "cazó",
            "cazamos",
            "cazasteis",
            "cazaron"
        ],
        "present-subjunctive-tense": [
            "cace",
            "caces",
            "cace",
            "cacemos",
            "cacéis",
            "cacen"
        ],
        "future-subjunctive-tense": [
            "cazare",
            "cazares",
            "cazare",
            "cazáremos",
            "cazareis",
            "cazaren"
        ]
    },
    "celebrar": {
        "present-tense": [
            "celebro",
            "celebras",
            "celebra",
            "celebramos",
            "celebráis",
            "celebran"
        ],
        "future-tense": [
            "celebraré",
            "celebrarás",
            "celebrará",
            "celebraremos",
            "celebraréis",
            "celebrarán"
        ],
        "preterite-tense": [
            "celebré",
            "celebraste",
            "celebró",
            "celebramos",
            "celebrasteis",
            "celebraron"
        ],
        "present-subjunctive-tense": [
            "celebre",
            "celebres",
            "celebre",
            "celebremos",
            "celebréis",
            "celebren"
        ],
        "future-subjunctive-tense": [
            "celebrare",
            "celebrares",
            "celebrare",
            "celebráremos",
            "celebrareis",
            "celebraren"
        ]
    },
    "cenar": {
        "present-tense": [
            "ceno",
            "cenas",
            "cena",
            "cenamos",
            "cenáis",
            "cenan"
        ],
        "future-tense": [
            "cenaré",
            "cenarás",
            "cenará",
            "cenaremos",
            "cenaréis",
            "cenarán"
        ],
        "preterite-tense": [
            "cené",
            "cenaste",
            "cenó",
            "cenamos",
            "cenasteis",
            "cenaron"
        ],
        "present-subjunctive-tense": [
            "cene",
            "cenes",
            "cene",
            "cenemos",
            "cenéis",
            "cenen"
        ],
        "future-subjunctive-tense": [
            "cenare",
            "cenares",
            "cenare",
            "cenáremos",
            "cenareis",
            "cenaren"
        ]
    },
    "censurar": {
        "present-tense": [
            "censuro",
            "censuras",
            "censura",
            "censuramos",
            "censuráis",
            "censuran"
        ],
        "future-tense": [
            "censuraré",
            "censurarás",
            "censurará",
            "censuraremos",
            "censuraréis",
            "censurarán"
        ],
        "preterite-tense": [
            "censuré",
            "censuraste",
            "censuró",
            "censuramos",
            "censurasteis",
            "censuraron"
        ],
        "present-subjunctive-tense": [
            "censure",
            "censures",
            "censure",
            "censuremos",
            "censuréis",
            "censuren"
        ],
        "future-subjunctive-tense": [
            "censurare",
            "censurares",
            "censurare",
            "censuráremos",
            "censurareis",
            "censuraren"
        ]
    },
    "cepillar": {
        "present-tense": [
            "cepillo",
            "cepillas",
            "cepilla",
            "cepillamos",
            "cepilláis",
            "cepillan"
        ],
        "future-tense": [
            "cepillaré",
            "cepillarás",
            "cepillará",
            "cepillaremos",
            "cepillaréis",
            "cepillarán"
        ],
        "preterite-tense": [
            "cepillé",
            "cepillaste",
            "cepilló",
            "cepillamos",
            "cepillasteis",
            "cepillaron"
        ],
        "present-subjunctive-tense": [
            "cepille",
            "cepilles",
            "cepille",
            "cepillemos",
            "cepilléis",
            "cepillen"
        ],
        "future-subjunctive-tense": [
            "cepillare",
            "cepillares",
            "cepillare",
            "cepilláremos",
            "cepillareis",
            "cepillaren"
        ]
    },
    "cerrar": {
        "present-tense": [
            "cierro",
            "cierras",
            "cierra",
            "cerramos",
            "cerráis",
            "cierran"
        ],
        "future-tense": [
            "cerraré",
            "cerrarás",
            "cerrará",
            "cerraremos",
            "cerraréis",
            "cerrarán"
        ],
        "preterite-tense": [
            "cerré",
            "cerraste",
            "cerró",
            "cerramos",
            "cerrasteis",
            "cerraron"
        ],
        "present-subjunctive-tense": [
            "cierre",
            "cierres",
            "cierre",
            "cerremos",
            "cerréis",
            "cierren"
        ],
        "future-subjunctive-tense": [
            "cerrare",
            "cerrares",
            "cerrare",
            "cerráremos",
            "cerrareis",
            "cerraren"
        ]
    },
    "cesar": {
        "present-tense": [
            "ceso",
            "cesas",
            "cesa",
            "cesamos",
            "cesáis",
            "cesan"
        ],
        "future-tense": [
            "cesaré",
            "cesarás",
            "cesará",
            "cesaremos",
            "cesaréis",
            "cesarán"
        ],
        "preterite-tense": [
            "cesé",
            "cesaste",
            "cesó",
            "cesamos",
            "cesasteis",
            "cesaron"
        ],
        "present-subjunctive-tense": [
            "cese",
            "ceses",
            "cese",
            "cesemos",
            "ceséis",
            "cesen"
        ],
        "future-subjunctive-tense": [
            "cesare",
            "cesares",
            "cesare",
            "cesáremos",
            "cesareis",
            "cesaren"
        ]
    },
    "chismear": {
        "present-tense": [
            "chismeo",
            "chismeas",
            "chismea",
            "chismeamos",
            "chismeáis",
            "chismean"
        ],
        "future-tense": [
            "chismearé",
            "chismearás",
            "chismeará",
            "chismearemos",
            "chismearéis",
            "chismearán"
        ],
        "preterite-tense": [
            "chismeé",
            "chismeaste",
            "chismeó",
            "chismeamos",
            "chismeasteis",
            "chismearon"
        ],
        "present-subjunctive-tense": [
            "chismee",
            "chismees",
            "chismee",
            "chismeemos",
            "chismeéis",
            "chismeen"
        ],
        "future-subjunctive-tense": [
            "chismeare",
            "chismeares",
            "chismeare",
            "chismeáremos",
            "chismeareis",
            "chismearen"
        ]
    },
    "chocar": {
        "present-tense": [
            "choco",
            "chocas",
            "choca",
            "chocamos",
            "chocáis",
            "chocan"
        ],
        "future-tense": [
            "chocaré",
            "chocarás",
            "chocará",
            "chocaremos",
            "chocaréis",
            "chocarán"
        ],
        "preterite-tense": [
            "choqué",
            "chocaste",
            "chocó",
            "chocamos",
            "chocasteis",
            "chocaron"
        ],
        "present-subjunctive-tense": [
            "choque",
            "choques",
            "choque",
            "choquemos",
            "choquéis",
            "choquen"
        ],
        "future-subjunctive-tense": [
            "chocare",
            "chocares",
            "chocare",
            "chocáremos",
            "chocareis",
            "chocaren"
        ]
    },
    "civilizar": {
        "present-tense": [
            "civilizo",
            "civilizas",
            "civiliza",
            "civilizamos",
            "civilizáis",
            "civilizan"
        ],
        "future-tense": [
            "civilizaré",
            "civilizarás",
            "civilizará",
            "civilizaremos",
            "civilizaréis",
            "civilizarán"
        ],
        "preterite-tense": [
            "civilicé",
            "civilizaste",
            "civilizó",
            "civilizamos",
            "civilizasteis",
            "civilizaron"
        ],
        "present-subjunctive-tense": [
            "civilice",
            "civilices",
            "civilice",
            "civilicemos",
            "civilicéis",
            "civilicen"
        ],
        "future-subjunctive-tense": [
            "civilizare",
            "civilizares",
            "civilizare",
            "civilizáremos",
            "civilizareis",
            "civilizaren"
        ]
    },
    "clarificar": {
        "present-tense": [
            "clarifico",
            "clarificas",
            "clarifica",
            "clarificamos",
            "clarificáis",
            "clarifican"
        ],
        "future-tense": [
            "clarificaré",
            "clarificarás",
            "clarificará",
            "clarificaremos",
            "clarificaréis",
            "clarificarán"
        ],
        "preterite-tense": [
            "clarifiqué",
            "clarificaste",
            "clarificó",
            "clarificamos",
            "clarificasteis",
            "clarificaron"
        ],
        "present-subjunctive-tense": [
            "clarifique",
            "clarifiques",
            "clarifique",
            "clarifiquemos",
            "clarifiquéis",
            "clarifiquen"
        ],
        "future-subjunctive-tense": [
            "clarificare",
            "clarificares",
            "clarificare",
            "clarificáremos",
            "clarificareis",
            "clarificaren"
        ]
    },
    "clasificar": {
        "present-tense": [
            "clasifico",
            "clasificas",
            "clasifica",
            "clasificamos",
            "clasificáis",
            "clasifican"
        ],
        "future-tense": [
            "clasificaré",
            "clasificarás",
            "clasificará",
            "clasificaremos",
            "clasificaréis",
            "clasificarán"
        ],
        "preterite-tense": [
            "clasifiqué",
            "clasificaste",
            "clasificó",
            "clasificamos",
            "clasificasteis",
            "clasificaron"
        ],
        "present-subjunctive-tense": [
            "clasifique",
            "clasifiques",
            "clasifique",
            "clasifiquemos",
            "clasifiquéis",
            "clasifiquen"
        ],
        "future-subjunctive-tense": [
            "clasificare",
            "clasificares",
            "clasificare",
            "clasificáremos",
            "clasificareis",
            "clasificaren"
        ]
    },
    "cobrar": {
        "present-tense": [
            "cobro",
            "cobras",
            "cobra",
            "cobramos",
            "cobráis",
            "cobran"
        ],
        "future-tense": [
            "cobraré",
            "cobrarás",
            "cobrará",
            "cobraremos",
            "cobraréis",
            "cobrarán"
        ],
        "preterite-tense": [
            "cobré",
            "cobraste",
            "cobró",
            "cobramos",
            "cobrasteis",
            "cobraron"
        ],
        "present-subjunctive-tense": [
            "cobre",
            "cobres",
            "cobre",
            "cobremos",
            "cobréis",
            "cobren"
        ],
        "future-subjunctive-tense": [
            "cobrare",
            "cobrares",
            "cobrare",
            "cobráremos",
            "cobrareis",
            "cobraren"
        ]
    },
    "cocinar": {
        "present-tense": [
            "cocino",
            "cocinas",
            "cocina",
            "cocinamos",
            "cocináis",
            "cocinan"
        ],
        "future-tense": [
            "cocinaré",
            "cocinarás",
            "cocinará",
            "cocinaremos",
            "cocinaréis",
            "cocinarán"
        ],
        "preterite-tense": [
            "cociné",
            "cocinaste",
            "cocinó",
            "cocinamos",
            "cocinasteis",
            "cocinaron"
        ],
        "present-subjunctive-tense": [
            "cocine",
            "cocines",
            "cocine",
            "cocinemos",
            "cocinéis",
            "cocinen"
        ],
        "future-subjunctive-tense": [
            "cocinare",
            "cocinares",
            "cocinare",
            "cocináremos",
            "cocinareis",
            "cocinaren"
        ]
    },
    "coger": {
        "present-tense": [
            "cojo",
            "coges",
            "coge",
            "cogemos",
            "cogéis",
            "cogen"
        ],
        "future-tense": [
            "cogeré",
            "cogerás",
            "cogerá",
            "cogeremos",
            "cogeréis",
            "cogerán"
        ],
        "preterite-tense": [
            "cogí",
            "cogiste",
            "cogió",
            "cogimos",
            "cogisteis",
            "cogieron"
        ],
        "present-subjunctive-tense": [
            "coja",
            "cojas",
            "coja",
            "cojamos",
            "cojáis",
            "cojan"
        ],
        "future-subjunctive-tense": [
            "cogiere",
            "cogieres",
            "cogiere",
            "cogiéremos",
            "cogiereis",
            "cogieren"
        ]
    },
    "colgar": {
        "present-tense": [
            "cuelgo",
            "cuelgas",
            "cuelga",
            "colgamos",
            "colgáis",
            "cuelgan"
        ],
        "future-tense": [
            "colgaré",
            "colgarás",
            "colgará",
            "colgaremos",
            "colgaréis",
            "colgarán"
        ],
        "preterite-tense": [
            "colgué",
            "colgaste",
            "colgó",
            "colgamos",
            "colgasteis",
            "colgaron"
        ],
        "present-subjunctive-tense": [
            "cuelgue",
            "cuelgues",
            "cuelgue",
            "colguemos",
            "colguéis",
            "cuelguen"
        ],
        "future-subjunctive-tense": [
            "colgare",
            "colgares",
            "colgare",
            "colgáremos",
            "colgareis",
            "colgaren"
        ]
    },
    "colocar": {
        "present-tense": [
            "coloco",
            "colocas",
            "coloca",
            "colocamos",
            "colocáis",
            "colocan"
        ],
        "future-tense": [
            "colocaré",
            "colocarás",
            "colocará",
            "colocaremos",
            "colocaréis",
            "colocarán"
        ],
        "preterite-tense": [
            "coloqué",
            "colocaste",
            "colocó",
            "colocamos",
            "colocasteis",
            "colocaron"
        ],
        "present-subjunctive-tense": [
            "coloque",
            "coloques",
            "coloque",
            "coloquemos",
            "coloquéis",
            "coloquen"
        ],
        "future-subjunctive-tense": [
            "colocare",
            "colocares",
            "colocare",
            "colocáremos",
            "colocareis",
            "colocaren"
        ]
    },
    "colonizar": {
        "present-tense": [
            "colonizo",
            "colonizas",
            "coloniza",
            "colonizamos",
            "colonizáis",
            "colonizan"
        ],
        "future-tense": [
            "colonizaré",
            "colonizarás",
            "colonizará",
            "colonizaremos",
            "colonizaréis",
            "colonizarán"
        ],
        "preterite-tense": [
            "colonicé",
            "colonizaste",
            "colonizó",
            "colonizamos",
            "colonizasteis",
            "colonizaron"
        ],
        "present-subjunctive-tense": [
            "colonice",
            "colonices",
            "colonice",
            "colonicemos",
            "colonicéis",
            "colonicen"
        ],
        "future-subjunctive-tense": [
            "colonizare",
            "colonizares",
            "colonizare",
            "colonizáremos",
            "colonizareis",
            "colonizaren"
        ]
    },
    "comprar": {
        "future-tense": [
            "compraré",
            "comprarás",
            "comprará",
            "compraremos",
            "compraréis",
            "comprarán"
        ],
        "present-tense": [
            "compro",
            "compras",
            "compra",
            "compramos",
            "compráis",
            "compran"
        ],
        "preterite-tense": [
            "compré",
            "compraste",
            "compró",
            "compramos",
            "comprasteis",
            "compraron"
        ],
        "present-subjunctive-tense": [
            "compre",
            "compres",
            "compre",
            "compremos",
            "compréis",
            "compren"
        ],
        "future-subjunctive-tense": [
            "comprare",
            "comprares",
            "comprare",
            "compráremos",
            "comprareis",
            "compraren"
        ]
    },
    "combatir": {
        "present-tense": [
            "combato",
            "combates",
            "combate",
            "combatimos",
            "combatís",
            "combaten"
        ],
        "future-tense": [
            "combatiré",
            "combatirás",
            "combatirá",
            "combatiremos",
            "combatiréis",
            "combatirán"
        ],
        "preterite-tense": [
            "combatí",
            "combatiste",
            "combatió",
            "combatimos",
            "combatisteis",
            "combatieron"
        ],
        "present-subjunctive-tense": [
            "combata",
            "combatas",
            "combata",
            "combatamos",
            "combatáis",
            "combatan"
        ],
        "future-subjunctive-tense": [
            "combatiere",
            "combatieres",
            "combatiere",
            "combatiéremos",
            "combatiereis",
            "combatieren"
        ]
    },
    "comenzar": {
        "present-tense": [
            "comienzo",
            "comienzas",
            "comienza",
            "comenzamos",
            "comenzáis",
            "comienzan"
        ],
        "future-tense": [
            "comenzaré",
            "comenzarás",
            "comenzará",
            "comenzaremos",
            "comenzaréis",
            "comenzarán"
        ],
        "preterite-tense": [
            "comencé",
            "comenzaste",
            "comenzó",
            "comenzamos",
            "comenzasteis",
            "comenzaron"
        ],
        "present-subjunctive-tense": [
            "comience",
            "comiences",
            "comience",
            "comencemos",
            "comencéis",
            "comiencen"
        ],
        "future-subjunctive-tense": [
            "comenzare",
            "comenzares",
            "comenzare",
            "comenzáremos",
            "comenzareis",
            "comenzaren"
        ]
    },
    "comer": {
        "present-tense": [
            "como",
            "comes",
            "come",
            "comemos",
            "coméis",
            "comen"
        ],
        "future-tense": [
            "comeré",
            "comerás",
            "comerá",
            "comeremos",
            "comeréis",
            "comerán"
        ],
        "preterite-tense": [
            "comí",
            "comiste",
            "comió",
            "comimos",
            "comisteis",
            "comieron"
        ],
        "present-subjunctive-tense": [
            "coma",
            "comas",
            "coma",
            "comamos",
            "comáis",
            "coman"
        ],
        "future-subjunctive-tense": [
            "comiere",
            "comieres",
            "comiere",
            "comiéremos",
            "comiereis",
            "comieren"
        ]
    },
    "competir": {
        "present-tense": [
            "compito",
            "compites",
            "compite",
            "competimos",
            "competís",
            "compiten"
        ],
        "future-tense": [
            "competiré",
            "competirás",
            "competirá",
            "competiremos",
            "competiréis",
            "competirán"
        ],
        "preterite-tense": [
            "competí",
            "competiste",
            "compitió",
            "competimos",
            "competisteis",
            "compitieron"
        ],
        "present-subjunctive-tense": [
            "compita",
            "compitas",
            "compita",
            "compitamos",
            "compitáis",
            "compitan"
        ],
        "future-subjunctive-tense": [
            "compitiere",
            "compitieres",
            "compitiere",
            "compitiéremos",
            "compitiereis",
            "compitieren"
        ]
    },
    "componer": {
        "present-tense": [
            "compongo",
            "compones",
            "compone",
            "componemos",
            "componéis",
            "componen"
        ],
        "future-tense": [
            "compondré",
            "compondrás",
            "compondrá",
            "compondremos",
            "compondréis",
            "compondrán"
        ],
        "preterite-tense": [
            "compuse",
            "compusiste",
            "compuso",
            "compusimos",
            "compusisteis",
            "compusieron"
        ],
        "present-subjunctive-tense": [
            "componga",
            "compongas",
            "componga",
            "compongamos",
            "compongáis",
            "compongan"
        ],
        "future-subjunctive-tense": [
            "compusiere",
            "compusieres",
            "compusiere",
            "compusiéremos",
            "compusiereis",
            "compusieren"
        ]
    },
    "comprender": {
        "present-tense": [
            "comprendo",
            "comprendes",
            "comprende",
            "comprendemos",
            "comprendéis",
            "comprenden"
        ],
        "future-tense": [
            "comprenderé",
            "comprenderás",
            "comprenderá",
            "comprenderemos",
            "comprenderéis",
            "comprenderán"
        ],
        "preterite-tense": [
            "comprendí",
            "comprendiste",
            "comprendió",
            "comprendimos",
            "comprendisteis",
            "comprendieron"
        ],
        "present-subjunctive-tense": [
            "comprenda",
            "comprendas",
            "comprenda",
            "comprendamos",
            "comprendáis",
            "comprendan"
        ],
        "future-subjunctive-tense": [
            "comprendiere",
            "comprendieres",
            "comprendiere",
            "comprendiéremos",
            "comprendiereis",
            "comprendieren"
        ]
    },
    "comunicar": {
        "present-tense": [
            "comunico",
            "comunicas",
            "comunica",
            "comunicamos",
            "comunicáis",
            "comunican"
        ],
        "future-tense": [
            "comunicaré",
            "comunicarás",
            "comunicará",
            "comunicaremos",
            "comunicaréis",
            "comunicarán"
        ],
        "preterite-tense": [
            "comuniqué",
            "comunicaste",
            "comunicó",
            "comunicamos",
            "comunicasteis",
            "comunicaron"
        ],
        "present-subjunctive-tense": [
            "comunique",
            "comuniques",
            "comunique",
            "comuniquemos",
            "comuniquéis",
            "comuniquen"
        ],
        "future-subjunctive-tense": [
            "comunicare",
            "comunicares",
            "comunicare",
            "comunicáremos",
            "comunicareis",
            "comunicaren"
        ]
    },
    "comunicarse": {
        "present-tense": [
            "me comunico",
            "te comunicas",
            "se comunica",
            "nos comunicamos",
            "os comunicáis",
            "se comunican"
        ],
        "future-tense": [
            "me comunicaré",
            "te comunicarás",
            "se comunicará",
            "nos comunicaremos",
            "os comunicaréis",
            "se comunicarán"
        ],
        "preterite-tense": [
            "me comuniqué",
            "te comunicaste",
            "se comunicó",
            "nos comunicamos",
            "os comunicasteis",
            "se comunicaron"
        ],
        "present-subjunctive-tense": [
            "me comunique",
            "te comuniques",
            "se comunique",
            "nos comuniquemos",
            "os comuniquéis",
            "se comuniquen"
        ],
        "future-subjunctive-tense": [
            "me comunicare",
            "te comunicares",
            "se comunicare",
            "nos comunicáremos",
            "os comunicareis",
            "se comunicaren"
        ]
    },
    "condenar": {
        "present-tense": [
            "condeno",
            "condenas",
            "condena",
            "condenamos",
            "condenáis",
            "condenan"
        ],
        "future-tense": [
            "condenaré",
            "condenarás",
            "condenará",
            "condenaremos",
            "condenaréis",
            "condenarán"
        ],
        "preterite-tense": [
            "condené",
            "condenaste",
            "condenó",
            "condenamos",
            "condenasteis",
            "condenaron"
        ],
        "present-subjunctive-tense": [
            "condene",
            "condenes",
            "condene",
            "condenemos",
            "condenéis",
            "condenen"
        ],
        "future-subjunctive-tense": [
            "condenare",
            "condenares",
            "condenare",
            "condenáremos",
            "condenareis",
            "condenaren"
        ]
    },
    "conducir": {
        "present-tense": [
            "conduzco",
            "conduces",
            "conduce",
            "conducimos",
            "conducís",
            "conducen"
        ],
        "future-tense": [
            "conduciré",
            "conducirás",
            "conducirá",
            "conduciremos",
            "conduciréis",
            "conducirán"
        ],
        "preterite-tense": [
            "conduje",
            "condujiste",
            "condujo",
            "condujimos",
            "condujisteis",
            "condujeron"
        ],
        "present-subjunctive-tense": [
            "conduzca",
            "conduzcas",
            "conduzca",
            "conduzcamos",
            "conduzcáis",
            "conduzcan"
        ],
        "future-subjunctive-tense": [
            "condujere",
            "condujeres",
            "condujere",
            "condujéremos",
            "condujereis",
            "condujeren"
        ]
    },
    "confesar": {
        "present-tense": [
            "confieso",
            "confiesas",
            "confiesa",
            "confesamos",
            "confesáis",
            "confiesan"
        ],
        "future-tense": [
            "confesaré",
            "confesarás",
            "confesará",
            "confesaremos",
            "confesaréis",
            "confesarán"
        ],
        "preterite-tense": [
            "confesé",
            "confesaste",
            "confesó",
            "confesamos",
            "confesasteis",
            "confesaron"
        ],
        "present-subjunctive-tense": [
            "confiese",
            "confieses",
            "confiese",
            "confesemos",
            "confeséis",
            "confiesen"
        ],
        "future-subjunctive-tense": [
            "confesare",
            "confesares",
            "confesare",
            "confesáremos",
            "confesareis",
            "confesaren"
        ]
    },
    "confiar": {
        "present-tense": [
            "confío",
            "confías",
            "confía",
            "confiamos",
            "confiáis",
            "confían"
        ],
        "future-tense": [
            "confiaré",
            "confiarás",
            "confiará",
            "confiaremos",
            "confiaréis",
            "confiarán"
        ],
        "preterite-tense": [
            "confié",
            "confiaste",
            "confió",
            "confiamos",
            "confiasteis",
            "confiaron"
        ],
        "present-subjunctive-tense": [
            "confíe",
            "confíes",
            "confíe",
            "confiemos",
            "confiéis",
            "confíen"
        ],
        "future-subjunctive-tense": [
            "confiare",
            "confiares",
            "confiare",
            "confiáremos",
            "confiareis",
            "confiaren"
        ]
    },
    "conquistar": {
        "future-tense": [
            "conquistaré",
            "conquistarás",
            "conquistará",
            "conquistaremos",
            "conquistaréis",
            "conquistarán"
        ],
        "present-tense": [
            "conquisto",
            "conquistas",
            "conquista",
            "conquistamos",
            "conquistáis",
            "conquistan"
        ],
        "preterite-tense": [
            "conquisté",
            "conquistaste",
            "conquistó",
            "conquistamos",
            "conquistasteis",
            "conquistaron"
        ],
        "present-subjunctive-tense": [
            "conquiste",
            "conquistes",
            "conquiste",
            "conquistemos",
            "conquistéis",
            "conquisten"
        ],
        "future-subjunctive-tense": [
            "conquistare",
            "conquistares",
            "conquistare",
            "conquistáremos",
            "conquistareis",
            "conquistaren"
        ]
    },
    "confirmar": {
        "present-tense": [
            "confirmo",
            "confirmas",
            "confirma",
            "confirmamos",
            "confirmáis",
            "confirman"
        ],
        "future-tense": [
            "confirmaré",
            "confirmarás",
            "confirmará",
            "confirmaremos",
            "confirmaréis",
            "confirmarán"
        ],
        "preterite-tense": [
            "confirmé",
            "confirmaste",
            "confirmó",
            "confirmamos",
            "confirmasteis",
            "confirmaron"
        ],
        "present-subjunctive-tense": [
            "confirme",
            "confirmes",
            "confirme",
            "confirmemos",
            "confirméis",
            "confirmen"
        ],
        "future-subjunctive-tense": [
            "confirmare",
            "confirmares",
            "confirmare",
            "confirmáremos",
            "confirmareis",
            "confirmaren"
        ]
    },
    "compartir": {
        "present-tense": [
            "comparto",
            "compartes",
            "comparte",
            "compartimos",
            "compartís",
            "comparten"
        ],
        "future-tense": [
            "compartiré",
            "compartirás",
            "compartirá",
            "compartiremos",
            "compartiréis",
            "compartirán"
        ],
        "preterite-tense": [
            "compartí",
            "compartiste",
            "compartió",
            "compartimos",
            "compartisteis",
            "compartieron"
        ],
        "present-subjunctive-tense": [
            "comparta",
            "compartas",
            "comparta",
            "compartamos",
            "compartáis",
            "compartan"
        ],
        "future-subjunctive-tense": [
            "compartiere",
            "compartieres",
            "compartiere",
            "compartiéremos",
            "compartiereis",
            "compartieren"
        ]
    },
    "confiscar": {
        "present-tense": [
            "confisco",
            "confiscas",
            "confisca",
            "confiscamos",
            "confiscáis",
            "confiscan"
        ],
        "future-tense": [
            "confiscaré",
            "confiscarás",
            "confiscará",
            "confiscaremos",
            "confiscaréis",
            "confiscarán"
        ],
        "preterite-tense": [
            "confisqué",
            "confiscaste",
            "confiscó",
            "confiscamos",
            "confiscasteis",
            "confiscaron"
        ],
        "present-subjunctive-tense": [
            "confisque",
            "confisques",
            "confisque",
            "confisquemos",
            "confisquéis",
            "confisquen"
        ],
        "future-subjunctive-tense": [
            "confiscare",
            "confiscares",
            "confiscare",
            "confiscáremos",
            "confiscareis",
            "confiscaren"
        ]
    },
    "conjugar": {
        "present-tense": [
            "conjugo",
            "conjugas",
            "conjuga",
            "conjugamos",
            "conjugáis",
            "conjugan"
        ],
        "future-tense": [
            "conjugaré",
            "conjugarás",
            "conjugará",
            "conjugaremos",
            "conjugaréis",
            "conjugarán"
        ],
        "preterite-tense": [
            "conjugué",
            "conjugaste",
            "conjugó",
            "conjugamos",
            "conjugasteis",
            "conjugaron"
        ],
        "present-subjunctive-tense": [
            "conjugue",
            "conjugues",
            "conjugue",
            "conjuguemos",
            "conjuguéis",
            "conjuguen"
        ],
        "future-subjunctive-tense": [
            "conjugare",
            "conjugares",
            "conjugare",
            "conjugáremos",
            "conjugareis",
            "conjugaren"
        ]
    },
    "conocer": {
        "present-tense": [
            "conozco",
            "conoces",
            "conoce",
            "conocemos",
            "conocéis",
            "conocen"
        ],
        "future-tense": [
            "conoceré",
            "conocerás",
            "conocerá",
            "conoceremos",
            "conoceréis",
            "conocerán"
        ],
        "preterite-tense": [
            "conocí",
            "conociste",
            "conoció",
            "conocimos",
            "conocisteis",
            "conocieron"
        ],
        "present-subjunctive-tense": [
            "conozca",
            "conozcas",
            "conozca",
            "conozcamos",
            "conozcáis",
            "conozcan"
        ],
        "future-subjunctive-tense": [
            "conociere",
            "conocieres",
            "conociere",
            "conociéremos",
            "conociereis",
            "conocieren"
        ]
    },
    "conseguir": {
        "present-tense": [
            "consigo",
            "consigues",
            "consigue",
            "conseguimos",
            "conseguís",
            "consiguen"
        ],
        "future-tense": [
            "conseguiré",
            "conseguirás",
            "conseguirá",
            "conseguiremos",
            "conseguiréis",
            "conseguirán"
        ],
        "preterite-tense": [
            "conseguí",
            "conseguiste",
            "consiguió",
            "conseguimos",
            "conseguisteis",
            "consiguieron"
        ],
        "present-subjunctive-tense": [
            "consiga",
            "consigas",
            "consiga",
            "consigamos",
            "consigáis",
            "consigan"
        ],
        "future-subjunctive-tense": [
            "consiguiere",
            "consiguieres",
            "consiguiere",
            "consiguiéremos",
            "consiguiereis",
            "consiguieren"
        ]
    },
    "consentir": {
        "present-tense": [
            "consiento",
            "consientes",
            "consiente",
            "consentimos",
            "consentís",
            "consienten"
        ],
        "future-tense": [
            "consentiré",
            "consentirás",
            "consentirá",
            "consentiremos",
            "consentiréis",
            "consentirán"
        ],
        "preterite-tense": [
            "consentí",
            "consentiste",
            "consintió",
            "consentimos",
            "consentisteis",
            "consintieron"
        ],
        "present-subjunctive-tense": [
            "consienta",
            "consientas",
            "consienta",
            "consintamos",
            "consintáis",
            "consientan"
        ],
        "future-subjunctive-tense": [
            "consintiere",
            "consintieres",
            "consintiere",
            "consintiéremos",
            "consintiereis",
            "consintieren"
        ]
    },
    "conservar": {
        "present-tense": [
            "conservo",
            "conservas",
            "conserva",
            "conservamos",
            "conserváis",
            "conservan"
        ],
        "future-tense": [
            "conservaré",
            "conservarás",
            "conservará",
            "conservaremos",
            "conservaréis",
            "conservarán"
        ],
        "preterite-tense": [
            "conservé",
            "conservaste",
            "conservó",
            "conservamos",
            "conservasteis",
            "conservaron"
        ],
        "present-subjunctive-tense": [
            "conserve",
            "conserves",
            "conserve",
            "conservemos",
            "conservéis",
            "conserven"
        ],
        "future-subjunctive-tense": [
            "conservare",
            "conservares",
            "conservare",
            "conserváremos",
            "conservareis",
            "conservaren"
        ]
    },
    "consistir": {
        "present-tense": [
            "consisto",
            "consistes",
            "consiste",
            "consistimos",
            "consistís",
            "consisten"
        ],
        "future-tense": [
            "consistiré",
            "consistirás",
            "consistirá",
            "consistiremos",
            "consistiréis",
            "consistirán"
        ],
        "preterite-tense": [
            "consistí",
            "consististe",
            "consistió",
            "consistimos",
            "consististeis",
            "consistieron"
        ],
        "present-subjunctive-tense": [
            "consista",
            "consistas",
            "consista",
            "consistamos",
            "consistáis",
            "consistan"
        ],
        "future-subjunctive-tense": [
            "consistiere",
            "consistieres",
            "consistiere",
            "consistiéremos",
            "consistiereis",
            "consistieren"
        ]
    },
    "constituir": {
        "present-tense": [
            "constituyo",
            "constituyes",
            "constituye",
            "constituimos",
            "constituís",
            "constituyen"
        ],
        "future-tense": [
            "constituiré",
            "constituirás",
            "constituirá",
            "constituiremos",
            "constituiréis",
            "constituirán"
        ],
        "preterite-tense": [
            "constituí",
            "constituiste",
            "constituyó",
            "constituimos",
            "constituisteis",
            "constituyeron"
        ],
        "present-subjunctive-tense": [
            "constituya",
            "constituyas",
            "constituya",
            "constituyamos",
            "constituyáis",
            "constituyan"
        ],
        "future-subjunctive-tense": [
            "constituyere",
            "constituyeres",
            "constituyere",
            "constituyéremos",
            "constituyereis",
            "constituyeren"
        ]
    },
    "construir": {
        "present-tense": [
            "construyo",
            "construyes",
            "construye",
            "construimos",
            "construís",
            "construyen"
        ],
        "future-tense": [
            "construiré",
            "construirás",
            "construirá",
            "construiremos",
            "construiréis",
            "construirán"
        ],
        "preterite-tense": [
            "construí",
            "construiste",
            "construyó",
            "construimos",
            "construisteis",
            "construyeron"
        ],
        "present-subjunctive-tense": [
            "construya",
            "construyas",
            "construya",
            "construyamos",
            "construyáis",
            "construyan"
        ],
        "future-subjunctive-tense": [
            "construyere",
            "construyeres",
            "construyere",
            "construyéremos",
            "construyereis",
            "construyeren"
        ]
    },
    "consumir": {
        "present-tense": [
            "consumo",
            "consumes",
            "consume",
            "consumimos",
            "consumís",
            "consumen"
        ],
        "future-tense": [
            "consumiré",
            "consumirás",
            "consumirá",
            "consumiremos",
            "consumiréis",
            "consumirán"
        ],
        "preterite-tense": [
            "consumí",
            "consumiste",
            "consumió",
            "consumimos",
            "consumisteis",
            "consumieron"
        ],
        "present-subjunctive-tense": [
            "consuma",
            "consumas",
            "consuma",
            "consumamos",
            "consumáis",
            "consuman"
        ],
        "future-subjunctive-tense": [
            "consumiere",
            "consumieres",
            "consumiere",
            "consumiéremos",
            "consumiereis",
            "consumieren"
        ]
    },
    "contaminar": {
        "present-tense": [
            "contamino",
            "contaminas",
            "contamina",
            "contaminamos",
            "contamináis",
            "contaminan"
        ],
        "future-tense": [
            "contaminaré",
            "contaminarás",
            "contaminará",
            "contaminaremos",
            "contaminaréis",
            "contaminarán"
        ],
        "preterite-tense": [
            "contaminé",
            "contaminaste",
            "contaminó",
            "contaminamos",
            "contaminasteis",
            "contaminaron"
        ],
        "present-subjunctive-tense": [
            "contamine",
            "contamines",
            "contamine",
            "contaminemos",
            "contaminéis",
            "contaminen"
        ],
        "future-subjunctive-tense": [
            "contaminare",
            "contaminares",
            "contaminare",
            "contamináremos",
            "contaminareis",
            "contaminaren"
        ]
    },
    "contar": {
        "present-tense": [
            "cuento",
            "cuentas",
            "cuenta",
            "contamos",
            "contáis",
            "cuentan"
        ],
        "future-tense": [
            "contaré",
            "contarás",
            "contará",
            "contaremos",
            "contaréis",
            "contarán"
        ],
        "preterite-tense": [
            "conté",
            "contaste",
            "contó",
            "contamos",
            "contasteis",
            "contaron"
        ],
        "present-subjunctive-tense": [
            "cuente",
            "cuentes",
            "cuente",
            "contemos",
            "contéis",
            "cuenten"
        ],
        "future-subjunctive-tense": [
            "contare",
            "contares",
            "contare",
            "contáremos",
            "contareis",
            "contaren"
        ]
    },
    "contener": {
        "present-tense": [
            "contengo",
            "contienes",
            "contiene",
            "contenemos",
            "contenéis",
            "contienen"
        ],
        "future-tense": [
            "contendré",
            "contendrás",
            "contendrá",
            "contendremos",
            "contendréis",
            "contendrán"
        ],
        "preterite-tense": [
            "contuve",
            "contuviste",
            "contuvo",
            "contuvimos",
            "contuvisteis",
            "contuvieron"
        ],
        "present-subjunctive-tense": [
            "contenga",
            "contengas",
            "contenga",
            "contengamos",
            "contengáis",
            "contengan"
        ],
        "future-subjunctive-tense": [
            "contuviere",
            "contuvieres",
            "contuviere",
            "contuviéremos",
            "contuviereis",
            "contuvieren"
        ]
    },
    "contestar": {
        "present-tense": [
            "contesto",
            "contestas",
            "contesta",
            "contestamos",
            "contestáis",
            "contestan"
        ],
        "future-tense": [
            "contestaré",
            "contestarás",
            "contestará",
            "contestaremos",
            "contestaréis",
            "contestarán"
        ],
        "preterite-tense": [
            "contesté",
            "contestaste",
            "contestó",
            "contestamos",
            "contestasteis",
            "contestaron"
        ],
        "present-subjunctive-tense": [
            "conteste",
            "contestes",
            "conteste",
            "contestemos",
            "contestéis",
            "contesten"
        ],
        "future-subjunctive-tense": [
            "contestare",
            "contestares",
            "contestare",
            "contestáremos",
            "contestareis",
            "contestaren"
        ]
    },
    "continuar": {
        "present-tense": [
            "continúo",
            "continúas",
            "continúa",
            "continuamos",
            "continuáis",
            "continúan"
        ],
        "future-tense": [
            "continuaré",
            "continuarás",
            "continuará",
            "continuaremos",
            "continuaréis",
            "continuarán"
        ],
        "preterite-tense": [
            "continué",
            "continuaste",
            "continuó",
            "continuamos",
            "continuasteis",
            "continuaron"
        ],
        "present-subjunctive-tense": [
            "continúe",
            "continúes",
            "continúe",
            "continuemos",
            "continuéis",
            "continúen"
        ],
        "future-subjunctive-tense": [
            "continuare",
            "continuares",
            "continuare",
            "continuáremos",
            "continuareis",
            "continuaren"
        ]
    },
    "contribuir": {
        "present-tense": [
            "contribuyo",
            "contribuyes",
            "contribuye",
            "contribuimos",
            "contribuís",
            "contribuyen"
        ],
        "future-tense": [
            "contribuiré",
            "contribuirás",
            "contribuirá",
            "contribuiremos",
            "contribuiréis",
            "contribuirán"
        ],
        "preterite-tense": [
            "contribuí",
            "contribuiste",
            "contribuyó",
            "contribuimos",
            "contribuisteis",
            "contribuyeron"
        ],
        "present-subjunctive-tense": [
            "contribuya",
            "contribuyas",
            "contribuya",
            "contribuyamos",
            "contribuyáis",
            "contribuyan"
        ],
        "future-subjunctive-tense": [
            "contribuyere",
            "contribuyeres",
            "contribuyere",
            "contribuyéremos",
            "contribuyereis",
            "contribuyeren"
        ]
    },
    "controlar": {
        "present-tense": [
            "controlo",
            "controlas",
            "controla",
            "controlamos",
            "controláis",
            "controlan"
        ],
        "future-tense": [
            "controlaré",
            "controlarás",
            "controlará",
            "controlaremos",
            "controlaréis",
            "controlarán"
        ],
        "preterite-tense": [
            "controlé",
            "controlaste",
            "controló",
            "controlamos",
            "controlasteis",
            "controlaron"
        ],
        "present-subjunctive-tense": [
            "controle",
            "controles",
            "controle",
            "controlemos",
            "controléis",
            "controlen"
        ],
        "future-subjunctive-tense": [
            "controlare",
            "controlares",
            "controlare",
            "controláremos",
            "controlareis",
            "controlaren"
        ]
    },
    "convencer": {
        "present-tense": [
            "convenzo",
            "convences",
            "convence",
            "convencemos",
            "convencéis",
            "convencen"
        ],
        "future-tense": [
            "convenceré",
            "convencerás",
            "convencerá",
            "convenceremos",
            "convenceréis",
            "convencerán"
        ],
        "preterite-tense": [
            "convencí",
            "convenciste",
            "convenció",
            "convencimos",
            "convencisteis",
            "convencieron"
        ],
        "present-subjunctive-tense": [
            "convenza",
            "convenzas",
            "convenza",
            "convenzamos",
            "convenzáis",
            "convenzan"
        ],
        "future-subjunctive-tense": [
            "convenciere",
            "convencieres",
            "convenciere",
            "convenciéremos",
            "convenciereis",
            "convencieren"
        ]
    },
    "convenir": {
        "present-tense": [
            "convengo",
            "convienes",
            "conviene",
            "convenimos",
            "convenís",
            "convienen"
        ],
        "future-tense": [
            "convendré",
            "convendrás",
            "convendrá",
            "convendremos",
            "convendréis",
            "convendrán"
        ],
        "preterite-tense": [
            "convine",
            "conviniste",
            "convino",
            "convinimos",
            "convinisteis",
            "convinieron"
        ],
        "present-subjunctive-tense": [
            "convenga",
            "convengas",
            "convenga",
            "convengamos",
            "convengáis",
            "convengan"
        ],
        "future-subjunctive-tense": [
            "conviniere",
            "convinieres",
            "conviniere",
            "conviniéremos",
            "conviniereis",
            "convinieren"
        ]
    },
    "conversar": {
        "present-tense": [
            "converso",
            "conversas",
            "conversa",
            "conversamos",
            "conversáis",
            "conversan"
        ],
        "future-tense": [
            "conversaré",
            "conversarás",
            "conversará",
            "conversaremos",
            "conversaréis",
            "conversarán"
        ],
        "preterite-tense": [
            "conversé",
            "conversaste",
            "conversó",
            "conversamos",
            "conversasteis",
            "conversaron"
        ],
        "present-subjunctive-tense": [
            "converse",
            "converses",
            "converse",
            "conversemos",
            "converséis",
            "conversen"
        ],
        "future-subjunctive-tense": [
            "conversare",
            "conversares",
            "conversare",
            "conversáremos",
            "conversareis",
            "conversaren"
        ]
    },
    "convertir": {
        "present-tense": [
            "convierto",
            "conviertes",
            "convierte",
            "convertimos",
            "convertís",
            "convierten"
        ],
        "future-tense": [
            "convertiré",
            "convertirás",
            "convertirá",
            "convertiremos",
            "convertiréis",
            "convertirán"
        ],
        "preterite-tense": [
            "convertí",
            "convertiste",
            "convirtió",
            "convertimos",
            "convertisteis",
            "convirtieron"
        ],
        "present-subjunctive-tense": [
            "convierta",
            "conviertas",
            "convierta",
            "convirtamos",
            "convirtáis",
            "conviertan"
        ],
        "future-subjunctive-tense": [
            "convirtiere",
            "convirtieres",
            "convirtiere",
            "convirtiéremos",
            "convirtiereis",
            "convirtieren"
        ]
    },
    "convidar": {
        "present-tense": [
            "convido",
            "convidas",
            "convida",
            "convidamos",
            "convidáis",
            "convidan"
        ],
        "future-tense": [
            "convidaré",
            "convidarás",
            "convidará",
            "convidaremos",
            "convidaréis",
            "convidarán"
        ],
        "preterite-tense": [
            "convidé",
            "convidaste",
            "convidó",
            "convidamos",
            "convidasteis",
            "convidaron"
        ],
        "present-subjunctive-tense": [
            "convide",
            "convides",
            "convide",
            "convidemos",
            "convidéis",
            "conviden"
        ],
        "future-subjunctive-tense": [
            "convidare",
            "convidares",
            "convidare",
            "convidáremos",
            "convidareis",
            "convidaren"
        ]
    },
    "copiar": {
        "present-tense": [
            "copio",
            "copias",
            "copia",
            "copiamos",
            "copiáis",
            "copian"
        ],
        "future-tense": [
            "copiaré",
            "copiarás",
            "copiará",
            "copiaremos",
            "copiaréis",
            "copiarán"
        ],
        "preterite-tense": [
            "copié",
            "copiaste",
            "copió",
            "copiamos",
            "copiasteis",
            "copiaron"
        ],
        "present-subjunctive-tense": [
            "copie",
            "copies",
            "copie",
            "copiemos",
            "copiéis",
            "copien"
        ],
        "future-subjunctive-tense": [
            "copiare",
            "copiares",
            "copiare",
            "copiáremos",
            "copiareis",
            "copiaren"
        ]
    },
    "corregir": {
        "present-tense": [
            "corrijo",
            "corriges",
            "corrige",
            "corregimos",
            "corregís",
            "corrigen"
        ],
        "future-tense": [
            "corregiré",
            "corregirás",
            "corregirá",
            "corregiremos",
            "corregiréis",
            "corregirán"
        ],
        "preterite-tense": [
            "corregí",
            "corregiste",
            "corrigió",
            "corregimos",
            "corregisteis",
            "corrigieron"
        ],
        "present-subjunctive-tense": [
            "corrija",
            "corrijas",
            "corrija",
            "corrijamos",
            "corrijáis",
            "corrijan"
        ],
        "future-subjunctive-tense": [
            "corrigiere",
            "corrigieres",
            "corrigiere",
            "corrigiéremos",
            "corrigiereis",
            "corrigieren"
        ]
    },
    "correr": {
        "present-tense": [
            "corro",
            "corres",
            "corre",
            "corremos",
            "corréis",
            "corren"
        ],
        "future-tense": [
            "correré",
            "correrás",
            "correrá",
            "correremos",
            "correréis",
            "correrán"
        ],
        "preterite-tense": [
            "corrí",
            "corriste",
            "corrió",
            "corrimos",
            "corristeis",
            "corrieron"
        ],
        "present-subjunctive-tense": [
            "corra",
            "corras",
            "corra",
            "corramos",
            "corráis",
            "corran"
        ],
        "future-subjunctive-tense": [
            "corriere",
            "corrieres",
            "corriere",
            "corriéremos",
            "corriereis",
            "corrieren"
        ]
    },
    "coser": {
        "present-tense": [
            "coso",
            "coses",
            "cose",
            "cosemos",
            "coséis",
            "cosen"
        ],
        "future-tense": [
            "coseré",
            "coserás",
            "coserá",
            "coseremos",
            "coseréis",
            "coserán"
        ],
        "preterite-tense": [
            "cosí",
            "cosiste",
            "cosió",
            "cosimos",
            "cosisteis",
            "cosieron"
        ],
        "present-subjunctive-tense": [
            "cosa",
            "cosas",
            "cosa",
            "cosamos",
            "cosáis",
            "cosan"
        ],
        "future-subjunctive-tense": [
            "cosiere",
            "cosieres",
            "cosiere",
            "cosiéremos",
            "cosiereis",
            "cosieren"
        ]
    },
    "costar": {
        "present-tense": [
            "cuesto",
            "cuestas",
            "cuesta",
            "costamos",
            "costáis",
            "cuestan"
        ],
        "future-tense": [
            "costaré",
            "costarás",
            "costará",
            "costaremos",
            "costaréis",
            "costarán"
        ],
        "preterite-tense": [
            "costé",
            "costaste",
            "costó",
            "costamos",
            "costasteis",
            "costaron"
        ],
        "present-subjunctive-tense": [
            "cueste",
            "cuestes",
            "cueste",
            "costemos",
            "costéis",
            "cuesten"
        ],
        "future-subjunctive-tense": [
            "costare",
            "costares",
            "costare",
            "costáremos",
            "costareis",
            "costaren"
        ]
    },
    "crear": {
        "present-tense": [
            "creo",
            "creas",
            "crea",
            "creamos",
            "creáis",
            "crean"
        ],
        "future-tense": [
            "crearé",
            "crearás",
            "creará",
            "crearemos",
            "crearéis",
            "crearán"
        ],
        "preterite-tense": [
            "creé",
            "creaste",
            "creó",
            "creamos",
            "creasteis",
            "crearon"
        ],
        "present-subjunctive-tense": [
            "cree",
            "crees",
            "cree",
            "creemos",
            "creéis",
            "creen"
        ],
        "future-subjunctive-tense": [
            "creare",
            "creares",
            "creare",
            "creáremos",
            "creareis",
            "crearen"
        ]
    },
    "crecer": {
        "present-tense": [
            "crezco",
            "creces",
            "crece",
            "crecemos",
            "crecéis",
            "crecen"
        ],
        "future-tense": [
            "creceré",
            "crecerás",
            "crecerá",
            "creceremos",
            "creceréis",
            "crecerán"
        ],
        "preterite-tense": [
            "crecí",
            "creciste",
            "creció",
            "crecimos",
            "crecisteis",
            "crecieron"
        ],
        "present-subjunctive-tense": [
            "crezca",
            "crezcas",
            "crezca",
            "crezcamos",
            "crezcáis",
            "crezcan"
        ],
        "future-subjunctive-tense": [
            "creciere",
            "crecieres",
            "creciere",
            "creciéremos",
            "creciereis",
            "crecieren"
        ]
    },
    "creer": {
        "present-tense": [
            "creo",
            "crees",
            "cree",
            "creemos",
            "creéis",
            "creen"
        ],
        "future-tense": [
            "creeré",
            "creerás",
            "creerá",
            "creeremos",
            "creeréis",
            "creerán"
        ],
        "preterite-tense": [
            "creí",
            "creíste",
            "creyó",
            "creímos",
            "creísteis",
            "creyeron"
        ],
        "present-subjunctive-tense": [
            "crea",
            "creas",
            "crea",
            "creamos",
            "creáis",
            "crean"
        ],
        "future-subjunctive-tense": [
            "creyere",
            "creyeres",
            "creyere",
            "creyéremos",
            "creyereis",
            "creyeren"
        ]
    },
    "criar": {
        "present-tense": [
            "crío",
            "crías",
            "cría",
            "criamos",
            "criáis",
            "crían"
        ],
        "future-tense": [
            "criaré",
            "criarás",
            "criará",
            "criaremos",
            "criaréis",
            "criarán"
        ],
        "preterite-tense": [
            "crié",
            "criaste",
            "crio",
            "criamos",
            "criasteis",
            "criaron"
        ],
        "present-subjunctive-tense": [
            "críe",
            "críes",
            "críe",
            "criemos",
            "criéis",
            "críen"
        ],
        "future-subjunctive-tense": [
            "criare",
            "criares",
            "criare",
            "criáremos",
            "criareis",
            "criaren"
        ]
    },
    "criarse": {
        "present-tense": [
            "me crío",
            "te crías",
            "se cría",
            "nos criamos",
            "os criáis",
            "se crían"
        ],
        "future-tense": [
            "me criaré",
            "te criarás",
            "se criará",
            "nos criaremos",
            "os criaréis",
            "se criarán"
        ],
        "preterite-tense": [
            "me crié",
            "te criaste",
            "se crio",
            "nos criamos",
            "os criasteis",
            "se criaron"
        ],
        "present-subjunctive-tense": [
            "me críe",
            "te críes",
            "se críe",
            "nos criemos",
            "os criéis",
            "se críen"
        ],
        "future-subjunctive-tense": [
            "me criare",
            "te criares",
            "se criare",
            "nos criáremos",
            "os criareis",
            "se criaren"
        ]
    },
    "criticar": {
        "present-tense": [
            "critico",
            "criticas",
            "critica",
            "criticamos",
            "criticáis",
            "critican"
        ],
        "future-tense": [
            "criticaré",
            "criticarás",
            "criticará",
            "criticaremos",
            "criticaréis",
            "criticarán"
        ],
        "preterite-tense": [
            "critiqué",
            "criticaste",
            "criticó",
            "criticamos",
            "criticasteis",
            "criticaron"
        ],
        "present-subjunctive-tense": [
            "critique",
            "critiques",
            "critique",
            "critiquemos",
            "critiquéis",
            "critiquen"
        ],
        "future-subjunctive-tense": [
            "criticare",
            "criticares",
            "criticare",
            "criticáremos",
            "criticareis",
            "criticaren"
        ]
    },
    "crucificar": {
        "present-tense": [
            "crucifico",
            "crucificas",
            "crucifica",
            "crucificamos",
            "crucificáis",
            "crucifican"
        ],
        "future-tense": [
            "crucificaré",
            "crucificarás",
            "crucificará",
            "crucificaremos",
            "crucificaréis",
            "crucificarán"
        ],
        "preterite-tense": [
            "crucifiqué",
            "crucificaste",
            "crucificó",
            "crucificamos",
            "crucificasteis",
            "crucificaron"
        ],
        "present-subjunctive-tense": [
            "crucifique",
            "crucifiques",
            "crucifique",
            "crucifiquemos",
            "crucifiquéis",
            "crucifiquen"
        ],
        "future-subjunctive-tense": [
            "crucificare",
            "crucificares",
            "crucificare",
            "crucificáremos",
            "crucificareis",
            "crucificaren"
        ]
    },
    "cuidar": {
        "preterite-tense": [
            "cuidé",
            "cuidaste",
            "cuidó",
            "cuidamos",
            "cuidasteis",
            "cuidaron"
        ],
        "present-tense": [
            "cuido",
            "cuidas",
            "cuida",
            "cuidamos",
            "cuidáis",
            "cuidan"
        ],
        "future-tense": [
            "cuidaré",
            "cuidarás",
            "cuidará",
            "cuidaremos",
            "cuidaréis",
            "cuidarán"
        ],
        "present-subjunctive-tense": [
            "cuide",
            "cuides",
            "cuide",
            "cuidemos",
            "cuidéis",
            "cuiden"
        ],
        "future-subjunctive-tense": [
            "cuidare",
            "cuidares",
            "cuidare",
            "cuidáremos",
            "cuidareis",
            "cuidaren"
        ]
    },
    "cruzar": {
        "present-tense": [
            "cruzo",
            "cruzas",
            "cruza",
            "cruzamos",
            "cruzáis",
            "cruzan"
        ],
        "future-tense": [
            "cruzaré",
            "cruzarás",
            "cruzará",
            "cruzaremos",
            "cruzaréis",
            "cruzarán"
        ],
        "preterite-tense": [
            "crucé",
            "cruzaste",
            "cruzó",
            "cruzamos",
            "cruzasteis",
            "cruzaron"
        ],
        "present-subjunctive-tense": [
            "cruce",
            "cruces",
            "cruce",
            "crucemos",
            "crucéis",
            "crucen"
        ],
        "future-subjunctive-tense": [
            "cruzare",
            "cruzares",
            "cruzare",
            "cruzáremos",
            "cruzareis",
            "cruzaren"
        ]
    },
    "cubrir": {
        "present-tense": [
            "cubro",
            "cubres",
            "cubre",
            "cubrimos",
            "cubrís",
            "cubren"
        ],
        "future-tense": [
            "cubriré",
            "cubrirás",
            "cubrirá",
            "cubriremos",
            "cubriréis",
            "cubrirán"
        ],
        "preterite-tense": [
            "cubrí",
            "cubriste",
            "cubrió",
            "cubrimos",
            "cubristeis",
            "cubrieron"
        ],
        "present-subjunctive-tense": [
            "cubra",
            "cubras",
            "cubra",
            "cubramos",
            "cubráis",
            "cubran"
        ],
        "future-subjunctive-tense": [
            "cubriere",
            "cubrieres",
            "cubriere",
            "cubriéremos",
            "cubriereis",
            "cubrieren"
        ]
    },
    "culpar": {
        "present-tense": [
            "culpo",
            "culpas",
            "culpa",
            "culpamos",
            "culpáis",
            "culpan"
        ],
        "future-tense": [
            "culparé",
            "culparás",
            "culpará",
            "culparemos",
            "culparéis",
            "culparán"
        ],
        "preterite-tense": [
            "culpé",
            "culpaste",
            "culpó",
            "culpamos",
            "culpasteis",
            "culparon"
        ],
        "present-subjunctive-tense": [
            "culpe",
            "culpes",
            "culpe",
            "culpemos",
            "culpéis",
            "culpen"
        ],
        "future-subjunctive-tense": [
            "culpare",
            "culpares",
            "culpare",
            "culpáremos",
            "culpareis",
            "culparen"
        ]
    },
    "cultivar": {
        "present-tense": [
            "cultivo",
            "cultivas",
            "cultiva",
            "cultivamos",
            "cultiváis",
            "cultivan"
        ],
        "future-tense": [
            "cultivaré",
            "cultivarás",
            "cultivará",
            "cultivaremos",
            "cultivaréis",
            "cultivarán"
        ],
        "preterite-tense": [
            "cultivé",
            "cultivaste",
            "cultivó",
            "cultivamos",
            "cultivasteis",
            "cultivaron"
        ],
        "present-subjunctive-tense": [
            "cultive",
            "cultives",
            "cultive",
            "cultivemos",
            "cultivéis",
            "cultiven"
        ],
        "future-subjunctive-tense": [
            "cultivare",
            "cultivares",
            "cultivare",
            "cultiváremos",
            "cultivareis",
            "cultivaren"
        ]
    },
    "cumplir": {
        "present-tense": [
            "cumplo",
            "cumples",
            "cumple",
            "cumplimos",
            "cumplís",
            "cumplen"
        ],
        "future-tense": [
            "cumpliré",
            "cumplirás",
            "cumplirá",
            "cumpliremos",
            "cumpliréis",
            "cumplirán"
        ],
        "preterite-tense": [
            "cumplí",
            "cumpliste",
            "cumplió",
            "cumplimos",
            "cumplisteis",
            "cumplieron"
        ],
        "present-subjunctive-tense": [
            "cumpla",
            "cumplas",
            "cumpla",
            "cumplamos",
            "cumpláis",
            "cumplan"
        ],
        "future-subjunctive-tense": [
            "cumpliere",
            "cumplieres",
            "cumpliere",
            "cumpliéremos",
            "cumpliereis",
            "cumplieren"
        ]
    },
    "curar": {
        "present-tense": [
            "curo",
            "curas",
            "cura",
            "curamos",
            "curáis",
            "curan"
        ],
        "future-tense": [
            "curaré",
            "curarás",
            "curará",
            "curaremos",
            "curaréis",
            "curarán"
        ],
        "preterite-tense": [
            "curé",
            "curaste",
            "curó",
            "curamos",
            "curasteis",
            "curaron"
        ],
        "present-subjunctive-tense": [
            "cure",
            "cures",
            "cure",
            "curemos",
            "curéis",
            "curen"
        ],
        "future-subjunctive-tense": [
            "curare",
            "curares",
            "curare",
            "curáremos",
            "curareis",
            "curaren"
        ]
    },
    "dar": {
        "present-tense": [
            "doy",
            "das",
            "da",
            "damos",
            "dais",
            "dan"
        ],
        "future-tense": [
            "daré",
            "darás",
            "dará",
            "daremos",
            "daréis",
            "darán"
        ],
        "preterite-tense": [
            "di",
            "diste",
            "dio",
            "dimos",
            "disteis",
            "dieron"
        ],
        "present-subjunctive-tense": [
            "dé",
            "des",
            "dé",
            "demos",
            "deis",
            "den"
        ],
        "future-subjunctive-tense": [
            "diere",
            "dieres",
            "diere",
            "diéremos",
            "diereis",
            "dieren"
        ]
    },
    "deber": {
        "present-tense": [
            "debo",
            "debes",
            "debe",
            "debemos",
            "debéis",
            "deben"
        ],
        "future-tense": [
            "deberé",
            "deberás",
            "deberá",
            "deberemos",
            "deberéis",
            "deberán"
        ],
        "preterite-tense": [
            "debí",
            "debiste",
            "debió",
            "debimos",
            "debisteis",
            "debieron"
        ],
        "present-subjunctive-tense": [
            "deba",
            "debas",
            "deba",
            "debamos",
            "debáis",
            "deban"
        ],
        "future-subjunctive-tense": [
            "debiere",
            "debieres",
            "debiere",
            "debiéremos",
            "debiereis",
            "debieren"
        ]
    },
    "decidir": {
        "present-tense": [
            "decido",
            "decides",
            "decide",
            "decidimos",
            "decidís",
            "deciden"
        ],
        "future-tense": [
            "decidiré",
            "decidirás",
            "decidirá",
            "decidiremos",
            "decidiréis",
            "decidirán"
        ],
        "preterite-tense": [
            "decidí",
            "decidiste",
            "decidió",
            "decidimos",
            "decidisteis",
            "decidieron"
        ],
        "present-subjunctive-tense": [
            "decida",
            "decidas",
            "decida",
            "decidamos",
            "decidáis",
            "decidan"
        ],
        "future-subjunctive-tense": [
            "decidiere",
            "decidieres",
            "decidiere",
            "decidiéremos",
            "decidiereis",
            "decidieren"
        ]
    },
    "decidirse": {
        "present-tense": [
            "me decido",
            "te decides",
            "se decide",
            "nos decidimos",
            "os decidís",
            "se deciden"
        ],
        "future-tense": [
            "me decidiré",
            "te decidirás",
            "se decidirá",
            "nos decidiremos",
            "os decidiréis",
            "se decidirán"
        ],
        "preterite-tense": [
            "me decidí",
            "te decidiste",
            "se decidió",
            "nos decidimos",
            "os decidisteis",
            "se decidieron"
        ],
        "present-subjunctive-tense": [
            "me decida",
            "te decidas",
            "se decida",
            "nos decidamos",
            "os decidáis",
            "se decidan"
        ],
        "future-subjunctive-tense": [
            "me decidiere",
            "te decidieres",
            "se decidiere",
            "nos decidiéremos",
            "os decidiereis",
            "se decidieren"
        ]
    },
    "depender": {
        "present-tense": [
            "dependo",
            "dependes",
            "depende",
            "dependemos",
            "dependéis",
            "dependen"
        ],
        "future-tense": [
            "dependeré",
            "dependerás",
            "dependerá",
            "dependeremos",
            "dependeréis",
            "dependerán"
        ],
        "preterite-tense": [
            "dependí",
            "dependiste",
            "dependió",
            "dependimos",
            "dependisteis",
            "dependieron"
        ],
        "present-subjunctive-tense": [
            "dependa",
            "dependas",
            "dependa",
            "dependamos",
            "dependáis",
            "dependan"
        ],
        "future-subjunctive-tense": [
            "dependiere",
            "dependieres",
            "dependiere",
            "dependiéremos",
            "dependiereis",
            "dependieren"
        ]
    },
    "decir": {
        "present-tense": [
            "digo",
            "dices",
            "dice",
            "decimos",
            "decís",
            "dicen"
        ],
        "future-tense": [
            "diré",
            "dirás",
            "dirá",
            "diremos",
            "diréis",
            "dirán"
        ],
        "preterite-tense": [
            "dije",
            "dijiste",
            "dijo",
            "dijimos",
            "dijisteis",
            "dijeron"
        ],
        "present-subjunctive-tense": [
            "diga",
            "digas",
            "diga",
            "digamos",
            "digáis",
            "digan"
        ],
        "future-subjunctive-tense": [
            "dijere",
            "dijeres",
            "dijere",
            "dijéremos",
            "dijereis",
            "dijeren"
        ]
    },
    "declarar": {
        "present-tense": [
            "declaro",
            "declaras",
            "declara",
            "declaramos",
            "declaráis",
            "declaran"
        ],
        "future-tense": [
            "declararé",
            "declararás",
            "declarará",
            "declararemos",
            "declararéis",
            "declararán"
        ],
        "preterite-tense": [
            "declaré",
            "declaraste",
            "declaró",
            "declaramos",
            "declarasteis",
            "declararon"
        ],
        "present-subjunctive-tense": [
            "declare",
            "declares",
            "declare",
            "declaremos",
            "declaréis",
            "declaren"
        ],
        "future-subjunctive-tense": [
            "declarare",
            "declarares",
            "declarare",
            "declaráremos",
            "declarareis",
            "declararen"
        ]
    },
    "decorar": {
        "present-tense": [
            "decoro",
            "decoras",
            "decora",
            "decoramos",
            "decoráis",
            "decoran"
        ],
        "future-tense": [
            "decoraré",
            "decorarás",
            "decorará",
            "decoraremos",
            "decoraréis",
            "decorarán"
        ],
        "preterite-tense": [
            "decoré",
            "decoraste",
            "decoró",
            "decoramos",
            "decorasteis",
            "decoraron"
        ],
        "present-subjunctive-tense": [
            "decore",
            "decores",
            "decore",
            "decoremos",
            "decoréis",
            "decoren"
        ],
        "future-subjunctive-tense": [
            "decorare",
            "decorares",
            "decorare",
            "decoráremos",
            "decorareis",
            "decoraren"
        ]
    },
    "dedicar": {
        "present-tense": [
            "dedico",
            "dedicas",
            "dedica",
            "dedicamos",
            "dedicáis",
            "dedican"
        ],
        "future-tense": [
            "dedicaré",
            "dedicarás",
            "dedicará",
            "dedicaremos",
            "dedicaréis",
            "dedicarán"
        ],
        "preterite-tense": [
            "dediqué",
            "dedicaste",
            "dedicó",
            "dedicamos",
            "dedicasteis",
            "dedicaron"
        ],
        "present-subjunctive-tense": [
            "dedique",
            "dediques",
            "dedique",
            "dediquemos",
            "dediquéis",
            "dediquen"
        ],
        "future-subjunctive-tense": [
            "dedicare",
            "dedicares",
            "dedicare",
            "dedicáremos",
            "dedicareis",
            "dedicaren"
        ]
    },
    "dedicarse": {
        "present-tense": [
            "me dedico",
            "te dedicas",
            "se dedica",
            "nos dedicamos",
            "os dedicáis",
            "se dedican"
        ],
        "future-tense": [
            "me dedicaré",
            "te dedicarás",
            "se dedicará",
            "nos dedicaremos",
            "os dedicaréis",
            "se dedicarán"
        ],
        "preterite-tense": [
            "me dediqué",
            "te dedicaste",
            "se dedicó",
            "nos dedicamos",
            "os dedicasteis",
            "se dedicaron"
        ],
        "present-subjunctive-tense": [
            "me dedique",
            "te dediques",
            "se dedique",
            "nos dediquemos",
            "os dediquéis",
            "se dediquen"
        ],
        "future-subjunctive-tense": [
            "me dedicare",
            "te dedicares",
            "se dedicare",
            "nos dedicáremos",
            "os dedicareis",
            "se dedicaren"
        ]
    },
    "defender": {
        "present-tense": [
            "defiendo",
            "defiendes",
            "defiende",
            "defendemos",
            "defendéis",
            "defienden"
        ],
        "future-tense": [
            "defenderé",
            "defenderás",
            "defenderá",
            "defenderemos",
            "defenderéis",
            "defenderán"
        ],
        "preterite-tense": [
            "defendí",
            "defendiste",
            "defendió",
            "defendimos",
            "defendisteis",
            "defendieron"
        ],
        "present-subjunctive-tense": [
            "defienda",
            "defiendas",
            "defienda",
            "defendamos",
            "defendáis",
            "defiendan"
        ],
        "future-subjunctive-tense": [
            "defendiere",
            "defendieres",
            "defendiere",
            "defendiéremos",
            "defendiereis",
            "defendieren"
        ]
    },
    "dejar": {
        "present-tense": [
            "dejo",
            "dejas",
            "deja",
            "dejamos",
            "dejáis",
            "dejan"
        ],
        "future-tense": [
            "dejaré",
            "dejarás",
            "dejará",
            "dejaremos",
            "dejaréis",
            "dejarán"
        ],
        "preterite-tense": [
            "dejé",
            "dejaste",
            "dejó",
            "dejamos",
            "dejasteis",
            "dejaron"
        ],
        "present-subjunctive-tense": [
            "deje",
            "dejes",
            "deje",
            "dejemos",
            "dejéis",
            "dejen"
        ],
        "future-subjunctive-tense": [
            "dejare",
            "dejares",
            "dejare",
            "dejáremos",
            "dejareis",
            "dejaren"
        ]
    },
    "demostrar": {
        "present-tense": [
            "demuestro",
            "demuestras",
            "demuestra",
            "demostramos",
            "demostráis",
            "demuestran"
        ],
        "future-tense": [
            "demostraré",
            "demostrarás",
            "demostrará",
            "demostraremos",
            "demostraréis",
            "demostrarán"
        ],
        "preterite-tense": [
            "demostré",
            "demostraste",
            "demostró",
            "demostramos",
            "demostrasteis",
            "demostraron"
        ],
        "present-subjunctive-tense": [
            "demuestre",
            "demuestres",
            "demuestre",
            "demostremos",
            "demostréis",
            "demuestren"
        ],
        "future-subjunctive-tense": [
            "demostrare",
            "demostrares",
            "demostrare",
            "demostráremos",
            "demostrareis",
            "demostraren"
        ]
    },
    "depositar": {
        "present-tense": [
            "deposito",
            "depositas",
            "deposita",
            "depositamos",
            "depositáis",
            "depositan"
        ],
        "future-tense": [
            "depositaré",
            "depositarás",
            "depositará",
            "depositaremos",
            "depositaréis",
            "depositarán"
        ],
        "preterite-tense": [
            "deposité",
            "depositaste",
            "depositó",
            "depositamos",
            "depositasteis",
            "depositaron"
        ],
        "present-subjunctive-tense": [
            "deposite",
            "deposites",
            "deposite",
            "depositemos",
            "depositéis",
            "depositen"
        ],
        "future-subjunctive-tense": [
            "depositare",
            "depositares",
            "depositare",
            "depositáremos",
            "depositareis",
            "depositaren"
        ]
    },
    "deprimir": {
        "present-tense": [
            "deprimo",
            "deprimes",
            "deprime",
            "deprimimos",
            "deprimís",
            "deprimen"
        ],
        "future-tense": [
            "deprimiré",
            "deprimirás",
            "deprimirá",
            "deprimiremos",
            "deprimiréis",
            "deprimirán"
        ],
        "preterite-tense": [
            "deprimí",
            "deprimiste",
            "deprimió",
            "deprimimos",
            "deprimisteis",
            "deprimieron"
        ],
        "present-subjunctive-tense": [
            "deprima",
            "deprimas",
            "deprima",
            "deprimamos",
            "deprimáis",
            "depriman"
        ],
        "future-subjunctive-tense": [
            "deprimiere",
            "deprimieres",
            "deprimiere",
            "deprimiéremos",
            "deprimiereis",
            "deprimieren"
        ]
    },
    "derretir": {
        "present-tense": [
            "derrito",
            "derrites",
            "derrite",
            "derretimos",
            "derretís",
            "derriten"
        ],
        "future-tense": [
            "derretiré",
            "derretirás",
            "derretirá",
            "derretiremos",
            "derretiréis",
            "derretirán"
        ],
        "preterite-tense": [
            "derretí",
            "derretiste",
            "derritió",
            "derretimos",
            "derretisteis",
            "derritieron"
        ],
        "present-subjunctive-tense": [
            "derrita",
            "derritas",
            "derrita",
            "derritamos",
            "derritáis",
            "derritan"
        ],
        "future-subjunctive-tense": [
            "derritiere",
            "derritieres",
            "derritiere",
            "derritiéremos",
            "derritiereis",
            "derritieren"
        ]
    },
    "desagradar": {
        "present-tense": [
            "desagrado",
            "desagradas",
            "desagrada",
            "desagradamos",
            "desagradáis",
            "desagradan"
        ],
        "future-tense": [
            "desagradaré",
            "desagradarás",
            "desagradará",
            "desagradaremos",
            "desagradaréis",
            "desagradarán"
        ],
        "preterite-tense": [
            "desagradé",
            "desagradaste",
            "desagradó",
            "desagradamos",
            "desagradasteis",
            "desagradaron"
        ],
        "present-subjunctive-tense": [
            "desagrade",
            "desagrades",
            "desagrade",
            "desagrademos",
            "desagradéis",
            "desagraden"
        ],
        "future-subjunctive-tense": [
            "desagradare",
            "desagradares",
            "desagradare",
            "desagradáremos",
            "desagradareis",
            "desagradaren"
        ]
    },
    "desagradecer": {
        "present-tense": [
            "desagradezco",
            "desagradeces",
            "desagradece",
            "desagradecemos",
            "desagradecéis",
            "desagradecen"
        ],
        "future-tense": [
            "desagradeceré",
            "desagradecerás",
            "desagradecerá",
            "desagradeceremos",
            "desagradeceréis",
            "desagradecerán"
        ],
        "preterite-tense": [
            "desagradecí",
            "desagradeciste",
            "desagradeció",
            "desagradecimos",
            "desagradecisteis",
            "desagradecieron"
        ],
        "present-subjunctive-tense": [
            "desagradezca",
            "desagradezcas",
            "desagradezca",
            "desagradezcamos",
            "desagradezcáis",
            "desagradezcan"
        ],
        "future-subjunctive-tense": [
            "desagradeciere",
            "desagradecieres",
            "desagradeciere",
            "desagradeciéremos",
            "desagradeciereis",
            "desagradecieren"
        ]
    },
    "desaparecer": {
        "present-tense": [
            "desaparezco",
            "desapareces",
            "desaparece",
            "desaparecemos",
            "desaparecéis",
            "desaparecen"
        ],
        "future-tense": [
            "desapareceré",
            "desaparecerás",
            "desaparecerá",
            "desapareceremos",
            "desapareceréis",
            "desaparecerán"
        ],
        "preterite-tense": [
            "desaparecí",
            "desapareciste",
            "desapareció",
            "desaparecimos",
            "desaparecisteis",
            "desaparecieron"
        ],
        "present-subjunctive-tense": [
            "desaparezca",
            "desaparezcas",
            "desaparezca",
            "desaparezcamos",
            "desaparezcáis",
            "desaparezcan"
        ],
        "future-subjunctive-tense": [
            "desapareciere",
            "desaparecieres",
            "desapareciere",
            "desapareciéremos",
            "desapareciereis",
            "desaparecieren"
        ]
    },
    "desayunar": {
        "present-tense": [
            "desayuno",
            "desayunas",
            "desayuna",
            "desayunamos",
            "desayunáis",
            "desayunan"
        ],
        "future-tense": [
            "desayunaré",
            "desayunarás",
            "desayunará",
            "desayunaremos",
            "desayunaréis",
            "desayunarán"
        ],
        "preterite-tense": [
            "desayuné",
            "desayunaste",
            "desayunó",
            "desayunamos",
            "desayunasteis",
            "desayunaron"
        ],
        "present-subjunctive-tense": [
            "desayune",
            "desayunes",
            "desayune",
            "desayunemos",
            "desayunéis",
            "desayunen"
        ],
        "future-subjunctive-tense": [
            "desayunare",
            "desayunares",
            "desayunare",
            "desayunáremos",
            "desayunareis",
            "desayunaren"
        ]
    },
    "descansar": {
        "present-tense": [
            "descanso",
            "descansas",
            "descansa",
            "descansamos",
            "descansáis",
            "descansan"
        ],
        "future-tense": [
            "descansaré",
            "descansarás",
            "descansará",
            "descansaremos",
            "descansaréis",
            "descansarán"
        ],
        "preterite-tense": [
            "descansé",
            "descansaste",
            "descansó",
            "descansamos",
            "descansasteis",
            "descansaron"
        ],
        "present-subjunctive-tense": [
            "descanse",
            "descanses",
            "descanse",
            "descansemos",
            "descanséis",
            "descansen"
        ],
        "future-subjunctive-tense": [
            "descansare",
            "descansares",
            "descansare",
            "descansáremos",
            "descansareis",
            "descansaren"
        ]
    },
    "descender": {
        "present-tense": [
            "desciendo",
            "desciendes",
            "desciende",
            "descendemos",
            "descendéis",
            "descienden"
        ],
        "future-tense": [
            "descenderé",
            "descenderás",
            "descenderá",
            "descenderemos",
            "descenderéis",
            "descenderán"
        ],
        "preterite-tense": [
            "descendí",
            "descendiste",
            "descendió",
            "descendimos",
            "descendisteis",
            "descendieron"
        ],
        "present-subjunctive-tense": [
            "descienda",
            "desciendas",
            "descienda",
            "descendamos",
            "descendáis",
            "desciendan"
        ],
        "future-subjunctive-tense": [
            "descendiere",
            "descendieres",
            "descendiere",
            "descendiéremos",
            "descendiereis",
            "descendieren"
        ]
    },
    "describir": {
        "present-tense": [
            "describo",
            "describes",
            "describe",
            "describimos",
            "describís",
            "describen"
        ],
        "future-tense": [
            "describiré",
            "describirás",
            "describirá",
            "describiremos",
            "describiréis",
            "describirán"
        ],
        "preterite-tense": [
            "describí",
            "describiste",
            "describió",
            "describimos",
            "describisteis",
            "describieron"
        ],
        "present-subjunctive-tense": [
            "describa",
            "describas",
            "describa",
            "describamos",
            "describáis",
            "describan"
        ],
        "future-subjunctive-tense": [
            "describiere",
            "describieres",
            "describiere",
            "describiéremos",
            "describiereis",
            "describieren"
        ]
    },
    "doler": {
        "present-subjunctive-tense": [
            "",
            "",
            "duela",
            "",
            "",
            "duelan"
        ],
        "future-subjunctive-tense": [
            "",
            "",
            "doliere",
            "",
            "",
            "dolieren"
        ],
        "present-tense": [
            "",
            "",
            "duele",
            "",
            "",
            "duelen"
        ],
        "future-tense": [
            "",
            "",
            "dolerá",
            "",
            "",
            "dolerán"
        ],
        "preterite-tense": [
            "",
            "",
            "dolió",
            "",
            "",
            "dolieron"
        ]
    },
    "descubrir": {
        "present-tense": [
            "descubro",
            "descubres",
            "descubre",
            "descubrimos",
            "descubrís",
            "descubren"
        ],
        "future-tense": [
            "descubriré",
            "descubrirás",
            "descubrirá",
            "descubriremos",
            "descubriréis",
            "descubrirán"
        ],
        "preterite-tense": [
            "descubrí",
            "descubriste",
            "descubrió",
            "descubrimos",
            "descubristeis",
            "descubrieron"
        ],
        "present-subjunctive-tense": [
            "descubra",
            "descubras",
            "descubra",
            "descubramos",
            "descubráis",
            "descubran"
        ],
        "future-subjunctive-tense": [
            "descubriere",
            "descubrieres",
            "descubriere",
            "descubriéremos",
            "descubriereis",
            "descubrieren"
        ]
    },
    "desarrollar": {
        "present-tense": [
            "desarrollo",
            "desarrollas",
            "desarrolla",
            "desarrollamos",
            "desarrolláis",
            "desarrollan"
        ],
        "future-tense": [
            "desarrollaré",
            "desarrollarás",
            "desarrollará",
            "desarrollaremos",
            "desarrollaréis",
            "desarrollarán"
        ],
        "preterite-tense": [
            "desarrollé",
            "desarrollaste",
            "desarrolló",
            "desarrollamos",
            "desarrollasteis",
            "desarrollaron"
        ],
        "present-subjunctive-tense": [
            "desarrolle",
            "desarrolles",
            "desarrolle",
            "desarrollemos",
            "desarrolléis",
            "desarrollen"
        ],
        "future-subjunctive-tense": [
            "desarrollare",
            "desarrollares",
            "desarrollare",
            "desarrolláremos",
            "desarrollareis",
            "desarrollaren"
        ]
    },
    "desarrollarse": {
        "present-tense": [
            "me desarrollo",
            "te desarrollas",
            "se desarrolla",
            "nos desarrollamos",
            "os desarrolláis",
            "se desarrollan"
        ],
        "future-tense": [
            "me desarrollaré",
            "te desarrollarás",
            "se desarrollará",
            "nos desarrollaremos",
            "os desarrollaréis",
            "se desarrollarán"
        ],
        "preterite-tense": [
            "me desarrollé",
            "te desarrollaste",
            "se desarrolló",
            "nos desarrollamos",
            "os desarrollasteis",
            "se desarrollaron"
        ],
        "present-subjunctive-tense": [
            "me desarrolle",
            "te desarrolles",
            "se desarrolle",
            "nos desarrollemos",
            "os desarrolléis",
            "se desarrollen"
        ],
        "future-subjunctive-tense": [
            "me desarrollare",
            "te desarrollares",
            "se desarrollare",
            "nos desarrolláremos",
            "os desarrollareis",
            "se desarrollaren"
        ]
    },
    "desear": {
        "present-tense": [
            "deseo",
            "deseas",
            "desea",
            "deseamos",
            "deseáis",
            "desean"
        ],
        "future-tense": [
            "desearé",
            "desearás",
            "deseará",
            "desearemos",
            "desearéis",
            "desearán"
        ],
        "preterite-tense": [
            "deseé",
            "deseaste",
            "deseó",
            "deseamos",
            "deseasteis",
            "desearon"
        ],
        "present-subjunctive-tense": [
            "desee",
            "desees",
            "desee",
            "deseemos",
            "deseéis",
            "deseen"
        ],
        "future-subjunctive-tense": [
            "deseare",
            "deseares",
            "deseare",
            "deseáremos",
            "deseareis",
            "desearen"
        ]
    },
    "deshacer": {
        "present-tense": [
            "deshago",
            "deshaces",
            "deshace",
            "deshacemos",
            "deshacéis",
            "deshacen"
        ],
        "future-tense": [
            "desharé",
            "desharás",
            "deshará",
            "desharemos",
            "desharéis",
            "desharán"
        ],
        "preterite-tense": [
            "deshice",
            "deshiciste",
            "deshizo",
            "deshicimos",
            "deshicisteis",
            "deshicieron"
        ],
        "present-subjunctive-tense": [
            "deshaga",
            "deshagas",
            "deshaga",
            "deshagamos",
            "deshagáis",
            "deshagan"
        ],
        "future-subjunctive-tense": [
            "deshiciere",
            "deshicieres",
            "deshiciere",
            "deshiciéremos",
            "deshiciereis",
            "deshicieren"
        ]
    },
    "despedir": {
        "present-tense": [
            "despido",
            "despides",
            "despide",
            "despedimos",
            "despedís",
            "despiden"
        ],
        "future-tense": [
            "despediré",
            "despedirás",
            "despedirá",
            "despediremos",
            "despediréis",
            "despedirán"
        ],
        "preterite-tense": [
            "despedí",
            "despediste",
            "despidió",
            "despedimos",
            "despedisteis",
            "despidieron"
        ],
        "present-subjunctive-tense": [
            "despida",
            "despidas",
            "despida",
            "despidamos",
            "despidáis",
            "despidan"
        ],
        "future-subjunctive-tense": [
            "despidiere",
            "despidieres",
            "despidiere",
            "despidiéremos",
            "despidiereis",
            "despidieren"
        ]
    },
    "despertar": {
        "present-tense": [
            "despierto",
            "despiertas",
            "despierta",
            "despertamos",
            "despertáis",
            "despiertan"
        ],
        "future-tense": [
            "despertaré",
            "despertarás",
            "despertará",
            "despertaremos",
            "despertaréis",
            "despertarán"
        ],
        "preterite-tense": [
            "desperté",
            "despertaste",
            "despertó",
            "despertamos",
            "despertasteis",
            "despertaron"
        ],
        "present-subjunctive-tense": [
            "despierte",
            "despiertes",
            "despierte",
            "despertemos",
            "despertéis",
            "despierten"
        ],
        "future-subjunctive-tense": [
            "despertare",
            "despertares",
            "despertare",
            "despertáremos",
            "despertareis",
            "despertaren"
        ]
    },
    "despertarse": {
        "present-tense": [
            "me despierto",
            "te despiertas",
            "se despierta",
            "nos despertamos",
            "os despertáis",
            "se despiertan"
        ],
        "future-tense": [
            "me despertaré",
            "te despertarás",
            "se despertará",
            "nos despertaremos",
            "os despertaréis",
            "se despertarán"
        ],
        "preterite-tense": [
            "me desperté",
            "te despertaste",
            "se despertó",
            "nos despertamos",
            "os despertasteis",
            "se despertaron"
        ],
        "present-subjunctive-tense": [
            "me despierte",
            "te despiertes",
            "se despierte",
            "nos despertemos",
            "os despertéis",
            "se despierten"
        ],
        "future-subjunctive-tense": [
            "me despertare",
            "te despertares",
            "se despertare",
            "nos despertáremos",
            "os despertareis",
            "se despertaren"
        ]
    },
    "destruir": {
        "present-tense": [
            "destruyo",
            "destruyes",
            "destruye",
            "destruimos",
            "destruís",
            "destruyen"
        ],
        "future-tense": [
            "destruiré",
            "destruirás",
            "destruirá",
            "destruiremos",
            "destruiréis",
            "destruirán"
        ],
        "preterite-tense": [
            "destruí",
            "destruiste",
            "destruyó",
            "destruimos",
            "destruisteis",
            "destruyeron"
        ],
        "present-subjunctive-tense": [
            "destruya",
            "destruyas",
            "destruya",
            "destruyamos",
            "destruyáis",
            "destruyan"
        ],
        "future-subjunctive-tense": [
            "destruyere",
            "destruyeres",
            "destruyere",
            "destruyéremos",
            "destruyereis",
            "destruyeren"
        ]
    },
    "detener": {
        "present-tense": [
            "detengo",
            "detienes",
            "detiene",
            "detenemos",
            "detenéis",
            "detienen"
        ],
        "future-tense": [
            "detendré",
            "detendrás",
            "detendrá",
            "detendremos",
            "detendréis",
            "detendrán"
        ],
        "preterite-tense": [
            "detuve",
            "detuviste",
            "detuvo",
            "detuvimos",
            "detuvisteis",
            "detuvieron"
        ],
        "present-subjunctive-tense": [
            "detenga",
            "detengas",
            "detenga",
            "detengamos",
            "detengáis",
            "detengan"
        ],
        "future-subjunctive-tense": [
            "detuviere",
            "detuvieres",
            "detuviere",
            "detuviéremos",
            "detuviereis",
            "detuvieren"
        ]
    },
    "detenerse": {
        "present-tense": [
            "me detengo",
            "te detienes",
            "se detiene",
            "nos detenemos",
            "os detenéis",
            "se detienen"
        ],
        "future-tense": [
            "me detendré",
            "te detendrás",
            "se detendrá",
            "nos detendremos",
            "os detendréis",
            "se detendrán"
        ],
        "preterite-tense": [
            "me detuve",
            "te detuviste",
            "se detuvo",
            "nos detuvimos",
            "os detuvisteis",
            "se detuvieron"
        ],
        "present-subjunctive-tense": [
            "me detenga",
            "te detengas",
            "se detenga",
            "nos detengamos",
            "os detengáis",
            "se detengan"
        ],
        "future-subjunctive-tense": [
            "me detuviere",
            "te detuvieres",
            "se detuviere",
            "nos detuviéremos",
            "os detuviereis",
            "se detuvieren"
        ]
    },
    "detestar": {
        "present-tense": [
            "detesto",
            "detestas",
            "detesta",
            "detestamos",
            "detestáis",
            "detestan"
        ],
        "future-tense": [
            "detestaré",
            "detestarás",
            "detestará",
            "detestaremos",
            "detestaréis",
            "detestarán"
        ],
        "preterite-tense": [
            "detesté",
            "detestaste",
            "detestó",
            "detestamos",
            "detestasteis",
            "detestaron"
        ],
        "present-subjunctive-tense": [
            "deteste",
            "detestes",
            "deteste",
            "detestemos",
            "detestéis",
            "detesten"
        ],
        "future-subjunctive-tense": [
            "detestare",
            "detestares",
            "detestare",
            "detestáremos",
            "detestareis",
            "detestaren"
        ]
    },
    "devolver": {
        "present-tense": [
            "devuelvo",
            "devuelves",
            "devuelve",
            "devolvemos",
            "devolvéis",
            "devuelven"
        ],
        "future-tense": [
            "devolveré",
            "devolverás",
            "devolverá",
            "devolveremos",
            "devolveréis",
            "devolverán"
        ],
        "preterite-tense": [
            "devolví",
            "devolviste",
            "devolvió",
            "devolvimos",
            "devolvisteis",
            "devolvieron"
        ],
        "present-subjunctive-tense": [
            "devuelva",
            "devuelvas",
            "devuelva",
            "devolvamos",
            "devolváis",
            "devuelvan"
        ],
        "future-subjunctive-tense": [
            "devolviere",
            "devolvieres",
            "devolviere",
            "devolviéremos",
            "devolviereis",
            "devolvieren"
        ]
    },
    "devorar": {
        "present-tense": [
            "devoro",
            "devoras",
            "devora",
            "devoramos",
            "devoráis",
            "devoran"
        ],
        "future-tense": [
            "devoraré",
            "devorarás",
            "devorará",
            "devoraremos",
            "devoraréis",
            "devorarán"
        ],
        "preterite-tense": [
            "devoré",
            "devoraste",
            "devoró",
            "devoramos",
            "devorasteis",
            "devoraron"
        ],
        "present-subjunctive-tense": [
            "devore",
            "devores",
            "devore",
            "devoremos",
            "devoréis",
            "devoren"
        ],
        "future-subjunctive-tense": [
            "devorare",
            "devorares",
            "devorare",
            "devoráremos",
            "devorareis",
            "devoraren"
        ]
    },
    "dibujar": {
        "present-tense": [
            "dibujo",
            "dibujas",
            "dibuja",
            "dibujamos",
            "dibujáis",
            "dibujan"
        ],
        "future-tense": [
            "dibujaré",
            "dibujarás",
            "dibujará",
            "dibujaremos",
            "dibujaréis",
            "dibujarán"
        ],
        "preterite-tense": [
            "dibujé",
            "dibujaste",
            "dibujó",
            "dibujamos",
            "dibujasteis",
            "dibujaron"
        ],
        "present-subjunctive-tense": [
            "dibuje",
            "dibujes",
            "dibuje",
            "dibujemos",
            "dibujéis",
            "dibujen"
        ],
        "future-subjunctive-tense": [
            "dibujare",
            "dibujares",
            "dibujare",
            "dibujáremos",
            "dibujareis",
            "dibujaren"
        ]
    },
    "dirigir": {
        "present-tense": [
            "dirijo",
            "diriges",
            "dirige",
            "dirigimos",
            "dirigís",
            "dirigen"
        ],
        "future-tense": [
            "dirigiré",
            "dirigirás",
            "dirigirá",
            "dirigiremos",
            "dirigiréis",
            "dirigirán"
        ],
        "preterite-tense": [
            "dirigí",
            "dirigiste",
            "dirigió",
            "dirigimos",
            "dirigisteis",
            "dirigieron"
        ],
        "present-subjunctive-tense": [
            "dirija",
            "dirijas",
            "dirija",
            "dirijamos",
            "dirijáis",
            "dirijan"
        ],
        "future-subjunctive-tense": [
            "dirigiere",
            "dirigieres",
            "dirigiere",
            "dirigiéremos",
            "dirigiereis",
            "dirigieren"
        ]
    },
    "diseñar": {
        "present-tense": [
            "diseño",
            "diseñas",
            "diseña",
            "diseñamos",
            "diseñáis",
            "diseñan"
        ],
        "future-tense": [
            "diseñaré",
            "diseñarás",
            "diseñará",
            "diseñaremos",
            "diseñaréis",
            "diseñarán"
        ],
        "preterite-tense": [
            "diseñé",
            "diseñaste",
            "diseñó",
            "diseñamos",
            "diseñasteis",
            "diseñaron"
        ],
        "present-subjunctive-tense": [
            "diseñe",
            "diseñes",
            "diseñe",
            "diseñemos",
            "diseñéis",
            "diseñen"
        ],
        "future-subjunctive-tense": [
            "diseñare",
            "diseñares",
            "diseñare",
            "diseñáremos",
            "diseñareis",
            "diseñaren"
        ]
    },
    "disfrutar": {
        "present-tense": [
            "disfruto",
            "disfrutas",
            "disfruta",
            "disfrutamos",
            "disfrutáis",
            "disfrutan"
        ],
        "future-tense": [
            "disfrutaré",
            "disfrutarás",
            "disfrutará",
            "disfrutaremos",
            "disfrutaréis",
            "disfrutarán"
        ],
        "preterite-tense": [
            "disfruté",
            "disfrutaste",
            "disfrutó",
            "disfrutamos",
            "disfrutasteis",
            "disfrutaron"
        ],
        "present-subjunctive-tense": [
            "disfrute",
            "disfrutes",
            "disfrute",
            "disfrutemos",
            "disfrutéis",
            "disfruten"
        ],
        "future-subjunctive-tense": [
            "disfrutare",
            "disfrutares",
            "disfrutare",
            "disfrutáremos",
            "disfrutareis",
            "disfrutaren"
        ]
    },
    "disgustar": {
        "present-tense": [
            "disgusto",
            "disgustas",
            "disgusta",
            "disgustamos",
            "disgustáis",
            "disgustan"
        ],
        "future-tense": [
            "disgustaré",
            "disgustarás",
            "disgustará",
            "disgustaremos",
            "disgustaréis",
            "disgustarán"
        ],
        "preterite-tense": [
            "disgusté",
            "disgustaste",
            "disgustó",
            "disgustamos",
            "disgustasteis",
            "disgustaron"
        ],
        "present-subjunctive-tense": [
            "disguste",
            "disgustes",
            "disguste",
            "disgustemos",
            "disgustéis",
            "disgusten"
        ],
        "future-subjunctive-tense": [
            "disgustare",
            "disgustares",
            "disgustare",
            "disgustáremos",
            "disgustareis",
            "disgustaren"
        ]
    },
    "disminuir": {
        "present-tense": [
            "disminuyo",
            "disminuyes",
            "disminuye",
            "disminuimos",
            "disminuís",
            "disminuyen"
        ],
        "future-tense": [
            "disminuiré",
            "disminuirás",
            "disminuirá",
            "disminuiremos",
            "disminuiréis",
            "disminuirán"
        ],
        "preterite-tense": [
            "disminuí",
            "disminuiste",
            "disminuyó",
            "disminuimos",
            "disminuisteis",
            "disminuyeron"
        ],
        "present-subjunctive-tense": [
            "disminuya",
            "disminuyas",
            "disminuya",
            "disminuyamos",
            "disminuyáis",
            "disminuyan"
        ],
        "future-subjunctive-tense": [
            "disminuyere",
            "disminuyeres",
            "disminuyere",
            "disminuyéremos",
            "disminuyereis",
            "disminuyeren"
        ]
    },
    "distinguir": {
        "present-tense": [
            "distingo",
            "distingues",
            "distingue",
            "distinguimos",
            "distinguís",
            "distinguen"
        ],
        "future-tense": [
            "distinguiré",
            "distinguirás",
            "distinguirá",
            "distinguiremos",
            "distinguiréis",
            "distinguirán"
        ],
        "preterite-tense": [
            "distinguí",
            "distinguiste",
            "distinguió",
            "distinguimos",
            "distinguisteis",
            "distinguieron"
        ],
        "present-subjunctive-tense": [
            "distinga",
            "distingas",
            "distinga",
            "distingamos",
            "distingáis",
            "distingan"
        ],
        "future-subjunctive-tense": [
            "distinguiere",
            "distinguieres",
            "distinguiere",
            "distinguiéremos",
            "distinguiereis",
            "distinguieren"
        ]
    },
    "distribuir": {
        "present-tense": [
            "distribuyo",
            "distribuyes",
            "distribuye",
            "distribuimos",
            "distribuís",
            "distribuyen"
        ],
        "future-tense": [
            "distribuiré",
            "distribuirás",
            "distribuirá",
            "distribuiremos",
            "distribuiréis",
            "distribuirán"
        ],
        "preterite-tense": [
            "distribuí",
            "distribuiste",
            "distribuyó",
            "distribuimos",
            "distribuisteis",
            "distribuyeron"
        ],
        "present-subjunctive-tense": [
            "distribuya",
            "distribuyas",
            "distribuya",
            "distribuyamos",
            "distribuyáis",
            "distribuyan"
        ],
        "future-subjunctive-tense": [
            "distribuyere",
            "distribuyeres",
            "distribuyere",
            "distribuyéremos",
            "distribuyereis",
            "distribuyeren"
        ]
    },
    "divertir": {
        "present-tense": [
            "divierto",
            "diviertes",
            "divierte",
            "divertimos",
            "divertís",
            "divierten"
        ],
        "future-tense": [
            "divertiré",
            "divertirás",
            "divertirá",
            "divertiremos",
            "divertiréis",
            "divertirán"
        ],
        "preterite-tense": [
            "divertí",
            "divertiste",
            "divirtió",
            "divertimos",
            "divertisteis",
            "divirtieron"
        ],
        "present-subjunctive-tense": [
            "divierta",
            "diviertas",
            "divierta",
            "divirtamos",
            "divirtáis",
            "diviertan"
        ],
        "future-subjunctive-tense": [
            "divirtiere",
            "divirtieres",
            "divirtiere",
            "divirtiéremos",
            "divirtiereis",
            "divirtieren"
        ]
    },
    "divertirse": {
        "present-tense": [
            "me divierto",
            "te diviertes",
            "se divierte",
            "nos divertimos",
            "os divertís",
            "se divierten"
        ],
        "future-tense": [
            "me divertiré",
            "te divertirás",
            "se divertirá",
            "nos divertiremos",
            "os divertiréis",
            "se divertirán"
        ],
        "preterite-tense": [
            "me divertí",
            "te divertiste",
            "se divirtió",
            "nos divertimos",
            "os divertisteis",
            "se divirtieron"
        ],
        "present-subjunctive-tense": [
            "me divierta",
            "te diviertas",
            "se divierta",
            "nos divirtamos",
            "os divirtáis",
            "se diviertan"
        ],
        "future-subjunctive-tense": [
            "me divirtiere",
            "te divirtieres",
            "se divirtiere",
            "nos divirtiéremos",
            "os divirtiereis",
            "se divirtieren"
        ]
    },
    "divorciar": {
        "present-tense": [
            "divorcio",
            "divorcias",
            "divorcia",
            "divorciamos",
            "divorciáis",
            "divorcian"
        ],
        "future-tense": [
            "divorciaré",
            "divorciarás",
            "divorciará",
            "divorciaremos",
            "divorciaréis",
            "divorciarán"
        ],
        "preterite-tense": [
            "divorcié",
            "divorciaste",
            "divorció",
            "divorciamos",
            "divorciasteis",
            "divorciaron"
        ],
        "present-subjunctive-tense": [
            "divorcie",
            "divorcies",
            "divorcie",
            "divorciemos",
            "divorciéis",
            "divorcien"
        ],
        "future-subjunctive-tense": [
            "divorciare",
            "divorciares",
            "divorciare",
            "divorciáremos",
            "divorciareis",
            "divorciaren"
        ]
    },
    "divorciarse": {
        "present-tense": [
            "me divorcio",
            "te divorcias",
            "se divorcia",
            "nos divorciamos",
            "os divorciáis",
            "se divorcian"
        ],
        "future-tense": [
            "me divorciaré",
            "te divorciarás",
            "se divorciará",
            "nos divorciaremos",
            "os divorciaréis",
            "se divorciarán"
        ],
        "preterite-tense": [
            "me divorcié",
            "te divorciaste",
            "se divorció",
            "nos divorciamos",
            "divorciasteis",
            "se divorciaron"
        ],
        "present-subjunctive-tense": [
            "me divorcie",
            "te divorcies",
            "se divorcie",
            "nos divorciemos",
            "os divorciéis",
            "se divorcien"
        ],
        "future-subjunctive-tense": [
            "me divorciare",
            "te divorciares",
            "se divorciare",
            "nos divorciáremos",
            "os divorciareis",
            "se divorciaren"
        ]
    },
    "doblar": {
        "present-tense": [
            "doblo",
            "doblas",
            "dobla",
            "doblamos",
            "dobláis",
            "doblan"
        ],
        "future-tense": [
            "doblaré",
            "doblarás",
            "doblará",
            "doblaremos",
            "doblaréis",
            "doblarán"
        ],
        "preterite-tense": [
            "doblé",
            "doblaste",
            "dobló",
            "doblamos",
            "doblasteis",
            "doblaron"
        ],
        "present-subjunctive-tense": [
            "doble",
            "dobles",
            "doble",
            "doblemos",
            "dobléis",
            "doblen"
        ],
        "future-subjunctive-tense": [
            "doblare",
            "doblares",
            "doblare",
            "dobláremos",
            "doblareis",
            "doblaren"
        ]
    },
    "dormir": {
        "present-tense": [
            "duermo",
            "duermes",
            "duerme",
            "dormimos",
            "dormís",
            "duermen"
        ],
        "future-tense": [
            "dormiré",
            "dormirás",
            "dormirá",
            "dormiremos",
            "dormiréis",
            "dormirán"
        ],
        "preterite-tense": [
            "dormí",
            "dormiste",
            "durmió",
            "dormimos",
            "dormisteis",
            "durmieron"
        ],
        "present-subjunctive-tense": [
            "duerma",
            "duermas",
            "duerma",
            "durmamos",
            "durmáis",
            "duerman"
        ],
        "future-subjunctive-tense": [
            "durmiere",
            "durmieres",
            "durmiere",
            "durmiéremos",
            "durmiereis",
            "durmieren"
        ]
    },
    "dormirse": {
        "present-tense": [
            "me duermo",
            "te duermes",
            "se duerme",
            "nos dormimos",
            "os dormís",
            "se duermen"
        ],
        "future-tense": [
            "me dormiré",
            "te dormirás",
            "se dormirá",
            "nos dormiremos",
            "os dormiréis",
            "se dormirán"
        ],
        "preterite-tense": [
            "me dormí",
            "te dormiste",
            "se durmió",
            "nos dormimos",
            "os dormisteis",
            "se durmieron"
        ],
        "present-subjunctive-tense": [
            "me duerma",
            "te duermas",
            "se duerma",
            "nos durmamos",
            "os durmáis",
            "se duerman"
        ],
        "future-subjunctive-tense": [
            "me durmiere",
            "te durmieres",
            "se durmiere",
            "nos durmiéremos",
            "os durmiereis",
            "se durmieren"
        ]
    },
    "duchar": {
        "present-tense": [
            "ducho",
            "duchas",
            "ducha",
            "duchamos",
            "ducháis",
            "duchan"
        ],
        "future-tense": [
            "ducharé",
            "ducharás",
            "duchará",
            "ducharemos",
            "ducharéis",
            "ducharán"
        ],
        "preterite-tense": [
            "duché",
            "duchaste",
            "duchó",
            "duchamos",
            "duchasteis",
            "ducharon"
        ],
        "present-subjunctive-tense": [
            "duche",
            "duches",
            "duche",
            "duchemos",
            "duchéis",
            "duchen"
        ],
        "future-subjunctive-tense": [
            "duchare",
            "duchares",
            "duchare",
            "ducháremos",
            "duchareis",
            "ducharen"
        ]
    },
    "empezar": {
        "present-tense": [
            "empiezo",
            "empiezas",
            "empieza",
            "empezamos",
            "empezáis",
            "empiezan"
        ],
        "future-tense": [
            "empezaré",
            "empezarás",
            "empezará",
            "empezaremos",
            "empezaréis",
            "empezarán"
        ],
        "preterite-tense": [
            "empecé",
            "empezaste",
            "empezó",
            "empezamos",
            "empezasteis",
            "empezaron"
        ],
        "present-subjunctive-tense": [
            "empiece",
            "empieces",
            "empiece",
            "empecemos",
            "empecéis",
            "empiecen"
        ],
        "future-subjunctive-tense": [
            "empezare",
            "empezares",
            "empezare",
            "empezáremos",
            "empezareis",
            "empezaren"
        ]
    },
    "ducharse": {
        "present-tense": [
            "me ducho",
            "te duchas",
            "se ducha",
            "nos duchamos",
            "os ducháis",
            "se duchan"
        ],
        "future-tense": [
            "me ducharé",
            "te ducharás",
            "se duchará",
            "nos ducharemos",
            "os ducharéis",
            "se ducharán"
        ],
        "preterite-tense": [
            "me duché",
            "te duchaste",
            "se duchó",
            "nos duchamos",
            "os duchasteis",
            "se ducharon"
        ],
        "present-subjunctive-tense": [
            "me duche",
            "te duches",
            "se duche",
            "nos duchemos",
            "os duchéis",
            "se duchen"
        ],
        "future-subjunctive-tense": [
            "me duchare",
            "te duchares",
            "se duchare",
            "nos ducháremos",
            "os duchareis",
            "se ducharen"
        ]
    },
    "dudar": {
        "present-tense": [
            "dudo",
            "dudas",
            "duda",
            "dudamos",
            "dudáis",
            "dudan"
        ],
        "future-tense": [
            "dudaré",
            "dudarás",
            "dudará",
            "dudaremos",
            "dudaréis",
            "dudarán"
        ],
        "preterite-tense": [
            "dudé",
            "dudaste",
            "dudó",
            "dudamos",
            "dudasteis",
            "dudaron"
        ],
        "present-subjunctive-tense": [
            "dude",
            "dudes",
            "dude",
            "dudemos",
            "dudéis",
            "duden"
        ],
        "future-subjunctive-tense": [
            "dudare",
            "dudares",
            "dudare",
            "dudáremos",
            "dudareis",
            "dudaren"
        ]
    },
    "durar": {
        "present-tense": [
            "duro",
            "duras",
            "dura",
            "duramos",
            "duráis",
            "duran"
        ],
        "future-tense": [
            "duraré",
            "durarás",
            "durará",
            "duraremos",
            "duraréis",
            "durarán"
        ],
        "preterite-tense": [
            "duré",
            "duraste",
            "duró",
            "duramos",
            "durasteis",
            "duraron"
        ],
        "present-subjunctive-tense": [
            "dure",
            "dures",
            "dure",
            "duremos",
            "duréis",
            "duren"
        ],
        "future-subjunctive-tense": [
            "durare",
            "durares",
            "durare",
            "duráremos",
            "durareis",
            "duraren"
        ]
    },
    "echar": {
        "present-tense": [
            "echo",
            "echas",
            "echa",
            "echamos",
            "echáis",
            "echan"
        ],
        "future-tense": [
            "echaré",
            "echarás",
            "echará",
            "echaremos",
            "echaréis",
            "echarán"
        ],
        "preterite-tense": [
            "eché",
            "echaste",
            "echó",
            "echamos",
            "echasteis",
            "echaron"
        ],
        "present-subjunctive-tense": [
            "eche",
            "eches",
            "eche",
            "echemos",
            "echéis",
            "echen"
        ],
        "future-subjunctive-tense": [
            "echare",
            "echares",
            "echare",
            "echáremos",
            "echareis",
            "echaren"
        ]
    },
    "echarse": {
        "present-tense": [
            "me echo",
            "te echas",
            "se echa",
            "nos echamos",
            "os echáis",
            "se echan"
        ],
        "future-tense": [
            "me echaré",
            "te echarás",
            "se echará",
            "nos echaremos",
            "os echaréis",
            "se echarán"
        ],
        "preterite-tense": [
            "me eché",
            "te echaste",
            "se echó",
            "nos echamos",
            "os echasteis",
            "se echaron"
        ],
        "present-subjunctive-tense": [
            "me eche",
            "te eches",
            "se eche",
            "nos echemos",
            "os echéis",
            "se echen"
        ],
        "future-subjunctive-tense": [
            "me echare",
            "te echares",
            "se echare",
            "nos echáremos",
            "os echareis",
            "se echaren"
        ]
    },
    "educar": {
        "present-tense": [
            "educo",
            "educas",
            "educa",
            "educamos",
            "educáis",
            "educan"
        ],
        "future-tense": [
            "educaré",
            "educarás",
            "educará",
            "educaremos",
            "educaréis",
            "educarán"
        ],
        "preterite-tense": [
            "eduqué",
            "educaste",
            "educó",
            "educamos",
            "educasteis",
            "educaron"
        ],
        "present-subjunctive-tense": [
            "eduque",
            "eduques",
            "eduque",
            "eduquemos",
            "eduquéis",
            "eduquen"
        ],
        "future-subjunctive-tense": [
            "educare",
            "educares",
            "educare",
            "educáremos",
            "educareis",
            "educaren"
        ]
    },
    "efectuar": {
        "present-tense": [
            "efectúo",
            "efectúas",
            "efectúa",
            "efectuamos",
            "efectuáis",
            "efectúan"
        ],
        "future-tense": [
            "efectuaré",
            "efectuarás",
            "efectuará",
            "efectuaremos",
            "efectuaréis",
            "efectuarán"
        ],
        "preterite-tense": [
            "efectué",
            "efectuaste",
            "efectuó",
            "efectuamos",
            "efectuasteis",
            "efectuaron"
        ],
        "present-subjunctive-tense": [
            "efectúe",
            "efectúes",
            "efectúe",
            "efectuemos",
            "efectuéis",
            "efectúen"
        ],
        "future-subjunctive-tense": [
            "efectuare",
            "efectuares",
            "efectuare",
            "efectuáremos",
            "efectuareis",
            "efectuaren"
        ]
    },
    "ejercer": {
        "present-tense": [
            "ejerzo",
            "ejerces",
            "ejerce",
            "ejercemos",
            "ejercéis",
            "ejercen"
        ],
        "future-tense": [
            "ejerceré",
            "ejercerás",
            "ejercerá",
            "ejerceremos",
            "ejerceréis",
            "ejercerán"
        ],
        "preterite-tense": [
            "ejercí",
            "ejerciste",
            "ejerció",
            "ejercimos",
            "ejercisteis",
            "ejercieron"
        ],
        "present-subjunctive-tense": [
            "ejerza",
            "ejerzas",
            "ejerza",
            "ejerzamos",
            "ejerzáis",
            "ejerzan"
        ],
        "future-subjunctive-tense": [
            "ejerciere",
            "ejercieres",
            "ejerciere",
            "ejerciéremos",
            "ejerciereis",
            "ejercieren"
        ]
    },
    "elegir": {
        "present-tense": [
            "elijo",
            "eliges",
            "elige",
            "elegimos",
            "elegís",
            "eligen"
        ],
        "future-tense": [
            "elegiré",
            "elegirás",
            "elegirá",
            "elegiremos",
            "elegiréis",
            "elegirán"
        ],
        "preterite-tense": [
            "elegí",
            "elegiste",
            "eligió",
            "elegimos",
            "elegisteis",
            "eligieron"
        ],
        "present-subjunctive-tense": [
            "elija",
            "elijas",
            "elija",
            "elijamos",
            "elijáis",
            "elijan"
        ],
        "future-subjunctive-tense": [
            "eligiere",
            "eligieres",
            "eligiere",
            "eligiéremos",
            "eligiereis",
            "eligieren"
        ]
    },
    "eliminar": {
        "present-tense": [
            "elimino",
            "eliminas",
            "elimina",
            "eliminamos",
            "elimináis",
            "eliminan"
        ],
        "future-tense": [
            "eliminaré",
            "eliminarás",
            "eliminará",
            "eliminaremos",
            "eliminaréis",
            "eliminarán"
        ],
        "preterite-tense": [
            "eliminé",
            "eliminaste",
            "eliminó",
            "eliminamos",
            "eliminasteis",
            "eliminaron"
        ],
        "present-subjunctive-tense": [
            "elimine",
            "elimines",
            "elimine",
            "eliminemos",
            "eliminéis",
            "eliminen"
        ],
        "future-subjunctive-tense": [
            "eliminare",
            "eliminares",
            "eliminare",
            "elimináremos",
            "eliminareis",
            "eliminaren"
        ]
    },
    "emborrachar": {
        "present-tense": [
            "emborracho",
            "emborrachas",
            "emborracha",
            "emborrachamos",
            "emborracháis",
            "emborrachan"
        ],
        "future-tense": [
            "emborracharé",
            "emborracharás",
            "emborrachará",
            "emborracharemos",
            "emborracharéis",
            "emborracharán"
        ],
        "preterite-tense": [
            "emborraché",
            "emborrachaste",
            "emborrachó",
            "emborrachamos",
            "emborrachasteis",
            "emborracharon"
        ],
        "present-subjunctive-tense": [
            "emborrache",
            "emborraches",
            "emborrache",
            "emborrachemos",
            "emborrachéis",
            "emborrachen"
        ],
        "future-subjunctive-tense": [
            "emborrachare",
            "emborrachares",
            "emborrachare",
            "emborracháremos",
            "emborrachareis",
            "emborracharen"
        ]
    },
    "emborracharse": {
        "present-tense": [
            "me emborracho",
            "te emborrachas",
            "se emborracha",
            "nos emborrachamos",
            "os emborracháis",
            "se emborrachan"
        ],
        "future-tense": [
            "me emborracharé",
            "te emborracharás",
            "se emborrachará",
            "nos emborracharemos",
            "os emborracharéis",
            "se emborracharán"
        ],
        "preterite-tense": [
            "me emborraché",
            "te emborrachaste",
            "se emborrachó",
            "nos emborrachamos",
            "os emborrachasteis",
            "se emborracharon"
        ],
        "present-subjunctive-tense": [
            "me emborrache",
            "te emborraches",
            "se emborrache",
            "nos emborrachemos",
            "os emborrachéis",
            "se emborrachen"
        ],
        "future-subjunctive-tense": [
            "me emborrachare",
            "te emborrachares",
            "se emborrachare",
            "nos emborracháremos",
            "os emborrachareis",
            "se emborracharen"
        ]
    },
    "emigrar": {
        "present-tense": [
            "emigro",
            "emigras",
            "emigra",
            "emigramos",
            "emigráis",
            "emigran"
        ],
        "future-tense": [
            "emigraré",
            "emigrarás",
            "emigrará",
            "emigraremos",
            "emigraréis",
            "emigrarán"
        ],
        "preterite-tense": [
            "emigré",
            "emigraste",
            "emigró",
            "emigramos",
            "emigrasteis",
            "emigraron"
        ],
        "present-subjunctive-tense": [
            "emigre",
            "emigres",
            "emigre",
            "emigremos",
            "emigréis",
            "emigren"
        ],
        "future-subjunctive-tense": [
            "emigrare",
            "emigrares",
            "emigrare",
            "emigráremos",
            "emigrareis",
            "emigraren"
        ]
    },
    "emplear": {
        "present-tense": [
            "empleo",
            "empleas",
            "emplea",
            "empleamos",
            "empleáis",
            "emplean"
        ],
        "future-tense": [
            "emplearé",
            "emplearás",
            "empleará",
            "emplearemos",
            "emplearéis",
            "emplearán"
        ],
        "preterite-tense": [
            "empleé",
            "empleaste",
            "empleó",
            "empleamos",
            "empleasteis",
            "emplearon"
        ],
        "present-subjunctive-tense": [
            "emplee",
            "emplees",
            "emplee",
            "empleemos",
            "empleéis",
            "empleen"
        ],
        "future-subjunctive-tense": [
            "empleare",
            "empleares",
            "empleare",
            "empleáremos",
            "empleareis",
            "emplearen"
        ]
    },
    "enamorar": {
        "present-tense": [
            "enamoro",
            "enamoras",
            "enamora",
            "enamoramos",
            "enamoráis",
            "enamoran"
        ],
        "future-tense": [
            "enamoraré",
            "enamorarás",
            "enamorará",
            "enamoraremos",
            "enamoraréis",
            "enamorarán"
        ],
        "preterite-tense": [
            "enamoré",
            "enamoraste",
            "enamoró",
            "enamoramos",
            "enamorasteis",
            "enamoraron"
        ],
        "present-subjunctive-tense": [
            "enamore",
            "enamores",
            "enamore",
            "enamoremos",
            "enamoréis",
            "enamoren"
        ],
        "future-subjunctive-tense": [
            "enamorare",
            "enamorares",
            "enamorare",
            "enamoráremos",
            "enamorareis",
            "enamoraren"
        ]
    },
    "enamorarse": {
        "present-tense": [
            "me enamoro",
            "te enamoras",
            "se enamora",
            "nos enamoramos",
            "os enamoráis",
            "se enamoran"
        ],
        "future-tense": [
            "me enamoraré",
            "te enamorarás",
            "se enamorará",
            "nos enamoraremos",
            "os enamoraréis",
            "se enamorarán"
        ],
        "preterite-tense": [
            "me enamoré",
            "te enamoraste",
            "se enamoró",
            "nos enamoramos",
            "os enamorasteis",
            "se enamoraron"
        ],
        "present-subjunctive-tense": [
            "me enamore",
            "te enamores",
            "se enamore",
            "nos enamoremos",
            "os enamoréis",
            "se enamoren"
        ],
        "future-subjunctive-tense": [
            "me enamorare",
            "te enamorares",
            "se enamorare",
            "nos enamoráremos",
            "os enamorareis",
            "se enamoraren"
        ]
    },
    "encantar": {
        "present-tense": [
            "encanto",
            "encantas",
            "encanta",
            "encantamos",
            "encantáis",
            "encantan"
        ],
        "future-tense": [
            "encantaré",
            "encantarás",
            "encantará",
            "encantaremos",
            "encantaréis",
            "encantarán"
        ],
        "preterite-tense": [
            "encanté",
            "encantaste",
            "encantó",
            "encantamos",
            "encantasteis",
            "encantaron"
        ],
        "present-subjunctive-tense": [
            "encante",
            "encantes",
            "encante",
            "encantemos",
            "encantéis",
            "encanten"
        ],
        "future-subjunctive-tense": [
            "encantare",
            "encantares",
            "encantare",
            "encantáremos",
            "encantareis",
            "encantaren"
        ]
    },
    "encender": {
        "present-tense": [
            "enciendo",
            "enciendes",
            "enciende",
            "encendemos",
            "encendéis",
            "encienden"
        ],
        "future-tense": [
            "encenderé",
            "encenderás",
            "encenderá",
            "encenderemos",
            "encenderéis",
            "encenderán"
        ],
        "preterite-tense": [
            "encendí",
            "encendiste",
            "encendió",
            "encendimos",
            "encendisteis",
            "encendieron"
        ],
        "present-subjunctive-tense": [
            "encienda",
            "enciendas",
            "encienda",
            "encendamos",
            "encendáis",
            "enciendan"
        ],
        "future-subjunctive-tense": [
            "encendiere",
            "encendieres",
            "encendiere",
            "encendiéremos",
            "encendiereis",
            "encendieren"
        ]
    },
    "encontrar": {
        "present-tense": [
            "encuentro",
            "encuentras",
            "encuentra",
            "encontramos",
            "encontráis",
            "encuentran"
        ],
        "future-tense": [
            "encontraré",
            "encontrarás",
            "encontrará",
            "encontraremos",
            "encontraréis",
            "encontrarán"
        ],
        "preterite-tense": [
            "encontré",
            "encontraste",
            "encontró",
            "encontramos",
            "encontrasteis",
            "encontraron"
        ],
        "present-subjunctive-tense": [
            "encuentre",
            "encuentres",
            "encuentre",
            "encontremos",
            "encontréis",
            "encuentren"
        ],
        "future-subjunctive-tense": [
            "encontrare",
            "encontrares",
            "encontrare",
            "encontráremos",
            "encontrareis",
            "encontraren"
        ]
    },
    "enfadar": {
        "present-tense": [
            "enfado",
            "enfadas",
            "enfada",
            "enfadamos",
            "enfadáis",
            "enfadan"
        ],
        "future-tense": [
            "enfadaré",
            "enfadarás",
            "enfadará",
            "enfadaremos",
            "enfadaréis",
            "enfadarán"
        ],
        "preterite-tense": [
            "enfadé",
            "enfadaste",
            "enfadó",
            "enfadamos",
            "enfadasteis",
            "enfadaron"
        ],
        "present-subjunctive-tense": [
            "enfade",
            "enfades",
            "enfade",
            "enfademos",
            "enfadéis",
            "enfaden"
        ],
        "future-subjunctive-tense": [
            "enfadare",
            "enfadares",
            "enfadare",
            "enfadáremos",
            "enfadareis",
            "enfadaren"
        ]
    },
    "enfadarse": {
        "present-tense": [
            "me enfado",
            "te enfadas",
            "se enfada",
            "nos enfadamos",
            "os enfadáis",
            "se enfadan"
        ],
        "future-tense": [
            "me enfadaré",
            "te enfadarás",
            "se enfadará",
            "nos enfadaremos",
            "os enfadaréis",
            "se enfadarán"
        ],
        "preterite-tense": [
            "me enfadé",
            "te enfadaste",
            "se enfadó",
            "nos enfadamos",
            "os enfadasteis",
            "se enfadaron"
        ],
        "present-subjunctive-tense": [
            "me enfade",
            "te enfades",
            "se enfade",
            "nos enfademos",
            "os enfadéis",
            "se enfaden"
        ],
        "future-subjunctive-tense": [
            "me enfadare",
            "te enfadares",
            "se enfadare",
            "nos enfadáremos",
            "os enfadareis",
            "se enfadaren"
        ]
    },
    "enfermar": {
        "present-tense": [
            "enfermo",
            "enfermas",
            "enferma",
            "enfermamos",
            "enfermáis",
            "enferman"
        ],
        "future-tense": [
            "enfermaré",
            "enfermarás",
            "enfermará",
            "enfermaremos",
            "enfermaréis",
            "enfermarán"
        ],
        "preterite-tense": [
            "enfermé",
            "enfermaste",
            "enfermó",
            "enfermamos",
            "enfermasteis",
            "enfermaron"
        ],
        "present-subjunctive-tense": [
            "enferme",
            "enfermes",
            "enferme",
            "enfermemos",
            "enferméis",
            "enfermen"
        ],
        "future-subjunctive-tense": [
            "enfermare",
            "enfermares",
            "enfermare",
            "enfermáremos",
            "enfermareis",
            "enfermaren"
        ]
    },
    "enfermarse": {
        "present-tense": [
            "me enfermo",
            "te enfermas",
            "se enferma",
            "nos enfermamos",
            "os enfermáis",
            "se enferman"
        ],
        "future-tense": [
            "me enfermaré",
            "te enfermarás",
            "se enfermará",
            "nos enfermaremos",
            "os enfermaréis",
            "se enfermarán"
        ],
        "preterite-tense": [
            "me enfermé",
            "te enfermaste",
            "se enfermó",
            "nos enfermamos",
            "os enfermasteis",
            "se enfermaron"
        ],
        "present-subjunctive-tense": [
            "me enferme",
            "te enfermes",
            "se enferme",
            "nos enfermemos",
            "os enferméis",
            "se enfermen"
        ],
        "future-subjunctive-tense": [
            "me enfermare",
            "te enfermares",
            "se enfermare",
            "nos enfermáremos",
            "os enfermareis",
            "se enfermaren"
        ]
    },
    "entregar": {
        "future-tense": [
            "entregaré",
            "entregarás",
            "entregará",
            "entregaremos",
            "entregaréis",
            "entregarán"
        ],
        "present-tense": [
            "entrego",
            "entregas",
            "entrega",
            "entregamos",
            "entregáis",
            "entregan"
        ],
        "preterite-tense": [
            "entregué",
            "entregaste",
            "entregó",
            "entregamos",
            "entregasteis",
            "entregaron"
        ],
        "present-subjunctive-tense": [
            "entregue",
            "entregues",
            "entregue",
            "entreguemos",
            "entreguéis",
            "entreguen"
        ],
        "future-subjunctive-tense": [
            "entregare",
            "entregares",
            "entregare",
            "entregáremos",
            "entregareis",
            "entregaren"
        ]
    },
    "enflaquecer": {
        "present-tense": [
            "enflaquezco",
            "enflaqueces",
            "enflaquece",
            "enflaquecemos",
            "enflaquecéis",
            "enflaquecen"
        ],
        "future-tense": [
            "enflaqueceré",
            "enflaquecerás",
            "enflaquecerá",
            "enflaqueceremos",
            "enflaqueceréis",
            "enflaquecerán"
        ],
        "preterite-tense": [
            "enflaquecí",
            "enflaqueciste",
            "enflaqueció",
            "enflaquecimos",
            "enflaquecisteis",
            "enflaquecieron"
        ],
        "present-subjunctive-tense": [
            "enflaquezca",
            "enflaquezcas",
            "enflaquezca",
            "enflaquezcamos",
            "enflaquezcáis",
            "enflaquezcan"
        ],
        "future-subjunctive-tense": [
            "enflaqueciere",
            "enflaquecieres",
            "enflaqueciere",
            "enflaqueciéremos",
            "enflaqueciereis",
            "enflaquecieren"
        ]
    },
    "enflaquecerse": {
        "present-tense": [
            "me enflaquezco",
            "te enflaqueces",
            "se enflaquece",
            "nos enflaquecemos",
            "os enflaquecéis",
            "se enflaquecen"
        ],
        "future-tense": [
            "me enflaqueceré",
            "te enflaquecerás",
            "se enflaquecerá",
            "nos enflaqueceremos",
            "os enflaqueceréis",
            "se enflaquecerán"
        ],
        "preterite-tense": [
            "me enflaquecí",
            "te enflaqueciste",
            "se enflaqueció",
            "nos enflaquecimos",
            "os enflaquecisteis",
            "se enflaquecieron"
        ],
        "present-subjunctive-tense": [
            "me enflaquezca",
            "te enflaquezcas",
            "se enflaquezca",
            "nos enflaquezcamos",
            "os enflaquezcáis",
            "se enflaquezcan"
        ],
        "future-subjunctive-tense": [
            "me enflaqueciere",
            "te enflaquecieres",
            "se enflaqueciere",
            "nos enflaqueciéremos",
            "os enflaqueciereis",
            "se enflaquecieren"
        ]
    },
    "engañar": {
        "present-tense": [
            "engaño",
            "engañas",
            "engaña",
            "engañamos",
            "engañáis",
            "engañan"
        ],
        "future-tense": [
            "engañaré",
            "engañarás",
            "engañará",
            "engañaremos",
            "engañaréis",
            "engañarán"
        ],
        "preterite-tense": [
            "engañé",
            "engañaste",
            "engañó",
            "engañamos",
            "engañasteis",
            "engañaron"
        ],
        "present-subjunctive-tense": [
            "engañe",
            "engañes",
            "engañe",
            "engañemos",
            "engañéis",
            "engañen"
        ],
        "future-subjunctive-tense": [
            "engañare",
            "engañares",
            "engañare",
            "engañáremos",
            "engañareis",
            "engañaren"
        ]
    },
    "enojar": {
        "present-tense": [
            "enojo",
            "enojas",
            "enoja",
            "enojamos",
            "enojáis",
            "enojan"
        ],
        "future-tense": [
            "enojaré",
            "enojarás",
            "enojará",
            "enojaremos",
            "enojaréis",
            "enojarán"
        ],
        "preterite-tense": [
            "enojé",
            "enojaste",
            "enojó",
            "enojamos",
            "enojasteis",
            "enojaron"
        ],
        "present-subjunctive-tense": [
            "enoje",
            "enojes",
            "enoje",
            "enojemos",
            "enojéis",
            "enojen"
        ],
        "future-subjunctive-tense": [
            "enojare",
            "enojares",
            "enojare",
            "enojáremos",
            "enojareis",
            "enojaren"
        ]
    },
    "enojarse": {
        "present-tense": [
            "me enojo",
            "te enojas",
            "se enoja",
            "nos enojamos",
            "os enojáis",
            "se enojan"
        ],
        "future-tense": [
            "me enojaré",
            "te enojarás",
            "se enojará",
            "nos enojaremos",
            "os enojaréis",
            "se enojarán"
        ],
        "preterite-tense": [
            "me enojé",
            "te enojaste",
            "se enojó",
            "nos enojamos",
            "os enojasteis",
            "se enojaron"
        ],
        "present-subjunctive-tense": [
            "me enoje",
            "te enojes",
            "se enoje",
            "nos enojemos",
            "os enojéis",
            "se enojen"
        ],
        "future-subjunctive-tense": [
            "me enojare",
            "te enojares",
            "se enojare",
            "nos enojáremos",
            "os enojareis",
            "se enojaren"
        ]
    },
    "enriquecer": {
        "present-tense": [
            "enriquezco",
            "enriqueces",
            "enriquece",
            "enriquecemos",
            "enriquecéis",
            "enriquecen"
        ],
        "future-tense": [
            "enriqueceré",
            "enriquecerás",
            "enriquecerá",
            "enriqueceremos",
            "enriqueceréis",
            "enriquecerán"
        ],
        "preterite-tense": [
            "enriquecí",
            "enriqueciste",
            "enriqueció",
            "enriquecimos",
            "enriquecisteis",
            "enriquecieron"
        ],
        "present-subjunctive-tense": [
            "enriquezca",
            "enriquezcas",
            "enriquezca",
            "enriquezcamos",
            "enriquezcáis",
            "enriquezcan"
        ],
        "future-subjunctive-tense": [
            "enriqueciere",
            "enriquecieres",
            "enriqueciere",
            "enriqueciéremos",
            "enriqueciereis",
            "enriquecieren"
        ]
    },
    "enriquecerse": {
        "present-tense": [
            "me enriquezco",
            "te enriqueces",
            "se enriquece",
            "nos enriquecemos",
            "os enriquecéis",
            "se enriquecen"
        ],
        "future-tense": [
            "me enriqueceré",
            "te enriquecerás",
            "se enriquecerá",
            "nos enriqueceremos",
            "os enriqueceréis",
            "se enriquecerán"
        ],
        "preterite-tense": [
            "me enriquecí",
            "te enriqueciste",
            "se enriqueció",
            "nos enriquecimos",
            "os enriquecisteis",
            "se enriquecieron"
        ],
        "present-subjunctive-tense": [
            "me enriquezca",
            "te enriquezcas",
            "se enriquezca",
            "nos enriquezcamos",
            "os enriquezcáis",
            "se enriquezcan"
        ],
        "future-subjunctive-tense": [
            "me enriqueciere",
            "te enriquecieres",
            "se enriqueciere",
            "nos enriqueciéremos",
            "os enriqueciereis",
            "se enriquecieren"
        ]
    },
    "entrevistar": {
        "present-subjunctive-tense": [
            "entreviste",
            "entrevistes",
            "entreviste",
            "entrevistemos",
            "entrevistéis",
            "entrevisten"
        ],
        "present-tense": [
            "entrevisto",
            "entrevistas",
            "entrevista",
            "entrevistamos",
            "entrevistáis",
            "entrevistan"
        ],
        "future-tense": [
            "entrevistaré",
            "entrevistarás",
            "entrevistará",
            "entrevistaremos",
            "entrevistaréis",
            "entrevistarán"
        ],
        "preterite-tense": [
            "entrevisté",
            "entrevistaste",
            "entrevistó",
            "entrevistamos",
            "entrevistasteis",
            "entrevistaron"
        ],
        "future-subjunctive-tense": [
            "entrevistare",
            "entrevistares",
            "entrevistare",
            "entrevistáremos",
            "entrevistareis",
            "entrevistaren"
        ]
    },
    "enseñar": {
        "present-tense": [
            "enseño",
            "enseñas",
            "enseña",
            "enseñamos",
            "enseñáis",
            "enseñan"
        ],
        "future-tense": [
            "enseñaré",
            "enseñarás",
            "enseñará",
            "enseñaremos",
            "enseñaréis",
            "enseñarán"
        ],
        "preterite-tense": [
            "enseñé",
            "enseñaste",
            "enseñó",
            "enseñamos",
            "enseñasteis",
            "enseñaron"
        ],
        "present-subjunctive-tense": [
            "enseñe",
            "enseñes",
            "enseñe",
            "enseñemos",
            "enseñéis",
            "enseñen"
        ],
        "future-subjunctive-tense": [
            "enseñare",
            "enseñares",
            "enseñare",
            "enseñáremos",
            "enseñareis",
            "enseñaren"
        ]
    },
    "ensuciar": {
        "present-tense": [
            "ensucio",
            "ensucias",
            "ensucia",
            "ensuciamos",
            "ensuciáis",
            "ensucian"
        ],
        "future-tense": [
            "ensuciaré",
            "ensuciarás",
            "ensuciará",
            "ensuciaremos",
            "ensuciaréis",
            "ensuciarán"
        ],
        "preterite-tense": [
            "ensucié",
            "ensuciaste",
            "ensució",
            "ensuciamos",
            "ensuciasteis",
            "ensuciaron"
        ],
        "present-subjunctive-tense": [
            "ensucie",
            "ensucies",
            "ensucie",
            "ensuciemos",
            "ensuciéis",
            "ensucien"
        ],
        "future-subjunctive-tense": [
            "ensuciare",
            "ensuciares",
            "ensuciare",
            "ensuciáremos",
            "ensuciareis",
            "ensuciaren"
        ]
    },
    "entender": {
        "present-tense": [
            "entiendo",
            "entiendes",
            "entiende",
            "entendemos",
            "entendéis",
            "entienden"
        ],
        "future-tense": [
            "entenderé",
            "entenderás",
            "entenderá",
            "entenderemos",
            "entenderéis",
            "entenderán"
        ],
        "preterite-tense": [
            "entendí",
            "entendiste",
            "entendió",
            "entendimos",
            "entendisteis",
            "entendieron"
        ],
        "present-subjunctive-tense": [
            "entienda",
            "entiendas",
            "entienda",
            "entendamos",
            "entendáis",
            "entiendan"
        ],
        "future-subjunctive-tense": [
            "entendiere",
            "entendieres",
            "entendiere",
            "entendiéremos",
            "entendiereis",
            "entendieren"
        ]
    },
    "enterarse": {
        "present-tense": [
            "me entero",
            "te enteras",
            "se entera",
            "nos enteramos",
            "os enteráis",
            "se enteran"
        ],
        "future-tense": [
            "me enteraré",
            "te enterarás",
            "se enterará",
            "nos enteraremos",
            "os enteraréis",
            "se enterarán"
        ],
        "preterite-tense": [
            "me enteré",
            "te enteraste",
            "se enteró",
            "nos enteramos",
            "os enterasteis",
            "se enteraron"
        ],
        "present-subjunctive-tense": [
            "me entere",
            "te enteres",
            "se entere",
            "nos enteremos",
            "os enteréis",
            "se enteren"
        ],
        "future-subjunctive-tense": [
            "me enterare",
            "te enterares",
            "se enterare",
            "nos enteráremos",
            "os enterareis",
            "se enteraren"
        ]
    },
    "entrar": {
        "present-tense": [
            "entro",
            "entras",
            "entra",
            "entramos",
            "entráis",
            "entran"
        ],
        "future-tense": [
            "entraré",
            "entrarás",
            "entrará",
            "entraremos",
            "entraréis",
            "entrarán"
        ],
        "preterite-tense": [
            "entré",
            "entraste",
            "entró",
            "entramos",
            "entrasteis",
            "entraron"
        ],
        "present-subjunctive-tense": [
            "entre",
            "entres",
            "entre",
            "entremos",
            "entréis",
            "entren"
        ],
        "future-subjunctive-tense": [
            "entrare",
            "entrares",
            "entrare",
            "entráremos",
            "entrareis",
            "entraren"
        ]
    },
    "entretener": {
        "present-tense": [
            "entretengo",
            "entretienes",
            "entretiene",
            "entretenemos",
            "entretenéis",
            "entretienen"
        ],
        "future-tense": [
            "entretendré",
            "entretendrás",
            "entretendrá",
            "entretendremos",
            "entretendréis",
            "entretendrán"
        ],
        "preterite-tense": [
            "entretuve",
            "entretuviste",
            "entretuvo",
            "entretuvimos",
            "entretuvisteis",
            "entretuvieron"
        ],
        "present-subjunctive-tense": [
            "entretenga",
            "entretengas",
            "entretenga",
            "entretengamos",
            "entretengáis",
            "entretengan"
        ],
        "future-subjunctive-tense": [
            "entretuviere",
            "entretuvieres",
            "entretuviere",
            "entretuviéremos",
            "entretuviereis",
            "entretuvieren"
        ]
    },
    "entusiasmar": {
        "present-tense": [
            "entusiasmo",
            "entusiasmas",
            "entusiasma",
            "entusiasmamos",
            "entusiasmáis",
            "entusiasman"
        ],
        "future-tense": [
            "entusiasmaré",
            "entusiasmarás",
            "entusiasmará",
            "entusiasmaremos",
            "entusiasmaréis",
            "entusiasmarán"
        ],
        "preterite-tense": [
            "entusiasmé",
            "entusiasmaste",
            "entusiasmó",
            "entusiasmamos",
            "entusiasmasteis",
            "entusiasmaron"
        ],
        "present-subjunctive-tense": [
            "entusiasme",
            "entusiasmes",
            "entusiasme",
            "entusiasmemos",
            "entusiasméis",
            "entusiasmen"
        ],
        "future-subjunctive-tense": [
            "entusiasmare",
            "entusiasmares",
            "entusiasmare",
            "entusiasmáremos",
            "entusiasmareis",
            "entusiasmaren"
        ]
    },
    "entusiasmarse": {
        "present-tense": [
            "me entusiasmo",
            "te entusiasmas",
            "se entusiasma",
            "nos entusiasmamos",
            "os entusiasmáis",
            "se entusiasman"
        ],
        "future-tense": [
            "me entusiasmaré",
            "te entusiasmarás",
            "se entusiasmará",
            "nos entusiasmaremos",
            "os entusiasmaréis",
            "se entusiasmarán"
        ],
        "preterite-tense": [
            "me entusiasmé",
            "te entusiasmaste",
            "se entusiasmó",
            "nos entusiasmamos",
            "os entusiasmasteis",
            "se entusiasmaron"
        ],
        "present-subjunctive-tense": [
            "me entusiasme",
            "te entusiasmes",
            "se entusiasme",
            "nos entusiasmemos",
            "os entusiasméis",
            "se entusiasmen"
        ],
        "future-subjunctive-tense": [
            "me entusiasmare",
            "te entusiasmares",
            "se entusiasmare",
            "nos entusiasmáremos",
            "os entusiasmareis",
            "se entusiasmaren"
        ]
    },
    "envejecer": {
        "present-tense": [
            "envejezco",
            "envejeces",
            "envejece",
            "envejecemos",
            "envejecéis",
            "envejecen"
        ],
        "future-tense": [
            "envejeceré",
            "envejecerás",
            "envejecerá",
            "envejeceremos",
            "envejeceréis",
            "envejecerán"
        ],
        "preterite-tense": [
            "envejecí",
            "envejeciste",
            "envejeció",
            "envejecimos",
            "envejecisteis",
            "envejecieron"
        ],
        "present-subjunctive-tense": [
            "envejezca",
            "envejezcas",
            "envejezca",
            "envejezcamos",
            "envejezcáis",
            "envejezcan"
        ],
        "future-subjunctive-tense": [
            "envejeciere",
            "envejecieres",
            "envejeciere",
            "envejeciéremos",
            "envejeciereis",
            "envejecieren"
        ]
    },
    "envejecerse": {
        "present-tense": [
            "me envejezco",
            "te envejeces",
            "se envejece",
            "nos envejecemos",
            "os envejecéis",
            "se envejecen"
        ],
        "future-tense": [
            "me envejeceré",
            "te envejecerás",
            "se envejecerá",
            "nos envejeceremos",
            "os envejeceréis",
            "se envejecerán"
        ],
        "preterite-tense": [
            "me envejecí",
            "te envejeciste",
            "se envejeció",
            "nos envejecimos",
            "os envejecisteis",
            "se envejecieron"
        ],
        "present-subjunctive-tense": [
            "me envejezca",
            "te envejezcas",
            "se envejezca",
            "nos envejezcamos",
            "os envejezcáis",
            "se envejezcan"
        ],
        "future-subjunctive-tense": [
            "me envejeciere",
            "te envejecieres",
            "se envejeciere",
            "nos envejeciéremos",
            "os envejeciereis",
            "se envejecieren"
        ]
    },
    "enviar": {
        "present-tense": [
            "envío",
            "envías",
            "envía",
            "enviamos",
            "enviáis",
            "envían"
        ],
        "future-tense": [
            "enviaré",
            "enviarás",
            "enviará",
            "enviaremos",
            "enviaréis",
            "enviarán"
        ],
        "preterite-tense": [
            "envié",
            "enviaste",
            "envió",
            "enviamos",
            "enviasteis",
            "enviaron"
        ],
        "present-subjunctive-tense": [
            "envíe",
            "envíes",
            "envíe",
            "enviemos",
            "enviéis",
            "envíen"
        ],
        "future-subjunctive-tense": [
            "enviare",
            "enviares",
            "enviare",
            "enviáremos",
            "enviareis",
            "enviaren"
        ]
    },
    "gritar": {
        "future-subjunctive-tense": [
            "gritare",
            "gritares",
            "gritare",
            "gritáremos",
            "gritareis",
            "gritaren"
        ],
        "present-tense": [
            "grito",
            "gritas",
            "grita",
            "gritamos",
            "gritáis",
            "gritan"
        ],
        "future-tense": [
            "gritaré",
            "gritarás",
            "gritará",
            "gritaremos",
            "gritaréis",
            "gritarán"
        ],
        "preterite-tense": [
            "grité",
            "gritaste",
            "gritó",
            "gritamos",
            "gritasteis",
            "gritaron"
        ],
        "present-subjunctive-tense": [
            "grite",
            "grites",
            "grite",
            "gritemos",
            "gritéis",
            "griten"
        ]
    },
    "equivocar": {
        "present-tense": [
            "equivoco",
            "equivocas",
            "equivoca",
            "equivocamos",
            "equivocáis",
            "equivocan"
        ],
        "future-tense": [
            "equivocaré",
            "equivocarás",
            "equivocará",
            "equivocaremos",
            "equivocaréis",
            "equivocarán"
        ],
        "preterite-tense": [
            "equivoqué",
            "equivocaste",
            "equivocó",
            "equivocamos",
            "equivocasteis",
            "equivocaron"
        ],
        "present-subjunctive-tense": [
            "equivoque",
            "equivoques",
            "equivoque",
            "equivoquemos",
            "equivoquéis",
            "equivoquen"
        ],
        "future-subjunctive-tense": [
            "equivocare",
            "equivocares",
            "equivocare",
            "equivocáremos",
            "equivocareis",
            "equivocaren"
        ]
    },
    "equivocarse": {
        "present-tense": [
            "me equivoco",
            "te equivocas",
            "se equivoca",
            "nos equivocamos",
            "os equivocáis",
            "se equivocan"
        ],
        "future-tense": [
            "me equivocaré",
            "te equivocarás",
            "se equivocará",
            "nos equivocaremos",
            "os equivocaréis",
            "se equivocarán"
        ],
        "preterite-tense": [
            "me equivoqué",
            "te equivocaste",
            "se equivocó",
            "nos equivocamos",
            "equivocasteis",
            "se equivocaron"
        ],
        "present-subjunctive-tense": [
            "me equivoque",
            "te equivoques",
            "se equivoque",
            "nos equivoquemos",
            "os equivoquéis",
            "se equivoquen"
        ],
        "future-subjunctive-tense": [
            "me equivocare",
            "te equivocares",
            "se equivocare",
            "nos equivocáremos",
            "os equivocareis",
            "se equivocaren"
        ]
    },
    "esconder": {
        "future-subjunctive-tense": [
            "escondiere",
            "escondieres",
            "escondiere",
            "escondiéremos",
            "escondiereis",
            "escondieren"
        ],
        "present-tense": [
            "escondo",
            "escondes",
            "esconde",
            "escondemos",
            "escondéis",
            "esconden"
        ],
        "future-tense": [
            "esconderé",
            "esconderás",
            "esconderá",
            "esconderemos",
            "esconderéis",
            "esconderán"
        ],
        "preterite-tense": [
            "escondí",
            "escondiste",
            "escondió",
            "escondimos",
            "escondisteis",
            "escondieron"
        ],
        "present-subjunctive-tense": [
            "esconda",
            "escondas",
            "esconda",
            "escondamos",
            "escondáis",
            "escondan"
        ]
    },
    "errar": {
        "present-tense": [
            "yerro",
            "yerras",
            "yerra",
            "erramos",
            "erráis",
            "yerran"
        ],
        "future-tense": [
            "erraré",
            "errarás",
            "errará",
            "erraremos",
            "erraréis",
            "errarán"
        ],
        "preterite-tense": [
            "erré",
            "erraste",
            "erró",
            "erramos",
            "errasteis",
            "erraron"
        ],
        "present-subjunctive-tense": [
            "yerre",
            "yerres",
            "yerre",
            "erremos",
            "erréis",
            "yerren"
        ],
        "future-subjunctive-tense": [
            "errare",
            "errares",
            "errare",
            "erráremos",
            "errareis",
            "erraren"
        ]
    },
    "escoger": {
        "present-tense": [
            "escojo",
            "escoges",
            "escoge",
            "escogemos",
            "escogéis",
            "escogen"
        ],
        "future-tense": [
            "escogeré",
            "escogerás",
            "escogerá",
            "escogeremos",
            "escogeréis",
            "escogerán"
        ],
        "preterite-tense": [
            "escogí",
            "escogiste",
            "escogió",
            "escogimos",
            "escogisteis",
            "escogieron"
        ],
        "present-subjunctive-tense": [
            "escoja",
            "escojas",
            "escoja",
            "escojamos",
            "escojáis",
            "escojan"
        ],
        "future-subjunctive-tense": [
            "escogiere",
            "escogieres",
            "escogiere",
            "escogiéremos",
            "escogiereis",
            "escogieren"
        ]
    },
    "esconderse": {
        "present-tense": [
            "me escondo",
            "te escondes",
            "se esconde",
            "nos escondemos",
            "os escondéis",
            "se esconden"
        ],
        "future-tense": [
            "me esconderé",
            "te esconderás",
            "se esconderá",
            "nos esconderemos",
            "os esconderéis",
            "se esconderán"
        ],
        "preterite-tense": [
            "me escondí",
            "te escondiste",
            "se escondió",
            "nos escondimos",
            "os escondisteis",
            "se escondieron"
        ],
        "present-subjunctive-tense": [
            "me esconda",
            "te escondas",
            "se esconda",
            "nos escondamos",
            "os escondáis",
            "se escondan"
        ],
        "future-subjunctive-tense": [
            "me escondiere",
            "te escondieres",
            "se escondiere",
            "nos escondiéremos",
            "os escondiereis",
            "se escondieren"
        ]
    },
    "escribir": {
        "present-tense": [
            "escribo",
            "escribes",
            "escribe",
            "escribimos",
            "escribís",
            "escriben"
        ],
        "future-tense": [
            "escribiré",
            "escribirás",
            "escribirá",
            "escribiremos",
            "escribiréis",
            "escribirán"
        ],
        "preterite-tense": [
            "escribí",
            "escribiste",
            "escribió",
            "escribimos",
            "escribisteis",
            "escribieron"
        ],
        "present-subjunctive-tense": [
            "escriba",
            "escribas",
            "escriba",
            "escribamos",
            "escribáis",
            "escriban"
        ],
        "future-subjunctive-tense": [
            "escribiere",
            "escribieres",
            "escribiere",
            "escribiéremos",
            "escribiereis",
            "escribieren"
        ]
    },
    "escuchar": {
        "present-tense": [
            "escucho",
            "escuchas",
            "escucha",
            "escuchamos",
            "escucháis",
            "escuchan"
        ],
        "future-tense": [
            "escucharé",
            "escucharás",
            "escuchará",
            "escucharemos",
            "escucharéis",
            "escucharán"
        ],
        "preterite-tense": [
            "escuché",
            "escuchaste",
            "escuchó",
            "escuchamos",
            "escuchasteis",
            "escucharon"
        ],
        "present-subjunctive-tense": [
            "escuche",
            "escuches",
            "escuche",
            "escuchemos",
            "escuchéis",
            "escuchen"
        ],
        "future-subjunctive-tense": [
            "escuchare",
            "escuchares",
            "escuchare",
            "escucháremos",
            "escuchareis",
            "escucharen"
        ]
    },
    "fijar": {
        "present-tense": [
            "fijo",
            "fijas",
            "fija",
            "fijamos",
            "fijáis",
            "fijan"
        ],
        "future-tense": [
            "fijaré",
            "fijarás",
            "fijará",
            "fijaremos",
            "fijaréis",
            "fijarán"
        ],
        "preterite-tense": [
            "fijé",
            "fijaste",
            "fijó",
            "fijamos",
            "fijasteis",
            "fijaron"
        ],
        "present-subjunctive-tense": [
            "fije",
            "fijes",
            "fije",
            "fijemos",
            "fijéis",
            "fijen"
        ],
        "future-subjunctive-tense": [
            "fijare",
            "fijares",
            "fijare",
            "fijáremos",
            "fijareis",
            "fijaren"
        ]
    },
    "esquiar": {
        "present-tense": [
            "esquío",
            "esquías",
            "esquía",
            "esquiamos",
            "esquiáis",
            "esquían"
        ],
        "future-tense": [
            "esquiaré",
            "esquiarás",
            "esquiará",
            "esquiaremos",
            "esquiaréis",
            "esquiarán"
        ],
        "preterite-tense": [
            "esquié",
            "esquiaste",
            "esquió",
            "esquiamos",
            "esquiasteis",
            "esquiaron"
        ],
        "present-subjunctive-tense": [
            "esquíe",
            "esquíes",
            "esquíe",
            "esquiemos",
            "esquiéis",
            "esquíen"
        ],
        "future-subjunctive-tense": [
            "esquiare",
            "esquiares",
            "esquiare",
            "esquiáremos",
            "esquiareis",
            "esquiaren"
        ]
    },
    "establecer": {
        "present-tense": [
            "establezco",
            "estableces",
            "establece",
            "establecemos",
            "establecéis",
            "establecen"
        ],
        "future-tense": [
            "estableceré",
            "establecerás",
            "establecerá",
            "estableceremos",
            "estableceréis",
            "establecerán"
        ],
        "preterite-tense": [
            "establecí",
            "estableciste",
            "estableció",
            "establecimos",
            "establecisteis",
            "establecieron"
        ],
        "present-subjunctive-tense": [
            "establezca",
            "establezcas",
            "establezca",
            "establezcamos",
            "establezcáis",
            "establezcan"
        ],
        "future-subjunctive-tense": [
            "estableciere",
            "establecieres",
            "estableciere",
            "estableciéremos",
            "estableciereis",
            "establecieren"
        ]
    },
    "estar": {
        "present-tense": [
            "estoy",
            "estás",
            "está",
            "estamos",
            "estáis",
            "están"
        ],
        "future-tense": [
            "estaré",
            "estarás",
            "estará",
            "estaremos",
            "estaréis",
            "estarán"
        ],
        "preterite-tense": [
            "estuve",
            "estuviste",
            "estuvo",
            "estuvimos",
            "estuvisteis",
            "estuvieron"
        ],
        "present-subjunctive-tense": [
            "esté",
            "estés",
            "esté",
            "estemos",
            "estéis",
            "estén"
        ],
        "future-subjunctive-tense": [
            "estuviere",
            "estuvieres",
            "estuviere",
            "estuviéremos",
            "estuviereis",
            "estuvieren"
        ]
    },
    "estimar": {
        "present-tense": [
            "estimo",
            "estimas",
            "estima",
            "estimamos",
            "estimáis",
            "estiman"
        ],
        "future-tense": [
            "estimaré",
            "estimarás",
            "estimará",
            "estimaremos",
            "estimaréis",
            "estimarán"
        ],
        "preterite-tense": [
            "estimé",
            "estimaste",
            "estimó",
            "estimamos",
            "estimasteis",
            "estimaron"
        ],
        "present-subjunctive-tense": [
            "estime",
            "estimes",
            "estime",
            "estimemos",
            "estiméis",
            "estimen"
        ],
        "future-subjunctive-tense": [
            "estimare",
            "estimares",
            "estimare",
            "estimáremos",
            "estimareis",
            "estimaren"
        ]
    },
    "estudiar": {
        "present-tense": [
            "estudio",
            "estudias",
            "estudia",
            "estudiamos",
            "estudiáis",
            "estudian"
        ],
        "future-tense": [
            "estudiaré",
            "estudiarás",
            "estudiará",
            "estudiaremos",
            "estudiaréis",
            "estudiarán"
        ],
        "preterite-tense": [
            "estudié",
            "estudiaste",
            "estudió",
            "estudiamos",
            "estudiasteis",
            "estudiaron"
        ],
        "present-subjunctive-tense": [
            "estudie",
            "estudies",
            "estudie",
            "estudiemos",
            "estudiéis",
            "estudien"
        ],
        "future-subjunctive-tense": [
            "estudiare",
            "estudiares",
            "estudiare",
            "estudiáremos",
            "estudiareis",
            "estudiaren"
        ]
    },
    "evacuar": {
        "present-tense": [
            "evacuo",
            "evacuas",
            "evacua",
            "evacuamos",
            "evacuáis",
            "evacuan"
        ],
        "future-tense": [
            "evacuaré",
            "evacuarás",
            "evacuará",
            "evacuaremos",
            "evacuaréis",
            "evacuarán"
        ],
        "preterite-tense": [
            "evacué",
            "evacuaste",
            "evacuó",
            "evacuamos",
            "evacuasteis",
            "evacuaron"
        ],
        "present-subjunctive-tense": [
            "evacue",
            "evacues",
            "evacue",
            "evacuemos",
            "evacuéis",
            "evacuen"
        ],
        "future-subjunctive-tense": [
            "evacuare",
            "evacuares",
            "evacuare",
            "evacuáremos",
            "evacuareis",
            "evacuaren"
        ]
    },
    "evitar": {
        "present-tense": [
            "evito",
            "evitas",
            "evita",
            "evitamos",
            "evitáis",
            "evitan"
        ],
        "future-tense": [
            "evitaré",
            "evitarás",
            "evitará",
            "evitaremos",
            "evitaréis",
            "evitarán"
        ],
        "preterite-tense": [
            "evité",
            "evitaste",
            "evitó",
            "evitamos",
            "evitasteis",
            "evitaron"
        ],
        "present-subjunctive-tense": [
            "evite",
            "evites",
            "evite",
            "evitemos",
            "evitéis",
            "eviten"
        ],
        "future-subjunctive-tense": [
            "evitare",
            "evitares",
            "evitare",
            "evitáremos",
            "evitareis",
            "evitaren"
        ]
    },
    "exhibir": {
        "present-tense": [
            "exhibo",
            "exhibes",
            "exhibe",
            "exhibimos",
            "exhibís",
            "exhiben"
        ],
        "future-tense": [
            "exhibiré",
            "exhibirás",
            "exhibirá",
            "exhibiremos",
            "exhibiréis",
            "exhibirán"
        ],
        "preterite-tense": [
            "exhibí",
            "exhibiste",
            "exhibió",
            "exhibimos",
            "exhibisteis",
            "exhibieron"
        ],
        "present-subjunctive-tense": [
            "exhiba",
            "exhibas",
            "exhiba",
            "exhibamos",
            "exhibáis",
            "exhiban"
        ],
        "future-subjunctive-tense": [
            "exhibiere",
            "exhibieres",
            "exhibiere",
            "exhibiéremos",
            "exhibiereis",
            "exhibieren"
        ]
    },
    "exigir": {
        "present-tense": [
            "exijo",
            "exiges",
            "exige",
            "exigimos",
            "exigís",
            "exigen"
        ],
        "future-tense": [
            "exigiré",
            "exigirás",
            "exigirá",
            "exigiremos",
            "exigiréis",
            "exigirán"
        ],
        "preterite-tense": [
            "exigí",
            "exigiste",
            "exigió",
            "exigimos",
            "exigisteis",
            "exigieron"
        ],
        "present-subjunctive-tense": [
            "exija",
            "exijas",
            "exija",
            "exijamos",
            "exijáis",
            "exijan"
        ],
        "future-subjunctive-tense": [
            "exigiere",
            "exigieres",
            "exigiere",
            "exigiéremos",
            "exigiereis",
            "exigieren"
        ]
    },
    "explicar": {
        "present-tense": [
            "explico",
            "explicas",
            "explica",
            "explicamos",
            "explicáis",
            "explican"
        ],
        "future-tense": [
            "explicaré",
            "explicarás",
            "explicará",
            "explicaremos",
            "explicaréis",
            "explicarán"
        ],
        "preterite-tense": [
            "expliqué",
            "explicaste",
            "explicó",
            "explicamos",
            "explicasteis",
            "explicaron"
        ],
        "present-subjunctive-tense": [
            "explique",
            "expliques",
            "explique",
            "expliquemos",
            "expliquéis",
            "expliquen"
        ],
        "future-subjunctive-tense": [
            "explicare",
            "explicares",
            "explicare",
            "explicáremos",
            "explicareis",
            "explicaren"
        ]
    },
    "explorar": {
        "present-tense": [
            "exploro",
            "exploras",
            "explora",
            "exploramos",
            "exploráis",
            "exploran"
        ],
        "future-tense": [
            "exploraré",
            "explorarás",
            "explorará",
            "exploraremos",
            "exploraréis",
            "explorarán"
        ],
        "preterite-tense": [
            "exploré",
            "exploraste",
            "exploró",
            "exploramos",
            "explorasteis",
            "exploraron"
        ],
        "present-subjunctive-tense": [
            "explore",
            "explores",
            "explore",
            "exploremos",
            "exploréis",
            "exploren"
        ],
        "future-subjunctive-tense": [
            "explorare",
            "explorares",
            "explorare",
            "exploráremos",
            "explorareis",
            "exploraren"
        ]
    },
    "explotar": {
        "present-tense": [
            "exploto",
            "explotas",
            "explota",
            "explotamos",
            "explotáis",
            "explotan"
        ],
        "future-tense": [
            "explotaré",
            "explotarás",
            "explotará",
            "explotaremos",
            "explotaréis",
            "explotarán"
        ],
        "preterite-tense": [
            "exploté",
            "explotaste",
            "explotó",
            "explotamos",
            "explotasteis",
            "explotaron"
        ],
        "present-subjunctive-tense": [
            "explote",
            "explotes",
            "explote",
            "explotemos",
            "explotéis",
            "exploten"
        ],
        "future-subjunctive-tense": [
            "explotare",
            "explotares",
            "explotare",
            "explotáremos",
            "explotareis",
            "explotaren"
        ]
    },
    "exponer": {
        "present-tense": [
            "expongo",
            "expones",
            "expone",
            "exponemos",
            "exponéis",
            "exponen"
        ],
        "future-tense": [
            "expondré",
            "expondrás",
            "expondrá",
            "expondremos",
            "expondréis",
            "expondrán"
        ],
        "preterite-tense": [
            "expuse",
            "expusiste",
            "expuso",
            "expusimos",
            "expusisteis",
            "expusieron"
        ],
        "present-subjunctive-tense": [
            "exponga",
            "expongas",
            "exponga",
            "expongamos",
            "expongáis",
            "expongan"
        ],
        "future-subjunctive-tense": [
            "expusiere",
            "expusieres",
            "expusiere",
            "expusiéremos",
            "expusiereis",
            "expusieren"
        ]
    },
    "exportar": {
        "present-tense": [
            "exporto",
            "exportas",
            "exporta",
            "exportamos",
            "exportáis",
            "exportan"
        ],
        "future-tense": [
            "exportaré",
            "exportarás",
            "exportará",
            "exportaremos",
            "exportaréis",
            "exportarán"
        ],
        "preterite-tense": [
            "exporté",
            "exportaste",
            "exportó",
            "exportamos",
            "exportasteis",
            "exportaron"
        ],
        "present-subjunctive-tense": [
            "exporte",
            "exportes",
            "exporte",
            "exportemos",
            "exportéis",
            "exporten"
        ],
        "future-subjunctive-tense": [
            "exportare",
            "exportares",
            "exportare",
            "exportáremos",
            "exportareis",
            "exportaren"
        ]
    },
    "expresar": {
        "present-tense": [
            "expreso",
            "expresas",
            "expresa",
            "expresamos",
            "expresáis",
            "expresan"
        ],
        "future-tense": [
            "expresaré",
            "expresarás",
            "expresará",
            "expresaremos",
            "expresaréis",
            "expresarán"
        ],
        "preterite-tense": [
            "expresé",
            "expresaste",
            "expresó",
            "expresamos",
            "expresasteis",
            "expresaron"
        ],
        "present-subjunctive-tense": [
            "exprese",
            "expreses",
            "exprese",
            "expresemos",
            "expreséis",
            "expresen"
        ],
        "future-subjunctive-tense": [
            "expresare",
            "expresares",
            "expresare",
            "expresáremos",
            "expresareis",
            "expresaren"
        ]
    },
    "extender": {
        "present-tense": [
            "extiendo",
            "extiendes",
            "extiende",
            "extendemos",
            "extendéis",
            "extienden"
        ],
        "future-tense": [
            "extenderé",
            "extenderás",
            "extenderá",
            "extenderemos",
            "extenderéis",
            "extenderán"
        ],
        "preterite-tense": [
            "extendí",
            "extendiste",
            "extendió",
            "extendimos",
            "extendisteis",
            "extendieron"
        ],
        "present-subjunctive-tense": [
            "extienda",
            "extiendas",
            "extienda",
            "extendamos",
            "extendáis",
            "extiendan"
        ],
        "future-subjunctive-tense": [
            "extendiere",
            "extendieres",
            "extendiere",
            "extendiéremos",
            "extendiereis",
            "extendieren"
        ]
    },
    "extinguir": {
        "present-tense": [
            "extingo",
            "extingues",
            "extingue",
            "extinguimos",
            "extinguís",
            "extinguen"
        ],
        "future-tense": [
            "extinguiré",
            "extinguirás",
            "extinguirá",
            "extinguiremos",
            "extinguiréis",
            "extinguirán"
        ],
        "preterite-tense": [
            "extinguí",
            "extinguiste",
            "extinguió",
            "extinguimos",
            "extinguisteis",
            "extinguieron"
        ],
        "present-subjunctive-tense": [
            "extinga",
            "extingas",
            "extinga",
            "extingamos",
            "extingáis",
            "extingan"
        ],
        "future-subjunctive-tense": [
            "extinguiere",
            "extinguieres",
            "extinguiere",
            "extinguiéremos",
            "extinguiereis",
            "extinguieren"
        ]
    },
    "fabricar": {
        "present-tense": [
            "fabrico",
            "fabricas",
            "fabrica",
            "fabricamos",
            "fabricáis",
            "fabrican"
        ],
        "future-tense": [
            "fabricaré",
            "fabricarás",
            "fabricará",
            "fabricaremos",
            "fabricaréis",
            "fabricarán"
        ],
        "preterite-tense": [
            "fabriqué",
            "fabricaste",
            "fabricó",
            "fabricamos",
            "fabricasteis",
            "fabricaron"
        ],
        "present-subjunctive-tense": [
            "fabrique",
            "fabriques",
            "fabrique",
            "fabriquemos",
            "fabriquéis",
            "fabriquen"
        ],
        "future-subjunctive-tense": [
            "fabricare",
            "fabricares",
            "fabricare",
            "fabricáremos",
            "fabricareis",
            "fabricaren"
        ]
    },
    "faltar": {
        "present-tense": [
            "falto",
            "faltas",
            "falta",
            "faltamos",
            "faltáis",
            "faltan"
        ],
        "future-tense": [
            "faltaré",
            "faltarás",
            "faltará",
            "faltaremos",
            "faltaréis",
            "faltarán"
        ],
        "preterite-tense": [
            "falté",
            "faltaste",
            "faltó",
            "faltamos",
            "faltasteis",
            "faltaron"
        ],
        "present-subjunctive-tense": [
            "falte",
            "faltes",
            "falte",
            "faltemos",
            "faltéis",
            "falten"
        ],
        "future-subjunctive-tense": [
            "faltare",
            "faltares",
            "faltare",
            "faltáremos",
            "faltareis",
            "faltaren"
        ]
    },
    "fascinar": {
        "present-tense": [
            "fascino",
            "fascinas",
            "fascina",
            "fascinamos",
            "fascináis",
            "fascinan"
        ],
        "future-tense": [
            "fascinaré",
            "fascinarás",
            "fascinará",
            "fascinaremos",
            "fascinaréis",
            "fascinarán"
        ],
        "preterite-tense": [
            "fasciné",
            "fascinaste",
            "fascinó",
            "fascinamos",
            "fascinasteis",
            "fascinaron"
        ],
        "present-subjunctive-tense": [
            "fascine",
            "fascines",
            "fascine",
            "fascinemos",
            "fascinéis",
            "fascinen"
        ],
        "future-subjunctive-tense": [
            "fascinare",
            "fascinares",
            "fascinare",
            "fascináremos",
            "fascinareis",
            "fascinaren"
        ]
    },
    "felicitar": {
        "present-tense": [
            "felicito",
            "felicitas",
            "felicita",
            "felicitamos",
            "felicitáis",
            "felicitan"
        ],
        "future-tense": [
            "felicitaré",
            "felicitarás",
            "felicitará",
            "felicitaremos",
            "felicitaréis",
            "felicitarán"
        ],
        "preterite-tense": [
            "felicité",
            "felicitaste",
            "felicitó",
            "felicitamos",
            "felicitasteis",
            "felicitaron"
        ],
        "present-subjunctive-tense": [
            "felicite",
            "felicites",
            "felicite",
            "felicitemos",
            "felicitéis",
            "feliciten"
        ],
        "future-subjunctive-tense": [
            "felicitare",
            "felicitares",
            "felicitare",
            "felicitáremos",
            "felicitareis",
            "felicitaren"
        ]
    },
    "fingir": {
        "present-tense": [
            "finjo",
            "finges",
            "finge",
            "fingimos",
            "fingís",
            "fingen"
        ],
        "future-tense": [
            "fingiré",
            "fingirás",
            "fingirá",
            "fingiremos",
            "fingiréis",
            "fingirán"
        ],
        "preterite-tense": [
            "fingí",
            "fingiste",
            "fingió",
            "fingimos",
            "fingisteis",
            "fingieron"
        ],
        "present-subjunctive-tense": [
            "finja",
            "finjas",
            "finja",
            "finjamos",
            "finjáis",
            "finjan"
        ],
        "future-subjunctive-tense": [
            "fingiere",
            "fingieres",
            "fingiere",
            "fingiéremos",
            "fingiereis",
            "fingieren"
        ]
    },
    "firmar": {
        "present-tense": [
            "firmo",
            "firmas",
            "firma",
            "firmamos",
            "firmáis",
            "firman"
        ],
        "future-tense": [
            "firmaré",
            "firmarás",
            "firmará",
            "firmaremos",
            "firmaréis",
            "firmarán"
        ],
        "preterite-tense": [
            "firmé",
            "firmaste",
            "firmó",
            "firmamos",
            "firmasteis",
            "firmaron"
        ],
        "present-subjunctive-tense": [
            "firme",
            "firmes",
            "firme",
            "firmemos",
            "firméis",
            "firmen"
        ],
        "future-subjunctive-tense": [
            "firmare",
            "firmares",
            "firmare",
            "firmáremos",
            "firmareis",
            "firmaren"
        ]
    },
    "florecer": {
        "present-tense": [
            "florezco",
            "floreces",
            "florece",
            "florecemos",
            "florecéis",
            "florecen"
        ],
        "future-tense": [
            "floreceré",
            "florecerás",
            "florecerá",
            "floreceremos",
            "floreceréis",
            "florecerán"
        ],
        "preterite-tense": [
            "florecí",
            "floreciste",
            "floreció",
            "florecimos",
            "florecisteis",
            "florecieron"
        ],
        "present-subjunctive-tense": [
            "florezca",
            "florezcas",
            "florezca",
            "florezcamos",
            "florezcáis",
            "florezcan"
        ],
        "future-subjunctive-tense": [
            "floreciere",
            "florecieres",
            "floreciere",
            "floreciéremos",
            "floreciereis",
            "florecieren"
        ]
    },
    "formar": {
        "present-tense": [
            "formo",
            "formas",
            "forma",
            "formamos",
            "formáis",
            "forman"
        ],
        "future-tense": [
            "formaré",
            "formarás",
            "formará",
            "formaremos",
            "formaréis",
            "formarán"
        ],
        "preterite-tense": [
            "formé",
            "formaste",
            "formó",
            "formamos",
            "formasteis",
            "formaron"
        ],
        "present-subjunctive-tense": [
            "forme",
            "formes",
            "forme",
            "formemos",
            "forméis",
            "formen"
        ],
        "future-subjunctive-tense": [
            "formare",
            "formares",
            "formare",
            "formáremos",
            "formareis",
            "formaren"
        ]
    },
    "fortalecer": {
        "present-tense": [
            "fortalezco",
            "fortaleces",
            "fortalece",
            "fortalecemos",
            "fortalecéis",
            "fortalecen"
        ],
        "future-tense": [
            "fortaleceré",
            "fortalecerás",
            "fortalecerá",
            "fortaleceremos",
            "fortaleceréis",
            "fortalecerán"
        ],
        "preterite-tense": [
            "fortalecí",
            "fortaleciste",
            "fortaleció",
            "fortalecimos",
            "fortalecisteis",
            "fortalecieron"
        ],
        "present-subjunctive-tense": [
            "fortalezca",
            "fortalezcas",
            "fortalezca",
            "fortalezcamos",
            "fortalezcáis",
            "fortalezcan"
        ],
        "future-subjunctive-tense": [
            "fortaleciere",
            "fortalecieres",
            "fortaleciere",
            "fortaleciéremos",
            "fortaleciereis",
            "fortalecieren"
        ]
    },
    "freír": {
        "present-tense": [
            "frío",
            "fríes",
            "fríe",
            "freímos",
            "freís",
            "fríen"
        ],
        "future-tense": [
            "freiré",
            "freirás",
            "freirá",
            "freiremos",
            "freiréis",
            "freirán"
        ],
        "preterite-tense": [
            "freí",
            "freíste",
            "frió",
            "freímos",
            "freísteis",
            "frieron"
        ],
        "present-subjunctive-tense": [
            "fría",
            "frías",
            "fría",
            "friamos",
            "friáis",
            "frían"
        ],
        "future-subjunctive-tense": [
            "friere",
            "frieres",
            "friere",
            "friéremos",
            "friereis",
            "frieren"
        ]
    },
    "fumar": {
        "present-tense": [
            "fumo",
            "fumas",
            "fuma",
            "fumamos",
            "fumáis",
            "fuman"
        ],
        "future-tense": [
            "fumaré",
            "fumarás",
            "fumará",
            "fumaremos",
            "fumaréis",
            "fumarán"
        ],
        "preterite-tense": [
            "fumé",
            "fumaste",
            "fumó",
            "fumamos",
            "fumasteis",
            "fumaron"
        ],
        "present-subjunctive-tense": [
            "fume",
            "fumes",
            "fume",
            "fumemos",
            "fuméis",
            "fumen"
        ],
        "future-subjunctive-tense": [
            "fumare",
            "fumares",
            "fumare",
            "fumáremos",
            "fumareis",
            "fumaren"
        ]
    },
    "funcionar": {
        "present-tense": [
            "funciono",
            "funcionas",
            "funciona",
            "funcionamos",
            "funcionáis",
            "funcionan"
        ],
        "future-tense": [
            "funcionaré",
            "funcionarás",
            "funcionará",
            "funcionaremos",
            "funcionaréis",
            "funcionarán"
        ],
        "preterite-tense": [
            "funcioné",
            "funcionaste",
            "funcionó",
            "funcionamos",
            "funcionasteis",
            "funcionaron"
        ],
        "present-subjunctive-tense": [
            "funcione",
            "funciones",
            "funcione",
            "funcionemos",
            "funcionéis",
            "funcionen"
        ],
        "future-subjunctive-tense": [
            "funcionare",
            "funcionares",
            "funcionare",
            "funcionáremos",
            "funcionareis",
            "funcionaren"
        ]
    },
    "ganar": {
        "present-tense": [
            "gano",
            "ganas",
            "gana",
            "ganamos",
            "ganáis",
            "ganan"
        ],
        "future-tense": [
            "ganaré",
            "ganarás",
            "ganará",
            "ganaremos",
            "ganaréis",
            "ganarán"
        ],
        "preterite-tense": [
            "gané",
            "ganaste",
            "ganó",
            "ganamos",
            "ganasteis",
            "ganaron"
        ],
        "present-subjunctive-tense": [
            "gane",
            "ganes",
            "gane",
            "ganemos",
            "ganéis",
            "ganen"
        ],
        "future-subjunctive-tense": [
            "ganare",
            "ganares",
            "ganare",
            "ganáremos",
            "ganareis",
            "ganaren"
        ]
    },
    "gastar": {
        "present-tense": [
            "gasto",
            "gastas",
            "gasta",
            "gastamos",
            "gastáis",
            "gastan"
        ],
        "future-tense": [
            "gastaré",
            "gastarás",
            "gastará",
            "gastaremos",
            "gastaréis",
            "gastarán"
        ],
        "preterite-tense": [
            "gasté",
            "gastaste",
            "gastó",
            "gastamos",
            "gastasteis",
            "gastaron"
        ],
        "present-subjunctive-tense": [
            "gaste",
            "gastes",
            "gaste",
            "gastemos",
            "gastéis",
            "gasten"
        ],
        "future-subjunctive-tense": [
            "gastare",
            "gastares",
            "gastare",
            "gastáremos",
            "gastareis",
            "gastaren"
        ]
    },
    "generalizar": {
        "present-tense": [
            "generalizo",
            "generalizas",
            "generaliza",
            "generalizamos",
            "generalizáis",
            "generalizan"
        ],
        "future-tense": [
            "generalizaré",
            "generalizarás",
            "generalizará",
            "generalizaremos",
            "generalizaréis",
            "generalizarán"
        ],
        "preterite-tense": [
            "generalicé",
            "generalizaste",
            "generalizó",
            "generalizamos",
            "generalizasteis",
            "generalizaron"
        ],
        "present-subjunctive-tense": [
            "generalice",
            "generalices",
            "generalice",
            "generalicemos",
            "generalicéis",
            "generalicen"
        ],
        "future-subjunctive-tense": [
            "generalizare",
            "generalizares",
            "generalizare",
            "generalizáremos",
            "generalizareis",
            "generalizaren"
        ]
    },
    "glorificar": {
        "present-tense": [
            "glorifico",
            "glorificas",
            "glorifica",
            "glorificamos",
            "glorificáis",
            "glorifican"
        ],
        "future-tense": [
            "glorificaré",
            "glorificarás",
            "glorificará",
            "glorificaremos",
            "glorificaréis",
            "glorificarán"
        ],
        "preterite-tense": [
            "glorifiqué",
            "glorificaste",
            "glorificó",
            "glorificamos",
            "glorificasteis",
            "glorificaron"
        ],
        "present-subjunctive-tense": [
            "glorifique",
            "glorifiques",
            "glorifique",
            "glorifiquemos",
            "glorifiquéis",
            "glorifiquen"
        ],
        "future-subjunctive-tense": [
            "glorificare",
            "glorificares",
            "glorificare",
            "glorificáremos",
            "glorificareis",
            "glorificaren"
        ]
    },
    "gobernar": {
        "present-tense": [
            "gobierno",
            "gobiernas",
            "gobierna",
            "gobernamos",
            "gobernáis",
            "gobiernan"
        ],
        "future-tense": [
            "gobernaré",
            "gobernarás",
            "gobernará",
            "gobernaremos",
            "gobernaréis",
            "gobernarán"
        ],
        "preterite-tense": [
            "goberné",
            "gobernaste",
            "gobernó",
            "gobernamos",
            "gobernasteis",
            "gobernaron"
        ],
        "present-subjunctive-tense": [
            "gobierne",
            "gobiernes",
            "gobierne",
            "gobernemos",
            "gobernéis",
            "gobiernen"
        ],
        "future-subjunctive-tense": [
            "gobernare",
            "gobernares",
            "gobernare",
            "gobernáremos",
            "gobernareis",
            "gobernaren"
        ]
    },
    "graduar": {
        "present-tense": [
            "gradúo",
            "gradúas",
            "gradúa",
            "graduamos",
            "graduáis",
            "gradúan"
        ],
        "future-tense": [
            "graduaré",
            "graduarás",
            "graduará",
            "graduaremos",
            "graduaréis",
            "graduarán"
        ],
        "preterite-tense": [
            "gradué",
            "graduaste",
            "graduó",
            "graduamos",
            "graduasteis",
            "graduaron"
        ],
        "present-subjunctive-tense": [
            "gradúe",
            "gradúes",
            "gradúe",
            "graduemos",
            "graduéis",
            "gradúen"
        ],
        "future-subjunctive-tense": [
            "graduare",
            "graduares",
            "graduare",
            "graduáremos",
            "graduareis",
            "graduaren"
        ]
    },
    "graduarse": {
        "present-tense": [
            "me gradúo",
            "te gradúas",
            "se gradúa",
            "nos graduamos",
            "os graduáis",
            "se gradúan"
        ],
        "future-tense": [
            "me graduaré",
            "te graduarás",
            "se graduará",
            "nos graduaremos",
            "os graduaréis",
            "se graduarán"
        ],
        "preterite-tense": [
            "me gradué",
            "te graduaste",
            "se graduó",
            "nos graduamos",
            "os graduasteis",
            "se graduaron"
        ],
        "present-subjunctive-tense": [
            "me gradúe",
            "te gradúes",
            "se gradúe",
            "nos graduemos",
            "os graduéis",
            "se gradúen"
        ],
        "future-subjunctive-tense": [
            "me graduare",
            "te graduares",
            "se graduare",
            "nos graduáremos",
            "os graduareis",
            "se graduaren"
        ]
    },
    "gruñir": {
        "present-tense": [
            "gruño",
            "gruñes",
            "gruñe",
            "gruñimos",
            "gruñís",
            "gruñen"
        ],
        "future-tense": [
            "gruñiré",
            "gruñirás",
            "gruñirá",
            "gruñiremos",
            "gruñiréis",
            "gruñirán"
        ],
        "preterite-tense": [
            "gruñí",
            "gruñiste",
            "gruñó",
            "gruñimos",
            "gruñisteis",
            "gruñeron"
        ],
        "present-subjunctive-tense": [
            "gruña",
            "gruñas",
            "gruña",
            "gruñamos",
            "gruñáis",
            "gruñan"
        ],
        "future-subjunctive-tense": [
            "gruñere",
            "gruñeres",
            "gruñere",
            "gruñéremos",
            "gruñereis",
            "gruñeren"
        ]
    },
    "guardar": {
        "present-tense": [
            "guardo",
            "guardas",
            "guarda",
            "guardamos",
            "guardáis",
            "guardan"
        ],
        "future-tense": [
            "guardaré",
            "guardarás",
            "guardará",
            "guardaremos",
            "guardaréis",
            "guardarán"
        ],
        "preterite-tense": [
            "guardé",
            "guardaste",
            "guardó",
            "guardamos",
            "guardasteis",
            "guardaron"
        ],
        "present-subjunctive-tense": [
            "guarde",
            "guardes",
            "guarde",
            "guardemos",
            "guardéis",
            "guarden"
        ],
        "future-subjunctive-tense": [
            "guardare",
            "guardares",
            "guardare",
            "guardáremos",
            "guardareis",
            "guardaren"
        ]
    },
    "guiar": {
        "present-tense": [
            "guío",
            "guías",
            "guía",
            "guiamos",
            "guiáis",
            "guían"
        ],
        "future-tense": [
            "guiaré",
            "guiarás",
            "guiará",
            "guiaremos",
            "guiaréis",
            "guiarán"
        ],
        "preterite-tense": [
            "guie",
            "guiaste",
            "guio",
            "guiamos",
            "guiasteis",
            "guiaron"
        ],
        "present-subjunctive-tense": [
            "guíe",
            "guíes",
            "guíe",
            "guiemos",
            "guiéis",
            "guíen"
        ],
        "future-subjunctive-tense": [
            "guiare",
            "guiares",
            "guiare",
            "guiáremos",
            "guiareis",
            "guiaren"
        ]
    },
    "gustar": {
        "present-tense": [
            "gusto",
            "gustas",
            "gusta",
            "gustamos",
            "gustáis",
            "gustan"
        ],
        "future-tense": [
            "gustaré",
            "gustarás",
            "gustará",
            "gustaremos",
            "gustaréis",
            "gustarán"
        ],
        "preterite-tense": [
            "gusté",
            "gustaste",
            "gustó",
            "gustamos",
            "gustasteis",
            "gustaron"
        ],
        "present-subjunctive-tense": [
            "guste",
            "gustes",
            "guste",
            "gustemos",
            "gustéis",
            "gusten"
        ],
        "future-subjunctive-tense": [
            "gustare",
            "gustares",
            "gustare",
            "gustáremos",
            "gustareis",
            "gustaren"
        ]
    },
    "hablar": {
        "present-tense": [
            "hablo",
            "hablas",
            "habla",
            "hablamos",
            "habláis",
            "hablan"
        ],
        "future-tense": [
            "hablaré",
            "hablarás",
            "hablará",
            "hablaremos",
            "hablaréis",
            "hablarán"
        ],
        "preterite-tense": [
            "hablé",
            "hablaste",
            "habló",
            "hablamos",
            "hablasteis",
            "hablaron"
        ],
        "present-subjunctive-tense": [
            "hable",
            "hables",
            "hable",
            "hablemos",
            "habléis",
            "hablen"
        ],
        "future-subjunctive-tense": [
            "hablare",
            "hablares",
            "hablare",
            "habláremos",
            "hablareis",
            "hablaren"
        ]
    },
    "hacer": {
        "present-tense": [
            "hago",
            "haces",
            "hace",
            "hacemos",
            "hacéis",
            "hacen"
        ],
        "future-tense": [
            "haré",
            "harás",
            "hará",
            "haremos",
            "haréis",
            "harán"
        ],
        "preterite-tense": [
            "hice",
            "hiciste",
            "hizo",
            "hicimos",
            "hicisteis",
            "hicieron"
        ],
        "present-subjunctive-tense": [
            "haga",
            "hagas",
            "haga",
            "hagamos",
            "hagáis",
            "hagan"
        ],
        "future-subjunctive-tense": [
            "hiciere",
            "hicieres",
            "hiciere",
            "hiciéremos",
            "hiciereis",
            "hicieren"
        ]
    },
    "hallar": {
        "present-tense": [
            "hallo",
            "hallas",
            "halla",
            "hallamos",
            "halláis",
            "hallan"
        ],
        "future-tense": [
            "hallaré",
            "hallarás",
            "hallará",
            "hallaremos",
            "hallaréis",
            "hallarán"
        ],
        "preterite-tense": [
            "hallé",
            "hallaste",
            "halló",
            "hallamos",
            "hallasteis",
            "hallaron"
        ],
        "present-subjunctive-tense": [
            "halle",
            "halles",
            "halle",
            "hallemos",
            "halléis",
            "hallen"
        ],
        "future-subjunctive-tense": [
            "hallare",
            "hallares",
            "hallare",
            "halláremos",
            "hallareis",
            "hallaren"
        ]
    },
    "hallarse": {
        "present-tense": [
            "me hallo",
            "te hallas",
            "se halla",
            "nos hallamos",
            "os halláis",
            "se hallan"
        ],
        "future-tense": [
            "me hallaré",
            "te hallarás",
            "se hallará",
            "nos hallaremos",
            "os hallaréis",
            "se hallarán"
        ],
        "preterite-tense": [
            "me hallé",
            "te hallaste",
            "se halló",
            "nos hallamos",
            "os hallasteis",
            "se hallaron"
        ],
        "present-subjunctive-tense": [
            "me halle",
            "te halles",
            "se halle",
            "nos hallemos",
            "os halléis",
            "se hallen"
        ],
        "future-subjunctive-tense": [
            "me hallare",
            "te hallares",
            "se hallare",
            "nos halláremos",
            "os hallareis",
            "se hallaren"
        ]
    },
    "helar": {
        "present-tense": [
            "hielo",
            "hielas",
            "hiela",
            "helamos",
            "heláis",
            "hielan"
        ],
        "future-tense": [
            "helaré",
            "helarás",
            "helará",
            "helaremos",
            "helaréis",
            "helarán"
        ],
        "preterite-tense": [
            "helé",
            "helaste",
            "heló",
            "helamos",
            "helasteis",
            "helaron"
        ],
        "present-subjunctive-tense": [
            "hiele",
            "hieles",
            "hiele",
            "helemos",
            "heléis",
            "hielen"
        ],
        "future-subjunctive-tense": [
            "helare",
            "helares",
            "helare",
            "heláremos",
            "helareis",
            "helaren"
        ]
    },
    "heredar": {
        "present-tense": [
            "heredo",
            "heredas",
            "hereda",
            "heredamos",
            "heredáis",
            "heredan"
        ],
        "future-tense": [
            "heredaré",
            "heredarás",
            "heredará",
            "heredaremos",
            "heredaréis",
            "heredarán"
        ],
        "preterite-tense": [
            "heredé",
            "heredaste",
            "heredó",
            "heredamos",
            "heredasteis",
            "heredaron"
        ],
        "present-subjunctive-tense": [
            "herede",
            "heredes",
            "herede",
            "heredemos",
            "heredéis",
            "hereden"
        ],
        "future-subjunctive-tense": [
            "heredare",
            "heredares",
            "heredare",
            "heredáremos",
            "heredareis",
            "heredaren"
        ]
    },
    "herir": {
        "present-tense": [
            "hiero",
            "hieres",
            "hiere",
            "herimos",
            "herís",
            "hieren"
        ],
        "future-tense": [
            "heriré",
            "herirás",
            "herirá",
            "heriremos",
            "heriréis",
            "herirán"
        ],
        "preterite-tense": [
            "herí",
            "heriste",
            "hirió",
            "herimos",
            "heristeis",
            "hirieron"
        ],
        "present-subjunctive-tense": [
            "hiera",
            "hieras",
            "hiera",
            "hiramos",
            "hiráis",
            "hieran"
        ],
        "future-subjunctive-tense": [
            "hiriere",
            "hirieres",
            "hiriere",
            "hiriéremos",
            "hiriereis",
            "hirieren"
        ]
    },
    "hervir": {
        "present-tense": [
            "hiervo",
            "hierves",
            "hierve",
            "hervimos",
            "hervís",
            "hierven"
        ],
        "future-tense": [
            "herviré",
            "hervirás",
            "hervirá",
            "herviremos",
            "herviréis",
            "hervirán"
        ],
        "preterite-tense": [
            "herví",
            "herviste",
            "hirvió",
            "hervimos",
            "hervisteis",
            "hirvieron"
        ],
        "present-subjunctive-tense": [
            "hierva",
            "hiervas",
            "hierva",
            "hirvamos",
            "hirváis",
            "hiervan"
        ],
        "future-subjunctive-tense": [
            "hirviere",
            "hirvieres",
            "hirviere",
            "hirviéremos",
            "hirviereis",
            "hirvieren"
        ]
    },
    "huir": {
        "present-tense": [
            "huyo",
            "huyes",
            "huye",
            "huimos",
            "huís",
            "huyen"
        ],
        "future-tense": [
            "huiré",
            "huirás",
            "huirá",
            "huiremos",
            "huiréis",
            "huirán"
        ],
        "preterite-tense": [
            "huí",
            "huiste",
            "huyó",
            "huimos",
            "huisteis",
            "huyeron"
        ],
        "present-subjunctive-tense": [
            "huya",
            "huyas",
            "huya",
            "huyamos",
            "huyáis",
            "huyan"
        ],
        "future-subjunctive-tense": [
            "huyere",
            "huyeres",
            "huyere",
            "huyéremos",
            "huyereis",
            "huyeren"
        ]
    },
    "ilustrar": {
        "present-tense": [
            "ilustro",
            "ilustras",
            "ilustra",
            "ilustramos",
            "ilustráis",
            "ilustran"
        ],
        "future-tense": [
            "ilustraré",
            "ilustrarás",
            "ilustrará",
            "ilustraremos",
            "ilustraréis",
            "ilustrarán"
        ],
        "preterite-tense": [
            "ilustré",
            "ilustraste",
            "ilustró",
            "ilustramos",
            "ilustrasteis",
            "ilustraron"
        ],
        "present-subjunctive-tense": [
            "ilustre",
            "ilustres",
            "ilustre",
            "ilustremos",
            "ilustréis",
            "ilustren"
        ],
        "future-subjunctive-tense": [
            "ilustrare",
            "ilustrares",
            "ilustrare",
            "ilustráremos",
            "ilustrareis",
            "ilustraren"
        ]
    },
    "importar": {
        "present-tense": [
            "importo",
            "importas",
            "importa",
            "importamos",
            "importáis",
            "importan"
        ],
        "future-tense": [
            "importaré",
            "importarás",
            "importará",
            "importaremos",
            "importaréis",
            "importarán"
        ],
        "preterite-tense": [
            "importé",
            "importaste",
            "importó",
            "importamos",
            "importasteis",
            "importaron"
        ],
        "present-subjunctive-tense": [
            "importe",
            "importes",
            "importe",
            "importemos",
            "importéis",
            "importen"
        ],
        "future-subjunctive-tense": [
            "importare",
            "importares",
            "importare",
            "importáremos",
            "importareis",
            "importaren"
        ]
    },
    "imprimir": {
        "present-tense": [
            "imprimo",
            "imprimes",
            "imprime",
            "imprimimos",
            "imprimís",
            "imprimen"
        ],
        "future-tense": [
            "imprimiré",
            "imprimirás",
            "imprimirá",
            "imprimiremos",
            "imprimiréis",
            "imprimirán"
        ],
        "preterite-tense": [
            "imprimí",
            "imprimiste",
            "imprimió",
            "imprimimos",
            "imprimisteis",
            "imprimieron"
        ],
        "present-subjunctive-tense": [
            "imprima",
            "imprimas",
            "imprima",
            "imprimamos",
            "imprimáis",
            "impriman"
        ],
        "future-subjunctive-tense": [
            "imprimiere",
            "imprimieres",
            "imprimiere",
            "imprimiéremos",
            "imprimiereis",
            "imprimieren"
        ]
    },
    "incluir": {
        "present-tense": [
            "incluyo",
            "incluyes",
            "incluye",
            "incluimos",
            "incluís",
            "incluyen"
        ],
        "future-tense": [
            "incluiré",
            "incluirás",
            "incluirá",
            "incluiremos",
            "incluiréis",
            "incluirán"
        ],
        "preterite-tense": [
            "incluí",
            "incluiste",
            "incluyó",
            "incluimos",
            "incluisteis",
            "incluyeron"
        ],
        "present-subjunctive-tense": [
            "incluya",
            "incluyas",
            "incluya",
            "incluyamos",
            "incluyáis",
            "incluyan"
        ],
        "future-subjunctive-tense": [
            "incluyere",
            "incluyeres",
            "incluyere",
            "incluyéremos",
            "incluyereis",
            "incluyeren"
        ]
    },
    "indicar": {
        "present-tense": [
            "indico",
            "indicas",
            "indica",
            "indicamos",
            "indicáis",
            "indican"
        ],
        "future-tense": [
            "indicaré",
            "indicarás",
            "indicará",
            "indicaremos",
            "indicaréis",
            "indicarán"
        ],
        "preterite-tense": [
            "indiqué",
            "indicaste",
            "indicó",
            "indicamos",
            "indicasteis",
            "indicaron"
        ],
        "present-subjunctive-tense": [
            "indique",
            "indiques",
            "indique",
            "indiquemos",
            "indiquéis",
            "indiquen"
        ],
        "future-subjunctive-tense": [
            "indicare",
            "indicares",
            "indicare",
            "indicáremos",
            "indicareis",
            "indicaren"
        ]
    },
    "inducir": {
        "present-tense": [
            "induzco",
            "induces",
            "induce",
            "inducimos",
            "inducís",
            "inducen"
        ],
        "future-tense": [
            "induciré",
            "inducirás",
            "inducirá",
            "induciremos",
            "induciréis",
            "inducirán"
        ],
        "preterite-tense": [
            "induje",
            "indujiste",
            "indujo",
            "indujimos",
            "indujisteis",
            "indujeron"
        ],
        "present-subjunctive-tense": [
            "induzca",
            "induzcas",
            "induzca",
            "induzcamos",
            "induzcáis",
            "induzcan"
        ],
        "future-subjunctive-tense": [
            "indujere",
            "indujeres",
            "indujere",
            "indujéremos",
            "indujereis",
            "indujeren"
        ]
    },
    "influir": {
        "present-tense": [
            "influyo",
            "influyes",
            "influye",
            "influimos",
            "influís",
            "influyen"
        ],
        "future-tense": [
            "influiré",
            "influirás",
            "influirá",
            "influiremos",
            "influiréis",
            "influirán"
        ],
        "preterite-tense": [
            "influí",
            "influiste",
            "influyó",
            "influimos",
            "influisteis",
            "influyeron"
        ],
        "present-subjunctive-tense": [
            "influya",
            "influyas",
            "influya",
            "influyamos",
            "influyáis",
            "influyan"
        ],
        "future-subjunctive-tense": [
            "influyere",
            "influyeres",
            "influyere",
            "influyéremos",
            "influyereis",
            "influyeren"
        ]
    },
    "informar": {
        "present-tense": [
            "informo",
            "informas",
            "informa",
            "informamos",
            "informáis",
            "informan"
        ],
        "future-tense": [
            "informaré",
            "informarás",
            "informará",
            "informaremos",
            "informaréis",
            "informarán"
        ],
        "preterite-tense": [
            "informé",
            "informaste",
            "informó",
            "informamos",
            "informasteis",
            "informaron"
        ],
        "present-subjunctive-tense": [
            "informe",
            "informes",
            "informe",
            "informemos",
            "informéis",
            "informen"
        ],
        "future-subjunctive-tense": [
            "informare",
            "informares",
            "informare",
            "informáremos",
            "informareis",
            "informaren"
        ]
    },
    "iniciar": {
        "present-tense": [
            "inicio",
            "inicias",
            "inicia",
            "iniciamos",
            "iniciáis",
            "inician"
        ],
        "future-tense": [
            "iniciaré",
            "iniciarás",
            "iniciará",
            "iniciaremos",
            "iniciaréis",
            "iniciarán"
        ],
        "preterite-tense": [
            "inicié",
            "iniciaste",
            "inició",
            "iniciamos",
            "iniciasteis",
            "iniciaron"
        ],
        "present-subjunctive-tense": [
            "inicie",
            "inicies",
            "inicie",
            "iniciemos",
            "iniciéis",
            "inicien"
        ],
        "future-subjunctive-tense": [
            "iniciare",
            "iniciares",
            "iniciare",
            "iniciáremos",
            "iniciareis",
            "iniciaren"
        ]
    },
    "inmigrar": {
        "present-tense": [
            "inmigro",
            "inmigras",
            "inmigra",
            "inmigramos",
            "inmigráis",
            "inmigran"
        ],
        "future-tense": [
            "inmigraré",
            "inmigrarás",
            "inmigrará",
            "inmigraremos",
            "inmigraréis",
            "inmigrarán"
        ],
        "preterite-tense": [
            "inmigré",
            "inmigraste",
            "inmigró",
            "inmigramos",
            "inmigrasteis",
            "inmigraron"
        ],
        "present-subjunctive-tense": [
            "inmigre",
            "inmigres",
            "inmigre",
            "inmigremos",
            "inmigréis",
            "inmigren"
        ],
        "future-subjunctive-tense": [
            "inmigrare",
            "inmigrares",
            "inmigrare",
            "inmigráremos",
            "inmigrareis",
            "inmigraren"
        ]
    },
    "insultar": {
        "preterite-tense": [
            "insulté",
            "insultaste",
            "insultó",
            "insultamos",
            "insultasteis",
            "insultaron"
        ],
        "present-tense": [
            "insulto",
            "insultas",
            "insulta",
            "insultamos",
            "insultáis",
            "insultan"
        ],
        "future-tense": [
            "insultaré",
            "insultarás",
            "insultará",
            "insultaremos",
            "insultaréis",
            "insultarán"
        ],
        "present-subjunctive-tense": [
            "insulte",
            "insultes",
            "insulte",
            "insultemos",
            "insultéis",
            "insulten"
        ],
        "future-subjunctive-tense": [
            "insultare",
            "insultares",
            "insultare",
            "insultáremos",
            "insultareis",
            "insultaren"
        ]
    },
    "insistir": {
        "present-tense": [
            "insisto",
            "insistes",
            "insiste",
            "insistimos",
            "insistís",
            "insisten"
        ],
        "future-tense": [
            "insistiré",
            "insistirás",
            "insistirá",
            "insistiremos",
            "insistiréis",
            "insistirán"
        ],
        "preterite-tense": [
            "insistí",
            "insististe",
            "insistió",
            "insistimos",
            "insististeis",
            "insistieron"
        ],
        "present-subjunctive-tense": [
            "insista",
            "insistas",
            "insista",
            "insistamos",
            "insistáis",
            "insistan"
        ],
        "future-subjunctive-tense": [
            "insistiere",
            "insistieres",
            "insistiere",
            "insistiéremos",
            "insistiereis",
            "insistieren"
        ]
    },
    "instalar": {
        "present-tense": [
            "instalo",
            "instalas",
            "instala",
            "instalamos",
            "instaláis",
            "instalan"
        ],
        "future-tense": [
            "instalaré",
            "instalarás",
            "instalará",
            "instalaremos",
            "instalaréis",
            "instalarán"
        ],
        "preterite-tense": [
            "instalé",
            "instalaste",
            "instaló",
            "instalamos",
            "instalasteis",
            "instalaron"
        ],
        "present-subjunctive-tense": [
            "instale",
            "instales",
            "instale",
            "instalemos",
            "instaléis",
            "instalen"
        ],
        "future-subjunctive-tense": [
            "instalare",
            "instalares",
            "instalare",
            "instaláremos",
            "instalareis",
            "instalaren"
        ]
    },
    "intentar": {
        "present-tense": [
            "intento",
            "intentas",
            "intenta",
            "intentamos",
            "intentáis",
            "intentan"
        ],
        "future-tense": [
            "intentaré",
            "intentarás",
            "intentará",
            "intentaremos",
            "intentaréis",
            "intentarán"
        ],
        "preterite-tense": [
            "intenté",
            "intentaste",
            "intentó",
            "intentamos",
            "intentasteis",
            "intentaron"
        ],
        "present-subjunctive-tense": [
            "intente",
            "intentes",
            "intente",
            "intentemos",
            "intentéis",
            "intenten"
        ],
        "future-subjunctive-tense": [
            "intentare",
            "intentares",
            "intentare",
            "intentáremos",
            "intentareis",
            "intentaren"
        ]
    },
    "interesar": {
        "present-tense": [
            "intereso",
            "interesas",
            "interesa",
            "interesamos",
            "interesáis",
            "interesan"
        ],
        "future-tense": [
            "interesaré",
            "interesarás",
            "interesará",
            "interesaremos",
            "interesaréis",
            "interesarán"
        ],
        "preterite-tense": [
            "interesé",
            "interesaste",
            "interesó",
            "interesamos",
            "interesasteis",
            "interesaron"
        ],
        "present-subjunctive-tense": [
            "interese",
            "intereses",
            "interese",
            "interesemos",
            "intereséis",
            "interesen"
        ],
        "future-subjunctive-tense": [
            "interesare",
            "interesares",
            "interesare",
            "interesáremos",
            "interesareis",
            "interesaren"
        ]
    },
    "interpretar": {
        "present-tense": [
            "interpreto",
            "interpretas",
            "interpreta",
            "interpretamos",
            "interpretáis",
            "interpretan"
        ],
        "future-tense": [
            "interpretaré",
            "interpretarás",
            "interpretará",
            "interpretaremos",
            "interpretaréis",
            "interpretarán"
        ],
        "preterite-tense": [
            "interpreté",
            "interpretaste",
            "interpretó",
            "interpretamos",
            "interpretasteis",
            "interpretaron"
        ],
        "present-subjunctive-tense": [
            "interprete",
            "interpretes",
            "interprete",
            "interpretemos",
            "interpretéis",
            "interpreten"
        ],
        "future-subjunctive-tense": [
            "interpretare",
            "interpretares",
            "interpretare",
            "interpretáremos",
            "interpretareis",
            "interpretaren"
        ]
    },
    "introducir": {
        "present-tense": [
            "introduzco",
            "introduces",
            "introduce",
            "introducimos",
            "introducís",
            "introducen"
        ],
        "future-tense": [
            "introduciré",
            "introducirás",
            "introducirá",
            "introduciremos",
            "introduciréis",
            "introducirán"
        ],
        "preterite-tense": [
            "introduje",
            "introdujiste",
            "introdujo",
            "introdujimos",
            "introdujisteis",
            "introdujeron"
        ],
        "present-subjunctive-tense": [
            "introduzca",
            "introduzcas",
            "introduzca",
            "introduzcamos",
            "introduzcáis",
            "introduzcan"
        ],
        "future-subjunctive-tense": [
            "introdujere",
            "introdujeres",
            "introdujere",
            "introdujéremos",
            "introdujereis",
            "introdujeren"
        ]
    },
    "invadir": {
        "present-tense": [
            "invado",
            "invades",
            "invade",
            "invadimos",
            "invadís",
            "invaden"
        ],
        "future-tense": [
            "invadiré",
            "invadirás",
            "invadirá",
            "invadiremos",
            "invadiréis",
            "invadirán"
        ],
        "preterite-tense": [
            "invadí",
            "invadiste",
            "invadió",
            "invadimos",
            "invadisteis",
            "invadieron"
        ],
        "present-subjunctive-tense": [
            "invada",
            "invadas",
            "invada",
            "invadamos",
            "invadáis",
            "invadan"
        ],
        "future-subjunctive-tense": [
            "invadiere",
            "invadieres",
            "invadiere",
            "invadiéremos",
            "invadiereis",
            "invadieren"
        ]
    },
    "inventar": {
        "present-tense": [
            "invento",
            "inventas",
            "inventa",
            "inventamos",
            "inventáis",
            "inventan"
        ],
        "future-tense": [
            "inventaré",
            "inventarás",
            "inventará",
            "inventaremos",
            "inventaréis",
            "inventarán"
        ],
        "preterite-tense": [
            "inventé",
            "inventaste",
            "inventó",
            "inventamos",
            "inventasteis",
            "inventaron"
        ],
        "present-subjunctive-tense": [
            "invente",
            "inventes",
            "invente",
            "inventemos",
            "inventéis",
            "inventen"
        ],
        "future-subjunctive-tense": [
            "inventare",
            "inventares",
            "inventare",
            "inventáremos",
            "inventareis",
            "inventaren"
        ]
    },
    "invertir": {
        "present-tense": [
            "invierto",
            "inviertes",
            "invierte",
            "invertimos",
            "invertís",
            "invierten"
        ],
        "future-tense": [
            "invertiré",
            "invertirás",
            "invertirá",
            "invertiremos",
            "invertiréis",
            "invertirán"
        ],
        "preterite-tense": [
            "invertí",
            "invertiste",
            "invirtió",
            "invertimos",
            "invertisteis",
            "invirtieron"
        ],
        "present-subjunctive-tense": [
            "invierta",
            "inviertas",
            "invierta",
            "invirtamos",
            "invirtáis",
            "inviertan"
        ],
        "future-subjunctive-tense": [
            "invirtiere",
            "invirtieres",
            "invirtiere",
            "invirtiéremos",
            "invirtiereis",
            "invirtieren"
        ]
    },
    "investigar": {
        "present-tense": [
            "investigo",
            "investigas",
            "investiga",
            "investigamos",
            "investigáis",
            "investigan"
        ],
        "future-tense": [
            "investigaré",
            "investigarás",
            "investigará",
            "investigaremos",
            "investigaréis",
            "investigarán"
        ],
        "preterite-tense": [
            "investigué",
            "investigaste",
            "investigó",
            "investigamos",
            "investigasteis",
            "investigaron"
        ],
        "present-subjunctive-tense": [
            "investigue",
            "investigues",
            "investigue",
            "investiguemos",
            "investiguéis",
            "investiguen"
        ],
        "future-subjunctive-tense": [
            "investigare",
            "investigares",
            "investigare",
            "investigáremos",
            "investigareis",
            "investigaren"
        ]
    },
    "invitar": {
        "present-tense": [
            "invito",
            "invitas",
            "invita",
            "invitamos",
            "invitáis",
            "invitan"
        ],
        "future-tense": [
            "invitaré",
            "invitarás",
            "invitará",
            "invitaremos",
            "invitaréis",
            "invitarán"
        ],
        "preterite-tense": [
            "invité",
            "invitaste",
            "invitó",
            "invitamos",
            "invitasteis",
            "invitaron"
        ],
        "present-subjunctive-tense": [
            "invite",
            "invites",
            "invite",
            "invitemos",
            "invitéis",
            "inviten"
        ],
        "future-subjunctive-tense": [
            "invitare",
            "invitares",
            "invitare",
            "invitáremos",
            "invitareis",
            "invitaren"
        ]
    },
    "invocar": {
        "present-tense": [
            "invoco",
            "invocas",
            "invoca",
            "invocamos",
            "invocáis",
            "invocan"
        ],
        "future-tense": [
            "invocaré",
            "invocarás",
            "invocará",
            "invocaremos",
            "invocaréis",
            "invocarán"
        ],
        "preterite-tense": [
            "invoqué",
            "invocaste",
            "invocó",
            "invocamos",
            "invocasteis",
            "invocaron"
        ],
        "present-subjunctive-tense": [
            "invoque",
            "invoques",
            "invoque",
            "invoquemos",
            "invoquéis",
            "invoquen"
        ],
        "future-subjunctive-tense": [
            "invocare",
            "invocares",
            "invocare",
            "invocáremos",
            "invocareis",
            "invocaren"
        ]
    },
    "ir": {
        "present-tense": [
            "voy",
            "vas",
            "va",
            "vamos",
            "vais",
            "van"
        ],
        "future-tense": [
            "iré",
            "irás",
            "irá",
            "iremos",
            "iréis",
            "irán"
        ],
        "preterite-tense": [
            "fui",
            "fuiste",
            "fue",
            "fuimos",
            "fuisteis",
            "fueron"
        ],
        "present-subjunctive-tense": [
            "vaya",
            "vayas",
            "vaya",
            "vayamos",
            "vayáis",
            "vayan"
        ],
        "future-subjunctive-tense": [
            "fuere",
            "fueres",
            "fuere",
            "fuéremos",
            "fuereis",
            "fueren"
        ]
    },
    "irse": {
        "present-tense": [
            "me voy",
            "te vas",
            "se va",
            "nos vamos",
            "os vais",
            "se van"
        ],
        "future-tense": [
            "me iré",
            "te irás",
            "se irá",
            "nos iremos",
            "os iréis",
            "se irán"
        ],
        "preterite-tense": [
            "me fui",
            "te fuiste",
            "se fue",
            "nos fuimos",
            "os fuisteis",
            "se fueron"
        ],
        "present-subjunctive-tense": [
            "me vaya",
            "te vayas",
            "se vaya",
            "nos vayamos",
            "os vayáis",
            "se vayan"
        ],
        "future-subjunctive-tense": [
            "me fuere",
            "te fueres",
            "se fuere",
            "nos fuéremos",
            "os fuereis",
            "se fueren"
        ]
    },
    "jactarse": {
        "present-tense": [
            "me jacto",
            "te jactas",
            "se jacta",
            "nos jactamos",
            "os jactáis",
            "se jactan"
        ],
        "future-tense": [
            "me jactaré",
            "te jactarás",
            "se jactará",
            "nos jactaremos",
            "os jactaréis",
            "se jactarán"
        ],
        "preterite-tense": [
            "me jacté",
            "te jactaste",
            "se jactó",
            "nos jactamos",
            "os jactasteis",
            "se jactaron"
        ],
        "present-subjunctive-tense": [
            "me jacte",
            "te jactes",
            "se jacte",
            "nos jactemos",
            "os jactéis",
            "se jacten"
        ],
        "future-subjunctive-tense": [
            "me jactare",
            "te jactares",
            "se jactare",
            "nos jactáremos",
            "os jactareis",
            "se jactaren"
        ]
    },
    "jugar": {
        "present-tense": [
            "juego",
            "juegas",
            "juega",
            "jugamos",
            "jugáis",
            "juegan"
        ],
        "future-tense": [
            "jugaré",
            "jugarás",
            "jugará",
            "jugaremos",
            "jugaréis",
            "jugarán"
        ],
        "preterite-tense": [
            "jugué",
            "jugaste",
            "jugó",
            "jugamos",
            "jugasteis",
            "jugaron"
        ],
        "present-subjunctive-tense": [
            "juegue",
            "juegues",
            "juegue",
            "juguemos",
            "juguéis",
            "jueguen"
        ],
        "future-subjunctive-tense": [
            "jugare",
            "jugares",
            "jugare",
            "jugáremos",
            "jugareis",
            "jugaren"
        ]
    },
    "juntar": {
        "present-tense": [
            "junto",
            "juntas",
            "junta",
            "juntamos",
            "juntáis",
            "juntan"
        ],
        "future-tense": [
            "juntaré",
            "juntarás",
            "juntará",
            "juntaremos",
            "juntaréis",
            "juntarán"
        ],
        "preterite-tense": [
            "junté",
            "juntaste",
            "juntó",
            "juntamos",
            "juntasteis",
            "juntaron"
        ],
        "present-subjunctive-tense": [
            "junte",
            "juntes",
            "junte",
            "juntemos",
            "juntéis",
            "junten"
        ],
        "future-subjunctive-tense": [
            "juntare",
            "juntares",
            "juntare",
            "juntáremos",
            "juntareis",
            "juntaren"
        ]
    },
    "juntarse": {
        "present-tense": [
            "me junto",
            "te juntas",
            "se junta",
            "nos juntamos",
            "os juntáis",
            "se juntan"
        ],
        "future-tense": [
            "me juntaré",
            "te juntarás",
            "se juntará",
            "nos juntaremos",
            "os juntaréis",
            "se juntarán"
        ],
        "preterite-tense": [
            "me junté",
            "te juntaste",
            "se juntó",
            "nos juntamos",
            "os juntasteis",
            "se juntaron"
        ],
        "present-subjunctive-tense": [
            "me junte",
            "te juntes",
            "se junte",
            "nos juntemos",
            "os juntéis",
            "se junten"
        ],
        "future-subjunctive-tense": [
            "me juntare",
            "te juntares",
            "se juntare",
            "nos juntáremos",
            "os juntareis",
            "se juntaren"
        ]
    },
    "jurar": {
        "present-tense": [
            "juro",
            "juras",
            "jura",
            "juramos",
            "juráis",
            "juran"
        ],
        "future-tense": [
            "juraré",
            "jurarás",
            "jurará",
            "juraremos",
            "juraréis",
            "jurarán"
        ],
        "preterite-tense": [
            "juré",
            "juraste",
            "juró",
            "juramos",
            "jurasteis",
            "juraron"
        ],
        "present-subjunctive-tense": [
            "jure",
            "jures",
            "jure",
            "juremos",
            "juréis",
            "juren"
        ],
        "future-subjunctive-tense": [
            "jurare",
            "jurares",
            "jurare",
            "juráremos",
            "jurareis",
            "juraren"
        ]
    },
    "ladrar": {
        "present-tense": [
            "ladro",
            "ladras",
            "ladra",
            "ladramos",
            "ladráis",
            "ladran"
        ],
        "future-tense": [
            "ladraré",
            "ladrarás",
            "ladrará",
            "ladraremos",
            "ladraréis",
            "ladrarán"
        ],
        "preterite-tense": [
            "ladré",
            "ladraste",
            "ladró",
            "ladramos",
            "ladrasteis",
            "ladraron"
        ],
        "present-subjunctive-tense": [
            "ladre",
            "ladres",
            "ladre",
            "ladremos",
            "ladréis",
            "ladren"
        ],
        "future-subjunctive-tense": [
            "ladrare",
            "ladrares",
            "ladrare",
            "ladráremos",
            "ladrareis",
            "ladraren"
        ]
    },
    "lamentar": {
        "present-tense": [
            "lamento",
            "lamentas",
            "lamenta",
            "lamentamos",
            "lamentáis",
            "lamentan"
        ],
        "future-tense": [
            "lamentaré",
            "lamentarás",
            "lamentará",
            "lamentaremos",
            "lamentaréis",
            "lamentarán"
        ],
        "preterite-tense": [
            "lamenté",
            "lamentaste",
            "lamentó",
            "lamentamos",
            "lamentasteis",
            "lamentaron"
        ],
        "present-subjunctive-tense": [
            "lamente",
            "lamentes",
            "lamente",
            "lamentemos",
            "lamentéis",
            "lamenten"
        ],
        "future-subjunctive-tense": [
            "lamentare",
            "lamentares",
            "lamentare",
            "lamentáremos",
            "lamentareis",
            "lamentaren"
        ]
    },
    "lanzar": {
        "present-tense": [
            "lanzo",
            "lanzas",
            "lanza",
            "lanzamos",
            "lanzáis",
            "lanzan"
        ],
        "future-tense": [
            "lanzaré",
            "lanzarás",
            "lanzará",
            "lanzaremos",
            "lanzaréis",
            "lanzarán"
        ],
        "preterite-tense": [
            "lancé",
            "lanzaste",
            "lanzó",
            "lanzamos",
            "lanzasteis",
            "lanzaron"
        ],
        "present-subjunctive-tense": [
            "lance",
            "lances",
            "lance",
            "lancemos",
            "lancéis",
            "lancen"
        ],
        "future-subjunctive-tense": [
            "lanzare",
            "lanzares",
            "lanzare",
            "lanzáremos",
            "lanzareis",
            "lanzaren"
        ]
    },
    "lastimar": {
        "present-tense": [
            "lastimo",
            "lastimas",
            "lastima",
            "lastimamos",
            "lastimáis",
            "lastiman"
        ],
        "future-tense": [
            "lastimaré",
            "lastimarás",
            "lastimará",
            "lastimaremos",
            "lastimaréis",
            "lastimarán"
        ],
        "preterite-tense": [
            "lastimé",
            "lastimaste",
            "lastimó",
            "lastimamos",
            "lastimasteis",
            "lastimaron"
        ],
        "present-subjunctive-tense": [
            "lastime",
            "lastimes",
            "lastime",
            "lastimemos",
            "lastiméis",
            "lastimen"
        ],
        "future-subjunctive-tense": [
            "lastimare",
            "lastimares",
            "lastimare",
            "lastimáremos",
            "lastimareis",
            "lastimaren"
        ]
    },
    "lavar": {
        "present-tense": [
            "lavo",
            "lavas",
            "lava",
            "lavamos",
            "laváis",
            "lavan"
        ],
        "future-tense": [
            "lavaré",
            "lavarás",
            "lavará",
            "lavaremos",
            "lavaréis",
            "lavarán"
        ],
        "preterite-tense": [
            "lavé",
            "lavaste",
            "lavó",
            "lavamos",
            "lavasteis",
            "lavaron"
        ],
        "present-subjunctive-tense": [
            "lave",
            "laves",
            "lave",
            "lavemos",
            "lavéis",
            "laven"
        ],
        "future-subjunctive-tense": [
            "lavare",
            "lavares",
            "lavare",
            "laváremos",
            "lavareis",
            "lavaren"
        ]
    },
    "lavarse": {
        "present-tense": [
            "me lavo",
            "te lavas",
            "se lava",
            "nos lavamos",
            "os laváis",
            "se lavan"
        ],
        "future-tense": [
            "me lavaré",
            "te lavarás",
            "se lavará",
            "nos lavaremos",
            "os lavaréis",
            "se lavarán"
        ],
        "preterite-tense": [
            "me lavé",
            "te lavaste",
            "se lavó",
            "nos lavamos",
            "lavasteis",
            "se lavaron"
        ],
        "present-subjunctive-tense": [
            "me lave",
            "te laves",
            "se lave",
            "nos lavemos",
            "os lavéis",
            "se laven"
        ],
        "future-subjunctive-tense": [
            "me lavare",
            "te lavares",
            "se lavare",
            "nos laváremos",
            "os lavareis",
            "se lavaren"
        ]
    },
    "leer": {
        "present-tense": [
            "leo",
            "lees",
            "lee",
            "leemos",
            "leéis",
            "leen"
        ],
        "future-tense": [
            "leeré",
            "leerás",
            "leerá",
            "leeremos",
            "leeréis",
            "leerán"
        ],
        "preterite-tense": [
            "leí",
            "leíste",
            "leyó",
            "leímos",
            "leísteis",
            "leyeron"
        ],
        "present-subjunctive-tense": [
            "lea",
            "leas",
            "lea",
            "leamos",
            "leáis",
            "lean"
        ],
        "future-subjunctive-tense": [
            "leyere",
            "leyeres",
            "leyere",
            "leyéremos",
            "leyereis",
            "leyeren"
        ]
    },
    "legalizar": {
        "present-tense": [
            "legalizo",
            "legalizas",
            "legaliza",
            "legalizamos",
            "legalizáis",
            "legalizan"
        ],
        "future-tense": [
            "legalizaré",
            "legalizarás",
            "legalizará",
            "legalizaremos",
            "legalizaréis",
            "legalizarán"
        ],
        "preterite-tense": [
            "legalicé",
            "legalizaste",
            "legalizó",
            "legalizamos",
            "legalizasteis",
            "legalizaron"
        ],
        "present-subjunctive-tense": [
            "legalice",
            "legalices",
            "legalice",
            "legalicemos",
            "legalicéis",
            "legalicen"
        ],
        "future-subjunctive-tense": [
            "legalizare",
            "legalizares",
            "legalizare",
            "legalizáremos",
            "legalizareis",
            "legalizaren"
        ]
    },
    "levantar": {
        "present-tense": [
            "levanto",
            "levantas",
            "levanta",
            "levantamos",
            "levantáis",
            "levantan"
        ],
        "future-tense": [
            "levantaré",
            "levantarás",
            "levantará",
            "levantaremos",
            "levantaréis",
            "levantarán"
        ],
        "preterite-tense": [
            "levanté",
            "levantaste",
            "levantó",
            "levantamos",
            "levantasteis",
            "levantaron"
        ],
        "present-subjunctive-tense": [
            "levante",
            "levantes",
            "levante",
            "levantemos",
            "levantéis",
            "levanten"
        ],
        "future-subjunctive-tense": [
            "levantare",
            "levantares",
            "levantare",
            "levantáremos",
            "levantareis",
            "levantaren"
        ]
    },
    "levantarse": {
        "present-tense": [
            "me levanto",
            "te levantas",
            "se levanta",
            "nos levantamos",
            "os levantáis",
            "se levantan"
        ],
        "future-tense": [
            "me levantaré",
            "te levantarás",
            "se levantará",
            "nos levantaremos",
            "os levantaréis",
            "se levantarán"
        ],
        "preterite-tense": [
            "me levanté",
            "te levantaste",
            "se levantó",
            "nos levantamos",
            "levantasteis",
            "se levantaron"
        ],
        "present-subjunctive-tense": [
            "me levante",
            "te levantes",
            "se levante",
            "nos levantemos",
            "os levantéis",
            "se levanten"
        ],
        "future-subjunctive-tense": [
            "me levantare",
            "te levantares",
            "se levantare",
            "nos levantáremos",
            "os levantareis",
            "se levantaren"
        ]
    },
    "limpiar": {
        "present-tense": [
            "limpio",
            "limpias",
            "limpia",
            "limpiamos",
            "limpiáis",
            "limpian"
        ],
        "future-tense": [
            "limpiaré",
            "limpiarás",
            "limpiará",
            "limpiaremos",
            "limpiaréis",
            "limpiarán"
        ],
        "preterite-tense": [
            "limpié",
            "limpiaste",
            "limpió",
            "limpiamos",
            "limpiasteis",
            "limpiaron"
        ],
        "present-subjunctive-tense": [
            "limpie",
            "limpies",
            "limpie",
            "limpiemos",
            "limpiéis",
            "limpien"
        ],
        "future-subjunctive-tense": [
            "limpiare",
            "limpiares",
            "limpiare",
            "limpiáremos",
            "limpiareis",
            "limpiaren"
        ]
    },
    "llamar": {
        "present-tense": [
            "llamo",
            "llamas",
            "llama",
            "llamamos",
            "llamáis",
            "llaman"
        ],
        "future-tense": [
            "llamaré",
            "llamarás",
            "llamará",
            "llamaremos",
            "llamaréis",
            "llamarán"
        ],
        "preterite-tense": [
            "llamé",
            "llamaste",
            "llamó",
            "llamamos",
            "llamasteis",
            "llamaron"
        ],
        "present-subjunctive-tense": [
            "llame",
            "llames",
            "llame",
            "llamemos",
            "llaméis",
            "llamen"
        ],
        "future-subjunctive-tense": [
            "llamare",
            "llamares",
            "llamare",
            "llamáremos",
            "llamareis",
            "llamaren"
        ]
    },
    "llamarse": {
        "present-tense": [
            "me llamo",
            "te llamas",
            "se llama",
            "nos llamamos",
            "os llamáis",
            "se llaman"
        ],
        "future-tense": [
            "me llamaré",
            "te llamarás",
            "se llamará",
            "nos llamaremos",
            "os llamaréis",
            "se llamarán"
        ],
        "preterite-tense": [
            "me llamé",
            "te llamaste",
            "se llamó",
            "nos llamamos",
            "os llamasteis",
            "se llamaron"
        ],
        "present-subjunctive-tense": [
            "me llame",
            "te llames",
            "se llame",
            "nos llamemos",
            "os llaméis",
            "se llamen"
        ],
        "future-subjunctive-tense": [
            "me llamare",
            "te llamares",
            "se llamare",
            "nos llamáremos",
            "os llamareis",
            "se llamaren"
        ]
    },
    "llegar": {
        "present-tense": [
            "llego",
            "llegas",
            "llega",
            "llegamos",
            "llegáis",
            "llegan"
        ],
        "future-tense": [
            "llegaré",
            "llegarás",
            "llegará",
            "llegaremos",
            "llegaréis",
            "llegarán"
        ],
        "preterite-tense": [
            "llegué",
            "llegaste",
            "llegó",
            "llegamos",
            "llegasteis",
            "llegaron"
        ],
        "present-subjunctive-tense": [
            "llegue",
            "llegues",
            "llegue",
            "lleguemos",
            "lleguéis",
            "lleguen"
        ],
        "future-subjunctive-tense": [
            "llegare",
            "llegares",
            "llegare",
            "llegáremos",
            "llegareis",
            "llegaren"
        ]
    },
    "llenar": {
        "present-tense": [
            "lleno",
            "llenas",
            "llena",
            "llenamos",
            "llenáis",
            "llenan"
        ],
        "future-tense": [
            "llenaré",
            "llenarás",
            "llenará",
            "llenaremos",
            "llenaréis",
            "llenarán"
        ],
        "preterite-tense": [
            "llené",
            "llenaste",
            "llenó",
            "llenamos",
            "llenasteis",
            "llenaron"
        ],
        "present-subjunctive-tense": [
            "llene",
            "llenes",
            "llene",
            "llenemos",
            "llenéis",
            "llenen"
        ],
        "future-subjunctive-tense": [
            "llenare",
            "llenares",
            "llenare",
            "llenáremos",
            "llenareis",
            "llenaren"
        ]
    },
    "llevar": {
        "present-tense": [
            "llevo",
            "llevas",
            "lleva",
            "llevamos",
            "lleváis",
            "llevan"
        ],
        "future-tense": [
            "llevaré",
            "llevarás",
            "llevará",
            "llevaremos",
            "llevaréis",
            "llevarán"
        ],
        "preterite-tense": [
            "llevé",
            "llevaste",
            "llevó",
            "llevamos",
            "llevasteis",
            "llevaron"
        ],
        "present-subjunctive-tense": [
            "lleve",
            "lleves",
            "lleve",
            "llevemos",
            "llevéis",
            "lleven"
        ],
        "future-subjunctive-tense": [
            "llevare",
            "llevares",
            "llevare",
            "lleváremos",
            "llevareis",
            "llevaren"
        ]
    },
    "llorar": {
        "present-tense": [
            "lloro",
            "lloras",
            "llora",
            "lloramos",
            "lloráis",
            "lloran"
        ],
        "future-tense": [
            "lloraré",
            "llorarás",
            "llorará",
            "lloraremos",
            "lloraréis",
            "llorarán"
        ],
        "preterite-tense": [
            "lloré",
            "lloraste",
            "lloró",
            "lloramos",
            "llorasteis",
            "lloraron"
        ],
        "present-subjunctive-tense": [
            "llore",
            "llores",
            "llore",
            "lloremos",
            "lloréis",
            "lloren"
        ],
        "future-subjunctive-tense": [
            "llorare",
            "llorares",
            "llorare",
            "lloráremos",
            "llorareis",
            "lloraren"
        ]
    },
    "llover": {
        "present-tense": [
            "",
            "",
            "llueve",
            "",
            "",
            ""
        ],
        "future-tense": [
            "",
            "",
            "lloverá",
            "",
            "",
            ""
        ],
        "preterite-tense": [
            "",
            "",
            "llovió",
            "",
            "",
            ""
        ],
        "present-subjunctive-tense": [
            "",
            "",
            "llueva",
            "",
            "",
            ""
        ],
        "future-subjunctive-tense": [
            "",
            "",
            "lloviere",
            "",
            "",
            ""
        ]
    },
    "lograr": {
        "present-tense": [
            "logro",
            "logras",
            "logra",
            "logramos",
            "lográis",
            "logran"
        ],
        "future-tense": [
            "lograré",
            "lograrás",
            "logrará",
            "lograremos",
            "lograréis",
            "lograrán"
        ],
        "preterite-tense": [
            "logré",
            "lograste",
            "logró",
            "logramos",
            "lograsteis",
            "lograron"
        ],
        "present-subjunctive-tense": [
            "logre",
            "logres",
            "logre",
            "logremos",
            "logréis",
            "logren"
        ],
        "future-subjunctive-tense": [
            "lograre",
            "lograres",
            "lograre",
            "lográremos",
            "lograreis",
            "lograren"
        ]
    },
    "luchar": {
        "present-tense": [
            "lucho",
            "luchas",
            "lucha",
            "luchamos",
            "lucháis",
            "luchan"
        ],
        "future-tense": [
            "lucharé",
            "lucharás",
            "luchará",
            "lucharemos",
            "lucharéis",
            "lucharán"
        ],
        "preterite-tense": [
            "luché",
            "luchaste",
            "luchó",
            "luchamos",
            "luchasteis",
            "lucharon"
        ],
        "present-subjunctive-tense": [
            "luche",
            "luches",
            "luche",
            "luchemos",
            "luchéis",
            "luchen"
        ],
        "future-subjunctive-tense": [
            "luchare",
            "luchares",
            "luchare",
            "lucháremos",
            "luchareis",
            "lucharen"
        ]
    },
    "madurar": {
        "present-tense": [
            "maduro",
            "maduras",
            "madura",
            "maduramos",
            "maduráis",
            "maduran"
        ],
        "future-tense": [
            "maduraré",
            "madurarás",
            "madurará",
            "maduraremos",
            "maduraréis",
            "madurarán"
        ],
        "preterite-tense": [
            "maduré",
            "maduraste",
            "maduró",
            "maduramos",
            "madurasteis",
            "maduraron"
        ],
        "present-subjunctive-tense": [
            "madure",
            "madures",
            "madure",
            "maduremos",
            "maduréis",
            "maduren"
        ],
        "future-subjunctive-tense": [
            "madurare",
            "madurares",
            "madurare",
            "maduráremos",
            "madurareis",
            "maduraren"
        ]
    },
    "mandar": {
        "present-tense": [
            "mando",
            "mandas",
            "manda",
            "mandamos",
            "mandáis",
            "mandan"
        ],
        "future-tense": [
            "mandaré",
            "mandarás",
            "mandará",
            "mandaremos",
            "mandaréis",
            "mandarán"
        ],
        "preterite-tense": [
            "mandé",
            "mandaste",
            "mandó",
            "mandamos",
            "mandasteis",
            "mandaron"
        ],
        "present-subjunctive-tense": [
            "mande",
            "mandes",
            "mande",
            "mandemos",
            "mandéis",
            "manden"
        ],
        "future-subjunctive-tense": [
            "mandare",
            "mandares",
            "mandare",
            "mandáremos",
            "mandareis",
            "mandaren"
        ]
    },
    "manejar": {
        "present-tense": [
            "manejo",
            "manejas",
            "maneja",
            "manejamos",
            "manejáis",
            "manejan"
        ],
        "future-tense": [
            "manejaré",
            "manejarás",
            "manejará",
            "manejaremos",
            "manejaréis",
            "manejarán"
        ],
        "preterite-tense": [
            "manejé",
            "manejaste",
            "manejó",
            "manejamos",
            "manejasteis",
            "manejaron"
        ],
        "present-subjunctive-tense": [
            "maneje",
            "manejes",
            "maneje",
            "manejemos",
            "manejéis",
            "manejen"
        ],
        "future-subjunctive-tense": [
            "manejare",
            "manejares",
            "manejare",
            "manejáremos",
            "manejareis",
            "manejaren"
        ]
    },
    "mantener": {
        "present-tense": [
            "mantengo",
            "mantienes",
            "mantiene",
            "mantenemos",
            "mantenéis",
            "mantienen"
        ],
        "future-tense": [
            "mantendré",
            "mantendrás",
            "mantendrá",
            "mantendremos",
            "mantendréis",
            "mantendrán"
        ],
        "preterite-tense": [
            "mantuve",
            "mantuviste",
            "mantuvo",
            "mantuvimos",
            "mantuvisteis",
            "mantuvieron"
        ],
        "present-subjunctive-tense": [
            "mantenga",
            "mantengas",
            "mantenga",
            "mantengamos",
            "mantengáis",
            "mantengan"
        ],
        "future-subjunctive-tense": [
            "mantuviere",
            "mantuvieres",
            "mantuviere",
            "mantuviéremos",
            "mantuviereis",
            "mantuvieren"
        ]
    },
    "maquillar": {
        "present-tense": [
            "maquillo",
            "maquillas",
            "maquilla",
            "maquillamos",
            "maquilláis",
            "maquillan"
        ],
        "future-tense": [
            "maquillaré",
            "maquillarás",
            "maquillará",
            "maquillaremos",
            "maquillaréis",
            "maquillarán"
        ],
        "preterite-tense": [
            "maquillé",
            "maquillaste",
            "maquilló",
            "maquillamos",
            "maquillasteis",
            "maquillaron"
        ],
        "present-subjunctive-tense": [
            "maquille",
            "maquilles",
            "maquille",
            "maquillemos",
            "maquilléis",
            "maquillen"
        ],
        "future-subjunctive-tense": [
            "maquillare",
            "maquillares",
            "maquillare",
            "maquilláremos",
            "maquillareis",
            "maquillaren"
        ]
    },
    "maquillarse": {
        "present-tense": [
            "me maquillo",
            "te maquillas",
            "se maquilla",
            "nos maquillamos",
            "os maquilláis",
            "se maquillan"
        ],
        "future-tense": [
            "me maquillaré",
            "te maquillarás",
            "se maquillará",
            "nos maquillaremos",
            "os maquillaréis",
            "se maquillarán"
        ],
        "preterite-tense": [
            "me maquillé",
            "te maquillaste",
            "se maquilló",
            "nos maquillamos",
            "os maquillasteis",
            "se maquillaron"
        ],
        "present-subjunctive-tense": [
            "me maquille",
            "te maquilles",
            "se maquille",
            "nos maquillemos",
            "os maquilléis",
            "se maquillen"
        ],
        "future-subjunctive-tense": [
            "me maquillare",
            "te maquillares",
            "se maquillare",
            "nos maquilláremos",
            "os maquillareis",
            "se maquillaren"
        ]
    },
    "marcar": {
        "present-tense": [
            "marco",
            "marcas",
            "marca",
            "marcamos",
            "marcáis",
            "marcan"
        ],
        "future-tense": [
            "marcaré",
            "marcarás",
            "marcará",
            "marcaremos",
            "marcaréis",
            "marcarán"
        ],
        "preterite-tense": [
            "marqué",
            "marcaste",
            "marcó",
            "marcamos",
            "marcasteis",
            "marcaron"
        ],
        "present-subjunctive-tense": [
            "marque",
            "marques",
            "marque",
            "marquemos",
            "marquéis",
            "marquen"
        ],
        "future-subjunctive-tense": [
            "marcare",
            "marcares",
            "marcare",
            "marcáremos",
            "marcareis",
            "marcaren"
        ]
    },
    "masticar": {
        "present-tense": [
            "mastico",
            "masticas",
            "mastica",
            "masticamos",
            "masticáis",
            "mastican"
        ],
        "future-tense": [
            "masticaré",
            "masticarás",
            "masticará",
            "masticaremos",
            "masticaréis",
            "masticarán"
        ],
        "preterite-tense": [
            "mastiqué",
            "masticaste",
            "masticó",
            "masticamos",
            "masticasteis",
            "masticaron"
        ],
        "present-subjunctive-tense": [
            "mastique",
            "mastiques",
            "mastique",
            "mastiquemos",
            "mastiquéis",
            "mastiquen"
        ],
        "future-subjunctive-tense": [
            "masticare",
            "masticares",
            "masticare",
            "masticáremos",
            "masticareis",
            "masticaren"
        ]
    },
    "matar": {
        "present-tense": [
            "mato",
            "matas",
            "mata",
            "matamos",
            "matáis",
            "matan"
        ],
        "future-tense": [
            "mataré",
            "matarás",
            "matará",
            "mataremos",
            "mataréis",
            "matarán"
        ],
        "preterite-tense": [
            "maté",
            "mataste",
            "mató",
            "matamos",
            "matasteis",
            "mataron"
        ],
        "present-subjunctive-tense": [
            "mate",
            "mates",
            "mate",
            "matemos",
            "matéis",
            "maten"
        ],
        "future-subjunctive-tense": [
            "matare",
            "matares",
            "matare",
            "matáremos",
            "matareis",
            "mataren"
        ]
    },
    "matricular": {
        "present-tense": [
            "matriculo",
            "matriculas",
            "matricula",
            "matriculamos",
            "matriculáis",
            "matriculan"
        ],
        "future-tense": [
            "matricularé",
            "matricularás",
            "matriculará",
            "matricularemos",
            "matricularéis",
            "matricularán"
        ],
        "preterite-tense": [
            "matriculé",
            "matriculaste",
            "matriculó",
            "matriculamos",
            "matriculasteis",
            "matricularon"
        ],
        "present-subjunctive-tense": [
            "matricule",
            "matricules",
            "matricule",
            "matriculemos",
            "matriculéis",
            "matriculen"
        ],
        "future-subjunctive-tense": [
            "matriculare",
            "matriculares",
            "matriculare",
            "matriculáremos",
            "matriculareis",
            "matricularen"
        ]
    },
    "matricularse": {
        "present-tense": [
            "me matriculo",
            "te matriculas",
            "se matricula",
            "nos matriculamos",
            "os matriculáis",
            "se matriculan"
        ],
        "future-tense": [
            "me matricularé",
            "te matricularás",
            "se matriculará",
            "nos matricularemos",
            "os matricularéis",
            "se matricularán"
        ],
        "preterite-tense": [
            "me matriculé",
            "te matriculaste",
            "se matriculó",
            "nos matriculamos",
            "os matriculasteis",
            "se matricularon"
        ],
        "present-subjunctive-tense": [
            "me matricule",
            "te matricules",
            "se matricule",
            "nos matriculemos",
            "os matriculéis",
            "se matriculen"
        ],
        "future-subjunctive-tense": [
            "me matriculare",
            "te matriculares",
            "se matriculare",
            "nos matriculáremos",
            "os matriculareis",
            "se matricularen"
        ]
    },
    "medir": {
        "present-tense": [
            "mido",
            "mides",
            "mide",
            "medimos",
            "medís",
            "miden"
        ],
        "future-tense": [
            "mediré",
            "medirás",
            "medirá",
            "mediremos",
            "mediréis",
            "medirán"
        ],
        "preterite-tense": [
            "medí",
            "mediste",
            "midió",
            "medimos",
            "medisteis",
            "midieron"
        ],
        "present-subjunctive-tense": [
            "mida",
            "midas",
            "mida",
            "midamos",
            "midáis",
            "midan"
        ],
        "future-subjunctive-tense": [
            "midiere",
            "midieres",
            "midiere",
            "midiéremos",
            "midiereis",
            "midieren"
        ]
    },
    "mentir": {
        "present-tense": [
            "miento",
            "mientes",
            "miente",
            "mentimos",
            "mentís",
            "mienten"
        ],
        "future-tense": [
            "mentiré",
            "mentirás",
            "mentirá",
            "mentiremos",
            "mentiréis",
            "mentirán"
        ],
        "preterite-tense": [
            "mentí",
            "mentiste",
            "mintió",
            "mentimos",
            "mentisteis",
            "mintieron"
        ],
        "present-subjunctive-tense": [
            "mienta",
            "mientas",
            "mienta",
            "mintamos",
            "mintáis",
            "mientan"
        ],
        "future-subjunctive-tense": [
            "mintiere",
            "mintieres",
            "mintiere",
            "mintiéremos",
            "mintiereis",
            "mintieren"
        ]
    },
    "merecer": {
        "present-tense": [
            "merezco",
            "mereces",
            "merece",
            "merecemos",
            "merecéis",
            "merecen"
        ],
        "future-tense": [
            "mereceré",
            "merecerás",
            "merecerá",
            "mereceremos",
            "mereceréis",
            "merecerán"
        ],
        "preterite-tense": [
            "merecí",
            "mereciste",
            "mereció",
            "merecimos",
            "merecisteis",
            "merecieron"
        ],
        "present-subjunctive-tense": [
            "merezca",
            "merezcas",
            "merezca",
            "merezcamos",
            "merezcáis",
            "merezcan"
        ],
        "future-subjunctive-tense": [
            "mereciere",
            "merecieres",
            "mereciere",
            "mereciéremos",
            "mereciereis",
            "merecieren"
        ]
    },
    "merendar": {
        "present-tense": [
            "meriendo",
            "meriendas",
            "merienda",
            "merendamos",
            "merendáis",
            "meriendan"
        ],
        "future-tense": [
            "merendaré",
            "merendarás",
            "merendará",
            "merendaremos",
            "merendaréis",
            "merendarán"
        ],
        "preterite-tense": [
            "merendé",
            "merendaste",
            "merendó",
            "merendamos",
            "merendasteis",
            "merendaron"
        ],
        "present-subjunctive-tense": [
            "meriende",
            "meriendes",
            "meriende",
            "merendemos",
            "merendéis",
            "merienden"
        ],
        "future-subjunctive-tense": [
            "merendare",
            "merendares",
            "merendare",
            "merendáremos",
            "merendareis",
            "merendaren"
        ]
    },
    "meter": {
        "present-tense": [
            "meto",
            "metes",
            "mete",
            "metemos",
            "metéis",
            "meten"
        ],
        "future-tense": [
            "meteré",
            "meterás",
            "meterá",
            "meteremos",
            "meteréis",
            "meterán"
        ],
        "preterite-tense": [
            "metí",
            "metiste",
            "metió",
            "metimos",
            "metisteis",
            "metieron"
        ],
        "present-subjunctive-tense": [
            "meta",
            "metas",
            "meta",
            "metamos",
            "metáis",
            "metan"
        ],
        "future-subjunctive-tense": [
            "metiere",
            "metieres",
            "metiere",
            "metiéremos",
            "metiereis",
            "metieren"
        ]
    },
    "mezclar": {
        "present-tense": [
            "mezclo",
            "mezclas",
            "mezcla",
            "mezclamos",
            "mezcláis",
            "mezclan"
        ],
        "future-tense": [
            "mezclaré",
            "mezclarás",
            "mezclará",
            "mezclaremos",
            "mezclaréis",
            "mezclarán"
        ],
        "preterite-tense": [
            "mezclé",
            "mezclaste",
            "mezcló",
            "mezclamos",
            "mezclasteis",
            "mezclaron"
        ],
        "present-subjunctive-tense": [
            "mezcle",
            "mezcles",
            "mezcle",
            "mezclemos",
            "mezcléis",
            "mezclen"
        ],
        "future-subjunctive-tense": [
            "mezclare",
            "mezclares",
            "mezclare",
            "mezcláremos",
            "mezclareis",
            "mezclaren"
        ]
    },
    "mirar": {
        "present-tense": [
            "miro",
            "miras",
            "mira",
            "miramos",
            "miráis",
            "miran"
        ],
        "future-tense": [
            "miraré",
            "mirarás",
            "mirará",
            "miraremos",
            "miraréis",
            "mirarán"
        ],
        "preterite-tense": [
            "miré",
            "miraste",
            "miró",
            "miramos",
            "mirasteis",
            "miraron"
        ],
        "present-subjunctive-tense": [
            "mire",
            "mires",
            "mire",
            "miremos",
            "miréis",
            "miren"
        ],
        "future-subjunctive-tense": [
            "mirare",
            "mirares",
            "mirare",
            "miráremos",
            "mirareis",
            "miraren"
        ]
    },
    "modificar": {
        "present-tense": [
            "modifico",
            "modificas",
            "modifica",
            "modificamos",
            "modificáis",
            "modifican"
        ],
        "future-tense": [
            "modificaré",
            "modificarás",
            "modificará",
            "modificaremos",
            "modificaréis",
            "modificarán"
        ],
        "preterite-tense": [
            "modifiqué",
            "modificaste",
            "modificó",
            "modificamos",
            "modificasteis",
            "modificaron"
        ],
        "present-subjunctive-tense": [
            "modifique",
            "modifiques",
            "modifique",
            "modifiquemos",
            "modifiquéis",
            "modifiquen"
        ],
        "future-subjunctive-tense": [
            "modificare",
            "modificares",
            "modificare",
            "modificáremos",
            "modificareis",
            "modificaren"
        ]
    },
    "molestar": {
        "present-tense": [
            "molesto",
            "molestas",
            "molesta",
            "molestamos",
            "molestáis",
            "molestan"
        ],
        "future-tense": [
            "molestaré",
            "molestarás",
            "molestará",
            "molestaremos",
            "molestaréis",
            "molestarán"
        ],
        "preterite-tense": [
            "molesté",
            "molestaste",
            "molestó",
            "molestamos",
            "molestasteis",
            "molestaron"
        ],
        "present-subjunctive-tense": [
            "moleste",
            "molestes",
            "moleste",
            "molestemos",
            "molestéis",
            "molesten"
        ],
        "future-subjunctive-tense": [
            "molestare",
            "molestares",
            "molestare",
            "molestáremos",
            "molestareis",
            "molestaren"
        ]
    },
    "montar": {
        "present-tense": [
            "monto",
            "montas",
            "monta",
            "montamos",
            "montáis",
            "montan"
        ],
        "future-tense": [
            "montaré",
            "montarás",
            "montará",
            "montaremos",
            "montaréis",
            "montarán"
        ],
        "preterite-tense": [
            "monté",
            "montaste",
            "montó",
            "montamos",
            "montasteis",
            "montaron"
        ],
        "present-subjunctive-tense": [
            "monte",
            "montes",
            "monte",
            "montemos",
            "montéis",
            "monten"
        ],
        "future-subjunctive-tense": [
            "montare",
            "montares",
            "montare",
            "montáremos",
            "montareis",
            "montaren"
        ]
    },
    "morir": {
        "present-tense": [
            "muero",
            "mueres",
            "muere",
            "morimos",
            "morís",
            "mueren"
        ],
        "future-tense": [
            "moriré",
            "morirás",
            "morirá",
            "moriremos",
            "moriréis",
            "morirán"
        ],
        "preterite-tense": [
            "morí",
            "moriste",
            "murió",
            "morimos",
            "moristeis",
            "murieron"
        ],
        "present-subjunctive-tense": [
            "muera",
            "mueras",
            "muera",
            "muramos",
            "muráis",
            "mueran"
        ],
        "future-subjunctive-tense": [
            "muriere",
            "murieres",
            "muriere",
            "muriéremos",
            "muriereis",
            "murieren"
        ]
    },
    "mostrar": {
        "present-tense": [
            "muestro",
            "muestras",
            "muestra",
            "mostramos",
            "mostráis",
            "muestran"
        ],
        "future-tense": [
            "mostraré",
            "mostrarás",
            "mostrará",
            "mostraremos",
            "mostraréis",
            "mostrarán"
        ],
        "preterite-tense": [
            "mostré",
            "mostraste",
            "mostró",
            "mostramos",
            "mostrasteis",
            "mostraron"
        ],
        "present-subjunctive-tense": [
            "muestre",
            "muestres",
            "muestre",
            "mostremos",
            "mostréis",
            "muestren"
        ],
        "future-subjunctive-tense": [
            "mostrare",
            "mostrares",
            "mostrare",
            "mostráremos",
            "mostrareis",
            "mostraren"
        ]
    },
    "mover": {
        "present-tense": [
            "muevo",
            "mueves",
            "mueve",
            "movemos",
            "movéis",
            "mueven"
        ],
        "future-tense": [
            "moveré",
            "moverás",
            "moverá",
            "moveremos",
            "moveréis",
            "moverán"
        ],
        "preterite-tense": [
            "moví",
            "moviste",
            "movió",
            "movimos",
            "movisteis",
            "movieron"
        ],
        "present-subjunctive-tense": [
            "mueva",
            "muevas",
            "mueva",
            "movamos",
            "mováis",
            "muevan"
        ],
        "future-subjunctive-tense": [
            "moviere",
            "movieres",
            "moviere",
            "moviéremos",
            "moviereis",
            "movieren"
        ]
    },
    "moverse": {
        "present-tense": [
            "me muevo",
            "te mueves",
            "se mueve",
            "nos movemos",
            "os movéis",
            "se mueven"
        ],
        "future-tense": [
            "me moveré",
            "te moverás",
            "se moverá",
            "nos moveremos",
            "os moveréis",
            "se moverán"
        ],
        "preterite-tense": [
            "me moví",
            "te moviste",
            "se movió",
            "nos movimos",
            "os movisteis",
            "se movieron"
        ],
        "present-subjunctive-tense": [
            "me mueva",
            "te muevas",
            "se mueva",
            "nos movamos",
            "os mováis",
            "se muevan"
        ],
        "future-subjunctive-tense": [
            "me moviere",
            "te movieres",
            "se moviere",
            "nos moviéremos",
            "os moviereis",
            "se movieren"
        ]
    },
    "mudar(se)": {
        "present-tense": [
            "mudo",
            "mudas",
            "muda",
            "mudamos",
            "mudáis",
            "mudan"
        ],
        "future-tense": [
            "mudaré",
            "mudarás",
            "mudará",
            "mudaremos",
            "mudaréis",
            "mudarán"
        ],
        "preterite-tense": [
            "mudé",
            "mudaste",
            "mudó",
            "mudamos",
            "mudasteis",
            "mudaron"
        ],
        "present-subjunctive-tense": [
            "mude",
            "mudes",
            "mude",
            "mudemos",
            "mudéis",
            "muden"
        ],
        "future-subjunctive-tense": [
            "mudare",
            "mudares",
            "mudare",
            "mudáremos",
            "mudareis",
            "mudaren"
        ]
    },
    "mudarse": {
        "present-tense": [
            "me mudo",
            "te mudas",
            "se muda",
            "nos mudamos",
            "os mudáis",
            "se mudan"
        ],
        "future-tense": [
            "me mudaré",
            "te mudarás",
            "se mudará",
            "nos mudaremos",
            "os mudaréis",
            "se mudarán"
        ],
        "preterite-tense": [
            "me mudé",
            "te mudaste",
            "se mudó",
            "nos mudamos",
            "os mudasteis",
            "se mudaron"
        ],
        "present-subjunctive-tense": [
            "me mude",
            "te mudes",
            "se mude",
            "nos mudemos",
            "os mudéis",
            "se muden"
        ],
        "future-subjunctive-tense": [
            "me mudare",
            "te mudares",
            "se mudare",
            "nos mudáremos",
            "os mudareis",
            "se mudaren"
        ]
    },
    "nacer": {
        "present-tense": [
            "nazco",
            "naces",
            "nace",
            "nacemos",
            "nacéis",
            "nacen"
        ],
        "future-tense": [
            "naceré",
            "nacerás",
            "nacerá",
            "naceremos",
            "naceréis",
            "nacerán"
        ],
        "preterite-tense": [
            "nací",
            "naciste",
            "nació",
            "nacimos",
            "nacisteis",
            "nacieron"
        ],
        "present-subjunctive-tense": [
            "nazca",
            "nazcas",
            "nazca",
            "nazcamos",
            "nazcáis",
            "nazcan"
        ],
        "future-subjunctive-tense": [
            "naciere",
            "nacieres",
            "naciere",
            "naciéremos",
            "naciereis",
            "nacieren"
        ]
    },
    "nadar": {
        "present-tense": [
            "nado",
            "nadas",
            "nada",
            "nadamos",
            "nadáis",
            "nadan"
        ],
        "future-tense": [
            "nadaré",
            "nadarás",
            "nadará",
            "nadaremos",
            "nadaréis",
            "nadarán"
        ],
        "preterite-tense": [
            "nadé",
            "nadaste",
            "nadó",
            "nadamos",
            "nadasteis",
            "nadaron"
        ],
        "present-subjunctive-tense": [
            "nade",
            "nades",
            "nade",
            "nademos",
            "nadéis",
            "naden"
        ],
        "future-subjunctive-tense": [
            "nadare",
            "nadares",
            "nadare",
            "nadáremos",
            "nadareis",
            "nadaren"
        ]
    },
    "navegar": {
        "present-tense": [
            "navego",
            "navegas",
            "navega",
            "navegamos",
            "navegáis",
            "navegan"
        ],
        "future-tense": [
            "navegaré",
            "navegarás",
            "navegará",
            "navegaremos",
            "navegaréis",
            "navegarán"
        ],
        "preterite-tense": [
            "navegué",
            "navegaste",
            "navegó",
            "navegamos",
            "navegasteis",
            "navegaron"
        ],
        "present-subjunctive-tense": [
            "navegue",
            "navegues",
            "navegue",
            "naveguemos",
            "naveguéis",
            "naveguen"
        ],
        "future-subjunctive-tense": [
            "navegare",
            "navegares",
            "navegare",
            "navegáremos",
            "navegareis",
            "navegaren"
        ]
    },
    "plantar": {
        "preterite-tense": [
            "planté",
            "plantaste",
            "plantó",
            "plantamos",
            "plantasteis",
            "plantaron"
        ],
        "present-tense": [
            "planto",
            "plantas",
            "planta",
            "plantamos",
            "plantáis",
            "plantan"
        ],
        "future-tense": [
            "plantaré",
            "plantarás",
            "plantará",
            "plantaremos",
            "plantaréis",
            "plantarán"
        ],
        "present-subjunctive-tense": [
            "plante",
            "plantes",
            "plante",
            "plantemos",
            "plantéis",
            "planten"
        ],
        "future-subjunctive-tense": [
            "plantare",
            "plantares",
            "plantare",
            "plantáremos",
            "plantareis",
            "plantaren"
        ]
    },
    "necesitar": {
        "present-tense": [
            "necesito",
            "necesitas",
            "necesita",
            "necesitamos",
            "necesitáis",
            "necesitan"
        ],
        "future-tense": [
            "necesitaré",
            "necesitarás",
            "necesitará",
            "necesitaremos",
            "necesitaréis",
            "necesitarán"
        ],
        "preterite-tense": [
            "necesité",
            "necesitaste",
            "necesitó",
            "necesitamos",
            "necesitasteis",
            "necesitaron"
        ],
        "present-subjunctive-tense": [
            "necesite",
            "necesites",
            "necesite",
            "necesitemos",
            "necesitéis",
            "necesiten"
        ],
        "future-subjunctive-tense": [
            "necesitare",
            "necesitares",
            "necesitare",
            "necesitáremos",
            "necesitareis",
            "necesitaren"
        ]
    },
    "negar": {
        "present-tense": [
            "niego",
            "niegas",
            "niega",
            "negamos",
            "negáis",
            "niegan"
        ],
        "future-tense": [
            "negaré",
            "negarás",
            "negará",
            "negaremos",
            "negaréis",
            "negarán"
        ],
        "preterite-tense": [
            "negué",
            "negaste",
            "negó",
            "negamos",
            "negasteis",
            "negaron"
        ],
        "present-subjunctive-tense": [
            "niegue",
            "niegues",
            "niegue",
            "neguemos",
            "neguéis",
            "nieguen"
        ],
        "future-subjunctive-tense": [
            "negare",
            "negares",
            "negare",
            "negáremos",
            "negareis",
            "negaren"
        ]
    },
    "negarse": {
        "present-tense": [
            "me niego",
            "te niegas",
            "se niega",
            "nos negamos",
            "os negáis",
            "se niegan"
        ],
        "future-tense": [
            "me negaré",
            "te negarás",
            "se negará",
            "nos negaremos",
            "os negaréis",
            "se negarán"
        ],
        "preterite-tense": [
            "me negué",
            "te negaste",
            "se negó",
            "nos negamos",
            "os negasteis",
            "se negaron"
        ],
        "present-subjunctive-tense": [
            "me niegue",
            "te niegues",
            "se niegue",
            "nos neguemos",
            "os neguéis",
            "se nieguen"
        ],
        "future-subjunctive-tense": [
            "me negare",
            "te negares",
            "se negare",
            "nos negáremos",
            "os negareis",
            "se negaren"
        ]
    },
    "negociar": {
        "present-tense": [
            "negocio",
            "negocias",
            "negocia",
            "negociamos",
            "negociáis",
            "negocian"
        ],
        "future-tense": [
            "negociaré",
            "negociarás",
            "negociará",
            "negociaremos",
            "negociaréis",
            "negociarán"
        ],
        "preterite-tense": [
            "negocié",
            "negociaste",
            "negoció",
            "negociamos",
            "negociasteis",
            "negociaron"
        ],
        "present-subjunctive-tense": [
            "negocie",
            "negocies",
            "negocie",
            "negociemos",
            "negociéis",
            "negocien"
        ],
        "future-subjunctive-tense": [
            "negociare",
            "negociares",
            "negociare",
            "negociáremos",
            "negociareis",
            "negociaren"
        ]
    },
    "nevar": {
        "present-tense": [
            "",
            "",
            "nieva",
            "",
            "",
            ""
        ],
        "future-tense": [
            "",
            "",
            "nevará",
            "",
            "",
            ""
        ],
        "preterite-tense": [
            "",
            "",
            "nevó",
            "",
            "",
            ""
        ],
        "present-subjunctive-tense": [
            "",
            "",
            "nieve",
            "",
            "",
            ""
        ],
        "future-subjunctive-tense": [
            "",
            "",
            "nevare",
            "",
            "",
            ""
        ]
    },
    "notar": {
        "present-tense": [
            "noto",
            "notas",
            "nota",
            "notamos",
            "notáis",
            "notan"
        ],
        "future-tense": [
            "notaré",
            "notarás",
            "notará",
            "notaremos",
            "notaréis",
            "notarán"
        ],
        "preterite-tense": [
            "noté",
            "notaste",
            "notó",
            "notamos",
            "notasteis",
            "notaron"
        ],
        "present-subjunctive-tense": [
            "note",
            "notes",
            "note",
            "notemos",
            "notéis",
            "noten"
        ],
        "future-subjunctive-tense": [
            "notare",
            "notares",
            "notare",
            "notáremos",
            "notareis",
            "notaren"
        ]
    },
    "obedecer": {
        "present-tense": [
            "obedezco",
            "obedeces",
            "obedece",
            "obedecemos",
            "obedecéis",
            "obedecen"
        ],
        "future-tense": [
            "obedeceré",
            "obedecerás",
            "obedecerá",
            "obedeceremos",
            "obedeceréis",
            "obedecerán"
        ],
        "preterite-tense": [
            "obedecí",
            "obedeciste",
            "obedeció",
            "obedecimos",
            "obedecisteis",
            "obedecieron"
        ],
        "present-subjunctive-tense": [
            "obedezca",
            "obedezcas",
            "obedezca",
            "obedezcamos",
            "obedezcáis",
            "obedezcan"
        ],
        "future-subjunctive-tense": [
            "obedeciere",
            "obedecieres",
            "obedeciere",
            "obedeciéremos",
            "obedeciereis",
            "obedecieren"
        ]
    },
    "obligar": {
        "present-tense": [
            "obligo",
            "obligas",
            "obliga",
            "obligamos",
            "obligáis",
            "obligan"
        ],
        "future-tense": [
            "obligaré",
            "obligarás",
            "obligará",
            "obligaremos",
            "obligaréis",
            "obligarán"
        ],
        "preterite-tense": [
            "obligué",
            "obligaste",
            "obligó",
            "obligamos",
            "obligasteis",
            "obligaron"
        ],
        "present-subjunctive-tense": [
            "obligue",
            "obligues",
            "obligue",
            "obliguemos",
            "obliguéis",
            "obliguen"
        ],
        "future-subjunctive-tense": [
            "obligare",
            "obligares",
            "obligare",
            "obligáremos",
            "obligareis",
            "obligaren"
        ]
    },
    "obtener": {
        "present-tense": [
            "obtengo",
            "obtienes",
            "obtiene",
            "obtenemos",
            "obtenéis",
            "obtienen"
        ],
        "future-tense": [
            "obtendré",
            "obtendrás",
            "obtendrá",
            "obtendremos",
            "obtendréis",
            "obtendrán"
        ],
        "preterite-tense": [
            "obtuve",
            "obtuviste",
            "obtuvo",
            "obtuvimos",
            "obtuvisteis",
            "obtuvieron"
        ],
        "present-subjunctive-tense": [
            "obtenga",
            "obtengas",
            "obtenga",
            "obtengamos",
            "obtengáis",
            "obtengan"
        ],
        "future-subjunctive-tense": [
            "obtuviere",
            "obtuvieres",
            "obtuviere",
            "obtuviéremos",
            "obtuviereis",
            "obtuvieren"
        ]
    },
    "ocurrir": {
        "present-tense": [
            "",
            "",
            "ocurre",
            "",
            "",
            "ocurren"
        ],
        "future-tense": [
            "",
            "",
            "ocurrirá",
            "",
            "",
            "ocurrirán"
        ],
        "preterite-tense": [
            "",
            "",
            "ocurrió",
            "",
            "",
            "ocurrieron"
        ],
        "present-subjunctive-tense": [
            "",
            "",
            "ocurra",
            "",
            "",
            "ocurran"
        ],
        "future-subjunctive-tense": [
            "",
            "",
            "ocurriere",
            "",
            "",
            "ocurrieren"
        ]
    },
    "odiar": {
        "present-tense": [
            "odio",
            "odias",
            "odia",
            "odiamos",
            "odiáis",
            "odian"
        ],
        "future-tense": [
            "odiaré",
            "odiarás",
            "odiará",
            "odiaremos",
            "odiaréis",
            "odiarán"
        ],
        "preterite-tense": [
            "odié",
            "odiaste",
            "odió",
            "odiamos",
            "odiasteis",
            "odiaron"
        ],
        "present-subjunctive-tense": [
            "odie",
            "odies",
            "odie",
            "odiemos",
            "odiéis",
            "odien"
        ],
        "future-subjunctive-tense": [
            "odiare",
            "odiares",
            "odiare",
            "odiáremos",
            "odiareis",
            "odiaren"
        ]
    },
    "ofender": {
        "present-tense": [
            "ofendo",
            "ofendes",
            "ofende",
            "ofendemos",
            "ofendéis",
            "ofenden"
        ],
        "future-tense": [
            "ofenderé",
            "ofenderás",
            "ofenderá",
            "ofenderemos",
            "ofenderéis",
            "ofenderán"
        ],
        "preterite-tense": [
            "ofendí",
            "ofendiste",
            "ofendió",
            "ofendimos",
            "ofendisteis",
            "ofendieron"
        ],
        "present-subjunctive-tense": [
            "ofenda",
            "ofendas",
            "ofenda",
            "ofendamos",
            "ofendáis",
            "ofendan"
        ],
        "future-subjunctive-tense": [
            "ofendiere",
            "ofendieres",
            "ofendiere",
            "ofendiéremos",
            "ofendiereis",
            "ofendieren"
        ]
    },
    "ofrecer": {
        "present-tense": [
            "ofrezco",
            "ofreces",
            "ofrece",
            "ofrecemos",
            "ofrecéis",
            "ofrecen"
        ],
        "future-tense": [
            "ofreceré",
            "ofrecerás",
            "ofrecerá",
            "ofreceremos",
            "ofreceréis",
            "ofrecerán"
        ],
        "preterite-tense": [
            "ofrecí",
            "ofreciste",
            "ofreció",
            "ofrecimos",
            "ofrecisteis",
            "ofrecieron"
        ],
        "present-subjunctive-tense": [
            "ofrezca",
            "ofrezcas",
            "ofrezca",
            "ofrezcamos",
            "ofrezcáis",
            "ofrezcan"
        ],
        "future-subjunctive-tense": [
            "ofreciere",
            "ofrecieres",
            "ofreciere",
            "ofreciéremos",
            "ofreciereis",
            "ofrecieren"
        ]
    },
    "oír": {
        "present-tense": [
            "oigo",
            "oyes",
            "oye",
            "oímos",
            "oís",
            "oyen"
        ],
        "future-tense": [
            "oiré",
            "oirás",
            "oirá",
            "oiremos",
            "oiréis",
            "oirán"
        ],
        "preterite-tense": [
            "oí",
            "oíste",
            "oyó",
            "oímos",
            "oísteis",
            "oyeron"
        ],
        "present-subjunctive-tense": [
            "oiga",
            "oigas",
            "oiga",
            "oigamos",
            "oigáis",
            "oigan"
        ],
        "future-subjunctive-tense": [
            "oyere",
            "oyeres",
            "oyere",
            "oyéremos",
            "oyereis",
            "oyeren"
        ]
    },
    "oler": {
        "present-tense": [
            "huelo",
            "hueles",
            "huele",
            "olemos",
            "oléis",
            "huelen"
        ],
        "future-tense": [
            "oleré",
            "olerás",
            "olerá",
            "oleremos",
            "oleréis",
            "olerán"
        ],
        "preterite-tense": [
            "olí",
            "oliste",
            "olió",
            "olimos",
            "olisteis",
            "olieron"
        ],
        "present-subjunctive-tense": [
            "huela",
            "huelas",
            "huela",
            "olamos",
            "oláis",
            "huelan"
        ],
        "future-subjunctive-tense": [
            "oliere",
            "olieres",
            "oliere",
            "oliéremos",
            "oliereis",
            "olieren"
        ]
    },
    "olvidar": {
        "present-tense": [
            "olvido",
            "olvidas",
            "olvida",
            "olvidamos",
            "olvidáis",
            "olvidan"
        ],
        "future-tense": [
            "olvidaré",
            "olvidarás",
            "olvidará",
            "olvidaremos",
            "olvidaréis",
            "olvidarán"
        ],
        "preterite-tense": [
            "olvidé",
            "olvidaste",
            "olvidó",
            "olvidamos",
            "olvidasteis",
            "olvidaron"
        ],
        "present-subjunctive-tense": [
            "olvide",
            "olvides",
            "olvide",
            "olvidemos",
            "olvidéis",
            "olviden"
        ],
        "future-subjunctive-tense": [
            "olvidare",
            "olvidares",
            "olvidare",
            "olvidáremos",
            "olvidareis",
            "olvidaren"
        ]
    },
    "olvidarse": {
        "present-tense": [
            "me olvido",
            "te olvidas",
            "se olvida",
            "nos olvidamos",
            "os olvidáis",
            "se olvidan"
        ],
        "future-tense": [
            "me olvidaré",
            "te olvidarás",
            "se olvidará",
            "nos olvidaremos",
            "os olvidaréis",
            "se olvidarán"
        ],
        "preterite-tense": [
            "me olvidé",
            "te olvidaste",
            "se olvidó",
            "nos olvidamos",
            "os olvidasteis",
            "se olvidaron"
        ],
        "present-subjunctive-tense": [
            "me olvide",
            "te olvides",
            "se olvide",
            "nos olvidemos",
            "os olvidéis",
            "se olviden"
        ],
        "future-subjunctive-tense": [
            "me olvidare",
            "te olvidares",
            "se olvidare",
            "nos olvidáremos",
            "os olvidareis",
            "se olvidaren"
        ]
    },
    "oponer": {
        "present-tense": [
            "opongo",
            "opones",
            "opone",
            "oponemos",
            "oponéis",
            "oponen"
        ],
        "future-tense": [
            "opondré",
            "opondrás",
            "opondrá",
            "opondremos",
            "opondréis",
            "opondrán"
        ],
        "preterite-tense": [
            "opuse",
            "opusiste",
            "opuso",
            "opusimos",
            "opusisteis",
            "opusieron"
        ],
        "present-subjunctive-tense": [
            "oponga",
            "opongas",
            "oponga",
            "opongamos",
            "opongáis",
            "opongan"
        ],
        "future-subjunctive-tense": [
            "opusiere",
            "opusieres",
            "opusiere",
            "opusiéremos",
            "opusiereis",
            "opusieren"
        ]
    },
    "oponerse": {
        "present-tense": [
            "me opongo",
            "te opones",
            "se opone",
            "nos oponemos",
            "os oponéis",
            "se oponen"
        ],
        "future-tense": [
            "me opondré",
            "te opondrás",
            "se opondrá",
            "nos opondremos",
            "os opondréis",
            "se opondrán"
        ],
        "preterite-tense": [
            "me opuse",
            "te opusiste",
            "se opuso",
            "nos opusimos",
            "os opusisteis",
            "se opusieron"
        ],
        "present-subjunctive-tense": [
            "me oponga",
            "te opongas",
            "se oponga",
            "nos opongamos",
            "os opongáis",
            "se opongan"
        ],
        "future-subjunctive-tense": [
            "me opusiere",
            "te opusieres",
            "se opusiere",
            "nos opusiéremos",
            "os opusiereis",
            "se opusieren"
        ]
    },
    "organizar": {
        "present-tense": [
            "organizo",
            "organizas",
            "organiza",
            "organizamos",
            "organizáis",
            "organizan"
        ],
        "future-tense": [
            "organizaré",
            "organizarás",
            "organizará",
            "organizaremos",
            "organizaréis",
            "organizarán"
        ],
        "preterite-tense": [
            "organicé",
            "organizaste",
            "organizó",
            "organizamos",
            "organizasteis",
            "organizaron"
        ],
        "present-subjunctive-tense": [
            "organice",
            "organices",
            "organice",
            "organicemos",
            "organicéis",
            "organicen"
        ],
        "future-subjunctive-tense": [
            "organizare",
            "organizares",
            "organizare",
            "organizáremos",
            "organizareis",
            "organizaren"
        ]
    },
    "querer": {
        "future-tense": [
            "querré",
            "querrás",
            "querrá",
            "querremos",
            "querréis",
            "querrán"
        ],
        "present-tense": [
            "quiero",
            "quieres",
            "quiere",
            "queremos",
            "queréis",
            "quieren"
        ],
        "preterite-tense": [
            "quise",
            "quisiste",
            "quiso",
            "quisimos",
            "quisisteis",
            "quisieron"
        ],
        "present-subjunctive-tense": [
            "quiera",
            "quieras",
            "quiera",
            "queramos",
            "queráis",
            "quieran"
        ],
        "future-subjunctive-tense": [
            "quisiere",
            "quisieres",
            "quisiere",
            "quisiéremos",
            "quisiereis",
            "quisieren"
        ]
    },
    "padecer": {
        "present-tense": [
            "padezco",
            "padeces",
            "padece",
            "padecemos",
            "padecéis",
            "padecen"
        ],
        "future-tense": [
            "padeceré",
            "padecerás",
            "padecerá",
            "padeceremos",
            "padeceréis",
            "padecerán"
        ],
        "preterite-tense": [
            "padecí",
            "padeciste",
            "padeció",
            "padecimos",
            "padecisteis",
            "padecieron"
        ],
        "present-subjunctive-tense": [
            "padezca",
            "padezcas",
            "padezca",
            "padezcamos",
            "padezcáis",
            "padezcan"
        ],
        "future-subjunctive-tense": [
            "padeciere",
            "padecieres",
            "padeciere",
            "padeciéremos",
            "padeciereis",
            "padecieren"
        ]
    },
    "pagar": {
        "present-tense": [
            "pago",
            "pagas",
            "paga",
            "pagamos",
            "pagáis",
            "pagan"
        ],
        "future-tense": [
            "pagaré",
            "pagarás",
            "pagará",
            "pagaremos",
            "pagaréis",
            "pagarán"
        ],
        "preterite-tense": [
            "pagué",
            "pagaste",
            "pagó",
            "pagamos",
            "pagasteis",
            "pagaron"
        ],
        "present-subjunctive-tense": [
            "pague",
            "pagues",
            "pague",
            "paguemos",
            "paguéis",
            "paguen"
        ],
        "future-subjunctive-tense": [
            "pagare",
            "pagares",
            "pagare",
            "pagáremos",
            "pagareis",
            "pagaren"
        ]
    },
    "parar": {
        "present-tense": [
            "paro",
            "paras",
            "para",
            "paramos",
            "paráis",
            "paran"
        ],
        "future-tense": [
            "pararé",
            "pararás",
            "parará",
            "pararemos",
            "pararéis",
            "pararán"
        ],
        "preterite-tense": [
            "paré",
            "paraste",
            "paró",
            "paramos",
            "parasteis",
            "pararon"
        ],
        "present-subjunctive-tense": [
            "pare",
            "pares",
            "pare",
            "paremos",
            "paréis",
            "paren"
        ],
        "future-subjunctive-tense": [
            "parare",
            "parares",
            "parare",
            "paráremos",
            "parareis",
            "pararen"
        ]
    },
    "recoger": {
        "present-subjunctive-tense": [
            "recoja",
            "recojas",
            "recoja",
            "recojamos",
            "recojáis",
            "recojan"
        ],
        "present-tense": [
            "recojo",
            "recoges",
            "recoge",
            "recogemos",
            "recogéis",
            "recogen"
        ],
        "future-tense": [
            "recogeré",
            "recogerás",
            "recogerá",
            "recogeremos",
            "recogeréis",
            "recogerán"
        ],
        "preterite-tense": [
            "recogí",
            "recogiste",
            "recogió",
            "recogimos",
            "recogisteis",
            "recogieron"
        ],
        "future-subjunctive-tense": [
            "recogiere",
            "recogieres",
            "recogiere",
            "recogiéremos",
            "recogiereis",
            "recogieren"
        ]
    },
    "parecer": {
        "present-tense": [
            "parezco",
            "pareces",
            "parece",
            "parecemos",
            "parecéis",
            "parecen"
        ],
        "future-tense": [
            "pareceré",
            "parecerás",
            "parecerá",
            "pareceremos",
            "pareceréis",
            "parecerán"
        ],
        "preterite-tense": [
            "parecí",
            "pareciste",
            "pareció",
            "parecimos",
            "parecisteis",
            "parecieron"
        ],
        "present-subjunctive-tense": [
            "parezca",
            "parezcas",
            "parezca",
            "parezcamos",
            "parezcáis",
            "parezcan"
        ],
        "future-subjunctive-tense": [
            "pareciere",
            "parecieres",
            "pareciere",
            "pareciéremos",
            "pareciereis",
            "parecieren"
        ]
    },
    "participar": {
        "present-tense": [
            "participo",
            "participas",
            "participa",
            "participamos",
            "participáis",
            "participan"
        ],
        "future-tense": [
            "participaré",
            "participarás",
            "participará",
            "participaremos",
            "participaréis",
            "participarán"
        ],
        "preterite-tense": [
            "participé",
            "participaste",
            "participó",
            "participamos",
            "participasteis",
            "participaron"
        ],
        "present-subjunctive-tense": [
            "participe",
            "participes",
            "participe",
            "participemos",
            "participéis",
            "participen"
        ],
        "future-subjunctive-tense": [
            "participare",
            "participares",
            "participare",
            "participáremos",
            "participareis",
            "participaren"
        ]
    },
    "pasar": {
        "present-tense": [
            "paso",
            "pasas",
            "pasa",
            "pasamos",
            "pasáis",
            "pasan"
        ],
        "future-tense": [
            "pasaré",
            "pasarás",
            "pasará",
            "pasaremos",
            "pasaréis",
            "pasarán"
        ],
        "preterite-tense": [
            "pasé",
            "pasaste",
            "pasó",
            "pasamos",
            "pasasteis",
            "pasaron"
        ],
        "present-subjunctive-tense": [
            "pase",
            "pases",
            "pase",
            "pasemos",
            "paséis",
            "pasen"
        ],
        "future-subjunctive-tense": [
            "pasare",
            "pasares",
            "pasare",
            "pasáremos",
            "pasareis",
            "pasaren"
        ]
    },
    "patinar": {
        "present-tense": [
            "patino",
            "patinas",
            "patina",
            "patinamos",
            "patináis",
            "patinan"
        ],
        "future-tense": [
            "patinaré",
            "patinarás",
            "patinará",
            "patinaremos",
            "patinaréis",
            "patinarán"
        ],
        "preterite-tense": [
            "patiné",
            "patinaste",
            "patinó",
            "patinamos",
            "patinasteis",
            "patinaron"
        ],
        "present-subjunctive-tense": [
            "patine",
            "patines",
            "patine",
            "patinemos",
            "patinéis",
            "patinen"
        ],
        "future-subjunctive-tense": [
            "patinare",
            "patinares",
            "patinare",
            "patináremos",
            "patinareis",
            "patinaren"
        ]
    },
    "pedir": {
        "present-tense": [
            "pido",
            "pides",
            "pide",
            "pedimos",
            "pedís",
            "piden"
        ],
        "future-tense": [
            "pediré",
            "pedirás",
            "pedirá",
            "pediremos",
            "pediréis",
            "pedirán"
        ],
        "preterite-tense": [
            "pedí",
            "pediste",
            "pidió",
            "pedimos",
            "pedisteis",
            "pidieron"
        ],
        "present-subjunctive-tense": [
            "pida",
            "pidas",
            "pida",
            "pidamos",
            "pidáis",
            "pidan"
        ],
        "future-subjunctive-tense": [
            "pidiere",
            "pidieres",
            "pidiere",
            "pidiéremos",
            "pidiereis",
            "pidieren"
        ]
    },
    "pegar": {
        "present-tense": [
            "pego",
            "pegas",
            "pega",
            "pegamos",
            "pegáis",
            "pegan"
        ],
        "future-tense": [
            "pegaré",
            "pegarás",
            "pegará",
            "pegaremos",
            "pegaréis",
            "pegarán"
        ],
        "preterite-tense": [
            "pegué",
            "pegaste",
            "pegó",
            "pegamos",
            "pegasteis",
            "pegaron"
        ],
        "present-subjunctive-tense": [
            "pegue",
            "pegues",
            "pegue",
            "peguemos",
            "peguéis",
            "peguen"
        ],
        "future-subjunctive-tense": [
            "pegare",
            "pegares",
            "pegare",
            "pegáremos",
            "pegareis",
            "pegaren"
        ]
    },
    "peinar": {
        "present-tense": [
            "peino",
            "peinas",
            "peina",
            "peinamos",
            "peináis",
            "peinan"
        ],
        "future-tense": [
            "peinaré",
            "peinarás",
            "peinará",
            "peinaremos",
            "peinaréis",
            "peinarán"
        ],
        "preterite-tense": [
            "peiné",
            "peinaste",
            "peinó",
            "peinamos",
            "peinasteis",
            "peinaron"
        ],
        "present-subjunctive-tense": [
            "peine",
            "peines",
            "peine",
            "peinemos",
            "peinéis",
            "peinen"
        ],
        "future-subjunctive-tense": [
            "peinare",
            "peinares",
            "peinare",
            "peináremos",
            "peinareis",
            "peinaren"
        ]
    },
    "peinarse": {
        "present-tense": [
            "me peino",
            "te peinas",
            "se peina",
            "nos peinamos",
            "os peináis",
            "se peinan"
        ],
        "future-tense": [
            "me peinaré",
            "te peinarás",
            "se peinará",
            "nos peinaremos",
            "os peinaréis",
            "se peinarán"
        ],
        "preterite-tense": [
            "me peiné",
            "te peinaste",
            "se peinó",
            "nos peinamos",
            "os peinasteis",
            "se peinaron"
        ],
        "present-subjunctive-tense": [
            "me peine",
            "te peines",
            "se peine",
            "nos peinemos",
            "os peinéis",
            "se peinen"
        ],
        "future-subjunctive-tense": [
            "me peinare",
            "te peinares",
            "se peinare",
            "nos peináremos",
            "os peinareis",
            "se peinaren"
        ]
    },
    "pelear": {
        "present-tense": [
            "peleo",
            "peleas",
            "pelea",
            "peleamos",
            "peleáis",
            "pelean"
        ],
        "future-tense": [
            "pelearé",
            "pelearás",
            "peleará",
            "pelearemos",
            "pelearéis",
            "pelearán"
        ],
        "preterite-tense": [
            "peleé",
            "peleaste",
            "peleó",
            "peleamos",
            "peleasteis",
            "pelearon"
        ],
        "present-subjunctive-tense": [
            "pelee",
            "pelees",
            "pelee",
            "peleemos",
            "peleéis",
            "peleen"
        ],
        "future-subjunctive-tense": [
            "peleare",
            "peleares",
            "peleare",
            "peleáremos",
            "peleareis",
            "pelearen"
        ]
    },
    "reinar": {
        "present-tense": [
            "reino",
            "reinas",
            "reina",
            "reinamos",
            "reináis",
            "reinan"
        ],
        "future-tense": [
            "reinaré",
            "reinarás",
            "reinará",
            "reinaremos",
            "reinaréis",
            "reinarán"
        ],
        "preterite-tense": [
            "reiné",
            "reinaste",
            "reinó",
            "reinamos",
            "reinasteis",
            "reinaron"
        ],
        "present-subjunctive-tense": [
            "reine",
            "reines",
            "reine",
            "reinemos",
            "reinéis",
            "reinen"
        ],
        "future-subjunctive-tense": [
            "reinare",
            "reinares",
            "reinare",
            "reináremos",
            "reinareis",
            "reinaren"
        ]
    },
    "pensar": {
        "present-tense": [
            "pienso",
            "piensas",
            "piensa",
            "pensamos",
            "pensáis",
            "piensan"
        ],
        "future-tense": [
            "pensaré",
            "pensarás",
            "pensará",
            "pensaremos",
            "pensaréis",
            "pensarán"
        ],
        "preterite-tense": [
            "pensé",
            "pensaste",
            "pensó",
            "pensamos",
            "pensasteis",
            "pensaron"
        ],
        "present-subjunctive-tense": [
            "piense",
            "pienses",
            "piense",
            "pensemos",
            "penséis",
            "piensen"
        ],
        "future-subjunctive-tense": [
            "pensare",
            "pensares",
            "pensare",
            "pensáremos",
            "pensareis",
            "pensaren"
        ]
    },
    "perder": {
        "present-tense": [
            "pierdo",
            "pierdes",
            "pierde",
            "perdemos",
            "perdéis",
            "pierden"
        ],
        "future-tense": [
            "perderé",
            "perderás",
            "perderá",
            "perderemos",
            "perderéis",
            "perderán"
        ],
        "preterite-tense": [
            "perdí",
            "perdiste",
            "perdió",
            "perdimos",
            "perdisteis",
            "perdieron"
        ],
        "present-subjunctive-tense": [
            "pierda",
            "pierdas",
            "pierda",
            "perdamos",
            "perdáis",
            "pierdan"
        ],
        "future-subjunctive-tense": [
            "perdiere",
            "perdieres",
            "perdiere",
            "perdiéremos",
            "perdiereis",
            "perdieren"
        ]
    },
    "perdonar": {
        "present-tense": [
            "perdono",
            "perdonas",
            "perdona",
            "perdonamos",
            "perdonáis",
            "perdonan"
        ],
        "future-tense": [
            "perdonaré",
            "perdonarás",
            "perdonará",
            "perdonaremos",
            "perdonaréis",
            "perdonarán"
        ],
        "preterite-tense": [
            "perdoné",
            "perdonaste",
            "perdonó",
            "perdonamos",
            "perdonasteis",
            "perdonaron"
        ],
        "present-subjunctive-tense": [
            "perdone",
            "perdones",
            "perdone",
            "perdonemos",
            "perdonéis",
            "perdonen"
        ],
        "future-subjunctive-tense": [
            "perdonare",
            "perdonares",
            "perdonare",
            "perdonáremos",
            "perdonareis",
            "perdonaren"
        ]
    },
    "permanecer": {
        "present-tense": [
            "permanezco",
            "permaneces",
            "permanece",
            "permanecemos",
            "permanecéis",
            "permanecen"
        ],
        "future-tense": [
            "permaneceré",
            "permanecerás",
            "permanecerá",
            "permaneceremos",
            "permaneceréis",
            "permanecerán"
        ],
        "preterite-tense": [
            "permanecí",
            "permaneciste",
            "permaneció",
            "permanecimos",
            "permanecisteis",
            "permanecieron"
        ],
        "present-subjunctive-tense": [
            "permanezca",
            "permanezcas",
            "permanezca",
            "permanezcamos",
            "permanezcáis",
            "permanezcan"
        ],
        "future-subjunctive-tense": [
            "permaneciere",
            "permanecieres",
            "permaneciere",
            "permaneciéremos",
            "permaneciereis",
            "permanecieren"
        ]
    },
    "permitir": {
        "present-tense": [
            "permito",
            "permites",
            "permite",
            "permitimos",
            "permitís",
            "permiten"
        ],
        "future-tense": [
            "permitiré",
            "permitirás",
            "permitirá",
            "permitiremos",
            "permitiréis",
            "permitirán"
        ],
        "preterite-tense": [
            "permití",
            "permitiste",
            "permitió",
            "permitimos",
            "permitisteis",
            "permitieron"
        ],
        "present-subjunctive-tense": [
            "permita",
            "permitas",
            "permita",
            "permitamos",
            "permitáis",
            "permitan"
        ],
        "future-subjunctive-tense": [
            "permitiere",
            "permitieres",
            "permitiere",
            "permitiéremos",
            "permitiereis",
            "permitieren"
        ]
    },
    "perseguir": {
        "present-tense": [
            "persigo",
            "persigues",
            "persigue",
            "perseguimos",
            "perseguís",
            "persiguen"
        ],
        "future-tense": [
            "perseguiré",
            "perseguirás",
            "perseguirá",
            "perseguiremos",
            "perseguiréis",
            "perseguirán"
        ],
        "preterite-tense": [
            "perseguí",
            "perseguiste",
            "persiguió",
            "perseguimos",
            "perseguisteis",
            "persiguieron"
        ],
        "present-subjunctive-tense": [
            "persiga",
            "persigas",
            "persiga",
            "persigamos",
            "persigáis",
            "persigan"
        ],
        "future-subjunctive-tense": [
            "persiguiere",
            "persiguieres",
            "persiguiere",
            "persiguiéremos",
            "persiguiereis",
            "persiguieren"
        ]
    },
    "pertenecer": {
        "present-tense": [
            "pertenezco",
            "perteneces",
            "pertenece",
            "pertenecemos",
            "pertenecéis",
            "pertenecen"
        ],
        "future-tense": [
            "perteneceré",
            "pertenecerás",
            "pertenecerá",
            "perteneceremos",
            "perteneceréis",
            "pertenecerán"
        ],
        "preterite-tense": [
            "pertenecí",
            "perteneciste",
            "perteneció",
            "pertenecimos",
            "pertenecisteis",
            "pertenecieron"
        ],
        "present-subjunctive-tense": [
            "pertenezca",
            "pertenezcas",
            "pertenezca",
            "pertenezcamos",
            "pertenezcáis",
            "pertenezcan"
        ],
        "future-subjunctive-tense": [
            "perteneciere",
            "pertenecieres",
            "perteneciere",
            "perteneciéremos",
            "perteneciereis",
            "pertenecieren"
        ]
    },
    "pesar": {
        "present-tense": [
            "peso",
            "pesas",
            "pesa",
            "pesamos",
            "pesáis",
            "pesan"
        ],
        "future-tense": [
            "pesaré",
            "pesarás",
            "pesará",
            "pesaremos",
            "pesaréis",
            "pesarán"
        ],
        "preterite-tense": [
            "pesé",
            "pesaste",
            "pesó",
            "pesamos",
            "pesasteis",
            "pesaron"
        ],
        "present-subjunctive-tense": [
            "pese",
            "peses",
            "pese",
            "pesemos",
            "peséis",
            "pesen"
        ],
        "future-subjunctive-tense": [
            "pesare",
            "pesares",
            "pesare",
            "pesáremos",
            "pesareis",
            "pesaren"
        ]
    },
    "pescar": {
        "present-tense": [
            "pesco",
            "pescas",
            "pesca",
            "pescamos",
            "pescáis",
            "pescan"
        ],
        "future-tense": [
            "pescaré",
            "pescarás",
            "pescará",
            "pescaremos",
            "pescaréis",
            "pescarán"
        ],
        "preterite-tense": [
            "pesqué",
            "pescaste",
            "pescó",
            "pescamos",
            "pescasteis",
            "pescaron"
        ],
        "present-subjunctive-tense": [
            "pesque",
            "pesques",
            "pesque",
            "pesquemos",
            "pesquéis",
            "pesquen"
        ],
        "future-subjunctive-tense": [
            "pescare",
            "pescares",
            "pescare",
            "pescáremos",
            "pescareis",
            "pescaren"
        ]
    },
    "picar": {
        "present-tense": [
            "pico",
            "picas",
            "pica",
            "picamos",
            "picáis",
            "pican"
        ],
        "future-tense": [
            "picaré",
            "picarás",
            "picará",
            "picaremos",
            "picaréis",
            "picarán"
        ],
        "preterite-tense": [
            "piqué",
            "picaste",
            "picó",
            "picamos",
            "picasteis",
            "picaron"
        ],
        "present-subjunctive-tense": [
            "pique",
            "piques",
            "pique",
            "piquemos",
            "piquéis",
            "piquen"
        ],
        "future-subjunctive-tense": [
            "picare",
            "picares",
            "picare",
            "picáremos",
            "picareis",
            "picaren"
        ]
    },
    "pintar": {
        "present-tense": [
            "pinto",
            "pintas",
            "pinta",
            "pintamos",
            "pintáis",
            "pintan"
        ],
        "future-tense": [
            "pintaré",
            "pintarás",
            "pintará",
            "pintaremos",
            "pintaréis",
            "pintarán"
        ],
        "preterite-tense": [
            "pinté",
            "pintaste",
            "pintó",
            "pintamos",
            "pintasteis",
            "pintaron"
        ],
        "present-subjunctive-tense": [
            "pinte",
            "pintes",
            "pinte",
            "pintemos",
            "pintéis",
            "pinten"
        ],
        "future-subjunctive-tense": [
            "pintare",
            "pintares",
            "pintare",
            "pintáremos",
            "pintareis",
            "pintaren"
        ]
    },
    "platicar": {
        "present-tense": [
            "platico",
            "platicas",
            "platica",
            "platicamos",
            "platicáis",
            "platican"
        ],
        "future-tense": [
            "platicaré",
            "platicarás",
            "platicará",
            "platicaremos",
            "platicaréis",
            "platicarán"
        ],
        "preterite-tense": [
            "platiqué",
            "platicaste",
            "platicó",
            "platicamos",
            "platicasteis",
            "platicaron"
        ],
        "present-subjunctive-tense": [
            "platique",
            "platiques",
            "platique",
            "platiquemos",
            "platiquéis",
            "platiquen"
        ],
        "future-subjunctive-tense": [
            "platicare",
            "platicares",
            "platicare",
            "platicáremos",
            "platicareis",
            "platicaren"
        ]
    },
    "planchar": {
        "present-tense": [
            "plancho",
            "planchas",
            "plancha",
            "planchamos",
            "plancháis",
            "planchan"
        ],
        "future-tense": [
            "plancharé",
            "plancharás",
            "planchará",
            "plancharemos",
            "plancharéis",
            "plancharán"
        ],
        "preterite-tense": [
            "planché",
            "planchaste",
            "planchó",
            "planchamos",
            "planchasteis",
            "plancharon"
        ],
        "present-subjunctive-tense": [
            "planche",
            "planches",
            "planche",
            "planchemos",
            "planchéis",
            "planchen"
        ],
        "future-subjunctive-tense": [
            "planchare",
            "planchares",
            "planchare",
            "plancháremos",
            "planchareis",
            "plancharen"
        ]
    },
    "poder": {
        "present-tense": [
            "puedo",
            "puedes",
            "puede",
            "podemos",
            "podéis",
            "pueden"
        ],
        "future-tense": [
            "podré",
            "podrás",
            "podrá",
            "podremos",
            "podréis",
            "podrán"
        ],
        "preterite-tense": [
            "pude",
            "pudiste",
            "pudo",
            "pudimos",
            "pudisteis",
            "pudieron"
        ],
        "present-subjunctive-tense": [
            "pueda",
            "puedas",
            "pueda",
            "podamos",
            "podáis",
            "puedan"
        ],
        "future-subjunctive-tense": [
            "pudiere",
            "pudieres",
            "pudiere",
            "pudiéremos",
            "pudiereis",
            "pudieren"
        ]
    },
    "poner": {
        "present-tense": [
            "pongo",
            "pones",
            "pone",
            "ponemos",
            "ponéis",
            "ponen"
        ],
        "future-tense": [
            "pondré",
            "pondrás",
            "pondrá",
            "pondremos",
            "pondréis",
            "pondrán"
        ],
        "preterite-tense": [
            "puse",
            "pusiste",
            "puso",
            "pusimos",
            "pusisteis",
            "pusieron"
        ],
        "present-subjunctive-tense": [
            "ponga",
            "pongas",
            "ponga",
            "pongamos",
            "pongáis",
            "pongan"
        ],
        "future-subjunctive-tense": [
            "pusiere",
            "pusieres",
            "pusiere",
            "pusiéremos",
            "pusiereis",
            "pusieren"
        ]
    },
    "ponerse": {
        "present-tense": [
            "me pongo",
            "te pones",
            "se pone",
            "nos ponemos",
            "os ponéis",
            "se ponen"
        ],
        "future-tense": [
            "me pondré",
            "te pondrás",
            "se pondrá",
            "nos pondremos",
            "os pondréis",
            "se pondrán"
        ],
        "preterite-tense": [
            "me puse",
            "te pusiste",
            "se puso",
            "nos pusimos",
            "os pusisteis",
            "se pusieron"
        ],
        "present-subjunctive-tense": [
            "me ponga",
            "te pongas",
            "se ponga",
            "nos pongamos",
            "os pongáis",
            "se pongan"
        ],
        "future-subjunctive-tense": [
            "me pusiere",
            "te pusieres",
            "se pusiere",
            "nos pusiéremos",
            "os pusiereis",
            "se pusieren"
        ]
    },
    "practicar": {
        "present-tense": [
            "practico",
            "practicas",
            "practica",
            "practicamos",
            "practicáis",
            "practican"
        ],
        "future-tense": [
            "practicaré",
            "practicarás",
            "practicará",
            "practicaremos",
            "practicaréis",
            "practicarán"
        ],
        "preterite-tense": [
            "practiqué",
            "practicaste",
            "practicó",
            "practicamos",
            "practicasteis",
            "practicaron"
        ],
        "present-subjunctive-tense": [
            "practique",
            "practiques",
            "practique",
            "practiquemos",
            "practiquéis",
            "practiquen"
        ],
        "future-subjunctive-tense": [
            "practicare",
            "practicares",
            "practicare",
            "practicáremos",
            "practicareis",
            "practicaren"
        ]
    },
    "predecir": {
        "present-tense": [
            "predigo",
            "predices",
            "predice",
            "predecimos",
            "predecís",
            "predicen"
        ],
        "future-tense": [
            "predeciré",
            "predecirás",
            "predecirá",
            "predeciremos",
            "predeciréis",
            "predecirán"
        ],
        "preterite-tense": [
            "predije",
            "predijiste",
            "predijo",
            "predijimos",
            "predijisteis",
            "predijeron"
        ],
        "present-subjunctive-tense": [
            "prediga",
            "predigas",
            "prediga",
            "predigamos",
            "predigáis",
            "predigan"
        ],
        "future-subjunctive-tense": [
            "predijere",
            "predijeres",
            "predijere",
            "predijéremos",
            "predijereis",
            "predijeren"
        ]
    },
    "preferir": {
        "present-tense": [
            "prefiero",
            "prefieres",
            "prefiere",
            "preferimos",
            "preferís",
            "prefieren"
        ],
        "future-tense": [
            "preferiré",
            "preferirás",
            "preferirá",
            "preferiremos",
            "preferiréis",
            "preferirán"
        ],
        "preterite-tense": [
            "preferí",
            "preferiste",
            "prefirió",
            "preferimos",
            "preferisteis",
            "prefirieron"
        ],
        "present-subjunctive-tense": [
            "prefiera",
            "prefieras",
            "prefiera",
            "prefiramos",
            "prefiráis",
            "prefieran"
        ],
        "future-subjunctive-tense": [
            "prefiriere",
            "prefirieres",
            "prefiriere",
            "prefiriéremos",
            "prefiriereis",
            "prefirieren"
        ]
    },
    "preguntar": {
        "present-tense": [
            "pregunto",
            "preguntas",
            "pregunta",
            "preguntamos",
            "preguntáis",
            "preguntan"
        ],
        "future-tense": [
            "preguntaré",
            "preguntarás",
            "preguntará",
            "preguntaremos",
            "preguntaréis",
            "preguntarán"
        ],
        "preterite-tense": [
            "pregunté",
            "preguntaste",
            "preguntó",
            "preguntamos",
            "preguntasteis",
            "preguntaron"
        ],
        "present-subjunctive-tense": [
            "pregunte",
            "preguntes",
            "pregunte",
            "preguntemos",
            "preguntéis",
            "pregunten"
        ],
        "future-subjunctive-tense": [
            "preguntare",
            "preguntares",
            "preguntare",
            "preguntáremos",
            "preguntareis",
            "preguntaren"
        ]
    },
    "preguntarse": {
        "present-tense": [
            "me pregunto",
            "te preguntas",
            "se pregunta",
            "nos preguntamos",
            "os preguntáis",
            "se preguntan"
        ],
        "future-tense": [
            "me preguntaré",
            "te preguntarás",
            "se preguntará",
            "nos preguntaremos",
            "os preguntaréis",
            "se preguntarán"
        ],
        "preterite-tense": [
            "me pregunté",
            "te preguntaste",
            "se preguntó",
            "nos preguntamos",
            "os preguntasteis",
            "se preguntaron"
        ],
        "present-subjunctive-tense": [
            "me pregunte",
            "te preguntes",
            "se pregunte",
            "nos preguntemos",
            "os preguntéis",
            "se pregunten"
        ],
        "future-subjunctive-tense": [
            "me preguntare",
            "te preguntares",
            "se preguntare",
            "nos preguntáremos",
            "os preguntareis",
            "se preguntaren"
        ]
    },
    "preparar": {
        "present-tense": [
            "preparo",
            "preparas",
            "prepara",
            "preparamos",
            "preparáis",
            "preparan"
        ],
        "future-tense": [
            "prepararé",
            "prepararás",
            "preparará",
            "prepararemos",
            "prepararéis",
            "prepararán"
        ],
        "preterite-tense": [
            "preparé",
            "preparaste",
            "preparó",
            "preparamos",
            "preparasteis",
            "prepararon"
        ],
        "present-subjunctive-tense": [
            "prepare",
            "prepares",
            "prepare",
            "preparemos",
            "preparéis",
            "preparen"
        ],
        "future-subjunctive-tense": [
            "preparare",
            "preparares",
            "preparare",
            "preparáremos",
            "preparareis",
            "prepararen"
        ]
    },
    "prepararse": {
        "present-tense": [
            "me preparo",
            "te preparas",
            "se prepara",
            "nos preparamos",
            "os preparáis",
            "se preparan"
        ],
        "future-tense": [
            "me prepararé",
            "te prepararás",
            "se preparará",
            "nos prepararemos",
            "os prepararéis",
            "se prepararán"
        ],
        "preterite-tense": [
            "me preparé",
            "te preparaste",
            "se preparó",
            "nos preparamos",
            "os preparasteis",
            "se prepararon"
        ],
        "present-subjunctive-tense": [
            "me prepare",
            "te prepares",
            "se prepare",
            "nos preparemos",
            "os preparéis",
            "se preparen"
        ],
        "future-subjunctive-tense": [
            "me preparare",
            "te preparares",
            "se preparare",
            "nos preparáremos",
            "os preparareis",
            "se prepararen"
        ]
    },
    "presentir": {
        "present-tense": [
            "presiento",
            "presientes",
            "presiente",
            "presentimos",
            "presentís",
            "presienten"
        ],
        "future-tense": [
            "presentiré",
            "presentirás",
            "presentirá",
            "presentiremos",
            "presentiréis",
            "presentirán"
        ],
        "preterite-tense": [
            "presentí",
            "presentiste",
            "presintió",
            "presentimos",
            "presentisteis",
            "presintieron"
        ],
        "present-subjunctive-tense": [
            "presienta",
            "presientas",
            "presienta",
            "presintamos",
            "presintáis",
            "presientan"
        ],
        "future-subjunctive-tense": [
            "presintiere",
            "presintieres",
            "presintiere",
            "presintiéremos",
            "presintiereis",
            "presintieren"
        ]
    },
    "preservar": {
        "present-tense": [
            "preservo",
            "preservas",
            "preserva",
            "preservamos",
            "preserváis",
            "preservan"
        ],
        "future-tense": [
            "preservaré",
            "preservarás",
            "preservará",
            "preservaremos",
            "preservaréis",
            "preservarán"
        ],
        "preterite-tense": [
            "preservé",
            "preservaste",
            "preservó",
            "preservamos",
            "preservasteis",
            "preservaron"
        ],
        "present-subjunctive-tense": [
            "preserve",
            "preserves",
            "preserve",
            "preservemos",
            "preservéis",
            "preserven"
        ],
        "future-subjunctive-tense": [
            "preservare",
            "preservares",
            "preservare",
            "preserváremos",
            "preservareis",
            "preservaren"
        ]
    },
    "prever": {
        "present-tense": [
            "preveo",
            "prevés",
            "prevé",
            "prevemos",
            "prevéis",
            "prevén"
        ],
        "future-tense": [
            "preveré",
            "preverás",
            "preverá",
            "preveremos",
            "preveréis",
            "preverán"
        ],
        "preterite-tense": [
            "preví",
            "previste",
            "previó",
            "previmos",
            "previsteis",
            "previeron"
        ],
        "present-subjunctive-tense": [
            "prevea",
            "preveas",
            "prevea",
            "preveamos",
            "preveáis",
            "prevean"
        ],
        "future-subjunctive-tense": [
            "previere",
            "previeres",
            "previere",
            "previéremos",
            "previereis",
            "previeren"
        ]
    },
    "probar": {
        "present-tense": [
            "pruebo",
            "pruebas",
            "prueba",
            "probamos",
            "probáis",
            "prueban"
        ],
        "future-tense": [
            "probaré",
            "probarás",
            "probará",
            "probaremos",
            "probaréis",
            "probarán"
        ],
        "preterite-tense": [
            "probé",
            "probaste",
            "probó",
            "probamos",
            "probasteis",
            "probaron"
        ],
        "present-subjunctive-tense": [
            "pruebe",
            "pruebes",
            "pruebe",
            "probemos",
            "probéis",
            "prueben"
        ],
        "future-subjunctive-tense": [
            "probare",
            "probares",
            "probare",
            "probáremos",
            "probareis",
            "probaren"
        ]
    },
    "producir": {
        "present-tense": [
            "produzco",
            "produces",
            "produce",
            "producimos",
            "producís",
            "producen"
        ],
        "future-tense": [
            "produciré",
            "producirás",
            "producirá",
            "produciremos",
            "produciréis",
            "producirán"
        ],
        "preterite-tense": [
            "produje",
            "produjiste",
            "produjo",
            "produjimos",
            "produjisteis",
            "produjeron"
        ],
        "present-subjunctive-tense": [
            "produzca",
            "produzcas",
            "produzca",
            "produzcamos",
            "produzcáis",
            "produzcan"
        ],
        "future-subjunctive-tense": [
            "produjere",
            "produjeres",
            "produjere",
            "produjéremos",
            "produjereis",
            "produjeren"
        ]
    },
    "prohibir": {
        "present-tense": [
            "prohíbo",
            "prohíbes",
            "prohíbe",
            "prohibimos",
            "prohibís",
            "prohíben"
        ],
        "future-tense": [
            "prohibiré",
            "prohibirás",
            "prohibirá",
            "prohibiremos",
            "prohibiréis",
            "prohibirán"
        ],
        "preterite-tense": [
            "prohibí",
            "prohibiste",
            "prohibió",
            "prohibimos",
            "prohibisteis",
            "prohibieron"
        ],
        "present-subjunctive-tense": [
            "prohíba",
            "prohíbas",
            "prohíba",
            "prohibamos",
            "prohibáis",
            "prohíban"
        ],
        "future-subjunctive-tense": [
            "prohibiere",
            "prohibieres",
            "prohibiere",
            "prohibiéremos",
            "prohibiereis",
            "prohibieren"
        ]
    },
    "prometer": {
        "present-tense": [
            "prometo",
            "prometes",
            "promete",
            "prometemos",
            "prometéis",
            "prometen"
        ],
        "future-tense": [
            "prometeré",
            "prometerás",
            "prometerá",
            "prometeremos",
            "prometeréis",
            "prometerán"
        ],
        "preterite-tense": [
            "prometí",
            "prometiste",
            "prometió",
            "prometimos",
            "prometisteis",
            "prometieron"
        ],
        "present-subjunctive-tense": [
            "prometa",
            "prometas",
            "prometa",
            "prometamos",
            "prometáis",
            "prometan"
        ],
        "future-subjunctive-tense": [
            "prometiere",
            "prometieres",
            "prometiere",
            "prometiéremos",
            "prometiereis",
            "prometieren"
        ]
    },
    "proponer": {
        "present-tense": [
            "propongo",
            "propones",
            "propone",
            "proponemos",
            "proponéis",
            "proponen"
        ],
        "future-tense": [
            "propondré",
            "propondrás",
            "propondrá",
            "propondremos",
            "propondréis",
            "propondrán"
        ],
        "preterite-tense": [
            "propuse",
            "propusiste",
            "propuso",
            "propusimos",
            "propusisteis",
            "propusieron"
        ],
        "present-subjunctive-tense": [
            "proponga",
            "propongas",
            "proponga",
            "propongamos",
            "propongáis",
            "propongan"
        ],
        "future-subjunctive-tense": [
            "propusiere",
            "propusieres",
            "propusiere",
            "propusiéremos",
            "propusiereis",
            "propusieren"
        ]
    },
    "proseguir": {
        "present-tense": [
            "prosigo",
            "prosigues",
            "prosigue",
            "proseguimos",
            "proseguís",
            "prosiguen"
        ],
        "future-tense": [
            "proseguiré",
            "proseguirás",
            "proseguirá",
            "proseguiremos",
            "proseguiréis",
            "proseguirán"
        ],
        "preterite-tense": [
            "proseguí",
            "proseguiste",
            "prosiguió",
            "proseguimos",
            "proseguisteis",
            "prosiguieron"
        ],
        "present-subjunctive-tense": [
            "prosiga",
            "prosigas",
            "prosiga",
            "prosigamos",
            "prosigáis",
            "prosigan"
        ],
        "future-subjunctive-tense": [
            "prosiguiere",
            "prosiguieres",
            "prosiguiere",
            "prosiguiéremos",
            "prosiguiereis",
            "prosiguieren"
        ]
    },
    "proteger": {
        "present-tense": [
            "protejo",
            "proteges",
            "protege",
            "protegemos",
            "protegéis",
            "protegen"
        ],
        "future-tense": [
            "protegeré",
            "protegerás",
            "protegerá",
            "protegeremos",
            "protegeréis",
            "protegerán"
        ],
        "preterite-tense": [
            "protegí",
            "protegiste",
            "protegió",
            "protegimos",
            "protegisteis",
            "protegieron"
        ],
        "present-subjunctive-tense": [
            "proteja",
            "protejas",
            "proteja",
            "protejamos",
            "protejáis",
            "protejan"
        ],
        "future-subjunctive-tense": [
            "protegiere",
            "protegieres",
            "protegiere",
            "protegiéremos",
            "protegiereis",
            "protegieren"
        ]
    },
    "protestar": {
        "present-tense": [
            "protesto",
            "protestas",
            "protesta",
            "protestamos",
            "protestáis",
            "protestan"
        ],
        "future-tense": [
            "protestaré",
            "protestarás",
            "protestará",
            "protestaremos",
            "protestaréis",
            "protestarán"
        ],
        "preterite-tense": [
            "protesté",
            "protestaste",
            "protestó",
            "protestamos",
            "protestasteis",
            "protestaron"
        ],
        "present-subjunctive-tense": [
            "proteste",
            "protestes",
            "proteste",
            "protestemos",
            "protestéis",
            "protesten"
        ],
        "future-subjunctive-tense": [
            "protestare",
            "protestares",
            "protestare",
            "protestáremos",
            "protestareis",
            "protestaren"
        ]
    },
    "provocar": {
        "present-tense": [
            "provoco",
            "provocas",
            "provoca",
            "provocamos",
            "provocáis",
            "provocan"
        ],
        "future-tense": [
            "provocaré",
            "provocarás",
            "provocará",
            "provocaremos",
            "provocaréis",
            "provocarán"
        ],
        "preterite-tense": [
            "provoqué",
            "provocaste",
            "provocó",
            "provocamos",
            "provocasteis",
            "provocaron"
        ],
        "present-subjunctive-tense": [
            "provoque",
            "provoques",
            "provoque",
            "provoquemos",
            "provoquéis",
            "provoquen"
        ],
        "future-subjunctive-tense": [
            "provocare",
            "provocares",
            "provocare",
            "provocáremos",
            "provocareis",
            "provocaren"
        ]
    },
    "publicar": {
        "present-tense": [
            "publico",
            "publicas",
            "publica",
            "publicamos",
            "publicáis",
            "publican"
        ],
        "future-tense": [
            "publicaré",
            "publicarás",
            "publicará",
            "publicaremos",
            "publicaréis",
            "publicarán"
        ],
        "preterite-tense": [
            "publiqué",
            "publicaste",
            "publicó",
            "publicamos",
            "publicasteis",
            "publicaron"
        ],
        "present-subjunctive-tense": [
            "publique",
            "publiques",
            "publique",
            "publiquemos",
            "publiquéis",
            "publiquen"
        ],
        "future-subjunctive-tense": [
            "publicare",
            "publicares",
            "publicare",
            "publicáremos",
            "publicareis",
            "publicaren"
        ]
    },
    "purificar": {
        "present-tense": [
            "purifico",
            "purificas",
            "purifica",
            "purificamos",
            "purificáis",
            "purifican"
        ],
        "future-tense": [
            "purificaré",
            "purificarás",
            "purificará",
            "purificaremos",
            "purificaréis",
            "purificarán"
        ],
        "preterite-tense": [
            "purifiqué",
            "purificaste",
            "purificó",
            "purificamos",
            "purificasteis",
            "purificaron"
        ],
        "present-subjunctive-tense": [
            "purifique",
            "purifiques",
            "purifique",
            "purifiquemos",
            "purifiquéis",
            "purifiquen"
        ],
        "future-subjunctive-tense": [
            "purificare",
            "purificares",
            "purificare",
            "purificáremos",
            "purificareis",
            "purificaren"
        ]
    },
    "quebrar": {
        "present-tense": [
            "quiebro",
            "quiebras",
            "quiebra",
            "quebramos",
            "quebráis",
            "quiebran"
        ],
        "future-tense": [
            "quebraré",
            "quebrarás",
            "quebrará",
            "quebraremos",
            "quebraréis",
            "quebrarán"
        ],
        "preterite-tense": [
            "quebré",
            "quebraste",
            "quebró",
            "quebramos",
            "quebrasteis",
            "quebraron"
        ],
        "present-subjunctive-tense": [
            "quiebre",
            "quiebres",
            "quiebre",
            "quebremos",
            "quebréis",
            "quiebren"
        ],
        "future-subjunctive-tense": [
            "quebrare",
            "quebrares",
            "quebrare",
            "quebráremos",
            "quebrareis",
            "quebraren"
        ]
    },
    "quebrarse": {
        "present-tense": [
            "me quiebro",
            "te quiebras",
            "se quiebra",
            "nos quebramos",
            "os quebráis",
            "se quiebran"
        ],
        "future-tense": [
            "me quebraré",
            "te quebrarás",
            "se quebrará",
            "nos quebraremos",
            "os quebraréis",
            "se quebrarán"
        ],
        "preterite-tense": [
            "me quebré",
            "te quebraste",
            "se quebró",
            "nos quebramos",
            "quebrasteis",
            "se quebraron"
        ],
        "present-subjunctive-tense": [
            "me quiebre",
            "te quiebres",
            "se quiebre",
            "nos quebremos",
            "os quebréis",
            "se quiebren"
        ],
        "future-subjunctive-tense": [
            "me quebrare",
            "te quebrares",
            "se quebrare",
            "nos quebráremos",
            "os quebrareis",
            "se quebraren"
        ]
    },
    "quedar": {
        "present-tense": [
            "quedo",
            "quedas",
            "queda",
            "quedamos",
            "quedáis",
            "quedan"
        ],
        "future-tense": [
            "quedaré",
            "quedarás",
            "quedará",
            "quedaremos",
            "quedaréis",
            "quedarán"
        ],
        "preterite-tense": [
            "quedé",
            "quedaste",
            "quedó",
            "quedamos",
            "quedasteis",
            "quedaron"
        ],
        "present-subjunctive-tense": [
            "quede",
            "quedes",
            "quede",
            "quedemos",
            "quedéis",
            "queden"
        ],
        "future-subjunctive-tense": [
            "quedare",
            "quedares",
            "quedare",
            "quedáremos",
            "quedareis",
            "quedaren"
        ]
    },
    "quedarse": {
        "present-tense": [
            "me quedo",
            "te quedas",
            "se queda",
            "nos quedamos",
            "os quedáis",
            "se quedan"
        ],
        "future-tense": [
            "me quedaré",
            "te quedarás",
            "se quedará",
            "nos quedaremos",
            "os quedaréis",
            "se quedarán"
        ],
        "preterite-tense": [
            "me quedé",
            "te quedaste",
            "se quedó",
            "nos quedamos",
            "os quedasteis",
            "se quedaron"
        ],
        "present-subjunctive-tense": [
            "me quede",
            "te quedes",
            "se quede",
            "nos quedemos",
            "os quedéis",
            "se queden"
        ],
        "future-subjunctive-tense": [
            "me quedare",
            "te quedares",
            "se quedare",
            "nos quedáremos",
            "os quedareis",
            "se quedaren"
        ]
    },
    "quejarse": {
        "present-tense": [
            "me quejo",
            "te quejas",
            "se queja",
            "nos quejamos",
            "os quejáis",
            "se quejan"
        ],
        "future-tense": [
            "me quejaré",
            "te quejarás",
            "se quejará",
            "nos quejaremos",
            "os quejaréis",
            "se quejarán"
        ],
        "preterite-tense": [
            "me quejé",
            "te quejaste",
            "se quejó",
            "nos quejamos",
            "os quejasteis",
            "se quejaron"
        ],
        "present-subjunctive-tense": [
            "me queje",
            "te quejes",
            "se queje",
            "nos quejemos",
            "os quejéis",
            "se quejen"
        ],
        "future-subjunctive-tense": [
            "me quejare",
            "te quejares",
            "se quejare",
            "nos quejáremos",
            "os quejareis",
            "se quejaren"
        ]
    },
    "quemar": {
        "present-tense": [
            "quemo",
            "quemas",
            "quema",
            "quemamos",
            "quemáis",
            "queman"
        ],
        "future-tense": [
            "quemaré",
            "quemarás",
            "quemará",
            "quemaremos",
            "quemaréis",
            "quemarán"
        ],
        "preterite-tense": [
            "quemé",
            "quemaste",
            "quemó",
            "quemamos",
            "quemasteis",
            "quemaron"
        ],
        "present-subjunctive-tense": [
            "queme",
            "quemes",
            "queme",
            "quememos",
            "queméis",
            "quemen"
        ],
        "future-subjunctive-tense": [
            "quemare",
            "quemares",
            "quemare",
            "quemáremos",
            "quemareis",
            "quemaren"
        ]
    },
    "quemarse": {
        "present-tense": [
            "me quemo",
            "te quemas",
            "se quema",
            "nos quemamos",
            "os quemáis",
            "se queman"
        ],
        "future-tense": [
            "me quemaré",
            "te quemarás",
            "se quemará",
            "nos quemaremos",
            "os quemaréis",
            "se quemarán"
        ],
        "preterite-tense": [
            "me quemé",
            "te quemaste",
            "se quemó",
            "nos quemamos",
            "os quemasteis",
            "se quemaron"
        ],
        "present-subjunctive-tense": [
            "me queme",
            "te quemes",
            "se queme",
            "nos quememos",
            "os queméis",
            "se quemen"
        ],
        "future-subjunctive-tense": [
            "me quemare",
            "te quemares",
            "se quemare",
            "nos quemáremos",
            "os quemareis",
            "se quemaren"
        ]
    },
    "realizar": {
        "present-tense": [
            "realizo",
            "realizas",
            "realiza",
            "realizamos",
            "realizáis",
            "realizan"
        ],
        "future-tense": [
            "realizaré",
            "realizarás",
            "realizará",
            "realizaremos",
            "realizaréis",
            "realizarán"
        ],
        "preterite-tense": [
            "realicé",
            "realizaste",
            "realizó",
            "realizamos",
            "realizasteis",
            "realizaron"
        ],
        "present-subjunctive-tense": [
            "realice",
            "realices",
            "realice",
            "realicemos",
            "realicéis",
            "realicen"
        ],
        "future-subjunctive-tense": [
            "realizare",
            "realizares",
            "realizare",
            "realizáremos",
            "realizareis",
            "realizaren"
        ]
    },
    "rechazar": {
        "present-tense": [
            "rechazo",
            "rechazas",
            "rechaza",
            "rechazamos",
            "rechazáis",
            "rechazan"
        ],
        "future-tense": [
            "rechazaré",
            "rechazarás",
            "rechazará",
            "rechazaremos",
            "rechazaréis",
            "rechazarán"
        ],
        "preterite-tense": [
            "rechacé",
            "rechazaste",
            "rechazó",
            "rechazamos",
            "rechazasteis",
            "rechazaron"
        ],
        "present-subjunctive-tense": [
            "rechace",
            "rechaces",
            "rechace",
            "rechacemos",
            "rechacéis",
            "rechacen"
        ],
        "future-subjunctive-tense": [
            "rechazare",
            "rechazares",
            "rechazare",
            "rechazáremos",
            "rechazareis",
            "rechazaren"
        ]
    },
    "recibir": {
        "present-tense": [
            "recibo",
            "recibes",
            "recibe",
            "recibimos",
            "recibís",
            "reciben"
        ],
        "future-tense": [
            "recibiré",
            "recibirás",
            "recibirá",
            "recibiremos",
            "recibiréis",
            "recibirán"
        ],
        "preterite-tense": [
            "recibí",
            "recibiste",
            "recibió",
            "recibimos",
            "recibisteis",
            "recibieron"
        ],
        "present-subjunctive-tense": [
            "reciba",
            "recibas",
            "reciba",
            "recibamos",
            "recibáis",
            "reciban"
        ],
        "future-subjunctive-tense": [
            "recibiere",
            "recibieres",
            "recibiere",
            "recibiéremos",
            "recibiereis",
            "recibieren"
        ]
    },
    "reciclar": {
        "present-tense": [
            "reciclo",
            "reciclas",
            "recicla",
            "reciclamos",
            "recicláis",
            "reciclan"
        ],
        "future-tense": [
            "reciclaré",
            "reciclarás",
            "reciclará",
            "reciclaremos",
            "reciclaréis",
            "reciclarán"
        ],
        "preterite-tense": [
            "reciclé",
            "reciclaste",
            "recicló",
            "reciclamos",
            "reciclasteis",
            "reciclaron"
        ],
        "present-subjunctive-tense": [
            "recicle",
            "recicles",
            "recicle",
            "reciclemos",
            "recicléis",
            "reciclen"
        ],
        "future-subjunctive-tense": [
            "reciclare",
            "reciclares",
            "reciclare",
            "recicláremos",
            "reciclareis",
            "reciclaren"
        ]
    },
    "recomendar": {
        "present-tense": [
            "recomiendo",
            "recomiendas",
            "recomienda",
            "recomendamos",
            "recomendáis",
            "recomiendan"
        ],
        "future-tense": [
            "recomendaré",
            "recomendarás",
            "recomendará",
            "recomendaremos",
            "recomendaréis",
            "recomendarán"
        ],
        "preterite-tense": [
            "recomendé",
            "recomendaste",
            "recomendó",
            "recomendamos",
            "recomendasteis",
            "recomendaron"
        ],
        "present-subjunctive-tense": [
            "recomiende",
            "recomiendes",
            "recomiende",
            "recomendemos",
            "recomendéis",
            "recomienden"
        ],
        "future-subjunctive-tense": [
            "recomendare",
            "recomendares",
            "recomendare",
            "recomendáremos",
            "recomendareis",
            "recomendaren"
        ]
    },
    "reconocer": {
        "present-tense": [
            "reconozco",
            "reconoces",
            "reconoce",
            "reconocemos",
            "reconocéis",
            "reconocen"
        ],
        "future-tense": [
            "reconoceré",
            "reconocerás",
            "reconocerá",
            "reconoceremos",
            "reconoceréis",
            "reconocerán"
        ],
        "preterite-tense": [
            "reconocí",
            "reconociste",
            "reconoció",
            "reconocimos",
            "reconocisteis",
            "reconocieron"
        ],
        "present-subjunctive-tense": [
            "reconozca",
            "reconozcas",
            "reconozca",
            "reconozcamos",
            "reconozcáis",
            "reconozcan"
        ],
        "future-subjunctive-tense": [
            "reconociere",
            "reconocieres",
            "reconociere",
            "reconociéremos",
            "reconociereis",
            "reconocieren"
        ]
    },
    "recordar": {
        "present-tense": [
            "recuerdo",
            "recuerdas",
            "recuerda",
            "recordamos",
            "recordáis",
            "recuerdan"
        ],
        "future-tense": [
            "recordaré",
            "recordarás",
            "recordará",
            "recordaremos",
            "recordaréis",
            "recordarán"
        ],
        "preterite-tense": [
            "recordé",
            "recordaste",
            "recordó",
            "recordamos",
            "recordasteis",
            "recordaron"
        ],
        "present-subjunctive-tense": [
            "recuerde",
            "recuerdes",
            "recuerde",
            "recordemos",
            "recordéis",
            "recuerden"
        ],
        "future-subjunctive-tense": [
            "recordare",
            "recordares",
            "recordare",
            "recordáremos",
            "recordareis",
            "recordaren"
        ]
    },
    "renovar": {
        "present-tense": [
            "renuevo",
            "renuevas",
            "renueva",
            "renovamos",
            "renováis",
            "renuevan"
        ],
        "future-tense": [
            "renovaré",
            "renovarás",
            "renovará",
            "renovaremos",
            "renovaréis",
            "renovarán"
        ],
        "preterite-tense": [
            "renové",
            "renovaste",
            "renovó",
            "renovamos",
            "renovasteis",
            "renovaron"
        ],
        "present-subjunctive-tense": [
            "renueve",
            "renueves",
            "renueve",
            "renovemos",
            "renovéis",
            "renueven"
        ],
        "future-subjunctive-tense": [
            "renovare",
            "renovares",
            "renovare",
            "renováremos",
            "renovareis",
            "renovaren"
        ]
    },
    "reducir": {
        "present-tense": [
            "reduzco",
            "reduces",
            "reduce",
            "reducimos",
            "reducís",
            "reducen"
        ],
        "future-tense": [
            "reduciré",
            "reducirás",
            "reducirá",
            "reduciremos",
            "reduciréis",
            "reducirán"
        ],
        "preterite-tense": [
            "reduje",
            "redujiste",
            "redujo",
            "redujimos",
            "redujisteis",
            "redujeron"
        ],
        "present-subjunctive-tense": [
            "reduzca",
            "reduzcas",
            "reduzca",
            "reduzcamos",
            "reduzcáis",
            "reduzcan"
        ],
        "future-subjunctive-tense": [
            "redujere",
            "redujeres",
            "redujere",
            "redujéremos",
            "redujereis",
            "redujeren"
        ]
    },
    "regalar": {
        "present-tense": [
            "regalo",
            "regalas",
            "regala",
            "regalamos",
            "regaláis",
            "regalan"
        ],
        "future-tense": [
            "regalaré",
            "regalarás",
            "regalará",
            "regalaremos",
            "regalaréis",
            "regalarán"
        ],
        "preterite-tense": [
            "regalé",
            "regalaste",
            "regaló",
            "regalamos",
            "regalasteis",
            "regalaron"
        ],
        "present-subjunctive-tense": [
            "regale",
            "regales",
            "regale",
            "regalemos",
            "regaléis",
            "regalen"
        ],
        "future-subjunctive-tense": [
            "regalare",
            "regalares",
            "regalare",
            "regaláremos",
            "regalareis",
            "regalaren"
        ]
    },
    "regar": {
        "present-tense": [
            "riego",
            "riegas",
            "riega",
            "regamos",
            "regáis",
            "riegan"
        ],
        "future-tense": [
            "regaré",
            "regarás",
            "regará",
            "regaremos",
            "regaréis",
            "regarán"
        ],
        "preterite-tense": [
            "regué",
            "regaste",
            "regó",
            "regamos",
            "regasteis",
            "regaron"
        ],
        "present-subjunctive-tense": [
            "riegue",
            "riegues",
            "riegue",
            "reguemos",
            "reguéis",
            "rieguen"
        ],
        "future-subjunctive-tense": [
            "regare",
            "regares",
            "regare",
            "regáremos",
            "regareis",
            "regaren"
        ]
    },
    "regatear": {
        "present-tense": [
            "regateo",
            "regateas",
            "regatea",
            "regateamos",
            "regateáis",
            "regatean"
        ],
        "future-tense": [
            "regatearé",
            "regatearás",
            "regateará",
            "regatearemos",
            "regatearéis",
            "regatearán"
        ],
        "preterite-tense": [
            "regateé",
            "regateaste",
            "regateó",
            "regateamos",
            "regateasteis",
            "regatearon"
        ],
        "present-subjunctive-tense": [
            "regatee",
            "regatees",
            "regatee",
            "regateemos",
            "regateéis",
            "regateen"
        ],
        "future-subjunctive-tense": [
            "regateare",
            "regateares",
            "regateare",
            "regateáremos",
            "regateareis",
            "regatearen"
        ]
    },
    "regir": {
        "present-tense": [
            "rijo",
            "riges",
            "rige",
            "regimos",
            "regís",
            "rigen"
        ],
        "future-tense": [
            "regiré",
            "regirás",
            "regirá",
            "regiremos",
            "regiréis",
            "regirán"
        ],
        "preterite-tense": [
            "regí",
            "registe",
            "rigió",
            "regimos",
            "registeis",
            "rigieron"
        ],
        "present-subjunctive-tense": [
            "rija",
            "rijas",
            "rija",
            "rijamos",
            "rijáis",
            "rijan"
        ],
        "future-subjunctive-tense": [
            "rigiere",
            "rigieres",
            "rigiere",
            "rigiéremos",
            "rigiereis",
            "rigieren"
        ]
    },
    "registrar": {
        "present-tense": [
            "registro",
            "registras",
            "registra",
            "registramos",
            "registráis",
            "registran"
        ],
        "future-tense": [
            "registraré",
            "registrarás",
            "registrará",
            "registraremos",
            "registraréis",
            "registrarán"
        ],
        "preterite-tense": [
            "registré",
            "registraste",
            "registró",
            "registramos",
            "registrasteis",
            "registraron"
        ],
        "present-subjunctive-tense": [
            "registre",
            "registres",
            "registre",
            "registremos",
            "registréis",
            "registren"
        ],
        "future-subjunctive-tense": [
            "registrare",
            "registrares",
            "registrare",
            "registráremos",
            "registrareis",
            "registraren"
        ]
    },
    "registrarse": {
        "present-tense": [
            "me registro",
            "te registras",
            "se registra",
            "nos registramos",
            "os registráis",
            "se registran"
        ],
        "future-tense": [
            "me registraré",
            "te registrarás",
            "se registrará",
            "nos registraremos",
            "os registraréis",
            "se registrarán"
        ],
        "preterite-tense": [
            "me registré",
            "te registraste",
            "se registró",
            "nos registramos",
            "os registrasteis",
            "se registraron"
        ],
        "present-subjunctive-tense": [
            "me registre",
            "te registres",
            "se registre",
            "nos registremos",
            "os registréis",
            "se registren"
        ],
        "future-subjunctive-tense": [
            "me registrare",
            "te registrares",
            "se registrare",
            "nos registráremos",
            "os registrareis",
            "se registraren"
        ]
    },
    "regresar": {
        "present-tense": [
            "regreso",
            "regresas",
            "regresa",
            "regresamos",
            "regresáis",
            "regresan"
        ],
        "future-tense": [
            "regresaré",
            "regresarás",
            "regresará",
            "regresaremos",
            "regresaréis",
            "regresarán"
        ],
        "preterite-tense": [
            "regresé",
            "regresaste",
            "regresó",
            "regresamos",
            "regresasteis",
            "regresaron"
        ],
        "present-subjunctive-tense": [
            "regrese",
            "regreses",
            "regrese",
            "regresemos",
            "regreséis",
            "regresen"
        ],
        "future-subjunctive-tense": [
            "regresare",
            "regresares",
            "regresare",
            "regresáremos",
            "regresareis",
            "regresaren"
        ]
    },
    "regular": {
        "present-tense": [
            "regulo",
            "regulas",
            "regula",
            "regulamos",
            "reguláis",
            "regulan"
        ],
        "future-tense": [
            "regularé",
            "regularás",
            "regulará",
            "regularemos",
            "regularéis",
            "regularán"
        ],
        "preterite-tense": [
            "regulé",
            "regulaste",
            "reguló",
            "regulamos",
            "regulasteis",
            "regularon"
        ],
        "present-subjunctive-tense": [
            "regule",
            "regules",
            "regule",
            "regulemos",
            "reguléis",
            "regulen"
        ],
        "future-subjunctive-tense": [
            "regulare",
            "regulares",
            "regulare",
            "reguláremos",
            "regulareis",
            "regularen"
        ]
    },
    "rehusar": {
        "present-tense": [
            "rehúso",
            "rehúsas",
            "rehúsa",
            "rehusamos",
            "rehusáis",
            "rehúsan"
        ],
        "future-tense": [
            "rehusaré",
            "rehusarás",
            "rehusará",
            "rehusaremos",
            "rehusaréis",
            "rehusarán"
        ],
        "preterite-tense": [
            "rehusé",
            "rehusaste",
            "rehusó",
            "rehusamos",
            "rehusasteis",
            "rehusaron"
        ],
        "present-subjunctive-tense": [
            "rehúse",
            "rehúses",
            "rehúse",
            "rehusemos",
            "rehuséis",
            "rehúsen"
        ],
        "future-subjunctive-tense": [
            "rehusare",
            "rehusares",
            "rehusare",
            "rehusáremos",
            "rehusareis",
            "rehusaren"
        ]
    },
    "reír": {
        "present-tense": [
            "río",
            "ríes",
            "ríe",
            "reímos",
            "reís",
            "ríen"
        ],
        "future-tense": [
            "reiré",
            "reirás",
            "reirá",
            "reiremos",
            "reiréis",
            "reirán"
        ],
        "preterite-tense": [
            "reí",
            "reíste",
            "rio",
            "reímos",
            "reísteis",
            "rieron"
        ],
        "present-subjunctive-tense": [
            "ría",
            "rías",
            "ría",
            "riamos",
            "riáis",
            "rían"
        ],
        "future-subjunctive-tense": [
            "riere",
            "rieres",
            "riere",
            "riéremos",
            "riereis",
            "rieren"
        ]
    },
    "renacer": {
        "present-tense": [
            "renazco",
            "renaces",
            "renace",
            "renacemos",
            "renacéis",
            "renacen"
        ],
        "future-tense": [
            "renaceré",
            "renacerás",
            "renacerá",
            "renaceremos",
            "renaceréis",
            "renacerán"
        ],
        "preterite-tense": [
            "renací",
            "renaciste",
            "renació",
            "renacimos",
            "renacisteis",
            "renacieron"
        ],
        "present-subjunctive-tense": [
            "renazca",
            "renazcas",
            "renazca",
            "renazcamos",
            "renazcáis",
            "renazcan"
        ],
        "future-subjunctive-tense": [
            "renaciere",
            "renacieres",
            "renaciere",
            "renaciéremos",
            "renaciereis",
            "renacieren"
        ]
    },
    "renunciar": {
        "present-tense": [
            "renuncio",
            "renuncias",
            "renuncia",
            "renunciamos",
            "renunciáis",
            "renuncian"
        ],
        "future-tense": [
            "renunciaré",
            "renunciarás",
            "renunciará",
            "renunciaremos",
            "renunciaréis",
            "renunciarán"
        ],
        "preterite-tense": [
            "renuncié",
            "renunciaste",
            "renunció",
            "renunciamos",
            "renunciasteis",
            "renunciaron"
        ],
        "present-subjunctive-tense": [
            "renuncie",
            "renuncies",
            "renuncie",
            "renunciemos",
            "renunciéis",
            "renuncien"
        ],
        "future-subjunctive-tense": [
            "renunciare",
            "renunciares",
            "renunciare",
            "renunciáremos",
            "renunciareis",
            "renunciaren"
        ]
    },
    "reñir": {
        "present-tense": [
            "riño",
            "riñes",
            "riñe",
            "reñimos",
            "reñís",
            "riñen"
        ],
        "future-tense": [
            "reñiré",
            "reñirás",
            "reñirá",
            "reñiremos",
            "reñiréis",
            "reñirán"
        ],
        "preterite-tense": [
            "reñí",
            "reñiste",
            "riñó",
            "reñimos",
            "reñisteis",
            "riñeron"
        ],
        "present-subjunctive-tense": [
            "riña",
            "riñas",
            "riña",
            "riñamos",
            "riñáis",
            "riñan"
        ],
        "future-subjunctive-tense": [
            "riñere",
            "riñeres",
            "riñere",
            "riñéremos",
            "riñereis",
            "riñeren"
        ]
    },
    "reparar": {
        "present-tense": [
            "reparo",
            "reparas",
            "repara",
            "reparamos",
            "reparáis",
            "reparan"
        ],
        "future-tense": [
            "repararé",
            "repararás",
            "reparará",
            "repararemos",
            "repararéis",
            "repararán"
        ],
        "preterite-tense": [
            "reparé",
            "reparaste",
            "reparó",
            "reparamos",
            "reparasteis",
            "repararon"
        ],
        "present-subjunctive-tense": [
            "repare",
            "repares",
            "repare",
            "reparemos",
            "reparéis",
            "reparen"
        ],
        "future-subjunctive-tense": [
            "reparare",
            "reparares",
            "reparare",
            "reparáremos",
            "reparareis",
            "repararen"
        ]
    },
    "repasar": {
        "present-tense": [
            "repaso",
            "repasas",
            "repasa",
            "repasamos",
            "repasáis",
            "repasan"
        ],
        "future-tense": [
            "repasaré",
            "repasarás",
            "repasará",
            "repasaremos",
            "repasaréis",
            "repasarán"
        ],
        "preterite-tense": [
            "repasé",
            "repasaste",
            "repasó",
            "repasamos",
            "repasasteis",
            "repasaron"
        ],
        "present-subjunctive-tense": [
            "repase",
            "repases",
            "repase",
            "repasemos",
            "repaséis",
            "repasen"
        ],
        "future-subjunctive-tense": [
            "repasare",
            "repasares",
            "repasare",
            "repasáremos",
            "repasareis",
            "repasaren"
        ]
    },
    "repetir": {
        "present-tense": [
            "repito",
            "repites",
            "repite",
            "repetimos",
            "repetís",
            "repiten"
        ],
        "future-tense": [
            "repetiré",
            "repetirás",
            "repetirá",
            "repetiremos",
            "repetiréis",
            "repetirán"
        ],
        "preterite-tense": [
            "repetí",
            "repetiste",
            "repitió",
            "repetimos",
            "repetisteis",
            "repitieron"
        ],
        "present-subjunctive-tense": [
            "repita",
            "repitas",
            "repita",
            "repitamos",
            "repitáis",
            "repitan"
        ],
        "future-subjunctive-tense": [
            "repitiere",
            "repitieres",
            "repitiere",
            "repitiéremos",
            "repitiereis",
            "repitieren"
        ]
    },
    "replicar": {
        "present-tense": [
            "replico",
            "replicas",
            "replica",
            "replicamos",
            "replicáis",
            "replican"
        ],
        "future-tense": [
            "replicaré",
            "replicarás",
            "replicará",
            "replicaremos",
            "replicaréis",
            "replicarán"
        ],
        "preterite-tense": [
            "repliqué",
            "replicaste",
            "replicó",
            "replicamos",
            "replicasteis",
            "replicaron"
        ],
        "present-subjunctive-tense": [
            "replique",
            "repliques",
            "replique",
            "repliquemos",
            "repliquéis",
            "repliquen"
        ],
        "future-subjunctive-tense": [
            "replicare",
            "replicares",
            "replicare",
            "replicáremos",
            "replicareis",
            "replicaren"
        ]
    },
    "reportar": {
        "present-tense": [
            "reporto",
            "reportas",
            "reporta",
            "reportamos",
            "reportáis",
            "reportan"
        ],
        "future-tense": [
            "reportaré",
            "reportarás",
            "reportará",
            "reportaremos",
            "reportaréis",
            "reportarán"
        ],
        "preterite-tense": [
            "reporté",
            "reportaste",
            "reportó",
            "reportamos",
            "reportasteis",
            "reportaron"
        ],
        "present-subjunctive-tense": [
            "reporte",
            "reportes",
            "reporte",
            "reportemos",
            "reportéis",
            "reporten"
        ],
        "future-subjunctive-tense": [
            "reportare",
            "reportares",
            "reportare",
            "reportáremos",
            "reportareis",
            "reportaren"
        ]
    },
    "requerir": {
        "present-tense": [
            "requiero",
            "requieres",
            "requiere",
            "requerimos",
            "requerís",
            "requieren"
        ],
        "future-tense": [
            "requeriré",
            "requerirás",
            "requerirá",
            "requeriremos",
            "requeriréis",
            "requerirán"
        ],
        "preterite-tense": [
            "requerí",
            "requeriste",
            "requirió",
            "requerimos",
            "requeristeis",
            "requirieron"
        ],
        "present-subjunctive-tense": [
            "requiera",
            "requieras",
            "requiera",
            "requiramos",
            "requiráis",
            "requieran"
        ],
        "future-subjunctive-tense": [
            "requiriere",
            "requirieres",
            "requiriere",
            "requiriéremos",
            "requiriereis",
            "requirieren"
        ]
    },
    "soler": {
        "future-subjunctive-tense": [
            "soliere",
            "solieres",
            "soliere",
            "soliéremos",
            "soliereis",
            "solieren"
        ],
        "present-tense": [
            "suelo",
            "sueles",
            "suele",
            "solemos",
            "soléis",
            "suelen"
        ],
        "future-tense": [
            "soleré",
            "solerás",
            "solerá",
            "soleremos",
            "soleréis",
            "solerán"
        ],
        "preterite-tense": [
            "solí",
            "soliste",
            "solió",
            "solimos",
            "solisteis",
            "solieron"
        ],
        "present-subjunctive-tense": [
            "suela",
            "suelas",
            "suela",
            "solamos",
            "soláis",
            "suelan"
        ]
    },
    "reservar": {
        "present-tense": [
            "reservo",
            "reservas",
            "reserva",
            "reservamos",
            "reserváis",
            "reservan"
        ],
        "future-tense": [
            "reservaré",
            "reservarás",
            "reservará",
            "reservaremos",
            "reservaréis",
            "reservarán"
        ],
        "preterite-tense": [
            "reservé",
            "reservaste",
            "reservó",
            "reservamos",
            "reservasteis",
            "reservaron"
        ],
        "present-subjunctive-tense": [
            "reserve",
            "reserves",
            "reserve",
            "reservemos",
            "reservéis",
            "reserven"
        ],
        "future-subjunctive-tense": [
            "reservare",
            "reservares",
            "reservare",
            "reserváremos",
            "reservareis",
            "reservaren"
        ]
    },
    "resolver": {
        "present-tense": [
            "resuelvo",
            "resuelves",
            "resuelve",
            "resolvemos",
            "resolvéis",
            "resuelven"
        ],
        "future-tense": [
            "resolveré",
            "resolverás",
            "resolverá",
            "resolveremos",
            "resolveréis",
            "resolverán"
        ],
        "preterite-tense": [
            "resolví",
            "resolviste",
            "resolvió",
            "resolvimos",
            "resolvisteis",
            "resolvieron"
        ],
        "present-subjunctive-tense": [
            "resuelva",
            "resuelvas",
            "resuelva",
            "resolvamos",
            "resolváis",
            "resuelvan"
        ],
        "future-subjunctive-tense": [
            "resolviere",
            "resolvieres",
            "resolviere",
            "resolviéremos",
            "resolviereis",
            "resolvieren"
        ]
    },
    "respetar": {
        "present-tense": [
            "respeto",
            "respetas",
            "respeta",
            "respetamos",
            "respetáis",
            "respetan"
        ],
        "future-tense": [
            "respetaré",
            "respetarás",
            "respetará",
            "respetaremos",
            "respetaréis",
            "respetarán"
        ],
        "preterite-tense": [
            "respeté",
            "respetaste",
            "respetó",
            "respetamos",
            "respetasteis",
            "respetaron"
        ],
        "present-subjunctive-tense": [
            "respete",
            "respetes",
            "respete",
            "respetemos",
            "respetéis",
            "respeten"
        ],
        "future-subjunctive-tense": [
            "respetare",
            "respetares",
            "respetare",
            "respetáremos",
            "respetareis",
            "respetaren"
        ]
    },
    "respirar": {
        "present-tense": [
            "respiro",
            "respiras",
            "respira",
            "respiramos",
            "respiráis",
            "respiran"
        ],
        "future-tense": [
            "respiraré",
            "respirarás",
            "respirará",
            "respiraremos",
            "respiraréis",
            "respirarán"
        ],
        "preterite-tense": [
            "respiré",
            "respiraste",
            "respiró",
            "respiramos",
            "respirasteis",
            "respiraron"
        ],
        "present-subjunctive-tense": [
            "respire",
            "respires",
            "respire",
            "respiremos",
            "respiréis",
            "respiren"
        ],
        "future-subjunctive-tense": [
            "respirare",
            "respirares",
            "respirare",
            "respiráremos",
            "respirareis",
            "respiraren"
        ]
    },
    "responder": {
        "present-tense": [
            "respondo",
            "respondes",
            "responde",
            "respondemos",
            "respondéis",
            "responden"
        ],
        "future-tense": [
            "responderé",
            "responderás",
            "responderá",
            "responderemos",
            "responderéis",
            "responderán"
        ],
        "preterite-tense": [
            "respondí",
            "respondiste",
            "respondió",
            "respondimos",
            "respondisteis",
            "respondieron"
        ],
        "present-subjunctive-tense": [
            "responda",
            "respondas",
            "responda",
            "respondamos",
            "respondáis",
            "respondan"
        ],
        "future-subjunctive-tense": [
            "respondiere",
            "respondieres",
            "respondiere",
            "respondiéremos",
            "respondiereis",
            "respondieren"
        ]
    },
    "resultar": {
        "present-tense": [
            "resulto",
            "resultas",
            "resulta",
            "resultamos",
            "resultáis",
            "resultan"
        ],
        "future-tense": [
            "resultaré",
            "resultarás",
            "resultará",
            "resultaremos",
            "resultaréis",
            "resultarán"
        ],
        "preterite-tense": [
            "resulté",
            "resultaste",
            "resultó",
            "resultamos",
            "resultasteis",
            "resultaron"
        ],
        "present-subjunctive-tense": [
            "resulte",
            "resultes",
            "resulte",
            "resultemos",
            "resultéis",
            "resulten"
        ],
        "future-subjunctive-tense": [
            "resultare",
            "resultares",
            "resultare",
            "resultáremos",
            "resultareis",
            "resultaren"
        ]
    },
    "revelar": {
        "present-tense": [
            "revelo",
            "revelas",
            "revela",
            "revelamos",
            "reveláis",
            "revelan"
        ],
        "future-tense": [
            "revelaré",
            "revelarás",
            "revelará",
            "revelaremos",
            "revelaréis",
            "revelarán"
        ],
        "preterite-tense": [
            "revelé",
            "revelaste",
            "reveló",
            "revelamos",
            "revelasteis",
            "revelaron"
        ],
        "present-subjunctive-tense": [
            "revele",
            "reveles",
            "revele",
            "revelemos",
            "reveléis",
            "revelen"
        ],
        "future-subjunctive-tense": [
            "revelare",
            "revelares",
            "revelare",
            "reveláremos",
            "revelareis",
            "revelaren"
        ]
    },
    "rezar": {
        "present-tense": [
            "rezo",
            "rezas",
            "reza",
            "rezamos",
            "rezáis",
            "rezan"
        ],
        "future-tense": [
            "rezaré",
            "rezarás",
            "rezará",
            "rezaremos",
            "rezaréis",
            "rezarán"
        ],
        "preterite-tense": [
            "recé",
            "rezaste",
            "rezó",
            "rezamos",
            "rezasteis",
            "rezaron"
        ],
        "present-subjunctive-tense": [
            "rece",
            "reces",
            "rece",
            "recemos",
            "recéis",
            "recen"
        ],
        "future-subjunctive-tense": [
            "rezare",
            "rezares",
            "rezare",
            "rezáremos",
            "rezareis",
            "rezaren"
        ]
    },
    "robar": {
        "present-tense": [
            "robo",
            "robas",
            "roba",
            "robamos",
            "robáis",
            "roban"
        ],
        "future-tense": [
            "robaré",
            "robarás",
            "robará",
            "robaremos",
            "robaréis",
            "robarán"
        ],
        "preterite-tense": [
            "robé",
            "robaste",
            "robó",
            "robamos",
            "robasteis",
            "robaron"
        ],
        "present-subjunctive-tense": [
            "robe",
            "robes",
            "robe",
            "robemos",
            "robéis",
            "roben"
        ],
        "future-subjunctive-tense": [
            "robare",
            "robares",
            "robare",
            "robáremos",
            "robareis",
            "robaren"
        ]
    },
    "rogar": {
        "present-tense": [
            "ruego",
            "ruegas",
            "ruega",
            "rogamos",
            "rogáis",
            "ruegan"
        ],
        "future-tense": [
            "rogaré",
            "rogarás",
            "rogará",
            "rogaremos",
            "rogaréis",
            "rogarán"
        ],
        "preterite-tense": [
            "rogué",
            "rogaste",
            "rogó",
            "rogamos",
            "rogasteis",
            "rogaron"
        ],
        "present-subjunctive-tense": [
            "ruegue",
            "ruegues",
            "ruegue",
            "roguemos",
            "roguéis",
            "rueguen"
        ],
        "future-subjunctive-tense": [
            "rogare",
            "rogares",
            "rogare",
            "rogáremos",
            "rogareis",
            "rogaren"
        ]
    },
    "romper": {
        "present-tense": [
            "rompo",
            "rompes",
            "rompe",
            "rompemos",
            "rompéis",
            "rompen"
        ],
        "future-tense": [
            "romperé",
            "romperás",
            "romperá",
            "romperemos",
            "romperéis",
            "romperán"
        ],
        "preterite-tense": [
            "rompí",
            "rompiste",
            "rompió",
            "rompimos",
            "rompisteis",
            "rompieron"
        ],
        "present-subjunctive-tense": [
            "rompa",
            "rompas",
            "rompa",
            "rompamos",
            "rompáis",
            "rompan"
        ],
        "future-subjunctive-tense": [
            "rompiere",
            "rompieres",
            "rompiere",
            "rompiéremos",
            "rompiereis",
            "rompieren"
        ]
    },
    "saber": {
        "present-tense": [
            "sé",
            "sabes",
            "sabe",
            "sabemos",
            "sabéis",
            "saben"
        ],
        "future-tense": [
            "sabré",
            "sabrás",
            "sabrá",
            "sabremos",
            "sabréis",
            "sabrán"
        ],
        "preterite-tense": [
            "supe",
            "supiste",
            "supo",
            "supimos",
            "supisteis",
            "supieron"
        ],
        "present-subjunctive-tense": [
            "sepa",
            "sepas",
            "sepa",
            "sepamos",
            "sepáis",
            "sepan"
        ],
        "future-subjunctive-tense": [
            "supiere",
            "supieres",
            "supiere",
            "supiéremos",
            "supiereis",
            "supieren"
        ]
    },
    "sacar": {
        "present-tense": [
            "saco",
            "sacas",
            "saca",
            "sacamos",
            "sacáis",
            "sacan"
        ],
        "future-tense": [
            "sacaré",
            "sacarás",
            "sacará",
            "sacaremos",
            "sacaréis",
            "sacarán"
        ],
        "preterite-tense": [
            "saqué",
            "sacaste",
            "sacó",
            "sacamos",
            "sacasteis",
            "sacaron"
        ],
        "present-subjunctive-tense": [
            "saque",
            "saques",
            "saque",
            "saquemos",
            "saquéis",
            "saquen"
        ],
        "future-subjunctive-tense": [
            "sacare",
            "sacares",
            "sacare",
            "sacáremos",
            "sacareis",
            "sacaren"
        ]
    },
    "sacrificar": {
        "present-tense": [
            "sacrifico",
            "sacrificas",
            "sacrifica",
            "sacrificamos",
            "sacrificáis",
            "sacrifican"
        ],
        "future-tense": [
            "sacrificaré",
            "sacrificarás",
            "sacrificará",
            "sacrificaremos",
            "sacrificaréis",
            "sacrificarán"
        ],
        "preterite-tense": [
            "sacrifiqué",
            "sacrificaste",
            "sacrificó",
            "sacrificamos",
            "sacrificasteis",
            "sacrificaron"
        ],
        "present-subjunctive-tense": [
            "sacrifique",
            "sacrifiques",
            "sacrifique",
            "sacrifiquemos",
            "sacrifiquéis",
            "sacrifiquen"
        ],
        "future-subjunctive-tense": [
            "sacrificare",
            "sacrificares",
            "sacrificare",
            "sacrificáremos",
            "sacrificareis",
            "sacrificaren"
        ]
    },
    "sacudir": {
        "present-tense": [
            "sacudo",
            "sacudes",
            "sacude",
            "sacudimos",
            "sacudís",
            "sacuden"
        ],
        "future-tense": [
            "sacudiré",
            "sacudirás",
            "sacudirá",
            "sacudiremos",
            "sacudiréis",
            "sacudirán"
        ],
        "preterite-tense": [
            "sacudí",
            "sacudiste",
            "sacudió",
            "sacudimos",
            "sacudisteis",
            "sacudieron"
        ],
        "present-subjunctive-tense": [
            "sacuda",
            "sacudas",
            "sacuda",
            "sacudamos",
            "sacudáis",
            "sacudan"
        ],
        "future-subjunctive-tense": [
            "sacudiere",
            "sacudieres",
            "sacudiere",
            "sacudiéremos",
            "sacudiereis",
            "sacudieren"
        ]
    },
    "salir": {
        "present-tense": [
            "salgo",
            "sales",
            "sale",
            "salimos",
            "salís",
            "salen"
        ],
        "future-tense": [
            "saldré",
            "saldrás",
            "saldrá",
            "saldremos",
            "saldréis",
            "saldrán"
        ],
        "preterite-tense": [
            "salí",
            "saliste",
            "salió",
            "salimos",
            "salisteis",
            "salieron"
        ],
        "present-subjunctive-tense": [
            "salga",
            "salgas",
            "salga",
            "salgamos",
            "salgáis",
            "salgan"
        ],
        "future-subjunctive-tense": [
            "saliere",
            "salieres",
            "saliere",
            "saliéremos",
            "saliereis",
            "salieren"
        ]
    },
    "saltar": {
        "present-tense": [
            "salto",
            "saltas",
            "salta",
            "saltamos",
            "saltáis",
            "saltan"
        ],
        "future-tense": [
            "saltaré",
            "saltarás",
            "saltará",
            "saltaremos",
            "saltaréis",
            "saltarán"
        ],
        "preterite-tense": [
            "salté",
            "saltaste",
            "saltó",
            "saltamos",
            "saltasteis",
            "saltaron"
        ],
        "present-subjunctive-tense": [
            "salte",
            "saltes",
            "salte",
            "saltemos",
            "saltéis",
            "salten"
        ],
        "future-subjunctive-tense": [
            "saltare",
            "saltares",
            "saltare",
            "saltáremos",
            "saltareis",
            "saltaren"
        ]
    },
    "sugerir": {
        "preterite-tense": [
            "sugerí",
            "sugeriste",
            "sugirió",
            "sugerimos",
            "sugeristeis",
            "sugirieron"
        ],
        "present-tense": [
            "sugiero",
            "sugieres",
            "sugiere",
            "sugerimos",
            "sugerís",
            "sugieren"
        ],
        "future-tense": [
            "sugeriré",
            "sugerirás",
            "sugerirá",
            "sugeriremos",
            "sugeriréis",
            "sugerirán"
        ],
        "present-subjunctive-tense": [
            "sugiera",
            "sugieras",
            "sugiera",
            "sugiramos",
            "sugiráis",
            "sugieran"
        ],
        "future-subjunctive-tense": [
            "sugiriere",
            "sugirieres",
            "sugiriere",
            "sugiriéremos",
            "sugiriereis",
            "sugirieren"
        ]
    },
    "saludar": {
        "present-tense": [
            "saludo",
            "saludas",
            "saluda",
            "saludamos",
            "saludáis",
            "saludan"
        ],
        "future-tense": [
            "saludaré",
            "saludarás",
            "saludará",
            "saludaremos",
            "saludaréis",
            "saludarán"
        ],
        "preterite-tense": [
            "saludé",
            "saludaste",
            "saludó",
            "saludamos",
            "saludasteis",
            "saludaron"
        ],
        "present-subjunctive-tense": [
            "salude",
            "saludes",
            "salude",
            "saludemos",
            "saludéis",
            "saluden"
        ],
        "future-subjunctive-tense": [
            "saludare",
            "saludares",
            "saludare",
            "saludáremos",
            "saludareis",
            "saludaren"
        ]
    },
    "salvar": {
        "present-tense": [
            "salvo",
            "salvas",
            "salva",
            "salvamos",
            "salváis",
            "salvan"
        ],
        "future-tense": [
            "salvaré",
            "salvarás",
            "salvará",
            "salvaremos",
            "salvaréis",
            "salvarán"
        ],
        "preterite-tense": [
            "salvé",
            "salvaste",
            "salvó",
            "salvamos",
            "salvasteis",
            "salvaron"
        ],
        "present-subjunctive-tense": [
            "salve",
            "salves",
            "salve",
            "salvemos",
            "salvéis",
            "salven"
        ],
        "future-subjunctive-tense": [
            "salvare",
            "salvares",
            "salvare",
            "salváremos",
            "salvareis",
            "salvaren"
        ]
    },
    "satisfacer": {
        "present-tense": [
            "satisfago",
            "satisfaces",
            "satisface",
            "satisfacemos",
            "satisfacéis",
            "satisfacen"
        ],
        "future-tense": [
            "satisfaré",
            "satisfarás",
            "satisfará",
            "satisfaremos",
            "satisfaréis",
            "satisfarán"
        ],
        "preterite-tense": [
            "satisfice",
            "satisficiste",
            "satisfizo",
            "satisficimos",
            "satisficisteis",
            "satisficieron"
        ],
        "present-subjunctive-tense": [
            "satisfaga",
            "satisfagas",
            "satisfaga",
            "satisfagamos",
            "satisfagáis",
            "satisfagan"
        ],
        "future-subjunctive-tense": [
            "satisficiere",
            "satisficieres",
            "satisficiere",
            "satisficiéremos",
            "satisficiereis",
            "satisficieren"
        ]
    },
    "satirizar": {
        "present-tense": [
            "satirizo",
            "satirizas",
            "satiriza",
            "satirizamos",
            "satirizáis",
            "satirizan"
        ],
        "future-tense": [
            "satirizaré",
            "satirizarás",
            "satirizará",
            "satirizaremos",
            "satirizaréis",
            "satirizarán"
        ],
        "preterite-tense": [
            "satiricé",
            "satirizaste",
            "satirizó",
            "satirizamos",
            "satirizasteis",
            "satirizaron"
        ],
        "present-subjunctive-tense": [
            "satirice",
            "satirices",
            "satirice",
            "satiricemos",
            "satiricéis",
            "satiricen"
        ],
        "future-subjunctive-tense": [
            "satirizare",
            "satirizares",
            "satirizare",
            "satirizáremos",
            "satirizareis",
            "satirizaren"
        ]
    },
    "secar": {
        "present-tense": [
            "seco",
            "secas",
            "seca",
            "secamos",
            "secáis",
            "secan"
        ],
        "future-tense": [
            "secaré",
            "secarás",
            "secará",
            "secaremos",
            "secaréis",
            "secarán"
        ],
        "preterite-tense": [
            "sequé",
            "secaste",
            "secó",
            "secamos",
            "secasteis",
            "secaron"
        ],
        "present-subjunctive-tense": [
            "seque",
            "seques",
            "seque",
            "sequemos",
            "sequéis",
            "sequen"
        ],
        "future-subjunctive-tense": [
            "secare",
            "secares",
            "secare",
            "secáremos",
            "secareis",
            "secaren"
        ]
    },
    "secarse": {
        "present-tense": [
            "me seco",
            "te secas",
            "se seca",
            "nos secamos",
            "os secáis",
            "se secan"
        ],
        "future-tense": [
            "me secaré",
            "te secarás",
            "se secará",
            "nos secaremos",
            "os secaréis",
            "se secarán"
        ],
        "preterite-tense": [
            "me sequé",
            "te secaste",
            "se secó",
            "nos secamos",
            "secasteis",
            "se secaron"
        ],
        "present-subjunctive-tense": [
            "me seque",
            "te seques",
            "se seque",
            "nos sequemos",
            "os sequéis",
            "se sequen"
        ],
        "future-subjunctive-tense": [
            "me secare",
            "te secares",
            "se secare",
            "nos secáremos",
            "os secareis",
            "se secaren"
        ]
    },
    "seguir": {
        "present-tense": [
            "sigo",
            "sigues",
            "sigue",
            "seguimos",
            "seguís",
            "siguen"
        ],
        "future-tense": [
            "seguiré",
            "seguirás",
            "seguirá",
            "seguiremos",
            "seguiréis",
            "seguirán"
        ],
        "preterite-tense": [
            "seguí",
            "seguiste",
            "siguió",
            "seguimos",
            "seguisteis",
            "siguieron"
        ],
        "present-subjunctive-tense": [
            "siga",
            "sigas",
            "siga",
            "sigamos",
            "sigáis",
            "sigan"
        ],
        "future-subjunctive-tense": [
            "siguiere",
            "siguieres",
            "siguiere",
            "siguiéremos",
            "siguiereis",
            "siguieren"
        ]
    },
    "sentar": {
        "present-tense": [
            "siento",
            "sientas",
            "sienta",
            "sentamos",
            "sentáis",
            "sientan"
        ],
        "future-tense": [
            "sentaré",
            "sentarás",
            "sentará",
            "sentaremos",
            "sentaréis",
            "sentarán"
        ],
        "preterite-tense": [
            "senté",
            "sentaste",
            "sentó",
            "sentamos",
            "sentasteis",
            "sentaron"
        ],
        "present-subjunctive-tense": [
            "siente",
            "sientes",
            "siente",
            "sentemos",
            "sentéis",
            "sienten"
        ],
        "future-subjunctive-tense": [
            "sentare",
            "sentares",
            "sentare",
            "sentáremos",
            "sentareis",
            "sentaren"
        ]
    },
    "sentarse": {
        "present-tense": [
            "me siento",
            "te sientas",
            "se sienta",
            "nos sentamos",
            "os sentáis",
            "se sientan"
        ],
        "future-tense": [
            "me sentaré",
            "te sentarás",
            "se sentará",
            "nos sentaremos",
            "os sentaréis",
            "se sentarán"
        ],
        "preterite-tense": [
            "me senté",
            "te sentaste",
            "se sentó",
            "nos sentamos",
            "os sentasteis",
            "se sentaron"
        ],
        "present-subjunctive-tense": [
            "me siente",
            "te sientes",
            "se siente",
            "nos sentemos",
            "os sentéis",
            "se sienten"
        ],
        "future-subjunctive-tense": [
            "me sentare",
            "te sentares",
            "se sentare",
            "nos sentáremos",
            "os sentareis",
            "se sentaren"
        ]
    },
    "sentir": {
        "present-tense": [
            "siento",
            "sientes",
            "siente",
            "sentimos",
            "sentís",
            "sienten"
        ],
        "future-tense": [
            "sentiré",
            "sentirás",
            "sentirá",
            "sentiremos",
            "sentiréis",
            "sentirán"
        ],
        "preterite-tense": [
            "sentí",
            "sentiste",
            "sintió",
            "sentimos",
            "sentisteis",
            "sintieron"
        ],
        "present-subjunctive-tense": [
            "sienta",
            "sientas",
            "sienta",
            "sintamos",
            "sintáis",
            "sientan"
        ],
        "future-subjunctive-tense": [
            "sintiere",
            "sintieres",
            "sintiere",
            "sintiéremos",
            "sintiereis",
            "sintieren"
        ]
    },
    "sentirse": {
        "present-tense": [
            "me siento",
            "te sientes",
            "se siente",
            "nos sentimos",
            "os sentís",
            "se sienten"
        ],
        "future-tense": [
            "me sentiré",
            "te sentirás",
            "se sentirá",
            "nos sentiremos",
            "os sentiréis",
            "se sentirán"
        ],
        "preterite-tense": [
            "me sentí",
            "te sentiste",
            "se sintió",
            "nos sentimos",
            "os sentisteis",
            "se sintieron"
        ],
        "present-subjunctive-tense": [
            "me sienta",
            "te sientas",
            "se sienta",
            "nos sintamos",
            "os sintáis",
            "se sientan"
        ],
        "future-subjunctive-tense": [
            "me sintiere",
            "te sintieres",
            "se sintiere",
            "nos sintiéremos",
            "os sintiereis",
            "se sintieren"
        ]
    },
    "señalar": {
        "present-tense": [
            "señalo",
            "señalas",
            "señala",
            "señalamos",
            "señaláis",
            "señalan"
        ],
        "future-tense": [
            "señalaré",
            "señalarás",
            "señalará",
            "señalaremos",
            "señalaréis",
            "señalarán"
        ],
        "preterite-tense": [
            "señalé",
            "señalaste",
            "señaló",
            "señalamos",
            "señalasteis",
            "señalaron"
        ],
        "present-subjunctive-tense": [
            "señale",
            "señales",
            "señale",
            "señalemos",
            "señaléis",
            "señalen"
        ],
        "future-subjunctive-tense": [
            "señalare",
            "señalares",
            "señalare",
            "señaláremos",
            "señalareis",
            "señalaren"
        ]
    },
    "ser": {
        "present-tense": [
            "soy",
            "eres",
            "es",
            "somos",
            "sois",
            "son"
        ],
        "future-tense": [
            "seré",
            "serás",
            "será",
            "seremos",
            "seréis",
            "serán"
        ],
        "preterite-tense": [
            "fui",
            "fuiste",
            "fue",
            "fuimos",
            "fuisteis",
            "fueron"
        ],
        "present-subjunctive-tense": [
            "sea",
            "seas",
            "sea",
            "seamos",
            "seáis",
            "sean"
        ],
        "future-subjunctive-tense": [
            "fuere",
            "fueres",
            "fuere",
            "fuéremos",
            "fuereis",
            "fueren"
        ]
    },
    "servir": {
        "present-tense": [
            "sirvo",
            "sirves",
            "sirve",
            "servimos",
            "servís",
            "sirven"
        ],
        "future-tense": [
            "serviré",
            "servirás",
            "servirá",
            "serviremos",
            "serviréis",
            "servirán"
        ],
        "preterite-tense": [
            "serví",
            "serviste",
            "sirvió",
            "servimos",
            "servisteis",
            "sirvieron"
        ],
        "present-subjunctive-tense": [
            "sirva",
            "sirvas",
            "sirva",
            "sirvamos",
            "sirváis",
            "sirvan"
        ],
        "future-subjunctive-tense": [
            "sirviere",
            "sirvieres",
            "sirviere",
            "sirviéremos",
            "sirviereis",
            "sirvieren"
        ]
    },
    "significar": {
        "present-tense": [
            "significo",
            "significas",
            "significa",
            "significamos",
            "significáis",
            "significan"
        ],
        "future-tense": [
            "significaré",
            "significarás",
            "significará",
            "significaremos",
            "significaréis",
            "significarán"
        ],
        "preterite-tense": [
            "signifiqué",
            "significaste",
            "significó",
            "significamos",
            "significasteis",
            "significaron"
        ],
        "present-subjunctive-tense": [
            "signifique",
            "signifiques",
            "signifique",
            "signifiquemos",
            "signifiquéis",
            "signifiquen"
        ],
        "future-subjunctive-tense": [
            "significare",
            "significares",
            "significare",
            "significáremos",
            "significareis",
            "significaren"
        ]
    },
    "simbolizar": {
        "present-tense": [
            "simbolizo",
            "simbolizas",
            "simboliza",
            "simbolizamos",
            "simbolizáis",
            "simbolizan"
        ],
        "future-tense": [
            "simbolizaré",
            "simbolizarás",
            "simbolizará",
            "simbolizaremos",
            "simbolizaréis",
            "simbolizarán"
        ],
        "preterite-tense": [
            "simbolicé",
            "simbolizaste",
            "simbolizó",
            "simbolizamos",
            "simbolizasteis",
            "simbolizaron"
        ],
        "present-subjunctive-tense": [
            "simbolice",
            "simbolices",
            "simbolice",
            "simbolicemos",
            "simbolicéis",
            "simbolicen"
        ],
        "future-subjunctive-tense": [
            "simbolizare",
            "simbolizares",
            "simbolizare",
            "simbolizáremos",
            "simbolizareis",
            "simbolizaren"
        ]
    },
    "situar": {
        "present-tense": [
            "sitúo",
            "sitúas",
            "sitúa",
            "situamos",
            "situáis",
            "sitúan"
        ],
        "future-tense": [
            "situaré",
            "situarás",
            "situará",
            "situaremos",
            "situaréis",
            "situarán"
        ],
        "preterite-tense": [
            "situé",
            "situaste",
            "situó",
            "situamos",
            "situasteis",
            "situaron"
        ],
        "present-subjunctive-tense": [
            "sitúe",
            "sitúes",
            "sitúe",
            "situemos",
            "situéis",
            "sitúen"
        ],
        "future-subjunctive-tense": [
            "situare",
            "situares",
            "situare",
            "situáremos",
            "situareis",
            "situaren"
        ]
    },
    "sobrevivir": {
        "present-tense": [
            "sobrevivo",
            "sobrevives",
            "sobrevive",
            "sobrevivimos",
            "sobrevivís",
            "sobreviven"
        ],
        "future-tense": [
            "sobreviviré",
            "sobrevivirás",
            "sobrevivirá",
            "sobreviviremos",
            "sobreviviréis",
            "sobrevivirán"
        ],
        "preterite-tense": [
            "sobreviví",
            "sobreviviste",
            "sobrevivió",
            "sobrevivimos",
            "sobrevivisteis",
            "sobrevivieron"
        ],
        "present-subjunctive-tense": [
            "sobreviva",
            "sobrevivas",
            "sobreviva",
            "sobrevivamos",
            "sobreviváis",
            "sobrevivan"
        ],
        "future-subjunctive-tense": [
            "sobreviviere",
            "sobrevivieres",
            "sobreviviere",
            "sobreviviéremos",
            "sobreviviereis",
            "sobrevivieren"
        ]
    },
    "sonar": {
        "present-tense": [
            "sueno",
            "suenas",
            "suena",
            "sonamos",
            "sonáis",
            "suenan"
        ],
        "future-tense": [
            "sonaré",
            "sonarás",
            "sonará",
            "sonaremos",
            "sonaréis",
            "sonarán"
        ],
        "preterite-tense": [
            "soné",
            "sonaste",
            "sonó",
            "sonamos",
            "sonasteis",
            "sonaron"
        ],
        "present-subjunctive-tense": [
            "suene",
            "suenes",
            "suene",
            "sonemos",
            "sonéis",
            "suenen"
        ],
        "future-subjunctive-tense": [
            "sonare",
            "sonares",
            "sonare",
            "sonáremos",
            "sonareis",
            "sonaren"
        ]
    },
    "soñar": {
        "present-tense": [
            "sueño",
            "sueñas",
            "sueña",
            "soñamos",
            "soñáis",
            "sueñan"
        ],
        "future-tense": [
            "soñaré",
            "soñarás",
            "soñará",
            "soñaremos",
            "soñaréis",
            "soñarán"
        ],
        "preterite-tense": [
            "soñé",
            "soñaste",
            "soñó",
            "soñamos",
            "soñasteis",
            "soñaron"
        ],
        "present-subjunctive-tense": [
            "sueñe",
            "sueñes",
            "sueñe",
            "soñemos",
            "soñéis",
            "sueñen"
        ],
        "future-subjunctive-tense": [
            "soñare",
            "soñares",
            "soñare",
            "soñáremos",
            "soñareis",
            "soñaren"
        ]
    },
    "sonreír": {
        "present-tense": [
            "sonrío",
            "sonríes",
            "sonríe",
            "sonreímos",
            "sonreís",
            "sonríen"
        ],
        "future-tense": [
            "sonreiré",
            "sonreirás",
            "sonreirá",
            "sonreiremos",
            "sonreiréis",
            "sonreirán"
        ],
        "preterite-tense": [
            "sonreí",
            "sonreíste",
            "sonrió",
            "sonreímos",
            "sonreísteis",
            "sonrieron"
        ],
        "present-subjunctive-tense": [
            "sonría",
            "sonrías",
            "sonría",
            "sonriamos",
            "sonriáis",
            "sonrían"
        ],
        "future-subjunctive-tense": [
            "sonriere",
            "sonrieres",
            "sonriere",
            "sonriéremos",
            "sonriereis",
            "sonrieren"
        ]
    },
    "soportar": {
        "present-tense": [
            "soporto",
            "soportas",
            "soporta",
            "soportamos",
            "soportáis",
            "soportan"
        ],
        "future-tense": [
            "soportaré",
            "soportarás",
            "soportará",
            "soportaremos",
            "soportaréis",
            "soportarán"
        ],
        "preterite-tense": [
            "soporté",
            "soportaste",
            "soportó",
            "soportamos",
            "soportasteis",
            "soportaron"
        ],
        "present-subjunctive-tense": [
            "soporte",
            "soportes",
            "soporte",
            "soportemos",
            "soportéis",
            "soporten"
        ],
        "future-subjunctive-tense": [
            "soportare",
            "soportares",
            "soportare",
            "soportáremos",
            "soportareis",
            "soportaren"
        ]
    },
    "sorprender": {
        "present-tense": [
            "sorprendo",
            "sorprendes",
            "sorprende",
            "sorprendemos",
            "sorprendéis",
            "sorprenden"
        ],
        "future-tense": [
            "sorprenderé",
            "sorprenderás",
            "sorprenderá",
            "sorprenderemos",
            "sorprenderéis",
            "sorprenderán"
        ],
        "preterite-tense": [
            "sorprendí",
            "sorprendiste",
            "sorprendió",
            "sorprendimos",
            "sorprendisteis",
            "sorprendieron"
        ],
        "present-subjunctive-tense": [
            "sorprenda",
            "sorprendas",
            "sorprenda",
            "sorprendamos",
            "sorprendáis",
            "sorprendan"
        ],
        "future-subjunctive-tense": [
            "sorprendiere",
            "sorprendieres",
            "sorprendiere",
            "sorprendiéremos",
            "sorprendiereis",
            "sorprendieren"
        ]
    },
    "subir": {
        "present-tense": [
            "subo",
            "subes",
            "sube",
            "subimos",
            "subís",
            "suben"
        ],
        "future-tense": [
            "subiré",
            "subirás",
            "subirá",
            "subiremos",
            "subiréis",
            "subirán"
        ],
        "preterite-tense": [
            "subí",
            "subiste",
            "subió",
            "subimos",
            "subisteis",
            "subieron"
        ],
        "present-subjunctive-tense": [
            "suba",
            "subas",
            "suba",
            "subamos",
            "subáis",
            "suban"
        ],
        "future-subjunctive-tense": [
            "subiere",
            "subieres",
            "subiere",
            "subiéremos",
            "subiereis",
            "subieren"
        ]
    },
    "suceder": {
        "present-tense": [
            "sucedo",
            "sucedes",
            "sucede",
            "sucedemos",
            "sucedéis",
            "suceden"
        ],
        "future-tense": [
            "sucederé",
            "sucederás",
            "sucederá",
            "sucederemos",
            "sucederéis",
            "sucederán"
        ],
        "preterite-tense": [
            "sucedí",
            "sucediste",
            "sucedió",
            "sucedimos",
            "sucedisteis",
            "sucedieron"
        ],
        "present-subjunctive-tense": [
            "suceda",
            "sucedas",
            "suceda",
            "sucedamos",
            "sucedáis",
            "sucedan"
        ],
        "future-subjunctive-tense": [
            "sucediere",
            "sucedieres",
            "sucediere",
            "sucediéremos",
            "sucediereis",
            "sucedieren"
        ]
    },
    "sufrir": {
        "present-tense": [
            "sufro",
            "sufres",
            "sufre",
            "sufrimos",
            "sufrís",
            "sufren"
        ],
        "future-tense": [
            "sufriré",
            "sufrirás",
            "sufrirá",
            "sufriremos",
            "sufriréis",
            "sufrirán"
        ],
        "preterite-tense": [
            "sufrí",
            "sufriste",
            "sufrió",
            "sufrimos",
            "sufristeis",
            "sufrieron"
        ],
        "present-subjunctive-tense": [
            "sufra",
            "sufras",
            "sufra",
            "suframos",
            "sufráis",
            "sufran"
        ],
        "future-subjunctive-tense": [
            "sufriere",
            "sufrieres",
            "sufriere",
            "sufriéremos",
            "sufriereis",
            "sufrieren"
        ]
    },
    "suponer": {
        "present-tense": [
            "supongo",
            "supones",
            "supone",
            "suponemos",
            "suponéis",
            "suponen"
        ],
        "future-tense": [
            "supondré",
            "supondrás",
            "supondrá",
            "supondremos",
            "supondréis",
            "supondrán"
        ],
        "preterite-tense": [
            "supuse",
            "supusiste",
            "supuso",
            "supusimos",
            "supusisteis",
            "supusieron"
        ],
        "present-subjunctive-tense": [
            "suponga",
            "supongas",
            "suponga",
            "supongamos",
            "supongáis",
            "supongan"
        ],
        "future-subjunctive-tense": [
            "supusiere",
            "supusieres",
            "supusiere",
            "supusiéremos",
            "supusiereis",
            "supusieren"
        ]
    },
    "surgir": {
        "present-tense": [
            "surjo",
            "surges",
            "surge",
            "surgimos",
            "surgís",
            "surgen"
        ],
        "future-tense": [
            "surgiré",
            "surgirás",
            "surgirá",
            "surgiremos",
            "surgiréis",
            "surgirán"
        ],
        "preterite-tense": [
            "surgí",
            "surgiste",
            "surgió",
            "surgimos",
            "surgisteis",
            "surgieron"
        ],
        "present-subjunctive-tense": [
            "surja",
            "surjas",
            "surja",
            "surjamos",
            "surjáis",
            "surjan"
        ],
        "future-subjunctive-tense": [
            "surgiere",
            "surgieres",
            "surgiere",
            "surgiéremos",
            "surgiereis",
            "surgieren"
        ]
    },
    "suspirar": {
        "present-tense": [
            "suspiro",
            "suspiras",
            "suspira",
            "suspiramos",
            "suspiráis",
            "suspiran"
        ],
        "future-tense": [
            "suspiraré",
            "suspirarás",
            "suspirará",
            "suspiraremos",
            "suspiraréis",
            "suspirarán"
        ],
        "preterite-tense": [
            "suspiré",
            "suspiraste",
            "suspiró",
            "suspiramos",
            "suspirasteis",
            "suspiraron"
        ],
        "present-subjunctive-tense": [
            "suspire",
            "suspires",
            "suspire",
            "suspiremos",
            "suspiréis",
            "suspiren"
        ],
        "future-subjunctive-tense": [
            "suspirare",
            "suspirares",
            "suspirare",
            "suspiráremos",
            "suspirareis",
            "suspiraren"
        ]
    },
    "sustituir": {
        "present-tense": [
            "sustituyo",
            "sustituyes",
            "sustituye",
            "sustituimos",
            "sustituís",
            "sustituyen"
        ],
        "future-tense": [
            "sustituiré",
            "sustituirás",
            "sustituirá",
            "sustituiremos",
            "sustituiréis",
            "sustituirán"
        ],
        "preterite-tense": [
            "sustituí",
            "sustituiste",
            "sustituyó",
            "sustituimos",
            "sustituisteis",
            "sustituyeron"
        ],
        "present-subjunctive-tense": [
            "sustituya",
            "sustituyas",
            "sustituya",
            "sustituyamos",
            "sustituyáis",
            "sustituyan"
        ],
        "future-subjunctive-tense": [
            "sustituyere",
            "sustituyeres",
            "sustituyere",
            "sustituyéremos",
            "sustituyereis",
            "sustituyeren"
        ]
    },
    "tañer": {
        "present-tense": [
            "taño",
            "tañes",
            "tañe",
            "tañemos",
            "tañéis",
            "tañen"
        ],
        "future-tense": [
            "tañeré",
            "tañerás",
            "tañerá",
            "tañeremos",
            "tañeréis",
            "tañerán"
        ],
        "preterite-tense": [
            "tañí",
            "tañiste",
            "tañó",
            "tañimos",
            "tañisteis",
            "tañeron"
        ],
        "present-subjunctive-tense": [
            "taña",
            "tañas",
            "taña",
            "tañamos",
            "tañáis",
            "tañan"
        ],
        "future-subjunctive-tense": [
            "tañere",
            "tañeres",
            "tañere",
            "tañéremos",
            "tañereis",
            "tañeren"
        ]
    },
    "tapar": {
        "present-tense": [
            "tapo",
            "tapas",
            "tapa",
            "tapamos",
            "tapáis",
            "tapan"
        ],
        "future-tense": [
            "taparé",
            "taparás",
            "tapará",
            "taparemos",
            "taparéis",
            "taparán"
        ],
        "preterite-tense": [
            "tapé",
            "tapaste",
            "tapó",
            "tapamos",
            "tapasteis",
            "taparon"
        ],
        "present-subjunctive-tense": [
            "tape",
            "tapes",
            "tape",
            "tapemos",
            "tapéis",
            "tapen"
        ],
        "future-subjunctive-tense": [
            "tapare",
            "tapares",
            "tapare",
            "tapáremos",
            "tapareis",
            "taparen"
        ]
    },
    "tardar": {
        "present-tense": [
            "tardo",
            "tardas",
            "tarda",
            "tardamos",
            "tardáis",
            "tardan"
        ],
        "future-tense": [
            "tardaré",
            "tardarás",
            "tardará",
            "tardaremos",
            "tardaréis",
            "tardarán"
        ],
        "preterite-tense": [
            "tardé",
            "tardaste",
            "tardó",
            "tardamos",
            "tardasteis",
            "tardaron"
        ],
        "present-subjunctive-tense": [
            "tarde",
            "tardes",
            "tarde",
            "tardemos",
            "tardéis",
            "tarden"
        ],
        "future-subjunctive-tense": [
            "tardare",
            "tardares",
            "tardare",
            "tardáremos",
            "tardareis",
            "tardaren"
        ]
    },
    "temer": {
        "present-tense": [
            "temo",
            "temes",
            "teme",
            "tememos",
            "teméis",
            "temen"
        ],
        "future-tense": [
            "temeré",
            "temerás",
            "temerá",
            "temeremos",
            "temeréis",
            "temerán"
        ],
        "preterite-tense": [
            "temí",
            "temiste",
            "temió",
            "temimos",
            "temisteis",
            "temieron"
        ],
        "present-subjunctive-tense": [
            "tema",
            "temas",
            "tema",
            "temamos",
            "temáis",
            "teman"
        ],
        "future-subjunctive-tense": [
            "temiere",
            "temieres",
            "temiere",
            "temiéremos",
            "temiereis",
            "temieren"
        ]
    },
    "tener": {
        "present-tense": [
            "tengo",
            "tienes",
            "tiene",
            "tenemos",
            "tenéis",
            "tienen"
        ],
        "future-tense": [
            "tendré",
            "tendrás",
            "tendrá",
            "tendremos",
            "tendréis",
            "tendrán"
        ],
        "preterite-tense": [
            "tuve",
            "tuviste",
            "tuvo",
            "tuvimos",
            "tuvisteis",
            "tuvieron"
        ],
        "present-subjunctive-tense": [
            "tenga",
            "tengas",
            "tenga",
            "tengamos",
            "tengáis",
            "tengan"
        ],
        "future-subjunctive-tense": [
            "tuviere",
            "tuvieres",
            "tuviere",
            "tuviéremos",
            "tuviereis",
            "tuvieren"
        ]
    },
    "teñir": {
        "present-tense": [
            "tiño",
            "tiñes",
            "tiñe",
            "teñimos",
            "teñís",
            "tiñen"
        ],
        "future-tense": [
            "teñiré",
            "teñirás",
            "teñirá",
            "teñiremos",
            "teñiréis",
            "teñirán"
        ],
        "preterite-tense": [
            "teñí",
            "teñiste",
            "tiñó",
            "teñimos",
            "teñisteis",
            "tiñeron"
        ],
        "present-subjunctive-tense": [
            "tiña",
            "tiñas",
            "tiña",
            "tiñamos",
            "tiñáis",
            "tiñan"
        ],
        "future-subjunctive-tense": [
            "tiñere",
            "tiñeres",
            "tiñere",
            "tiñéremos",
            "tiñereis",
            "tiñeren"
        ]
    },
    "terminar": {
        "present-tense": [
            "termino",
            "terminas",
            "termina",
            "terminamos",
            "termináis",
            "terminan"
        ],
        "future-tense": [
            "terminaré",
            "terminarás",
            "terminará",
            "terminaremos",
            "terminaréis",
            "terminarán"
        ],
        "preterite-tense": [
            "terminé",
            "terminaste",
            "terminó",
            "terminamos",
            "terminasteis",
            "terminaron"
        ],
        "present-subjunctive-tense": [
            "termine",
            "termines",
            "termine",
            "terminemos",
            "terminéis",
            "terminen"
        ],
        "future-subjunctive-tense": [
            "terminare",
            "terminares",
            "terminare",
            "termináremos",
            "terminareis",
            "terminaren"
        ]
    },
    "tirar": {
        "present-tense": [
            "tiro",
            "tiras",
            "tira",
            "tiramos",
            "tiráis",
            "tiran"
        ],
        "future-tense": [
            "tiraré",
            "tirarás",
            "tirará",
            "tiraremos",
            "tiraréis",
            "tirarán"
        ],
        "preterite-tense": [
            "tiré",
            "tiraste",
            "tiró",
            "tiramos",
            "tirasteis",
            "tiraron"
        ],
        "present-subjunctive-tense": [
            "tire",
            "tires",
            "tire",
            "tiremos",
            "tiréis",
            "tiren"
        ],
        "future-subjunctive-tense": [
            "tirare",
            "tirares",
            "tirare",
            "tiráremos",
            "tirareis",
            "tiraren"
        ]
    },
    "tocar": {
        "present-tense": [
            "toco",
            "tocas",
            "toca",
            "tocamos",
            "tocáis",
            "tocan"
        ],
        "future-tense": [
            "tocaré",
            "tocarás",
            "tocará",
            "tocaremos",
            "tocaréis",
            "tocarán"
        ],
        "preterite-tense": [
            "toqué",
            "tocaste",
            "tocó",
            "tocamos",
            "tocasteis",
            "tocaron"
        ],
        "present-subjunctive-tense": [
            "toque",
            "toques",
            "toque",
            "toquemos",
            "toquéis",
            "toquen"
        ],
        "future-subjunctive-tense": [
            "tocare",
            "tocares",
            "tocare",
            "tocáremos",
            "tocareis",
            "tocaren"
        ]
    },
    "tomar": {
        "present-tense": [
            "tomo",
            "tomas",
            "toma",
            "tomamos",
            "tomáis",
            "toman"
        ],
        "future-tense": [
            "tomaré",
            "tomarás",
            "tomará",
            "tomaremos",
            "tomaréis",
            "tomarán"
        ],
        "preterite-tense": [
            "tomé",
            "tomaste",
            "tomó",
            "tomamos",
            "tomasteis",
            "tomaron"
        ],
        "present-subjunctive-tense": [
            "tome",
            "tomes",
            "tome",
            "tomemos",
            "toméis",
            "tomen"
        ],
        "future-subjunctive-tense": [
            "tomare",
            "tomares",
            "tomare",
            "tomáremos",
            "tomareis",
            "tomaren"
        ]
    },
    "torcer": {
        "present-tense": [
            "tuerzo",
            "tuerces",
            "tuerce",
            "torcemos",
            "torcéis",
            "tuercen"
        ],
        "future-tense": [
            "torceré",
            "torcerás",
            "torcerá",
            "torceremos",
            "torceréis",
            "torcerán"
        ],
        "preterite-tense": [
            "torcí",
            "torciste",
            "torció",
            "torcimos",
            "torcisteis",
            "torcieron"
        ],
        "present-subjunctive-tense": [
            "tuerza",
            "tuerzas",
            "tuerza",
            "torzamos",
            "torzáis",
            "tuerzan"
        ],
        "future-subjunctive-tense": [
            "torciere",
            "torcieres",
            "torciere",
            "torciéremos",
            "torciereis",
            "torcieren"
        ]
    },
    "toser": {
        "present-tense": [
            "toso",
            "toses",
            "tose",
            "tosemos",
            "toséis",
            "tosen"
        ],
        "future-tense": [
            "toseré",
            "toserás",
            "toserá",
            "toseremos",
            "toseréis",
            "toserán"
        ],
        "preterite-tense": [
            "tosí",
            "tosiste",
            "tosió",
            "tosimos",
            "tosisteis",
            "tosieron"
        ],
        "present-subjunctive-tense": [
            "tosa",
            "tosas",
            "tosa",
            "tosamos",
            "tosáis",
            "tosan"
        ],
        "future-subjunctive-tense": [
            "tosiere",
            "tosieres",
            "tosiere",
            "tosiéremos",
            "tosiereis",
            "tosieren"
        ]
    },
    "trabajar": {
        "present-tense": [
            "trabajo",
            "trabajas",
            "trabaja",
            "trabajamos",
            "trabajáis",
            "trabajan"
        ],
        "future-tense": [
            "trabajaré",
            "trabajarás",
            "trabajará",
            "trabajaremos",
            "trabajaréis",
            "trabajarán"
        ],
        "preterite-tense": [
            "trabajé",
            "trabajaste",
            "trabajó",
            "trabajamos",
            "trabajasteis",
            "trabajaron"
        ],
        "present-subjunctive-tense": [
            "trabaje",
            "trabajes",
            "trabaje",
            "trabajemos",
            "trabajéis",
            "trabajen"
        ],
        "future-subjunctive-tense": [
            "trabajare",
            "trabajares",
            "trabajare",
            "trabajáremos",
            "trabajareis",
            "trabajaren"
        ]
    },
    "traducir": {
        "present-tense": [
            "traduzco",
            "traduces",
            "traduce",
            "traducimos",
            "traducís",
            "traducen"
        ],
        "future-tense": [
            "traduciré",
            "traducirás",
            "traducirá",
            "traduciremos",
            "traduciréis",
            "traducirán"
        ],
        "preterite-tense": [
            "traduje",
            "tradujiste",
            "tradujo",
            "tradujimos",
            "tradujisteis",
            "tradujeron"
        ],
        "present-subjunctive-tense": [
            "traduzca",
            "traduzcas",
            "traduzca",
            "traduzcamos",
            "traduzcáis",
            "traduzcan"
        ],
        "future-subjunctive-tense": [
            "tradujere",
            "tradujeres",
            "tradujere",
            "tradujéremos",
            "tradujereis",
            "tradujeren"
        ]
    },
    "traer": {
        "present-tense": [
            "traigo",
            "traes",
            "trae",
            "traemos",
            "traéis",
            "traen"
        ],
        "future-tense": [
            "traeré",
            "traerás",
            "traerá",
            "traeremos",
            "traeréis",
            "traerán"
        ],
        "preterite-tense": [
            "traje",
            "trajiste",
            "trajo",
            "trajimos",
            "trajisteis",
            "trajeron"
        ],
        "present-subjunctive-tense": [
            "traiga",
            "traigas",
            "traiga",
            "traigamos",
            "traigáis",
            "traigan"
        ],
        "future-subjunctive-tense": [
            "trajere",
            "trajeres",
            "trajere",
            "trajéremos",
            "trajereis",
            "trajeren"
        ]
    },
    "tragar": {
        "present-tense": [
            "trago",
            "tragas",
            "traga",
            "tragamos",
            "tragáis",
            "tragan"
        ],
        "future-tense": [
            "tragaré",
            "tragarás",
            "tragará",
            "tragaremos",
            "tragaréis",
            "tragarán"
        ],
        "preterite-tense": [
            "tragué",
            "tragaste",
            "tragó",
            "tragamos",
            "tragasteis",
            "tragaron"
        ],
        "present-subjunctive-tense": [
            "trague",
            "tragues",
            "trague",
            "traguemos",
            "traguéis",
            "traguen"
        ],
        "future-subjunctive-tense": [
            "tragare",
            "tragares",
            "tragare",
            "tragáremos",
            "tragareis",
            "tragaren"
        ]
    },
    "tratar": {
        "present-tense": [
            "trato",
            "tratas",
            "trata",
            "tratamos",
            "tratáis",
            "tratan"
        ],
        "future-tense": [
            "trataré",
            "tratarás",
            "tratará",
            "trataremos",
            "trataréis",
            "tratarán"
        ],
        "preterite-tense": [
            "traté",
            "trataste",
            "trató",
            "tratamos",
            "tratasteis",
            "trataron"
        ],
        "present-subjunctive-tense": [
            "trate",
            "trates",
            "trate",
            "tratemos",
            "tratéis",
            "traten"
        ],
        "future-subjunctive-tense": [
            "tratare",
            "tratares",
            "tratare",
            "tratáremos",
            "tratareis",
            "trataren"
        ]
    },
    "triunfar": {
        "present-tense": [
            "triunfo",
            "triunfas",
            "triunfa",
            "triunfamos",
            "triunfáis",
            "triunfan"
        ],
        "future-tense": [
            "triunfaré",
            "triunfarás",
            "triunfará",
            "triunfaremos",
            "triunfaréis",
            "triunfarán"
        ],
        "preterite-tense": [
            "triunfé",
            "triunfaste",
            "triunfó",
            "triunfamos",
            "triunfasteis",
            "triunfaron"
        ],
        "present-subjunctive-tense": [
            "triunfe",
            "triunfes",
            "triunfe",
            "triunfemos",
            "triunféis",
            "triunfen"
        ],
        "future-subjunctive-tense": [
            "triunfare",
            "triunfares",
            "triunfare",
            "triunfáremos",
            "triunfareis",
            "triunfaren"
        ]
    },
    "tropezar": {
        "present-tense": [
            "tropiezo",
            "tropiezas",
            "tropieza",
            "tropezamos",
            "tropezáis",
            "tropiezan"
        ],
        "future-tense": [
            "tropezaré",
            "tropezarás",
            "tropezará",
            "tropezaremos",
            "tropezaréis",
            "tropezarán"
        ],
        "preterite-tense": [
            "tropecé",
            "tropezaste",
            "tropezó",
            "tropezamos",
            "tropezasteis",
            "tropezaron"
        ],
        "present-subjunctive-tense": [
            "tropiece",
            "tropieces",
            "tropiece",
            "tropecemos",
            "tropezéis",
            "tropiecen"
        ],
        "future-subjunctive-tense": [
            "tropezare",
            "tropezares",
            "tropezare",
            "tropezáremos",
            "tropezareis",
            "tropezaren"
        ]
    },
    "ubicar": {
        "present-tense": [
            "ubico",
            "ubicas",
            "ubica",
            "ubicamos",
            "ubicáis",
            "ubican"
        ],
        "future-tense": [
            "ubicaré",
            "ubicarás",
            "ubicará",
            "ubicaremos",
            "ubicaréis",
            "ubicarán"
        ],
        "preterite-tense": [
            "ubiqué",
            "ubicaste",
            "ubicó",
            "ubicamos",
            "ubicasteis",
            "ubicaron"
        ],
        "present-subjunctive-tense": [
            "ubique",
            "ubiques",
            "ubique",
            "ubiquemos",
            "ubiquéis",
            "ubiquen"
        ],
        "future-subjunctive-tense": [
            "ubicare",
            "ubicares",
            "ubicare",
            "ubicáremos",
            "ubicareis",
            "ubicaren"
        ]
    },
    "unir": {
        "present-tense": [
            "uno",
            "unes",
            "une",
            "unimos",
            "unís",
            "unen"
        ],
        "future-tense": [
            "uniré",
            "unirás",
            "unirá",
            "uniremos",
            "uniréis",
            "unirán"
        ],
        "preterite-tense": [
            "uní",
            "uniste",
            "unió",
            "unimos",
            "unisteis",
            "unieron"
        ],
        "present-subjunctive-tense": [
            "una",
            "unas",
            "una",
            "unamos",
            "unáis",
            "unan"
        ],
        "future-subjunctive-tense": [
            "uniere",
            "unieres",
            "uniere",
            "uniéremos",
            "uniereis",
            "unieren"
        ]
    },
    "untar": {
        "present-tense": [
            "unto",
            "untas",
            "unta",
            "untamos",
            "untáis",
            "untan"
        ],
        "future-tense": [
            "untaré",
            "untarás",
            "untará",
            "untaremos",
            "untaréis",
            "untarán"
        ],
        "preterite-tense": [
            "unté",
            "untaste",
            "untó",
            "untamos",
            "untasteis",
            "untaron"
        ],
        "present-subjunctive-tense": [
            "unte",
            "untes",
            "unte",
            "untemos",
            "untéis",
            "unten"
        ],
        "future-subjunctive-tense": [
            "untare",
            "untares",
            "untare",
            "untáremos",
            "untareis",
            "untaren"
        ]
    },
    "usar": {
        "present-tense": [
            "uso",
            "usas",
            "usa",
            "usamos",
            "usáis",
            "usan"
        ],
        "future-tense": [
            "usaré",
            "usarás",
            "usará",
            "usaremos",
            "usaréis",
            "usarán"
        ],
        "preterite-tense": [
            "usé",
            "usaste",
            "usó",
            "usamos",
            "usasteis",
            "usaron"
        ],
        "present-subjunctive-tense": [
            "use",
            "uses",
            "use",
            "usemos",
            "uséis",
            "usen"
        ],
        "future-subjunctive-tense": [
            "usare",
            "usares",
            "usare",
            "usáremos",
            "usareis",
            "usaren"
        ]
    },
    "utilizar": {
        "present-tense": [
            "utilizo",
            "utilizas",
            "utiliza",
            "utilizamos",
            "utilizáis",
            "utilizan"
        ],
        "future-tense": [
            "utilizaré",
            "utilizarás",
            "utilizará",
            "utilizaremos",
            "utilizaréis",
            "utilizarán"
        ],
        "preterite-tense": [
            "utilicé",
            "utilizaste",
            "utilizó",
            "utilizamos",
            "utilizasteis",
            "utilizaron"
        ],
        "present-subjunctive-tense": [
            "utilice",
            "utilices",
            "utilice",
            "utilicemos",
            "utilicéis",
            "utilicen"
        ],
        "future-subjunctive-tense": [
            "utilizare",
            "utilizares",
            "utilizare",
            "utilizáremos",
            "utilizareis",
            "utilizaren"
        ]
    },
    "vaciar": {
        "present-tense": [
            "vacío",
            "vacías",
            "vacía",
            "vaciamos",
            "vaciáis",
            "vacían"
        ],
        "future-tense": [
            "vaciaré",
            "vaciarás",
            "vaciará",
            "vaciaremos",
            "vaciaréis",
            "vaciarán"
        ],
        "preterite-tense": [
            "vacié",
            "vaciaste",
            "vació",
            "vaciamos",
            "vaciasteis",
            "vaciaron"
        ],
        "present-subjunctive-tense": [
            "vacíe",
            "vacíes",
            "vacíe",
            "vaciemos",
            "vaciéis",
            "vacíen"
        ],
        "future-subjunctive-tense": [
            "vaciare",
            "vaciares",
            "vaciare",
            "vaciáremos",
            "vaciareis",
            "vaciaren"
        ]
    },
    "valer": {
        "present-tense": [
            "valgo",
            "vales",
            "vale",
            "valemos",
            "valéis",
            "valen"
        ],
        "future-tense": [
            "valdré",
            "valdrás",
            "valdrá",
            "valdremos",
            "valdréis",
            "valdrán"
        ],
        "preterite-tense": [
            "valí",
            "valiste",
            "valió",
            "valimos",
            "valisteis",
            "valieron"
        ],
        "present-subjunctive-tense": [
            "valga",
            "valgas",
            "valga",
            "valgamos",
            "valgáis",
            "valgan"
        ],
        "future-subjunctive-tense": [
            "valiere",
            "valieres",
            "valiere",
            "valiéremos",
            "valiereis",
            "valieren"
        ]
    },
    "variar": {
        "present-tense": [
            "varío",
            "varías",
            "varía",
            "variamos",
            "variáis",
            "varían"
        ],
        "future-tense": [
            "variaré",
            "variarás",
            "variará",
            "variaremos",
            "variaréis",
            "variarán"
        ],
        "preterite-tense": [
            "varié",
            "variaste",
            "varió",
            "variamos",
            "variasteis",
            "variaron"
        ],
        "present-subjunctive-tense": [
            "varíe",
            "varíes",
            "varíe",
            "variemos",
            "variéis",
            "varíen"
        ],
        "future-subjunctive-tense": [
            "variare",
            "variares",
            "variare",
            "variáremos",
            "variareis",
            "variaren"
        ]
    },
    "vencer": {
        "present-tense": [
            "venzo",
            "vences",
            "vence",
            "vencemos",
            "vencéis",
            "vencen"
        ],
        "future-tense": [
            "venceré",
            "vencerás",
            "vencerá",
            "venceremos",
            "venceréis",
            "vencerán"
        ],
        "preterite-tense": [
            "vencí",
            "venciste",
            "venció",
            "vencimos",
            "vencisteis",
            "vencieron"
        ],
        "present-subjunctive-tense": [
            "venza",
            "venzas",
            "venza",
            "venzamos",
            "venzáis",
            "venzan"
        ],
        "future-subjunctive-tense": [
            "venciere",
            "vencieres",
            "venciere",
            "venciéremos",
            "venciereis",
            "vencieren"
        ]
    },
    "vender": {
        "present-tense": [
            "vendo",
            "vendes",
            "vende",
            "vendemos",
            "vendéis",
            "venden"
        ],
        "future-tense": [
            "venderé",
            "venderás",
            "venderá",
            "venderemos",
            "venderéis",
            "venderán"
        ],
        "preterite-tense": [
            "vendí",
            "vendiste",
            "vendió",
            "vendimos",
            "vendisteis",
            "vendieron"
        ],
        "present-subjunctive-tense": [
            "venda",
            "vendas",
            "venda",
            "vendamos",
            "vendáis",
            "vendan"
        ],
        "future-subjunctive-tense": [
            "vendiere",
            "vendieres",
            "vendiere",
            "vendiéremos",
            "vendiereis",
            "vendieren"
        ]
    },
    "venir": {
        "present-tense": [
            "vengo",
            "vienes",
            "viene",
            "venimos",
            "venís",
            "vienen"
        ],
        "future-tense": [
            "vendré",
            "vendrás",
            "vendrá",
            "vendremos",
            "vendréis",
            "vendrán"
        ],
        "preterite-tense": [
            "vine",
            "viniste",
            "vino",
            "vinimos",
            "vinisteis",
            "vinieron"
        ],
        "present-subjunctive-tense": [
            "venga",
            "vengas",
            "venga",
            "vengamos",
            "vengáis",
            "vengan"
        ],
        "future-subjunctive-tense": [
            "viniere",
            "vinieres",
            "viniere",
            "viniéremos",
            "viniereis",
            "vinieren"
        ]
    },
    "ver": {
        "present-tense": [
            "veo",
            "ves",
            "ve",
            "vemos",
            "veis",
            "ven"
        ],
        "future-tense": [
            "veré",
            "verás",
            "verá",
            "veremos",
            "veréis",
            "verán"
        ],
        "preterite-tense": [
            "vi",
            "viste",
            "vio",
            "vimos",
            "visteis",
            "vieron"
        ],
        "present-subjunctive-tense": [
            "vea",
            "veas",
            "vea",
            "veamos",
            "veáis",
            "vean"
        ],
        "future-subjunctive-tense": [
            "viere",
            "vieres",
            "viere",
            "viéremos",
            "viereis",
            "vieren"
        ]
    },
    "verificar": {
        "present-tense": [
            "verifico",
            "verificas",
            "verifica",
            "verificamos",
            "verificáis",
            "verifican"
        ],
        "future-tense": [
            "verificaré",
            "verificarás",
            "verificará",
            "verificaremos",
            "verificaréis",
            "verificarán"
        ],
        "preterite-tense": [
            "verifiqué",
            "verificaste",
            "verificó",
            "verificamos",
            "verificasteis",
            "verificaron"
        ],
        "present-subjunctive-tense": [
            "verifique",
            "verifiques",
            "verifique",
            "verifiquemos",
            "verifiquéis",
            "verifiquen"
        ],
        "future-subjunctive-tense": [
            "verificare",
            "verificares",
            "verificare",
            "verificáremos",
            "verificareis",
            "verificaren"
        ]
    },
    "vestir": {
        "present-tense": [
            "visto",
            "vistes",
            "viste",
            "vestimos",
            "vestís",
            "visten"
        ],
        "future-tense": [
            "vestiré",
            "vestirás",
            "vestirá",
            "vestiremos",
            "vestiréis",
            "vestirán"
        ],
        "preterite-tense": [
            "vestí",
            "vestiste",
            "vistió",
            "vestimos",
            "vestisteis",
            "vistieron"
        ],
        "present-subjunctive-tense": [
            "vista",
            "vistas",
            "vista",
            "vistamos",
            "vistáis",
            "vistan"
        ],
        "future-subjunctive-tense": [
            "vistiere",
            "vistieres",
            "vistiere",
            "vistiéremos",
            "vistiereis",
            "vistieren"
        ]
    },
    "vestirse": {
        "present-tense": [
            "me visto",
            "te vistes",
            "se viste",
            "nos vestimos",
            "os vestís",
            "se visten"
        ],
        "future-tense": [
            "me vestiré",
            "te vestirás",
            "se vestirá",
            "nos vestiremos",
            "os vestiréis",
            "se vestirán"
        ],
        "preterite-tense": [
            "me vestí",
            "te vestiste",
            "se vistió",
            "nos vestimos",
            "os vestisteis",
            "se vistieron"
        ],
        "present-subjunctive-tense": [
            "me vista",
            "te vistas",
            "se vista",
            "nos vistamos",
            "os vistáis",
            "se vistan"
        ],
        "future-subjunctive-tense": [
            "me vistiere",
            "te vistieres",
            "se vistiere",
            "nos vistiéremos",
            "os vistiereis",
            "se vistieren"
        ]
    },
    "viajar": {
        "present-tense": [
            "viajo",
            "viajas",
            "viaja",
            "viajamos",
            "viajáis",
            "viajan"
        ],
        "future-tense": [
            "viajaré",
            "viajarás",
            "viajará",
            "viajaremos",
            "viajaréis",
            "viajarán"
        ],
        "preterite-tense": [
            "viajé",
            "viajaste",
            "viajó",
            "viajamos",
            "viajasteis",
            "viajaron"
        ],
        "present-subjunctive-tense": [
            "viaje",
            "viajes",
            "viaje",
            "viajemos",
            "viajéis",
            "viajen"
        ],
        "future-subjunctive-tense": [
            "viajare",
            "viajares",
            "viajare",
            "viajáremos",
            "viajareis",
            "viajaren"
        ]
    },
    "violar": {
        "present-tense": [
            "violo",
            "violas",
            "viola",
            "violamos",
            "violáis",
            "violan"
        ],
        "future-tense": [
            "violaré",
            "violarás",
            "violará",
            "violaremos",
            "violaréis",
            "violarán"
        ],
        "preterite-tense": [
            "violé",
            "violaste",
            "violó",
            "violamos",
            "violasteis",
            "violaron"
        ],
        "present-subjunctive-tense": [
            "viole",
            "violes",
            "viole",
            "violemos",
            "violéis",
            "violen"
        ],
        "future-subjunctive-tense": [
            "violare",
            "violares",
            "violare",
            "violáremos",
            "violareis",
            "violaren"
        ]
    },
    "visitar": {
        "present-tense": [
            "visito",
            "visitas",
            "visita",
            "visitamos",
            "visitáis",
            "visitan"
        ],
        "future-tense": [
            "visitaré",
            "visitarás",
            "visitará",
            "visitaremos",
            "visitaréis",
            "visitarán"
        ],
        "preterite-tense": [
            "visité",
            "visitaste",
            "visitó",
            "visitamos",
            "visitasteis",
            "visitaron"
        ],
        "present-subjunctive-tense": [
            "visite",
            "visites",
            "visite",
            "visitemos",
            "visitéis",
            "visiten"
        ],
        "future-subjunctive-tense": [
            "visitare",
            "visitares",
            "visitare",
            "visitáremos",
            "visitareis",
            "visitaren"
        ]
    },
    "vivir": {
        "present-tense": [
            "vivo",
            "vives",
            "vive",
            "vivimos",
            "vivís",
            "viven"
        ],
        "future-tense": [
            "viviré",
            "vivirás",
            "vivirá",
            "viviremos",
            "viviréis",
            "vivirán"
        ],
        "preterite-tense": [
            "viví",
            "viviste",
            "vivió",
            "vivimos",
            "vivisteis",
            "vivieron"
        ],
        "present-subjunctive-tense": [
            "viva",
            "vivas",
            "viva",
            "vivamos",
            "viváis",
            "vivan"
        ],
        "future-subjunctive-tense": [
            "viviere",
            "vivieres",
            "viviere",
            "viviéremos",
            "viviereis",
            "vivieren"
        ]
    },
    "volar": {
        "present-tense": [
            "vuelo",
            "vuelas",
            "vuela",
            "volamos",
            "voláis",
            "vuelan"
        ],
        "future-tense": [
            "volaré",
            "volarás",
            "volará",
            "volaremos",
            "volaréis",
            "volarán"
        ],
        "preterite-tense": [
            "volé",
            "volaste",
            "voló",
            "volamos",
            "volasteis",
            "volaron"
        ],
        "present-subjunctive-tense": [
            "vuele",
            "vueles",
            "vuele",
            "volemos",
            "voléis",
            "vuelen"
        ],
        "future-subjunctive-tense": [
            "volare",
            "volares",
            "volare",
            "voláremos",
            "volareis",
            "volaren"
        ]
    },
    "volver": {
        "present-tense": [
            "vuelvo",
            "vuelves",
            "vuelve",
            "volvemos",
            "volvéis",
            "vuelven"
        ],
        "future-tense": [
            "volveré",
            "volverás",
            "volverá",
            "volveremos",
            "volveréis",
            "volverán"
        ],
        "preterite-tense": [
            "volví",
            "volviste",
            "volvió",
            "volvimos",
            "volvisteis",
            "volvieron"
        ],
        "present-subjunctive-tense": [
            "vuelva",
            "vuelvas",
            "vuelva",
            "volvamos",
            "volváis",
            "vuelvan"
        ],
        "future-subjunctive-tense": [
            "volviere",
            "volvieres",
            "volviere",
            "volviéremos",
            "volviereis",
            "volvieren"
        ]
    },
    "vomit": {
        "present-tense": [
            "vomito",
            "vomitas",
            "vomita",
            "vomitamos",
            "vomitáis",
            "vomitan"
        ],
        "future-tense": [
            "vomitaré",
            "vomitarás",
            "vomitará",
            "vomitaremos",
            "vomitaréis",
            "vomitarán"
        ],
        "preterite-tense": [
            "vomité",
            "vomitaste",
            "vomitó",
            "vomitamos",
            "vomitasteis",
            "vomitaron"
        ],
        "present-subjunctive-tense": [
            "vomite",
            "vomites",
            "vomite",
            "vomitemos",
            "vomitéis",
            "vomiten"
        ],
        "future-subjunctive-tense": [
            "vomitare",
            "vomitares",
            "vomitare",
            "vomitáremos",
            "vomitareis",
            "vomitaren"
        ]
    },
    "votar": {
        "present-tense": [
            "voto",
            "votas",
            "vota",
            "votamos",
            "votáis",
            "votan"
        ],
        "future-tense": [
            "votaré",
            "votarás",
            "votará",
            "votaremos",
            "votaréis",
            "votarán"
        ],
        "preterite-tense": [
            "voté",
            "votaste",
            "votó",
            "votamos",
            "votasteis",
            "votaron"
        ],
        "present-subjunctive-tense": [
            "vote",
            "votes",
            "vote",
            "votemos",
            "votéis",
            "voten"
        ],
        "future-subjunctive-tense": [
            "votare",
            "votares",
            "votare",
            "votáremos",
            "votareis",
            "votaren"
        ]
    },
    "yacer": {
        "present-tense": [
            "yazco",
            "yaces",
            "yace",
            "yacemos",
            "yacéis",
            "yacen"
        ],
        "future-tense": [
            "yaceré",
            "yacerás",
            "yacerá",
            "yaceremos",
            "yaceréis",
            "yacerán"
        ],
        "preterite-tense": [
            "yací",
            "yaciste",
            "yació",
            "yacimos",
            "yacisteis",
            "yacieron"
        ],
        "present-subjunctive-tense": [
            "yazca",
            "yazcas",
            "yazca",
            "yazcamos",
            "yazcáis",
            "yazcan"
        ],
        "future-subjunctive-tense": [
            "yaciere",
            "yacieres",
            "yaciere",
            "yaciéremos",
            "yaciereis",
            "yacieren"
        ]
    },
    "zambullirse": {
        "present-tense": [
            "me zambullo",
            "te zambulles",
            "se zambulle",
            "nos zambullimos",
            "os zambullís",
            "se zambullen"
        ],
        "future-tense": [
            "me zambulliré",
            "te zambullirás",
            "se zambullirá",
            "nos zambulliremos",
            "os zambulliréis",
            "se zambullirán"
        ],
        "preterite-tense": [
            "me zambullí",
            "te zambulliste",
            "se zambulló",
            "nos zambullimos",
            "os zambullisteis",
            "se zambulleron"
        ],
        "present-subjunctive-tense": [
            "me zambulla",
            "te zambullas",
            "se zambulla",
            "nos zambullamos",
            "os zambulláis",
            "se zambullan"
        ],
        "future-subjunctive-tense": [
            "me zambullere",
            "te zambulleres",
            "se zambullere",
            "nos zambulléremos",
            "os zambullereis",
            "se zambulleren"
        ]
    },
    "besar": {
        "present-tense": [
            "beso",
            "besas",
            "besa",
            "besamos",
            "besáis",
            "besan"
        ],
        "future-tense": [
            "besaré",
            "besarás",
            "besará",
            "besaremos",
            "besaréis",
            "besarán"
        ],
        "preterite-tense": [
            "besé",
            "besaste",
            "besó",
            "besamos",
            "besasteis",
            "besaron"
        ],
        "present-subjunctive-tense": [
            "bese",
            "beses",
            "bese",
            "besemos",
            "beséis",
            "besen"
        ],
        "future-subjunctive-tense": [
            "besare",
            "besares",
            "besare",
            "besáremos",
            "besareis",
            "besaren"
        ]
    },
    "bailar": {
        "present-tense": [
            "bailo",
            "bailas",
            "baila",
            "bailamos",
            "bailáis",
            "bailan"
        ],
        "future-tense": [
            "bailaré",
            "bailarás",
            "bailará",
            "bailaremos",
            "bailaréis",
            "bailarán"
        ],
        "preterite-tense": [
            "bailé",
            "bailaste",
            "bailó",
            "bailamos",
            "bailasteis",
            "bailaron"
        ],
        "present-subjunctive-tense": [
            "baile",
            "bailes",
            "baile",
            "bailemos",
            "bailéis",
            "bailen"
        ],
        "future-subjunctive-tense": [
            "bailare",
            "bailares",
            "bailare",
            "bailáremos",
            "bailareis",
            "bailaren"
        ]
    },
    "presentar": {
        "present-tense": [
            "presento",
            "presentas",
            "presenta",
            "presentamos",
            "presentáis",
            "presentan"
        ],
        "future-tense": [
            "presentaré",
            "presentarás",
            "presentará",
            "presentaremos",
            "presentaréis",
            "presentarán"
        ],
        "preterite-tense": [
            "presenté",
            "presentaste",
            "presentó",
            "presentamos",
            "presentasteis",
            "presentaron"
        ],
        "present-subjunctive-tense": [
            "presente",
            "presentes",
            "presente",
            "presentemos",
            "presentéis",
            "presenten"
        ],
        "future-subjunctive-tense": [
            "presentare",
            "presentares",
            "presentare",
            "presentáremos",
            "presentareis",
            "presentaren"
        ]
    },
    "esperar": {
        "present-tense": [
            "espero",
            "esperas",
            "espera",
            "esperamos",
            "esperáis",
            "esperan"
        ],
        "future-tense": [
            "esperaré",
            "esperarás",
            "esperará",
            "esperaremos",
            "esperaréis",
            "esperarán"
        ],
        "preterite-tense": [
            "esperé",
            "esperaste",
            "esperó",
            "esperamos",
            "esperasteis",
            "esperaron"
        ],
        "present-subjunctive-tense": [
            "espere",
            "esperes",
            "espere",
            "esperemos",
            "esperéis",
            "esperen"
        ],
        "future-subjunctive-tense": [
            "esperare",
            "esperares",
            "esperare",
            "esperáremos",
            "esperareis",
            "esperaren"
        ]
    }
}

export function LanguageGame(){

	const [conjugationGame, setConjugationGame] = useState({ targetVerb : '', conjugatedVerb : '', answerTense : '', elo : 0, tenseList : [], randomTenses : [] })

	const rating = useRef(0)
	const playerElo = useRef(1200)
	const eloDifference = useRef(0)
	const prevAnswer = useRef('')
	const questionElo =useRef(0)

	useEffect(() => {
	    const currentConjugationGame = getNewVerb(spanishVerbData)
	    setConjugationGame({...currentConjugationGame})
	  }, [])


	function getNewVerb(spanishVerbData, answerStatus=''){
	    // Get a random verb
	    const verbList = Object.keys(spanishVerbData)
	    const randomVerbIndex = Math.floor(Math.random() * verbList.length)
	    const verb = verbList[randomVerbIndex]

	    //Get a random tense
	    const allTenses = ["present-tense", "future-tense", "preterite-tense", "present-subjunctive-tense", "future-subjunctive-tense"]
	    const randomTenseIndex = Math.floor(Math.random() * allTenses.length)
	    const verbTense = allTenses[randomTenseIndex]

	    // Get a random conjugation
	    const randomConjIndex = Math.floor(Math.random() * 6)
	    const randomVerbConjugated = spanishVerbData[verb][verbTense][randomConjIndex]

	    // Get a list of tenses mixed with answer
	    const answerTenseShuffled = calculateTenseList(verbTense, allTenses)

	    // Get elo rating
	    const conjElo = {
	      "present-tense" : 600,
	      "future-tense" : 1000,
	      "preterite-tense" : 1400,
	      "present-subjunctive-tense" : 1800,
	      "future-subjunctive-tense" : 2200
	    }

	    // Calculate elo
	    const expectedWinPercentage = (1/(1 + Math.pow(10, ((questionElo.current - playerElo.current)/400))))
	    const calculatedEloDifferenceWin = Math.floor(30*(1 - expectedWinPercentage))
	    const calculatedEloDifferenceLoss = Math.floor(30*(0 - expectedWinPercentage))

	    // if prevAnswer === '' then the below doesn't run
	    if(answerStatus === "Right!"){
	    	eloDifference.current = calculatedEloDifferenceWin
	   		playerElo.current = playerElo.current + eloDifference.current
	    } else if(answerStatus === "Wrong!"){
	    	eloDifference.current = calculatedEloDifferenceLoss
	   		playerElo.current = playerElo.current + eloDifference.current
	    }

	    return { targetVerb : verb , conjugatedVerb : randomVerbConjugated, randomTenses : answerTenseShuffled, elo : conjElo[verbTense] }
	  }

	  function calculateTenseList(answerTense, tenseList){
	    const answerPlacement = Math.floor(Math.random() * 3)

	    const answerIndex = tenseList.indexOf(answerTense)
	    const updatedTenses = [...tenseList.slice(0, answerIndex), ...tenseList.slice(answerIndex + 1)]

	    const randomTenses = [...updatedTenses].sort(() => 0.5 - Math.random()).slice(0,3)

	    randomTenses.splice(answerPlacement, 0, answerTense + '-answer')

	    randomTenses.forEach((tense, index) => {
	      if(index === answerPlacement){
	        randomTenses[index] = {val : tense, id : crypto.randomUUID(), selected : false, answer : true }
	      } else {
	        randomTenses[index] = {val : tense, id : crypto.randomUUID(), selected : false, answer : false }
	      }
	    })

	    return randomTenses
	  }


	const checkAnswer = () => {
		event.preventDefault()

		if(document.querySelectorAll('li[data-selected="true"]').length > 0){
			conjugationGame.randomTenses.map( (tense, index) => {
				if(tense.answer === true){
					if(document.querySelector('li[data-selected="true"]').dataset.id === tense.id){
						prevAnswer.current = 'Right!'
					} else {
						prevAnswer.current = 'Wrong!'
					}

					questionElo.current = conjugationGame.elo
				}
			})

			const nextConjugationGame = getNewVerb(spanishVerbData, prevAnswer.current)
    		setConjugationGame({...nextConjugationGame})
		}
	}

	const selectTense = id => {
		setConjugationGame(currentConjugationGame => {
			return { ...currentConjugationGame, randomTenses : currentConjugationGame['randomTenses'].map(tense => {
				if(tense.id === id){
					if(event.target.parentNode.dataset.selected === 'false'){
						return {...tense, selected : true}
					} else {
						return {...tense, selected : false}
					}
				} else {
					return {...tense, selected : false}
				}
			})}
		})
	}

	return (
		<>
			<section id='conjugation-game'>
				<h1>{conjugationGame.targetVerb}</h1>
				<form onSubmit={checkAnswer} className="conugationForm">
					<h2>{conjugationGame.conjugatedVerb}</h2>
					<ul className="list">
						{conjugationGame.randomTenses.map((tense, index) => {
							return(
								<li 
									className='tense-option'
									key={tense.id}
									data-id={tense.id}
									data-selected={tense.selected}
									onClick = {() => selectTense(tense.id)} >

									<p>{tense.val}</p>
								</li>
							)
						})}
				    </ul>
				    <button type="submit" className="submit-button">Submit</button>
				    <p id="question-elo">The last question had a rating of: {questionElo.current}</p>
				    <p id="current-elo">Your current elo is: {playerElo.current}</p>
				    <p id="prev-answer">Your last answer was: {prevAnswer.current}</p>
				    <p id="rating-change">You gained/lost: {eloDifference.current} rating points</p>
				</form>
			</section>
		</>
	)
}