# Black Week 2026 · Arox SE · Swedish strings for the shared code (sections/snippets/assets).
# Each entry: file (relative to the repo root) → list of (Danish, Swedish) literal replacements, applied in order.
# Price formatting and other patterns that apply to every file are in build.py (MONEY, GLOBAL).

ALL = [
    # countdown units / dates used in several files
    ("'Dage,Timer,Min,Sek'", "'Dagar,Tim,Min,Sek'"),
]

FILES = {
    'snippets/bw-head.liquid': [
        ("top: 'Tidlig adgang starter om', label: 'Fredag 20.11 kl. 12:00'", "top: 'Tidig tillgång startar om', label: 'Fredag 20/11 kl. 12.00'"),
        ("top: 'Tidlig adgang slutter om', label: 'Åbent for alle søndag 22.11 kl. 20:00'", "top: 'Tidig tillgång slutar om', label: 'Öppet för alla söndag 22/11 kl. 20.00'"),
        ("top: 'Black Week slutter om', label: 'Black Week slutter mandag 30.11 kl. 23:59'", "top: 'Black Week slutar om', label: 'Black Week slutar måndag 30/11 kl. 23.59'"),
    ],
    'snippets/bw-countdown.liquid': [
        ("Black Week slutter mandag 30.11 kl. 23:59", "Black Week slutar måndag 30/11 kl. 23.59"),
        ("Black Week slutter om", "Black Week slutar om"),
        ("Tidlig adgang slutter om", "Tidig tillgång slutar om"),
        ("Tidlig adgang starter om", "Tidig tillgång startar om"),
    ],
    'snippets/bw-offer.liquid': [
        ("echo '3 for 2'", "echo '3 för 2'"),
        ("echo '4 for 2'", "echo '4 för 2'"),
    ],
    'sections/bw-gift-cart.liquid': [("Arox Thermo stålflaske 1,06 L", "Arox stålflaska 1,06 l")],
    'sections/bw-gift-reminder.liquid': [("Arox Thermo stålflaske 1,06 L", "Arox stålflaska 1,06 l")],
    'sections/bw-header.liquid': [
        ('aria-label="Søg"', 'aria-label="Sök"'),
        ('aria-label="Luk menu"', 'aria-label="Stäng meny"'),
        ('aria-label="Kurv"', 'aria-label="Varukorg"'),
        ('aria-label="Hovedmenu"', 'aria-label="Huvudmeny"'),
        ('aria-label="Menu"', 'aria-label="Meny"'),
    ],
    'sections/bw-offer-progress.liquid': [
        ("Du har valgt 0 af {{ bw_n }} produkter", "Du har valt 0 av {{ bw_n }} produkter"),
        (">Tilføjet<", ">Tillagd<"),
    ],
    'sections/bw-pdp-crumb.liquid': [
        ('aria-label="Brødkrumme"', 'aria-label="Brödsmulor"'),
        ('>Forside</a>', '>Startsida</a>'),
    ],
    'sections/bw-product-group.liquid': [
        ("Vælg produkter i sektionen (vises kun i temaeditoren).", "Välj produkter i sektionen (visas bara i temaredigeraren)."),
    ],
    'snippets/bw-cart-gift.liquid': [
        ("Arox Thermo stålflaske 1,06 L", "Arox stålflaska 1,06 l"),
        ("Gratis Thermo stålflaske til de første 100 ordrer.", "Gratis stålflaska till de första 100 beställningarna."),
    ],
    'snippets/bw-cart-line.liquid': [
        (">Gratis gave</span>", ">Gratis gåva</span>"),
    ],
    'snippets/bw-cart-progress.liquid': [
        ("labels | default: 'Fri fragt|Hydration Bottle|3-pak strømper'", "labels | default: 'Fri frakt|Vattenflaska|Strumpor 3-pack'"),
        ("messages | default: '[beløb] til fri fragt|[beløb] til gratis Hydration Bottle|[beløb] til gratis 3-pak strømper'", "messages | default: '[beløb] kvar till fri frakt|[beløb] kvar till en gratis vattenflaska|[beløb] kvar till gratis strumpor'"),
        ("done | default: 'Du har fri fragt og 2 gratis gaver'", "done | default: 'Du har fri frakt och 2 gratis gåvor'"),
        (">Din gratis gave: {{ bw_label }}<", ">Din gratis gåva: {{ bw_label }}<"),
        (">Tilføj gave</button>", ">Lägg till gåva</button>"),
        ('aria-label="Vælg variant til {{ bw_label | escape }}"', 'aria-label="Välj variant för {{ bw_label | escape }}"'),
    ],
    'snippets/bw-coll-grid.liquid': [
        ('aria-label="Sider"', 'aria-label="Sidor"'),
        ('>Forrige</a>', '>Föregående</a>'),
        ('<span>Side {{ paginate.current_page }} af {{ paginate.pages }}</span>', '<span>Sida {{ paginate.current_page }} av {{ paginate.pages }}</span>'),
        ('>Næste</a>', '>Nästa</a>'),
    ],
    'snippets/bw-coll-head.liquid': [
        ('aria-label="Brødkrumme"', 'aria-label="Brödsmulor"'),
        ('>Forside</a>', '>Startsida</a>'),
    ],
    'snippets/bw-coll-toolbar.liquid': [
        ('<span>Fra</span>', '<span>Från</span>'),
        ('<span>Til</span>', '<span>Till</span>'),
        ('>Vis varer</button>', '>Visa produkter</button>'),
        ('>Ryd {{ bw_label | downcase }}</a>', '>Rensa {{ bw_label | downcase }}</a>'),
        ('>Ryd alle</a>', '>Rensa alla</a>'),
        ('Sortér: {{ bw_sort_name }}', 'Sortera: {{ bw_sort_name }}'),
    ],
    'snippets/bw-pdp-favs.liquid': [("Kundernes favoritter", "Kundfavoriter"), ("collections['cross-traeningbestsellers']", "collections['bestsellers']")],
    'snippets/bw-pdp-gift.liquid': [
        ("Gave i Black Week", "Gåva i Black Week"),
        ("Gratis Thermo stålflaske til de første 100 ordrer.", "Gratis stålflaska till de första 100 beställningarna."),
        ("alt: 'Thermo stålflaske 1,06 L'", "alt: 'Stålflaska 1,06 l'"),
    ],
    'snippets/bw-pdp-gpsr.liquid': [
        (">Producent<", ">Tillverkare<"),
        ("Sai Fitness ApS · CVR 42582735 · Skolegade 7, 8000 Aarhus C · support@aroxfitness.com", "Sai Fitness ApS · CVR 42582735 · Skolegade 7, 8000 Aarhus C, Danmark · support@aroxfitness.com"),
    ],
    'snippets/bw-pdp-mechanic.liquid': [
        ("'3 for 2 · betal for 2, få 3'", "'3 för 2 · betala för 2, få 3'"),
        ("'4 for 2 · betal for 2, få 4'", "'4 för 2 · betala för 2, få 4'"),
        ("Black Week-pris til og med mandag 30.11 kl. 23:59.", "Black Week-pris till och med måndag 30/11 kl. 23.59."),
        ("Vælg selv dine 10 ruller.", "Välj själv dina 10 rullar."),
        ("Black Week-prisen gælder automatisk – ingen kode nødvendig.", "Black Week-priset gäller automatiskt. Ingen kod behövs."),
        ("Læg 3 varer fra 3 for 2 i kurven, og betal for de 2 dyreste.", "Lägg 3 produkter från 3 för 2 i varukorgen och betala för de 2 dyraste."),
        ("Den billigste er gratis. Rabatten trækkes automatisk i kurven – ingen kode nødvendig.", "Den billigaste är gratis. Rabatten dras automatiskt i varukorgen. Ingen kod behövs."),
        ("Læg 4 varer fra 4 for 2 i kurven, og betal for de 2 dyreste.", "Lägg 4 produkter från 4 för 2 i varukorgen och betala för de 2 dyraste."),
        ("De 2 billigste er gratis. Rabatten trækkes automatisk i kurven – ingen kode nødvendig.", "De 2 billigaste är gratis. Rabatten dras automatiskt i varukorgen. Ingen kod behövs."),
        ("FRE 20.11 KL. 12:00", "FRE 20/11 KL. 12.00"),
        ("Presale for tilmeldte", "Presale för anmälda"),
        ("SØN 22.11 KL. 20:00", "SÖN 22/11 KL. 20.00"),
        ("Åbent for alle", "Öppet för alla"),
        ("MAN 30.11 KL. 23:59", "MÅN 30/11 KL. 23.59"),
        ("Slutter · Cyber Monday", "Slutar · Cyber Monday"),
        ("Limited edition · fast Black Week-pris", "Limited edition · fast Black Week-pris"),
        ("Limited blackout findes kun i Black Week.", "Limited blackout finns bara under Black Week."),
    ],
    'snippets/bw-pdp-price.liquid': [
        (">Salgspris {{", ">Pris {{"),
        (">Normalpris {{", ">Ordinarie pris {{"),
        ("Inkl. moms. Moms og levering beregnes ved kassen", "Inkl. moms. Frakt beräknas i kassan."),
    ],
    'snippets/bw-product-card.liquid': [
        ('aria-label="Læg {{ product.title | escape }} i kurven"', 'aria-label="Lägg {{ product.title | escape }} i varukorgen"'),
        ('<span>Vælg {% if', '<span>Välj {% if'),
        ('aria-label="Luk"', 'aria-label="Stäng"'),
        ('{% if bw_count == 1 %}anmeldelse{% else %}anmeldelser{% endif %}', '{% if bw_count == 1 %}recension{% else %}recensioner{% endif %}'),
        ("when 'sort', 'black'", "when 'sort', 'black', 'svart'"),
        ("when 'light grey', 'lysegrå'", "when 'light grey', 'lysegrå', 'ljusgrå'"),
        ("when 'ranger green'", "when 'ranger green', 'mörkgrön', 'dusty olive', 'olivgrön'"),
        ("when 'navy', 'navy blue', 'navy blå'", "when 'navy', 'navy blue', 'navy blå', 'marinblå', 'mörkblå'"),
        ("when 'dark brown'", "when 'dark brown', 'mörkbrun'"),
        ("when 'brown'", "when 'brown', 'brun'"),
        ("when 'dark grey'", "when 'dark grey', 'mörkgrå'"),
        ("when 'lilla', 'purple'", "when 'lilla', 'purple', 'lila'"),
        ("when 'hvid', 'white'", "when 'hvid', 'white', 'vit'"),
    ],
    'sections/cart-drawer.liquid': [
        ("Din kurv · 0 vare(r)", "Din varukorg · 0 produkt(er)"),
        ("Din kurv er tom", "Din varukorg är tom"),
        ("Fortsæt med at handle", "Fortsätt handla"),
        ("Din kurv · {{ cart.item_count }} vare(r)", "Din varukorg · {{ cart.item_count }} produkt(er)"),
        ("<span>Subtotal</span>", "<span>Delsumma</span>"),
        ("<span>Levering</span>", "<span>Frakt</span>"),
        ("{% if bw_ship_free %}Gratis{% else %}Fra ", "{% if bw_ship_free %}Gratis{% else %}Från "),
        ("<span>Total</span>", "<span>Totalt</span>"),
        ("Inkl. moms. Moms og levering beregnes ved kassen", "Inkl. moms. Frakt beräknas i kassan."),
        ("Gå til kassen", "Till kassan"),
        ("– rabat trukket automatisk", "· rabatten dras automatiskt"),
        ("default: 3500", "default: 7500"),
        ("all_products['stromper-3-pak']", "all_products['socks-3-pack']"),
    ],
    'assets/bw.js': [
        ("a.textContent = 'Du har valgt ' + inSet + ' af ' + n + ' produkter';", "a.textContent = 'Du har valt ' + inSet + ' av ' + n + ' produkter';"),
        ("|| 'Rabatten er trukket i kurven';", "|| 'Rabatten är dragen i varukorgen';"),
        ("|| 'Vælg [n] mere')", "|| 'Välj [n] till')"),
        ("'Varen kunne ikke lægges i kurven.'", "'Produkten kunde inte läggas i varukorgen.'"),
        ("/størrelsesguide|size ?guide/i", "/størrelsesguide|storleksguide|size ?guide/i"),
    ],
}
