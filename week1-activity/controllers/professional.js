const data = {
    professionalName: 'Ben Roberts',
    base64Image: '',
    nameLink: {
        firstName: 'Ben',
        url: 'https://github.com/'
    },
    primaryDescription: 'I am a student learning web development and backend API design.',
    workDescription1: 'I am currently learning how to build REST endpoints using Node.js and Express.',
    workDescription2: 'This project connects a completed frontend to a custom backend API.',
    linkTitleText: 'Connect with me:',
    linkedInLink: {
        text: 'LinkedIn',
        link: 'https://www.linkedin.com/'
    },
    githubLink: {
        text: 'GitHub',
        link: 'https://github.com/'
    }
};

const getProfessionalData = (req, res) => {
    res.json(data);
};

module.exports = {
    getProfessionalData
};