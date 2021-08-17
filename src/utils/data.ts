// interface socials{
//     linkedin: string,
//     github: string,
//     twitter: string
// }

// interface contacts{
//     email: string,
//     address: string,
//     phone: number,
//     social: socials[]
// }

// interface bio{
//     firstName: string,
//     lastName: string,
//     role: string,
//     summary: string,
// }

// interface school{
//     undergrad: [
//         institution: string,
//         year_of_completion: string
//     ],
//     postgrad: [
//         institution: string,
//         year_of_completion: string
//     ]
// }
// interface education{
//     schools: school[],

// }



const data: any[] = [
    {
        id: '1',
        bio: [
            {
                firstName: 'Ola',
                lastName: 'Ishola',
                role: 'Front-End Developer',
                summary: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed in tortor eu elit aliquam posuere at non nisi. Nam elementum tempor nibh, sit amet gravida leo consectetur at. Donec dapibus gravida nisl. Etiam quis dolor vel est vulputate volutpat. Ut eu congue ligula. Quisque sed risus dolor. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.',
            }
        ],
        
    },

    {
        id: '3',
        education: [
            {
                undergrad: 'UoB',
                year: '2013',
                course: 'Computer Networking'
            },

            {
                postgrad: 'UoB',
                year: '2015',
                course: 'Computer Networking'
            }
        ]
    },

    {
        id: '2',
        contact: [
            

            {   
                email: 'olaishola@hotmail.co.uk',
                address: 'Oluyole, Nigeria',
                phone: +2348110837448,
                social: [
                    {
                        linkedin: '',
                        github: '',
                        twitter: ''
                    
                }
                ],
            }]
    }
        
];

export default data