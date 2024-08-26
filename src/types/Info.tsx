type PersonalInfo = {
    firstName: string;
    lastName: string;
};

type Role = {
    name: string;
    fields: string[];
};

const personalInfo: PersonalInfo = {
    firstName: 'Ronaz',
    lastName: 'Farahmand'
};

const role: Role = {
    name: 'Software Engineer',
    fields: ['ML Engineer', 'Mobile Developer', 'Web Developer']
}

export default {personalInfo, role};