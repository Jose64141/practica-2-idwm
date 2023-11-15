import { PrismaClient, Prisma } from '@prisma/client';

const prisma = new PrismaClient();

const skillGroupData: Prisma.SkillGroupCreateInput[] = [
    {
        name: "Lenguajes de Programación"
    },
    {
        name: "Frameworks"
    },
];


const userData: Prisma.UserCreateInput[] = [
    {
        name: "José",
        lastName: "Alcayaga",
        email: "jose.alcayaga@alumnos.ucn.cl",
        age: 21,
        city: "Antofagasta",
        country: "Chile",
        linkedInUrl: "http://www.linkedin.com/in/jose-manuel-alcayaga-marin-88a58926",
        summary: "Estudiante de Ingeniería Civil en Computación e Informática. Experiencia en desarrollo de aplicaciones de escritorios y sistemas en línea.",
        interests: {create: [
            {
                name: "Sistemas Operativos",
                type: "PRO"
            },
            {
                name: "Virtualización",
                type: "PRO"
            },
            {
                name: "Sistemas Embebidos",
                type: "PRO"
            },
            {
                name: "Historia de la Computación",
                type: "HOBBY"
            },
            {
                name: "Música",
                type: "HOBBY"
            },
            {
                name: "Historia Universal",
                type: "HOBBY"
            },
            {
                name: "Arquitectura",
                type: "HOBBY"
            },
        ] },
        skills: {create: [
            {
                name: "C++",
                level: 0.75,
                groupId: 1
            },
            {
                name: "Python",
                level: 0.5,
                groupId: 1
            },
            {
                name: "Java",
                level: 0.25,
                groupId: 1
            },
            {
                name: "JavaScript",
                level: 0.25,
                groupId: 1
            },
            {
                name: "Qt Framework",
                level: 0.5,
                groupId: 2
            },
            {
                name: "React",
                level: 0.5,
                groupId: 2
            },
        ]},
        imageUrl: "https://res.cloudinary.com/dsjcs2tj7/image/upload/v1699994139/profile-pic_ua4jfd.png",
    }
];

async function main() {
    console.log(`Start seeding ...`);
    for (const u of skillGroupData) {
        const skillGroup = await prisma.skillGroup.create({
            data: u,
        });
        console.log(`Created skill group with id: ${skillGroup.id}`);
    }

    for (const u of userData) {
        const user = await prisma.user.create({
            data: u,
        });
        console.log(`Created user with id: ${user.id}`);
    }

    console.log(`Seeding finished.`);
}

main()
    .then(async () => {
        await prisma.$disconnect();
    })
    .catch(async (e) => {
        console.error(e);
        await prisma.$disconnect();
        process.exit(1);
    });
