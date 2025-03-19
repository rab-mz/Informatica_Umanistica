// Data model with Dublin Core metadata structure
const ricette = {
    'Cucina Italiana': [
        {
            id: 'pasta-carbonara',
            title: 'Pasta Carbonara',
            image: 'https://images.unsplash.com/photo-1579631542720-3a87824fff86?q=40&w=1024&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
            shortDescription: 'Un classico primo piatto della cucina romana.',
            ingredients: ['400g di spaghetti', '200g di guanciale', '4 tuorli d\'uovo', '100g di pecorino romano', 'Pepe nero q.b.'],
            preparazione: [
                'Tagliare il guanciale a listarelle e rosolarlo in padella finché diventa croccante.',
                'In una ciotola, mescolare i tuorli con il pecorino grattugiato e abbondante pepe nero.',
                'Cuocere la pasta in acqua salata e scolarla al dente.',
                'Aggiungere la pasta nella padella con il guanciale, togliere dal fuoco.',
                'Versare il composto di uova e formaggio e mescolare rapidamente.',
                'Servire subito con una spolverata di pecorino e pepe.'
            ],
            metadata: {
                creator: 'Chef Romano',
                subject: 'Primi piatti, Pasta, Cucina tradizionale',
                coverage: 'Roma, Italia',
                difficultyLevel: 'Media',
                prepTime: '20 minuti',
                portion: '4 persone'
            }
        },
        {
            id: 'pizza-margherita',
            title: 'Pizza Margherita',
            image: 'https://images.unsplash.com/photo-1595854341625-f33ee10dbf94?q=40&w=1024&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
            shortDescription: 'La pizza napoletana per eccellenza, semplice e deliziosa.',
            ingredients: ['500g di farina 00', '300ml di acqua', '7g di lievito di birra', '10g di sale', '10g di olio d\'oliva', 'Passata di pomodoro q.b.', 'Mozzarella di bufala q.b.', 'Basilico fresco', 'Olio extravergine d\'oliva'],
            preparazione: [
                'Preparare l\'impasto mescolando farina, acqua, lievito, sale e olio.',
                'Lasciar lievitare l\'impasto per almeno 8 ore in un luogo tiepido.',
                'Stendere l\'impasto formando un disco sottile.',
                'Distribuire la passata di pomodoro sul disco di pasta.',
                'Cuocere in forno preriscaldato a 250°C per 5 minuti.',
                'Aggiungere la mozzarella a pezzi e cuocere per altri 5 minuti.',
                'Completare con foglie di basilico fresco e un filo d\'olio.'
            ],
            metadata: {
                creator: 'Pizzaiolo Napoletano',
                subject: 'Pizza, Cucina napoletana',
                coverage: 'Napoli, Italia',
                difficultyLevel: 'Media',
                prepTime: '30 minuti + lievitazione',
                portion: '4 persone'
            }
        }
    ],
    'Cucina Palestinese': [
        {
            id: 'falafel',
            title: 'Falafel',
            image: 'https://images.unsplash.com/photo-1593001872095-7d5b3868fb1d?q=40&w=1024&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
            shortDescription: 'Polpette di ceci fritte tradizionali palestinesi.',
            ingredients: ['500g di ceci secchi', '1 cipolla', '4 spicchi d\'aglio', '1 mazzo di prezzemolo', '1 mazzo di coriandolo', '2 cucchiai di cumino in polvere', '1 cucchiaio di coriandolo in polvere', 'Sale q.b.', 'Pepe q.b.', 'Olio per friggere'],
            preparazione: [
                'Mettere in ammollo i ceci per 24 ore, poi scolarli e asciugarli.',
                'Frullare i ceci con cipolla, aglio, prezzemolo, coriandolo e spezie.',
                'Lasciar riposare l\'impasto in frigorifero per almeno 1 ora.',
                'Formare delle palline e schiacciarle leggermente.',
                'Friggere in olio caldo fino a doratura.',
                'Servire con salsa tahini, hummus e pane pita.'
            ],
            metadata: {
                creator: 'Chef Mediterraneo',
                subject: 'Street food, Cucina mediorientale',
                coverage: 'Palestina',
                difficultyLevel: 'Media',
                prepTime: '1 ora + ammollo',
                portion: '6 persone'
            }
        },
        {
            id: 'hummus',
            title: 'Hummus',
            image: 'https://images.unsplash.com/photo-1603133872497-f29809b750bf?q=80&w=1024&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
            shortDescription: 'Crema di ceci con tahini, limone e olio d\'oliva.',
            ingredients: ['400g di ceci cotti', '3 cucchiai di tahini', 'Succo di 1 limone', '2 spicchi d\'aglio', '4 cucchiai di olio extravergine d\'oliva', 'Sale q.b.', 'Paprika q.b.', 'Prezzemolo fresco'],
            preparazione: [
                'Frullare i ceci con tahini, succo di limone, aglio e sale.',
                'Aggiungere acqua se necessario per ottenere una consistenza cremosa.',
                'Trasferire in una ciotola e creare un solco circolare sulla superficie.',
                'Versare l\'olio d\'oliva nel solco e spolverare con paprika.',
                'Guarnire con prezzemolo fresco e servire con pane pita caldo.'
            ],
            metadata: {
                creator: 'Chef Palestinese',
                subject: 'Antipasti, Salse, Cucina mediorientale',
                coverage: 'Palestina',
                difficultyLevel: 'Facile',
                prepTime: '15 minuti',
                portion: '4 persone'
            }
        }
    ],
    'Cucina Asiatica': [
        {
            id: 'sushi-rolls',
            title: 'Sushi Rolls',
            image: 'https://images.unsplash.com/photo-1564489563601-c53cfc451e93?q=80&w=1024&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
            shortDescription: 'Rotoli di riso e pesce crudo tipici della cucina giapponese.',
            ingredients: ['300g di riso per sushi', '80ml di aceto di riso', '2 cucchiai di zucchero', '1 cucchiaino di sale', 'Fogli di alga nori', '200g di salmone fresco', 'Avocado', 'Cetriolo', 'Salsa di soia', 'Wasabi', 'Zenzero marinato'],
            preparazione: [
                'Cuocere il riso e condirlo con la miscela di aceto, zucchero e sale.',
                'Posizionare il foglio di nori sul tappetino di bambù.',
                'Distribuire uno strato sottile di riso sull\'alga, lasciando libero 1 cm dal bordo superiore.',
                'Disporre strisce di salmone, avocado e cetriolo sulla parte inferiore del foglio.',
                'Arrotolare il sushi con il tappetino, sigillando il bordo con acqua.',
                'Tagliare il rotolo in pezzi e servire con salsa di soia, wasabi e zenzero.'
            ],
            metadata: {
                creator: 'Sushi Chef',
                subject: 'Sushi, Cucina giapponese',
                coverage: 'Giappone',
                difficultyLevel: 'Media',
                prepTime: '1 ora',
                portion: '4 persone'
            }
        },
        {
            id: 'curry-vegetariano',
            title: 'Curry Vegetariano',
            image: 'https://plus.unsplash.com/premium_photo-1694506374740-24176e5222e7?q=40&w=1024&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
            shortDescription: 'Speziato e cremoso, un piatto tipico della cucina indiana.',
            ingredients: ['1 cipolla', '2 spicchi d\'aglio', '1 peperone', '1 zucchina', '200g '
            + 'di piselli', '200g di fagioli', '200g di patate', '200ml di latte di cocco', '2 cucchiai di curry in polvere', '1 cucchiaio di curcuma', 'Sale q.b.', 'Olio d\'oliva'],
            preparazione: [
                'Soffriggere cipolla e aglio in olio d\'oliva.',
                'Aggiungere le verdure tagliate a pezzie cuocere per 5 minuti.',
                'Aggiungere le spezie e mescolare bene.',
                'Versare il latte di cocco e cuocere a fuoco lento per 20 minuti.',
                'Servire con riso basmati e pane naan.'
            ],
            metadata: {
                creator: 'Chef Indiano',
                subject: 'Curry, Cucina vegetariana',
                coverage: 'India',
                difficultyLevel: 'Facile',
                prepTime: '30 minuti',
                portion: '4 persone'
            }
        }
    ],
    'Cucina Greca': [
        {
            id: 'insalata-greca',
            title: 'Insalata Greca',
            image: 'https://images.unsplash.com/photo-1625944230945-1b7dd3b949ab?q=80&w=3560&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
            shortDescription: 'Un\'insalata fresca con feta, olive e verdure.',
            ingredients: ['Pomodori', 'Cetrioli', 'Cipolla rossa', 'Peperoni', 'Olive kalamata', 'Feta', 'Origano', 'Olio extravergine d\'oliva'],
            preparazione: [
                'Tagliare i pomodori, cetrioli, cipolla e peperoni a pezzi.',
                'Aggiungere le olive e la feta sbriciolata.',
                'Condire con olio d\'oliva e origano.',
                'Mescolare delicatamente e servire.'
            ],
            metadata: {
                creator: 'Chef Greco',
                subject: 'Antipasti, Insalate',
                coverage: 'Grecia',
                difficultyLevel: 'Facile',
                prepTime: '10 minuti',
                portion: '4 persone'
            }
        },
        {
            id: 'tzatziki',
            title: 'Tzatziki',
            image: 'https://media.istockphoto.com/id/1056787708/it/foto/salsa-di-yogurt-con-erbe-aromatiche-spezie-e-cetriolo-primo-up-sul-tavolo-raita-vista.webp?a=1&b=1&s=612x612&w=0&k=20&c=DXVwj03hkHi-tCFsObQSioWfVyM9gGLLtcMu-Q0IAmU=',
            shortDescription: 'Salsa cremosa di yogurt, cetrioli e aglio.',
            ingredients: ['Yogurt greco', 'Cetriolo', 'Aglio', 'Succo di limone', 'Olio extravergine d\'oliva', 'Aneto', 'Sale'],
            preparazione: [
                'Grattugiare il cetriolo e strizzarlo per eliminare l\'acqua.',
                'Mescolare con yogurt, aglio tritato, succo di limone e aneto.',
                'Aggiungere sale e olio, mescolare bene.',
                'Lasciare riposare in frigo prima di servire.'
            ],
            metadata: {
                creator: 'Chef Greco',
                subject: 'Salse, Antipasti',
                coverage: 'Grecia',
                difficultyLevel: 'Facile',
                prepTime: '15 minuti',
                portion: '4 persone'
            }
        },
        {
            id: 'souvlaki',
            title: 'Souvlaki',
            image: 'https://images.unsplash.com/photo-1603360946369-dc9bb6258143?q=80&w=2999&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
            shortDescription: 'Spiedini di carne marinata alla griglia.',
            ingredients: ['Petto di pollo o maiale', 'Succo di limone', 'Origano', 'Aglio', 'Olio extravergine d\'oliva', 'Sale', 'Pepe'],
            preparazione: [
                'Tagliare la carne a cubetti e marinare con olio, limone, aglio e spezie.',
                'Infilzare i cubetti sugli spiedini.',
                'Cuocere alla griglia fino a doratura.',
                'Servire con pita e tzatziki.'
            ],
            metadata: {
                creator: 'Chef Greco',
                subject: 'Secondi piatti, Grigliate',
                coverage: 'Grecia',
                difficultyLevel: 'Media',
                prepTime: '30 minuti + marinatura',
                portion: '4 persone'
            }
        },
        {
            id: 'gyros',
            title: 'Gyros',
            image: 'https://media.istockphoto.com/id/169947181/it/foto/un-primo-piano-di-un-giroscopio-pita-sandwich-con-insalata-e-patatine-fritte.webp?a=1&b=1&s=612x612&w=0&k=20&c=rz0e3oFc2_WOrr6zCdnLNnJdKKo_TPa7CvyDPVd40ps=',
            shortDescription: 'Carne speziata cotta su spiedo e servita in pita.',
            ingredients: ['Cosce di pollo o maiale', 'Yogurt greco', 'Succo di limone', 'Aglio', 'Origano', 'Paprika', 'Olio extravergine d\'oliva', 'Pita'],
            preparazione: [
                'Marinare la carne con yogurt, limone, aglio e spezie per alcune ore.',
                'Cuocere allo spiedo o alla griglia.',
                'Affettare sottilmente e servire in pita con tzatziki e verdure.'
            ],
            metadata: {
                creator: 'Chef Greco',
                subject: 'Street food, Secondi piatti',
                coverage: 'Grecia',
                difficultyLevel: 'Media',
                prepTime: '45 minuti + marinatura',
                portion: '4 persone'
            }
        },
        {
            id: 'pita',
            title: 'Pita',
            image: 'https://media.istockphoto.com/id/139860616/it/foto/pane-pitta.webp?a=1&b=1&s=612x612&w=0&k=20&c=0PZjOO3F70qB4Mqdz1LGTtrlSWVe7l2wZodPAv_BXaY=',
            shortDescription: 'Pane morbido perfetto per accompagnare piatti greci.',
            ingredients: ['Farina 00', 'Lievito di birra', 'Acqua', 'Sale', 'Zucchero', 'Olio extravergine d\'oliva'],
            preparazione: [
                'Mescolare gli ingredienti e impastare fino a ottenere un composto liscio.',
                'Lasciare lievitare per 1 ora.',
                'Dividere in palline e stendere a forma rotonda.',
                'Cuocere in padella calda fino a doratura su entrambi i lati.'
            ],
            metadata: {
                creator: 'Chef Greco',
                subject: 'Pane, Accompagnamenti',
                coverage: 'Grecia',
                difficultyLevel: 'Facile',
                prepTime: '1 ora e 30 minuti',
                portion: '6 persone'
            }
        }
    ],
    'Cucina Messicana': [
        {
            id: 'tacos-al-pastor',
            title: 'Tacos al Pastor',
            image: 'https://plus.unsplash.com/premium_photo-1681406994521-82c20814605d?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8dGFjb3MlMjBhbCUyMHBhc3RvcnxlbnwwfHwwfHx8MA%3D%3D',
            shortDescription: 'Tacos con carne di maiale marinata e ananas.',
            ingredients: ['500g di carne di maiale', '2 peperoncini guajillo', '1 peperoncino ancho', '100ml succo di ananas', '1 cucchiaino di cumino', 'Tortillas di mais', 'Cipolla e coriandolo'],
            preparazione: [
                'Marinare la carne con spezie e succo di ananas per almeno 2 ore.',
                'Cuocere la carne su una griglia fino a doratura.',
                'Servire su tortillas con cipolla e coriandolo.',
            ],
            metadata: {
                creator: 'Chef Messicano',
                subject: 'Street food, Tacos',
                coverage: 'Messico',
                difficultyLevel: 'Media',
                prepTime: '30 minuti + marinatura',
                portion: '4 persone'
            }
        },
        {
            id: 'guacamole',
            title: 'Guacamole',
            image: 'https://plus.unsplash.com/premium_photo-1681406689584-2f7612fa98a4?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8Z3VhY2Ftb2xlfGVufDB8fDB8fHww',
            shortDescription: 'Salsa di avocado con lime e coriandolo.',
            ingredients: ['2 avocado maturi', '1 lime', '1 cipolla rossa', '1 pomodoro', 'Coriandolo fresco', 'Sale q.b.'],
            preparazione: [
                'Schiacciare l\'avocado e mescolarlo con lime e sale.',
                'Aggiungere cipolla, pomodoro e coriandolo tritati.',
                'Servire con nachos o tortillas.',
            ],
            metadata: {
                creator: 'Chef Messicano',
                subject: 'Salse, Antipasti',
                coverage: 'Messico',
                difficultyLevel: 'Facile',
                prepTime: '10 minuti',
                portion: '4 persone'
            }
        }
    ],
    'Cucina Francese': [
        {
            id: 'coq-au-vin',
            title: 'Coq au Vin',
            image: 'https://www.recipetineats.com/tachyon/2016/09/Coq-au-Vin_00.jpg?resize=900%2C1260&zoom=1',
            shortDescription: 'Pollo brasato nel vino rosso con verdure.',
            ingredients: ['1 pollo intero', '500ml di vino rosso', '200g di funghi', '100g di pancetta', '2 carote', '1 cipolla', 'Timo e alloro'],
            preparazione: [
                'Rosolare la pancetta e le verdure in padella.',
                'Aggiungere il pollo a pezzi e farlo dorare.',
                'Versare il vino rosso e cuocere lentamente per 2 ore.',
            ],
            metadata: {
                creator: 'Chef Francese',
                subject: 'Piatti tradizionali',
                coverage: 'Francia',
                difficultyLevel: 'Media',
                prepTime: '2 ore',
                portion: '4 persone'
            }
        },
        {
            id: 'crepes-sucrees',
            title: 'Crêpes Sucrées',
            image: 'https://i.pinimg.com/736x/b5/b1/4a/b5b14a303cb3e3c5316c8ed986fbecc7.jpg',
            shortDescription: 'Dolci sottili perfette con zucchero e limone.',
            ingredients: ['200g di farina', '2 uova', '300ml di latte', '30g di burro fuso', '1 cucchiaio di zucchero', '1 pizzico di sale'],
            preparazione: [
                'Mescolare gli ingredienti fino a ottenere una pastella liscia.',
                'Cuocere in padella calda con poco burro.',
                'Servire con zucchero e limone o marmellata.',
            ],
            metadata: {
                creator: 'Chef Francese',
                subject: 'Dolci, Dessert',
                coverage: 'Francia',
                difficultyLevel: 'Facile',
                prepTime: '20 minuti',
                portion: '4 persone'
            }
        },
        {
            id: 'boeuf-bourguignon',
            title: 'Boeuf Bourguignon',
            image: 'https://i.pinimg.com/736x/34/51/b3/3451b374c688e6817c228b424b5d2e7e.jpg',
            shortDescription: 'Stufato di manzo al vino rosso, tipico della Borgogna.',
            ingredients: ['1kg di manzo', '500ml di vino rosso', '2 carote', '1 cipolla', '2 spicchi d’aglio', '200g di pancetta', '200g di funghi', '2 cucchiai di farina', 'Olio d’oliva', 'Sale e pepe q.b.'],
            preparazione: [
                'Tagliare la carne a cubetti e rosolarla con la pancetta.',
                'Aggiungere cipolla, aglio e carote tagliati a pezzi.',
                'Spolverare con farina e mescolare bene.',
                'Versare il vino rosso e cuocere a fuoco basso per 2 ore.',
                'Aggiungere i funghi a fette e continuare la cottura per altri 30 minuti.',
                'Servire caldo con pane o patate.'
            ],
            metadata: {
                creator: 'Chef Francese',
                subject: 'Secondi piatti, Stufati',
                coverage: 'Francia',
                difficultyLevel: 'Media',
                prepTime: '3 ore',
                portion: '4 persone'
            }
        }
    ],
    'Cucina Indiana': [
        {
            id: 'butter-chicken',
            title: 'Butter Chicken',
            image: 'https://i.pinimg.com/736x/6c/fa/a4/6cfaa49eea1d9539e33dbb9690e439ee.jpg',
            shortDescription: 'Pollo cremoso in salsa di pomodoro e burro.',
            ingredients: ['500g di pollo', '200ml panna', '3 pomodori', '50g di burro', '2 cucchiai di garam masala', 'Aglio e zenzero'],
            preparazione: [
                'Marinare il pollo con spezie per 1 ora.',
                'Rosolare il pollo e aggiungere pomodori e burro.',
                'Cuocere a fuoco lento e aggiungere la panna.',
            ],
            metadata: {
                creator: 'Chef Indiano',
                subject: 'Piatti principali',
                coverage: 'India',
                difficultyLevel: 'Media',
                prepTime: '40 minuti',
                portion: '4 persone'
            }
        },
        {
            id: 'samosa',
            title: 'Samosa',
            image: 'https://i.pinimg.com/736x/1c/68/fc/1c68fc95d5e356e843e97679b519959f.jpg',
            shortDescription: 'Fagottini fritti ripieni di patate speziate.',
            ingredients: ['200g di farina', '2 patate', '50g di piselli', '1 cucchiaio di curcuma', '1 cucchiaio di cumino', 'Olio per friggere'],
            preparazione: [
                'Preparare l\'impasto e lasciarlo riposare.',
                'Cuocere il ripieno di patate e spezie.',
                'Formare i samosa e friggerli fino a doratura.',
            ],
            metadata: {
                creator: 'Chef Indiano',
                subject: 'Antipasti, Street food',
                coverage: 'India',
                difficultyLevel: 'Media',
                prepTime: '30 minuti',
                portion: '4 persone'
            }
        },
        {
            id: 'chicken-tikka-masala',
            title: 'Chicken Tikka Masala',
            image: 'https://i.pinimg.com/736x/26/a1/0a/26a10a9a150613be65cc49a363a03fbd.jpg',
            shortDescription: 'Pollo marinato in spezie e yogurt con salsa cremosa al pomodoro.',
            ingredients: ['500g di pollo', '200g di yogurt', '2 cucchiai di garam masala', '1 cucchiaino di curcuma', '1 cucchiaino di cumino', '1 cucchiaino di paprika', '400g di passata di pomodoro', '1 cipolla', '2 spicchi d’aglio', '200ml di panna', 'Olio d’oliva', 'Sale q.b.'],
            preparazione: [
                'Marinare il pollo con yogurt e spezie per almeno 2 ore.',
                'Cuocere il pollo in una padella fino a doratura.',
                'Soffriggere cipolla e aglio, poi aggiungere la passata di pomodoro.',
                'Cuocere per 10 minuti, quindi unire il pollo e la panna.',
                'Lasciar cuocere per altri 10 minuti a fuoco basso.',
                'Servire con riso basmati o pane naan.'
            ],
            metadata: {
                creator: 'Chef Indiano',
                subject: 'Secondi piatti, Curry',
                coverage: 'India',
                difficultyLevel: 'Media',
                prepTime: '40 minuti + marinatura',
                portion: '4 persone'
            }
        }
    ]
}

function setActiveMenu(clickedLink) {
    // Rimuovi la classe 'active' da tutti i link del menu
    const navLinks = document.querySelectorAll('nav a');
    navLinks.forEach(link => link.classList.remove('active'));

    // Aggiungi la classe 'active' al link cliccato
    clickedLink.classList.add('active');
}
// Aggiungi gli event listener ai link del menu
document.querySelector('nav a[href="#home"]').addEventListener('click', function() {
    setActiveMenu(this);
    showHomePage(); // Chiama la tua funzione per mostrare la home
});

document.querySelector('nav a[href="#collezione"]').addEventListener('click', function() {
    setActiveMenu(this);
    showRecipes('Collezione'); // Chiama la tua funzione per mostrare la collezione
});

document.querySelector('nav a[href="#contatti"]').addEventListener('click', function() {
    setActiveMenu(this);
    showContactPage(); // Chiama la tua funzione per mostrare i contatti
});

// Function to show the home page
function showHomePage() {
    document.getElementById('home-section').style.display = 'block';
    document.getElementById('recipe-section').style.display = 'none';
    document.getElementById('contact-section').style.display = 'none';
    document.getElementById('project-section').style.display = 'none';

    setActiveMenu(document.querySelector('nav a[href="#home"]'));
    updateBreadcrumbs([{ label: 'Home', action: 'showHomePage()' }]);

}

// Function to show the contact page
function showContactPage() {
    document.getElementById('home-section').style.display = 'none';
    document.getElementById('recipe-section').style.display = 'none';
    document.getElementById('contact-section').style.display = 'block';
    document.getElementById('project-section').style.display = 'none';

    setActiveMenu(document.querySelector('nav a[href="#contatti"]'));
    updateBreadcrumbs([{ label: 'Home', action: 'showHomePage()' }, { label: 'Contatti', action: 'showContactPage()' }]);
}

function showProjectPage() {
    updateBreadcrumbs([{ label: 'Home', action: 'showHomePage()' }, { label: 'Progetti', action: 'showProjectPage()' }]);

    document.getElementById('home-section').style.display = 'none';
    document.getElementById('recipe-section').style.display = 'none';
    document.getElementById('contact-section').style.display = 'none';
    document.getElementById('project-section').style.display = 'block';

    updateBreadcrumbs([{ label: 'Home', action: 'showHomePage()' }, { label: 'Progetto', action: 'showProjectPage()' }]);

}

// Function to show the recipe collection
function showRecipes(cuisine) {
    document.getElementById('home-section').style.display = 'none';
    document.getElementById('recipe-section').style.display = 'block';
    document.getElementById('contact-section').style.display = 'none';
    document.getElementById('project-section').style.display = 'none';

    // Aggiorna breadcrumbs
    updateBreadcrumbs([
        { label: 'Home', action: 'showHomePage()' },
        { label: cuisine, action: `showRecipes('${cuisine}')` }
    ]);

    let recipes = ricette[cuisine];
    if (cuisine === 'Collezione') {
        recipes = Object.values(ricette).flat();
    }
    const recipesContainer = document.getElementById('recipes-container');
    const recipeTitle = document.getElementById('recipe-title');

    recipeTitle.textContent = cuisine;
    recipesContainer.innerHTML = '';

    recipes.forEach(recipe => {
        const recipeCard = document.createElement('div');
        recipeCard.classList.add('recipe-card');
        recipeCard.innerHTML = `
            <div onclick="showRecipeDetail('${cuisine}', '${recipe.id}')">
                <img src="${recipe.image}" alt="${recipe.title}" >
                <div class="recipe-info">
                <h3>${recipe.title}</h3>
                <p>${recipe.shortDescription}</p>
                </div>
            </div>
            `;
        recipesContainer.appendChild(recipeCard);
    });

    // Genera keywords
    generateKeywords();

    // Mostra tutte le ricette inizialmente
    document.querySelectorAll('.keyword').forEach(k => k.classList.remove('active'));
    document.querySelector('.keyword:first-child')?.classList.add('active'); // Attiva "Tutte"
    updateRecipeGrid(recipes);

    setActiveMenu(document.querySelector('nav a[href="#collezione"]'));
}

// Function to show the recipe detail modal
function showRecipeDetail(cuisine, recipeId) {
    // guarda se la ricetta è la pasta carbonara
    if (recipeId === 'pasta-carbonara') {
        console.log('La pasta carbonara è la migliore!');
        //go to paginaDettaglio.html
        window.location.href = 'paginaDettaglio.html';
        return;
    }

    const recipe = ricette[cuisine].find(recipe => recipe.id === recipeId);
    const recipeDetailContent = document.getElementById('recipe-detail-content');

    recipeDetailContent.innerHTML = `
            <h2>${recipe.title}</h2>
            <img src="${recipe.image}" alt="${recipe.title}" class="recipe-image">
            <h3>Ingredienti</h3>
            <ul>
                ${recipe.ingredients.map(ingredient => `<li>${ingredient}</li>`).join('')}
            </ul>
            <h3>Preparazione</h3>
            <ol>
                ${recipe.preparazione.map(step => `<li>${step}</li>`).join('')}
            </ol>
            <h3>Dettagli</h3>
            <ul>
                <li><strong>Creato da:</strong> ${recipe.metadata.creator}</li>
                <li><strong>Categoria:</strong> ${recipe.metadata.subject}</li>
                <li><strong>Origine:</strong> ${recipe.metadata.coverage}</li>
                <li><strong>Livello di difficoltà:</strong> ${recipe.metadata.difficultyLevel}</li>
                <li><strong>Tempo di preparazione:</strong> ${recipe.metadata.prepTime}</li>
                <li><strong>Porzioni:</strong> ${recipe.metadata.portion}</li>
            </ul>
        `;

    document.getElementById('recipe-modal').style.display = 'block';
}

// Function to close the recipe detail modal
function closeRecipeModal() {
    document.getElementById('recipe-modal').style.display = 'none';
}

// Initial page load
showHomePage();

function updateBreadcrumbs(path) {
    const breadcrumbs = document.getElementById('breadcrumbs');
    const basePath = [{ label: 'Home', action: 'showHomePage()' }];
    // Rimuovi il duplicate check
    const fullPath = path[0].label === 'Home' ? path : [...basePath, ...path];

    breadcrumbs.innerHTML = fullPath.map((item, index) =>
            `<a href="#" onclick="${item.action}">${item.label}</a> ${index < fullPath.length - 1 ? '›' : ''}`
    ).join(' ');
}

// Modifica generateKeywords
function generateKeywords() {
    const allKeywords = new Set();
    allKeywords.add('Tutte'); // Aggiungi "Tutte" come primo elemento

    Object.values(ricette).forEach(cuisine => {
        cuisine.forEach(recipe => {
            recipe.metadata.subject.split(', ').forEach(kw => {
                if(kw.trim() !== '') allKeywords.add(kw.trim());
            });
        });
    });

    const containers = document.querySelectorAll('.keywords-container');
    containers.forEach(container => {
        container.innerHTML = [...allKeywords].map(kw =>
                `<div class="keyword" onclick="filterByKeyword('${kw}')">${kw}</div>`
        ).join('');
    });
}

function filterByLetter(letter) {
    const currentCuisine = document.getElementById('recipe-title').textContent;
    const recipes = currentCuisine === 'Collezione' ?
            Object.values(ricette).flat() :
            ricette[currentCuisine];

    const filtered = letter === 'ALL' ? recipes :
            recipes.filter(recipe =>
                    recipe.title.toUpperCase().startsWith(letter)
            );

    updateRecipeGrid(filtered);
}

// Modifica filterByKeyword
function filterByKeyword(keyword) {
    const keywords = document.querySelectorAll('.keyword');
    keywords.forEach(k => k.classList.remove('active'));

    const currentCuisine = document.getElementById('recipe-title').textContent;
    const recipes = currentCuisine === 'Collezione' ?
            Object.values(ricette).flat() :
            ricette[currentCuisine];

    let filtered = recipes;
    if(keyword !== 'Tutte') {
        filtered = recipes.filter(recipe =>
                recipe.metadata.subject.includes(keyword)
        );

        [...keywords].find(k => k.textContent === keyword)?.classList.add('active');
    } else {
        // Seleziona esplicitamente "Tutte"
        document.querySelector('.keyword:first-child')?.classList.add('active');
    }

    updateRecipeGrid(filtered);
}

// Modifica la funzione updateRecipeGrid
function updateRecipeGrid(recipes) {
    const container = document.getElementById('recipes-container');
    container.innerHTML = recipes.map(recipe => {
        // Trova la cucina di appartenenza della ricetta
        const cuisine = Object.keys(ricette).find(key =>
                ricette[key].some(r => r.id === recipe.id) );

        return `
        <div class="recipe-card" onclick="showRecipeDetail('${cuisine}', '${recipe.id}')">
            <img src="${recipe.image}" alt="${recipe.title}">
            <div class="recipe-info">
                <h3>${recipe.title}</h3>
                <p>${recipe.shortDescription}</p>
                <div class="keywords">${recipe.metadata.subject.split(', ').map(kw =>
                `<span class="keyword-tag">${kw}</span>`
        ).join('')}</div>
            </div>
        </div>`
    }).join('');
}

document.addEventListener('DOMContentLoaded', generateKeywords);
