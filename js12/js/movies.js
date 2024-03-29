const movies = [
    {
        id: 1,
        rating: 95,
        image: '1.webp',
        name: 'Дюна: Часть вторая',
        category: ['драма', 'фантастика', 'приключения', 'боевик'],
        description: 'Наследник знаменитого дома Атрейдесов Пол отправляется вместе с семьей на одну из самых опасных планет во Вселенной — Арракис. Здесь нет ничего, кроме песка, палящего солнца, гигантских чудовищ и основной причины межгалактических конфликтов — невероятно ценного ресурса, который называется меланж. В результате захвата власти Пол вынужден бежать и скрываться, и это становится началом его эпического путешествия. Враждебный мир Арракиса приготовил для него множество тяжелых испытаний, но только тот, кто готов взглянуть в глаза своему страху, достоин стать избранным.'
    },
    {
        id: 2,
        rating: 83,
        image: '2.webp',
        name: 'Бедные-несчастные',
        category: ['драма'],
        description: 'Викторианский Лондон. Сумасшедший хирург Годвин вылавливает из Темзы тело молодой беременной женщины, прыгнувшей с моста, пересаживает ей мозг её собственного нерожденного младенца и реанимирует. Белла поначалу передвигается как сломанная кукла и имеет весьма ограниченный словарный запас, но быстро учится. Чтобы наблюдать за ней, Годвин призывает на помощь студента-медика Макса, который заодно выглядит хорошей партией для девушки, но на Беллу кладет глаз плейбой-юрист Данкан Веддерберн и увлекает её в путешествие, где она познает мир и себя.'
    },
    {
        id: 3,
        rating: 50,
        image: '3.webp',
        name: 'Мастер и Маргарита',
        category: ['драма', 'приключения'],
        description: ''
    },
    {
        id: 4,
        rating: 60,
        image: '4.webp',
        name: 'Лёд 3',
        category: ['драма', 'фантастика', 'приключения', 'боевик'],
        description: 'Москва, 1930-е годы. Известный писатель на взлёте своей карьеры внезапно оказывается в центре литературного скандала. Спектакль по его пьесе снимают с репертуара, коллеги демонстративно избегают встречи, в считанные дни он превращается в изгоя. Вскоре после этого, он знакомится с Маргаритой, которая становится его возлюбленной и музой. Воодушевлённый ее любовью и поддержкой, писатель берется за новый роман, в котором персонажи — это люди из его окружения, а главный герой — загадочный Воланд, прообразом которого становится недавний знакомый иностранец. Писатель уходит с головой в мир своего романа и постепенно перестает замечать, как вымысел и реальность сплетаются в одно целое.'
    },
    {
        id: 5,
        rating: 75,
        image: '5.webp',
        name: 'Холоп 2',
        category: ['драма', 'фантастика'],
        description: 'Наследник знаменитого дома Атрейдесов Пол отправляется вместе с семьей на одну из самых опасных планет во Вселенной — Арракис. Здесь нет ничего, кроме песка, палящего солнца, гигантских чудовищ и основной причины межгалактических конфликтов — невероятно ценного ресурса, который называется меланж. В результате захвата власти Пол вынужден бежать и скрываться, и это становится началом его эпического путешествия. Враждебный мир Арракиса приготовил для него множество тяжелых испытаний, но только тот, кто готов взглянуть в глаза своему страху, достоин стать избранным.'
    },
    {
        id: 6,
        rating: 78,
        image: '6.webp',
        name: 'Дюна',
        category: ['драма', 'фантастика', 'боевик'],
        description: 'Наследник знаменитого дома Атрейдесов Пол отправляется вместе с семьей на одну из самых опасных планет во Вселенной — Арракис. Здесь нет ничего, кроме песка, палящего солнца, гигантских чудовищ и основной причины межгалактических конфликтов — невероятно ценного ресурса, который называется меланж. В результате захвата власти Пол вынужден бежать и скрываться, и это становится началом его эпического путешествия. Враждебный мир Арракиса приготовил для него множество тяжелых испытаний, но только тот, кто готов взглянуть в глаза своему страху, достоин стать избранным.'
    },
    {
        id: 7,
        rating: 80,
        image: '7.webp',
        name: 'Мистер Блейк к вашим услугам',
        category: ['драма', 'фантастика', 'приключения', 'боевик'],
        description: 'Наследник знаменитого дома Атрейдесов Пол отправляется вместе с семьей на одну из самых опасных планет во Вселенной — Арракис. Здесь нет ничего, кроме песка, палящего солнца, гигантских чудовищ и основной причины межгалактических конфликтов — невероятно ценного ресурса, который называется меланж. В результате захвата власти Пол вынужден бежать и скрываться, и это становится началом его эпического путешествия. Враждебный мир Арракиса приготовил для него множество тяжелых испытаний, но только тот, кто готов взглянуть в глаза своему страху, достоин стать избранным.'
    },
    {
        id: 8,
        rating: 82,
        image: '8.webp',
        name: 'Командир',
        category: ['драма', 'боевик'],
        description: 'Наследник знаменитого дома Атрейдесов Пол отправляется вместе с семьей на одну из самых опасных планет во Вселенной — Арракис. Здесь нет ничего, кроме песка, палящего солнца, гигантских чудовищ и основной причины межгалактических конфликтов — невероятно ценного ресурса, который называется меланж. В результате захвата власти Пол вынужден бежать и скрываться, и это становится началом его эпического путешествия. Враждебный мир Арракиса приготовил для него множество тяжелых испытаний, но только тот, кто готов взглянуть в глаза своему страху, достоин стать избранным.'
    },
    {
        id: 9,
        rating: 86,
        image: '9.webp',
        name: 'Бременские музыканты',
        category: ['драма', 'фантастика', 'приключения', 'боевик'],
        description: 'Наследник знаменитого дома Атрейдесов Пол отправляется вместе с семьей на одну из самых опасных планет во Вселенной — Арракис. Здесь нет ничего, кроме песка, палящего солнца, гигантских чудовищ и основной причины межгалактических конфликтов — невероятно ценного ресурса, который называется меланж. В результате захвата власти Пол вынужден бежать и скрываться, и это становится началом его эпического путешествия. Враждебный мир Арракиса приготовил для него множество тяжелых испытаний, но только тот, кто готов взглянуть в глаза своему страху, достоин стать избранным.'
    },
    {
        id: 10,
        rating: 89,
        image: '10.webp',
        name: 'Воздух',
        category: ['драма', 'боевик'],
        description: 'Наследник знаменитого дома Атрейдесов Пол отправляется вместе с семьей на одну из самых опасных планет во Вселенной — Арракис. Здесь нет ничего, кроме песка, палящего солнца, гигантских чудовищ и основной причины межгалактических конфликтов — невероятно ценного ресурса, который называется меланж. В результате захвата власти Пол вынужден бежать и скрываться, и это становится началом его эпического путешествия. Враждебный мир Арракиса приготовил для него множество тяжелых испытаний, но только тот, кто готов взглянуть в глаза своему страху, достоин стать избранным.'
    },
    {
        id: 11,
        rating: 40,
        image: '11.webp',
        name: 'Оппенгеймер',
        category: ['драма', 'фантастика', 'приключения', 'боевик'],
        description: 'Наследник знаменитого дома Атрейдесов Пол отправляется вместе с семьей на одну из самых опасных планет во Вселенной — Арракис. Здесь нет ничего, кроме песка, палящего солнца, гигантских чудовищ и основной причины межгалактических конфликтов — невероятно ценного ресурса, который называется меланж. В результате захвата власти Пол вынужден бежать и скрываться, и это становится началом его эпического путешествия. Враждебный мир Арракиса приготовил для него множество тяжелых испытаний, но только тот, кто готов взглянуть в глаза своему страху, достоин стать избранным.'
    },
    {
        id: 12,
        rating: 41,
        image: '12.webp',
        name: 'Три богатыря и Пуп Земли',
        category: ['драма', 'фантастика', 'приключения', 'боевик'],
        description: 'Наследник знаменитого дома Атрейдесов Пол отправляется вместе с семьей на одну из самых опасных планет во Вселенной — Арракис. Здесь нет ничего, кроме песка, палящего солнца, гигантских чудовищ и основной причины межгалактических конфликтов — невероятно ценного ресурса, который называется меланж. В результате захвата власти Пол вынужден бежать и скрываться, и это становится началом его эпического путешествия. Враждебный мир Арракиса приготовил для него множество тяжелых испытаний, но только тот, кто готов взглянуть в глаза своему страху, достоин стать избранным.'
    },
    {
        id: 13,
        rating: 30,
        image: '13.webp',
        name: 'Кентавр',
        category: ['драма', 'боевик'],
        description: 'Наследник знаменитого дома Атрейдесов Пол отправляется вместе с семьей на одну из самых опасных планет во Вселенной — Арракис. Здесь нет ничего, кроме песка, палящего солнца, гигантских чудовищ и основной причины межгалактических конфликтов — невероятно ценного ресурса, который называется меланж. В результате захвата власти Пол вынужден бежать и скрываться, и это становится началом его эпического путешествия. Враждебный мир Арракиса приготовил для него множество тяжелых испытаний, но только тот, кто готов взглянуть в глаза своему страху, достоин стать избранным.'
    },
    {
        id: 14,
        rating: 35,
        image: '14.webp',
        name: 'Вызов',
        category: ['драма', 'фантастика', 'приключения', 'боевик'],
        description: 'Наследник знаменитого дома Атрейдесов Пол отправляется вместе с семьей на одну из самых опасных планет во Вселенной — Арракис. Здесь нет ничего, кроме песка, палящего солнца, гигантских чудовищ и основной причины межгалактических конфликтов — невероятно ценного ресурса, который называется меланж. В результате захвата власти Пол вынужден бежать и скрываться, и это становится началом его эпического путешествия. Враждебный мир Арракиса приготовил для него множество тяжелых испытаний, но только тот, кто готов взглянуть в глаза своему страху, достоин стать избранным.'
    },
    {
        id: 15,
        rating: 40,
        image: '15.webp',
        name: 'Онегин',
        category: ['драма', 'фантастика', 'приключения', 'боевик'],
        description: 'Наследник знаменитого дома Атрейдесов Пол отправляется вместе с семьей на одну из самых опасных планет во Вселенной — Арракис. Здесь нет ничего, кроме песка, палящего солнца, гигантских чудовищ и основной причины межгалактических конфликтов — невероятно ценного ресурса, который называется меланж. В результате захвата власти Пол вынужден бежать и скрываться, и это становится началом его эпического путешествия. Враждебный мир Арракиса приготовил для него множество тяжелых испытаний, но только тот, кто готов взглянуть в глаза своему страху, достоин стать избранным.'
    },
    {
        id: 16,
        rating: 90,
        image: '16.webp',
        name: 'Нечисть',
        category: ['драма', 'боевик'],
        description: 'Наследник знаменитого дома Атрейдесов Пол отправляется вместе с семьей на одну из самых опасных планет во Вселенной — Арракис. Здесь нет ничего, кроме песка, палящего солнца, гигантских чудовищ и основной причины межгалактических конфликтов — невероятно ценного ресурса, который называется меланж. В результате захвата власти Пол вынужден бежать и скрываться, и это становится началом его эпического путешествия. Враждебный мир Арракиса приготовил для него множество тяжелых испытаний, но только тот, кто готов взглянуть в глаза своему страху, достоин стать избранным.'
    },
    {
        id: 17,
        rating: 95,
        image: '17.webp',
        name: 'Убийцы цветочной луны',
        category: ['драма', 'фантастика', 'приключения', 'боевик'],
        description: 'Наследник знаменитого дома Атрейдесов Пол отправляется вместе с семьей на одну из самых опасных планет во Вселенной — Арракис. Здесь нет ничего, кроме песка, палящего солнца, гигантских чудовищ и основной причины межгалактических конфликтов — невероятно ценного ресурса, который называется меланж. В результате захвата власти Пол вынужден бежать и скрываться, и это становится началом его эпического путешествия. Враждебный мир Арракиса приготовил для него множество тяжелых испытаний, но только тот, кто готов взглянуть в глаза своему страху, достоин стать избранным.'
    },
    {
        id: 18,
        rating: 97,
        image: '18.webp',
        name: 'Прошлые жизни',
        category: ['драма', 'фантастика', 'приключения', 'боевик'],
        description: 'Наследник знаменитого дома Атрейдесов Пол отправляется вместе с семьей на одну из самых опасных планет во Вселенной — Арракис. Здесь нет ничего, кроме песка, палящего солнца, гигантских чудовищ и основной причины межгалактических конфликтов — невероятно ценного ресурса, который называется меланж. В результате захвата власти Пол вынужден бежать и скрываться, и это становится началом его эпического путешествия. Враждебный мир Арракиса приготовил для него множество тяжелых испытаний, но только тот, кто готов взглянуть в глаза своему страху, достоин стать избранным.'
    },
    {
        id: 19,
        rating: 99,
        image: '19.webp',
        name: 'Зона интересов',
        category: ['драма', 'фантастика', 'приключения', 'боевик'],
        description: 'Наследник знаменитого дома Атрейдесов Пол отправляется вместе с семьей на одну из самых опасных планет во Вселенной — Арракис. Здесь нет ничего, кроме песка, палящего солнца, гигантских чудовищ и основной причины межгалактических конфликтов — невероятно ценного ресурса, который называется меланж. В результате захвата власти Пол вынужден бежать и скрываться, и это становится началом его эпического путешествия. Враждебный мир Арракиса приготовил для него множество тяжелых испытаний, но только тот, кто готов взглянуть в глаза своему страху, достоин стать избранным.'
    },
    {
        id: 20,
        rating: 100,
        image: '20.webp',
        name: 'Догмен',
        category: ['приключения', 'боевик'],
        description: 'Наследник знаменитого дома Атрейдесов Пол отправляется вместе с семьей на одну из самых опасных планет во Вселенной — Арракис. Здесь нет ничего, кроме песка, палящего солнца, гигантских чудовищ и основной причины межгалактических конфликтов — невероятно ценного ресурса, который называется меланж. В результате захвата власти Пол вынужден бежать и скрываться, и это становится началом его эпического путешествия. Враждебный мир Арракиса приготовил для него множество тяжелых испытаний, но только тот, кто готов взглянуть в глаза своему страху, достоин стать избранным.'
    },
]