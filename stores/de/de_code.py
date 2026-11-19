# Black Week 2026 · Arox DE · German strings for the shared code (sections/snippets/assets) used in the DE build.
# Each entry: file (relative to the repo root) → list of (Danish, German) literal replacements, applied in order.
# German from the copy agent arox-fitness-de-copy (du-form, sachlich, kurz; deadlines with date, time and time zone).

ALL = [
    ("'Dage,Timer,Min,Sek'", "'Tage,Std,Min,Sek'"),
]

FILES = {
    'snippets/bw-head.liquid': [
        ("top: 'Tidlig adgang starter om', label: 'Fredag 20.11 kl. 12:00'", "top: 'Early Access startet in', label: 'Freitag, 20.11., 12:00 Uhr'"),
        ("top: 'Tidlig adgang slutter om', label: 'Åbent for alle søndag 22.11 kl. 20:00'", "top: 'Early Access endet in', label: 'Für alle ab Sonntag, 22.11., 20:00 Uhr'"),
        ("top: 'Black Week slutter om', label: 'Black Week slutter mandag 30.11 kl. 23:59'", "top: 'Black Week endet in', label: 'Black Week endet am Montag, 30.11., 23:59 Uhr'"),
    ],
    'snippets/bw-countdown.liquid': [
        ("Black Week slutter mandag 30.11 kl. 23:59", "Black Week endet am Montag, 30.11., 23:59 Uhr"),
        ("Black Week slutter om", "Black Week endet in"),
        ("Tidlig adgang slutter om", "Early Access endet in"),
        ("Tidlig adgang starter om", "Early Access startet in"),
    ],
    'snippets/bw-offer.liquid': [
        ("echo 'Limited edition'", "echo 'Limited Edition'"),
        ("echo '3 for 2'", "echo '3 für 2'"),
        ("echo '4 for 2'", "echo '4 für 2'"),
    ],
    'sections/bw-gift-cart.liquid': [("Arox Thermo stålflaske 1,06 L", "AROX Trinkflasche 1000 ml")],
    'sections/bw-offer-progress.liquid': [
        ("Du har valgt 0 af {{ bw_n }} produkter", "Du hast 0 von {{ bw_n }} Produkten gewählt"),
        (">Tilføjet<", ">Hinzugefügt<"),
    ],
    'snippets/bw-coll-grid.liquid': [
        ('aria-label="Sider"', 'aria-label="Seiten"'),
        ('>Forrige</a>', '>Zurück</a>'),
        ('<span>Side {{ paginate.current_page }} af {{ paginate.pages }}</span>', '<span>Seite {{ paginate.current_page }} von {{ paginate.pages }}</span>'),
        ('>Næste</a>', '>Weiter</a>'),
    ],
    'snippets/bw-coll-head.liquid': [
        ('aria-label="Brødkrumme"', 'aria-label="Brotkrümelnavigation"'),
        ('>Forside</a>', '>Startseite</a>'),
    ],
    'snippets/bw-coll-toolbar.liquid': [
        ('<span>Fra</span>', '<span>Von</span>'),
        ('<span>Til</span>', '<span>Bis</span>'),
        ('>Vis varer</button>', '>Produkte anzeigen</button>'),
        ('>Ryd {{ bw_label | downcase }}</a>', '>{{ bw_label }} zurücksetzen</a>'),
        ('>Ryd alle</a>', '>Alle zurücksetzen</a>'),
        ('Sortér: {{ bw_sort_name }}', 'Sortieren: {{ bw_sort_name }}'),
        ('{% if bw_cnt == 1 %}produkt{% else %}produkter{% endif %}', '{% if bw_cnt == 1 %}Produkt{% else %}Produkte{% endif %}'),
    ],
    'snippets/bw-product-card.liquid': [
        ('aria-label="Læg {{ product.title | escape }} i kurven"', 'aria-label="{{ product.title | escape }} in den Warenkorb legen"'),
        ('<span>Vælg {% if product.options.size == 1 %}{{ product.options.first | downcase }}{% else %}variant{% endif %}</span>', '<span>{% if product.options.size == 1 %}{{ product.options.first }}{% else %}Variante{% endif %} wählen</span>'),
        ('aria-label="Luk"', 'aria-label="Schließen"'),
        ('{% if bw_count == 1 %}anmeldelse{% else %}anmeldelser{% endif %}', '{% if bw_count == 1 %}Bewertung{% else %}Bewertungen{% endif %}'),
        ("when 'sort', 'black'", "when 'sort', 'black', 'schwarz'"),
        ("when 'light grey', 'lysegrå'", "when 'light grey', 'lysegrå', 'hellgrau'"),
        ("when 'ranger green'", "when 'ranger green', 'dusty olive', 'olivgrün', 'dunkelgrün'"),
        ("when 'navy', 'navy blue', 'navy blå'", "when 'navy', 'navy blue', 'navy blå', 'navy blau', 'dunkelblau', 'marineblau'"),
        ("when 'dark brown'", "when 'dark brown', 'dunkelbraun'"),
        ("when 'brown'", "when 'brown', 'braun'"),
        ("when 'dark grey'", "when 'dark grey', 'dunkelgrau'"),
        ("when 'grå', 'grey', 'gray'", "when 'grå', 'grey', 'gray', 'grau', 'graue'"),
        ("when 'gul', 'yellow'", "when 'gul', 'yellow', 'gelb'"),
        ("when 'lilla', 'purple'", "when 'lilla', 'purple', 'lila'"),
        ("when 'hvid', 'white'", "when 'hvid', 'white', 'weiss', 'weiß'"),
    ],
    'assets/bw.js': [
        ("a.textContent = 'Du har valgt ' + inSet + ' af ' + n + ' produkter';", "a.textContent = 'Du hast ' + inSet + ' von ' + n + ' Produkten gewählt';"),
        ("|| 'Rabatten er trukket i kurven';", "|| 'Der Rabatt ist im Warenkorb abgezogen';"),
        ("|| 'Vælg [n] mere')", "|| 'Noch [n] wählen')"),
        ("'Varen kunne ikke lægges i kurven.'", "'Das Produkt konnte nicht in den Warenkorb gelegt werden.'"),
        ("/størrelsesguide|size ?guide/i", "/størrelsesguide|größentabelle|groessentabelle|size ?guide/i"),
    ],
}
