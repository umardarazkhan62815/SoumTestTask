
const SAMPLE_DATA = [
    {
        title: "Phones",
        id: 1,
        subCategory: [
            {
                id: 1_1,
                title: 'Apple',
                subCategory: [
                    {
                        id: 1_1_1,
                        title: 'iPhon6',
                        subCategory: [
                            {
                                id: 1_1_1_1,
                                title: '128GB'
                            },
                            {
                                title: '256GB',
                                id: 1_1_1_2,
                            }
                        ]
                    },
                    {
                        title: 'iPhon7',
                        id: 1_1_2
                    }
                ]
            },
            {
                title: 'Android',
                id: 1_2,
                subCategory: [
                    {
                        title: 'Infinix',
                        id: 1_2_1,
                        subCategory: [
                            { title: '128GB', id: 1_2_1_1, },
                            { title: '256GB', id: 1_2_1_2, }
                        ]
                    },
                    {
                        title: 'Vivo',
                        id: 1_2_2,
                        subCategory: [
                            { title: '128GB', id: 1_2_2_1, },
                            { title: '256GB', id: 1_2_2_2, }
                        ]
                    },
                    {
                        title: 'Galaxy',
                        id: 1_2_3,
                        subCategory: [
                            { title: '128GB', id: 1_2_3_1, },
                            { title: '256GB', id: 1_2_3_2, }
                        ]
                    },
                    {
                        title: 'Motorolla',
                        id: 1_2_4,
                        subCategory: [
                            { title: '128GB', id: 1_2_4_1, },
                            { title: '256GB', id: 1_2_4_2, }
                        ]
                    },
                ]
            },
        ],
    },
    {
        title: "Watchhes",
        id: 3,
        subCategory: [
            {
                title: 'Samsung',
                id: 3_1,
                subCategory: [
                    {
                        title: 'Samsung 01',
                        id: 3_1_1,
                        subCategory: [
                            { title: '128GB', id: 3_1_1_1, },
                            { title: '256GB', id: 3_1_1_2, }
                        ]
                    },
                    { title: 'Oppo 01', id: 3_1_2, }
                ]
            },
            { title: 'Redmi', id: 3_1_3, }
        ],
    },
]

export { SAMPLE_DATA };
