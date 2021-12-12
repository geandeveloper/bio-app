import { Observable, observable, Subject } from "rxjs";

export interface Bio {
    profile?: Profile,
    video?: Video,
    links?: Link[]
}

interface Profile {
    name: string,
    username: string,
    avatarUrl: string
}

interface Video {
    url: string,
    description: string
}

interface Link {
    url: string,
    description: string
}

export class BioService {
    private bioSubject = new Subject<Bio>()
    public bio$: Observable<Bio> = this.bioSubject.asObservable();

    public loadUserBio(): void {
        return this.bioSubject.next({
            profile: {
                avatarUrl: "assets/images/me.jpg",
                name: "Gean Silva",
                username: "@geandeveloper"
            },
            video: {
                description: "Programação orientado objetos na prática",
                url: "https://www.youtube.com/embed/K0mKj_D6OdE"
            },
            links: [
                {
                    url: "https://www.youtube.com/channel/UCoVJbkLoUMLQFRfI6Ieo0dQ",
                    description: "YouTube"
                },
                {
                    url: "https://instagram.com/geandeveloper",
                    description: "Instagram"
                },
                {
                    url: "https://github.com/geandeveloper",
                    description: "GitHub"
                },
                {
                    url: "https://twitter.com/geandeveloper",
                    description: "Twitter"
                },
                {
                    url: "https://www.linkedin.com/in/geandeveloper/",
                    description: "Linkedin"
                },
            ]
        })
    }
}