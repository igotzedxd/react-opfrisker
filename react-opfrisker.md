# Hvad er React og hvad bruges det til?

    - React er et JavaScript-bibliotek til at bygge hjemmesider / brugerflader.

# Hvad er et komponent i React?

    - Et komponent er en genbrugelig byggeblok til at opbygge sider i React.

# Hvilke forskellige metoder kan du bruge til at style dine React-komponenter? Diskuter fordele og ulemper ved mindst to metoder.

    - Global Styling
        + Root variables kan bruges overalt. Mindre repetitivt, da mange styles kan genbruges.
        - Specificity, Mindre overskueligt i større projekter

    - Module Styling
        + Scope / specificity. Følger med component hvis man har module.css og .jsx fil i en mappe
        - Sværere at genbruge css i andre komponenter.

    - Tailwind css
        + Hurtigt at skrive, separat fil for css ikke nødvendigt.
        - Kræver opsætning. Component ser ikke så strømlinet ud. Mindre kreativitet i nogle sammenhænge.

    - Styled Components
        + Lettere at integrere JavaScript. Man kan selv navngive sine "HTML" elementer. Kan improve performance og SEO.
        - Kræver dependencies. Components kommer hurtigt til at fylde meget

# Hvad er state i React?

    - En state indeholder noget data af enhver datatype (string, number, object, array etc). States sørger for at opdatere værdier, hvor denne state bliver brugt, når værdien ændres.

# Hvad er props i React?

    - Props er værdier man kan sende med components når man kalder dem. Et component der skal bruge en filtrering af items kunne se sådan ud: <Items filteredItems={filteredItems} />. Nu har Items componentet adgang til filteredItems

# Hvordan adskiller state sig fra props?

    - State er intern til en komponent og håndteres (mest) af den. Props er eksterne og gives ned til komponenten for at give den kontekst eller data fra dens parent.

# Hvad er hooks i React?

    - En hook er en form for funktion som kan udnyttes i komponenter. Indbyggede hooks kan have mange forskellige funktioner. Man kan også lave sin egen hook, fx useFetch til at hente data fra endpoints.

# Forklar, hvordan useState og useEffect hooks fungerer med eksempler.

    // definer states
    const [filter, setFilter] = useState(null);
    const [items, setItems] = useState(null);

    useEffect(() => {
        // do something
        const newItems = filter ? data.filter((item) => item.category === filter) : data;
        setItems(newItems);
    }, [filter]);
    // ^^ Jeg har givet min useEffect en dependency "filter" som er vores filter state. Hvis brugeren ændrer hvilket filter vi skal apply, kører denne useEffect igen, og hvis brugeren vælger et specifikt filter fremfor "Alle", bliver vores items state opdateret til at indeholde newItems

# Hvad er JSX?

    - JSX bruges primært i React-applikationer, som en udviddelse af JavaScript. Dette gør at udvikleren kan skrive en kombination af JavaScript og HTML

# Hvordan adskiller JSX sig fra almindelig JavaScript?

    - I JSX kan du direkte skrive HTML-lignende syntaks inden for JavaScript, hvilket gør det lettere at oprette og manipulere DOM-elementer. I almindelig JavaScript skal du bruge metoder som document.querySelector for at vælge og manipulere DOM-elementer.

# Hvad er console.log() og hvilken rolle spiller det i JavaScript udvikling?

    - console.log() er en fordel for udvikleren når man debugger. Har man en kæde af funktioner, kan man smide console.logs ind i hver af dem, og se hvor langt man kommer i funktionerne.

# Hvornår er det nyttigt at bruge console.log()?

    - Når man debugger eller skal tjekke sin datatype eksempelvis
